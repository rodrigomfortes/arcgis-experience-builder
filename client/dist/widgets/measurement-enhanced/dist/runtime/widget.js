System.register(["jimu-core/react","jimu-arcgis","jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/measurement-enhanced/src/runtime/components/measure-tools.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/measurement-enhanced/src/runtime/components/measure-tools.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */


// Componentes SVG para ícones profissionais
const DistanceIcon = () => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "6", cy: "12", r: "2", fill: "currentColor" }),
    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M8 12h8", stroke: "currentColor", strokeWidth: "2", fill: "none" }),
    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "18", cy: "12", r: "2", fill: "currentColor" })));
const AreaIcon = () => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M18 6L18 18L6 18Z", fill: "none", stroke: "currentColor", strokeWidth: "2" })));
const TrashIcon = () => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor" },
    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })));
const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
&.measure-toolbar {
  height: 40px;
  .measure-tools {
    height: 24px;
    .measure-tool {
      border-radius: var(--sys-shape-1) !important;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      
      &:hover {
        background-color: var(--sys-color-action-hover);
        transform: translateY(-1px);
      }
      
      &.active {
        color: var(--sys-color-action-selected-text);
        background-color: var(--sys-color-action-selected);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      svg {
        transition: all 0.2s ease;
      }
      
      &:hover svg {
        transform: scale(1.1);
      }
    }
  }
}
`;
const MeasureTools = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, ref) => {
    const { activeButton, onSelectTool, onClear, angularSnap } = props;
    const measureButtons = [
        {
            name: 'measureDistance',
            icon: 'measure',
            enabled: true
        },
        {
            name: 'measureArea',
            icon: 'polygon',
            enabled: true
        }
    ];
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref, className: 'measure-toolbar d-flex justify-content-between p-2', css: style },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'measure-tools d-flex' }, measureButtons.filter(m => m.enabled).map((measureButton) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { key: measureButton.name, icon: true, type: 'tertiary', className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('measure-tool p-0 me-2', { active: activeButton === measureButton.name }), onClick: () => {
                onSelectTool(measureButton);
            }, "aria-label": measureButton.name }, measureButton.icon === 'measure' ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(DistanceIcon, null) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(AreaIcon, null))))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex align-items-center' },
            angularSnap && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    fontSize: '10px',
                    color: '#0079c1',
                    fontWeight: 'bold',
                    marginRight: '8px',
                    padding: '2px 6px',
                    backgroundColor: '#e6f3ff',
                    borderRadius: '3px',
                    border: '1px solid #0079c1'
                }, title: "Snap Angular Ativo - \u00C2ngulos: 90\u00B0, 45\u00B0, 30\u00B0" }, "SNAP")),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { icon: true, type: 'tertiary', className: 'measure-tool p-0', onClick: onClear, "aria-label": 'Limpar medi\u00E7\u00F5es' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(TrashIcon, null)))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeasureTools);


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/measurement-enhanced/src/runtime/widget.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _components_measure_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/measure-tools */ "./your-extensions/widgets/measurement-enhanced/src/runtime/components/measure-tools.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const Widget = (props) => {
    var _a, _b;
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [activeButton, setActiveButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [selectedGraphicId, setSelectedGraphicId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [measurements, setMeasurements] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [liveMeasurement, setLiveMeasurement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isNearStartPoint, setIsNearStartPoint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [startPoint, setStartPoint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isRightAngle, setIsRightAngle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [rightAngleSuggestion, setRightAngleSuggestion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [rightAngleGraphic, setRightAngleGraphic] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const sketchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const graphicsLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const labelsLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const geometryEngineRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const graphicModuleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const liveTextGraphicRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const createHandlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const updateHandlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const deleteHandlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const clickHandlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const doubleClickHandlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // Armazena os gráficos para controle local
    const graphicsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    // Map para armazenar labels por gráfico
    const segmentLabelsMapRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
    // Map para armazenar vértices por gráfico
    const vertexPointsMapRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
    // Map para armazenar labels de área por gráfico
    const areaLabelsMapRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
    // Ref para manter selectedGraphicId atualizado para handlers
    const selectedGraphicIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selectedGraphicId);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        selectedGraphicIdRef.current = selectedGraphicId;
        console.log("[LOG] selectedGraphicId updated:", selectedGraphicId);
    }, [selectedGraphicId]);
    const getGraphicId = (graphic) => {
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
    const formatDistance = (meters) => meters >= 1000
        ? `${(meters / 1000).toFixed(2)} km`
        : `${meters.toFixed(2)} m`;
    const formatArea = (sqmeters) => sqmeters >= 1000000
        ? `${(sqmeters / 1000000).toFixed(2)} km²`
        : `${sqmeters.toFixed(2)} m²`;
    const calculateSegments = (geometry) => {
        if (!geometryEngineRef.current)
            return { segments: [], total: 0 };
        if (geometry.type === "polyline") {
            const polyline = geometry;
            const segments = [];
            let total = 0;
            const path = polyline.paths[0];
            if (!path || path.length < 2)
                return { segments, total };
            for (let i = 0; i < path.length - 1; i++) {
                const pt1 = path[i];
                const pt2 = path[i + 1];
                const segment = {
                    type: "polyline",
                    paths: [[pt1, pt2]],
                    spatialReference: geometry.spatialReference,
                };
                const segmentLength = geometryEngineRef.current.geodesicLength(segment, "meters");
                segments.push({ segmentNumber: i + 1, length: segmentLength });
                total += segmentLength;
            }
            return { segments, total };
        }
        else if (geometry.type === "polygon") {
            const polygon = geometry;
            const rings = polygon.rings[0];
            if (!rings || rings.length < 3)
                return { segments: [], total: 0 };
            const segments = [];
            let totalPerimeter = 0;
            for (let i = 0; i < rings.length - 1; i++) {
                const pt1 = rings[i];
                const pt2 = rings[i + 1];
                const segment = {
                    type: "polyline",
                    paths: [[pt1, pt2]],
                    spatialReference: geometry.spatialReference,
                };
                const segmentLength = geometryEngineRef.current.geodesicLength(segment, "meters");
                segments.push({ segmentNumber: i + 1, length: segmentLength });
                totalPerimeter += segmentLength;
            }
            const area = geometryEngineRef.current.geodesicArea(polygon, "square-meters");
            return { segments, total: area, area, perimeter: totalPerimeter };
        }
        return { segments: [], total: 0 };
    };
    const formatLastSegmentDistance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((geometry) => {
        if (!geometryEngineRef.current)
            return "";
        const path = geometry.paths[0];
        if (!path || path.length < 2)
            return "";
        const pt1 = path[path.length - 2];
        const pt2 = path[path.length - 1];
        const segment = {
            type: "polyline",
            paths: [[pt1, pt2]],
            spatialReference: geometry.spatialReference,
        };
        const segmentLength = geometryEngineRef.current.geodesicLength(segment, "meters");
        return formatDistance(segmentLength);
    }, []);
    const formatLiveMeasurement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((geometry) => {
        if (!geometry || !geometryEngineRef.current)
            return null;
        if (geometry.type === "polyline") {
            const length = geometryEngineRef.current.geodesicLength(geometry, "meters");
            return formatDistance(length);
        }
        if (geometry.type === "polygon") {
            const area = geometryEngineRef.current.geodesicArea(geometry, "square-meters");
            return formatArea(area);
        }
        return null;
    }, []);
    // Função para verificar se está próximo ao ponto inicial
    const checkNearStartPoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((currentPoint) => {
        if (!startPoint || !geometryEngineRef.current) {
            console.log("[DEBUG] checkNearStartPoint - startPoint ou geometryEngine não disponível");
            return false;
        }
        // Usar distance para cálculo de distância
        const distance = geometryEngineRef.current.distance(startPoint, currentPoint, "meters");
        const threshold = 50; // Aumentei para 50 metros de tolerância
        console.log("[DEBUG] checkNearStartPoint - distance:", distance, "threshold:", threshold);
        return distance <= threshold;
    }, [startPoint]);
    // Função para detectar ângulos de 90 graus
    const detectRightAngle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((polyline) => {
        if (!polyline.paths[0] || polyline.paths[0].length < 2) {
            return { isRightAngle: false, angle: 0, suggestion: null };
        }
        const paths = polyline.paths[0];
        const lastPoint = paths[paths.length - 1];
        const secondLastPoint = paths[paths.length - 2];
        // Se há apenas 2 pontos, verificar se está próximo de 90 graus com o eixo
        if (paths.length === 2) {
            const dx = lastPoint[0] - secondLastPoint[0];
            const dy = lastPoint[1] - secondLastPoint[1];
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            // Verificar se está próximo de 0°, 90°, 180° ou 270°
            const normalizedAngle = ((angle % 360) + 360) % 360;
            const isHorizontal = Math.abs(normalizedAngle) < 5 || Math.abs(normalizedAngle - 180) < 5;
            const isVertical = Math.abs(normalizedAngle - 90) < 5 || Math.abs(normalizedAngle - 270) < 5;
            if (isHorizontal || isVertical) {
                return {
                    isRightAngle: true,
                    angle: normalizedAngle,
                    suggestion: isHorizontal ? "Linha horizontal detectada" : "Linha vertical detectada"
                };
            }
        }
        // Se há 3 ou mais pontos, verificar o ângulo entre os últimos 3 pontos
        if (paths.length >= 3) {
            const thirdLastPoint = paths[paths.length - 3];
            // Calcular vetores
            const v1 = {
                x: secondLastPoint[0] - thirdLastPoint[0],
                y: secondLastPoint[1] - thirdLastPoint[1]
            };
            const v2 = {
                x: lastPoint[0] - secondLastPoint[0],
                y: lastPoint[1] - secondLastPoint[1]
            };
            // Calcular ângulo entre vetores
            const dotProduct = v1.x * v2.x + v1.y * v2.y;
            const magnitude1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
            const magnitude2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
            if (magnitude1 > 0 && magnitude2 > 0) {
                const cosAngle = dotProduct / (magnitude1 * magnitude2);
                const angle = Math.acos(Math.max(-1, Math.min(1, cosAngle))) * (180 / Math.PI);
                // Verificar se está próximo de 90 graus (tolerância de 5 graus)
                if (Math.abs(angle - 90) < 5) {
                    return {
                        isRightAngle: true,
                        angle: angle,
                        suggestion: "Ângulo reto detectado - duplo clique para travar"
                    };
                }
            }
        }
        return { isRightAngle: false, angle: 0, suggestion: null };
    }, []);
    // Função recursiva para explorar camadas dentro de grupos
    const exploreGroupLayers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((layer, featureSources, supportedLayerTypes) => {
        if (layer.layers && layer.layers.length > 0) {
            // Se é um grupo, explorar suas camadas filhas
            console.log("[DEBUG] Explorando grupo:", layer.title || layer.id);
            layer.layers.forEach((sublayer) => {
                exploreGroupLayers(sublayer, featureSources, supportedLayerTypes);
            });
        }
        else if (supportedLayerTypes.includes(layer.type)) {
            // Se é uma camada suportada, adicionar
            featureSources.push({
                layer: layer,
                enabled: true
            });
            console.log("[LOG] Camada encontrada dentro de grupo:", {
                title: layer.title || layer.id,
                type: layer.type,
                url: layer.url || "N/A"
            });
        }
    }, []);
    // Função para configurar TODAS as camadas suportadas como fontes de snapping (versatilidade máxima)
    const configureSnappingSources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        var _a;
        if (!((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) || !sketchRef.current) {
            return;
        }
        const featureSources = [];
        // Tipos de camadas suportadas para snapping conforme documentação oficial
        const supportedLayerTypes = [
            "feature", // FeatureLayer
            "graphics", // GraphicsLayer
            "geojson", // GeoJSONLayer
            "wfs", // WFSLayer
            "csv", // CSVLayer
            "subtype", // SubtypeSublayer
            "map-notes", // MapNotesLayer
            "scene", // SceneLayer (3D Object)
            "building-scene" // BuildingSceneLayer
        ];
        // Iterar por TODAS as camadas do mapa (versatilidade máxima)
        jimuMapView.view.map.layers.forEach((layer) => {
            const layerType = layer.type;
            const layerTitle = layer.title || layer.id || "Unnamed Layer";
            if (layerType === "group") {
                // Se é um grupo, explorar suas camadas filhas
                console.log("[DEBUG] Processando grupo:", layerTitle);
                exploreGroupLayers(layer, featureSources, supportedLayerTypes);
            }
            else if (supportedLayerTypes.includes(layerType)) {
                // Incluir qualquer camada suportada para snapping
                featureSources.push({
                    layer: layer,
                    enabled: true
                });
                console.log("[LOG] Camada adicionada como fonte de snapping:", {
                    title: layerTitle,
                    type: layerType,
                    url: layer.url || "N/A"
                });
            }
            else {
                console.log("[DEBUG] Camada não suportada para snapping:", {
                    title: layerTitle,
                    type: layerType
                });
            }
        });
        // Atualizar as fontes de snapping
        if (sketchRef.current.snappingOptions) {
            sketchRef.current.snappingOptions.featureSources = featureSources;
            console.log("[LOG] Snapping configurado com", featureSources.length, "camadas (versatilidade máxima)");
            // Log detalhado das fontes configuradas
            if (featureSources.length > 0) {
                console.log("[LOG] Fontes de snapping ativas (todas as camadas suportadas):");
                featureSources.forEach((source, index) => {
                    console.log(`  ${index + 1}. ${source.layer.title || source.layer.id} (${source.layer.type})`);
                });
            }
            else {
                console.log("[WARNING] Nenhuma camada suportada encontrada para snapping");
                console.log("[INFO] Tipos suportados: feature, graphics, geojson, wfs, csv, subtype, map-notes, scene, building-scene");
            }
        }
    }, [jimuMapView, exploreGroupLayers]);
    // Função para otimizar performance do snapping (conforme documentação)
    const optimizeSnappingPerformance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        var _a, _b;
        if (!((_a = sketchRef.current) === null || _a === void 0 ? void 0 : _a.snappingOptions))
            return;
        // Ajustar tolerância baseada no zoom level para melhor performance
        const zoomLevel = ((_b = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _b === void 0 ? void 0 : _b.zoom) || 10;
        let optimizedDistance = 20;
        if (zoomLevel < 8) {
            optimizedDistance = 30; // Zoom muito afastado - tolerância maior
        }
        else if (zoomLevel > 15) {
            optimizedDistance = 10; // Zoom muito próximo - tolerância menor
        }
        sketchRef.current.snappingOptions.distance = optimizedDistance;
        console.log("[LOG] Tolerância de snapping otimizada para zoom level", zoomLevel, ":", optimizedDistance, "pixels");
    }, [jimuMapView]);
    // Função para criar indicador visual de ângulo reto
    const createRightAngleIndicator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((vertex) => {
        if (!graphicModuleRef.current || !graphicsLayerRef.current)
            return;
        // Remover indicador anterior se existir
        if (rightAngleGraphic) {
            graphicsLayerRef.current.remove(rightAngleGraphic);
        }
        // Criar símbolo do quadrado laranja (como na imagem)
        const rightAngleSymbol = {
            type: "simple-marker",
            style: "square",
            size: 12,
            color: [255, 165, 0], // Laranja
            outline: {
                color: [255, 255, 255], // Branco
                width: 2
            }
        };
        // Criar gráfico do indicador
        const indicatorGraphic = new graphicModuleRef.current({
            geometry: vertex,
            symbol: rightAngleSymbol
        });
        // Adicionar à camada
        graphicsLayerRef.current.add(indicatorGraphic);
        setRightAngleGraphic(indicatorGraphic);
        console.log("[LOG] Indicador de ângulo reto criado em:", vertex);
    }, [rightAngleGraphic]);
    // Função para remover indicador de ângulo reto
    const removeRightAngleIndicator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (rightAngleGraphic && graphicsLayerRef.current) {
            graphicsLayerRef.current.remove(rightAngleGraphic);
            setRightAngleGraphic(null);
            console.log("[LOG] Indicador de ângulo reto removido");
        }
    }, [rightAngleGraphic]);
    const updateLiveTextGraphic = (geometry, text) => {
        if (!graphicModuleRef.current || !labelsLayerRef.current)
            return;
        let labelPoint = null;
        if (geometry.type === "polygon") {
            // Para áreas, usa o centroide da geometria
            const polygon = geometry;
            labelPoint = polygon.centroid;
        }
        else if (geometry.type === "polyline") {
            // Para distâncias, usa o ponto médio do último segmento
            const polyline = geometry;
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
                    };
                }
            }
        }
        if (!labelPoint)
            return;
        if (!liveTextGraphicRef.current) {
            liveTextGraphicRef.current = new graphicModuleRef.current({
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
            });
            labelsLayerRef.current.add(liveTextGraphicRef.current);
            console.log("[LOG] Added live text graphic:", text);
        }
        else if (labelPoint) {
            liveTextGraphicRef.current.geometry = labelPoint;
            const textSymbol = liveTextGraphicRef.current.symbol;
            textSymbol.text = text;
            console.log("[LOG] Updated live text graphic:", text);
        }
    };
    const updateMeasurementDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((graphic) => {
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
        // Para polígonos, só atualiza o texto da área se não existir um texto permanente
        if (graphic.geometry.type === "polygon" && !liveTextGraphicRef.current) {
            updateLiveTextGraphic(graphic.geometry, formatArea(total));
        }
    }, []);
    const removeMeasurementDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((graphic) => {
        const id = getGraphicId(graphic);
        console.log("[LOG] Removing measurement detail for id:", id);
        setMeasurements((prev) => prev.filter((m) => m.id !== id));
        if (selectedGraphicIdRef.current === id) {
            console.log("[LOG] Clearing selectedGraphicId as it matches removed graphic");
            setSelectedGraphicId(null);
        }
    }, []);
    const clearAll = () => {
        var _a, _b;
        console.log("[LOG] Clear all called");
        if (graphicsLayerRef.current) {
            graphicsLayerRef.current.removeAll();
        }
        if (labelsLayerRef.current) {
            labelsLayerRef.current.removeAll();
        }
        graphicsRef.current = [];
        segmentLabelsMapRef.current.clear();
        vertexPointsMapRef.current.clear();
        areaLabelsMapRef.current.clear();
        setMeasurements([]);
        setSelectedGraphicId(null);
        setLiveMeasurement(null);
        setActiveButton("");
        // Remove texto dinâmico se existir
        if (liveTextGraphicRef.current) {
            (_a = labelsLayerRef.current) === null || _a === void 0 ? void 0 : _a.remove(liveTextGraphicRef.current);
            liveTextGraphicRef.current = null;
        }
        (_b = sketchRef.current) === null || _b === void 0 ? void 0 : _b.cancel();
    };
    const handleClear = () => {
        clearAll();
    };
    // Remove labels de segmentos antigos de um gráfico
    const removeSegmentLabels = (graphicId) => {
        const oldLabels = segmentLabelsMapRef.current.get(graphicId);
        if (oldLabels && labelsLayerRef.current) {
            labelsLayerRef.current.removeMany(oldLabels);
        }
        segmentLabelsMapRef.current.delete(graphicId);
    };
    // Remove vértices antigos de um gráfico
    const removeVertexPoints = (graphicId) => {
        const oldVertices = vertexPointsMapRef.current.get(graphicId);
        if (oldVertices && graphicsLayerRef.current) {
            graphicsLayerRef.current.removeMany(oldVertices);
        }
        vertexPointsMapRef.current.delete(graphicId);
    };
    // Remove label de área antigo de um gráfico
    const removeAreaLabel = (graphicId) => {
        const oldAreaLabel = areaLabelsMapRef.current.get(graphicId);
        if (oldAreaLabel && labelsLayerRef.current) {
            labelsLayerRef.current.remove(oldAreaLabel);
        }
        areaLabelsMapRef.current.delete(graphicId);
    };
    // Cria labels de segmentos para o gráfico dado e adiciona na camada de labels
    const createSegmentLabelsForGraphic = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((graphic) => {
        if (!labelsLayerRef.current || !graphicModuleRef.current)
            return;
        const graphicId = getGraphicId(graphic);
        removeSegmentLabels(graphicId);
        const { segments } = calculateSegments(graphic.geometry);
        const labels = [];
        segments.forEach((segment) => {
            let pt1;
            let pt2;
            if (graphic.geometry.type === "polyline") {
                const polyline = graphic.geometry;
                pt1 = polyline.paths[0][segment.segmentNumber - 1];
                pt2 = polyline.paths[0][segment.segmentNumber];
            }
            else if (graphic.geometry.type === "polygon") {
                const polygon = graphic.geometry;
                pt1 = polygon.rings[0][segment.segmentNumber - 1];
                pt2 = polygon.rings[0][segment.segmentNumber];
            }
            else {
                return;
            }
            const midPoint = {
                type: "point",
                x: (pt1[0] + pt2[0]) / 2,
                y: (pt1[1] + pt2[1]) / 2,
                spatialReference: graphic.geometry.spatialReference,
            };
            const labelGraphic = new graphicModuleRef.current({
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
            });
            labels.push(labelGraphic);
        });
        labels.forEach((label) => {
            if (labelsLayerRef.current) {
                labelsLayerRef.current.add(label);
            }
        });
        segmentLabelsMapRef.current.set(graphicId, labels);
    }, []);
    // Cria gráficos de pontos (vértices) para o gráfico dado e adiciona na camada
    // Cria texto permanente da área no centro do polígono
    const createAreaLabelForGraphic = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((graphic) => {
        var _a;
        if (!labelsLayerRef.current || !graphicModuleRef.current || graphic.geometry.type !== "polygon")
            return;
        const graphicId = getGraphicId(graphic);
        // Remove label de área antigo se existir
        removeAreaLabel(graphicId);
        const polygon = graphic.geometry;
        const area = (_a = geometryEngineRef.current) === null || _a === void 0 ? void 0 : _a.geodesicArea(polygon, "square-meters");
        if (!area)
            return;
        const areaLabel = new graphicModuleRef.current({
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
        });
        labelsLayerRef.current.add(areaLabel);
        areaLabelsMapRef.current.set(graphicId, areaLabel);
        console.log("[LOG] Added area label:", formatArea(area));
    }, []);
    const createVertexPointsForGraphic = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((graphic) => {
        if (!graphicsLayerRef.current || !graphicModuleRef.current)
            return;
        const graphicId = getGraphicId(graphic);
        // Remove vértices antigos
        const oldVertices = vertexPointsMapRef.current.get(graphicId);
        if (oldVertices) {
            graphicsLayerRef.current.removeMany(oldVertices);
        }
        const vertices = [];
        let points = [];
        if (graphic.geometry.type === "polyline") {
            const polyline = graphic.geometry;
            points = polyline.paths[0];
        }
        else if (graphic.geometry.type === "polygon") {
            const polygon = graphic.geometry;
            points = polygon.rings[0];
        }
        else {
            return;
        }
        points.forEach((pt) => {
            const pointGraphic = new graphicModuleRef.current({
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
            });
            vertices.push(pointGraphic);
        });
        vertices.forEach((v) => {
            if (graphicsLayerRef.current) {
                graphicsLayerRef.current.add(v);
            }
        });
        vertexPointsMapRef.current.set(graphicId, vertices);
    }, []);
    // --- START: Inicialização do SketchViewModel e camadas ---
    const initializedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!jimuMapView || initializedRef.current)
            return;
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
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
            // Criar camada separada para labels (sempre por cima)
            const labelsLayer = new GraphicsLayer({
                id: "measurementWidgetLabelsLayer",
                title: "Measurement Labels",
                listMode: "hide",
                elevationInfo: {
                    mode: "on-the-ground"
                }
            });
            jimuMapView.view.map.add(labelsLayer);
            labelsLayerRef.current = labelsLayer;
            // Garantir que a camada de labels fique por cima: remover e re-adicionar
            jimuMapView.view.map.remove(labelsLayer);
            jimuMapView.view.map.add(labelsLayer);
            // Definir ordem de renderização explícita
            labelsLayer.order = 1000;
            // Forçar a camada de labels a ficar por cima usando timeout
            setTimeout(() => {
                if (labelsLayerRef.current && jimuMapView.view.map) {
                    jimuMapView.view.map.remove(labelsLayerRef.current);
                    jimuMapView.view.map.add(labelsLayerRef.current);
                    console.log("[LOG] Labels layer moved to top");
                }
            }, 100);
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
            });
            // Configurar snapping options para o SketchViewModel seguindo documentação oficial
            sketchRef.current.snappingOptions = {
                enabled: true, // Habilita o snapping globalmente
                selfEnabled: true, // Habilita self-snapping (guias de ângulo reto e paralelismo)
                featureEnabled: true, // Habilita feature-snapping (snapping em feições de outras camadas)
                distance: 20, // Distância de tolerância em pixels (otimizada para performance)
                featureSources: [] // Será populado com camadas de lotes e quadras
            };
            // Configurar fontes de snapping das camadas do mapa
            configureSnappingSources();
            // Escutar mudanças nas camadas do mapa para recarregar snapping
            const layerChangeHandler = () => {
                console.log("[LOG] Camadas do mapa alteradas - recarregando snapping");
                configureSnappingSources();
            };
            jimuMapView.view.map.layers.on("after-add", layerChangeHandler);
            jimuMapView.view.map.layers.on("after-remove", layerChangeHandler);
            // Otimizar performance do snapping quando zoom mudar
            const zoomChangeHandler = () => {
                optimizeSnappingPerformance();
            };
            jimuMapView.view.watch("zoom", zoomChangeHandler);
            // Create event
            createHandlerRef.current = sketchRef.current.on("create", (event) => {
                var _a, _b;
                if (event.state === "active" &&
                    (event.graphic.geometry.type === "polyline" || event.graphic.geometry.type === "polygon")) {
                    let liveValue = "";
                    if (event.graphic.geometry.type === "polyline") {
                        const polyline = event.graphic.geometry;
                        // Capturar ponto inicial para snap de fechamento (apenas para distância)
                        if (polyline.paths[0] && polyline.paths[0].length === 1) {
                            const firstPoint = {
                                type: "point",
                                x: polyline.paths[0][0][0],
                                y: polyline.paths[0][0][1],
                                spatialReference: polyline.spatialReference
                            };
                            setStartPoint(firstPoint);
                            console.log("[LOG] Ponto inicial capturado para distância:", firstPoint);
                            console.log("[DEBUG] activeButton:", activeButton);
                        }
                        // Verificar se está próximo ao ponto inicial (apenas para distância)
                        if (polyline.paths[0] && polyline.paths[0].length > 1 && startPoint) {
                            const currentPoint = {
                                type: "point",
                                x: polyline.paths[0][polyline.paths[0].length - 1][0],
                                y: polyline.paths[0][polyline.paths[0].length - 1][1],
                                spatialReference: polyline.spatialReference
                            };
                            console.log("[DEBUG] Verificando proximidade - startPoint:", startPoint);
                            console.log("[DEBUG] Verificando proximidade - currentPoint:", currentPoint);
                            console.log("[DEBUG] activeButton durante verificação:", activeButton);
                            const nearStart = checkNearStartPoint(currentPoint);
                            console.log("[DEBUG] nearStart:", nearStart);
                            setIsNearStartPoint(nearStart);
                            if (nearStart) {
                                liveValue += " (próximo ao início - duplo clique para fechar)";
                                console.log("[LOG] Próximo ao ponto inicial!");
                            }
                        }
                        // Detectar ângulos retos para distância
                        if (activeButton === "measureDistance") {
                            const rightAngleResult = detectRightAngle(polyline);
                            console.log("[DEBUG] Detecção de ângulo reto:", rightAngleResult);
                            if (rightAngleResult.isRightAngle) {
                                setIsRightAngle(true);
                                setRightAngleSuggestion(rightAngleResult.suggestion);
                                // Criar indicador visual no vértice
                                if (polyline.paths[0].length >= 2) {
                                    const vertexPoint = {
                                        type: "point",
                                        x: polyline.paths[0][polyline.paths[0].length - 2][0],
                                        y: polyline.paths[0][polyline.paths[0].length - 2][1],
                                        spatialReference: polyline.spatialReference
                                    };
                                    createRightAngleIndicator(vertexPoint);
                                }
                                liveValue += ` (${rightAngleResult.suggestion})`;
                                console.log("[LOG] Ângulo reto detectado:", rightAngleResult.angle.toFixed(1), "graus");
                            }
                            else {
                                setIsRightAngle(false);
                                setRightAngleSuggestion(null);
                                removeRightAngleIndicator();
                            }
                        }
                        // NOVO: Criar labels de segmentos a cada clique durante o desenho de distância
                        if (polyline.paths[0] && polyline.paths[0].length >= 2) {
                            console.log("[LOG] Criando labels de segmentos durante desenho de distância");
                            createSegmentLabelsForGraphic(event.graphic);
                        }
                        // NÃO mostrar liveValue para distância - apenas os labels dos segmentos
                    }
                    else if (event.graphic.geometry.type === "polygon") {
                        // Para área, usar a funcionalidade original
                        liveValue = formatLiveMeasurement(event.graphic.geometry);
                        // Resetar estados de snap de fechamento para área
                        setIsNearStartPoint(false);
                        setStartPoint(null);
                        // NOVO: Criar labels de segmentos a cada clique durante o desenho de área
                        if (event.graphic.geometry.rings[0] && event.graphic.geometry.rings[0].length >= 3) {
                            console.log("[LOG] Criando labels de segmentos durante desenho de área");
                            createSegmentLabelsForGraphic(event.graphic);
                        }
                    }
                    console.log("[LOG] Live measurement during create:", liveValue);
                    setLiveMeasurement(liveValue);
                    updateLiveTextGraphic(event.graphic.geometry, liveValue !== null && liveValue !== void 0 ? liveValue : "");
                }
                if (event.state === "complete" &&
                    (event.graphic.geometry.type === "polyline" || event.graphic.geometry.type === "polygon")) {
                    const graphic = event.graphic;
                    const graphicId = getGraphicId(graphic);
                    console.log("[LOG] Graphic created with id:", graphicId);
                    // Adiciona o gráfico localmente e atualiza medições
                    graphicsRef.current.push(graphic);
                    updateMeasurementDetails(graphic);
                    // Cria labels de segmentos permanentes APENAS ao finalizar
                    if (graphic.geometry.type === "polyline") {
                        createSegmentLabelsForGraphic(graphic);
                    }
                    // Cria vértices permanentes para o gráfico criado
                    createVertexPointsForGraphic(graphic);
                    // Para polígonos, cria labels de segmentos E área
                    if (graphic.geometry.type === "polygon") {
                        createSegmentLabelsForGraphic(graphic);
                        createAreaLabelForGraphic(graphic);
                    }
                    setLiveMeasurement(null);
                    // Remove texto dinâmico de medição ao vivo
                    if (liveTextGraphicRef.current) {
                        (_a = labelsLayerRef.current) === null || _a === void 0 ? void 0 : _a.remove(liveTextGraphicRef.current);
                        liveTextGraphicRef.current = null;
                    }
                    try {
                        (_b = sketchRef.current) === null || _b === void 0 ? void 0 : _b.update(graphic);
                    }
                    catch (e) {
                        console.warn("[LOG] Error updating graphic after creation:", e);
                    }
                }
            });
            // Update event
            updateHandlerRef.current = sketchRef.current.on("update", (event) => {
                var _a, _b;
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
                                (_a = labelsLayerRef.current) === null || _a === void 0 ? void 0 : _a.remove(liveTextGraphicRef.current);
                                liveTextGraphicRef.current = null;
                            }
                            // Remove vértices customizados durante edição para não interferir
                            removeVertexPoints(graphicId);
                            // NÃO chama updateLiveTextGraphic para evitar reaparecer label durante edição
                            setLiveMeasurement(null);
                        }
                        else {
                            // Estado complete, pode atualizar o liveMeasurement e o label
                            setLiveMeasurement(null);
                            if (liveTextGraphicRef.current) {
                                (_b = labelsLayerRef.current) === null || _b === void 0 ? void 0 : _b.remove(liveTextGraphicRef.current);
                                liveTextGraphicRef.current = null;
                            }
                        }
                        // Atualiza labels permanentes dos segmentos sempre
                        createSegmentLabelsForGraphic(editedGraphic);
                        // Atualiza vértices permanentes apenas quando não está editando
                        if (event.state === "complete") {
                            createVertexPointsForGraphic(editedGraphic);
                        }
                        // Atualiza label da área para polígonos
                        if (editedGraphic.geometry.type === "polygon") {
                            createAreaLabelForGraphic(editedGraphic);
                        }
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
                    // Remove vértices associados
                    removeVertexPoints(graphicId);
                    // Remove label de área associado
                    removeAreaLabel(graphicId);
                    graphicsRef.current = graphicsRef.current.filter((g) => getGraphicId(g) !== graphicId);
                    removeMeasurementDetails(deletedGraphic);
                });
            });
            // Handler para duplo clique durante medição de distância
            doubleClickHandlerRef.current = jimuMapView.view.on("double-click", (evt) => {
                var _a, _b;
                console.log("[DEBUG] Duplo clique detectado");
                console.log("[DEBUG] sketchRef.current?.state:", (_a = sketchRef.current) === null || _a === void 0 ? void 0 : _a.state);
                console.log("[DEBUG] activeButton:", activeButton);
                console.log("[DEBUG] isNearStartPoint:", isNearStartPoint);
                console.log("[DEBUG] isRightAngle:", isRightAngle);
                if (((_b = sketchRef.current) === null || _b === void 0 ? void 0 : _b.state) === "active" && activeButton === "measureDistance") {
                    if (isNearStartPoint) {
                        console.log("[LOG] Duplo clique - finalizando medição (snap ao início)");
                        sketchRef.current.complete();
                    }
                    else if (isRightAngle) {
                        console.log("[LOG] Duplo clique - travando ângulo reto");
                        // Aqui você pode implementar lógica adicional para "travar" o ângulo
                        // Por enquanto, apenas finaliza a medição
                        sketchRef.current.complete();
                    }
                }
            });
            // Click event para seleção
            clickHandlerRef.current = jimuMapView.view.on("click", (evt) => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b, _c;
                console.log("[LOG] Map click event");
                const hit = yield jimuMapView.view.hitTest(evt);
                const candidates = hit.results.filter((r) => { var _a, _b; return 'graphic' in r && r.graphic && ((_a = r.graphic.layer) === null || _a === void 0 ? void 0 : _a.id) === ((_b = graphicsLayerRef.current) === null || _b === void 0 ? void 0 : _b.id); });
                // Filtra apenas gráficos principais (não vértices ou labels)
                const mainGraphics = candidates.filter(c => {
                    var _a;
                    return !((_a = c.graphic.attributes) === null || _a === void 0 ? void 0 : _a.type) ||
                        (c.graphic.attributes.type !== "vertexIndicator" &&
                            c.graphic.attributes.type !== "areaLabel" &&
                            c.graphic.attributes.type !== "distanceLockIndicator");
                });
                console.log("[LOG] Current graphicsRef IDs:", graphicsRef.current.map((g) => getGraphicId(g)));
                console.log("[LOG] Hit candidate IDs:", mainGraphics.map((c) => getGraphicId(c.graphic)));
                let graphicHit = null;
                for (const r of mainGraphics) {
                    const hitId = getGraphicId(r.graphic);
                    console.log("[LOG] Checking candidate graphic id:", hitId);
                    const found = graphicsRef.current.find((g) => getGraphicId(g) === hitId);
                    console.log("[LOG] Found in graphicsRef:", found ? "Yes" : "No");
                    if (found) {
                        graphicHit = r;
                        break;
                    }
                }
                if (!graphicHit && mainGraphics.length > 0) {
                    const fallbackId = getGraphicId(mainGraphics[0].graphic);
                    console.warn("[WARN] Graphic not found in graphicsRef, fallback to first candidate with id:", fallbackId);
                    setSelectedGraphicId(fallbackId);
                    try {
                        (_a = sketchRef.current) === null || _a === void 0 ? void 0 : _a.update(mainGraphics[0].graphic);
                    }
                    catch (e) {
                        console.warn("[LOG] Error updating graphic on fallback click:", e);
                    }
                    return;
                }
                if (!graphicHit) {
                    console.log("[LOG] No measurement graphic hit");
                    setSelectedGraphicId(null);
                    (_b = sketchRef.current) === null || _b === void 0 ? void 0 : _b.cancel();
                    return;
                }
                const clickedId = getGraphicId(graphicHit.graphic);
                console.log("[LOG] Graphic clicked, setting selectedGraphicId to:", clickedId);
                setSelectedGraphicId(clickedId);
                try {
                    (_c = sketchRef.current) === null || _c === void 0 ? void 0 : _c.update(graphicHit.graphic);
                }
                catch (e) {
                    console.warn("[LOG] Error updating graphic on click:", e);
                }
            }));
            initializedRef.current = true;
        });
        return () => {
            var _a;
            // Cleanup dos handlers
            (_a = doubleClickHandlerRef.current) === null || _a === void 0 ? void 0 : _a.remove();
        };
    }, [jimuMapView, createAreaLabelForGraphic, createSegmentLabelsForGraphic, createVertexPointsForGraphic, formatLastSegmentDistance, formatLiveMeasurement, removeMeasurementDetails, updateMeasurementDetails, activeButton, checkNearStartPoint, isNearStartPoint, startPoint, configureSnappingSources, createRightAngleIndicator, detectRightAngle, isRightAngle, removeRightAngleIndicator, optimizeSnappingPerformance]);
    // Delete com tecla Delete ou Backspace e ESC para cancelar desenho
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!jimuMapView)
            return;
        const handleKeyDown = (event) => {
            var _a, _b, _c, _d, _e, _f;
            console.log("[LOG] KeyDown event:", event.key, "selectedGraphicId:", selectedGraphicIdRef.current);
            // ESC para cancelar desenho ativo
            if (event.key === "Escape") {
                if (((_a = sketchRef.current) === null || _a === void 0 ? void 0 : _a.state) === "active") {
                    console.log("[LOG] ESC pressed during active drawing - cleaning up");
                    console.log("[LOG] liveTextGraphicRef.current before cleanup:", liveTextGraphicRef.current);
                    console.log("[LOG] liveMeasurement before cleanup:", liveMeasurement);
                    // Limpa medição ao vivo
                    setLiveMeasurement(null);
                    // Remove texto dinâmico se existir
                    if (liveTextGraphicRef.current) {
                        console.log("[LOG] Removing liveTextGraphic:", liveTextGraphicRef.current);
                        (_b = labelsLayerRef.current) === null || _b === void 0 ? void 0 : _b.remove(liveTextGraphicRef.current);
                        liveTextGraphicRef.current = null;
                        console.log("[LOG] liveTextGraphicRef.current after cleanup:", liveTextGraphicRef.current);
                    }
                    else {
                        console.log("[LOG] No liveTextGraphic to remove");
                    }
                    // Força limpeza de todos os gráficos de texto na camada de labels
                    if (labelsLayerRef.current) {
                        const allGraphics = Array.from(labelsLayerRef.current.graphics);
                        const textGraphics = allGraphics.filter(g => {
                            var _a;
                            return g.symbol && g.symbol.type === "text" &&
                                (!((_a = g.attributes) === null || _a === void 0 ? void 0 : _a.type) || g.attributes.type !== "areaLabel");
                        });
                        if (textGraphics.length > 0) {
                            console.log("[LOG] Found additional text graphics to remove:", textGraphics.length);
                            labelsLayerRef.current.removeMany(textGraphics);
                        }
                    }
                    // Cancela o desenho
                    (_c = sketchRef.current) === null || _c === void 0 ? void 0 : _c.cancel();
                    event.preventDefault();
                    return;
                }
            }
            // Delete com tecla Delete ou Backspace
            if (event.key !== "Delete" && event.key !== "Backspace")
                return;
            const currentSelectedGraphicId = selectedGraphicIdRef.current;
            if (!currentSelectedGraphicId) {
                console.log("[LOG] No graphic selected, aborting delete");
                return;
            }
            const graphicToRemove = (_d = graphicsLayerRef.current) === null || _d === void 0 ? void 0 : _d.graphics.find((g) => getGraphicId(g) === currentSelectedGraphicId);
            if (!graphicToRemove) {
                console.log("[LOG] Selected graphic not found in graphicsLayer, aborting delete");
                return;
            }
            console.log("[LOG] Removing graphic with id:", currentSelectedGraphicId);
            (_e = graphicsLayerRef.current) === null || _e === void 0 ? void 0 : _e.remove(graphicToRemove);
            // Remove labels associados
            removeSegmentLabels(currentSelectedGraphicId);
            // Remove vértices associados
            removeVertexPoints(currentSelectedGraphicId);
            // Remove label de área associado
            removeAreaLabel(currentSelectedGraphicId);
            graphicsRef.current = graphicsRef.current.filter((g) => getGraphicId(g) !== currentSelectedGraphicId);
            setMeasurements((prev) => prev.filter((m) => m.id !== currentSelectedGraphicId));
            setSelectedGraphicId(null);
            (_f = sketchRef.current) === null || _f === void 0 ? void 0 : _f.cancel();
            event.preventDefault();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [jimuMapView, liveMeasurement]);
    const handleNewMeasurement = () => {
        var _a, _b;
        if (!sketchRef.current)
            return;
        console.log("[LOG] handleNewMeasurement called");
        // Mostrar informações de snapping ativo
        if (sketchRef.current.snappingOptions) {
            const snapping = sketchRef.current.snappingOptions;
            console.log("[LOG] Configurações de snapping ativas:");
            console.log("  - Snapping habilitado:", snapping.enabled);
            console.log("  - Self-snapping (ângulos 90°):", snapping.selfEnabled);
            console.log("  - Feature-snapping (camadas):", snapping.featureEnabled);
            console.log("  - Distância de tolerância:", snapping.distance, "pixels");
            console.log("  - Fontes de snapping:", ((_a = snapping.featureSources) === null || _a === void 0 ? void 0 : _a.length) || 0, "camadas");
        }
        sketchRef.current.cancel();
        setSelectedGraphicId(null);
        setLiveMeasurement(null);
        setIsNearStartPoint(false);
        setStartPoint(null);
        setIsRightAngle(false);
        setRightAngleSuggestion(null);
        removeRightAngleIndicator();
        // Remove texto dinâmico se existir
        if (liveTextGraphicRef.current) {
            (_b = labelsLayerRef.current) === null || _b === void 0 ? void 0 : _b.remove(liveTextGraphicRef.current);
            liveTextGraphicRef.current = null;
        }
        const createType = activeButton === "measureDistance" ? "polyline" : "polygon";
        sketchRef.current.create(createType);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "widget-starter jimu-widget d-flex flex-column", style: { height: "100%" } },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_measure_tools__WEBPACK_IMPORTED_MODULE_2__["default"], { activeButton: activeButton, activeTool: activeButton === "measureDistance"
                ? "distance"
                : activeButton === "measureArea"
                    ? "area"
                    : "", angularSnap: (_a = props.config) === null || _a === void 0 ? void 0 : _a.angularSnap, onSelectTool: (btn) => {
                console.log("[LOG] Tool selected:", btn.name);
                // Se clicar no mesmo botão ativo, desativa a ferramenta
                if (activeButton === btn.name) {
                    setActiveButton("");
                    if (sketchRef.current) {
                        sketchRef.current.cancel();
                        setSelectedGraphicId(null);
                    }
                    return;
                }
                setActiveButton(btn.name);
                // Ativa automaticamente a ferramenta quando selecionada
                if (sketchRef.current) {
                    sketchRef.current.cancel();
                    setSelectedGraphicId(null);
                    const createType = btn.name === "measureDistance" ? "polyline" : "polygon";
                    sketchRef.current.create(createType);
                }
            }, onClear: handleClear }),
        liveMeasurement && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: {
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
            } },
            activeButton === "measureDistance"
                ? `Distância atual: ${liveMeasurement}`
                : `Área atual: ${liveMeasurement}`,
            isNearStartPoint && activeButton === "measureDistance" && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { fontSize: "12px", marginTop: "2px", opacity: 0.9 } }, "\u2728 Pr\u00F3ximo ao in\u00EDcio - duplo clique para fechar!")),
            isRightAngle && activeButton === "measureDistance" && rightAngleSuggestion && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { fontSize: "12px", marginTop: "2px", opacity: 0.9, color: "#ffa500" } },
                "\uD83D\uDCD0 ",
                rightAngleSuggestion)))),
        (activeButton === "measureDistance" || activeButton === "measureArea") && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: {
                    padding: "8px 12px",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderBottom: "1px solid #ccc",
                    userSelect: "none",
                    zIndex: 999,
                } },
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", { type: "button", onClick: handleNewMeasurement, style: {
                        backgroundColor: "#0079c1",
                        border: "none",
                        color: "white",
                        borderRadius: 0,
                        padding: "12px",
                        cursor: "pointer",
                        fontSize: "15px",
                        fontWeight: 600,
                        width: "100%",
                    }, "aria-label": "Nova Medi\u00E7\u00E3o" }, "Nova Medi\u00E7\u00E3o")),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: {
                    maxHeight: "200px",
                    overflowY: "auto",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderTop: "1px solid #ccc",
                    padding: "8px 12px",
                    fontSize: "14px",
                    zIndex: 998,
                } }, measurements.filter(m => activeButton === "measureDistance"
                ? m.area === undefined
                : activeButton === "measureArea"
                    ? m.area !== undefined
                    : false).length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "text-center text-disabled" }, "Nenhuma medi\u00E7\u00E3o registrada.")) : (measurements
                .filter(m => activeButton === "measureDistance"
                ? m.area === undefined
                : activeButton === "measureArea"
                    ? m.area !== undefined
                    : false)
                .map((m, i) => {
                var _a;
                return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { key: m.id, style: { marginBottom: "12px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, `Medição ${String(i + 1).padStart(3, "0")}`),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { marginLeft: "12px", marginTop: "4px" } },
                        m.segments.map((segment) => (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { key: segment.segmentNumber }, activeButton === "measureDistance"
                            ? `Distância segmento ${segment.segmentNumber}: ${formatDistance(segment.length)}`
                            : `Perímetro segmento ${segment.segmentNumber}: ${formatDistance(segment.length)}`))),
                        activeButton === "measureArea" && m.area !== undefined && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null,
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, "\u00C1rea total:"),
                                " ",
                                formatArea(m.area)),
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, "Per\u00EDmetro total:"),
                                " ",
                                formatDistance((_a = m.perimeter) !== null && _a !== void 0 ? _a : 0)))),
                        activeButton === "measureDistance" && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("strong", null, "Dist\u00E2ncia total:"),
                            " ",
                            formatDistance(m.total))))));
            }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { flex: 1, position: "relative" } }, ((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b.length) === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: setJimuMapView })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tZWFzdXJlbWVudC1lbmhhbmNlZC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZUFBZTtBQUN3QztBQUN2QjtBQUVoQyw0Q0FBNEM7QUFDNUMsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FDekIsd0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLGNBQWM7SUFDakUsMkRBQVEsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtJQUNsRCx5REFBTSxDQUFDLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFFO0lBQ3JFLDJEQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUUsQ0FDL0MsQ0FDUDtBQUVELE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQ3JCLHdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxjQUFjO0lBQ2pFLHlEQUFNLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLEdBQUcsR0FBRSxDQUMzRSxDQUNQO0FBRUQsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FDdEIsd0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8s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Q0o7UUFFRCxxRUFBSyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFDMUMsWUFBSyxDQUFDLGVBQWUsMENBQUUsTUFBTSxNQUFLLENBQUMsSUFBSSxDQUN0Qyw0REFBQyw2REFBb0IsSUFDbkIsY0FBYyxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQ3hDLGtCQUFrQixFQUFFLGNBQWMsR0FDbEMsQ0FDSCxDQUNHLENBQ0YsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBSWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWVhc3VyZW1lbnQtZW5oYW5jZWQvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9tZWFzdXJlLXRvb2xzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWVhc3VyZW1lbnQtZW5oYW5jZWQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGNzcywganN4LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xyXG5cclxuLy8gQ29tcG9uZW50ZXMgU1ZHIHBhcmEgw61jb25lcyBwcm9maXNzaW9uYWlzXHJcbmNvbnN0IERpc3RhbmNlSWNvbiA9ICgpID0+IChcclxuICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiNlwiIGN5PVwiMTJcIiByPVwiMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XHJcbiAgICA8cGF0aCBkPVwiTTggMTJoOFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIGZpbGw9XCJub25lXCIvPlxyXG4gICAgPGNpcmNsZSBjeD1cIjE4XCIgY3k9XCIxMlwiIHI9XCIyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cclxuICA8L3N2Zz5cclxuKVxyXG5cclxuY29uc3QgQXJlYUljb24gPSAoKSA9PiAoXHJcbiAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgPHBhdGggZD1cIk0xOCA2TDE4IDE4TDYgMThaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIi8+XHJcbiAgPC9zdmc+XHJcbilcclxuXHJcbmNvbnN0IFRyYXNoSWNvbiA9ICgpID0+IChcclxuICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICA8cGF0aCBkPVwiTTYgMTljMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjdINnYxMnpNMTkgNGgtMy41bC0xLTFoLTVsLTEgMUg1djJoMTRWNHpcIi8+XHJcbiAgPC9zdmc+XHJcbilcclxuXHJcbnR5cGUgTWVhc3VyZW1lbnRDbGFzcyA9ICdkaXN0YW5jZScgfCAnYXJlYScgfCAnJ1xyXG5cclxuaW50ZXJmYWNlIE1lYXN1cmVCdXR0b24ge1xyXG4gIG5hbWU6ICdtZWFzdXJlRGlzdGFuY2UnIHwgJ21lYXN1cmVBcmVhJ1xyXG4gIGljb246IHN0cmluZ1xyXG4gIGVuYWJsZWQ6IGJvb2xlYW5cclxufVxyXG5cclxuaW50ZXJmYWNlIE1lYXN1cmVUb29sc1Byb3BzIHtcclxuICBhY3RpdmVCdXR0b246ICdtZWFzdXJlRGlzdGFuY2UnIHwgJ21lYXN1cmVBcmVhJyB8ICcnXHJcbiAgYWN0aXZlVG9vbDogTWVhc3VyZW1lbnRDbGFzc1xyXG4gIG9uU2VsZWN0VG9vbDogKG1lYXN1cmVCdXR0b246IE1lYXN1cmVCdXR0b24pID0+IHZvaWRcclxuICBvbkNsZWFyOiAoKSA9PiB2b2lkXHJcbiAgYW5ndWxhclNuYXA/OiBib29sZWFuXHJcbiAgZm9sZGVyVXJsPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4mLm1lYXN1cmUtdG9vbGJhciB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC5tZWFzdXJlLXRvb2xzIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIC5tZWFzdXJlLXRvb2wge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zeXMtc2hhcGUtMSkgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zeXMtY29sb3ItYWN0aW9uLWhvdmVyKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tc3lzLWNvbG9yLWFjdGlvbi1zZWxlY3RlZC10ZXh0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zeXMtY29sb3ItYWN0aW9uLXNlbGVjdGVkKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIgc3ZnIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuYFxyXG5cclxuY29uc3QgTWVhc3VyZVRvb2xzID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHM6IE1lYXN1cmVUb29sc1Byb3BzLCByZWY6IFJlYWN0LlJlZjxIVE1MRGl2RWxlbWVudD4pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGFjdGl2ZUJ1dHRvbixcclxuICAgIG9uU2VsZWN0VG9vbCxcclxuICAgIG9uQ2xlYXIsXHJcbiAgICBhbmd1bGFyU25hcFxyXG4gIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBtZWFzdXJlQnV0dG9uczogTWVhc3VyZUJ1dHRvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbWVhc3VyZURpc3RhbmNlJyxcclxuICAgICAgaWNvbjogJ21lYXN1cmUnLFxyXG4gICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbWVhc3VyZUFyZWEnLFxyXG4gICAgICBpY29uOiAncG9seWdvbicsXHJcbiAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgIH1cclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9J21lYXN1cmUtdG9vbGJhciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC0yJyBjc3M9e3N0eWxlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lYXN1cmUtdG9vbHMgZC1mbGV4Jz5cclxuICAgICAgICB7bWVhc3VyZUJ1dHRvbnMuZmlsdGVyKG0gPT4gbS5lbmFibGVkKS5tYXAoKG1lYXN1cmVCdXR0b24pID0+IChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PXttZWFzdXJlQnV0dG9uLm5hbWV9XHJcbiAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgdHlwZT0ndGVydGlhcnknXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbWVhc3VyZS10b29sIHAtMCBtZS0yJywgeyBhY3RpdmU6IGFjdGl2ZUJ1dHRvbiA9PT0gbWVhc3VyZUJ1dHRvbi5uYW1lIH0pfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgb25TZWxlY3RUb29sKG1lYXN1cmVCdXR0b24pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e21lYXN1cmVCdXR0b24ubmFtZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21lYXN1cmVCdXR0b24uaWNvbiA9PT0gJ21lYXN1cmUnID8gPERpc3RhbmNlSWNvbiAvPiA6IDxBcmVhSWNvbiAvPn1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgIHthbmd1bGFyU25hcCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDA3OWMxJyxcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcycHggNnB4JyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTZmM2ZmJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA3OWMxJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0aXRsZT1cIlNuYXAgQW5ndWxhciBBdGl2byAtIMOCbmd1bG9zOiA5MMKwLCA0NcKwLCAzMMKwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU05BUFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBpY29uXHJcbiAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgIGNsYXNzTmFtZT0nbWVhc3VyZS10b29sIHAtMCdcclxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xlYXJ9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPSdMaW1wYXIgbWVkacOnw7VlcydcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHJhc2hJY29uIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVhc3VyZVRvb2xzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHR5cGUgeyBBbGxXaWRnZXRQcm9wcyB9IGZyb20gXCJqaW11LWNvcmVcIlxuaW1wb3J0IHtcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXG59IGZyb20gXCJqaW11LWFyY2dpc1wiXG5pbXBvcnQgdHlwZSB7IEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCJcbmltcG9ydCBNZWFzdXJlVG9vbHMgZnJvbSBcIi4vY29tcG9uZW50cy9tZWFzdXJlLXRvb2xzXCJcblxuaW50ZXJmYWNlIFNlZ21lbnREZXRhaWwge1xuICBzZWdtZW50TnVtYmVyOiBudW1iZXJcbiAgbGVuZ3RoOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIE1lYXN1cmVtZW50RGV0YWlsIHtcbiAgaWQ6IHN0cmluZ1xuICBzZWdtZW50czogU2VnbWVudERldGFpbFtdXG4gIHRvdGFsOiBudW1iZXJcbiAgYXJlYT86IG51bWJlclxuICBwZXJpbWV0ZXI/OiBudW1iZXJcbn1cblxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSA9PiB7XG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXcgfCBudWxsPihudWxsKVxuICBjb25zdCBbYWN0aXZlQnV0dG9uLCBzZXRBY3RpdmVCdXR0b25dID0gdXNlU3RhdGU8XG4gICAgXCJtZWFzdXJlRGlzdGFuY2VcIiB8IFwibWVhc3VyZUFyZWFcIiB8IFwiXCJcbiAgPihcIlwiKVxuICBjb25zdCBbc2VsZWN0ZWRHcmFwaGljSWQsIHNldFNlbGVjdGVkR3JhcGhpY0lkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFttZWFzdXJlbWVudHMsIHNldE1lYXN1cmVtZW50c10gPSB1c2VTdGF0ZTxNZWFzdXJlbWVudERldGFpbFtdPihbXSlcbiAgY29uc3QgW2xpdmVNZWFzdXJlbWVudCwgc2V0TGl2ZU1lYXN1cmVtZW50XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtpc05lYXJTdGFydFBvaW50LCBzZXRJc05lYXJTdGFydFBvaW50XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3RhcnRQb2ludCwgc2V0U3RhcnRQb2ludF0gPSB1c2VTdGF0ZTxfX2VzcmkuUG9pbnQgfCBudWxsPihudWxsKVxuICBjb25zdCBbaXNSaWdodEFuZ2xlLCBzZXRJc1JpZ2h0QW5nbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtyaWdodEFuZ2xlU3VnZ2VzdGlvbiwgc2V0UmlnaHRBbmdsZVN1Z2dlc3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3JpZ2h0QW5nbGVHcmFwaGljLCBzZXRSaWdodEFuZ2xlR3JhcGhpY10gPSB1c2VTdGF0ZTxfX2VzcmkuR3JhcGhpYyB8IG51bGw+KG51bGwpXG5cbiAgY29uc3Qgc2tldGNoUmVmID0gdXNlUmVmPF9fZXNyaS5Ta2V0Y2hWaWV3TW9kZWwgfCBudWxsPihudWxsKVxuICBjb25zdCBncmFwaGljc0xheWVyUmVmID0gdXNlUmVmPF9fZXNyaS5HcmFwaGljc0xheWVyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgbGFiZWxzTGF5ZXJSZWYgPSB1c2VSZWY8X19lc3JpLkdyYXBoaWNzTGF5ZXIgfCBudWxsPihudWxsKVxuICBjb25zdCBnZW9tZXRyeUVuZ2luZVJlZiA9IHVzZVJlZjx0eXBlb2YgX19lc3JpLmdlb21ldHJ5RW5naW5lIHwgbnVsbD4obnVsbClcbiAgY29uc3QgZ3JhcGhpY01vZHVsZVJlZiA9IHVzZVJlZjx0eXBlb2YgX19lc3JpLkdyYXBoaWMgfCBudWxsPihudWxsKVxuICBjb25zdCBsaXZlVGV4dEdyYXBoaWNSZWYgPSB1c2VSZWY8X19lc3JpLkdyYXBoaWMgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGNyZWF0ZUhhbmRsZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICBjb25zdCB1cGRhdGVIYW5kbGVyUmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgY29uc3QgZGVsZXRlSGFuZGxlclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG4gIGNvbnN0IGNsaWNrSGFuZGxlclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG4gIGNvbnN0IGRvdWJsZUNsaWNrSGFuZGxlclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG5cbiAgLy8gQXJtYXplbmEgb3MgZ3LDoWZpY29zIHBhcmEgY29udHJvbGUgbG9jYWxcbiAgY29uc3QgZ3JhcGhpY3NSZWYgPSB1c2VSZWY8X19lc3JpLkdyYXBoaWNbXT4oW10pXG5cbiAgLy8gTWFwIHBhcmEgYXJtYXplbmFyIGxhYmVscyBwb3IgZ3LDoWZpY29cbiAgY29uc3Qgc2VnbWVudExhYmVsc01hcFJlZiA9IHVzZVJlZjxNYXA8c3RyaW5nLCBfX2VzcmkuR3JhcGhpY1tdPj4obmV3IE1hcCgpKVxuXG4gIC8vIE1hcCBwYXJhIGFybWF6ZW5hciB2w6lydGljZXMgcG9yIGdyw6FmaWNvXG4gIGNvbnN0IHZlcnRleFBvaW50c01hcFJlZiA9IHVzZVJlZjxNYXA8c3RyaW5nLCBfX2VzcmkuR3JhcGhpY1tdPj4obmV3IE1hcCgpKVxuXG4gIC8vIE1hcCBwYXJhIGFybWF6ZW5hciBsYWJlbHMgZGUgw6FyZWEgcG9yIGdyw6FmaWNvXG4gIGNvbnN0IGFyZWFMYWJlbHNNYXBSZWYgPSB1c2VSZWY8TWFwPHN0cmluZywgX19lc3JpLkdyYXBoaWM+PihuZXcgTWFwKCkpXG5cblxuXG4gIC8vIFJlZiBwYXJhIG1hbnRlciBzZWxlY3RlZEdyYXBoaWNJZCBhdHVhbGl6YWRvIHBhcmEgaGFuZGxlcnNcbiAgY29uc3Qgc2VsZWN0ZWRHcmFwaGljSWRSZWYgPSB1c2VSZWY8c3RyaW5nIHwgbnVsbD4oc2VsZWN0ZWRHcmFwaGljSWQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2VsZWN0ZWRHcmFwaGljSWRSZWYuY3VycmVudCA9IHNlbGVjdGVkR3JhcGhpY0lkXG4gICAgY29uc29sZS5sb2coXCJbTE9HXSBzZWxlY3RlZEdyYXBoaWNJZCB1cGRhdGVkOlwiLCBzZWxlY3RlZEdyYXBoaWNJZClcbiAgfSwgW3NlbGVjdGVkR3JhcGhpY0lkXSlcblxuICBjb25zdCBnZXRHcmFwaGljSWQgPSAoZ3JhcGhpYzogX19lc3JpLkdyYXBoaWMpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghZ3JhcGhpYy5hdHRyaWJ1dGVzKSB7XG4gICAgICBncmFwaGljLmF0dHJpYnV0ZXMgPSB7fVxuICAgIH1cbiAgICBpZiAoIWdyYXBoaWMuYXR0cmlidXRlcy53aWRnZXRJZCkge1xuICAgICAgZ3JhcGhpYy5hdHRyaWJ1dGVzLndpZGdldElkID0gYG1lYXN1cmUtJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKClcbiAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAuc3Vic3RyKDIsIDkpfWBcbiAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gR2VuZXJhdGVkIG5ldyB3aWRnZXRJZCBmb3IgZ3JhcGhpYzpcIiwgZ3JhcGhpYy5hdHRyaWJ1dGVzLndpZGdldElkKVxuICAgIH1cbiAgICByZXR1cm4gZ3JhcGhpYy5hdHRyaWJ1dGVzLndpZGdldElkXG4gIH1cblxuICBjb25zdCBmb3JtYXREaXN0YW5jZSA9IChtZXRlcnM6IG51bWJlcikgPT5cbiAgICBtZXRlcnMgPj0gMTAwMFxuICAgICAgPyBgJHsobWV0ZXJzIC8gMTAwMCkudG9GaXhlZCgyKX0ga21gXG4gICAgICA6IGAke21ldGVycy50b0ZpeGVkKDIpfSBtYFxuXG4gIGNvbnN0IGZvcm1hdEFyZWEgPSAoc3FtZXRlcnM6IG51bWJlcikgPT5cbiAgICBzcW1ldGVycyA+PSAxMDAwMDAwXG4gICAgICA/IGAkeyhzcW1ldGVycyAvIDEwMDAwMDApLnRvRml4ZWQoMil9IGttwrJgXG4gICAgICA6IGAke3NxbWV0ZXJzLnRvRml4ZWQoMil9IG3CsmBcblxuXG4gIGNvbnN0IGNhbGN1bGF0ZVNlZ21lbnRzID0gKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkpID0+IHtcbiAgICBpZiAoIWdlb21ldHJ5RW5naW5lUmVmLmN1cnJlbnQpIHJldHVybiB7IHNlZ21lbnRzOiBbXSwgdG90YWw6IDAgfVxuXG4gICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09IFwicG9seWxpbmVcIikge1xuICAgICAgY29uc3QgcG9seWxpbmUgPSBnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmVcbiAgICAgIGNvbnN0IHNlZ21lbnRzOiBTZWdtZW50RGV0YWlsW10gPSBbXVxuICAgICAgbGV0IHRvdGFsID0gMFxuICAgICAgY29uc3QgcGF0aCA9IHBvbHlsaW5lLnBhdGhzWzBdXG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5sZW5ndGggPCAyKSByZXR1cm4geyBzZWdtZW50cywgdG90YWwgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHB0MSA9IHBhdGhbaV1cbiAgICAgICAgY29uc3QgcHQyID0gcGF0aFtpICsgMV1cbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHtcbiAgICAgICAgICB0eXBlOiBcInBvbHlsaW5lXCIsXG4gICAgICAgICAgcGF0aHM6IFtbcHQxLCBwdDJdXSxcbiAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBnZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlLFxuICAgICAgICB9IGFzIF9fZXNyaS5Qb2x5bGluZVxuXG4gICAgICAgIGNvbnN0IHNlZ21lbnRMZW5ndGggPSBnZW9tZXRyeUVuZ2luZVJlZi5jdXJyZW50Lmdlb2Rlc2ljTGVuZ3RoKHNlZ21lbnQsIFwibWV0ZXJzXCIpXG4gICAgICAgIHNlZ21lbnRzLnB1c2goeyBzZWdtZW50TnVtYmVyOiBpICsgMSwgbGVuZ3RoOiBzZWdtZW50TGVuZ3RoIH0pXG4gICAgICAgIHRvdGFsICs9IHNlZ21lbnRMZW5ndGhcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHNlZ21lbnRzLCB0b3RhbCB9XG4gICAgfSBlbHNlIGlmIChnZW9tZXRyeS50eXBlID09PSBcInBvbHlnb25cIikge1xuICAgICAgY29uc3QgcG9seWdvbiA9IGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXG4gICAgICBjb25zdCByaW5ncyA9IHBvbHlnb24ucmluZ3NbMF1cbiAgICAgIGlmICghcmluZ3MgfHwgcmluZ3MubGVuZ3RoIDwgMykgcmV0dXJuIHsgc2VnbWVudHM6IFtdLCB0b3RhbDogMCB9XG4gICAgICBjb25zdCBzZWdtZW50czogU2VnbWVudERldGFpbFtdID0gW11cbiAgICAgIGxldCB0b3RhbFBlcmltZXRlciA9IDBcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHQxID0gcmluZ3NbaV1cbiAgICAgICAgY29uc3QgcHQyID0gcmluZ3NbaSArIDFdXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSB7XG4gICAgICAgICAgdHlwZTogXCJwb2x5bGluZVwiLFxuICAgICAgICAgIHBhdGhzOiBbW3B0MSwgcHQyXV0sXG4gICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogZ2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSxcbiAgICAgICAgfSBhcyBfX2VzcmkuUG9seWxpbmVcblxuICAgICAgICBjb25zdCBzZWdtZW50TGVuZ3RoID0gZ2VvbWV0cnlFbmdpbmVSZWYuY3VycmVudC5nZW9kZXNpY0xlbmd0aChzZWdtZW50LCBcIm1ldGVyc1wiKVxuICAgICAgICBzZWdtZW50cy5wdXNoKHsgc2VnbWVudE51bWJlcjogaSArIDEsIGxlbmd0aDogc2VnbWVudExlbmd0aCB9KVxuICAgICAgICB0b3RhbFBlcmltZXRlciArPSBzZWdtZW50TGVuZ3RoXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFyZWEgPSBnZW9tZXRyeUVuZ2luZVJlZi5jdXJyZW50Lmdlb2Rlc2ljQXJlYShwb2x5Z29uLCBcInNxdWFyZS1tZXRlcnNcIilcblxuICAgICAgcmV0dXJuIHsgc2VnbWVudHMsIHRvdGFsOiBhcmVhLCBhcmVhLCBwZXJpbWV0ZXI6IHRvdGFsUGVyaW1ldGVyIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgc2VnbWVudHM6IFtdLCB0b3RhbDogMCB9XG4gIH1cblxuICBjb25zdCBmb3JtYXRMYXN0U2VnbWVudERpc3RhbmNlID0gdXNlQ2FsbGJhY2soKGdlb21ldHJ5OiBfX2VzcmkuUG9seWxpbmUpOiBzdHJpbmcgPT4ge1xuICAgIGlmICghZ2VvbWV0cnlFbmdpbmVSZWYuY3VycmVudCkgcmV0dXJuIFwiXCJcblxuICAgIGNvbnN0IHBhdGggPSBnZW9tZXRyeS5wYXRoc1swXVxuICAgIGlmICghcGF0aCB8fCBwYXRoLmxlbmd0aCA8IDIpIHJldHVybiBcIlwiXG5cbiAgICBjb25zdCBwdDEgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMl1cbiAgICBjb25zdCBwdDIgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV1cblxuICAgIGNvbnN0IHNlZ21lbnQgPSB7XG4gICAgICB0eXBlOiBcInBvbHlsaW5lXCIsXG4gICAgICBwYXRoczogW1twdDEsIHB0Ml1dLFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogZ2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSxcbiAgICB9IGFzIF9fZXNyaS5Qb2x5bGluZVxuXG4gICAgY29uc3Qgc2VnbWVudExlbmd0aCA9IGdlb21ldHJ5RW5naW5lUmVmLmN1cnJlbnQuZ2VvZGVzaWNMZW5ndGgoc2VnbWVudCwgXCJtZXRlcnNcIilcbiAgICByZXR1cm4gZm9ybWF0RGlzdGFuY2Uoc2VnbWVudExlbmd0aClcbiAgfSwgW10pXG5cbiAgY29uc3QgZm9ybWF0TGl2ZU1lYXN1cmVtZW50ID0gdXNlQ2FsbGJhY2soKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkgfCBudWxsKSA9PiB7XG4gICAgaWYgKCFnZW9tZXRyeSB8fCAhZ2VvbWV0cnlFbmdpbmVSZWYuY3VycmVudCkgcmV0dXJuIG51bGxcblxuICAgIGlmIChnZW9tZXRyeS50eXBlID09PSBcInBvbHlsaW5lXCIpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGdlb21ldHJ5RW5naW5lUmVmLmN1cnJlbnQuZ2VvZGVzaWNMZW5ndGgoZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lLCBcIm1ldGVyc1wiKVxuICAgICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlKGxlbmd0aClcbiAgICB9XG4gICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09IFwicG9seWdvblwiKSB7XG4gICAgICBjb25zdCBhcmVhID0gZ2VvbWV0cnlFbmdpbmVSZWYuY3VycmVudC5nZW9kZXNpY0FyZWEoZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24sIFwic3F1YXJlLW1ldGVyc1wiKVxuICAgICAgcmV0dXJuIGZvcm1hdEFyZWEoYXJlYSlcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSwgW10pXG5cbiAgLy8gRnVuw6fDo28gcGFyYSB2ZXJpZmljYXIgc2UgZXN0w6EgcHLDs3hpbW8gYW8gcG9udG8gaW5pY2lhbFxuICBjb25zdCBjaGVja05lYXJTdGFydFBvaW50ID0gdXNlQ2FsbGJhY2soKGN1cnJlbnRQb2ludDogX19lc3JpLlBvaW50KSA9PiB7XG4gICAgaWYgKCFzdGFydFBvaW50IHx8ICFnZW9tZXRyeUVuZ2luZVJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltERUJVR10gY2hlY2tOZWFyU3RhcnRQb2ludCAtIHN0YXJ0UG9pbnQgb3UgZ2VvbWV0cnlFbmdpbmUgbsOjbyBkaXNwb27DrXZlbFwiKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIFxuICAgIC8vIFVzYXIgZGlzdGFuY2UgcGFyYSBjw6FsY3VsbyBkZSBkaXN0w6JuY2lhXG4gICAgY29uc3QgZGlzdGFuY2UgPSBnZW9tZXRyeUVuZ2luZVJlZi5jdXJyZW50LmRpc3RhbmNlKHN0YXJ0UG9pbnQsIGN1cnJlbnRQb2ludCwgXCJtZXRlcnNcIilcbiAgICBjb25zdCB0aHJlc2hvbGQgPSA1MCAvLyBBdW1lbnRlaSBwYXJhIDUwIG1ldHJvcyBkZSB0b2xlcsOibmNpYVxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBjaGVja05lYXJTdGFydFBvaW50IC0gZGlzdGFuY2U6XCIsIGRpc3RhbmNlLCBcInRocmVzaG9sZDpcIiwgdGhyZXNob2xkKVxuICAgIFxuICAgIHJldHVybiBkaXN0YW5jZSA8PSB0aHJlc2hvbGRcbiAgfSwgW3N0YXJ0UG9pbnRdKVxuXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZGV0ZWN0YXIgw6JuZ3Vsb3MgZGUgOTAgZ3JhdXNcbiAgY29uc3QgZGV0ZWN0UmlnaHRBbmdsZSA9IHVzZUNhbGxiYWNrKChwb2x5bGluZTogX19lc3JpLlBvbHlsaW5lKSA9PiB7XG4gICAgaWYgKCFwb2x5bGluZS5wYXRoc1swXSB8fCBwb2x5bGluZS5wYXRoc1swXS5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyBpc1JpZ2h0QW5nbGU6IGZhbHNlLCBhbmdsZTogMCwgc3VnZ2VzdGlvbjogbnVsbCB9XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aHMgPSBwb2x5bGluZS5wYXRoc1swXVxuICAgIGNvbnN0IGxhc3RQb2ludCA9IHBhdGhzW3BhdGhzLmxlbmd0aCAtIDFdXG4gICAgY29uc3Qgc2Vjb25kTGFzdFBvaW50ID0gcGF0aHNbcGF0aHMubGVuZ3RoIC0gMl1cbiAgICBcbiAgICAvLyBTZSBow6EgYXBlbmFzIDIgcG9udG9zLCB2ZXJpZmljYXIgc2UgZXN0w6EgcHLDs3hpbW8gZGUgOTAgZ3JhdXMgY29tIG8gZWl4b1xuICAgIGlmIChwYXRocy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IGR4ID0gbGFzdFBvaW50WzBdIC0gc2Vjb25kTGFzdFBvaW50WzBdXG4gICAgICBjb25zdCBkeSA9IGxhc3RQb2ludFsxXSAtIHNlY29uZExhc3RQb2ludFsxXVxuICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCkgKiAoMTgwIC8gTWF0aC5QSSlcbiAgICAgIFxuICAgICAgLy8gVmVyaWZpY2FyIHNlIGVzdMOhIHByw7N4aW1vIGRlIDDCsCwgOTDCsCwgMTgwwrAgb3UgMjcwwrBcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRBbmdsZSA9ICgoYW5nbGUgJSAzNjApICsgMzYwKSAlIDM2MFxuICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gTWF0aC5hYnMobm9ybWFsaXplZEFuZ2xlKSA8IDUgfHwgTWF0aC5hYnMobm9ybWFsaXplZEFuZ2xlIC0gMTgwKSA8IDVcbiAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBNYXRoLmFicyhub3JtYWxpemVkQW5nbGUgLSA5MCkgPCA1IHx8IE1hdGguYWJzKG5vcm1hbGl6ZWRBbmdsZSAtIDI3MCkgPCA1XG4gICAgICBcbiAgICAgIGlmIChpc0hvcml6b250YWwgfHwgaXNWZXJ0aWNhbCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzUmlnaHRBbmdsZTogdHJ1ZSxcbiAgICAgICAgICBhbmdsZTogbm9ybWFsaXplZEFuZ2xlLFxuICAgICAgICAgIHN1Z2dlc3Rpb246IGlzSG9yaXpvbnRhbCA/IFwiTGluaGEgaG9yaXpvbnRhbCBkZXRlY3RhZGFcIiA6IFwiTGluaGEgdmVydGljYWwgZGV0ZWN0YWRhXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBTZSBow6EgMyBvdSBtYWlzIHBvbnRvcywgdmVyaWZpY2FyIG8gw6JuZ3VsbyBlbnRyZSBvcyDDumx0aW1vcyAzIHBvbnRvc1xuICAgIGlmIChwYXRocy5sZW5ndGggPj0gMykge1xuICAgICAgY29uc3QgdGhpcmRMYXN0UG9pbnQgPSBwYXRoc1twYXRocy5sZW5ndGggLSAzXVxuICAgICAgXG4gICAgICAvLyBDYWxjdWxhciB2ZXRvcmVzXG4gICAgICBjb25zdCB2MSA9IHtcbiAgICAgICAgeDogc2Vjb25kTGFzdFBvaW50WzBdIC0gdGhpcmRMYXN0UG9pbnRbMF0sXG4gICAgICAgIHk6IHNlY29uZExhc3RQb2ludFsxXSAtIHRoaXJkTGFzdFBvaW50WzFdXG4gICAgICB9XG4gICAgICBjb25zdCB2MiA9IHtcbiAgICAgICAgeDogbGFzdFBvaW50WzBdIC0gc2Vjb25kTGFzdFBvaW50WzBdLFxuICAgICAgICB5OiBsYXN0UG9pbnRbMV0gLSBzZWNvbmRMYXN0UG9pbnRbMV1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2FsY3VsYXIgw6JuZ3VsbyBlbnRyZSB2ZXRvcmVzXG4gICAgICBjb25zdCBkb3RQcm9kdWN0ID0gdjEueCAqIHYyLnggKyB2MS55ICogdjIueVxuICAgICAgY29uc3QgbWFnbml0dWRlMSA9IE1hdGguc3FydCh2MS54ICogdjEueCArIHYxLnkgKiB2MS55KVxuICAgICAgY29uc3QgbWFnbml0dWRlMiA9IE1hdGguc3FydCh2Mi54ICogdjIueCArIHYyLnkgKiB2Mi55KVxuICAgICAgXG4gICAgICBpZiAobWFnbml0dWRlMSA+IDAgJiYgbWFnbml0dWRlMiA+IDApIHtcbiAgICAgICAgY29uc3QgY29zQW5nbGUgPSBkb3RQcm9kdWN0IC8gKG1hZ25pdHVkZTEgKiBtYWduaXR1ZGUyKVxuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYWNvcyhNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgY29zQW5nbGUpKSkgKiAoMTgwIC8gTWF0aC5QSSlcbiAgICAgICAgXG4gICAgICAgIC8vIFZlcmlmaWNhciBzZSBlc3TDoSBwcsOzeGltbyBkZSA5MCBncmF1cyAodG9sZXLDom5jaWEgZGUgNSBncmF1cylcbiAgICAgICAgaWYgKE1hdGguYWJzKGFuZ2xlIC0gOTApIDwgNSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JpZ2h0QW5nbGU6IHRydWUsXG4gICAgICAgICAgICBhbmdsZTogYW5nbGUsXG4gICAgICAgICAgICBzdWdnZXN0aW9uOiBcIsOCbmd1bG8gcmV0byBkZXRlY3RhZG8gLSBkdXBsbyBjbGlxdWUgcGFyYSB0cmF2YXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4geyBpc1JpZ2h0QW5nbGU6IGZhbHNlLCBhbmdsZTogMCwgc3VnZ2VzdGlvbjogbnVsbCB9XG4gIH0sIFtdKVxuXG4gIC8vIEZ1bsOnw6NvIHJlY3Vyc2l2YSBwYXJhIGV4cGxvcmFyIGNhbWFkYXMgZGVudHJvIGRlIGdydXBvc1xuICBjb25zdCBleHBsb3JlR3JvdXBMYXllcnMgPSB1c2VDYWxsYmFjaygobGF5ZXI6IGFueSwgZmVhdHVyZVNvdXJjZXM6IGFueVtdLCBzdXBwb3J0ZWRMYXllclR5cGVzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGlmIChsYXllci5sYXllcnMgJiYgbGF5ZXIubGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNlIMOpIHVtIGdydXBvLCBleHBsb3JhciBzdWFzIGNhbWFkYXMgZmlsaGFzXG4gICAgICBjb25zb2xlLmxvZyhcIltERUJVR10gRXhwbG9yYW5kbyBncnVwbzpcIiwgbGF5ZXIudGl0bGUgfHwgbGF5ZXIuaWQpXG4gICAgICBsYXllci5sYXllcnMuZm9yRWFjaCgoc3VibGF5ZXI6IGFueSkgPT4ge1xuICAgICAgICBleHBsb3JlR3JvdXBMYXllcnMoc3VibGF5ZXIsIGZlYXR1cmVTb3VyY2VzLCBzdXBwb3J0ZWRMYXllclR5cGVzKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnRlZExheWVyVHlwZXMuaW5jbHVkZXMobGF5ZXIudHlwZSkpIHtcbiAgICAgIC8vIFNlIMOpIHVtYSBjYW1hZGEgc3Vwb3J0YWRhLCBhZGljaW9uYXJcbiAgICAgIGZlYXR1cmVTb3VyY2VzLnB1c2goe1xuICAgICAgICBsYXllcjogbGF5ZXIsXG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhcIltMT0ddIENhbWFkYSBlbmNvbnRyYWRhIGRlbnRybyBkZSBncnVwbzpcIiwge1xuICAgICAgICB0aXRsZTogbGF5ZXIudGl0bGUgfHwgbGF5ZXIuaWQsXG4gICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgIHVybDogbGF5ZXIudXJsIHx8IFwiTi9BXCJcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbXSlcblxuICAvLyBGdW7Dp8OjbyBwYXJhIGNvbmZpZ3VyYXIgVE9EQVMgYXMgY2FtYWRhcyBzdXBvcnRhZGFzIGNvbW8gZm9udGVzIGRlIHNuYXBwaW5nICh2ZXJzYXRpbGlkYWRlIG3DoXhpbWEpXG4gIGNvbnN0IGNvbmZpZ3VyZVNuYXBwaW5nU291cmNlcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWppbXVNYXBWaWV3Py52aWV3Py5tYXAgfHwgIXNrZXRjaFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBmZWF0dXJlU291cmNlczogYW55W10gPSBbXVxuICAgIFxuICAgIC8vIFRpcG9zIGRlIGNhbWFkYXMgc3Vwb3J0YWRhcyBwYXJhIHNuYXBwaW5nIGNvbmZvcm1lIGRvY3VtZW50YcOnw6NvIG9maWNpYWxcbiAgICBjb25zdCBzdXBwb3J0ZWRMYXllclR5cGVzID0gW1xuICAgICAgXCJmZWF0dXJlXCIsICAgICAgLy8gRmVhdHVyZUxheWVyXG4gICAgICBcImdyYXBoaWNzXCIsICAgICAvLyBHcmFwaGljc0xheWVyXG4gICAgICBcImdlb2pzb25cIiwgICAgICAvLyBHZW9KU09OTGF5ZXJcbiAgICAgIFwid2ZzXCIsICAgICAgICAgIC8vIFdGU0xheWVyXG4gICAgICBcImNzdlwiLCAgICAgICAgICAvLyBDU1ZMYXllclxuICAgICAgXCJzdWJ0eXBlXCIsICAgICAgLy8gU3VidHlwZVN1YmxheWVyXG4gICAgICBcIm1hcC1ub3Rlc1wiLCAgICAvLyBNYXBOb3Rlc0xheWVyXG4gICAgICBcInNjZW5lXCIsICAgICAgICAvLyBTY2VuZUxheWVyICgzRCBPYmplY3QpXG4gICAgICBcImJ1aWxkaW5nLXNjZW5lXCIgLy8gQnVpbGRpbmdTY2VuZUxheWVyXG4gICAgXVxuICAgIFxuICAgIC8vIEl0ZXJhciBwb3IgVE9EQVMgYXMgY2FtYWRhcyBkbyBtYXBhICh2ZXJzYXRpbGlkYWRlIG3DoXhpbWEpXG4gICAgamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLmZvckVhY2goKGxheWVyOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyVHlwZSA9IGxheWVyLnR5cGVcbiAgICAgIGNvbnN0IGxheWVyVGl0bGUgPSBsYXllci50aXRsZSB8fCBsYXllci5pZCB8fCBcIlVubmFtZWQgTGF5ZXJcIlxuICAgICAgXG4gICAgICBpZiAobGF5ZXJUeXBlID09PSBcImdyb3VwXCIpIHtcbiAgICAgICAgLy8gU2Ugw6kgdW0gZ3J1cG8sIGV4cGxvcmFyIHN1YXMgY2FtYWRhcyBmaWxoYXNcbiAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddIFByb2Nlc3NhbmRvIGdydXBvOlwiLCBsYXllclRpdGxlKVxuICAgICAgICBleHBsb3JlR3JvdXBMYXllcnMobGF5ZXIsIGZlYXR1cmVTb3VyY2VzLCBzdXBwb3J0ZWRMYXllclR5cGVzKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0ZWRMYXllclR5cGVzLmluY2x1ZGVzKGxheWVyVHlwZSkpIHtcbiAgICAgICAgLy8gSW5jbHVpciBxdWFscXVlciBjYW1hZGEgc3Vwb3J0YWRhIHBhcmEgc25hcHBpbmdcbiAgICAgICAgZmVhdHVyZVNvdXJjZXMucHVzaCh7XG4gICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBDYW1hZGEgYWRpY2lvbmFkYSBjb21vIGZvbnRlIGRlIHNuYXBwaW5nOlwiLCB7XG4gICAgICAgICAgdGl0bGU6IGxheWVyVGl0bGUsXG4gICAgICAgICAgdHlwZTogbGF5ZXJUeXBlLFxuICAgICAgICAgIHVybDogbGF5ZXIudXJsIHx8IFwiTi9BXCJcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBDYW1hZGEgbsOjbyBzdXBvcnRhZGEgcGFyYSBzbmFwcGluZzpcIiwge1xuICAgICAgICAgIHRpdGxlOiBsYXllclRpdGxlLFxuICAgICAgICAgIHR5cGU6IGxheWVyVHlwZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBBdHVhbGl6YXIgYXMgZm9udGVzIGRlIHNuYXBwaW5nXG4gICAgaWYgKHNrZXRjaFJlZi5jdXJyZW50LnNuYXBwaW5nT3B0aW9ucykge1xuICAgICAgc2tldGNoUmVmLmN1cnJlbnQuc25hcHBpbmdPcHRpb25zLmZlYXR1cmVTb3VyY2VzID0gZmVhdHVyZVNvdXJjZXNcbiAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gU25hcHBpbmcgY29uZmlndXJhZG8gY29tXCIsIGZlYXR1cmVTb3VyY2VzLmxlbmd0aCwgXCJjYW1hZGFzICh2ZXJzYXRpbGlkYWRlIG3DoXhpbWEpXCIpXG4gICAgICBcbiAgICAgIC8vIExvZyBkZXRhbGhhZG8gZGFzIGZvbnRlcyBjb25maWd1cmFkYXNcbiAgICAgIGlmIChmZWF0dXJlU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gRm9udGVzIGRlIHNuYXBwaW5nIGF0aXZhcyAodG9kYXMgYXMgY2FtYWRhcyBzdXBvcnRhZGFzKTpcIilcbiAgICAgICAgZmVhdHVyZVNvdXJjZXMuZm9yRWFjaCgoc291cmNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAgICR7aW5kZXggKyAxfS4gJHtzb3VyY2UubGF5ZXIudGl0bGUgfHwgc291cmNlLmxheWVyLmlkfSAoJHtzb3VyY2UubGF5ZXIudHlwZX0pYClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1dBUk5JTkddIE5lbmh1bWEgY2FtYWRhIHN1cG9ydGFkYSBlbmNvbnRyYWRhIHBhcmEgc25hcHBpbmdcIilcbiAgICAgICAgY29uc29sZS5sb2coXCJbSU5GT10gVGlwb3Mgc3Vwb3J0YWRvczogZmVhdHVyZSwgZ3JhcGhpY3MsIGdlb2pzb24sIHdmcywgY3N2LCBzdWJ0eXBlLCBtYXAtbm90ZXMsIHNjZW5lLCBidWlsZGluZy1zY2VuZVwiKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2ppbXVNYXBWaWV3LCBleHBsb3JlR3JvdXBMYXllcnNdKVxuXG4gIC8vIEZ1bsOnw6NvIHBhcmEgb3RpbWl6YXIgcGVyZm9ybWFuY2UgZG8gc25hcHBpbmcgKGNvbmZvcm1lIGRvY3VtZW50YcOnw6NvKVxuICBjb25zdCBvcHRpbWl6ZVNuYXBwaW5nUGVyZm9ybWFuY2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFza2V0Y2hSZWYuY3VycmVudD8uc25hcHBpbmdPcHRpb25zKSByZXR1cm5cblxuICAgIC8vIEFqdXN0YXIgdG9sZXLDom5jaWEgYmFzZWFkYSBubyB6b29tIGxldmVsIHBhcmEgbWVsaG9yIHBlcmZvcm1hbmNlXG4gICAgY29uc3Qgem9vbUxldmVsID0gamltdU1hcFZpZXc/LnZpZXc/Lnpvb20gfHwgMTBcbiAgICBsZXQgb3B0aW1pemVkRGlzdGFuY2UgPSAyMFxuXG4gICAgaWYgKHpvb21MZXZlbCA8IDgpIHtcbiAgICAgIG9wdGltaXplZERpc3RhbmNlID0gMzAgIC8vIFpvb20gbXVpdG8gYWZhc3RhZG8gLSB0b2xlcsOibmNpYSBtYWlvclxuICAgIH0gZWxzZSBpZiAoem9vbUxldmVsID4gMTUpIHtcbiAgICAgIG9wdGltaXplZERpc3RhbmNlID0gMTAgIC8vIFpvb20gbXVpdG8gcHLDs3hpbW8gLSB0b2xlcsOibmNpYSBtZW5vclxuICAgIH1cblxuICAgIHNrZXRjaFJlZi5jdXJyZW50LnNuYXBwaW5nT3B0aW9ucy5kaXN0YW5jZSA9IG9wdGltaXplZERpc3RhbmNlXG4gICAgY29uc29sZS5sb2coXCJbTE9HXSBUb2xlcsOibmNpYSBkZSBzbmFwcGluZyBvdGltaXphZGEgcGFyYSB6b29tIGxldmVsXCIsIHpvb21MZXZlbCwgXCI6XCIsIG9wdGltaXplZERpc3RhbmNlLCBcInBpeGVsc1wiKVxuICB9LCBbamltdU1hcFZpZXddKVxuXG4gIC8vIEZ1bsOnw6NvIHBhcmEgY3JpYXIgaW5kaWNhZG9yIHZpc3VhbCBkZSDDom5ndWxvIHJldG9cbiAgY29uc3QgY3JlYXRlUmlnaHRBbmdsZUluZGljYXRvciA9IHVzZUNhbGxiYWNrKCh2ZXJ0ZXg6IF9fZXNyaS5Qb2ludCkgPT4ge1xuICAgIGlmICghZ3JhcGhpY01vZHVsZVJlZi5jdXJyZW50IHx8ICFncmFwaGljc0xheWVyUmVmLmN1cnJlbnQpIHJldHVyblxuXG4gICAgLy8gUmVtb3ZlciBpbmRpY2Fkb3IgYW50ZXJpb3Igc2UgZXhpc3RpclxuICAgIGlmIChyaWdodEFuZ2xlR3JhcGhpYykge1xuICAgICAgZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50LnJlbW92ZShyaWdodEFuZ2xlR3JhcGhpYylcbiAgICB9XG5cbiAgICAvLyBDcmlhciBzw61tYm9sbyBkbyBxdWFkcmFkbyBsYXJhbmphIChjb21vIG5hIGltYWdlbSlcbiAgICBjb25zdCByaWdodEFuZ2xlU3ltYm9sID0ge1xuICAgICAgdHlwZTogXCJzaW1wbGUtbWFya2VyXCIgYXMgY29uc3QsXG4gICAgICBzdHlsZTogXCJzcXVhcmVcIiBhcyBjb25zdCxcbiAgICAgIHNpemU6IDEyLFxuICAgICAgY29sb3I6IFsyNTUsIDE2NSwgMF0sIC8vIExhcmFuamFcbiAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMjU1XSwgLy8gQnJhbmNvXG4gICAgICAgIHdpZHRoOiAyXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JpYXIgZ3LDoWZpY28gZG8gaW5kaWNhZG9yXG4gICAgY29uc3QgaW5kaWNhdG9yR3JhcGhpYyA9IG5ldyAoZ3JhcGhpY01vZHVsZVJlZi5jdXJyZW50IGFzIGFueSkoe1xuICAgICAgZ2VvbWV0cnk6IHZlcnRleCxcbiAgICAgIHN5bWJvbDogcmlnaHRBbmdsZVN5bWJvbFxuICAgIH0pXG5cbiAgICAvLyBBZGljaW9uYXIgw6AgY2FtYWRhXG4gICAgZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50LmFkZChpbmRpY2F0b3JHcmFwaGljKVxuICAgIHNldFJpZ2h0QW5nbGVHcmFwaGljKGluZGljYXRvckdyYXBoaWMpXG5cbiAgICBjb25zb2xlLmxvZyhcIltMT0ddIEluZGljYWRvciBkZSDDom5ndWxvIHJldG8gY3JpYWRvIGVtOlwiLCB2ZXJ0ZXgpXG4gIH0sIFtyaWdodEFuZ2xlR3JhcGhpY10pXG5cbiAgLy8gRnVuw6fDo28gcGFyYSByZW1vdmVyIGluZGljYWRvciBkZSDDom5ndWxvIHJldG9cbiAgY29uc3QgcmVtb3ZlUmlnaHRBbmdsZUluZGljYXRvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAocmlnaHRBbmdsZUdyYXBoaWMgJiYgZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50KSB7XG4gICAgICBncmFwaGljc0xheWVyUmVmLmN1cnJlbnQucmVtb3ZlKHJpZ2h0QW5nbGVHcmFwaGljKVxuICAgICAgc2V0UmlnaHRBbmdsZUdyYXBoaWMobnVsbClcbiAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gSW5kaWNhZG9yIGRlIMOibmd1bG8gcmV0byByZW1vdmlkb1wiKVxuICAgIH1cbiAgfSwgW3JpZ2h0QW5nbGVHcmFwaGljXSlcblxuXG5cblxuICBjb25zdCB1cGRhdGVMaXZlVGV4dEdyYXBoaWMgPSAoZ2VvbWV0cnk6IF9fZXNyaS5HZW9tZXRyeSwgdGV4dDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFncmFwaGljTW9kdWxlUmVmLmN1cnJlbnQgfHwgIWxhYmVsc0xheWVyUmVmLmN1cnJlbnQpIHJldHVyblxuXG4gICAgbGV0IGxhYmVsUG9pbnQ6IF9fZXNyaS5Qb2ludCB8IG51bGwgPSBudWxsXG5cbiAgICBpZiAoZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2x5Z29uXCIpIHtcbiAgICAgIC8vIFBhcmEgw6FyZWFzLCB1c2EgbyBjZW50cm9pZGUgZGEgZ2VvbWV0cmlhXG4gICAgICBjb25zdCBwb2x5Z29uID0gZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb25cbiAgICAgIGxhYmVsUG9pbnQgPSBwb2x5Z29uLmNlbnRyb2lkXG5cbiAgICB9IGVsc2UgaWYgKGdlb21ldHJ5LnR5cGUgPT09IFwicG9seWxpbmVcIikge1xuICAgICAgLy8gUGFyYSBkaXN0w6JuY2lhcywgdXNhIG8gcG9udG8gbcOpZGlvIGRvIMO6bHRpbW8gc2VnbWVudG9cbiAgICAgIGNvbnN0IHBvbHlsaW5lID0gZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lXG4gICAgICBjb25zdCBwYXRocyA9IHBvbHlsaW5lLnBhdGhzXG4gICAgICBpZiAocGF0aHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsYXN0UGF0aCA9IHBhdGhzW3BhdGhzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmIChsYXN0UGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgbGFzdFBvaW50ID0gbGFzdFBhdGhbbGFzdFBhdGgubGVuZ3RoIC0gMV1cbiAgICAgICAgICBjb25zdCBzZWNvbmRMYXN0UG9pbnQgPSBsYXN0UGF0aFtsYXN0UGF0aC5sZW5ndGggLSAyXVxuICAgICAgICAgIGxhYmVsUG9pbnQgPSB7XG4gICAgICAgICAgICB0eXBlOiBcInBvaW50XCIsXG4gICAgICAgICAgICB4OiAobGFzdFBvaW50WzBdICsgc2Vjb25kTGFzdFBvaW50WzBdKSAvIDIsXG4gICAgICAgICAgICB5OiAobGFzdFBvaW50WzFdICsgc2Vjb25kTGFzdFBvaW50WzFdKSAvIDIsXG4gICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBnZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlLFxuICAgICAgICAgIH0gYXMgX19lc3JpLlBvaW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWxhYmVsUG9pbnQpIHJldHVyblxuXG4gICAgaWYgKCFsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudCkge1xuICAgICAgbGl2ZVRleHRHcmFwaGljUmVmLmN1cnJlbnQgPSBuZXcgKGdyYXBoaWNNb2R1bGVSZWYuY3VycmVudCBhcyBhbnkpKHtcbiAgICAgICAgZ2VvbWV0cnk6IGxhYmVsUG9pbnQsXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgaGFsb0NvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgaGFsb1NpemU6IFwiMnB4XCIsXG4gICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICB4b2Zmc2V0OiAwLFxuICAgICAgICAgIHlvZmZzZXQ6IDAsXG4gICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgc2l6ZTogMTYsXG4gICAgICAgICAgICBmYW1pbHk6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIHdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICBsYWJlbHNMYXllclJlZi5jdXJyZW50LmFkZChsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudClcbiAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gQWRkZWQgbGl2ZSB0ZXh0IGdyYXBoaWM6XCIsIHRleHQpXG4gICAgfSBlbHNlIGlmIChsYWJlbFBvaW50KSB7XG4gICAgICBsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudC5nZW9tZXRyeSA9IGxhYmVsUG9pbnRcbiAgICAgIGNvbnN0IHRleHRTeW1ib2wgPSBsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudC5zeW1ib2wgYXMgX19lc3JpLlRleHRTeW1ib2xcbiAgICAgIHRleHRTeW1ib2wudGV4dCA9IHRleHRcbiAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gVXBkYXRlZCBsaXZlIHRleHQgZ3JhcGhpYzpcIiwgdGV4dClcbiAgICB9XG4gIH1cblxuXG5cbiAgY29uc3QgdXBkYXRlTWVhc3VyZW1lbnREZXRhaWxzID0gdXNlQ2FsbGJhY2soKGdyYXBoaWM6IF9fZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgY29uc3QgaWQgPSBnZXRHcmFwaGljSWQoZ3JhcGhpYylcbiAgICBjb25zdCB7IHNlZ21lbnRzLCB0b3RhbCwgYXJlYSwgcGVyaW1ldGVyIH0gPSBjYWxjdWxhdGVTZWdtZW50cyhncmFwaGljLmdlb21ldHJ5KVxuICAgIHNldE1lYXN1cmVtZW50cygocHJldikgPT4ge1xuICAgICAgY29uc3QgaWR4ID0gcHJldi5maW5kSW5kZXgoKG0pID0+IG0uaWQgPT09IGlkKVxuICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSBbLi4ucHJldl1cbiAgICAgICAgY29weVtpZHhdID0geyBpZCwgc2VnbWVudHMsIHRvdGFsLCBhcmVhLCBwZXJpbWV0ZXIgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIFVwZGF0ZWQgbWVhc3VyZW1lbnQgZGV0YWlscyBmb3IgaWQ6XCIsIGlkKVxuICAgICAgICByZXR1cm4gY29weVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBBZGRlZCBuZXcgbWVhc3VyZW1lbnQgZGV0YWlsIGZvciBpZDpcIiwgaWQpXG4gICAgICByZXR1cm4gWy4uLnByZXYsIHsgaWQsIHNlZ21lbnRzLCB0b3RhbCwgYXJlYSwgcGVyaW1ldGVyIH1dXG4gICAgfSlcblxuICAgIGlmIChncmFwaGljLmdlb21ldHJ5LnR5cGUgPT09IFwicG9seWxpbmVcIikge1xuICAgICAgY29uc3QgcGF0aCA9IGdyYXBoaWMuZ2VvbWV0cnkucGF0aHNbMF1cbiAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdXBkYXRlTGl2ZVRleHRHcmFwaGljKGdyYXBoaWMuZ2VvbWV0cnksIGZvcm1hdERpc3RhbmNlKHRvdGFsKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQYXJhIHBvbMOtZ29ub3MsIHPDsyBhdHVhbGl6YSBvIHRleHRvIGRhIMOhcmVhIHNlIG7Do28gZXhpc3RpciB1bSB0ZXh0byBwZXJtYW5lbnRlXG4gICAgaWYgKGdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2x5Z29uXCIgJiYgIWxpdmVUZXh0R3JhcGhpY1JlZi5jdXJyZW50KSB7XG4gICAgICB1cGRhdGVMaXZlVGV4dEdyYXBoaWMoZ3JhcGhpYy5nZW9tZXRyeSwgZm9ybWF0QXJlYSh0b3RhbCkpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCByZW1vdmVNZWFzdXJlbWVudERldGFpbHMgPSB1c2VDYWxsYmFjaygoZ3JhcGhpYzogX19lc3JpLkdyYXBoaWMpID0+IHtcbiAgICBjb25zdCBpZCA9IGdldEdyYXBoaWNJZChncmFwaGljKVxuICAgIGNvbnNvbGUubG9nKFwiW0xPR10gUmVtb3ZpbmcgbWVhc3VyZW1lbnQgZGV0YWlsIGZvciBpZDpcIiwgaWQpXG4gICAgc2V0TWVhc3VyZW1lbnRzKChwcmV2KSA9PiBwcmV2LmZpbHRlcigobSkgPT4gbS5pZCAhPT0gaWQpKVxuICAgIGlmIChzZWxlY3RlZEdyYXBoaWNJZFJlZi5jdXJyZW50ID09PSBpZCkge1xuICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBDbGVhcmluZyBzZWxlY3RlZEdyYXBoaWNJZCBhcyBpdCBtYXRjaGVzIHJlbW92ZWQgZ3JhcGhpY1wiKVxuICAgICAgc2V0U2VsZWN0ZWRHcmFwaGljSWQobnVsbClcbiAgICB9XG4gIH0sIFtdKVxuXG4gICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcbiAgICAgY29uc29sZS5sb2coXCJbTE9HXSBDbGVhciBhbGwgY2FsbGVkXCIpXG4gICAgIGlmIChncmFwaGljc0xheWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICBncmFwaGljc0xheWVyUmVmLmN1cnJlbnQucmVtb3ZlQWxsKClcbiAgICAgfVxuICAgICBpZiAobGFiZWxzTGF5ZXJSZWYuY3VycmVudCkge1xuICAgICAgIGxhYmVsc0xheWVyUmVmLmN1cnJlbnQucmVtb3ZlQWxsKClcbiAgICAgfVxuICAgICBncmFwaGljc1JlZi5jdXJyZW50ID0gW11cbiAgICAgc2VnbWVudExhYmVsc01hcFJlZi5jdXJyZW50LmNsZWFyKClcbiAgICAgdmVydGV4UG9pbnRzTWFwUmVmLmN1cnJlbnQuY2xlYXIoKVxuICAgICBhcmVhTGFiZWxzTWFwUmVmLmN1cnJlbnQuY2xlYXIoKVxuICAgICBzZXRNZWFzdXJlbWVudHMoW10pXG4gICAgIHNldFNlbGVjdGVkR3JhcGhpY0lkKG51bGwpXG4gICAgIHNldExpdmVNZWFzdXJlbWVudChudWxsKVxuICAgICBzZXRBY3RpdmVCdXR0b24oXCJcIilcbiAgICAgXG4gICAgIFxuICAgICAvLyBSZW1vdmUgdGV4dG8gZGluw6JtaWNvIHNlIGV4aXN0aXJcbiAgICAgaWYgKGxpdmVUZXh0R3JhcGhpY1JlZi5jdXJyZW50KSB7XG4gICAgICAgbGFiZWxzTGF5ZXJSZWYuY3VycmVudD8ucmVtb3ZlKGxpdmVUZXh0R3JhcGhpY1JlZi5jdXJyZW50KVxuICAgICAgIGxpdmVUZXh0R3JhcGhpY1JlZi5jdXJyZW50ID0gbnVsbFxuICAgICB9XG4gICAgIFxuICAgICBza2V0Y2hSZWYuY3VycmVudD8uY2FuY2VsKClcbiAgIH1cblxuICBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IHtcbiAgICBjbGVhckFsbCgpXG4gIH1cblxuXG4gIC8vIFJlbW92ZSBsYWJlbHMgZGUgc2VnbWVudG9zIGFudGlnb3MgZGUgdW0gZ3LDoWZpY29cbiAgY29uc3QgcmVtb3ZlU2VnbWVudExhYmVscyA9IChncmFwaGljSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG9sZExhYmVscyA9IHNlZ21lbnRMYWJlbHNNYXBSZWYuY3VycmVudC5nZXQoZ3JhcGhpY0lkKVxuICAgIGlmIChvbGRMYWJlbHMgJiYgbGFiZWxzTGF5ZXJSZWYuY3VycmVudCkge1xuICAgICAgbGFiZWxzTGF5ZXJSZWYuY3VycmVudC5yZW1vdmVNYW55KG9sZExhYmVscylcbiAgICB9XG4gICAgc2VnbWVudExhYmVsc01hcFJlZi5jdXJyZW50LmRlbGV0ZShncmFwaGljSWQpXG4gIH1cblxuICAvLyBSZW1vdmUgdsOpcnRpY2VzIGFudGlnb3MgZGUgdW0gZ3LDoWZpY29cbiAgY29uc3QgcmVtb3ZlVmVydGV4UG9pbnRzID0gKGdyYXBoaWNJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgb2xkVmVydGljZXMgPSB2ZXJ0ZXhQb2ludHNNYXBSZWYuY3VycmVudC5nZXQoZ3JhcGhpY0lkKVxuICAgIGlmIChvbGRWZXJ0aWNlcyAmJiBncmFwaGljc0xheWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudC5yZW1vdmVNYW55KG9sZFZlcnRpY2VzKVxuICAgIH1cbiAgICB2ZXJ0ZXhQb2ludHNNYXBSZWYuY3VycmVudC5kZWxldGUoZ3JhcGhpY0lkKVxuICB9XG5cbiAgLy8gUmVtb3ZlIGxhYmVsIGRlIMOhcmVhIGFudGlnbyBkZSB1bSBncsOhZmljb1xuICBjb25zdCByZW1vdmVBcmVhTGFiZWwgPSAoZ3JhcGhpY0lkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBvbGRBcmVhTGFiZWwgPSBhcmVhTGFiZWxzTWFwUmVmLmN1cnJlbnQuZ2V0KGdyYXBoaWNJZClcbiAgICBpZiAob2xkQXJlYUxhYmVsICYmIGxhYmVsc0xheWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGxhYmVsc0xheWVyUmVmLmN1cnJlbnQucmVtb3ZlKG9sZEFyZWFMYWJlbClcbiAgICB9XG4gICAgYXJlYUxhYmVsc01hcFJlZi5jdXJyZW50LmRlbGV0ZShncmFwaGljSWQpXG4gIH1cblxuXG5cbiAgLy8gQ3JpYSBsYWJlbHMgZGUgc2VnbWVudG9zIHBhcmEgbyBncsOhZmljbyBkYWRvIGUgYWRpY2lvbmEgbmEgY2FtYWRhIGRlIGxhYmVsc1xuICBjb25zdCBjcmVhdGVTZWdtZW50TGFiZWxzRm9yR3JhcGhpYyA9IHVzZUNhbGxiYWNrKChncmFwaGljOiBfX2VzcmkuR3JhcGhpYykgPT4ge1xuICAgIGlmICghbGFiZWxzTGF5ZXJSZWYuY3VycmVudCB8fCAhZ3JhcGhpY01vZHVsZVJlZi5jdXJyZW50KSByZXR1cm5cblxuICAgIGNvbnN0IGdyYXBoaWNJZCA9IGdldEdyYXBoaWNJZChncmFwaGljKVxuICAgIHJlbW92ZVNlZ21lbnRMYWJlbHMoZ3JhcGhpY0lkKVxuXG4gICAgY29uc3QgeyBzZWdtZW50cyB9ID0gY2FsY3VsYXRlU2VnbWVudHMoZ3JhcGhpYy5nZW9tZXRyeSlcbiAgICBjb25zdCBsYWJlbHM6IF9fZXNyaS5HcmFwaGljW10gPSBbXVxuXG4gICAgc2VnbWVudHMuZm9yRWFjaCgoc2VnbWVudCkgPT4ge1xuICAgICAgbGV0IHB0MTogbnVtYmVyW11cbiAgICAgIGxldCBwdDI6IG51bWJlcltdXG5cbiAgICAgIGlmIChncmFwaGljLmdlb21ldHJ5LnR5cGUgPT09IFwicG9seWxpbmVcIikge1xuICAgICAgICBjb25zdCBwb2x5bGluZSA9IGdyYXBoaWMuZ2VvbWV0cnlcbiAgICAgICAgcHQxID0gcG9seWxpbmUucGF0aHNbMF1bc2VnbWVudC5zZWdtZW50TnVtYmVyIC0gMV1cbiAgICAgICAgcHQyID0gcG9seWxpbmUucGF0aHNbMF1bc2VnbWVudC5zZWdtZW50TnVtYmVyXVxuICAgICAgfSBlbHNlIGlmIChncmFwaGljLmdlb21ldHJ5LnR5cGUgPT09IFwicG9seWdvblwiKSB7XG4gICAgICAgIGNvbnN0IHBvbHlnb24gPSBncmFwaGljLmdlb21ldHJ5XG4gICAgICAgIHB0MSA9IHBvbHlnb24ucmluZ3NbMF1bc2VnbWVudC5zZWdtZW50TnVtYmVyIC0gMV1cbiAgICAgICAgcHQyID0gcG9seWdvbi5yaW5nc1swXVtzZWdtZW50LnNlZ21lbnROdW1iZXJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgbWlkUG9pbnQgPSB7XG4gICAgICAgIHR5cGU6IFwicG9pbnRcIixcbiAgICAgICAgeDogKHB0MVswXSArIHB0MlswXSkgLyAyLFxuICAgICAgICB5OiAocHQxWzFdICsgcHQyWzFdKSAvIDIsXG4gICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGdyYXBoaWMuZ2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSxcbiAgICAgIH0gYXMgX19lc3JpLlBvaW50XG5cbiAgICAgIGNvbnN0IGxhYmVsR3JhcGhpYyA9IG5ldyAoZ3JhcGhpY01vZHVsZVJlZi5jdXJyZW50IGFzIGFueSkoe1xuICAgICAgICBnZW9tZXRyeTogbWlkUG9pbnQsXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHRleHQ6IGZvcm1hdERpc3RhbmNlKHNlZ21lbnQubGVuZ3RoKSxcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIGhhbG9Db2xvcjogXCJibGFja1wiLFxuICAgICAgICAgIGhhbG9TaXplOiBcIjNweFwiLFxuICAgICAgICAgIHhvZmZzZXQ6IDAsXG4gICAgICAgICAgeW9mZnNldDogLTE1LFxuICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgICAgZmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgICAgICB3ZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHsgcGFyZW50SWQ6IGdyYXBoaWNJZCB9LFxuICAgICAgfSlcblxuICAgICAgbGFiZWxzLnB1c2gobGFiZWxHcmFwaGljKVxuICAgIH0pXG5cbiAgICBsYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgIGlmIChsYWJlbHNMYXllclJlZi5jdXJyZW50KSB7XG4gICAgICAgIGxhYmVsc0xheWVyUmVmLmN1cnJlbnQuYWRkKGxhYmVsKVxuICAgICAgfVxuICAgIH0pXG4gICAgc2VnbWVudExhYmVsc01hcFJlZi5jdXJyZW50LnNldChncmFwaGljSWQsIGxhYmVscylcbiAgfSwgW10pXG5cbiAgLy8gQ3JpYSBncsOhZmljb3MgZGUgcG9udG9zICh2w6lydGljZXMpIHBhcmEgbyBncsOhZmljbyBkYWRvIGUgYWRpY2lvbmEgbmEgY2FtYWRhXG4gIC8vIENyaWEgdGV4dG8gcGVybWFuZW50ZSBkYSDDoXJlYSBubyBjZW50cm8gZG8gcG9sw61nb25vXG4gIGNvbnN0IGNyZWF0ZUFyZWFMYWJlbEZvckdyYXBoaWMgPSB1c2VDYWxsYmFjaygoZ3JhcGhpYzogX19lc3JpLkdyYXBoaWMpID0+IHtcbiAgICBpZiAoIWxhYmVsc0xheWVyUmVmLmN1cnJlbnQgfHwgIWdyYXBoaWNNb2R1bGVSZWYuY3VycmVudCB8fCBncmFwaGljLmdlb21ldHJ5LnR5cGUgIT09IFwicG9seWdvblwiKSByZXR1cm5cblxuICAgIGNvbnN0IGdyYXBoaWNJZCA9IGdldEdyYXBoaWNJZChncmFwaGljKVxuICAgIFxuICAgIC8vIFJlbW92ZSBsYWJlbCBkZSDDoXJlYSBhbnRpZ28gc2UgZXhpc3RpclxuICAgIHJlbW92ZUFyZWFMYWJlbChncmFwaGljSWQpXG4gICAgXG4gICAgY29uc3QgcG9seWdvbiA9IGdyYXBoaWMuZ2VvbWV0cnlcbiAgICBjb25zdCBhcmVhID0gZ2VvbWV0cnlFbmdpbmVSZWYuY3VycmVudD8uZ2VvZGVzaWNBcmVhKHBvbHlnb24sIFwic3F1YXJlLW1ldGVyc1wiKVxuICAgIFxuICAgIGlmICghYXJlYSkgcmV0dXJuXG5cbiAgICBjb25zdCBhcmVhTGFiZWwgPSBuZXcgKGdyYXBoaWNNb2R1bGVSZWYuY3VycmVudCBhcyBhbnkpKHtcbiAgICAgIGdlb21ldHJ5OiBwb2x5Z29uLmNlbnRyb2lkLFxuICAgICAgc3ltYm9sOiB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBoYWxvQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgaGFsb1NpemU6IFwiM3B4XCIsXG4gICAgICAgIHRleHQ6IGZvcm1hdEFyZWEoYXJlYSksXG4gICAgICAgIHhvZmZzZXQ6IDAsXG4gICAgICAgIHlvZmZzZXQ6IDAsXG4gICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICBzaXplOiAxNixcbiAgICAgICAgICBmYW1pbHk6IFwiQXJpYWxcIixcbiAgICAgICAgICB3ZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHsgcGFyZW50SWQ6IGdyYXBoaWNJZCwgdHlwZTogXCJhcmVhTGFiZWxcIiB9LFxuICAgIH0pXG5cbiAgICBsYWJlbHNMYXllclJlZi5jdXJyZW50LmFkZChhcmVhTGFiZWwpXG4gICAgYXJlYUxhYmVsc01hcFJlZi5jdXJyZW50LnNldChncmFwaGljSWQsIGFyZWFMYWJlbClcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIltMT0ddIEFkZGVkIGFyZWEgbGFiZWw6XCIsIGZvcm1hdEFyZWEoYXJlYSkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGNyZWF0ZVZlcnRleFBvaW50c0ZvckdyYXBoaWMgPSB1c2VDYWxsYmFjaygoZ3JhcGhpYzogX19lc3JpLkdyYXBoaWMpID0+IHtcbiAgICBpZiAoIWdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudCB8fCAhZ3JhcGhpY01vZHVsZVJlZi5jdXJyZW50KSByZXR1cm5cblxuICAgIGNvbnN0IGdyYXBoaWNJZCA9IGdldEdyYXBoaWNJZChncmFwaGljKVxuXG4gICAgLy8gUmVtb3ZlIHbDqXJ0aWNlcyBhbnRpZ29zXG4gICAgY29uc3Qgb2xkVmVydGljZXMgPSB2ZXJ0ZXhQb2ludHNNYXBSZWYuY3VycmVudC5nZXQoZ3JhcGhpY0lkKVxuICAgIGlmIChvbGRWZXJ0aWNlcykge1xuICAgICAgZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50LnJlbW92ZU1hbnkob2xkVmVydGljZXMpXG4gICAgfVxuXG4gICAgY29uc3QgdmVydGljZXM6IF9fZXNyaS5HcmFwaGljW10gPSBbXVxuICAgIGxldCBwb2ludHM6IG51bWJlcltdW10gPSBbXVxuXG4gICAgaWYgKGdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2x5bGluZVwiKSB7XG4gICAgICBjb25zdCBwb2x5bGluZSA9IGdyYXBoaWMuZ2VvbWV0cnlcbiAgICAgIHBvaW50cyA9IHBvbHlsaW5lLnBhdGhzWzBdXG4gICAgfSBlbHNlIGlmIChncmFwaGljLmdlb21ldHJ5LnR5cGUgPT09IFwicG9seWdvblwiKSB7XG4gICAgICBjb25zdCBwb2x5Z29uID0gZ3JhcGhpYy5nZW9tZXRyeVxuICAgICAgcG9pbnRzID0gcG9seWdvbi5yaW5nc1swXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwb2ludHMuZm9yRWFjaCgocHQpID0+IHtcbiAgICAgIGNvbnN0IHBvaW50R3JhcGhpYyA9IG5ldyAoZ3JhcGhpY01vZHVsZVJlZi5jdXJyZW50IGFzIGFueSkoe1xuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgIHR5cGU6IFwicG9pbnRcIixcbiAgICAgICAgICB4OiBwdFswXSxcbiAgICAgICAgICB5OiBwdFsxXSxcbiAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBncmFwaGljLmdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2UsXG4gICAgICAgIH0sXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6IFwic2ltcGxlLW1hcmtlclwiLFxuICAgICAgICAgIHN0eWxlOiBcImNpcmNsZVwiLFxuICAgICAgICAgIHNpemU6IDgsXG4gICAgICAgICAgY29sb3I6IFsyNTUsIDE2NSwgMCwgMC43XSwgLy8gbGFyYW5qYSBjb20gdHJhbnNwYXLDqm5jaWFcbiAgICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cmlidXRlczogeyBcbiAgICAgICAgICBwYXJlbnRJZDogZ3JhcGhpY0lkLFxuICAgICAgICAgIHR5cGU6IFwidmVydGV4SW5kaWNhdG9yXCIsXG4gICAgICAgICAgaW50ZXJhY3RpdmU6IGZhbHNlIC8vIE1hcmNhIGNvbW8gbsOjbyBpbnRlcmF0aXZvXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgdmVydGljZXMucHVzaChwb2ludEdyYXBoaWMpXG4gICAgfSlcblxuICAgIHZlcnRpY2VzLmZvckVhY2goKHYpID0+IHtcbiAgICAgIGlmIChncmFwaGljc0xheWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50LmFkZCh2KVxuICAgICAgfVxuICAgIH0pXG4gICAgdmVydGV4UG9pbnRzTWFwUmVmLmN1cnJlbnQuc2V0KGdyYXBoaWNJZCwgdmVydGljZXMpXG4gIH0sIFtdKVxuXG5cbiAgLy8gLS0tIFNUQVJUOiBJbmljaWFsaXphw6fDo28gZG8gU2tldGNoVmlld01vZGVsIGUgY2FtYWRhcyAtLS1cblxuICBjb25zdCBpbml0aWFsaXplZFJlZiA9IHVzZVJlZihmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghamltdU1hcFZpZXcgfHwgaW5pdGlhbGl6ZWRSZWYuY3VycmVudCkgcmV0dXJuXG5cbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiLFxuICAgICAgXCJlc3JpL3dpZGdldHMvU2tldGNoL1NrZXRjaFZpZXdNb2RlbFwiLFxuICAgICAgXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIsXG4gICAgICBcImVzcmkvR3JhcGhpY1wiLFxuICAgIF0pLnRoZW4oKFtHcmFwaGljc0xheWVyLCBTa2V0Y2hWaWV3TW9kZWwsIGdlb21ldHJ5RW5naW5lLCBHcmFwaGljXSkgPT4ge1xuICAgICAgZ2VvbWV0cnlFbmdpbmVSZWYuY3VycmVudCA9IGdlb21ldHJ5RW5naW5lXG4gICAgICBncmFwaGljTW9kdWxlUmVmLmN1cnJlbnQgPSBHcmFwaGljXG5cbiAgICAgIGNvbnN0IGdsID0gbmV3IEdyYXBoaWNzTGF5ZXIoe1xuICAgICAgICBpZDogXCJtZWFzdXJlbWVudFdpZGdldEdyYXBoaWNzTGF5ZXJcIixcbiAgICAgICAgdGl0bGU6IFwiTWVhc3VyZW1lbnQgR3JhcGhpY3NcIixcbiAgICAgICAgbGlzdE1vZGU6IFwiaGlkZVwiLFxuICAgICAgfSlcbiAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChnbClcbiAgICAgIGdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudCA9IGdsXG5cbiAgICAgIC8vIENyaWFyIGNhbWFkYSBzZXBhcmFkYSBwYXJhIGxhYmVscyAoc2VtcHJlIHBvciBjaW1hKVxuICAgICAgY29uc3QgbGFiZWxzTGF5ZXIgPSBuZXcgR3JhcGhpY3NMYXllcih7XG4gICAgICAgIGlkOiBcIm1lYXN1cmVtZW50V2lkZ2V0TGFiZWxzTGF5ZXJcIixcbiAgICAgICAgdGl0bGU6IFwiTWVhc3VyZW1lbnQgTGFiZWxzXCIsXG4gICAgICAgIGxpc3RNb2RlOiBcImhpZGVcIixcbiAgICAgICAgZWxldmF0aW9uSW5mbzoge1xuICAgICAgICAgIG1vZGU6IFwib24tdGhlLWdyb3VuZFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGFiZWxzTGF5ZXIpXG4gICAgICBsYWJlbHNMYXllclJlZi5jdXJyZW50ID0gbGFiZWxzTGF5ZXJcbiAgICAgIFxuICAgICAgLy8gR2FyYW50aXIgcXVlIGEgY2FtYWRhIGRlIGxhYmVscyBmaXF1ZSBwb3IgY2ltYTogcmVtb3ZlciBlIHJlLWFkaWNpb25hclxuICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGxhYmVsc0xheWVyKVxuICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxhYmVsc0xheWVyKVxuICAgICAgXG4gICAgICAvLyBEZWZpbmlyIG9yZGVtIGRlIHJlbmRlcml6YcOnw6NvIGV4cGzDrWNpdGFcbiAgICAgIGxhYmVsc0xheWVyLm9yZGVyID0gMTAwMFxuICAgICAgXG4gICAgICAvLyBGb3LDp2FyIGEgY2FtYWRhIGRlIGxhYmVscyBhIGZpY2FyIHBvciBjaW1hIHVzYW5kbyB0aW1lb3V0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGxhYmVsc0xheWVyUmVmLmN1cnJlbnQgJiYgamltdU1hcFZpZXcudmlldy5tYXApIHtcbiAgICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUobGFiZWxzTGF5ZXJSZWYuY3VycmVudClcbiAgICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGFiZWxzTGF5ZXJSZWYuY3VycmVudClcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIExhYmVscyBsYXllciBtb3ZlZCB0byB0b3BcIilcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKVxuXG4gICAgICAgc2tldGNoUmVmLmN1cnJlbnQgPSBuZXcgU2tldGNoVmlld01vZGVsKHtcbiAgICAgICAgIHZpZXc6IGppbXVNYXBWaWV3LnZpZXcsXG4gICAgICAgICBsYXllcjogZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50LFxuICAgICAgICAgZGVmYXVsdENyZWF0ZU9wdGlvbnM6IHsgXG4gICAgICAgICAgIGhhc1o6IGZhbHNlXG4gICAgICAgICB9LFxuICAgICAgICAgdXBkYXRlT25HcmFwaGljQ2xpY2s6IHRydWUsXG4gICAgICAgICBkZWZhdWx0VXBkYXRlT3B0aW9uczogeyBcbiAgICAgICAgICAgdG9vbDogXCJyZXNoYXBlXCIsIFxuICAgICAgICAgICB0b2dnbGVUb29sT25DbGljazogZmFsc2UsXG4gICAgICAgICAgIGVuYWJsZVJvdGF0aW9uOiB0cnVlLFxuICAgICAgICAgICBlbmFibGVTY2FsaW5nOiB0cnVlLFxuICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBmYWxzZVxuICAgICAgICAgfSxcbiAgICAgICAgIHBvbHlsaW5lU3ltYm9sOiB7XG4gICAgICAgICAgIHR5cGU6IFwic2ltcGxlLWxpbmVcIixcbiAgICAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgIHN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgcG9seWdvblN5bWJvbDoge1xuICAgICAgICAgICB0eXBlOiBcInNpbXBsZS1maWxsXCIsXG4gICAgICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDI1NSwgMC4zXSxcbiAgICAgICAgICAgc3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgIH0sXG4gICAgICAgICB9LFxuICAgICAgICAgdmVydGV4U3ltYm9sOiB7XG4gICAgICAgICAgIHR5cGU6IFwic2ltcGxlLW1hcmtlclwiLFxuICAgICAgICAgICBzdHlsZTogXCJjaXJjbGVcIixcbiAgICAgICAgICAgc2l6ZTogMTIsXG4gICAgICAgICAgIGNvbG9yOiBbMjU1LCAxNjUsIDBdLFxuICAgICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMjU1XSxcbiAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgfSxcbiAgICAgICAgIH0sXG4gICAgICAgICBtaWRWZXJ0ZXhTeW1ib2w6IHtcbiAgICAgICAgICAgdHlwZTogXCJzaW1wbGUtbWFya2VyXCIsXG4gICAgICAgICAgIHN0eWxlOiBcImNpcmNsZVwiLFxuICAgICAgICAgICBzaXplOiA4LFxuICAgICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICAgICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICAgY29sb3I6IFsyNTUsIDE2NSwgMF0sXG4gICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgIH0sXG4gICAgICAgICB9LFxuICAgICAgIH0pXG5cbiAgICAgICAvLyBDb25maWd1cmFyIHNuYXBwaW5nIG9wdGlvbnMgcGFyYSBvIFNrZXRjaFZpZXdNb2RlbCBzZWd1aW5kbyBkb2N1bWVudGHDp8OjbyBvZmljaWFsXG4gICAgICAgc2tldGNoUmVmLmN1cnJlbnQuc25hcHBpbmdPcHRpb25zID0ge1xuICAgICAgICAgZW5hYmxlZDogdHJ1ZSwgICAgICAgICAgLy8gSGFiaWxpdGEgbyBzbmFwcGluZyBnbG9iYWxtZW50ZVxuICAgICAgICAgc2VsZkVuYWJsZWQ6IHRydWUsICAgICAgLy8gSGFiaWxpdGEgc2VsZi1zbmFwcGluZyAoZ3VpYXMgZGUgw6JuZ3VsbyByZXRvIGUgcGFyYWxlbGlzbW8pXG4gICAgICAgICBmZWF0dXJlRW5hYmxlZDogdHJ1ZSwgICAvLyBIYWJpbGl0YSBmZWF0dXJlLXNuYXBwaW5nIChzbmFwcGluZyBlbSBmZWnDp8O1ZXMgZGUgb3V0cmFzIGNhbWFkYXMpXG4gICAgICAgICBkaXN0YW5jZTogMjAsICAgICAgICAgICAvLyBEaXN0w6JuY2lhIGRlIHRvbGVyw6JuY2lhIGVtIHBpeGVscyAob3RpbWl6YWRhIHBhcmEgcGVyZm9ybWFuY2UpXG4gICAgICAgICBmZWF0dXJlU291cmNlczogW10gICAgICAvLyBTZXLDoSBwb3B1bGFkbyBjb20gY2FtYWRhcyBkZSBsb3RlcyBlIHF1YWRyYXNcbiAgICAgICB9XG5cbiAgICAgICAvLyBDb25maWd1cmFyIGZvbnRlcyBkZSBzbmFwcGluZyBkYXMgY2FtYWRhcyBkbyBtYXBhXG4gICAgICAgY29uZmlndXJlU25hcHBpbmdTb3VyY2VzKClcblxuICAgICAgIC8vIEVzY3V0YXIgbXVkYW7Dp2FzIG5hcyBjYW1hZGFzIGRvIG1hcGEgcGFyYSByZWNhcnJlZ2FyIHNuYXBwaW5nXG4gICAgICAgY29uc3QgbGF5ZXJDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBDYW1hZGFzIGRvIG1hcGEgYWx0ZXJhZGFzIC0gcmVjYXJyZWdhbmRvIHNuYXBwaW5nXCIpXG4gICAgICAgICBjb25maWd1cmVTbmFwcGluZ1NvdXJjZXMoKVxuICAgICAgIH1cbiAgICAgICBcbiAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMub24oXCJhZnRlci1hZGRcIiwgbGF5ZXJDaGFuZ2VIYW5kbGVyKVxuICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy5vbihcImFmdGVyLXJlbW92ZVwiLCBsYXllckNoYW5nZUhhbmRsZXIpXG5cbiAgICAgICAvLyBPdGltaXphciBwZXJmb3JtYW5jZSBkbyBzbmFwcGluZyBxdWFuZG8gem9vbSBtdWRhclxuICAgICAgIGNvbnN0IHpvb21DaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgb3B0aW1pemVTbmFwcGluZ1BlcmZvcm1hbmNlKClcbiAgICAgICB9XG4gICAgICAgXG4gICAgICAgamltdU1hcFZpZXcudmlldy53YXRjaChcInpvb21cIiwgem9vbUNoYW5nZUhhbmRsZXIpXG5cblxuICAgICAgIC8vIENyZWF0ZSBldmVudFxuICAgICAgIGNyZWF0ZUhhbmRsZXJSZWYuY3VycmVudCA9IHNrZXRjaFJlZi5jdXJyZW50Lm9uKFwiY3JlYXRlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgaWYgKFxuICAgICAgICAgICBldmVudC5zdGF0ZSA9PT0gXCJhY3RpdmVcIiAmJlxuICAgICAgICAgICAoZXZlbnQuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSBcInBvbHlsaW5lXCIgfHwgZXZlbnQuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSBcInBvbHlnb25cIilcbiAgICAgICAgICkge1xuICAgICAgICAgICBsZXQgbGl2ZVZhbHVlID0gXCJcIlxuICAgICAgICAgICBpZiAoZXZlbnQuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSBcInBvbHlsaW5lXCIpIHtcbiAgICAgICAgICAgICBjb25zdCBwb2x5bGluZSA9IGV2ZW50LmdyYXBoaWMuZ2VvbWV0cnlcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAvLyBDYXB0dXJhciBwb250byBpbmljaWFsIHBhcmEgc25hcCBkZSBmZWNoYW1lbnRvIChhcGVuYXMgcGFyYSBkaXN0w6JuY2lhKVxuICAgICAgICAgICAgIGlmIChwb2x5bGluZS5wYXRoc1swXSAmJiBwb2x5bGluZS5wYXRoc1swXS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0UG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgIHR5cGU6IFwicG9pbnRcIixcbiAgICAgICAgICAgICAgICAgeDogcG9seWxpbmUucGF0aHNbMF1bMF1bMF0sXG4gICAgICAgICAgICAgICAgIHk6IHBvbHlsaW5lLnBhdGhzWzBdWzBdWzFdLFxuICAgICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBwb2x5bGluZS5zcGF0aWFsUmVmZXJlbmNlXG4gICAgICAgICAgICAgICB9IGFzIF9fZXNyaS5Qb2ludFxuICAgICAgICAgICAgICAgc2V0U3RhcnRQb2ludChmaXJzdFBvaW50KVxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBQb250byBpbmljaWFsIGNhcHR1cmFkbyBwYXJhIGRpc3TDom5jaWE6XCIsIGZpcnN0UG9pbnQpXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltERUJVR10gYWN0aXZlQnV0dG9uOlwiLCBhY3RpdmVCdXR0b24pXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIC8vIFZlcmlmaWNhciBzZSBlc3TDoSBwcsOzeGltbyBhbyBwb250byBpbmljaWFsIChhcGVuYXMgcGFyYSBkaXN0w6JuY2lhKVxuICAgICAgICAgICAgIGlmIChwb2x5bGluZS5wYXRoc1swXSAmJiBwb2x5bGluZS5wYXRoc1swXS5sZW5ndGggPiAxICYmIHN0YXJ0UG9pbnQpIHtcbiAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2ludFwiLFxuICAgICAgICAgICAgICAgICB4OiBwb2x5bGluZS5wYXRoc1swXVtwb2x5bGluZS5wYXRoc1swXS5sZW5ndGggLSAxXVswXSxcbiAgICAgICAgICAgICAgICAgeTogcG9seWxpbmUucGF0aHNbMF1bcG9seWxpbmUucGF0aHNbMF0ubGVuZ3RoIC0gMV1bMV0sXG4gICAgICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHBvbHlsaW5lLnNwYXRpYWxSZWZlcmVuY2VcbiAgICAgICAgICAgICAgIH0gYXMgX19lc3JpLlBvaW50XG5cbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBWZXJpZmljYW5kbyBwcm94aW1pZGFkZSAtIHN0YXJ0UG9pbnQ6XCIsIHN0YXJ0UG9pbnQpXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltERUJVR10gVmVyaWZpY2FuZG8gcHJveGltaWRhZGUgLSBjdXJyZW50UG9pbnQ6XCIsIGN1cnJlbnRQb2ludClcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBhY3RpdmVCdXR0b24gZHVyYW50ZSB2ZXJpZmljYcOnw6NvOlwiLCBhY3RpdmVCdXR0b24pXG5cbiAgICAgICAgICAgICAgIGNvbnN0IG5lYXJTdGFydCA9IGNoZWNrTmVhclN0YXJ0UG9pbnQoY3VycmVudFBvaW50KVxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddIG5lYXJTdGFydDpcIiwgbmVhclN0YXJ0KVxuICAgICAgICAgICAgICAgc2V0SXNOZWFyU3RhcnRQb2ludChuZWFyU3RhcnQpXG5cbiAgICAgICAgICAgICAgIGlmIChuZWFyU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgbGl2ZVZhbHVlICs9IFwiIChwcsOzeGltbyBhbyBpbsOtY2lvIC0gZHVwbG8gY2xpcXVlIHBhcmEgZmVjaGFyKVwiXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gUHLDs3hpbW8gYW8gcG9udG8gaW5pY2lhbCFcIilcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAvLyBEZXRlY3RhciDDom5ndWxvcyByZXRvcyBwYXJhIGRpc3TDom5jaWFcbiAgICAgICAgICAgICBpZiAoYWN0aXZlQnV0dG9uID09PSBcIm1lYXN1cmVEaXN0YW5jZVwiKSB7XG4gICAgICAgICAgICAgICBjb25zdCByaWdodEFuZ2xlUmVzdWx0ID0gZGV0ZWN0UmlnaHRBbmdsZShwb2x5bGluZSlcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBEZXRlY8Onw6NvIGRlIMOibmd1bG8gcmV0bzpcIiwgcmlnaHRBbmdsZVJlc3VsdClcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgaWYgKHJpZ2h0QW5nbGVSZXN1bHQuaXNSaWdodEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgIHNldElzUmlnaHRBbmdsZSh0cnVlKVxuICAgICAgICAgICAgICAgICBzZXRSaWdodEFuZ2xlU3VnZ2VzdGlvbihyaWdodEFuZ2xlUmVzdWx0LnN1Z2dlc3Rpb24pXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAvLyBDcmlhciBpbmRpY2Fkb3IgdmlzdWFsIG5vIHbDqXJ0aWNlXG4gICAgICAgICAgICAgICAgIGlmIChwb2x5bGluZS5wYXRoc1swXS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleFBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb2ludFwiLFxuICAgICAgICAgICAgICAgICAgICAgeDogcG9seWxpbmUucGF0aHNbMF1bcG9seWxpbmUucGF0aHNbMF0ubGVuZ3RoIC0gMl1bMF0sXG4gICAgICAgICAgICAgICAgICAgICB5OiBwb2x5bGluZS5wYXRoc1swXVtwb2x5bGluZS5wYXRoc1swXS5sZW5ndGggLSAyXVsxXSxcbiAgICAgICAgICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHBvbHlsaW5lLnNwYXRpYWxSZWZlcmVuY2VcbiAgICAgICAgICAgICAgICAgICB9IGFzIF9fZXNyaS5Qb2ludFxuICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJpZ2h0QW5nbGVJbmRpY2F0b3IodmVydGV4UG9pbnQpXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIGxpdmVWYWx1ZSArPSBgICgke3JpZ2h0QW5nbGVSZXN1bHQuc3VnZ2VzdGlvbn0pYFxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIMOCbmd1bG8gcmV0byBkZXRlY3RhZG86XCIsIHJpZ2h0QW5nbGVSZXN1bHQuYW5nbGUudG9GaXhlZCgxKSwgXCJncmF1c1wiKVxuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgc2V0SXNSaWdodEFuZ2xlKGZhbHNlKVxuICAgICAgICAgICAgICAgICBzZXRSaWdodEFuZ2xlU3VnZ2VzdGlvbihudWxsKVxuICAgICAgICAgICAgICAgICByZW1vdmVSaWdodEFuZ2xlSW5kaWNhdG9yKClcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAvLyBOT1ZPOiBDcmlhciBsYWJlbHMgZGUgc2VnbWVudG9zIGEgY2FkYSBjbGlxdWUgZHVyYW50ZSBvIGRlc2VuaG8gZGUgZGlzdMOibmNpYVxuICAgICAgICAgICAgIGlmIChwb2x5bGluZS5wYXRoc1swXSAmJiBwb2x5bGluZS5wYXRoc1swXS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBDcmlhbmRvIGxhYmVscyBkZSBzZWdtZW50b3MgZHVyYW50ZSBkZXNlbmhvIGRlIGRpc3TDom5jaWFcIilcbiAgICAgICAgICAgICAgIGNyZWF0ZVNlZ21lbnRMYWJlbHNGb3JHcmFwaGljKGV2ZW50LmdyYXBoaWMpXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIC8vIE7Dg08gbW9zdHJhciBsaXZlVmFsdWUgcGFyYSBkaXN0w6JuY2lhIC0gYXBlbmFzIG9zIGxhYmVscyBkb3Mgc2VnbWVudG9zXG4gICAgICAgICAgICAgXG4gICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSBcInBvbHlnb25cIikge1xuICAgICAgICAgICAgIC8vIFBhcmEgw6FyZWEsIHVzYXIgYSBmdW5jaW9uYWxpZGFkZSBvcmlnaW5hbFxuICAgICAgICAgICAgIGxpdmVWYWx1ZSA9IGZvcm1hdExpdmVNZWFzdXJlbWVudChldmVudC5ncmFwaGljLmdlb21ldHJ5KVxuICAgICAgICAgICAgIC8vIFJlc2V0YXIgZXN0YWRvcyBkZSBzbmFwIGRlIGZlY2hhbWVudG8gcGFyYSDDoXJlYVxuICAgICAgICAgICAgIHNldElzTmVhclN0YXJ0UG9pbnQoZmFsc2UpXG4gICAgICAgICAgICAgc2V0U3RhcnRQb2ludChudWxsKVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIC8vIE5PVk86IENyaWFyIGxhYmVscyBkZSBzZWdtZW50b3MgYSBjYWRhIGNsaXF1ZSBkdXJhbnRlIG8gZGVzZW5obyBkZSDDoXJlYVxuICAgICAgICAgICAgIGlmIChldmVudC5ncmFwaGljLmdlb21ldHJ5LnJpbmdzWzBdICYmIGV2ZW50LmdyYXBoaWMuZ2VvbWV0cnkucmluZ3NbMF0ubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gQ3JpYW5kbyBsYWJlbHMgZGUgc2VnbWVudG9zIGR1cmFudGUgZGVzZW5obyBkZSDDoXJlYVwiKVxuICAgICAgICAgICAgICAgY3JlYXRlU2VnbWVudExhYmVsc0ZvckdyYXBoaWMoZXZlbnQuZ3JhcGhpYylcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBMaXZlIG1lYXN1cmVtZW50IGR1cmluZyBjcmVhdGU6XCIsIGxpdmVWYWx1ZSlcbiAgICAgICAgICAgc2V0TGl2ZU1lYXN1cmVtZW50KGxpdmVWYWx1ZSlcbiAgICAgICAgICAgdXBkYXRlTGl2ZVRleHRHcmFwaGljKGV2ZW50LmdyYXBoaWMuZ2VvbWV0cnksIGxpdmVWYWx1ZSA/PyBcIlwiKVxuICAgICAgICAgfVxuXG4gICAgICAgICBpZiAoXG4gICAgICAgICAgIGV2ZW50LnN0YXRlID09PSBcImNvbXBsZXRlXCIgJiZcbiAgICAgICAgICAgKGV2ZW50LmdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2x5bGluZVwiIHx8IGV2ZW50LmdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2x5Z29uXCIpXG4gICAgICAgICApIHtcbiAgICAgICAgICAgY29uc3QgZ3JhcGhpYyA9IGV2ZW50LmdyYXBoaWNcbiAgICAgICAgICAgY29uc3QgZ3JhcGhpY0lkID0gZ2V0R3JhcGhpY0lkKGdyYXBoaWMpXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gR3JhcGhpYyBjcmVhdGVkIHdpdGggaWQ6XCIsIGdyYXBoaWNJZClcblxuICAgICAgICAgICAvLyBBZGljaW9uYSBvIGdyw6FmaWNvIGxvY2FsbWVudGUgZSBhdHVhbGl6YSBtZWRpw6fDtWVzXG4gICAgICAgICAgIGdyYXBoaWNzUmVmLmN1cnJlbnQucHVzaChncmFwaGljKVxuICAgICAgICAgICB1cGRhdGVNZWFzdXJlbWVudERldGFpbHMoZ3JhcGhpYylcblxuICAgICAgICAgICAvLyBDcmlhIGxhYmVscyBkZSBzZWdtZW50b3MgcGVybWFuZW50ZXMgQVBFTkFTIGFvIGZpbmFsaXphclxuICAgICAgICAgICBpZiAoZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSBcInBvbHlsaW5lXCIpIHtcbiAgICAgICAgICAgICBjcmVhdGVTZWdtZW50TGFiZWxzRm9yR3JhcGhpYyhncmFwaGljKVxuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgLy8gQ3JpYSB2w6lydGljZXMgcGVybWFuZW50ZXMgcGFyYSBvIGdyw6FmaWNvIGNyaWFkb1xuICAgICAgICAgICBjcmVhdGVWZXJ0ZXhQb2ludHNGb3JHcmFwaGljKGdyYXBoaWMpXG5cbiAgICAgICAgICAgLy8gUGFyYSBwb2zDrWdvbm9zLCBjcmlhIGxhYmVscyBkZSBzZWdtZW50b3MgRSDDoXJlYVxuICAgICAgICAgICBpZiAoZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSBcInBvbHlnb25cIikge1xuICAgICAgICAgICAgIGNyZWF0ZVNlZ21lbnRMYWJlbHNGb3JHcmFwaGljKGdyYXBoaWMpXG4gICAgICAgICAgICAgY3JlYXRlQXJlYUxhYmVsRm9yR3JhcGhpYyhncmFwaGljKVxuICAgICAgICAgICB9XG5cbiAgICAgICAgICAgc2V0TGl2ZU1lYXN1cmVtZW50KG51bGwpXG5cbiAgICAgICAgICAgLy8gUmVtb3ZlIHRleHRvIGRpbsOibWljbyBkZSBtZWRpw6fDo28gYW8gdml2b1xuICAgICAgICAgICBpZiAobGl2ZVRleHRHcmFwaGljUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICBsYWJlbHNMYXllclJlZi5jdXJyZW50Py5yZW1vdmUobGl2ZVRleHRHcmFwaGljUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgbGl2ZVRleHRHcmFwaGljUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgICAgIH1cblxuICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgIHNrZXRjaFJlZi5jdXJyZW50Py51cGRhdGUoZ3JhcGhpYylcbiAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltMT0ddIEVycm9yIHVwZGF0aW5nIGdyYXBoaWMgYWZ0ZXIgY3JlYXRpb246XCIsIGUpXG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9KVxuXG4gICAgICAgLy8gVXBkYXRlIGV2ZW50XG4gICAgICAgdXBkYXRlSGFuZGxlclJlZi5jdXJyZW50ID0gc2tldGNoUmVmLmN1cnJlbnQub24oXCJ1cGRhdGVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IFwiYWN0aXZlXCIgfHwgZXZlbnQuc3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICBjb25zdCBlZGl0ZWRHcmFwaGljID0gZXZlbnQuZ3JhcGhpY3NbMF1cbiAgICAgICAgICAgY29uc3QgZ3JhcGhpY0lkID0gZ2V0R3JhcGhpY0lkKGVkaXRlZEdyYXBoaWMpXG4gICAgICAgICAgIGNvbnN0IGlkeCA9IGdyYXBoaWNzUmVmLmN1cnJlbnQuZmluZEluZGV4KChnKSA9PiBnZXRHcmFwaGljSWQoZykgPT09IGdyYXBoaWNJZClcbiAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICAgZ3JhcGhpY3NSZWYuY3VycmVudFtpZHhdID0gZWRpdGVkR3JhcGhpY1xuICAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVtZW50RGV0YWlscyhlZGl0ZWRHcmFwaGljKVxuXG4gICAgICAgICAgICAgaWYgKGV2ZW50LnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICAgICAvLyBSZW1vdmVyIGxhYmVsIGRpbsOibWljbyBzZSBleGlzdGlyXG4gICAgICAgICAgICAgICBpZiAobGl2ZVRleHRHcmFwaGljUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgbGFiZWxzTGF5ZXJSZWYuY3VycmVudD8ucmVtb3ZlKGxpdmVUZXh0R3JhcGhpY1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgICBsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC8vIFJlbW92ZSB2w6lydGljZXMgY3VzdG9taXphZG9zIGR1cmFudGUgZWRpw6fDo28gcGFyYSBuw6NvIGludGVyZmVyaXJcbiAgICAgICAgICAgICAgIHJlbW92ZVZlcnRleFBvaW50cyhncmFwaGljSWQpXG4gICAgICAgICAgICAgICAvLyBOw4NPIGNoYW1hIHVwZGF0ZUxpdmVUZXh0R3JhcGhpYyBwYXJhIGV2aXRhciByZWFwYXJlY2VyIGxhYmVsIGR1cmFudGUgZWRpw6fDo29cbiAgICAgICAgICAgICAgIHNldExpdmVNZWFzdXJlbWVudChudWxsKVxuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAvLyBFc3RhZG8gY29tcGxldGUsIHBvZGUgYXR1YWxpemFyIG8gbGl2ZU1lYXN1cmVtZW50IGUgbyBsYWJlbFxuICAgICAgICAgICAgICAgc2V0TGl2ZU1lYXN1cmVtZW50KG51bGwpXG4gICAgICAgICAgICAgICBpZiAobGl2ZVRleHRHcmFwaGljUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgbGFiZWxzTGF5ZXJSZWYuY3VycmVudD8ucmVtb3ZlKGxpdmVUZXh0R3JhcGhpY1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgICBsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAvLyBBdHVhbGl6YSBsYWJlbHMgcGVybWFuZW50ZXMgZG9zIHNlZ21lbnRvcyBzZW1wcmVcbiAgICAgICAgICAgICBjcmVhdGVTZWdtZW50TGFiZWxzRm9yR3JhcGhpYyhlZGl0ZWRHcmFwaGljKVxuXG4gICAgICAgICAgICAgLy8gQXR1YWxpemEgdsOpcnRpY2VzIHBlcm1hbmVudGVzIGFwZW5hcyBxdWFuZG8gbsOjbyBlc3TDoSBlZGl0YW5kb1xuICAgICAgICAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICBjcmVhdGVWZXJ0ZXhQb2ludHNGb3JHcmFwaGljKGVkaXRlZEdyYXBoaWMpXG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgLy8gQXR1YWxpemEgbGFiZWwgZGEgw6FyZWEgcGFyYSBwb2zDrWdvbm9zXG4gICAgICAgICAgICAgaWYgKGVkaXRlZEdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gXCJwb2x5Z29uXCIpIHtcbiAgICAgICAgICAgICAgIGNyZWF0ZUFyZWFMYWJlbEZvckdyYXBoaWMoZWRpdGVkR3JhcGhpYylcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIEdyYXBoaWMgdXBkYXRlZCB3aXRoIGlkOlwiLCBncmFwaGljSWQpXG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9KVxuXG4gICAgICAgLy8gRGVsZXRlIGV2ZW50XG4gICAgICAgZGVsZXRlSGFuZGxlclJlZi5jdXJyZW50ID0gc2tldGNoUmVmLmN1cnJlbnQub24oXCJkZWxldGVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICBldmVudC5ncmFwaGljcy5mb3JFYWNoKChkZWxldGVkR3JhcGhpYykgPT4ge1xuICAgICAgICAgICBjb25zdCBncmFwaGljSWQgPSBnZXRHcmFwaGljSWQoZGVsZXRlZEdyYXBoaWMpXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gR3JhcGhpYyBkZWxldGVkIHdpdGggaWQ6XCIsIGdyYXBoaWNJZClcblxuICAgICAgICAgICAvLyBSZW1vdmUgbGFiZWxzIGFzc29jaWFkb3NcbiAgICAgICAgICAgcmVtb3ZlU2VnbWVudExhYmVscyhncmFwaGljSWQpXG5cbiAgICAgICAgICAgLy8gUmVtb3ZlIHbDqXJ0aWNlcyBhc3NvY2lhZG9zXG4gICAgICAgICAgIHJlbW92ZVZlcnRleFBvaW50cyhncmFwaGljSWQpXG5cbiAgICAgICAgICAgLy8gUmVtb3ZlIGxhYmVsIGRlIMOhcmVhIGFzc29jaWFkb1xuICAgICAgICAgICByZW1vdmVBcmVhTGFiZWwoZ3JhcGhpY0lkKVxuXG4gICAgICAgICAgIGdyYXBoaWNzUmVmLmN1cnJlbnQgPSBncmFwaGljc1JlZi5jdXJyZW50LmZpbHRlcihcbiAgICAgICAgICAgICAoZykgPT4gZ2V0R3JhcGhpY0lkKGcpICE9PSBncmFwaGljSWRcbiAgICAgICAgICAgKVxuICAgICAgICAgICByZW1vdmVNZWFzdXJlbWVudERldGFpbHMoZGVsZXRlZEdyYXBoaWMpXG4gICAgICAgICB9KVxuICAgICAgIH0pXG5cblxuXG4gICAgICAgLy8gSGFuZGxlciBwYXJhIGR1cGxvIGNsaXF1ZSBkdXJhbnRlIG1lZGnDp8OjbyBkZSBkaXN0w6JuY2lhXG4gICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyUmVmLmN1cnJlbnQgPSBqaW11TWFwVmlldy52aWV3Lm9uKFwiZG91YmxlLWNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBEdXBsbyBjbGlxdWUgZGV0ZWN0YWRvXCIpXG4gICAgICAgICBjb25zb2xlLmxvZyhcIltERUJVR10gc2tldGNoUmVmLmN1cnJlbnQ/LnN0YXRlOlwiLCBza2V0Y2hSZWYuY3VycmVudD8uc3RhdGUpXG4gICAgICAgICBjb25zb2xlLmxvZyhcIltERUJVR10gYWN0aXZlQnV0dG9uOlwiLCBhY3RpdmVCdXR0b24pXG4gICAgICAgICBjb25zb2xlLmxvZyhcIltERUJVR10gaXNOZWFyU3RhcnRQb2ludDpcIiwgaXNOZWFyU3RhcnRQb2ludClcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBpc1JpZ2h0QW5nbGU6XCIsIGlzUmlnaHRBbmdsZSlcblxuICAgICAgICAgaWYgKHNrZXRjaFJlZi5jdXJyZW50Py5zdGF0ZSA9PT0gXCJhY3RpdmVcIiAmJiBhY3RpdmVCdXR0b24gPT09IFwibWVhc3VyZURpc3RhbmNlXCIpIHtcbiAgICAgICAgICAgaWYgKGlzTmVhclN0YXJ0UG9pbnQpIHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIER1cGxvIGNsaXF1ZSAtIGZpbmFsaXphbmRvIG1lZGnDp8OjbyAoc25hcCBhbyBpbsOtY2lvKVwiKVxuICAgICAgICAgICAgIHNrZXRjaFJlZi5jdXJyZW50LmNvbXBsZXRlKClcbiAgICAgICAgICAgfSBlbHNlIGlmIChpc1JpZ2h0QW5nbGUpIHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIER1cGxvIGNsaXF1ZSAtIHRyYXZhbmRvIMOibmd1bG8gcmV0b1wiKVxuICAgICAgICAgICAgIC8vIEFxdWkgdm9jw6ogcG9kZSBpbXBsZW1lbnRhciBsw7NnaWNhIGFkaWNpb25hbCBwYXJhIFwidHJhdmFyXCIgbyDDom5ndWxvXG4gICAgICAgICAgICAgLy8gUG9yIGVucXVhbnRvLCBhcGVuYXMgZmluYWxpemEgYSBtZWRpw6fDo29cbiAgICAgICAgICAgICBza2V0Y2hSZWYuY3VycmVudC5jb21wbGV0ZSgpXG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9KVxuXG5cbiAgICAgICAvLyBDbGljayBldmVudCBwYXJhIHNlbGXDp8Ojb1xuICAgICAgIGNsaWNrSGFuZGxlclJlZi5jdXJyZW50ID0gamltdU1hcFZpZXcudmlldy5vbihcImNsaWNrXCIsIGFzeW5jIChldnQpID0+IHtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gTWFwIGNsaWNrIGV2ZW50XCIpXG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgY29uc3QgaGl0ID0gYXdhaXQgamltdU1hcFZpZXcudmlldy5oaXRUZXN0KGV2dClcbiAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBoaXQucmVzdWx0cy5maWx0ZXIoXG4gICAgICAgICAgIChyKSA9PiAnZ3JhcGhpYycgaW4gciAmJiByLmdyYXBoaWMgJiYgci5ncmFwaGljLmxheWVyPy5pZCA9PT0gZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50Py5pZFxuICAgICAgICAgKSBhcyBBcnJheTx7IGdyYXBoaWM6IF9fZXNyaS5HcmFwaGljIH0+XG5cbiAgICAgICAgIC8vIEZpbHRyYSBhcGVuYXMgZ3LDoWZpY29zIHByaW5jaXBhaXMgKG7Do28gdsOpcnRpY2VzIG91IGxhYmVscylcbiAgICAgICAgIGNvbnN0IG1haW5HcmFwaGljcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKGMgPT4gXG4gICAgICAgICAgICFjLmdyYXBoaWMuYXR0cmlidXRlcz8udHlwZSB8fCBcbiAgICAgICAgICAgKGMuZ3JhcGhpYy5hdHRyaWJ1dGVzLnR5cGUgIT09IFwidmVydGV4SW5kaWNhdG9yXCIgJiYgXG4gICAgICAgICAgICBjLmdyYXBoaWMuYXR0cmlidXRlcy50eXBlICE9PSBcImFyZWFMYWJlbFwiICYmXG4gICAgICAgICAgICBjLmdyYXBoaWMuYXR0cmlidXRlcy50eXBlICE9PSBcImRpc3RhbmNlTG9ja0luZGljYXRvclwiKVxuICAgICAgICAgKVxuXG4gICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgXCJbTE9HXSBDdXJyZW50IGdyYXBoaWNzUmVmIElEczpcIixcbiAgICAgICAgICAgZ3JhcGhpY3NSZWYuY3VycmVudC5tYXAoKGcpID0+IGdldEdyYXBoaWNJZChnKSlcbiAgICAgICAgIClcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gSGl0IGNhbmRpZGF0ZSBJRHM6XCIsIG1haW5HcmFwaGljcy5tYXAoKGMpID0+IGdldEdyYXBoaWNJZChjLmdyYXBoaWMpKSlcblxuICAgICAgICAgbGV0IGdyYXBoaWNIaXQgPSBudWxsXG4gICAgICAgICBmb3IgKGNvbnN0IHIgb2YgbWFpbkdyYXBoaWNzKSB7XG4gICAgICAgICAgIGNvbnN0IGhpdElkID0gZ2V0R3JhcGhpY0lkKHIuZ3JhcGhpYylcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBDaGVja2luZyBjYW5kaWRhdGUgZ3JhcGhpYyBpZDpcIiwgaGl0SWQpXG4gICAgICAgICAgIGNvbnN0IGZvdW5kID0gZ3JhcGhpY3NSZWYuY3VycmVudC5maW5kKChnKSA9PiBnZXRHcmFwaGljSWQoZykgPT09IGhpdElkKVxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIEZvdW5kIGluIGdyYXBoaWNzUmVmOlwiLCBmb3VuZCA/IFwiWWVzXCIgOiBcIk5vXCIpXG4gICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgIGdyYXBoaWNIaXQgPSByXG4gICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuXG4gICAgICAgICBpZiAoIWdyYXBoaWNIaXQgJiYgbWFpbkdyYXBoaWNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgY29uc3QgZmFsbGJhY2tJZCA9IGdldEdyYXBoaWNJZChtYWluR3JhcGhpY3NbMF0uZ3JhcGhpYylcbiAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgIFwiW1dBUk5dIEdyYXBoaWMgbm90IGZvdW5kIGluIGdyYXBoaWNzUmVmLCBmYWxsYmFjayB0byBmaXJzdCBjYW5kaWRhdGUgd2l0aCBpZDpcIixcbiAgICAgICAgICAgICBmYWxsYmFja0lkXG4gICAgICAgICAgIClcbiAgICAgICAgICAgc2V0U2VsZWN0ZWRHcmFwaGljSWQoZmFsbGJhY2tJZClcbiAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICBza2V0Y2hSZWYuY3VycmVudD8udXBkYXRlKG1haW5HcmFwaGljc1swXS5ncmFwaGljKVxuICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW0xPR10gRXJyb3IgdXBkYXRpbmcgZ3JhcGhpYyBvbiBmYWxsYmFjayBjbGljazpcIiwgZSlcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm5cbiAgICAgICAgIH1cblxuICAgICAgICAgaWYgKCFncmFwaGljSGl0KSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gTm8gbWVhc3VyZW1lbnQgZ3JhcGhpYyBoaXRcIilcbiAgICAgICAgICAgc2V0U2VsZWN0ZWRHcmFwaGljSWQobnVsbClcbiAgICAgICAgICAgc2tldGNoUmVmLmN1cnJlbnQ/LmNhbmNlbCgpXG4gICAgICAgICAgIHJldHVyblxuICAgICAgICAgfVxuICAgICAgICAgY29uc3QgY2xpY2tlZElkID0gZ2V0R3JhcGhpY0lkKGdyYXBoaWNIaXQuZ3JhcGhpYylcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gR3JhcGhpYyBjbGlja2VkLCBzZXR0aW5nIHNlbGVjdGVkR3JhcGhpY0lkIHRvOlwiLCBjbGlja2VkSWQpXG4gICAgICAgICBzZXRTZWxlY3RlZEdyYXBoaWNJZChjbGlja2VkSWQpXG4gICAgICAgICB0cnkge1xuICAgICAgICAgICBza2V0Y2hSZWYuY3VycmVudD8udXBkYXRlKGdyYXBoaWNIaXQuZ3JhcGhpYylcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgY29uc29sZS53YXJuKFwiW0xPR10gRXJyb3IgdXBkYXRpbmcgZ3JhcGhpYyBvbiBjbGljazpcIiwgZSlcbiAgICAgICAgIH1cbiAgICAgICB9KVxuXG4gICAgICBpbml0aWFsaXplZFJlZi5jdXJyZW50ID0gdHJ1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW51cCBkb3MgaGFuZGxlcnNcbiAgICAgIGRvdWJsZUNsaWNrSGFuZGxlclJlZi5jdXJyZW50Py5yZW1vdmUoKVxuICAgIH1cbiAgIH0sIFtqaW11TWFwVmlldywgY3JlYXRlQXJlYUxhYmVsRm9yR3JhcGhpYywgY3JlYXRlU2VnbWVudExhYmVsc0ZvckdyYXBoaWMsIGNyZWF0ZVZlcnRleFBvaW50c0ZvckdyYXBoaWMsIGZvcm1hdExhc3RTZWdtZW50RGlzdGFuY2UsIGZvcm1hdExpdmVNZWFzdXJlbWVudCwgcmVtb3ZlTWVhc3VyZW1lbnREZXRhaWxzLCB1cGRhdGVNZWFzdXJlbWVudERldGFpbHMsIGFjdGl2ZUJ1dHRvbiwgY2hlY2tOZWFyU3RhcnRQb2ludCwgaXNOZWFyU3RhcnRQb2ludCwgc3RhcnRQb2ludCwgY29uZmlndXJlU25hcHBpbmdTb3VyY2VzLCBjcmVhdGVSaWdodEFuZ2xlSW5kaWNhdG9yLCBkZXRlY3RSaWdodEFuZ2xlLCBpc1JpZ2h0QW5nbGUsIHJlbW92ZVJpZ2h0QW5nbGVJbmRpY2F0b3IsIG9wdGltaXplU25hcHBpbmdQZXJmb3JtYW5jZV0pXG5cbiAgLy8gRGVsZXRlIGNvbSB0ZWNsYSBEZWxldGUgb3UgQmFja3NwYWNlIGUgRVNDIHBhcmEgY2FuY2VsYXIgZGVzZW5ob1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVyblxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBLZXlEb3duIGV2ZW50OlwiLCBldmVudC5rZXksIFwic2VsZWN0ZWRHcmFwaGljSWQ6XCIsIHNlbGVjdGVkR3JhcGhpY0lkUmVmLmN1cnJlbnQpXG4gICAgICBcbiAgICAgIFxuICAgICAgLy8gRVNDIHBhcmEgY2FuY2VsYXIgZGVzZW5obyBhdGl2b1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBpZiAoc2tldGNoUmVmLmN1cnJlbnQ/LnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBFU0MgcHJlc3NlZCBkdXJpbmcgYWN0aXZlIGRyYXdpbmcgLSBjbGVhbmluZyB1cFwiKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gbGl2ZVRleHRHcmFwaGljUmVmLmN1cnJlbnQgYmVmb3JlIGNsZWFudXA6XCIsIGxpdmVUZXh0R3JhcGhpY1JlZi5jdXJyZW50KVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gbGl2ZU1lYXN1cmVtZW50IGJlZm9yZSBjbGVhbnVwOlwiLCBsaXZlTWVhc3VyZW1lbnQpXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gTGltcGEgbWVkacOnw6NvIGFvIHZpdm9cbiAgICAgICAgICBzZXRMaXZlTWVhc3VyZW1lbnQobnVsbClcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBSZW1vdmUgdGV4dG8gZGluw6JtaWNvIHNlIGV4aXN0aXJcbiAgICAgICAgICBpZiAobGl2ZVRleHRHcmFwaGljUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gUmVtb3ZpbmcgbGl2ZVRleHRHcmFwaGljOlwiLCBsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudClcbiAgICAgICAgICAgIGxhYmVsc0xheWVyUmVmLmN1cnJlbnQ/LnJlbW92ZShsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudClcbiAgICAgICAgICAgIGxpdmVUZXh0R3JhcGhpY1JlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudCBhZnRlciBjbGVhbnVwOlwiLCBsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBObyBsaXZlVGV4dEdyYXBoaWMgdG8gcmVtb3ZlXCIpXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIEZvcsOnYSBsaW1wZXphIGRlIHRvZG9zIG9zIGdyw6FmaWNvcyBkZSB0ZXh0byBuYSBjYW1hZGEgZGUgbGFiZWxzXG4gICAgICAgICAgaWYgKGxhYmVsc0xheWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbEdyYXBoaWNzID0gQXJyYXkuZnJvbShsYWJlbHNMYXllclJlZi5jdXJyZW50LmdyYXBoaWNzKVxuICAgICAgICAgICAgY29uc3QgdGV4dEdyYXBoaWNzID0gYWxsR3JhcGhpY3MuZmlsdGVyKGcgPT4gXG4gICAgICAgICAgICAgIGcuc3ltYm9sICYmIGcuc3ltYm9sLnR5cGUgPT09IFwidGV4dFwiICYmIFxuICAgICAgICAgICAgICAoIWcuYXR0cmlidXRlcz8udHlwZSB8fCBnLmF0dHJpYnV0ZXMudHlwZSAhPT0gXCJhcmVhTGFiZWxcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmICh0ZXh0R3JhcGhpY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIEZvdW5kIGFkZGl0aW9uYWwgdGV4dCBncmFwaGljcyB0byByZW1vdmU6XCIsIHRleHRHcmFwaGljcy5sZW5ndGgpXG4gICAgICAgICAgICAgIGxhYmVsc0xheWVyUmVmLmN1cnJlbnQucmVtb3ZlTWFueSh0ZXh0R3JhcGhpY3MpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIC8vIENhbmNlbGEgbyBkZXNlbmhvXG4gICAgICAgICAgc2tldGNoUmVmLmN1cnJlbnQ/LmNhbmNlbCgpXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIERlbGV0ZSBjb20gdGVjbGEgRGVsZXRlIG91IEJhY2tzcGFjZVxuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gXCJEZWxldGVcIiAmJiBldmVudC5rZXkgIT09IFwiQmFja3NwYWNlXCIpIHJldHVyblxuXG4gICAgICBjb25zdCBjdXJyZW50U2VsZWN0ZWRHcmFwaGljSWQgPSBzZWxlY3RlZEdyYXBoaWNJZFJlZi5jdXJyZW50XG4gICAgICBpZiAoIWN1cnJlbnRTZWxlY3RlZEdyYXBoaWNJZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIE5vIGdyYXBoaWMgc2VsZWN0ZWQsIGFib3J0aW5nIGRlbGV0ZVwiKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZ3JhcGhpY1RvUmVtb3ZlID0gZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50Py5ncmFwaGljcy5maW5kKFxuICAgICAgICAoZykgPT4gZ2V0R3JhcGhpY0lkKGcpID09PSBjdXJyZW50U2VsZWN0ZWRHcmFwaGljSWRcbiAgICAgIClcblxuICAgICAgaWYgKCFncmFwaGljVG9SZW1vdmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBTZWxlY3RlZCBncmFwaGljIG5vdCBmb3VuZCBpbiBncmFwaGljc0xheWVyLCBhYm9ydGluZyBkZWxldGVcIilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiW0xPR10gUmVtb3ZpbmcgZ3JhcGhpYyB3aXRoIGlkOlwiLCBjdXJyZW50U2VsZWN0ZWRHcmFwaGljSWQpXG5cbiAgICAgIGdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudD8ucmVtb3ZlKGdyYXBoaWNUb1JlbW92ZSlcbiAgICAgICAvLyBSZW1vdmUgbGFiZWxzIGFzc29jaWFkb3NcbiAgICAgICByZW1vdmVTZWdtZW50TGFiZWxzKGN1cnJlbnRTZWxlY3RlZEdyYXBoaWNJZClcblxuICAgICAgIC8vIFJlbW92ZSB2w6lydGljZXMgYXNzb2NpYWRvc1xuICAgICAgIHJlbW92ZVZlcnRleFBvaW50cyhjdXJyZW50U2VsZWN0ZWRHcmFwaGljSWQpXG5cbiAgICAgICAvLyBSZW1vdmUgbGFiZWwgZGUgw6FyZWEgYXNzb2NpYWRvXG4gICAgICAgcmVtb3ZlQXJlYUxhYmVsKGN1cnJlbnRTZWxlY3RlZEdyYXBoaWNJZClcblxuICAgICAgZ3JhcGhpY3NSZWYuY3VycmVudCA9IGdyYXBoaWNzUmVmLmN1cnJlbnQuZmlsdGVyKFxuICAgICAgICAoZykgPT4gZ2V0R3JhcGhpY0lkKGcpICE9PSBjdXJyZW50U2VsZWN0ZWRHcmFwaGljSWRcbiAgICAgIClcblxuICAgICAgc2V0TWVhc3VyZW1lbnRzKChwcmV2KSA9PiBwcmV2LmZpbHRlcigobSkgPT4gbS5pZCAhPT0gY3VycmVudFNlbGVjdGVkR3JhcGhpY0lkKSlcblxuICAgICAgc2V0U2VsZWN0ZWRHcmFwaGljSWQobnVsbClcblxuICAgICAgc2tldGNoUmVmLmN1cnJlbnQ/LmNhbmNlbCgpXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pXG4gICAgfVxuICB9LCBbamltdU1hcFZpZXcsIGxpdmVNZWFzdXJlbWVudF0pXG5cbiAgY29uc3QgaGFuZGxlTmV3TWVhc3VyZW1lbnQgPSAoKSA9PiB7XG4gICAgaWYgKCFza2V0Y2hSZWYuY3VycmVudCkgcmV0dXJuXG4gICAgY29uc29sZS5sb2coXCJbTE9HXSBoYW5kbGVOZXdNZWFzdXJlbWVudCBjYWxsZWRcIilcbiAgICBcbiAgICAvLyBNb3N0cmFyIGluZm9ybWHDp8O1ZXMgZGUgc25hcHBpbmcgYXRpdm9cbiAgICBpZiAoc2tldGNoUmVmLmN1cnJlbnQuc25hcHBpbmdPcHRpb25zKSB7XG4gICAgICBjb25zdCBzbmFwcGluZyA9IHNrZXRjaFJlZi5jdXJyZW50LnNuYXBwaW5nT3B0aW9uc1xuICAgICAgY29uc29sZS5sb2coXCJbTE9HXSBDb25maWd1cmHDp8O1ZXMgZGUgc25hcHBpbmcgYXRpdmFzOlwiKVxuICAgICAgY29uc29sZS5sb2coXCIgIC0gU25hcHBpbmcgaGFiaWxpdGFkbzpcIiwgc25hcHBpbmcuZW5hYmxlZClcbiAgICAgIGNvbnNvbGUubG9nKFwiICAtIFNlbGYtc25hcHBpbmcgKMOibmd1bG9zIDkwwrApOlwiLCBzbmFwcGluZy5zZWxmRW5hYmxlZClcbiAgICAgIGNvbnNvbGUubG9nKFwiICAtIEZlYXR1cmUtc25hcHBpbmcgKGNhbWFkYXMpOlwiLCBzbmFwcGluZy5mZWF0dXJlRW5hYmxlZClcbiAgICAgIGNvbnNvbGUubG9nKFwiICAtIERpc3TDom5jaWEgZGUgdG9sZXLDom5jaWE6XCIsIHNuYXBwaW5nLmRpc3RhbmNlLCBcInBpeGVsc1wiKVxuICAgICAgY29uc29sZS5sb2coXCIgIC0gRm9udGVzIGRlIHNuYXBwaW5nOlwiLCBzbmFwcGluZy5mZWF0dXJlU291cmNlcz8ubGVuZ3RoIHx8IDAsIFwiY2FtYWRhc1wiKVxuICAgIH1cbiAgICBcbiAgICBza2V0Y2hSZWYuY3VycmVudC5jYW5jZWwoKVxuICAgIHNldFNlbGVjdGVkR3JhcGhpY0lkKG51bGwpXG4gICAgc2V0TGl2ZU1lYXN1cmVtZW50KG51bGwpXG4gICAgc2V0SXNOZWFyU3RhcnRQb2ludChmYWxzZSlcbiAgICBzZXRTdGFydFBvaW50KG51bGwpXG4gICAgc2V0SXNSaWdodEFuZ2xlKGZhbHNlKVxuICAgIHNldFJpZ2h0QW5nbGVTdWdnZXN0aW9uKG51bGwpXG4gICAgcmVtb3ZlUmlnaHRBbmdsZUluZGljYXRvcigpXG4gICAgXG4gICAgXG4gICAgLy8gUmVtb3ZlIHRleHRvIGRpbsOibWljbyBzZSBleGlzdGlyXG4gICAgaWYgKGxpdmVUZXh0R3JhcGhpY1JlZi5jdXJyZW50KSB7XG4gICAgICBsYWJlbHNMYXllclJlZi5jdXJyZW50Py5yZW1vdmUobGl2ZVRleHRHcmFwaGljUmVmLmN1cnJlbnQpXG4gICAgICBsaXZlVGV4dEdyYXBoaWNSZWYuY3VycmVudCA9IG51bGxcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3JlYXRlVHlwZSA9IGFjdGl2ZUJ1dHRvbiA9PT0gXCJtZWFzdXJlRGlzdGFuY2VcIiA/IFwicG9seWxpbmVcIiA6IFwicG9seWdvblwiXG4gICAgc2tldGNoUmVmLmN1cnJlbnQuY3JlYXRlKGNyZWF0ZVR5cGUpXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc3RhcnRlciBqaW11LXdpZGdldCBkLWZsZXggZmxleC1jb2x1bW5cIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgIDxNZWFzdXJlVG9vbHNcbiAgICAgICAgIGFjdGl2ZUJ1dHRvbj17YWN0aXZlQnV0dG9ufVxuICAgICAgICAgYWN0aXZlVG9vbD17XG4gICAgICAgICAgIGFjdGl2ZUJ1dHRvbiA9PT0gXCJtZWFzdXJlRGlzdGFuY2VcIlxuICAgICAgICAgICAgID8gXCJkaXN0YW5jZVwiXG4gICAgICAgICAgICAgOiBhY3RpdmVCdXR0b24gPT09IFwibWVhc3VyZUFyZWFcIlxuICAgICAgICAgICAgICAgPyBcImFyZWFcIlxuICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICB9XG4gICAgICAgICBhbmd1bGFyU25hcD17cHJvcHMuY29uZmlnPy5hbmd1bGFyU25hcH1cbiAgICAgICAgIG9uU2VsZWN0VG9vbD17KGJ0bikgPT4ge1xuICAgICAgICAgICBjb25zb2xlLmxvZyhcIltMT0ddIFRvb2wgc2VsZWN0ZWQ6XCIsIGJ0bi5uYW1lKVxuICAgICAgICAgICBcbiAgICAgICAgICAgLy8gU2UgY2xpY2FyIG5vIG1lc21vIGJvdMOjbyBhdGl2bywgZGVzYXRpdmEgYSBmZXJyYW1lbnRhXG4gICAgICAgICAgIGlmIChhY3RpdmVCdXR0b24gPT09IGJ0bi5uYW1lKSB7XG4gICAgICAgICAgICAgc2V0QWN0aXZlQnV0dG9uKFwiXCIpXG4gICAgICAgICAgICAgaWYgKHNrZXRjaFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICBza2V0Y2hSZWYuY3VycmVudC5jYW5jZWwoKVxuICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRHcmFwaGljSWQobnVsbClcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgIHNldEFjdGl2ZUJ1dHRvbihidG4ubmFtZSlcbiAgICAgICAgICAgLy8gQXRpdmEgYXV0b21hdGljYW1lbnRlIGEgZmVycmFtZW50YSBxdWFuZG8gc2VsZWNpb25hZGFcbiAgICAgICAgICAgaWYgKHNrZXRjaFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgc2tldGNoUmVmLmN1cnJlbnQuY2FuY2VsKClcbiAgICAgICAgICAgICBzZXRTZWxlY3RlZEdyYXBoaWNJZChudWxsKVxuICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVR5cGUgPSBidG4ubmFtZSA9PT0gXCJtZWFzdXJlRGlzdGFuY2VcIiA/IFwicG9seWxpbmVcIiA6IFwicG9seWdvblwiXG4gICAgICAgICAgICAgc2tldGNoUmVmLmN1cnJlbnQuY3JlYXRlKGNyZWF0ZVR5cGUpXG4gICAgICAgICAgIH1cbiAgICAgICAgIH19XG4gICAgICAgICBvbkNsZWFyPXtoYW5kbGVDbGVhcn1cbiAgICAgICAvPlxuXG5cbiAgICAgIHtsaXZlTWVhc3VyZW1lbnQgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDEycHhcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKChpc05lYXJTdGFydFBvaW50IHx8IGlzUmlnaHRBbmdsZSkgJiYgYWN0aXZlQnV0dG9uID09PSBcIm1lYXN1cmVEaXN0YW5jZVwiKSA/IFwiIzI4YTc0NVwiIDogXCIjMDA3OWMxXCIsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgekluZGV4OiAxMDAwLFxuICAgICAgICAgICAgYm9yZGVyOiAoKGlzTmVhclN0YXJ0UG9pbnQgfHwgaXNSaWdodEFuZ2xlKSAmJiBhY3RpdmVCdXR0b24gPT09IFwibWVhc3VyZURpc3RhbmNlXCIpID8gXCIycHggc29saWQgIzIwYzk5N1wiIDogXCJub25lXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICgoaXNOZWFyU3RhcnRQb2ludCB8fCBpc1JpZ2h0QW5nbGUpICYmIGFjdGl2ZUJ1dHRvbiA9PT0gXCJtZWFzdXJlRGlzdGFuY2VcIikgPyBcIjRweFwiIDogXCIwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2FjdGl2ZUJ1dHRvbiA9PT0gXCJtZWFzdXJlRGlzdGFuY2VcIlxuICAgICAgICAgICAgPyBgRGlzdMOibmNpYSBhdHVhbDogJHtsaXZlTWVhc3VyZW1lbnR9YFxuICAgICAgICAgICAgOiBgw4FyZWEgYXR1YWw6ICR7bGl2ZU1lYXN1cmVtZW50fWB9XG4gICAgICAgICAge2lzTmVhclN0YXJ0UG9pbnQgJiYgYWN0aXZlQnV0dG9uID09PSBcIm1lYXN1cmVEaXN0YW5jZVwiICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBtYXJnaW5Ub3A6IFwiMnB4XCIsIG9wYWNpdHk6IDAuOSB9fT5cbiAgICAgICAgICAgICAg4pyoIFByw7N4aW1vIGFvIGluw61jaW8gLSBkdXBsbyBjbGlxdWUgcGFyYSBmZWNoYXIhXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtpc1JpZ2h0QW5nbGUgJiYgYWN0aXZlQnV0dG9uID09PSBcIm1lYXN1cmVEaXN0YW5jZVwiICYmIHJpZ2h0QW5nbGVTdWdnZXN0aW9uICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBtYXJnaW5Ub3A6IFwiMnB4XCIsIG9wYWNpdHk6IDAuOSwgY29sb3I6IFwiI2ZmYTUwMFwiIH19PlxuICAgICAgICAgICAgICDwn5OQIHtyaWdodEFuZ2xlU3VnZ2VzdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgeyhhY3RpdmVCdXR0b24gPT09IFwibWVhc3VyZURpc3RhbmNlXCIgfHwgYWN0aXZlQnV0dG9uID09PSBcIm1lYXN1cmVBcmVhXCIpICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIixcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICB6SW5kZXg6IDk5OSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV3TWVhc3VyZW1lbnR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDc5YzFcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOb3ZhIE1lZGnDp8Ojb1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5vdmEgTWVkacOnw6NvXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMjAwcHhcIixcbiAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiLFxuICAgICAgICAgICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTJweFwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgIHpJbmRleDogOTk4LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVhc3VyZW1lbnRzLmZpbHRlcihtID0+XG4gICAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbiA9PT0gXCJtZWFzdXJlRGlzdGFuY2VcIlxuICAgICAgICAgICAgICAgID8gbS5hcmVhID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA6IGFjdGl2ZUJ1dHRvbiA9PT0gXCJtZWFzdXJlQXJlYVwiXG4gICAgICAgICAgICAgICAgICA/IG0uYXJlYSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICApLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWRpc2FibGVkXCI+TmVuaHVtYSBtZWRpw6fDo28gcmVnaXN0cmFkYS48L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIG1lYXN1cmVtZW50c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIobSA9PlxuICAgICAgICAgICAgICAgICAgYWN0aXZlQnV0dG9uID09PSBcIm1lYXN1cmVEaXN0YW5jZVwiXG4gICAgICAgICAgICAgICAgICAgID8gbS5hcmVhID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiBhY3RpdmVCdXR0b24gPT09IFwibWVhc3VyZUFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgID8gbS5hcmVhICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5tYXAoKG0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttLmlkfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntgTWVkacOnw6NvICR7U3RyaW5nKGkgKyAxKS5wYWRTdGFydCgzLCBcIjBcIil9YH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEycHhcIiwgbWFyZ2luVG9wOiBcIjRweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHttLnNlZ21lbnRzLm1hcCgoc2VnbWVudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NlZ21lbnQuc2VnbWVudE51bWJlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVCdXR0b24gPT09IFwibWVhc3VyZURpc3RhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBEaXN0w6JuY2lhIHNlZ21lbnRvICR7c2VnbWVudC5zZWdtZW50TnVtYmVyfTogJHtmb3JtYXREaXN0YW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgUGVyw61tZXRybyBzZWdtZW50byAke3NlZ21lbnQuc2VnbWVudE51bWJlcn06ICR7Zm9ybWF0RGlzdGFuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVCdXR0b24gPT09IFwibWVhc3VyZUFyZWFcIiAmJiBtLmFyZWEgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+w4FyZWEgdG90YWw6PC9zdHJvbmc+IHtmb3JtYXRBcmVhKG0uYXJlYSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UGVyw61tZXRybyB0b3RhbDo8L3N0cm9uZz4ge2Zvcm1hdERpc3RhbmNlKG0ucGVyaW1ldGVyID8/IDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUJ1dHRvbiA9PT0gXCJtZWFzdXJlRGlzdGFuY2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRpc3TDom5jaWEgdG90YWw6PC9zdHJvbmc+IHtmb3JtYXREaXN0YW5jZShtLnRvdGFsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxuICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXtzZXRKaW11TWFwVmlld31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG5cblxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==