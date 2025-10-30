import React, { useState, useEffect, useRef } from "react";
import { AllWidgetProps } from "jimu-core";
import {
  JimuMapComponent,
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
  const [activeButton, setActiveButton] = useState<"measureDistance" | "measureArea" | "">("");
  const [selectedGraphicId, setSelectedGraphicId] = useState<string | null>(null);
  const [measurements, setMeasurements] = useState<MeasurementDetail[]>([]);

  const sketchRef = useRef<__esri.SketchViewModel | null>(null);
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null);
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null);

  const createHandlerRef = useRef<__esri.IHandle | null>(null);
  const updateHandlerRef = useRef<__esri.IHandle | null>(null);
  const deleteHandlerRef = useRef<__esri.IHandle | null>(null);
  const clickHandlerRef = useRef<__esri.IHandle | null>(null);

  const graphicsRef = useRef<__esri.Graphic[]>([]);

  const layerInitializedRef = useRef(false);

  // Gera ID único e persistente no atributo do gráfico
  const getGraphicId = (graphic: __esri.Graphic): string => {
    if (!graphic.attributes) {
      graphic.attributes = {};
    }
    if (!graphic.attributes.widgetId) {
      graphic.attributes.widgetId = `measure-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    return graphic.attributes.widgetId;
  };

  // Formatação
  const formatDistance = (meters: number) =>
    meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${meters.toFixed(2)} m`;

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
      }

      const area = geometryEngineRef.current.geodesicArea(polygon, "square-meters");
      const perimeter = segments.reduce((acc, seg) => acc + seg.length, 0);

      return { segments, total: area, area, perimeter };
    }
    return { segments: [], total: 0 };
  };

  const updateMeasurementDetails = (graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic);
    const { segments, total, area, perimeter } = calculateSegments(graphic.geometry);
    setMeasurements((prev) => {
      const idx = prev.findIndex((m) => m.id === id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { id, segments, total, area, perimeter };
        return copy;
      }
      return [...prev, { id, segments, total, area, perimeter }];
    });
  };

  const removeMeasurementDetails = (graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic);
    setMeasurements((prev) => prev.filter((m) => m.id !== id));
    if (selectedGraphicId === id) {
      setSelectedGraphicId(null);
    }
  };

  const clearAll = () => {
    if (graphicsLayerRef.current) {
      graphicsLayerRef.current.removeAll();
    }
    graphicsRef.current = [];
    setMeasurements([]);
    setSelectedGraphicId(null);
    sketchRef.current?.cancel();
  };

  // Função de limpeza completa, usada para troca de ferramenta e cleanup
  const cleanup = () => {
    sketchRef.current?.cancel();

    createHandlerRef.current?.remove();
    updateHandlerRef.current?.remove();
    deleteHandlerRef.current?.remove();
    clickHandlerRef.current?.remove();

    createHandlerRef.current = null;
    updateHandlerRef.current = null;
    deleteHandlerRef.current = null;
    clickHandlerRef.current = null;

    if (graphicsLayerRef.current && jimuMapView) {
      jimuMapView.view.map.remove(graphicsLayerRef.current);
      graphicsLayerRef.current = null;
    }

    graphicsRef.current = [];
    setSelectedGraphicId(null);
    setMeasurements([]);
    layerInitializedRef.current = false;
  };

  // Cria camada e handlers UMA única vez ao iniciar o mapa
  useEffect(() => {
    if (!jimuMapView || layerInitializedRef.current) return;

    loadArcGISJSAPIModules([
      "esri/layers/GraphicsLayer",
      "esri/widgets/Sketch/SketchViewModel",
      "esri/geometry/geometryEngine",
    ]).then(([GraphicsLayer, SketchViewModel, geometryEngine]) => {
      geometryEngineRef.current = geometryEngine;

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

      createHandlerRef.current = sketchRef.current.on("create", (event) => {
        if (
          event.state === "complete" &&
          (event.graphic.geometry.type === "polyline" || event.graphic.geometry.type === "polygon")
        ) {
          const graphicId = getGraphicId(event.graphic);
          graphicsRef.current.push(event.graphic);
          updateMeasurementDetails(event.graphic);
          try {
            sketchRef.current?.update(event.graphic);
          } catch {}
          console.log(`[DEBUG] Graphic created - ID: ${graphicId}, Type: ${event.graphic.geometry.type}`);
        }
      });

      updateHandlerRef.current = sketchRef.current.on("update", (event) => {
        if (event.state === "active" || event.state === "complete") {
          const editedGraphic = event.graphics[0];
          const graphicId = getGraphicId(editedGraphic);
          const idx = graphicsRef.current.findIndex((g) => getGraphicId(g) === graphicId);
          if (idx >= 0) {
            graphicsRef.current[idx] = editedGraphic;
            updateMeasurementDetails(editedGraphic);
            console.log(`[DEBUG] Graphic updated - ID: ${graphicId}`);
          }
        }
      });

      deleteHandlerRef.current = sketchRef.current.on("delete", (event) => {
        event.graphics.forEach((deletedGraphic) => {
          const graphicId = getGraphicId(deletedGraphic);
          graphicsRef.current = graphicsRef.current.filter((g) => getGraphicId(g) !== graphicId);
          removeMeasurementDetails(deletedGraphic);
          console.log(`[DEBUG] Deleted graphic - ID: ${graphicId}`);
        });
      });

      clickHandlerRef.current = jimuMapView.view.on("click", async (evt) => {
        const hit = await jimuMapView.view.hitTest(evt);
        const candidates = hit.results.filter(
          (r) => r.graphic && r.graphic.layer?.id === graphicsLayerRef.current?.id
        );
        let graphicHit = null;
        for (const r of candidates) {
          const hitId = getGraphicId(r.graphic);
          if (graphicsRef.current.find((g) => getGraphicId(g) === hitId)) {
            graphicHit = r;
            break;
          }
        }
        if (!graphicHit) {
          setSelectedGraphicId(null);
          sketchRef.current?.cancel();
          console.log("[DEBUG] Click not on measurement graphic - clearing selection");
          return;
        }
        const clickedId = getGraphicId(graphicHit.graphic);
        setSelectedGraphicId(clickedId);
        try {
          sketchRef.current?.update(graphicHit.graphic);
        } catch {}
      });

      layerInitializedRef.current = true;
    });
  }, [jimuMapView]);

  // Quando a ferramenta muda, cancela desenho atual e inicia novo desenho do tipo correto
  useEffect(() => {
    if (!jimuMapView || !sketchRef.current || !graphicsLayerRef.current) return;

    console.log(`[DEBUG] activeButton changed to ${activeButton}`);

    sketchRef.current.cancel();
    graphicsLayerRef.current.removeAll();
    graphicsRef.current = [];
    setSelectedGraphicId(null);
    setMeasurements([]);

    if (activeButton === "") return;

    const createType = activeButton === "measureDistance" ? "polyline" : "polygon";
    sketchRef.current.create(createType);
  }, [activeButton, jimuMapView]);

  // Evento para deletar gráfico selecionado ao pressionar Delete ou Backspace
  useEffect(() => {
    if (!jimuMapView) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Delete" && event.key !== "Backspace") return;
      if (!selectedGraphicId) return;

      const graphicToRemove = graphicsRef.current.find(
        (g) => getGraphicId(g) === selectedGraphicId
      );

      if (!graphicToRemove) return;

      graphicsLayerRef.current?.remove(graphicToRemove);
      graphicsRef.current = graphicsRef.current.filter(
        (g) => getGraphicId(g) !== selectedGraphicId
      );

      setMeasurements((prev) => prev.filter((m) => m.id !== selectedGraphicId));
      setSelectedGraphicId(null);
      sketchRef.current?.cancel();

      event.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedGraphicId, jimuMapView]);

  const handleNewMeasurement = () => {
    if (!sketchRef.current) return;
    sketchRef.current.cancel();
    setSelectedGraphicId(null);
    const createType = activeButton === "measureDistance" ? "polyline" : "polygon";
    sketchRef.current.create(createType);
  };

  const handleClear = () => {
    clearAll();
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
          console.log(`[DEBUG] Tool selected: ${btn.name}`);
          setActiveButton(btn.name);
        }}
        onChangeUnit={(u) => {
          console.log("[DEBUG] Unit changed:", u);
        }}
        onClear={handleClear}
      />

      {(activeButton === "measureDistance" || activeButton === "measureArea") && (
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
      )}

      {(activeButton === "measureDistance" || activeButton === "measureArea") && (
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
          {measurements.length === 0 ? (
            <div className="text-center text-muted">Nenhuma medição registrada.</div>
          ) : (
            measurements.map((m, i) => (
              <div key={m.id} style={{ marginBottom: "12px" }}>
                <strong>{`Medição ${String(i + 1).padStart(3, "0")} (ID: ${m.id})`}</strong>
                <div style={{ marginLeft: "12px", marginTop: "4px" }}>
                  {m.segments.map((segment) => (
                    <div key={segment.segmentNumber}>
                      {activeButton === "measureDistance"
                        ? `Distância segmento ${segment.segmentNumber}: ${formatDistance(segment.length)}`
                        : `Perímetro segmento ${segment.segmentNumber}: ${formatDistance(segment.length)}`}
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
