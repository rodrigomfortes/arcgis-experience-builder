import { useState, useEffect, useRef, useCallback } from 'react';
import { JimuMapView } from 'jimu-arcgis';
import { loadArcGISJSAPIModules } from 'jimu-arcgis';

type SegmentDetail = {
  segmentNumber: number;
  length: number;
};

type MeasurementDetail = {
  id: string;
  segments: SegmentDetail[];
  total: number;
};

const useDistanceMeasurement = (jimuMapView: JimuMapView | null, activeButton: string) => {
  // Refs para instâncias do ArcGIS
  const sketchRef = useRef<__esri.SketchViewModel | null>(null);
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null);
  const labelsLayerRef = useRef<__esri.GraphicsLayer | null>(null);
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null);
  const GraphicRef = useRef<typeof __esri.Graphic | null>(null);
  const TextSymbolRef = useRef<typeof __esri.TextSymbol | null>(null);
  const PointRef = useRef<typeof __esri.Point | null>(null);
  const SimpleLineSymbolRef = useRef<typeof __esri.SimpleLineSymbol | null>(null);

  // Handlers de eventos
  const createHandlerRef = useRef<__esri.IHandle | null>(null);
  const updateHandlerRef = useRef<__esri.IHandle | null>(null);
  const deleteHandlerRef = useRef<__esri.IHandle | null>(null);
  const clickHandlerRef = useRef<__esri.IHandle | null>(null);

  // Estado
  const [measurementsDetails, setMeasurementsDetails] = useState<MeasurementDetail[]>([]);
  const [selectedGraphicId, setSelectedGraphicId] = useState<string | null>(null);
  const [deleteMode, setDeleteMode] = useState<'geometry' | 'vertex'>('geometry');
  const [isInitialized, setIsInitialized] = useState(false);
  const [initializationError, setInitializationError] = useState<string | null>(null);
  const graphicsRef = useRef<__esri.Graphic[]>([]);

  // Formatação de distância
  const formatDistance = useCallback((meters: number) => {
    return meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${meters.toFixed(2)} m`;
  }, []);

  // Limpa todas as medições
  const clearAll = useCallback(() => {
    graphicsLayerRef.current?.removeAll();
    labelsLayerRef.current?.removeAll();
    graphicsRef.current = [];
    setMeasurementsDetails([]);
    setSelectedGraphicId(null);
  }, []);

  // Gera ID único para gráficos
  const getGraphicId = useCallback((graphic: __esri.Graphic) => {
    return (graphic as any).uid || (graphic as any)._uid || `${Date.now()}-${Math.random()}`;
  }, []);

  // Calcula segmentos de uma polilinha
  const calculateSegments = useCallback((geometry: __esri.Polyline) => {
    const segments: SegmentDetail[] = [];
    let total = 0;
    const path = geometry.paths[0];
    if (!path || path.length < 2) return { segments, total };

    for (let i = 0; i < path.length - 1; i++) {
      const pt1 = path[i];
      const pt2 = path[i + 1];

      const segment = {
        type: 'polyline',
        paths: [[pt1, pt2]],
        spatialReference: geometry.spatialReference
      } as __esri.Polyline;

      const segmentLength = geometryEngineRef.current!.geodesicLength(segment, 'meters');
      segments.push({ segmentNumber: i + 1, length: segmentLength });
      total += segmentLength;
    }
    return { segments, total };
  }, []);

  // Atualiza detalhes da medição
  const updateMeasurementDetails = useCallback((graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic);
    const { segments, total } = calculateSegments(graphic.geometry as __esri.Polyline);
    setMeasurementsDetails(prev => {
      const existingIndex = prev.findIndex(m => m.id === id);
      if (existingIndex >= 0) {
        const copy = [...prev];
        copy[existingIndex] = { id, segments, total };
        return copy;
      }
      return [...prev, { id, segments, total }];
    });
  }, [calculateSegments, getGraphicId]);

  // Remove detalhes da medição
  const removeMeasurementDetails = useCallback((graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic);
    setMeasurementsDetails(prev => prev.filter(m => m.id !== id));
    if (selectedGraphicId === id) {
      setSelectedGraphicId(null);
    }
  }, [getGraphicId, selectedGraphicId]);

  // Desenha todos os labels (vértices e segmentos)
  const drawAllLabels = useCallback(() => {
    if (!labelsLayerRef.current || !geometryEngineRef.current || !PointRef.current || 
        !GraphicRef.current || !TextSymbolRef.current) return;
    
    labelsLayerRef.current.removeAll();

    graphicsRef.current.forEach(graphic => {
      const geometry = graphic.geometry as __esri.Polyline;
      const path = geometry.paths[0];
      if (!path || path.length < 2) return;

      // Desenha vértices
      path.forEach(coord => {
        const vertexPoint = new PointRef.current!({
          x: coord[0],
          y: coord[1],
          spatialReference: geometry.spatialReference
        });
        const vertexSymbol = {
          type: "simple-marker",
          style: "circle",
          color: "#AC8D43",
          size: 8,
          outline: { color: "white", width: 2 }
        };
        const vertexGraphic = new GraphicRef.current!({
          geometry: vertexPoint,
          symbol: vertexSymbol
        });
        labelsLayerRef.current!.add(vertexGraphic);
      });

      // Desenha labels dos segmentos
      for (let i = 0; i < path.length - 1; i++) {
        const pt1 = path[i];
        const pt2 = path[i + 1];
        const segment = {
          type: 'polyline',
          paths: [[pt1, pt2]],
          spatialReference: geometry.spatialReference
        } as __esri.Polyline;

        const segmentLength = geometryEngineRef.current.geodesicLength(segment, 'meters');
        const midX = (pt1[0] + pt2[0]) / 2;
        const midY = (pt1[1] + pt2[1]) / 2;

        const midPoint = new PointRef.current!({
          x: midX,
          y: midY,
          spatialReference: geometry.spatialReference
        });

        const segmentLabel = new TextSymbolRef.current!({
          text: formatDistance(segmentLength),
          color: 'black',
          haloColor: 'white',
          haloSize: 1,
          font: { size: 11 },
          yoffset: -15
        });

        const labelGraphic = new GraphicRef.current!({
          geometry: midPoint,
          symbol: segmentLabel
        });

        labelsLayerRef.current!.add(labelGraphic);
      }
    });
  }, [formatDistance]);

  // Atualiza símbolos para mostrar seleção
  const refreshGraphicsSymbols = useCallback(() => {
    if (!graphicsLayerRef.current || !SimpleLineSymbolRef.current) return;

    graphicsLayerRef.current.graphics.forEach(graphic => {
      const id = getGraphicId(graphic);
      const isSelected = id === selectedGraphicId;
      graphic.symbol = {
        type: 'simple-line',
        color: isSelected ? '#0079c1' : 'white',
        width: 2
      };
    });
  }, [getGraphicId, selectedGraphicId]);

  // Configura seleção por clique
  const setupClickSelection = useCallback((view: __esri.MapView) => {
    clickHandlerRef.current?.remove();
    clickHandlerRef.current = view.on('click', async (event) => {
      if (!graphicsLayerRef.current) return;

      const hit = await view.hitTest(event);
      if (!hit.results.length) {
        setSelectedGraphicId(null);
        refreshGraphicsSymbols();
        return;
      }

      const graphicHit = hit.results.find(r => r.graphic && r.graphic.layer === graphicsLayerRef.current);
      if (!graphicHit) {
        setSelectedGraphicId(null);
        refreshGraphicsSymbols();
        return;
      }

      const clickedGraphic = graphicHit.graphic;
      const id = getGraphicId(clickedGraphic);
      setSelectedGraphicId(id);
      refreshGraphicsSymbols();
    });
  }, [getGraphicId, refreshGraphicsSymbols]);

  // Configura handlers de eventos do Sketch
  const setupEventHandlers = useCallback(() => {
    if (!sketchRef.current) return;

    createHandlerRef.current?.remove();
    updateHandlerRef.current?.remove();
    deleteHandlerRef.current?.remove();

    createHandlerRef.current = sketchRef.current.on('create', (event) => {
      if (event.state === 'complete' && event.graphic.geometry.type === 'polyline') {
        event.graphic.symbol = {
          type: 'simple-line',
          color: 'white',
          width: 2
        };
        graphicsRef.current.push(event.graphic);
        drawAllLabels();
        updateMeasurementDetails(event.graphic);
      }
    });

    updateHandlerRef.current = sketchRef.current.on('update', (event) => {
      if (event.state === 'active' || event.state === 'complete') {
        const editedGraphic = event.graphics[0];
        const idx = graphicsRef.current.findIndex(g => g === editedGraphic);
        if (idx >= 0) {
          editedGraphic.symbol = {
            type: 'simple-line',
            color: 'white',
            width: 2
          };
          graphicsRef.current[idx] = editedGraphic;
          drawAllLabels();
          updateMeasurementDetails(editedGraphic);
        }
      }
    });

    deleteHandlerRef.current = sketchRef.current.on('delete', (event) => {
      if (event.graphics.length === 0) return;
      event.graphics.forEach(deletedGraphic => {
        graphicsRef.current = graphicsRef.current.filter(g => g !== deletedGraphic);
        removeMeasurementDetails(deletedGraphic);
      });
      drawAllLabels();
    });
  }, [drawAllLabels, removeMeasurementDetails, updateMeasurementDetails]);

  // Limpeza dos recursos
  const cleanup = useCallback(() => {
    createHandlerRef.current?.remove();
    updateHandlerRef.current?.remove();
    deleteHandlerRef.current?.remove();
    clickHandlerRef.current?.remove();

    if (graphicsLayerRef.current && jimuMapView?.view?.map) {
      jimuMapView.view.map.remove(graphicsLayerRef.current);
    }
    if (labelsLayerRef.current && jimuMapView?.view?.map) {
      jimuMapView.view.map.remove(labelsLayerRef.current);
    }

    graphicsLayerRef.current = null;
    labelsLayerRef.current = null;
    sketchRef.current = null;
    graphicsRef.current = [];
    setIsInitialized(false);
  }, [jimuMapView]);

  // Inicia nova medição
  const handleNewMeasurement = useCallback(() => {
    setSelectedGraphicId(null);
    sketchRef.current?.create('polyline');
  }, []);

  // Efeito para tecla Delete
  useEffect(() => {
    if (!jimuMapView || !selectedGraphicId) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key !== 'Delete' && event.key !== 'Backspace') || !sketchRef.current) return;

      const graphicToEdit = graphicsRef.current.find(g => getGraphicId(g) === selectedGraphicId);
      if (!graphicToEdit) return;

      if (deleteMode === 'vertex') {
        const selectedVertices = (sketchRef.current as any).selectedVertices as Record<string, number[]>;
        if (!selectedVertices) return;

        const indexes = selectedVertices[getGraphicId(graphicToEdit)];
        if (!indexes || indexes.length === 0) return;

        const path = graphicToEdit.geometry.paths[0];

        // Remove vértices (mantendo pelo menos 2 pontos)
        indexes.sort((a, b) => b - a).forEach(idx => {
          if (path.length > 2) {
            path.splice(idx, 1);
          }
        });

        graphicToEdit.geometry = { ...graphicToEdit.geometry, paths: [path] };
        graphicToEdit.refresh();
        updateMeasurementDetails(graphicToEdit);
        drawAllLabels();
      } else {
        // Remove geometria inteira
        graphicsLayerRef.current?.remove(graphicToEdit);
        graphicsRef.current = graphicsRef.current.filter(g => g !== graphicToEdit);
        removeMeasurementDetails(graphicToEdit);
        setSelectedGraphicId(null);
        drawAllLabels();
      }

      event.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [jimuMapView, selectedGraphicId, deleteMode, drawAllLabels, getGraphicId, removeMeasurementDetails, updateMeasurementDetails]);

  // Efeito principal para configurar/limpar medição
  useEffect(() => {
    if (!jimuMapView || activeButton !== 'measureDistance') {
      cleanup();
      return;
    }

    let isMounted = true;
    const initialize = async () => {
      try {
        const [
          GraphicsLayer,
          SketchViewModel,
          geometryEngine,
          Graphic,
          TextSymbol,
          Point,
          SimpleLineSymbol
        ] = await loadArcGISJSAPIModules([
          'esri/layers/GraphicsLayer',
          'esri/widgets/Sketch/SketchViewModel',
          'esri/geometry/geometryEngine',
          'esri/Graphic',
          'esri/symbols/TextSymbol',
          'esri/geometry/Point',
          'esri/symbols/SimpleLineSymbol'
        ]);

        if (!isMounted) return;

        // Inicializa as referências
        geometryEngineRef.current = geometryEngine;
        GraphicRef.current = Graphic;
        TextSymbolRef.current = TextSymbol;
        PointRef.current = Point;
        SimpleLineSymbolRef.current = SimpleLineSymbol;

        // Configura os layers
        const gl = new GraphicsLayer();
        jimuMapView.view.map.add(gl);
        graphicsLayerRef.current = gl;

        const ll = new GraphicsLayer();
        jimuMapView.view.map.add(ll);
        labelsLayerRef.current = ll;

        // Configura o SketchViewModel
        const lineSymbol = new SimpleLineSymbol({
          color: 'white',
          width: 2
        });

        sketchRef.current = new SketchViewModel({
          view: jimuMapView.view,
          layer: graphicsLayerRef.current,
          defaultCreateOptions: { hasZ: false },
          updateOnGraphicClick: true,
          defaultUpdateOptions: { tool: 'reshape', toggleToolOnClick: false }
        });

        graphicsLayerRef.current.renderer = {
          type: 'simple',
          symbol: lineSymbol
        };

        // Configura os event handlers
        setupEventHandlers();
        setupClickSelection(jimuMapView.view);
        sketchRef.current.create('polyline');

        setIsInitialized(true);
        setInitializationError(null);
      } catch (error) {
        if (isMounted) {
          console.error('Falha na inicialização:', error);
          setInitializationError('Falha ao carregar ferramentas de medição');
          cleanup();
        }
      }
    };

    initialize();

    return () => {
      isMounted = false;
      cleanup();
    };
  }, [jimuMapView, activeButton, cleanup, setupClickSelection, setupEventHandlers]);

  return {
    measurementsDetails,
    selectedGraphicId,
    deleteMode,
    setDeleteMode,
    handleNewMeasurement,
    clearAll,
    formatDistance,
    isInitialized,
    initializationError
  };
};

export default useDistanceMeasurement;