import React, { useState, useEffect, useRef } from "react";
import { AllWidgetProps } from "jimu-core";
import {
  JimuMapViewComponent,
  JimuMapView,
  loadArcGISJSAPIModules,
} from "jimu-arcgis";
import MeasureTools from "./components/measure-tools";

type SegmentDetail = {
  segmentNumber: number;
  length: number;
};

type MeasurementDetail = {
  id: string;
  segments: SegmentDetail[];
  total: number;
  area?: number;
  perimeter?: number;
};

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null);
  const [activeButton, setActiveButton] = useState<
    "measureDistance" | "measureArea" | ""
  >("");
  const [selectedGraphicId, setSelectedGraphicId] = useState<string | null>(null);
  const [measurements, setMeasurements] = useState<MeasurementDetail[]>([]);
  const [liveMeasurement, setLiveMeasurement] = useState<string | null>(null);

  const sketchRef = useRef<__esri.SketchViewModel | null>(null);
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null);
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null);
  const graphicModuleRef = useRef<typeof __esri.Graphic | null>(null);
  const liveTextGraphicRef = useRef<__esri.Graphic | null>(null);

  const createHandlerRef = useRef<__esri.IHandle | null>(null);
  const updateHandlerRef = useRef<__esri.IHandle | null>(null);
  const deleteHandlerRef = useRef<__esri.IHandle | null>(null);
  const clickHandlerRef = useRef<__esri.IHandle | null>(null);

  // Armazena os gráficos para controle local
  const graphicsRef = useRef<__esri.Graphic[]>([]);

  // Map para armazenar labels por gráfico
  const segmentLabelsMapRef = useRef<Map<string, __esri.Graphic[]>>(new Map());

  // Ref para manter selectedGraphicId atualizado para handlers
  const selectedGraphicIdRef = useRef<string | null>(selectedGraphicId);
  useEffect(() => {
    selectedGraphicIdRef.current = selectedGraphicId;
    console.log("[LOG] selectedGraphicId updated:", selectedGraphicId);
  }, [selectedGraphicId]);

  const getGraphicId = (graphic: __esri.Graphic): string => {
    if (!graphic.attributes) {
      graphic.attributes = {};
    }
    if (!graphic.attributes.widgetId) {
      graphic.attributes.widgetId = `measure-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;
      console.log("[LOG] Generated new widgetId for graphic:", graphic.attributes.widgetId);
    }
    return graphic.attributes.widgetId;
  };

  const formatDistance = (meters: number) =>
    meters >= 1000
      ? `${(meters / 1000).toFixed(2)} km`
      : `${meters.toFixed(2)} m`;

  const formatArea = (sqmeters: number) =>
    sqmeters >= 1000000
      ? `${(sqmeters / 1000000).toFixed(2)} km²`
      : `${sqmeters.toFixed(2)} m²`;

  const calculateSegments = (geometry: __esri.Geometry) => {
    if (!geometryEngineRef.current) return { segments: [], total: 0 };

    if (geometry.type === "polyline") {
      const polyline = geometry as __esri.Polyline;
      const segments: SegmentDetail[] = [];
      let total = 0;
      const path = polyline.paths[0];
      if (!path || path.length < 2) return { segments, total };

      for (let i = 0; i < path.length - 1; i++) {
        const pt1 = path[i];
        const pt2 = path[i + 1];
        const segment = {
          type: "polyline",
          paths: [[pt1, pt2]],
          spatialReference: geometry.spatialReference,
        } as __esri.Polyline;

        const segmentLength = geometryEngineRef.current.geodesicLength(segment, "meters");
        segments.push({ segmentNumber: i + 1, length: segmentLength });
        total += segmentLength;
      }
      return { segments, total };
    } else if (geometry.type === "polygon") {
      const polygon = geometry as __esri.Polygon;
      const rings = polygon.rings[0];
      if (!rings || rings.length < 3) return { segments: [], total: 0 };
      const segments: SegmentDetail[] = [];
      let totalPerimeter = 0;

      for (let i = 0; i < rings.length - 1; i++) {
        const pt1 = rings[i];
        const pt2 = rings[i + 1];
        const segment = {
          type: "polyline",
          paths: [[pt1, pt2]],
          spatialReference: geometry.spatialReference,
        } as __esri.Polyline;

        const segmentLength = geometryEngineRef.current.geodesicLength(segment, "meters");
        segments.push({ segmentNumber: i + 1, length: segmentLength });
        totalPerimeter += segmentLength;
      }

      const area = geometryEngineRef.current.geodesicArea(polygon, "square-meters");

      return { segments, total: area, area, perimeter: totalPerimeter };
    }
    return { segments: [], total: 0 };
  };

  const formatLastSegmentDistance = (geometry: __esri.Polyline): string => {
    if (!geometryEngineRef.current) return "";

    const path = geometry.paths[0];
    if (!path || path.length < 2) return "";

    const pt1 = path[path.length - 2];
    const pt2 = path[path.length - 1];

    const segment = {
      type: "polyline",
      paths: [[pt1, pt2]],
      spatialReference: geometry.spatialReference,
    } as __esri.Polyline;

    const segmentLength = geometryEngineRef.current.geodesicLength(segment, "meters");
    return `${formatDistance(segmentLength)}`;
  };

  const formatLiveMeasurement = (geometry: __esri.Geometry | null) => {
    if (!geometry || !geometryEngineRef.current) return null;

    if (geometry.type === "polyline") {
      const length = geometryEngineRef.current.geodesicLength(geometry, "meters");
      return formatDistance(length);
    }
    if (geometry.type === "polygon") {
      const area = geometryEngineRef.current.geodesicArea(geometry, "square-meters");
      return formatArea(area);
    }
    return null;
  };

  const updateLiveTextGraphic = (geometry: __esri.Geometry, text: string) => {
    if (!graphicModuleRef.current || !graphicsLayerRef.current) return;

    let labelPoint: __esri.Point | null = null;
    if (geometry.type === "polygon") {
      const polygon = geometry as __esri.Polygon;
      labelPoint = polygon.centroid;
    } else if (geometry.type === "polyline") {
      const polyline = geometry as __esri.Polyline;
      const paths = polyline.paths;
      if (paths.length > 0) {
        const lastPath = paths[paths.length - 1];
        if (lastPath.length > 1) {
          const lastPoint = lastPath[lastPath.length - 1];
          const secondLastPoint = lastPath[lastPath.length - 2];
          labelPoint = {
            type: "point",
            x: (lastPoint[0] + secondLastPoint[0]) / 2,
            y: (lastPoint[1] + secondLastPoint[1]) / 2,
            spatialReference: geometry.spatialReference,
          } as __esri.Point;
        }
      }
    }

    if (!labelPoint) return;

    if (!liveTextGraphicRef.current) {
      liveTextGraphicRef.current = new graphicModuleRef.current({
        geometry: labelPoint,
        symbol: {
          type: "text",
          color: "black",
          haloColor: "white",
          haloSize: "1px",
          text: text,
          xoffset: 0,
          yoffset: -15,
          font: {
            size: 14,
            family: "Arial",
            weight: "bold",
          },
        },
      });
      graphicsLayerRef.current.add(liveTextGraphicRef.current);
      console.log("[LOG] Added live text graphic:", text);
    } else {
      liveTextGraphicRef.current.geometry = labelPoint;
      (liveTextGraphicRef.current.symbol as __esri.TextSymbol).text = text;
      console.log("[LOG] Updated live text graphic:", text);
    }
  };

  const updateMeasurementDetails = (graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic);
    const { segments, total, area, perimeter } = calculateSegments(graphic.geometry);
    setMeasurements((prev) => {
      const idx = prev.findIndex((m) => m.id === id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { id, segments, total, area, perimeter };
        console.log("[LOG] Updated measurement details for id:", id);
        return copy;
      }
      console.log("[LOG] Added new measurement detail for id:", id);
      return [...prev, { id, segments, total, area, perimeter }];
    });

    if (graphic.geometry.type === "polyline") {
      const path = graphic.geometry.paths[0];
      if (path && path.length >= 2) {
        updateLiveTextGraphic(graphic.geometry, formatDistance(total));
      }
    }

    if (graphic.geometry.type === "polygon") {
      updateLiveTextGraphic(graphic.geometry, formatArea(total));
    }
  };

  const removeMeasurementDetails = (graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic);
    console.log("[LOG] Removing measurement detail for id:", id);
    setMeasurements((prev) => prev.filter((m) => m.id !== id));
    if (selectedGraphicIdRef.current === id) {
      console.log("[LOG] Clearing selectedGraphicId as it matches removed graphic");
      setSelectedGraphicId(null);
    }
  };

  const clearAll = () => {
    console.log("[LOG] Clear all called");
    if (graphicsLayerRef.current) {
      graphicsLayerRef.current.removeAll();
    }
    graphicsRef.current = [];
    segmentLabelsMapRef.current.clear();
    setMeasurements([]);
    setSelectedGraphicId(null);
    setLiveMeasurement(null);
    sketchRef.current?.cancel();
  };

  const handleClear = () => {
    clearAll();
  };

  // Remove labels de segmentos antigos de um gráfico
  const removeSegmentLabels = (graphicId: string) => {
    const oldLabels = segmentLabelsMapRef.current.get(graphicId);
    if (oldLabels && graphicsLayerRef.current) {
      graphicsLayerRef.current.removeMany(oldLabels);
    }
    segmentLabelsMapRef.current.delete(graphicId);
  };

  // Cria labels de segmentos para o gráfico dado e adiciona na camada
  const createSegmentLabelsForGraphic = (graphic: __esri.Graphic) => {
    if (!graphicsLayerRef.current || !graphicModuleRef.current) return;

    const graphicId = getGraphicId(graphic);
    removeSegmentLabels(graphicId);

    const { segments } = calculateSegments(graphic.geometry);
    const labels: __esri.Graphic[] = [];

    segments.forEach((segment) => {
      let pt1: number[];
      let pt2: number[];

      if (graphic.geometry.type === "polyline") {
        pt1 = (graphic.geometry as __esri.Polyline).paths[0][segment.segmentNumber - 1];
        pt2 = (graphic.geometry as __esri.Polyline).paths[0][segment.segmentNumber];
      } else if (graphic.geometry.type === "polygon") {
        pt1 = (graphic.geometry as __esri.Polygon).rings[0][segment.segmentNumber - 1];
        pt2 = (graphic.geometry as __esri.Polygon).rings[0][segment.segmentNumber];
      } else {
        return;
      }

      const midPoint = {
        type: "point",
        x: (pt1[0] + pt2[0]) / 2,
        y: (pt1[1] + pt2[1]) / 2,
        spatialReference: graphic.geometry.spatialReference,
      } as __esri.Point;

      const labelGraphic = new graphicModuleRef.current({
        geometry: midPoint,
        symbol: {
          type: "text",
          text: formatDistance(segment.length),
          color: "black",
          haloColor: "white",
          haloSize: "1px",
          xoffset: 0,
          yoffset: -15,
          font: {
            size: 12,
            family: "Arial",
            weight: "bold",
          },
        },
        attributes: { parentId: graphicId },
      });

      labels.push(labelGraphic);
    });

    labels.forEach((label) => graphicsLayerRef.current!.add(label));
    segmentLabelsMapRef.current.set(graphicId, labels);
  };

  // --- START: Inicialização do SketchViewModel e camadas ---

  const initializedRef = useRef(false);

  useEffect(() => {
    if (!jimuMapView || initializedRef.current) return;

    loadArcGISJSAPIModules([
      "esri/layers/GraphicsLayer",
      "esri/widgets/Sketch/SketchViewModel",
      "esri/geometry/geometryEngine",
      "esri/Graphic",
    ]).then(([GraphicsLayer, SketchViewModel, geometryEngine, Graphic]) => {
      geometryEngineRef.current = geometryEngine;
      graphicModuleRef.current = Graphic;

      const gl = new GraphicsLayer({
        id: "measurementWidgetGraphicsLayer",
        title: "Measurement Graphics",
        listMode: "hide",
      });
      jimuMapView.view.map.add(gl);
      graphicsLayerRef.current = gl;

      sketchRef.current = new SketchViewModel({
        view: jimuMapView.view,
        layer: graphicsLayerRef.current,
        defaultCreateOptions: { hasZ: false },
        updateOnGraphicClick: true,
        defaultUpdateOptions: { tool: "reshape", toggleToolOnClick: false },
      });

      // Create event
      createHandlerRef.current = sketchRef.current.on("create", (event) => {
        if (
          event.state === "active" &&
          (event.graphic.geometry.type === "polyline" || event.graphic.geometry.type === "polygon")
        ) {
          let liveValue = "";
          if (event.graphic.geometry.type === "polyline") {
            liveValue = formatLastSegmentDistance(event.graphic.geometry as __esri.Polyline);
          } else if (event.graphic.geometry.type === "polygon") {
            liveValue = formatLiveMeasurement(event.graphic.geometry);
          }
          console.log("[LOG] Live measurement during create:", liveValue);
          setLiveMeasurement(liveValue);
          updateLiveTextGraphic(event.graphic.geometry, liveValue ?? "");
        }

        if (
          event.state === "complete" &&
          (event.graphic.geometry.type === "polyline" || event.graphic.geometry.type === "polygon")
        ) {
          const graphic = event.graphic;
          const graphicId = getGraphicId(graphic);
          console.log("[LOG] Graphic created with id:", graphicId);

          // Adiciona o gráfico localmente e atualiza medições
          graphicsRef.current.push(graphic);
          updateMeasurementDetails(graphic);

          // Cria labels de segmentos para o gráfico criado
          createSegmentLabelsForGraphic(graphic);

          setLiveMeasurement(null);

          // Remove texto dinâmico de medição ao vivo
          if (liveTextGraphicRef.current) {
            graphicsLayerRef.current?.remove(liveTextGraphicRef.current);
            liveTextGraphicRef.current = null;
          }

          try {
            sketchRef.current?.update(graphic);
          } catch (e) {
            console.warn("[LOG] Error updating graphic after creation:", e);
          }
        }
      });

      // Update event
      updateHandlerRef.current = sketchRef.current.on("update", (event) => {
        if (event.state === "active" || event.state === "complete") {
          const editedGraphic = event.graphics[0];
          const graphicId = getGraphicId(editedGraphic);
          const idx = graphicsRef.current.findIndex((g) => getGraphicId(g) === graphicId);
          if (idx >= 0) {
            graphicsRef.current[idx] = editedGraphic;
            updateMeasurementDetails(editedGraphic);

            if (event.state === "active") {
              // Remover label dinâmico se existir
              if (liveTextGraphicRef.current) {
                graphicsLayerRef.current?.remove(liveTextGraphicRef.current);
                liveTextGraphicRef.current = null;
              }
              // NÃO chama updateLiveTextGraphic para evitar reaparecer label durante edição
              setLiveMeasurement(null);
            } else {
              // Estado complete, pode atualizar o liveMeasurement e o label
              setLiveMeasurement(null);
              if (liveTextGraphicRef.current) {
                graphicsLayerRef.current?.remove(liveTextGraphicRef.current);
                liveTextGraphicRef.current = null;
              }
            }

            // Atualiza labels permanentes dos segmentos sempre
            createSegmentLabelsForGraphic(editedGraphic);

            console.log("[LOG] Graphic updated with id:", graphicId);
          }
        }
      });

      // Delete event
      deleteHandlerRef.current = sketchRef.current.on("delete", (event) => {
        event.graphics.forEach((deletedGraphic) => {
          const graphicId = getGraphicId(deletedGraphic);
          console.log("[LOG] Graphic deleted with id:", graphicId);

          // Remove labels associados
          removeSegmentLabels(graphicId);

          graphicsRef.current = graphicsRef.current.filter(
            (g) => getGraphicId(g) !== graphicId
          );
          removeMeasurementDetails(deletedGraphic);
        });
      });

      // Click event para seleção
      clickHandlerRef.current = jimuMapView.view.on("click", async (evt) => {
        console.log("[LOG] Map click event");
        const hit = await jimuMapView.view.hitTest(evt);
        const candidates = hit.results.filter(
          (r) => r.graphic && r.graphic.layer?.id === graphicsLayerRef.current?.id
        );

        console.log(
          "[LOG] Current graphicsRef IDs:",
          graphicsRef.current.map((g) => getGraphicId(g))
        );
        console.log("[LOG] Hit candidate IDs:", candidates.map((c) => getGraphicId(c.graphic)));

        let graphicHit = null;
        for (const r of candidates) {
          const hitId = getGraphicId(r.graphic);
          console.log("[LOG] Checking candidate graphic id:", hitId);
          const found = graphicsRef.current.find((g) => getGraphicId(g) === hitId);
          console.log("[LOG] Found in graphicsRef:", found ? "Yes" : "No");
          if (found) {
            graphicHit = r;
            break;
          }
        }

        if (!graphicHit && candidates.length > 0) {
          const fallbackId = getGraphicId(candidates[0].graphic);
          console.warn(
            "[WARN] Graphic not found in graphicsRef, fallback to first candidate with id:",
            fallbackId
          );
          setSelectedGraphicId(fallbackId);
          try {
            sketchRef.current?.update(candidates[0].graphic);
          } catch (e) {
            console.warn("[LOG] Error updating graphic on fallback click:", e);
          }
          return;
        }

        if (!graphicHit) {
          console.log("[LOG] No measurement graphic hit");
          setSelectedGraphicId(null);
          sketchRef.current?.cancel();
          return;
        }
        const clickedId = getGraphicId(graphicHit.graphic);
        console.log("[LOG] Graphic clicked, setting selectedGraphicId to:", clickedId);
        setSelectedGraphicId(clickedId);
        try {
          sketchRef.current?.update(graphicHit.graphic);
        } catch (e) {
          console.warn("[LOG] Error updating graphic on click:", e);
        }
      });

      initializedRef.current = true;
    });
  }, [jimuMapView]);

  // Delete com tecla Delete ou Backspace
  useEffect(() => {
    if (!jimuMapView) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      console.log("[LOG] KeyDown event:", event.key, "selectedGraphicId:", selectedGraphicIdRef.current);
      if (event.key !== "Delete" && event.key !== "Backspace") return;

      const currentSelectedGraphicId = selectedGraphicIdRef.current;
      if (!currentSelectedGraphicId) {
        console.log("[LOG] No graphic selected, aborting delete");
        return;
      }

      const graphicToRemove = graphicsLayerRef.current?.graphics.find(
        (g) => getGraphicId(g) === currentSelectedGraphicId
      );

      if (!graphicToRemove) {
        console.log("[LOG] Selected graphic not found in graphicsLayer, aborting delete");
        return;
      }

      console.log("[LOG] Removing graphic with id:", currentSelectedGraphicId);

      graphicsLayerRef.current?.remove(graphicToRemove);
      // Remove labels associados
      removeSegmentLabels(currentSelectedGraphicId);

      graphicsRef.current = graphicsRef.current.filter(
        (g) => getGraphicId(g) !== currentSelectedGraphicId
      );

      setMeasurements((prev) => prev.filter((m) => m.id !== currentSelectedGraphicId));

      setSelectedGraphicId(null);

      sketchRef.current?.cancel();

      event.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [jimuMapView]);

  const handleNewMeasurement = () => {
    if (!sketchRef.current) return;
    console.log("[LOG] handleNewMeasurement called");
    sketchRef.current.cancel();
    setSelectedGraphicId(null);
    const createType = activeButton === "measureDistance" ? "polyline" : "polygon";
    sketchRef.current.create(createType);
  };

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
        onSelectTool={(btn) => {
          console.log("[LOG] Tool selected:", btn.name);
          setActiveButton(btn.name);
        }}
        onChangeUnit={(u) => {
          console.log("[LOG] Unit changed:", u);
        }}
        onClear={handleClear}
      />

      {liveMeasurement && (
        <div
          style={{
            padding: "6px 12px",
            backgroundColor: "#0079c1",
            color: "white",
            fontWeight: "600",
            fontSize: "16px",
            textAlign: "center",
            userSelect: "none",
            zIndex: 1000,
          }}
        >
          {activeButton === "measureDistance"
            ? `Distância atual: ${liveMeasurement}`
            : `Área atual: ${liveMeasurement}`}
        </div>
      )}

      {(activeButton === "measureDistance" || activeButton === "measureArea") && (
        <>
          <div
            style={{
              display: "flex",
              gap: "12px",
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
                flex: 1,
              }}
              aria-label="Nova Medição"
            >
              Nova Medição
            </button>
            <button
              type="button"
              onClick={handleClear}
              style={{
                backgroundColor: "transparent",
                border: "2px solid #0079c1",
                color: "#0079c1",
                borderRadius: 0,
                padding: "12px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: 600,
                flex: 1,
              }}
              aria-label="Limpar Medições"
            >
              Limpar Medições
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
              <div className="text-center text-muted">Nenhuma medição registrada.</div>
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
  );
};

export default Widget;
