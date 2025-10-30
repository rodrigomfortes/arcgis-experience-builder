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

  const sketchRef = useRef<__esri.SketchViewModel | null>(null);
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null);
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null);

  const createHandlerRef = useRef<__esri.IHandle | null>(null);
  const updateHandlerRef = useRef<__esri.IHandle | null>(null);
  const deleteHandlerRef = useRef<__esri.IHandle | null>(null);
  const clickHandlerRef = useRef<__esri.IHandle | null>(null);

  const graphicsRef = useRef<__esri.Graphic[]>([]);

  // Formatação
  const formatDistance = (meters: number) =>
    meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${meters.toFixed(2)} m`;

  const formatArea = (sqmeters: number) =>
    sqmeters >= 1000000
      ? `${(sqmeters / 1000000).toFixed(2)} km²`
      : `${sqmeters.toFixed(2)} m²`;

  const getGraphicId = (graphic: __esri.Graphic) =>
    (graphic as any).uid || (graphic as any)._uid || `${Date.now()}-${Math.random()}`;

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
    if (selectedGraphicId === id) setSelectedGraphicId(null);
  };

  const clearAll = () => {
    graphicsLayerRef.current?.removeAll();
    graphicsRef.current = [];
    setMeasurements([]);
    setSelectedGraphicId(null);
    sketchRef.current?.cancel();
  };

  useEffect(() => {
    if (!jimuMapView) return;

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

      if (graphicsLayerRef.current) {
        jimuMapView.view.map.remove(graphicsLayerRef.current);
        graphicsLayerRef.current = null;
      }

      graphicsRef.current = [];
      setSelectedGraphicId(null);
      setMeasurements([]);
    };

    if (activeButton === "") {
      cleanup();
      sketchRef.current = null;
      geometryEngineRef.current = null;
      return;
    }

    cleanup();

    loadArcGISJSAPIModules([
      "esri/layers/GraphicsLayer",
      "esri/widgets/Sketch/SketchViewModel",
      "esri/geometry/geometryEngine",
      "esri/Graphic",
    ]).then(([GraphicsLayer, SketchViewModel, geometryEngine, Graphic]) => {
      geometryEngineRef.current = geometryEngine;

      const gl = new GraphicsLayer();
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
          (event.graphic.geometry.type === "polyline" ||
            event.graphic.geometry.type === "polygon")
        ) {
          graphicsRef.current.push(event.graphic);
          updateMeasurementDetails(event.graphic);
          try {
            sketchRef.current?.update(event.graphic);
          } catch {}
        }
      });

      updateHandlerRef.current = sketchRef.current.on("update", (event) => {
        if (event.state === "active" || event.state === "complete") {
          const editedGraphic = event.graphics[0];
          const idx = graphicsRef.current.findIndex((g) => g === editedGraphic);
          if (idx >= 0) {
            graphicsRef.current[idx] = editedGraphic;
            updateMeasurementDetails(editedGraphic);
          }
        }
      });

      deleteHandlerRef.current = sketchRef.current.on("delete", (event) => {
        event.graphics.forEach((deletedGraphic) => {
          graphicsRef.current = graphicsRef.current.filter((g) => g !== deletedGraphic);
          removeMeasurementDetails(deletedGraphic);
        });
      });

      clickHandlerRef.current = jimuMapView.view.on("click", async (evt) => {
        const hit = await jimuMapView.view.hitTest(evt);
        const graphicHit = hit.results.find(
          (r) => r.graphic && r.graphic.layer === graphicsLayerRef.current
        );
        if (!graphicHit) {
          setSelectedGraphicId(null);
          sketchRef.current?.cancel();
          return;
        }
        setSelectedGraphicId(graphicHit.graphic.uid || null);
        try {
          sketchRef.current?.update(graphicHit.graphic);
        } catch {}
      });

      const createType = activeButton === "measureDistance" ? "polyline" : "polygon";
      sketchRef.current.create(createType);
    });

    return () => {
      cleanup();
    };
  }, [jimuMapView, activeButton]);

  // DELETE key listener para apagar gráfico selecionado
  useEffect(() => {
    if (!jimuMapView) return;
    if (!graphicsLayerRef.current) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Delete" && event.key !== "Backspace") return;
      if (!selectedGraphicId) return;

      const graphicToRemove = graphicsRef.current.find(
        (g) => getGraphicId(g) === selectedGraphicId
      );
      if (!graphicToRemove) return;

      graphicsLayerRef.current?.remove(graphicToRemove);
      graphicsRef.current = graphicsRef.current.filter((g) => g !== graphicToRemove);

      setMeasurements((prev) => prev.filter((m) => m.id !== selectedGraphicId));
      setSelectedGraphicId(null);

      if (sketchRef.current) {
        sketchRef.current.cancel();
      }

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
          setActiveButton(btn.name);
          setMeasurements([]);
          graphicsRef.current = [];
          clearAll();
          setSelectedGraphicId(null);
        }}
        onChangeUnit={(u) => {
          // Se desejar usar unidade para formatação, pode implementar
          console.log("Unidade alterada:", u);
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
                <strong>{`Medição ${String(i + 1).padStart(3, "0")}`}</strong>
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
