import React, { useState, useEffect, useRef, useCallback } from "react"
import type { AllWidgetProps } from "jimu-core"
import {
  JimuMapViewComponent,
  loadArcGISJSAPIModules,
} from "jimu-arcgis"
import type { JimuMapView } from "jimu-arcgis"
import MeasureTools from "./components/measure-tools"

interface SegmentDetail {
  segmentNumber: number
  length: number
}

interface MeasurementDetail {
  id: string
  segments: SegmentDetail[]
  total: number
  area?: number
  perimeter?: number
}

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [activeButton, setActiveButton] = useState<
    "measureDistance" | "measureArea" | ""
  >("")
  const [selectedGraphicId, setSelectedGraphicId] = useState<string | null>(null)
  const [measurements, setMeasurements] = useState<MeasurementDetail[]>([])
  const [liveMeasurement, setLiveMeasurement] = useState<string | null>(null)
  const [isNearStartPoint, setIsNearStartPoint] = useState(false)
  const [startPoint, setStartPoint] = useState<__esri.Point | null>(null)
  const [isRightAngle, setIsRightAngle] = useState(false)
  const [rightAngleSuggestion, setRightAngleSuggestion] = useState<string | null>(null)
  const [rightAngleGraphic, setRightAngleGraphic] = useState<__esri.Graphic | null>(null)

  const sketchRef = useRef<__esri.SketchViewModel | null>(null)
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const labelsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)
  const graphicModuleRef = useRef<typeof __esri.Graphic | null>(null)
  const liveTextGraphicRef = useRef<__esri.Graphic | null>(null)

  const createHandlerRef = useRef<any>(null)
  const updateHandlerRef = useRef<any>(null)
  const deleteHandlerRef = useRef<any>(null)
  const clickHandlerRef = useRef<any>(null)
  const doubleClickHandlerRef = useRef<any>(null)

  // Armazena os gráficos para controle local
  const graphicsRef = useRef<__esri.Graphic[]>([])

  // Map para armazenar labels por gráfico
  const segmentLabelsMapRef = useRef<Map<string, __esri.Graphic[]>>(new Map())

  // Map para armazenar vértices por gráfico
  const vertexPointsMapRef = useRef<Map<string, __esri.Graphic[]>>(new Map())

  // Map para armazenar labels de área por gráfico
  const areaLabelsMapRef = useRef<Map<string, __esri.Graphic>>(new Map())



  // Ref para manter selectedGraphicId atualizado para handlers
  const selectedGraphicIdRef = useRef<string | null>(selectedGraphicId)
  useEffect(() => {
    selectedGraphicIdRef.current = selectedGraphicId
    console.log("[LOG] selectedGraphicId updated:", selectedGraphicId)
  }, [selectedGraphicId])

  const getGraphicId = (graphic: __esri.Graphic): string => {
    if (!graphic.attributes) {
      graphic.attributes = {}
    }
    if (!graphic.attributes.widgetId) {
      graphic.attributes.widgetId = `measure-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`
      console.log("[LOG] Generated new widgetId for graphic:", graphic.attributes.widgetId)
    }
    return graphic.attributes.widgetId
  }

  const formatDistance = (meters: number) =>
    meters >= 1000
      ? `${(meters / 1000).toFixed(2)} km`
      : `${meters.toFixed(2)} m`

  const formatArea = (sqmeters: number) =>
    sqmeters >= 1000000
      ? `${(sqmeters / 1000000).toFixed(2)} km²`
      : `${sqmeters.toFixed(2)} m²`


  const calculateSegments = (geometry: __esri.Geometry) => {
    if (!geometryEngineRef.current) return { segments: [], total: 0 }

    if (geometry.type === "polyline") {
      const polyline = geometry as __esri.Polyline
      const segments: SegmentDetail[] = []
      let total = 0
      const path = polyline.paths[0]
      if (!path || path.length < 2) return { segments, total }

      for (let i = 0; i < path.length - 1; i++) {
        const pt1 = path[i]
        const pt2 = path[i + 1]
        const segment = {
          type: "polyline",
          paths: [[pt1, pt2]],
          spatialReference: geometry.spatialReference,
        } as __esri.Polyline

        const segmentLength = geometryEngineRef.current.geodesicLength(segment, "meters")
        segments.push({ segmentNumber: i + 1, length: segmentLength })
        total += segmentLength
      }
      return { segments, total }
    } else if (geometry.type === "polygon") {
      const polygon = geometry as __esri.Polygon
      const rings = polygon.rings[0]
      if (!rings || rings.length < 3) return { segments: [], total: 0 }
      const segments: SegmentDetail[] = []
      let totalPerimeter = 0

      for (let i = 0; i < rings.length - 1; i++) {
        const pt1 = rings[i]
        const pt2 = rings[i + 1]
        const segment = {
          type: "polyline",
          paths: [[pt1, pt2]],
          spatialReference: geometry.spatialReference,
        } as __esri.Polyline

        const segmentLength = geometryEngineRef.current.geodesicLength(segment, "meters")
        segments.push({ segmentNumber: i + 1, length: segmentLength })
        totalPerimeter += segmentLength
      }

      const area = geometryEngineRef.current.geodesicArea(polygon, "square-meters")

      return { segments, total: area, area, perimeter: totalPerimeter }
    }
    return { segments: [], total: 0 }
  }

  const formatLastSegmentDistance = useCallback((geometry: __esri.Polyline): string => {
    if (!geometryEngineRef.current) return ""

    const path = geometry.paths[0]
    if (!path || path.length < 2) return ""

    const pt1 = path[path.length - 2]
    const pt2 = path[path.length - 1]

    const segment = {
      type: "polyline",
      paths: [[pt1, pt2]],
      spatialReference: geometry.spatialReference,
    } as __esri.Polyline

    const segmentLength = geometryEngineRef.current.geodesicLength(segment, "meters")
    return formatDistance(segmentLength)
  }, [])

  const formatLiveMeasurement = useCallback((geometry: __esri.Geometry | null) => {
    if (!geometry || !geometryEngineRef.current) return null

    if (geometry.type === "polyline") {
      const length = geometryEngineRef.current.geodesicLength(geometry as __esri.Polyline, "meters")
      return formatDistance(length)
    }
    if (geometry.type === "polygon") {
      const area = geometryEngineRef.current.geodesicArea(geometry as __esri.Polygon, "square-meters")
      return formatArea(area)
    }
    return null
  }, [])

  // Função para verificar se está próximo ao ponto inicial
  const checkNearStartPoint = useCallback((currentPoint: __esri.Point) => {
    if (!startPoint || !geometryEngineRef.current) {
      console.log("[DEBUG] checkNearStartPoint - startPoint ou geometryEngine não disponível")
      return false
    }
    
    // Usar distance para cálculo de distância
    const distance = geometryEngineRef.current.distance(startPoint, currentPoint, "meters")
    const threshold = 50 // Aumentei para 50 metros de tolerância
    
    console.log("[DEBUG] checkNearStartPoint - distance:", distance, "threshold:", threshold)
    
    return distance <= threshold
  }, [startPoint])

  // Função para detectar ângulos de 90 graus
  const detectRightAngle = useCallback((polyline: __esri.Polyline) => {
    if (!polyline.paths[0] || polyline.paths[0].length < 2) {
      return { isRightAngle: false, angle: 0, suggestion: null }
    }

    const paths = polyline.paths[0]
    const lastPoint = paths[paths.length - 1]
    const secondLastPoint = paths[paths.length - 2]
    
    // Se há apenas 2 pontos, verificar se está próximo de 90 graus com o eixo
    if (paths.length === 2) {
      const dx = lastPoint[0] - secondLastPoint[0]
      const dy = lastPoint[1] - secondLastPoint[1]
      const angle = Math.atan2(dy, dx) * (180 / Math.PI)
      
      // Verificar se está próximo de 0°, 90°, 180° ou 270°
      const normalizedAngle = ((angle % 360) + 360) % 360
      const isHorizontal = Math.abs(normalizedAngle) < 5 || Math.abs(normalizedAngle - 180) < 5
      const isVertical = Math.abs(normalizedAngle - 90) < 5 || Math.abs(normalizedAngle - 270) < 5
      
      if (isHorizontal || isVertical) {
        return {
          isRightAngle: true,
          angle: normalizedAngle,
          suggestion: isHorizontal ? "Linha horizontal detectada" : "Linha vertical detectada"
        }
      }
    }
    
    // Se há 3 ou mais pontos, verificar o ângulo entre os últimos 3 pontos
    if (paths.length >= 3) {
      const thirdLastPoint = paths[paths.length - 3]
      
      // Calcular vetores
      const v1 = {
        x: secondLastPoint[0] - thirdLastPoint[0],
        y: secondLastPoint[1] - thirdLastPoint[1]
      }
      const v2 = {
        x: lastPoint[0] - secondLastPoint[0],
        y: lastPoint[1] - secondLastPoint[1]
      }
      
      // Calcular ângulo entre vetores
      const dotProduct = v1.x * v2.x + v1.y * v2.y
      const magnitude1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y)
      const magnitude2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y)
      
      if (magnitude1 > 0 && magnitude2 > 0) {
        const cosAngle = dotProduct / (magnitude1 * magnitude2)
        const angle = Math.acos(Math.max(-1, Math.min(1, cosAngle))) * (180 / Math.PI)
        
        // Verificar se está próximo de 90 graus (tolerância de 5 graus)
        if (Math.abs(angle - 90) < 5) {
          return {
            isRightAngle: true,
            angle: angle,
            suggestion: "Ângulo reto detectado - duplo clique para travar"
          }
        }
      }
    }
    
    return { isRightAngle: false, angle: 0, suggestion: null }
  }, [])

  // Função recursiva para explorar camadas dentro de grupos
  const exploreGroupLayers = useCallback((layer: any, featureSources: any[], supportedLayerTypes: string[]) => {
    if (layer.layers && layer.layers.length > 0) {
      // Se é um grupo, explorar suas camadas filhas
      console.log("[DEBUG] Explorando grupo:", layer.title || layer.id)
      layer.layers.forEach((sublayer: any) => {
        exploreGroupLayers(sublayer, featureSources, supportedLayerTypes)
      })
    } else if (supportedLayerTypes.includes(layer.type)) {
      // Se é uma camada suportada, adicionar
      featureSources.push({
        layer: layer,
        enabled: true
      })
      console.log("[LOG] Camada encontrada dentro de grupo:", {
        title: layer.title || layer.id,
        type: layer.type,
        url: layer.url || "N/A"
      })
    }
  }, [])

  // Função para configurar TODAS as camadas suportadas como fontes de snapping (versatilidade máxima)
  const configureSnappingSources = useCallback(() => {
    if (!jimuMapView?.view?.map || !sketchRef.current) {
      return
    }

    const featureSources: any[] = []
    
    // Tipos de camadas suportadas para snapping conforme documentação oficial
    const supportedLayerTypes = [
      "feature",      // FeatureLayer
      "graphics",     // GraphicsLayer
      "geojson",      // GeoJSONLayer
      "wfs",          // WFSLayer
      "csv",          // CSVLayer
      "subtype",      // SubtypeSublayer
      "map-notes",    // MapNotesLayer
      "scene",        // SceneLayer (3D Object)
      "building-scene" // BuildingSceneLayer
    ]
    
    // Iterar por TODAS as camadas do mapa (versatilidade máxima)
    jimuMapView.view.map.layers.forEach((layer: any) => {
      const layerType = layer.type
      const layerTitle = layer.title || layer.id || "Unnamed Layer"
      
      if (layerType === "group") {
        // Se é um grupo, explorar suas camadas filhas
        console.log("[DEBUG] Processando grupo:", layerTitle)
        exploreGroupLayers(layer, featureSources, supportedLayerTypes)
      } else if (supportedLayerTypes.includes(layerType)) {
        // Incluir qualquer camada suportada para snapping
        featureSources.push({
          layer: layer,
          enabled: true
        })
        console.log("[LOG] Camada adicionada como fonte de snapping:", {
          title: layerTitle,
          type: layerType,
          url: layer.url || "N/A"
        })
      } else {
        console.log("[DEBUG] Camada não suportada para snapping:", {
          title: layerTitle,
          type: layerType
        })
      }
    })

    // Atualizar as fontes de snapping
    if (sketchRef.current.snappingOptions) {
      sketchRef.current.snappingOptions.featureSources = featureSources
      console.log("[LOG] Snapping configurado com", featureSources.length, "camadas (versatilidade máxima)")
      
      // Log detalhado das fontes configuradas
      if (featureSources.length > 0) {
        console.log("[LOG] Fontes de snapping ativas (todas as camadas suportadas):")
        featureSources.forEach((source, index) => {
          console.log(`  ${index + 1}. ${source.layer.title || source.layer.id} (${source.layer.type})`)
        })
      } else {
        console.log("[WARNING] Nenhuma camada suportada encontrada para snapping")
        console.log("[INFO] Tipos suportados: feature, graphics, geojson, wfs, csv, subtype, map-notes, scene, building-scene")
      }
    }
  }, [jimuMapView, exploreGroupLayers])

  // Função para otimizar performance do snapping (conforme documentação)
  const optimizeSnappingPerformance = useCallback(() => {
    if (!sketchRef.current?.snappingOptions) return

    // Ajustar tolerância baseada no zoom level para melhor performance
    const zoomLevel = jimuMapView?.view?.zoom || 10
    let optimizedDistance = 20

    if (zoomLevel < 8) {
      optimizedDistance = 30  // Zoom muito afastado - tolerância maior
    } else if (zoomLevel > 15) {
      optimizedDistance = 10  // Zoom muito próximo - tolerância menor
    }

    sketchRef.current.snappingOptions.distance = optimizedDistance
    console.log("[LOG] Tolerância de snapping otimizada para zoom level", zoomLevel, ":", optimizedDistance, "pixels")
  }, [jimuMapView])

  // Função para criar indicador visual de ângulo reto
  const createRightAngleIndicator = useCallback((vertex: __esri.Point) => {
    if (!graphicModuleRef.current || !graphicsLayerRef.current) return

    // Remover indicador anterior se existir
    if (rightAngleGraphic) {
      graphicsLayerRef.current.remove(rightAngleGraphic)
    }

    // Criar símbolo do quadrado laranja (como na imagem)
    const rightAngleSymbol = {
      type: "simple-marker" as const,
      style: "square" as const,
      size: 12,
      color: [255, 165, 0], // Laranja
      outline: {
        color: [255, 255, 255], // Branco
        width: 2
      }
    }

    // Criar gráfico do indicador
    const indicatorGraphic = new (graphicModuleRef.current as any)({
      geometry: vertex,
      symbol: rightAngleSymbol
    })

    // Adicionar à camada
    graphicsLayerRef.current.add(indicatorGraphic)
    setRightAngleGraphic(indicatorGraphic)

    console.log("[LOG] Indicador de ângulo reto criado em:", vertex)
  }, [rightAngleGraphic])

  // Função para remover indicador de ângulo reto
  const removeRightAngleIndicator = useCallback(() => {
    if (rightAngleGraphic && graphicsLayerRef.current) {
      graphicsLayerRef.current.remove(rightAngleGraphic)
      setRightAngleGraphic(null)
      console.log("[LOG] Indicador de ângulo reto removido")
    }
  }, [rightAngleGraphic])




  const updateLiveTextGraphic = (geometry: __esri.Geometry, text: string) => {
    if (!graphicModuleRef.current || !labelsLayerRef.current) return

    let labelPoint: __esri.Point | null = null

    if (geometry.type === "polygon") {
      // Para áreas, usa o centroide da geometria
      const polygon = geometry as __esri.Polygon
      labelPoint = polygon.centroid

    } else if (geometry.type === "polyline") {
      // Para distâncias, usa o ponto médio do último segmento
      const polyline = geometry as __esri.Polyline
      const paths = polyline.paths
      if (paths.length > 0) {
        const lastPath = paths[paths.length - 1]
        if (lastPath.length > 1) {
          const lastPoint = lastPath[lastPath.length - 1]
          const secondLastPoint = lastPath[lastPath.length - 2]
          labelPoint = {
            type: "point",
            x: (lastPoint[0] + secondLastPoint[0]) / 2,
            y: (lastPoint[1] + secondLastPoint[1]) / 2,
            spatialReference: geometry.spatialReference,
          } as __esri.Point
        }
      }
    }

    if (!labelPoint) return

    if (!liveTextGraphicRef.current) {
      liveTextGraphicRef.current = new (graphicModuleRef.current as any)({
        geometry: labelPoint,
        symbol: {
          type: "text",
          color: "white",
          haloColor: "black",
          haloSize: "2px",
          text: text,
          xoffset: 0,
          yoffset: 0,
          font: {
            size: 16,
            family: "Arial",
            weight: "bold",
          },
        },
      })
      labelsLayerRef.current.add(liveTextGraphicRef.current)
      console.log("[LOG] Added live text graphic:", text)
    } else if (labelPoint) {
      liveTextGraphicRef.current.geometry = labelPoint
      const textSymbol = liveTextGraphicRef.current.symbol as __esri.TextSymbol
      textSymbol.text = text
      console.log("[LOG] Updated live text graphic:", text)
    }
  }



  const updateMeasurementDetails = useCallback((graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic)
    const { segments, total, area, perimeter } = calculateSegments(graphic.geometry)
    setMeasurements((prev) => {
      const idx = prev.findIndex((m) => m.id === id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { id, segments, total, area, perimeter }
        console.log("[LOG] Updated measurement details for id:", id)
        return copy
      }
      console.log("[LOG] Added new measurement detail for id:", id)
      return [...prev, { id, segments, total, area, perimeter }]
    })

    if (graphic.geometry.type === "polyline") {
      const path = graphic.geometry.paths[0]
      if (path && path.length >= 2) {
        updateLiveTextGraphic(graphic.geometry, formatDistance(total))
      }
    }

    // Para polígonos, só atualiza o texto da área se não existir um texto permanente
    if (graphic.geometry.type === "polygon" && !liveTextGraphicRef.current) {
      updateLiveTextGraphic(graphic.geometry, formatArea(total))
    }
  }, [])

  const removeMeasurementDetails = useCallback((graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic)
    console.log("[LOG] Removing measurement detail for id:", id)
    setMeasurements((prev) => prev.filter((m) => m.id !== id))
    if (selectedGraphicIdRef.current === id) {
      console.log("[LOG] Clearing selectedGraphicId as it matches removed graphic")
      setSelectedGraphicId(null)
    }
  }, [])

   const clearAll = () => {
     console.log("[LOG] Clear all called")
     if (graphicsLayerRef.current) {
       graphicsLayerRef.current.removeAll()
     }
     if (labelsLayerRef.current) {
       labelsLayerRef.current.removeAll()
     }
     graphicsRef.current = []
     segmentLabelsMapRef.current.clear()
     vertexPointsMapRef.current.clear()
     areaLabelsMapRef.current.clear()
     setMeasurements([])
     setSelectedGraphicId(null)
     setLiveMeasurement(null)
     setActiveButton("")
     
     
     // Remove texto dinâmico se existir
     if (liveTextGraphicRef.current) {
       labelsLayerRef.current?.remove(liveTextGraphicRef.current)
       liveTextGraphicRef.current = null
     }
     
     sketchRef.current?.cancel()
   }

  const handleClear = () => {
    clearAll()
  }


  // Remove labels de segmentos antigos de um gráfico
  const removeSegmentLabels = (graphicId: string) => {
    const oldLabels = segmentLabelsMapRef.current.get(graphicId)
    if (oldLabels && labelsLayerRef.current) {
      labelsLayerRef.current.removeMany(oldLabels)
    }
    segmentLabelsMapRef.current.delete(graphicId)
  }

  // Remove vértices antigos de um gráfico
  const removeVertexPoints = (graphicId: string) => {
    const oldVertices = vertexPointsMapRef.current.get(graphicId)
    if (oldVertices && graphicsLayerRef.current) {
      graphicsLayerRef.current.removeMany(oldVertices)
    }
    vertexPointsMapRef.current.delete(graphicId)
  }

  // Remove label de área antigo de um gráfico
  const removeAreaLabel = (graphicId: string) => {
    const oldAreaLabel = areaLabelsMapRef.current.get(graphicId)
    if (oldAreaLabel && labelsLayerRef.current) {
      labelsLayerRef.current.remove(oldAreaLabel)
    }
    areaLabelsMapRef.current.delete(graphicId)
  }



  // Cria labels de segmentos para o gráfico dado e adiciona na camada de labels
  const createSegmentLabelsForGraphic = useCallback((graphic: __esri.Graphic) => {
    if (!labelsLayerRef.current || !graphicModuleRef.current) return

    const graphicId = getGraphicId(graphic)
    removeSegmentLabels(graphicId)

    const { segments } = calculateSegments(graphic.geometry)
    const labels: __esri.Graphic[] = []

    segments.forEach((segment) => {
      let pt1: number[]
      let pt2: number[]

      if (graphic.geometry.type === "polyline") {
        const polyline = graphic.geometry
        pt1 = polyline.paths[0][segment.segmentNumber - 1]
        pt2 = polyline.paths[0][segment.segmentNumber]
      } else if (graphic.geometry.type === "polygon") {
        const polygon = graphic.geometry
        pt1 = polygon.rings[0][segment.segmentNumber - 1]
        pt2 = polygon.rings[0][segment.segmentNumber]
      } else {
        return
      }

      const midPoint = {
        type: "point",
        x: (pt1[0] + pt2[0]) / 2,
        y: (pt1[1] + pt2[1]) / 2,
        spatialReference: graphic.geometry.spatialReference,
      } as __esri.Point

      const labelGraphic = new (graphicModuleRef.current as any)({
        geometry: midPoint,
        symbol: {
          type: "text",
          text: formatDistance(segment.length),
          color: "white",
          haloColor: "black",
          haloSize: "3px",
          xoffset: 0,
          yoffset: -15,
          font: {
            size: 12,
            family: "Arial",
            weight: "bold",
          },
        },
        attributes: { parentId: graphicId },
      })

      labels.push(labelGraphic)
    })

    labels.forEach((label) => {
      if (labelsLayerRef.current) {
        labelsLayerRef.current.add(label)
      }
    })
    segmentLabelsMapRef.current.set(graphicId, labels)
  }, [])

  // Cria gráficos de pontos (vértices) para o gráfico dado e adiciona na camada
  // Cria texto permanente da área no centro do polígono
  const createAreaLabelForGraphic = useCallback((graphic: __esri.Graphic) => {
    if (!labelsLayerRef.current || !graphicModuleRef.current || graphic.geometry.type !== "polygon") return

    const graphicId = getGraphicId(graphic)
    
    // Remove label de área antigo se existir
    removeAreaLabel(graphicId)
    
    const polygon = graphic.geometry
    const area = geometryEngineRef.current?.geodesicArea(polygon, "square-meters")
    
    if (!area) return

    const areaLabel = new (graphicModuleRef.current as any)({
      geometry: polygon.centroid,
      symbol: {
        type: "text",
        color: "white",
        haloColor: "black",
        haloSize: "3px",
        text: formatArea(area),
        xoffset: 0,
        yoffset: 0,
        font: {
          size: 16,
          family: "Arial",
          weight: "bold",
        },
      },
      attributes: { parentId: graphicId, type: "areaLabel" },
    })

    labelsLayerRef.current.add(areaLabel)
    areaLabelsMapRef.current.set(graphicId, areaLabel)
    
    console.log("[LOG] Added area label:", formatArea(area))
  }, [])

  const createVertexPointsForGraphic = useCallback((graphic: __esri.Graphic) => {
    if (!graphicsLayerRef.current || !graphicModuleRef.current) return

    const graphicId = getGraphicId(graphic)

    // Remove vértices antigos
    const oldVertices = vertexPointsMapRef.current.get(graphicId)
    if (oldVertices) {
      graphicsLayerRef.current.removeMany(oldVertices)
    }

    const vertices: __esri.Graphic[] = []
    let points: number[][] = []

    if (graphic.geometry.type === "polyline") {
      const polyline = graphic.geometry
      points = polyline.paths[0]
    } else if (graphic.geometry.type === "polygon") {
      const polygon = graphic.geometry
      points = polygon.rings[0]
    } else {
      return
    }

    points.forEach((pt) => {
      const pointGraphic = new (graphicModuleRef.current as any)({
        geometry: {
          type: "point",
          x: pt[0],
          y: pt[1],
          spatialReference: graphic.geometry.spatialReference,
        },
        symbol: {
          type: "simple-marker",
          style: "circle",
          size: 8,
          color: [255, 165, 0, 0.7], // laranja com transparência
          outline: {
            color: [255, 255, 255],
            width: 2,
          },
        },
        attributes: { 
          parentId: graphicId,
          type: "vertexIndicator",
          interactive: false // Marca como não interativo
        },
      })
      vertices.push(pointGraphic)
    })

    vertices.forEach((v) => {
      if (graphicsLayerRef.current) {
        graphicsLayerRef.current.add(v)
      }
    })
    vertexPointsMapRef.current.set(graphicId, vertices)
  }, [])


  // --- START: Inicialização do SketchViewModel e camadas ---

  const initializedRef = useRef(false)

  useEffect(() => {
    if (!jimuMapView || initializedRef.current) return

    loadArcGISJSAPIModules([
      "esri/layers/GraphicsLayer",
      "esri/widgets/Sketch/SketchViewModel",
      "esri/geometry/geometryEngine",
      "esri/Graphic",
    ]).then(([GraphicsLayer, SketchViewModel, geometryEngine, Graphic]) => {
      geometryEngineRef.current = geometryEngine
      graphicModuleRef.current = Graphic

      const gl = new GraphicsLayer({
        id: "measurementWidgetGraphicsLayer",
        title: "Measurement Graphics",
        listMode: "hide",
      })
      jimuMapView.view.map.add(gl)
      graphicsLayerRef.current = gl

      // Criar camada separada para labels (sempre por cima)
      const labelsLayer = new GraphicsLayer({
        id: "measurementWidgetLabelsLayer",
        title: "Measurement Labels",
        listMode: "hide",
        elevationInfo: {
          mode: "on-the-ground"
        }
      })
      jimuMapView.view.map.add(labelsLayer)
      labelsLayerRef.current = labelsLayer
      
      // Garantir que a camada de labels fique por cima: remover e re-adicionar
      jimuMapView.view.map.remove(labelsLayer)
      jimuMapView.view.map.add(labelsLayer)
      
      // Definir ordem de renderização explícita
      labelsLayer.order = 1000
      
      // Forçar a camada de labels a ficar por cima usando timeout
      setTimeout(() => {
        if (labelsLayerRef.current && jimuMapView.view.map) {
          jimuMapView.view.map.remove(labelsLayerRef.current)
          jimuMapView.view.map.add(labelsLayerRef.current)
          console.log("[LOG] Labels layer moved to top")
        }
      }, 100)

       sketchRef.current = new SketchViewModel({
         view: jimuMapView.view,
         layer: graphicsLayerRef.current,
         defaultCreateOptions: { 
           hasZ: false
         },
         updateOnGraphicClick: true,
         defaultUpdateOptions: { 
           tool: "reshape", 
           toggleToolOnClick: false,
           enableRotation: true,
           enableScaling: true,
           preserveAspectRatio: false
         },
         polylineSymbol: {
           type: "simple-line",
           color: [255, 255, 255],
           width: 3,
           style: "solid",
         },
         polygonSymbol: {
           type: "simple-fill",
           color: [255, 255, 255, 0.3],
           style: "solid",
           outline: {
             color: [255, 255, 255],
             width: 2,
           },
         },
         vertexSymbol: {
           type: "simple-marker",
           style: "circle",
           size: 12,
           color: [255, 165, 0],
           outline: {
             color: [255, 255, 255],
             width: 2,
           },
         },
         midVertexSymbol: {
           type: "simple-marker",
           style: "circle",
           size: 8,
           color: [255, 255, 255],
           outline: {
             color: [255, 165, 0],
             width: 2,
           },
         },
       })

       // Configurar snapping options para o SketchViewModel seguindo documentação oficial
       sketchRef.current.snappingOptions = {
         enabled: true,          // Habilita o snapping globalmente
         selfEnabled: true,      // Habilita self-snapping (guias de ângulo reto e paralelismo)
         featureEnabled: true,   // Habilita feature-snapping (snapping em feições de outras camadas)
         distance: 20,           // Distância de tolerância em pixels (otimizada para performance)
         featureSources: []      // Será populado com camadas de lotes e quadras
       }

       // Configurar fontes de snapping das camadas do mapa
       configureSnappingSources()

       // Escutar mudanças nas camadas do mapa para recarregar snapping
       const layerChangeHandler = () => {
         console.log("[LOG] Camadas do mapa alteradas - recarregando snapping")
         configureSnappingSources()
       }
       
       jimuMapView.view.map.layers.on("after-add", layerChangeHandler)
       jimuMapView.view.map.layers.on("after-remove", layerChangeHandler)

       // Otimizar performance do snapping quando zoom mudar
       const zoomChangeHandler = () => {
         optimizeSnappingPerformance()
       }
       
       jimuMapView.view.watch("zoom", zoomChangeHandler)


       // Create event
       createHandlerRef.current = sketchRef.current.on("create", (event) => {
         if (
           event.state === "active" &&
           (event.graphic.geometry.type === "polyline" || event.graphic.geometry.type === "polygon")
         ) {
           let liveValue = ""
           if (event.graphic.geometry.type === "polyline") {
             const polyline = event.graphic.geometry
             
             // Capturar ponto inicial para snap de fechamento (apenas para distância)
             if (polyline.paths[0] && polyline.paths[0].length === 1) {
               const firstPoint = {
                 type: "point",
                 x: polyline.paths[0][0][0],
                 y: polyline.paths[0][0][1],
                 spatialReference: polyline.spatialReference
               } as __esri.Point
               setStartPoint(firstPoint)
               console.log("[LOG] Ponto inicial capturado para distância:", firstPoint)
               console.log("[DEBUG] activeButton:", activeButton)
             }
             
             // Verificar se está próximo ao ponto inicial (apenas para distância)
             if (polyline.paths[0] && polyline.paths[0].length > 1 && startPoint) {
               const currentPoint = {
                 type: "point",
                 x: polyline.paths[0][polyline.paths[0].length - 1][0],
                 y: polyline.paths[0][polyline.paths[0].length - 1][1],
                 spatialReference: polyline.spatialReference
               } as __esri.Point

               console.log("[DEBUG] Verificando proximidade - startPoint:", startPoint)
               console.log("[DEBUG] Verificando proximidade - currentPoint:", currentPoint)
               console.log("[DEBUG] activeButton durante verificação:", activeButton)

               const nearStart = checkNearStartPoint(currentPoint)
               console.log("[DEBUG] nearStart:", nearStart)
               setIsNearStartPoint(nearStart)

               if (nearStart) {
                 liveValue += " (próximo ao início - duplo clique para fechar)"
                 console.log("[LOG] Próximo ao ponto inicial!")
               }
             }

             // Detectar ângulos retos para distância
             if (activeButton === "measureDistance") {
               const rightAngleResult = detectRightAngle(polyline)
               console.log("[DEBUG] Detecção de ângulo reto:", rightAngleResult)
               
               if (rightAngleResult.isRightAngle) {
                 setIsRightAngle(true)
                 setRightAngleSuggestion(rightAngleResult.suggestion)
                 
                 // Criar indicador visual no vértice
                 if (polyline.paths[0].length >= 2) {
                   const vertexPoint = {
                     type: "point",
                     x: polyline.paths[0][polyline.paths[0].length - 2][0],
                     y: polyline.paths[0][polyline.paths[0].length - 2][1],
                     spatialReference: polyline.spatialReference
                   } as __esri.Point
                   createRightAngleIndicator(vertexPoint)
                 }
                 
                 liveValue += ` (${rightAngleResult.suggestion})`
                 console.log("[LOG] Ângulo reto detectado:", rightAngleResult.angle.toFixed(1), "graus")
               } else {
                 setIsRightAngle(false)
                 setRightAngleSuggestion(null)
                 removeRightAngleIndicator()
               }

             }
             
             // NOVO: Criar labels de segmentos a cada clique durante o desenho de distância
             if (polyline.paths[0] && polyline.paths[0].length >= 2) {
               console.log("[LOG] Criando labels de segmentos durante desenho de distância")
               createSegmentLabelsForGraphic(event.graphic)
             }
             
             // NÃO mostrar liveValue para distância - apenas os labels dos segmentos
             
           } else if (event.graphic.geometry.type === "polygon") {
             // Para área, usar a funcionalidade original
             liveValue = formatLiveMeasurement(event.graphic.geometry)
             // Resetar estados de snap de fechamento para área
             setIsNearStartPoint(false)
             setStartPoint(null)
             
             // NOVO: Criar labels de segmentos a cada clique durante o desenho de área
             if (event.graphic.geometry.rings[0] && event.graphic.geometry.rings[0].length >= 3) {
               console.log("[LOG] Criando labels de segmentos durante desenho de área")
               createSegmentLabelsForGraphic(event.graphic)
             }
           }
           console.log("[LOG] Live measurement during create:", liveValue)
           setLiveMeasurement(liveValue)
           updateLiveTextGraphic(event.graphic.geometry, liveValue ?? "")
         }

         if (
           event.state === "complete" &&
           (event.graphic.geometry.type === "polyline" || event.graphic.geometry.type === "polygon")
         ) {
           const graphic = event.graphic
           const graphicId = getGraphicId(graphic)
           console.log("[LOG] Graphic created with id:", graphicId)

           // Adiciona o gráfico localmente e atualiza medições
           graphicsRef.current.push(graphic)
           updateMeasurementDetails(graphic)

           // Cria labels de segmentos permanentes APENAS ao finalizar
           if (graphic.geometry.type === "polyline") {
             createSegmentLabelsForGraphic(graphic)
           }

           // Cria vértices permanentes para o gráfico criado
           createVertexPointsForGraphic(graphic)

           // Para polígonos, cria labels de segmentos E área
           if (graphic.geometry.type === "polygon") {
             createSegmentLabelsForGraphic(graphic)
             createAreaLabelForGraphic(graphic)
           }

           setLiveMeasurement(null)

           // Remove texto dinâmico de medição ao vivo
           if (liveTextGraphicRef.current) {
             labelsLayerRef.current?.remove(liveTextGraphicRef.current)
             liveTextGraphicRef.current = null
           }

           try {
             sketchRef.current?.update(graphic)
           } catch (e) {
             console.warn("[LOG] Error updating graphic after creation:", e)
           }
         }
       })

       // Update event
       updateHandlerRef.current = sketchRef.current.on("update", (event) => {
         if (event.state === "active" || event.state === "complete") {
           const editedGraphic = event.graphics[0]
           const graphicId = getGraphicId(editedGraphic)
           const idx = graphicsRef.current.findIndex((g) => getGraphicId(g) === graphicId)
           if (idx >= 0) {
             graphicsRef.current[idx] = editedGraphic
             updateMeasurementDetails(editedGraphic)

             if (event.state === "active") {
               // Remover label dinâmico se existir
               if (liveTextGraphicRef.current) {
                 labelsLayerRef.current?.remove(liveTextGraphicRef.current)
                 liveTextGraphicRef.current = null
               }
               // Remove vértices customizados durante edição para não interferir
               removeVertexPoints(graphicId)
               // NÃO chama updateLiveTextGraphic para evitar reaparecer label durante edição
               setLiveMeasurement(null)
             } else {
               // Estado complete, pode atualizar o liveMeasurement e o label
               setLiveMeasurement(null)
               if (liveTextGraphicRef.current) {
                 labelsLayerRef.current?.remove(liveTextGraphicRef.current)
                 liveTextGraphicRef.current = null
               }
             }

             // Atualiza labels permanentes dos segmentos sempre
             createSegmentLabelsForGraphic(editedGraphic)

             // Atualiza vértices permanentes apenas quando não está editando
             if (event.state === "complete") {
               createVertexPointsForGraphic(editedGraphic)
             }

             // Atualiza label da área para polígonos
             if (editedGraphic.geometry.type === "polygon") {
               createAreaLabelForGraphic(editedGraphic)
             }

             console.log("[LOG] Graphic updated with id:", graphicId)
           }
         }
       })

       // Delete event
       deleteHandlerRef.current = sketchRef.current.on("delete", (event) => {
         event.graphics.forEach((deletedGraphic) => {
           const graphicId = getGraphicId(deletedGraphic)
           console.log("[LOG] Graphic deleted with id:", graphicId)

           // Remove labels associados
           removeSegmentLabels(graphicId)

           // Remove vértices associados
           removeVertexPoints(graphicId)

           // Remove label de área associado
           removeAreaLabel(graphicId)

           graphicsRef.current = graphicsRef.current.filter(
             (g) => getGraphicId(g) !== graphicId
           )
           removeMeasurementDetails(deletedGraphic)
         })
       })



       // Handler para duplo clique durante medição de distância
       doubleClickHandlerRef.current = jimuMapView.view.on("double-click", (evt) => {
         console.log("[DEBUG] Duplo clique detectado")
         console.log("[DEBUG] sketchRef.current?.state:", sketchRef.current?.state)
         console.log("[DEBUG] activeButton:", activeButton)
         console.log("[DEBUG] isNearStartPoint:", isNearStartPoint)
         console.log("[DEBUG] isRightAngle:", isRightAngle)

         if (sketchRef.current?.state === "active" && activeButton === "measureDistance") {
           if (isNearStartPoint) {
             console.log("[LOG] Duplo clique - finalizando medição (snap ao início)")
             sketchRef.current.complete()
           } else if (isRightAngle) {
             console.log("[LOG] Duplo clique - travando ângulo reto")
             // Aqui você pode implementar lógica adicional para "travar" o ângulo
             // Por enquanto, apenas finaliza a medição
             sketchRef.current.complete()
           }
         }
       })


       // Click event para seleção
       clickHandlerRef.current = jimuMapView.view.on("click", async (evt) => {
         console.log("[LOG] Map click event")
         
         
         const hit = await jimuMapView.view.hitTest(evt)
         const candidates = hit.results.filter(
           (r) => 'graphic' in r && r.graphic && r.graphic.layer?.id === graphicsLayerRef.current?.id
         ) as Array<{ graphic: __esri.Graphic }>

         // Filtra apenas gráficos principais (não vértices ou labels)
         const mainGraphics = candidates.filter(c => 
           !c.graphic.attributes?.type || 
           (c.graphic.attributes.type !== "vertexIndicator" && 
            c.graphic.attributes.type !== "areaLabel" &&
            c.graphic.attributes.type !== "distanceLockIndicator")
         )

         console.log(
           "[LOG] Current graphicsRef IDs:",
           graphicsRef.current.map((g) => getGraphicId(g))
         )
         console.log("[LOG] Hit candidate IDs:", mainGraphics.map((c) => getGraphicId(c.graphic)))

         let graphicHit = null
         for (const r of mainGraphics) {
           const hitId = getGraphicId(r.graphic)
           console.log("[LOG] Checking candidate graphic id:", hitId)
           const found = graphicsRef.current.find((g) => getGraphicId(g) === hitId)
           console.log("[LOG] Found in graphicsRef:", found ? "Yes" : "No")
           if (found) {
             graphicHit = r
             break
           }
         }

         if (!graphicHit && mainGraphics.length > 0) {
           const fallbackId = getGraphicId(mainGraphics[0].graphic)
           console.warn(
             "[WARN] Graphic not found in graphicsRef, fallback to first candidate with id:",
             fallbackId
           )
           setSelectedGraphicId(fallbackId)
           try {
             sketchRef.current?.update(mainGraphics[0].graphic)
           } catch (e) {
             console.warn("[LOG] Error updating graphic on fallback click:", e)
           }
           return
         }

         if (!graphicHit) {
           console.log("[LOG] No measurement graphic hit")
           setSelectedGraphicId(null)
           sketchRef.current?.cancel()
           return
         }
         const clickedId = getGraphicId(graphicHit.graphic)
         console.log("[LOG] Graphic clicked, setting selectedGraphicId to:", clickedId)
         setSelectedGraphicId(clickedId)
         try {
           sketchRef.current?.update(graphicHit.graphic)
         } catch (e) {
           console.warn("[LOG] Error updating graphic on click:", e)
         }
       })

      initializedRef.current = true
    })

    return () => {
      // Cleanup dos handlers
      doubleClickHandlerRef.current?.remove()
    }
   }, [jimuMapView, createAreaLabelForGraphic, createSegmentLabelsForGraphic, createVertexPointsForGraphic, formatLastSegmentDistance, formatLiveMeasurement, removeMeasurementDetails, updateMeasurementDetails, activeButton, checkNearStartPoint, isNearStartPoint, startPoint, configureSnappingSources, createRightAngleIndicator, detectRightAngle, isRightAngle, removeRightAngleIndicator, optimizeSnappingPerformance])

  // Delete com tecla Delete ou Backspace e ESC para cancelar desenho
  useEffect(() => {
    if (!jimuMapView) return

    const handleKeyDown = (event: KeyboardEvent) => {
      console.log("[LOG] KeyDown event:", event.key, "selectedGraphicId:", selectedGraphicIdRef.current)
      
      
      // ESC para cancelar desenho ativo
      if (event.key === "Escape") {
        if (sketchRef.current?.state === "active") {
          console.log("[LOG] ESC pressed during active drawing - cleaning up")
          console.log("[LOG] liveTextGraphicRef.current before cleanup:", liveTextGraphicRef.current)
          console.log("[LOG] liveMeasurement before cleanup:", liveMeasurement)
          
          // Limpa medição ao vivo
          setLiveMeasurement(null)
          
          // Remove texto dinâmico se existir
          if (liveTextGraphicRef.current) {
            console.log("[LOG] Removing liveTextGraphic:", liveTextGraphicRef.current)
            labelsLayerRef.current?.remove(liveTextGraphicRef.current)
            liveTextGraphicRef.current = null
            console.log("[LOG] liveTextGraphicRef.current after cleanup:", liveTextGraphicRef.current)
          } else {
            console.log("[LOG] No liveTextGraphic to remove")
          }
          
          // Força limpeza de todos os gráficos de texto na camada de labels
          if (labelsLayerRef.current) {
            const allGraphics = Array.from(labelsLayerRef.current.graphics)
            const textGraphics = allGraphics.filter(g => 
              g.symbol && g.symbol.type === "text" && 
              (!g.attributes?.type || g.attributes.type !== "areaLabel")
            )
            if (textGraphics.length > 0) {
              console.log("[LOG] Found additional text graphics to remove:", textGraphics.length)
              labelsLayerRef.current.removeMany(textGraphics)
            }
          }
          
          
          // Cancela o desenho
          sketchRef.current?.cancel()
          event.preventDefault()
          return
        }
      }
      
      // Delete com tecla Delete ou Backspace
      if (event.key !== "Delete" && event.key !== "Backspace") return

      const currentSelectedGraphicId = selectedGraphicIdRef.current
      if (!currentSelectedGraphicId) {
        console.log("[LOG] No graphic selected, aborting delete")
        return
      }

      const graphicToRemove = graphicsLayerRef.current?.graphics.find(
        (g) => getGraphicId(g) === currentSelectedGraphicId
      )

      if (!graphicToRemove) {
        console.log("[LOG] Selected graphic not found in graphicsLayer, aborting delete")
        return
      }

      console.log("[LOG] Removing graphic with id:", currentSelectedGraphicId)

      graphicsLayerRef.current?.remove(graphicToRemove)
       // Remove labels associados
       removeSegmentLabels(currentSelectedGraphicId)

       // Remove vértices associados
       removeVertexPoints(currentSelectedGraphicId)

       // Remove label de área associado
       removeAreaLabel(currentSelectedGraphicId)

      graphicsRef.current = graphicsRef.current.filter(
        (g) => getGraphicId(g) !== currentSelectedGraphicId
      )

      setMeasurements((prev) => prev.filter((m) => m.id !== currentSelectedGraphicId))

      setSelectedGraphicId(null)

      sketchRef.current?.cancel()

      event.preventDefault()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [jimuMapView, liveMeasurement])

  const handleNewMeasurement = () => {
    if (!sketchRef.current) return
    console.log("[LOG] handleNewMeasurement called")
    
    // Mostrar informações de snapping ativo
    if (sketchRef.current.snappingOptions) {
      const snapping = sketchRef.current.snappingOptions
      console.log("[LOG] Configurações de snapping ativas:")
      console.log("  - Snapping habilitado:", snapping.enabled)
      console.log("  - Self-snapping (ângulos 90°):", snapping.selfEnabled)
      console.log("  - Feature-snapping (camadas):", snapping.featureEnabled)
      console.log("  - Distância de tolerância:", snapping.distance, "pixels")
      console.log("  - Fontes de snapping:", snapping.featureSources?.length || 0, "camadas")
    }
    
    sketchRef.current.cancel()
    setSelectedGraphicId(null)
    setLiveMeasurement(null)
    setIsNearStartPoint(false)
    setStartPoint(null)
    setIsRightAngle(false)
    setRightAngleSuggestion(null)
    removeRightAngleIndicator()
    
    
    // Remove texto dinâmico se existir
    if (liveTextGraphicRef.current) {
      labelsLayerRef.current?.remove(liveTextGraphicRef.current)
      liveTextGraphicRef.current = null
    }
    
    const createType = activeButton === "measureDistance" ? "polyline" : "polygon"
    sketchRef.current.create(createType)
  }


  return (
    <div className="widget-starter jimu-widget d-flex flex-column" style={{ height: "100%" }}>
       <MeasureTools
         activeButton={activeButton}
         activeTool={
           activeButton === "measureDistance"
             ? "distance"
             : activeButton === "measureArea"
               ? "area"
               : ""
         }
         angularSnap={props.config?.angularSnap}
         onSelectTool={(btn) => {
           console.log("[LOG] Tool selected:", btn.name)
           
           // Se clicar no mesmo botão ativo, desativa a ferramenta
           if (activeButton === btn.name) {
             setActiveButton("")
             if (sketchRef.current) {
               sketchRef.current.cancel()
               setSelectedGraphicId(null)
             }
             return
           }
           
           setActiveButton(btn.name)
           // Ativa automaticamente a ferramenta quando selecionada
           if (sketchRef.current) {
             sketchRef.current.cancel()
             setSelectedGraphicId(null)
             const createType = btn.name === "measureDistance" ? "polyline" : "polygon"
             sketchRef.current.create(createType)
           }
         }}
         onClear={handleClear}
       />


      {liveMeasurement && (
        <div
          style={{
            padding: "6px 12px",
            backgroundColor: ((isNearStartPoint || isRightAngle) && activeButton === "measureDistance") ? "#28a745" : "#0079c1",
            color: "white",
            fontWeight: "600",
            fontSize: "16px",
            textAlign: "center",
            userSelect: "none",
            zIndex: 1000,
            border: ((isNearStartPoint || isRightAngle) && activeButton === "measureDistance") ? "2px solid #20c997" : "none",
            borderRadius: ((isNearStartPoint || isRightAngle) && activeButton === "measureDistance") ? "4px" : "0px",
          }}
        >
          {activeButton === "measureDistance"
            ? `Distância atual: ${liveMeasurement}`
            : `Área atual: ${liveMeasurement}`}
          {isNearStartPoint && activeButton === "measureDistance" && (
            <div style={{ fontSize: "12px", marginTop: "2px", opacity: 0.9 }}>
              ✨ Próximo ao início - duplo clique para fechar!
            </div>
          )}
          {isRightAngle && activeButton === "measureDistance" && rightAngleSuggestion && (
            <div style={{ fontSize: "12px", marginTop: "2px", opacity: 0.9, color: "#ffa500" }}>
              📐 {rightAngleSuggestion}
            </div>
          )}
        </div>
      )}

      {(activeButton === "measureDistance" || activeButton === "measureArea") && (
        <>
          <div
            style={{
              padding: "8px 12px",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderBottom: "1px solid #ccc",
              userSelect: "none",
              zIndex: 999,
            }}
          >
            <button
              type="button"
              onClick={handleNewMeasurement}
              style={{
                backgroundColor: "#0079c1",
                border: "none",
                color: "white",
                borderRadius: 0,
                padding: "12px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: 600,
                width: "100%",
              }}
              aria-label="Nova Medição"
            >
              Nova Medição
            </button>
          </div>
          <div
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderTop: "1px solid #ccc",
              padding: "8px 12px",
              fontSize: "14px",
              zIndex: 998,
            }}
          >
            {measurements.filter(m =>
              activeButton === "measureDistance"
                ? m.area === undefined
                : activeButton === "measureArea"
                  ? m.area !== undefined
                  : false
            ).length === 0 ? (
              <div className="text-center text-disabled">Nenhuma medição registrada.</div>
            ) : (
              measurements
                .filter(m =>
                  activeButton === "measureDistance"
                    ? m.area === undefined
                    : activeButton === "measureArea"
                      ? m.area !== undefined
                      : false
                )
                .map((m, i) => (
                  <div key={m.id} style={{ marginBottom: "12px" }}>
                    <strong>{`Medição ${String(i + 1).padStart(3, "0")}`}</strong>
                    <div style={{ marginLeft: "12px", marginTop: "4px" }}>
                      {m.segments.map((segment) => (
                        <div key={segment.segmentNumber}>
                          {activeButton === "measureDistance"
                            ? `Distância segmento ${segment.segmentNumber}: ${formatDistance(
                              segment.length
                            )}`
                            : `Perímetro segmento ${segment.segmentNumber}: ${formatDistance(
                              segment.length
                            )}`}
                        </div>
                      ))}
                      {activeButton === "measureArea" && m.area !== undefined && (
                        <>
                          <div>
                            <strong>Área total:</strong> {formatArea(m.area)}
                          </div>
                          <div>
                            <strong>Perímetro total:</strong> {formatDistance(m.perimeter ?? 0)}
                          </div>
                        </>
                      )}
                      {activeButton === "measureDistance" && (
                        <div>
                          <strong>Distância total:</strong> {formatDistance(m.total)}
                        </div>
                      )}
                    </div>
                  </div>
                ))
            )}
          </div>

        </>
      )}

      <div style={{ flex: 1, position: "relative" }}>
        {props.useMapWidgetIds?.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={setJimuMapView}
          />
        )}
      </div>
    </div>
  )
}

export default Widget


