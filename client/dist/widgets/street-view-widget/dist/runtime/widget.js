System.register(["jimu-core","jimu-arcgis","esri/geometry/Point","esri/Graphic","esri/layers/GraphicsLayer","esri/symbols/PictureMarkerSymbol","esri/geometry/Polygon","esri/symbols/SimpleFillSymbol"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleFillSymbol__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleFillSymbol__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleFillSymbol__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/street-view-widget/src/config.ts":
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/street-view-widget/src/config.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGoogleMapsApiKey: () => (/* binding */ getGoogleMapsApiKey)
/* harmony export */ });
// Chave de API do Google Maps - CONFIGURE AQUI SUA CHAVE
const GOOGLE_MAPS_API_KEY = 'AIzaSyB9qood4sXsH4ahoYe8DKQiOQye1nXUrKs';
// Função para obter a chave de API
const getGoogleMapsApiKey = () => {
    return GOOGLE_MAPS_API_KEY;
};


/***/ }),

/***/ "./your-extensions/widgets/street-view-widget/src/runtime/Pegmankillfeed.png":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/street-view-widget/src/runtime/Pegmankillfeed.png ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "esri/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ }),

/***/ "esri/geometry/Point":
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ }),

/***/ "esri/geometry/Polygon":
/*!****************************************!*\
  !*** external "esri/geometry/Polygon" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__;

/***/ }),

/***/ "esri/layers/GraphicsLayer":
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/symbols/PictureMarkerSymbol":
/*!***************************************************!*\
  !*** external "esri/symbols/PictureMarkerSymbol" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__;

/***/ }),

/***/ "esri/symbols/SimpleFillSymbol":
/*!************************************************!*\
  !*** external "esri/symbols/SimpleFillSymbol" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleFillSymbol__;

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
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/street-view-widget/src/runtime/widget.tsx ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/street-view-widget/src/config.ts");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_symbols_PictureMarkerSymbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/symbols/PictureMarkerSymbol */ "esri/symbols/PictureMarkerSymbol");
/* harmony import */ var esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/geometry/Polygon */ "esri/geometry/Polygon");
/* harmony import */ var esri_symbols_SimpleFillSymbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/symbols/SimpleFillSymbol */ "esri/symbols/SimpleFillSymbol");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// Importações do ArcGIS Maps SDK for JavaScript






// Desestruturando hooks do React para uso
const { useState, useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
// Importa a imagem de pegman fornecida pelo usuário (webpack resolve para URL)
// Usamos require para evitar necessidade de tipos de imagem.
const pegmanUrl = __webpack_require__(/*! ./Pegmankillfeed.png */ "./your-extensions/widgets/street-view-widget/src/runtime/Pegmankillfeed.png");
// Habilite para usar a API JS do Street View (panorama) com atualização em tempo real
const ENABLE_STREETVIEW_API = true;
// Interface removida pois não estava sendo utilizada
const Widget = (props) => {
    // Referências para objetos do ArcGIS que não devem acionar re-renderizações
    const graphicsLayerRef = useRef(null);
    // Gerenciamento de estado do componente
    const [jimuMapView, setJimuMapView] = useState(null);
    const [clickedCoordinates, setClickedCoordinates] = useState(null);
    const [embedUrl, setEmbedUrl] = useState(null);
    // Suporte opcional ao StreetViewPanorama
    const streetViewContainerRef = useRef(null);
    const streetViewPanoramaRef = useRef(null);
    const [lastHeading, setLastHeading] = useState(0);
    // Função para gerar URL do Street View embed
    const generateEmbedUrl = (lat, lng) => {
        const apiKey = (0,_config__WEBPACK_IMPORTED_MODULE_2__.getGoogleMapsApiKey)();
        const baseUrl = 'https://www.google.com/maps/embed/v1/streetview';
        const params = new URLSearchParams({
            key: apiKey,
            location: `${lat},${lng}`,
            heading: '0',
            pitch: '0',
            fov: '90'
        });
        return `${baseUrl}?${params.toString()}`;
    };
    // Carrega Google Maps JS API sob demanda (somente se habilitado)
    const loadGoogleMapsApi = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!ENABLE_STREETVIEW_API)
            return;
        const apiKey = (0,_config__WEBPACK_IMPORTED_MODULE_2__.getGoogleMapsApiKey)();
        if (!apiKey || apiKey === 'SUA_CHAVE_DE_API_AQUI')
            return;
        if ((_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps)
            return;
        yield new Promise((resolve, reject) => {
            const existing = document.querySelector('script[data-gmaps-panorama]');
            if (existing) {
                existing.addEventListener('load', () => { resolve(); });
                existing.addEventListener('error', () => { reject(new Error('Falha ao carregar Google Maps API')); });
                return;
            }
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
            script.async = true;
            script.defer = true;
            script.setAttribute('data-gmaps-panorama', 'true');
            script.onload = () => {
                try {
                    console.info('[SV] Google JS API carregada. key_suffix=', apiKey.slice(-6));
                }
                catch ( /* noop */_a) { /* noop */ }
                resolve();
            };
            script.onerror = () => {
                try {
                    console.error('[SV] Erro ao carregar Google JS API. key_suffix=', apiKey.slice(-6));
                }
                catch ( /* noop */_a) { /* noop */ }
                reject(new Error('Falha ao carregar Google Maps API'));
            };
            document.head.appendChild(script);
        });
    });
    // Hook para inicializar a camada de gráficos no mapa ArcGIS
    useEffect(() => {
        if (jimuMapView && !graphicsLayerRef.current) {
            const layer = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_5__["default"]({ id: `streetview_marker_layer_${props.id}` });
            graphicsLayerRef.current = layer;
            jimuMapView.view.map.add(layer);
        }
    }, [jimuMapView, props.id]);
    // Calcula um ponto destino dado lat/lng, azimute (graus) e distância (m)
    const computeDestination = (lat, lng, bearingDeg, distanceMeters) => {
        const R = 6371000;
        const brng = (bearingDeg * Math.PI) / 180;
        const lat1 = (lat * Math.PI) / 180;
        const lon1 = (lng * Math.PI) / 180;
        const lat2 = Math.asin(Math.sin(lat1) * Math.cos(distanceMeters / R) + Math.cos(lat1) * Math.sin(distanceMeters / R) * Math.cos(brng));
        const lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(distanceMeters / R) * Math.cos(lat1), Math.cos(distanceMeters / R) - Math.sin(lat1) * Math.sin(lat2));
        return { lat: (lat2 * 180) / Math.PI, lng: (lon2 * 180) / Math.PI };
    };
    // Gera pontos da "fatia" do farol (setor) a partir do centro e heading
    const buildSectorRing = (centerLat, centerLng, headingDeg, fovDeg, radiusMeters) => {
        const start = headingDeg - fovDeg / 2;
        const end = headingDeg + fovDeg / 2;
        const step = Math.max(5, Math.floor(fovDeg / 12)); // ~12 segmentos
        const ring = [];
        // começa no centro
        ring.push([centerLng, centerLat]);
        for (let a = start; a <= end; a += step) {
            const dest = computeDestination(centerLat, centerLng, a, radiusMeters);
            ring.push([dest.lng, dest.lat]);
        }
        // garante o último ponto exatamente em 'end'
        const destEnd = computeDestination(centerLat, centerLng, end, radiusMeters);
        ring.push([destEnd.lng, destEnd.lat]);
        // fecha no centro
        ring.push([centerLng, centerLat]);
        return ring;
    };
    // Função para atualizar o marcador no mapa ArcGIS (e o farol)
    const updateArcGISMarker = (location, heading) => {
        if (!graphicsLayerRef.current)
            return;
        // Remove todos os marcadores existentes
        graphicsLayerRef.current.removeAll();
        // Cria a geometria do ponto
        const point = new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_3__["default"]({
            longitude: location.lng,
            latitude: location.lat
        });
        // Cria o símbolo do marcador
        const symbol = new esri_symbols_PictureMarkerSymbol__WEBPACK_IMPORTED_MODULE_6__["default"]({
            url: pegmanUrl,
            width: '18px', // mais estreito para manter proporção vertical
            height: '28px', // levemente mais alto para parecer humanoide
            yoffset: '14px' // base do boneco aponta para o ponto
        });
        // Cria o gráfico e o adiciona à camada
        const graphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_4__["default"]({
            geometry: point,
            symbol: symbol
        });
        graphicsLayerRef.current.add(graphic);
        // Se tivermos heading (modo API), desenha um setor indicando direção
        const effectiveHeading = typeof heading === 'number' ? heading : lastHeading;
        const beamLengthMeters = 45;
        const fovDeg = 60;
        const ring = buildSectorRing(location.lat, location.lng, effectiveHeading, fovDeg, beamLengthMeters);
        const sector = new esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_7__["default"]({ rings: [ring], spatialReference: { wkid: 4326 } });
        const fillSymbol = new esri_symbols_SimpleFillSymbol__WEBPACK_IMPORTED_MODULE_8__["default"]({
            color: [0, 0, 205, 0.5],
            outline: { color: [0, 0, 255, 0.9], width: 1.5 }
        });
        const sectorGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_4__["default"]({ geometry: sector, symbol: fillSymbol });
        graphicsLayerRef.current.add(sectorGraphic);
    };
    // Hook para configurar a interação do mapa
    useEffect(() => {
        // Prossiga apenas se a visualização do mapa ArcGIS estiver pronta
        if (!jimuMapView) {
            return;
        }
        // Adiciona um ouvinte de evento de clique ao mapa ArcGIS
        const clickHandler = jimuMapView.view.on('click', (event) => {
            const { latitude, longitude } = event.mapPoint;
            // Caminho 1: iframe (padrão seguro)
            if (!ENABLE_STREETVIEW_API) {
                try {
                    console.info('[SV] Modo iframe. Atualizando embed para', latitude, longitude);
                }
                catch ( /* noop */_a) { /* noop */ }
                setClickedCoordinates({ lat: latitude, lng: longitude });
                const url = generateEmbedUrl(latitude, longitude);
                setEmbedUrl(url);
                updateArcGISMarker({ lat: latitude, lng: longitude });
                return;
            }
            // Caminho 2: API JS do Street View (em tempo real)
            ;
            (() => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b, _c, _d;
                yield loadGoogleMapsApi();
                if (!((_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) || !streetViewContainerRef.current)
                    return;
                // Cria panorama uma única vez
                if (!streetViewPanoramaRef.current) {
                    const pano = new google.maps.StreetViewPanorama(streetViewContainerRef.current, {
                        position: { lat: latitude, lng: longitude },
                        pov: { heading: 0, pitch: 0 },
                        visible: true
                    });
                    // Listener para mover o marcador conforme o usuário navega
                    pano.addListener('position_changed', () => {
                        var _a, _b;
                        const pos = pano.getPosition();
                        if (pos) {
                            try {
                                console.debug('[SV] position_changed ->', pos.lat(), pos.lng());
                            }
                            catch ( /* noop */_c) { /* noop */ }
                            updateArcGISMarker({ lat: pos.lat(), lng: pos.lng() }, (_b = (_a = pano.getPov()) === null || _a === void 0 ? void 0 : _a.heading) !== null && _b !== void 0 ? _b : 0);
                        }
                    });
                    // Listener para atualizar feixe quando muda o heading
                    pano.addListener('pov_changed', () => {
                        var _a, _b;
                        const pov = pano.getPov();
                        setLastHeading((_a = pov === null || pov === void 0 ? void 0 : pov.heading) !== null && _a !== void 0 ? _a : 0);
                        const pos = pano.getPosition();
                        if (pos) {
                            updateArcGISMarker({ lat: pos.lat(), lng: pos.lng() }, (_b = pov === null || pov === void 0 ? void 0 : pov.heading) !== null && _b !== void 0 ? _b : 0);
                        }
                    });
                    streetViewPanoramaRef.current = pano;
                }
                else {
                    streetViewPanoramaRef.current.setPosition({ lat: latitude, lng: longitude });
                    streetViewPanoramaRef.current.setVisible(true);
                }
                // Sincroniza marcador inicialmente
                try {
                    console.info('[SV] Modo API. Panorama setPosition', latitude, longitude);
                }
                catch ( /* noop */_e) { /* noop */ }
                updateArcGISMarker({ lat: latitude, lng: longitude }, (_d = (_c = (_b = streetViewPanoramaRef.current) === null || _b === void 0 ? void 0 : _b.getPov()) === null || _c === void 0 ? void 0 : _c.heading) !== null && _d !== void 0 ? _d : 0);
            }))();
        });
        // Função de limpeza para remover os ouvintes de eventos quando o componente for desmontado
        return () => {
            if (clickHandler)
                clickHandler.remove();
        };
    }, [jimuMapView]); // Re-executa este efeito se a visualização do mapa mudar
    // Função para ser chamada quando a visualização do mapa ArcGIS se torna ativa
    const onActiveViewChange = (jmv) => {
        setJimuMapView(jmv);
    };
    // Renderização do componente
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-street-view jimu-widget" }, !props.useMapWidgetIds || props.useMapWidgetIds.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "Por favor, configure um widget de mapa no painel de configura\u00E7\u00F5es.")) : !(0,_config__WEBPACK_IMPORTED_MODULE_2__.getGoogleMapsApiKey)() || (0,_config__WEBPACK_IMPORTED_MODULE_2__.getGoogleMapsApiKey)() === 'SUA_CHAVE_DE_API_AQUI' ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "\u26A0\uFE0F Chave de API n\u00E3o configurada. Edite o arquivo config.ts e configure sua chave de API do Google Maps.")) : (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0] || '', onActiveViewChange: onActiveViewChange }),
        !ENABLE_STREETVIEW_API && embedUrl ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("iframe", { key: `streetview-${clickedCoordinates === null || clickedCoordinates === void 0 ? void 0 : clickedCoordinates.lat}-${clickedCoordinates === null || clickedCoordinates === void 0 ? void 0 : clickedCoordinates.lng}`, src: embedUrl, style: {
                border: 'none',
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                display: 'block',
                overflow: 'hidden',
                zIndex: 1
            }, allowFullScreen: true, loading: "eager", referrerPolicy: "no-referrer-when-downgrade", title: "Google Street View" })) : ENABLE_STREETVIEW_API ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { ref: streetViewContainerRef, style: {
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                zIndex: 1
            } })) : (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "placeholder" }, "Clique no mapa para ver o Street View."))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zdHJlZXQtdmlldy13aWRnZXQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseURBQXlEO0FBQ3pELE1BQU0sbUJBQW1CLEdBQUcseUNBQXlDO0FBUXJFLG1DQUFtQztBQUM1QixNQUFNLG1CQUFtQixHQUFHLEdBQVcsRUFBRTtJQUM5QyxPQUFPLG1CQUFtQjtBQUM1QixDQUFDOzs7Ozs7Ozs7OztBQ2RELGlDQUFpQzs7Ozs7Ozs7Ozs7QUNBakM7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRztBQUNjO0FBQ047QUFFOUQsZ0RBQWdEO0FBQ1Q7QUFDTDtBQUNtQjtBQUNhO0FBQ3ZCO0FBQ2lCO0FBRTVELDBDQUEwQztBQUMxQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyw0Q0FBSztB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LEdBQUcsT0FBTztRQUNqQixNQUFNLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRztRQUN6QyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRztRQUNsQyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRztRQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RJLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUosT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFO0lBQ3JFLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsTUFBTSxlQUFl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Y2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3RyZWV0LXZpZXctd2lkZ2V0L3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3N0cmVldC12aWV3LXdpZGdldC9zcmMvcnVudGltZS9QZWdtYW5raWxsZmVlZC5wbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9seWdvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zeW1ib2xzL1BpY3R1cmVNYXJrZXJTeW1ib2xcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc3ltYm9scy9TaW1wbGVGaWxsU3ltYm9sXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zdHJlZXQtdmlldy13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEltbXV0YWJsZU9iamVjdCB9IGZyb20gJ3NlYW1sZXNzLWltbXV0YWJsZSdcclxuXHJcbi8vIENoYXZlIGRlIEFQSSBkbyBHb29nbGUgTWFwcyAtIENPTkZJR1VSRSBBUVVJIFNVQSBDSEFWRVxyXG5jb25zdCBHT09HTEVfTUFQU19BUElfS0VZID0gJ0FJemFTeUI5cW9vZDRzWHNINGFob1llOERLUWlPUXllMW5YVXJLcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBnb29nbGVBcGlLZXk6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG4vLyBGdW7Dp8OjbyBwYXJhIG9idGVyIGEgY2hhdmUgZGUgQVBJXHJcbmV4cG9ydCBjb25zdCBnZXRHb29nbGVNYXBzQXBpS2V5ID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgcmV0dXJuIEdPT0dMRV9NQVBTX0FQSV9LRVlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJSUFBQUVzQ0FNQUFBQTR2SnZsQUFBQUlHTklVazBBQUhvbUFBQ0FoQUFBK2dBQUFJRG9BQUIxTUFBQTZtQUFBRHFZQUFBWGNKeTZVVHdBQUFMM1VFeFVSUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFLQXk0aUJFSXdCbHBEQ0dKS0NYVllDNFZrRFVrM0J6TW1CUllRQWlRYkExRThDSXRvRHIyUEV0eW5GZTIwRnZ1L0dQL0xHZi9PR3YvTUdmM0FHTVdWRTVoeUR4MFdCMmhQQ3JXSUV1aXhGdi9JR2YvSkdQL0hHZi9ER1B6QUdQUzVGMzVnRERvckJheUJFS0Y2RC9tOEdQdStGZnUrRS91OUVQdThEZi9GR09LckZmdkNKUHpHTnZ6TlRmM1JYZjNZY3YzVWQvM1BWUHZBSEFvR0F2ektRZjNWYXY3WmlQN2lwdi9rdC8vbXYvL293LzdmanYvbXV2L2RtZnkvRnBCc0R2M0NHUDdlbi96RUsvV3VHdjNFRithTEgrT0ZJUEtuRzg5VUtPV0lJQVFDQU5kbUpjNVFLUC9pc2Q5NUl0QldKK3VYSHY3RkY4OVNLTkZaSi9DaUhOV2dGUC9IRitxVUh0aHBKUGk0R2UyZEhlRi9JZE5lSnRCWUovN0dGdmF5R3RSaEp0cHVJL2UxR2RaakplaVFIODJjRTg5VktOdHhJLzNaZ05OYUtOMTFJL09yRzIxUkN5OHBJVTFCTVhCalQ0TjBYYUNPZGJ1a2lNKzNrK2ZRcGxwUlJOL0VuZm5ZclAvcnZmL3l4UC91d2VuWXNmUzhMdjdoa3Y3cXNmZk5vS2gwVWtJY0REZ1lDb0UzR1ZVa0VFb29GeTRWQ3ZUQWtldW1lT0tQWDlkdlE5VmpNOTFlS05kYktLSkVIaGtLQlVrZkRaUS9HK0JmS3VKZ0t0MWxNYzFoTWFsS0lvby9IdnU3Q1BDMWhPV1daZUovVGRacE85QldJODlTSHRwY0tNQlNJM2t6RnJCTUlORllKZE5aSjEwb0VpTVBCdnE5STlOZkxzNVBIZXFjWnRwM1M5QlVJTTFYSm1VcUVybE9Jc2hWSmQyRFc5eUFXUHE3RXY3MTIvNzM0L1hYeTg1T0dmLzg5Ly8vLy9ubzRPS1ZkczFMRmVPYWUvUFN4UC8rL2QrSlp0MkZYODlRRy96MDhQREh0dTdCcisyOXFmZmQwK211bHVlb2pweENIZjdydGY3b3F2N3kwR3BOQy8vNzc0UlZFSEV3RmY2K0dQeTlEYStUUjBwT1Y1Y0FBQUFtZEZKT1V3QUtKMUZ0bjhmWi9PR25mVFFCdFBLOU94RDN6NVlGV0s1bUd5MUpkZXVOSUlaQ1hoWjRKaTVHZkFBQUFBRmlTMGRFNFY4SXo2WUFBQUFIZEVsTlJRZnBDaDBTR1M4Nkw1UldBQUFBQVc5eVRsUUJ6NkozbWdBQUFDVjBSVmgwWkdGMFpUcGpjbVZoZEdVQU1qQXlOUzB4TUMweU9WUXhPRG95TlRvME55c3dNRG93TUJPUlJJY0FBQUFsZEVWWWRHUmhkR1U2Ylc5a2FXWjVBREl3TWpVdE1UQXRNamxVTVRnNk1qVTZORGNyTURBNk1EQml6UHc3QUFBQUtIUkZXSFJrWVhSbE9uUnBiV1Z6ZEdGdGNBQXlNREkxTFRFd0xUSTVWREU0T2pJMU9qUTNLekF3T2pBd05kbmQ1QUFBQUZwbFdFbG1UVTBBS2dBQUFBZ0FCUUVTQUFNQUFBQUJBQUVBQUFFYUFBVUFBQUFCQUFBQVNnRWJBQVVBQUFBQkFBQUFVZ0VvQUFNQUFBQUJBQUlBQUFJVEFBTUFBQUFCQUFFQUFBQUFBQUFBQUFCSUFBQUFBUUFBQUVnQUFBQUJIMUwzTkFBQUdlVkpSRUZVZU5ydG5YbFlWRmVXd0ZFUnhBWFJ1T0dDb2xnSTdvcStBdHlncU1LbG9FcEJvNEpJSVdxcEJaWnNwVlVvQ29LQ1dsb2FrNWhOTk5OeG9yYWFXR1VNbVlsWkZJeVlSQk1UWTlKSkpPbU9IVHVkcFdkNmVucDYvcGkzM2Z2MlYrOFdEK3o1dnB5L2d1RzkrK1BjYzg4OTk5eno3ZzBLUXBZdVhic0ZkdzhKN2FFaEpTeWtaNjl1dmJ1Z3Z5WlE2ZE03T0R5MHI0WXZQY0lpZXZYcjN4a0FYWHVGUEthUmxBRUQrdzNxMlBZSERSNGkwejRsRVpFZHFJb3VrUVA4dFU5S2FLK2hIVVRRVFJrQUNSSGNFYlk1YkloaUFFSkNocXNOMEdkRUZCSUJQa0JHcW1zU284SkZHb2tkRnhjL2ZzTEVDZVBqSjAyZUlqWTYrcWxJMEMyTS8vcXAwNlluekppSmFST1R0RW1KU2Nrelo4eWFIVCtPLzB0OWcxVWpDT1lOeERsejU2V2s2blJwZXIwQkl5VlpuNmJUNmRJVDVrL2xRUXpzb3c1Qk5QZTFDMmFucEdsQjR5d3g2TFhhOUlYVHVMODhSQTJENkRPU0M3REltS2hQeHNURm9FL1NKM0FoSXRyUDBHY2d4d1JtRzVQMG9NR016RXlUMld3MlpiQXBrbldMNXkxZ0Q0ejJNM0IwTUhjSkJNQmJ4N0t5bHk1N2ZQbUtsWmtjVlNScjB5Zm1zQjRLYnlkREw3WVZMdFNsMGUyYk03TnlWK1d0enMrM1dBb3NhN0s0REpnK2FkWmsxbk05MnpWeERXYTlLVzVHVWpJTnNESjMrZXI4QWt0aFlUNGhCYXRNZkp2UXpoelBlaks2SFFTOVdWRkJmTHFXQnNoYXRyYlFZcUdhSjhTeWR0MDZ2bUdtNmVlejdHRnd3QVJkUXBqWGpNZklUc2d3WjYxYWJiSGtzOFd5TmtPQWdPbTE2NW1IbzdvR2lzQXl4ZkZXa3NDVXVYUUREMENzSXdpeHNoa2lBalNINFQxWUJJdUoxNW8zNW5FQUN2RU9zUlFJekZHRUlUQlgzWVVKRHlhUnZaQmh6bDFkd0dyZlVwQy9lbTJlWUZEaTFnZ1lKclN6SzBZd0RtbEpLdWtKbHVWYm1QWUxWK2N0eTkySTRlNUpRTENKaHRBYkp6RWpNd0NDb1RCQXlFa2d4a0pteGlvNENnb3QrWGtyc2pMTXBzeDFJajFnS3lxMldzbi8waTJCODFhUDBlMnh4Zm1KK0IrVm1ibThBQkJZOHBkblo1aEZteWNSTnR1MzJDZzlhT2VWUUl0RW5qUkhRU1VzU01lZGNvWUo2cURRa3BkdDRrNE12STR3bHBZVlVRekpPdWlpZWlCSGNyMjQzV0JlUWJ2Q2ZFdjVzZ3dUSmljR3JLTE1zWFViNWFLV3pJRnpCU0pCZnhnbnhhZmlidG1jWFU1YllzSGFiSE1HSmkrMkxVNkhxOUpHNGlSTkJ5OTZyRGNhd2hqd1lPeDJmRFJrWm0yZ0NTeDVXV2JNbit5b2NycnNPM2VSSnJsNEpyUkl4S2tDaHF2anRYaW5tcFlYQUlLVkpyOEVtSzNhNVhBNWF5ZzFNQTRxREduV0hnWG1wNUpadUJMTXVmbjBuSmkzTXRNL0FUNGtkanRjdFk3cU9sSU5LZEFhdXFFZ1JFSy9hTEJpbVN2WFV0MWcyWkNsUUFlNFc5eXoxK0Z5T2V1TjVLaGdmR1QzZ1BwaGRpSXhHaWlDd3ZKcy8zWkFLcjloSDQ3Z3N1OG5SMFhxQWVBYlFoRldlVEZnUE1UT1NHTXBZWmt5QW54VWxycHhCSGZwTGtJTlZpT01KUkhHeEdnd1IwN0NnMlh6VXBwZ0RlWnZOSElSWFBhdHBEVWt3dWhsaEhLRVlOZ1BXc082akR5NkgzSVZLZ0VpT0ErUzg1VTJBZlFFd2x6VkhYakdXVm9zTTVzYURwYThESVZLZ0FnTzEyWmlZT3BuZ2pFeFFMa3hnRWhoYW9vZU15MnpVTkdKWWlWQUJKZXppRUJJMW9NNVczblVBTDF6M0dMY0ZBNFZVQUhpU3FWS0lPWXBDc0ZlVC82WUJvWmxEOFZyYlJnNHo4VmRvM2xWZ1hTQUtDNlVYeUI2WXU4bVFnMkppNEJ0S1E2bFI0T1Y5SFFkUGo5a2x4ZmdNV0w1UmlWK2tVYllSQ080N0tTSDFNNUREaUhoQW1ZUkViQ1pjamZrNTIvSVZhNEUzRUY3YUFUbmZrSUxxUWRpVVdjcU9FM09JeEF3MDhyY1hDV3pFNE5BVEZPVUZtcUlVWm0ySFNSaFJpcEZnSUhyQVJJQkQ1bE1pazJSRUdLeXBoRU9Fd2g2R0VJcW5pWEc4aEJRQlE5WmFBVDNUc0k1NldITU1LU1RFUERBelE0UVNnTkVDRzRuZ25Hbm02c0ZHRUFPRE5BY1VjVzZaN2VEb3dYR0hCV1BDTzZnUkRlRmFrQkFheUYxVmc0cUFweXJKK29NQVNEVVFXdWtSd1RqbWlLVklnd0REcHFNWGRIbE1JTkErb1drMmNqUkl6Tk4yWkxSQVd4Z2hnRGVNVG1BYVNvb2hINWt6cExGZ1pnQ0dBODRBakZISkNmSGdUQitsR0lFRUxLVUpHZ0RRS2lCL2VEWWZRVFhnajRGRElnUTVja1dHTU5QUnpjR2xsZkE0d1Vpam1lVzF3aUJXejh3Sk9MMHlNYXdyZEpWQy91QldGRVptSVdFNGdIQnNrY2lpQSs4SDF6dWFxSWYwa0VldE1jdzVRaEJQUUgzK2lURW5yQTFNT1BCdmE4Qlg5cnFFc0RMRUtKWGxvdGVZTlNqSWRRVk1VcWcrMkV1ZUpuaWFJRVFKc2N5RDIxTVdGbEtxSFVRT1lhMEdXQThJS2FiWUU5TVc0eGtrTFppbGhLSThXRFFUZ1N2UWxsUzR0SU5QRmN5QzBVTnRpTXVCNE5RVmNkWjIvZENJZ2pxRWdyVlFDZndGSFdEOFNDakJETFBrcXlGQzhxK3FObFBHTFpvRmlZcEpUQ3d1d0dmSC9DMXZXNDdDSjdSazU5TXZtdmNUS1crWWNkV3Q0T2xCS01WczZiQm5TclViRmNRTy8vN2hGYVpSZFpWc3d5aDFsMjlqVDFOQjVJQjdoL0tkRVdpa2w3QUNkeXNicWd3R0RBdGpOZ0NVUUpycnRKTTJlNS9WRmh0Vld3Qys5NDlOaXh0SnJOWHB6aHdaVXVmQ1BqODVCUi81ckROV015eUE1ZURTTGZwcmZId0RXR0JWVFQwWnZhSkp4bGxHYXpiTnRjNzJRVDJJaHVtVDNzQ1BoL3c3aFJyaHpCZWhzRmFaeXh5c1VhanE5WlpZekRvZFJPWnh3UFpqYUNFVlRJUW42NlRCS2pheVZhQnkxRldnNDlHUGJNbG93a05vQnU2OUI4MlBESjZZQWp6Rm1LYlVtU3J2TTdhc0grbm5XV0grQlR0M29KWlU5TlpHNVdQb2N4UGZZYjJIaDdaYTJENGdDaGg0YzY0QkMxbjRyYmFiRlpqWmMxZXU1ME40SEx1M21yYmxqUWpqdldrNHNUR3FESGRJMExEaENWVFVIS21HNWlsamMyMjY4aldtbElIcHd0Y3RYYjM0VTIyMU5TRmMxalBLUTBUQnZVSzAvaVZTUWUwaTBrSXc1SGkrbjB1cDlOZHl3YkFlZXFyc2RTa2xMa2xySWU2S3d5Yis0ZjdCOEFsZG41S0VnbGhyTnh5Y0RmT1lIZlFpUzJIMCtuWVcxRnQxQ1VaWjNOcU9jSVZSZ21EZWlvaXdHWHE5QlF0c1U5anE4TWFxb3NxRHBidWRoQ3l1L1JnY1hXRE5Tbkp1SWhkdmFEcGdiNmNWeUJ6NWgvUWE5UDBCdHdlZDlpTURadU9FTEtuQWRNbEplbG1ySi9NL2VXd3diMkhLdXFJUVhKMVc3Rnpqc1p5L3lVbmJ2MzI5S1RFVkQwaGl4Y3YzckZEcDAxTXhHWXNtaVpXV3hRVzBqTzYyN0FZUHlDOWU0ZzhtaE43OU1tbm5qNzJ6TFBQRlQ1N2xQOC9TeFk4TVR0aFNib3hHWWRJTnFhbkhGZzBZVktzcGtRakpUM0NJZ2FPN2RaVjJpNEdjMzU5enRFbm4zL3EyRE12UEhjOHYvSEVpUk1uR3d0UHZQaVV5R3RMWXFjdW1CWWZIejl0d2RRcE9Sb2wwamQwb05TY0RjS1QyQ2VKdi9xRjQ0Vmt5NDJOWUc4eXY3SHgyQnpwTjVlVUtBS2dLS0xGTlFGQ2czSC9zblRWYjE1cUxDaGdTalRBTHZXSjU1NVM5cGY2bFFIZHh3NGZKZGlzQXlGNzdQWTZVMFpXN3JKREcvSXRCUll1UitQSlo1OUgrR3ZsNWJFQlE2SWorOFgwRWRwQzdQWTBiRjJteVp5UmxVMWl3SXFWUXJ4WEdrK2UrdGVYRlVHY1BuUG03Ry9QK2VlSUN1aytZbmdYSVFJaEJJWXBLM3ZGOHJXcjh3dng1azhXSGo5LzRaVlhMM3A5bDg2KzV1ZkZzWmRmZHpWNTMvaTNmMy96elN1L1BYY3UxaDlJNkloQjNJNkFnWWxobmZtdHpLd1ZHMDQwbHA5Nis1MTNyMTVyYm02K1Z1dHA4VjQvYzFuNnRUbW4zN3ZSNHZYaEhydjFwdGZyYmNGQnJseDUvNFBYWkpVWFFVUVRvK2tmU2c3b3dEeUlmWmk3YWswNStjZmZ1dFo4KzFvcm1JdDhUYjdyVjk0L0xjVElPWGYyekEyUHQ0VTljYlhlOUhtOXZxdXZQUFAwVTAvT3laR3laNklHRFNCb3dBS3l1bVpuMGNiY2p6Nis2THA5Kzg0MXpuVG9jbmw4M3FaUHJsOTY3OVBMcDA5L1FNaTUwNWZmZisvMXU1KzFOUGs4N1BaeHpkMjUrTzVINThsQlh2NmkwTUVCR1NsRU1OU1hsUlhYMVZYZHZ0UHFFaGVmcjhYYjFPU3B2VTdJSjY2bUptK0xqOTErNjdVN3pjMjNQbjduN1ZPRkp5bjNnbytvSjQ5S09KZStvd1FJdHNOT2U3SE4yckRQN1pJVmo4ZEhpb2Z6cjYydDEyNDNlNjYrOHZhcGZNSzlnVkZkbnQrWS84SXp4L0FlRVhaaUpCT3V6OUt4RURocEk2VkNOTjk2OWQ2RjgrWEVuODkzY0xqRGI4dy8vdXl4cDUvblRuM2RnN3FDY0cwZWc3QUZSNmgwSURhUER4dXE4NFhOTStWWWpRVEk4ZWVleFJVQ1J2Z0FCbUVoUkNEeVJOWmRPKzNLbTc5ekczVCt5Uk93Q2xBSzR5UU9jZjZqZDgvS0loeTJjZE0yc3NKMC9za1RKL0tQdjcxOGJYbTV3TVhEM2ppSi84WTdIM3Z1TkxkY3B0c2R3bVMzQUVLTm5VTFlYS3VJd0hIeDNvVlRsZ0pjKzQyRnB5NThmcXYrQyt1SDJjdVc1K0crMWNJdVN5U2FieXcvZitIZGk2MjR4YlI2V2w2R0NDQ2ZVVEtiaTJBdzFpdnBDY2ZlUGRsTFYrWGhmL254Q3gvZnV0MWNkdEJJdUhpemNXUDIwdVY1RzhvdEZBZng1NTk2Kzk1VnorMW15dE14Q0QyWmxNcjBWQU1iZ1pORmxCWm5jZDA2ayttdDdOOTkrZFd0cjYvaEsvdURWQWxKUnFiSlpQN2lRd0p2dzJxYzcvd3JCQ0RqYXp5MXArbDJvOFVSaUsxZTZ5YVAvMEhoOEJ3aEtrYk11ZmZidnJsNGgwQ3FZSys2aUNrdjAzem95eSsvL1QwK3piQWY5SDBHcHROZURNSjZGZ0tWYUR2b3Z5ZWNodzBHR3VHclcwUWJ6aHBCa3U2dE5XMXRmL2c5NzBFR0lUcG9FRWpxVEtRUnR0anBlcHk2cmY1N3dyNlZyR0FpRUw1ckZVZklNSzhXUTdqK0FmU09zR1ppZkJxRnNOOU5JN0IzZVNURVhVclZjWkVJTGdrRWt4aEN5dzB3ZHc1bUVPTDVDSml0d3A4YW5GdklvcG1BRUdJVklWVDdtYW9jSHJKTW9uMWFHQzdURWJpVExwVm5jRlpZcVJXL2Vla0RlWVEvZnMxNzFIc0pURlA5bUl6T0pBR0NQeWNOU3Rsd28xL1JSaVBnc1FZaXd1aWdJUEFwemdJYVlhdkRYdHBBL1NtMnlsbzVMMjNmU2FPeUVZcDI4QkhXdlNTSFFPeGY4aEdxSGU3U1BSU0NIeWZ0M0EvK1loYkNGajVDNXNxVFlnaXZnNmlwSzlNUklnallOamtuN2RoTkcyTzdFY0RlNklMRlFnVGJFUmtuN2F3QUJPMUZBQlhIazQxV0FZS2NrNmEybjVRaFBQaitJZS9wbGpOMHMwUTlLRUFZdDB0UG1TQWJvYTVLc2llYzlaaEJCS0ZJRE9GUEh6ZnpFZDZUUVRqaW9BdXp5SjgyN1picUNYc1ZNL3dJaEI4ZTh2KzFQUWprampmTmNGaWlKeHg3RzZ3Y2hEK1REdEM5VllDUTlUc3hoUGZwWmtQN3dKMm9rcWt6UlJHcUpSRG9LbDhXd3RkSUNDQjBITURLY2N5aDlxajVDRlF0cTFBSlZEMmpPZ2pCc2doU2F4cjdRY3pRTGdRUU9vYUxJR3h5dVRrSWxRNHhKMjNuTkdWK1hCN2htNnQzK0FnZ2FCckN5bkVBaEQxNzNXd2xzOHNpV1AxQXh5cEtFUzdLSXNBRVE0S09SbkE0SzFudllhclcyTWE0eFlhSklZQ1NmSmFZTm40cDFNSk5IMEFncXUrR2cxbVRLbDRSSW14MkNReXkxblZFT1VMMmZTR0M1eE1RT281VWdHREFoTk1saUxFRFI2ZzloNENBYmRzdjZBbXlTa1FoZ2xrVTRUT2dCV0pQSHlZWXFJb0pmRW50NWlJSW5iUWJ4aXBLdFhEeEd2Y052cnRnYlIvSlJsaVVTQ0hVMjdrSW1QVXdUdzNPSXA3WkV3Zy9TcHJqL2JhZm1KUVpIeUZZQXFHSzh4N2JWcTR4c0dJVkZzTFBKSUpIVkFzeUNHT1VJVFJ3MXpTc1dJV0Y4TXZYb25Sa2RDMUE4UDRGV0NEeE1WSFhLSDhJL0RXTm83Sk9CT0ZuU1lRMmZ3aEQ0YnBXUzMzU0lJSlF6WGJTOW5xalFUVUVzdFFISWxCRmJRYnNzSk9QWU9Dc2Fmai9sMmptRUNKQzB4VzZVYksyUVlCUUlVRGdyR2tjUkhrQ3Y1bmZ5Q044eDgranZuRkdGR0U5UkxBWDhSRXFHU2ZOaVZVVUl2d2dpZENYcUgyRDMwNVNDUVlTb1pqM0h0WjB5WTFWaEFoNytHdEs4eklSaENZWU9vNGlkZ2xENkorZUlJdTVDRnNRSUdBMnVLYmh4aW9DaEgyaXBpcEE4RUtFb1NJSTFnb3hCTGltY1FwQ1pEOElieUVqWUR1S3k0UUltSUYyMHU1OXV3eG9DS0phYVBrVWhJN0U1aEFzblpGRnNGVlJUdG9wL0Y4QmFNRURZM2lxSkJZc3JhY2xRd1JoMm94T1BEbGNSN1pKSVB3aW80V2ZtNVVoTE1Dc0FLRkNvR3pDUkZ3d3lTZUc4TzFEMG1rSUVWYUpJUGhBREI5Qjd0R0IxWDBjalZBamhvRFZrWWtuZnF6Q1J4QkVFbmhINUlrZzFMS2pWMFlMTkVKZGtkTXBnbURkaGE5cDdEdkZqSkdOSUJ5eVJPWlRnT0FDNlYvcWs5ZUIzSTZvMjI4WFE4RFhOR1hDV0NWUWhGcDJBTTJzYStlazYrVVE2aXByWVpLUEwwUkdDd1hCOXdtSVdFWktJUndXUWNDZGRGbUZSQldvNlQva0VYN2hyZWY4STloM2lyVmoyNzkzczAwQzRTVjVoRzhmU2lGUUgyNUVLMFRBTUtNQjg0ZFFMMFRBN2VRUGZJVHJJUDFMbFY2QmRlMlVGQ3JCVUYzcmxFQ1FyQTZIQ1BZS0ljSi9JaUJRWDBUSUlHRCtFV29FbVBJSWtZOEtnWk1FN3h3RXZqbTJYT0lpd0FxR0dRREJYcnJMZ0l6d1J4bUU3M21aejVZM3VRaGdYWnN6aS94VUNvOFQ3ZnNhbEplQjB3Z1BQbStXUnJqSFEvQytEZ29yaG9raUhQR29pWkNSMlNoRWFBTFJxNmFyNmdqT1lzR09DSGJTUDhKb05SSDQ0YjhFQWdnZG82aksySzcwanlVTHRRRWlaR1Nla0VmZ20rTWJJSFFNaStFZ2FHWW4wUWp1dlJJem9pVENYMlVSSG56K0VBMWh6MjczN3MycUlnZ3luMDB3Z083UFJWaEVJbGgzN2JhcmlTQ1dpUGR5bzFmbUlKalpIWUVnbXY5bEVLZ2FNM2ppd3Z6RWRpT1VDZFphcG8waUNDMmdpb1ErTkVaVmhLMDdGQ0I0UEV6OWhEakMzb0FRN2trajNFZEV3R05FZTIzMU5sU0UrNi9LYU9GVkhvSUxJTkRmZjhNenNpWm9BWUlqQUFReXdTcU93RSsrTXJuWGtUeUUveUkzU3pzQndYZjl0VTVGeVA2YkRFSzA2Z2kxdGNJc2VLNEl3bDBRc2REZkxnd0s1eUVjZENJaUVPNkhRbkFwUW1pNXErRWl3RThIcHhtSStaSE0rZ24wS1krdzhVdEVoQklKaEVtWW5rS3dsKzFYRmVHblc5eTlnSlliQUtHYk5FS1ZxZ2hmZVhnSWI0S09HQzdvaUE1QnVLOEFBYXhyeWNQQ2lNU2pxZ2hMMjRRSUlBa092NjREQ0ZPcFJhVzF4aGtvQW1lZlZ3WUJKTUg3RGhOSHNCVTdoZE8rUW9TOW14UWh2SzRBb1JnWmdkeVFWWWpnQlRGOEZQaTBySmM2Q05ja0VYNTQyTXBGQUtGakZQaGdBcXhyYytoZGEvVVJlT1ZsMGdnbEhZSkE3QVh3bDVTd2hFT0FrRUlHRER2MmwvRjJ4ZHVGc0VxSTBBUnlyL0JRQm9pd0tEMHBWVThpRkNPdHBzaDVnRUJ3YzJzS2xDUEF6OHMxNHliTVNrOU1yQ29UU1JsMURBTDRYS1VyKyt2RnlmTVBWRFhkVkJmaHoxd0VkZ0V5TFhCVGhCNFljVmZ1MXFpSzhETVB3U2RBRUg1R04rVy9yU2lIRHFBaUNMVVExQ1dDaDFBeURla2dEbG1FUXdJRTN5ZnMrZ2xhaG9id0dPSURRN0FMdHlQTWE0UUlyQnBvUm1LNmN4R29lUnNkb1Y0d21CVWpCQVdON3M3K3VuVWNNc0ozSHVVSW5Qb0p0c1NNNlJuVkRnU1hZZ1FtOXpvbVNDQkRJem9FZ1pmL1pSREV6b3NaMkNrSU1QY3Fkb0FTckVKRlExaDZYeHBodFFDQlc4TEJGeGk5ekVSQmVHc1pYWGRxUHloRUVDYmltVEpzT1lUWWxNQVFoTFVOWWdnd2dPNzN5QkJBOUJvMXJOTVF2cFZBNk50NUNOOXo4enhlc0l3UVBmbHloUG9JTHdrUW1BTGtHQkVFTUczSEloMGV4aUFJNnI0dzB3bWhGbVFSUUJWcXpuYVVJNnZrdEdENkt3L0I0NFZKOE5EK3FpTDhTR3hMMjR2OElyUzAzRGdMbk9PQW9JNUEwRmxsRVZxOGQ4OHluOW1LSHBZOXBuMElqdnJxWGR0c1ZoN0NBNUI4OVhudmZzcituSE5FQjJqQjViQ1gxbFR1c3RtWTJBazN4d2RVOHRYWGRKMERJSEVhTFRqWUVCRmhGVURBdzBlbm83UzQwbWpiUmxHUTZXa0NBUWY0Tys5VGNmR2pyT0JwRFBOMEtBaVBNd2lFS3B5dW5RUUZvUXNpSDRnamlBQm9lb3FmUTlCUERRUWNBdGZGenFMTi82Tk4wMjhrRUx5Zm5SRjhMRDlRNG13S2xSQmN4REV0enBZYkV3NThrZmhsVzl1cjczM0FCNGlRUEwxZVBRUnFMaWlKbS83aS9XY0VKeEdFakpFK25rTmRCSEpHbkhLMFJBQWdkMTRMWE9HcWg4QVhmL2RSeFlCUG5tZWpuQ0pISXR4UmhCQWE3Ty9RZW9nd1VmRUpiaFRDZ3g5dkN4Q1l6WEVnWVdQOW41b1BFYVlqSXJUOXd2OWlrbFhnQ2dGaS9BSjBLRUpVdExMenF6b01JV3FrMG1QOVlxSTZCQ0ZNTVFEclZNUDVTazZ4Z3dpSFJCR1lTbU9VZ3o0aHdsd1VCTEx1VklqZy9Uc1lpU2kzUjNRUWdwS1I4Q3RDeHlPRW9CdzJDdXV5VlVCZ2lwMlJidGZwQTNadTQ5TVFzbjRTQ0w2ejdVTkFPZlAxbndUaDI2Ly9HUkhhYXdzcUlIakF0Z1BhS1pNOUF6TEhOYUlJTU51TmhnQVNqNU9NeXJlR3lPTU4xRWRBeVlOblpMelVBUWdsang1QlhTMmduVDJyb2haOG4vSHFkaFFLU0VMSHFZR0FmSk1KS2VBV2pYRUlTZWdPUXBpQ2NFcjhyd2dBNGY2OWg5SUlDSWYxcTR4d055Y2doQkdQSG1ITW8wZUFwNDhpM0N1VGdUVSthb1RNbFgrVlIwQTdGMXRGQkdZdkVPM09BalVSTHBYOGYwV0F0OFUrT29SK0lPdVg4T2dSRUc1YWtrTDRDNDJBZEpWSk94QSs1eC8rd2lSWmVvenFGSVEvdlhwSExZVFJqeDRCM3NhSGFJNHFJakNIWHFxSDBCZnR6SDZJc0w3OUNBRWwzRmdJc3hFUXN2NG1odkRHKzc4aUJJNHd0QU1RMEs3dVpjN2RYSzk4WjhnZkFsTE9EeGVZZUZSK0Q1MEVnaGVtbXREdWVPL3pLd0lIUWZrRmJBVENON3l2TU5SQUdKK29XQTBrZ2tjMUJIZ2JYK3lFN2FtcHlySnU0Z2czZllIbC9GalhmbWxpeHg5STFTbUJFRWRnRGhwR3VzczZpSDNSazBhVEU1K2dUL0tmL0ZNYmdibUFqWkNTYWZPU3RmN3lMU2JpSEdRVkVlQnhERURpRnFiN2dWQWRRVkFVclptOGFHYVMzaEE0QXZwOVV6RkQrQXlhY2V0bmF0TU1hQWcrem1seHFESkdlTXZLblBsTEpDSEVFR285YjF4Q3ZpaVZMZjNIaEFnaEptelhpanNLTVlRVzN4bFl3eFNJRm5BWjFFMTQ3YytVdVFkU3hXNWtFeUo0bXU2K3pEeW4rS0pVZ1F6dktiaHlobkFVV3F0ZkJGd0ZyQnFpTUpSZFNyNzA2eTY0LzBuTVVSQUlYN211aWFzZ1FGTmdaTmpBS0Q2RTBGR1l5TVBKVzBXc2dKQUJhR0diaUhTTkZrSk1YcFRPZGhSc0JMNEtOS0ZveTJweEdUcFdlQ1BXWkxhallDRndyUUNYOEZFcUVPQVNFeXgwRkZNblFrY0JFR3B4RlZ6bS9GSlVNTXIyb0x6MGo1UnhGT1psRDBnRXZoVm93bEd2cFpTWFFZTWorR08wSlBhSjdXbDRSRUY4by9aZDYwMitGZlFOUm95V0ZNandjQkZITVV1di9RZUJJRlNCR25Zb2xINDlCWGZVNVV4TCtNZXF0cmFmT3RBS2VOSmJ6Rkg4NzRPMlk2OTFoZ3BvR1NiaUtKNS92ck5VUU11b1hxRWFPZWxZRmRBU00wTDYzcmFPVndFdC9TTWxJRlQyQmJJaTRpaHdYekJXZlY4Z0ozMkc4OE9haUVEdVptMm5qR1k3aXFnUm5hc0NJSXlqQ0g4RUtxQmxWR1I0YUdoSXRQSjc3SG55ZjM0bmdrcGdzSzJMQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvaW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9seWdvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfc3ltYm9sc19QaWN0dXJlTWFya2VyU3ltYm9sX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfc3ltYm9sc19TaW1wbGVGaWxsU3ltYm9sX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnLCBnZXRHb29nbGVNYXBzQXBpS2V5IH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuLy8gSW1wb3J0YcOnw7VlcyBkbyBBcmNHSVMgTWFwcyBTREsgZm9yIEphdmFTY3JpcHRcclxuaW1wb3J0IFBvaW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9pbnQnXHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYydcclxuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcidcclxuaW1wb3J0IFBpY3R1cmVNYXJrZXJTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1BpY3R1cmVNYXJrZXJTeW1ib2wnXHJcbmltcG9ydCBQb2x5Z29uIGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9seWdvbidcclxuaW1wb3J0IFNpbXBsZUZpbGxTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1NpbXBsZUZpbGxTeW1ib2wnXHJcblxyXG4vLyBEZXNlc3RydXR1cmFuZG8gaG9va3MgZG8gUmVhY3QgcGFyYSB1c29cclxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSA9IFJlYWN0XHJcblxyXG4vLyBJbXBvcnRhIGEgaW1hZ2VtIGRlIHBlZ21hbiBmb3JuZWNpZGEgcGVsbyB1c3XDoXJpbyAod2VicGFjayByZXNvbHZlIHBhcmEgVVJMKVxyXG4vLyBVc2Ftb3MgcmVxdWlyZSBwYXJhIGV2aXRhciBuZWNlc3NpZGFkZSBkZSB0aXBvcyBkZSBpbWFnZW0uXHJcbmNvbnN0IHBlZ21hblVybDogc3RyaW5nID0gcmVxdWlyZSgnLi9QZWdtYW5raWxsZmVlZC5wbmcnKVxyXG4vLyBIYWJpbGl0ZSBwYXJhIHVzYXIgYSBBUEkgSlMgZG8gU3RyZWV0IFZpZXcgKHBhbm9yYW1hKSBjb20gYXR1YWxpemHDp8OjbyBlbSB0ZW1wbyByZWFsXHJcbmNvbnN0IEVOQUJMRV9TVFJFRVRWSUVXX0FQSSA9IHRydWVcclxuLy8gVGlwYWdlbSBsZXZlIHBhcmEgZ29vZ2xlXHJcbmRlY2xhcmUgY29uc3QgZ29vZ2xlOiBhbnlcclxuXHJcbiBcclxuXHJcbi8vIEludGVyZmFjZSByZW1vdmlkYSBwb2lzIG7Do28gZXN0YXZhIHNlbmRvIHV0aWxpemFkYVxyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcclxuICAvLyBSZWZlcsOqbmNpYXMgcGFyYSBvYmpldG9zIGRvIEFyY0dJUyBxdWUgbsOjbyBkZXZlbSBhY2lvbmFyIHJlLXJlbmRlcml6YcOnw7Vlc1xyXG4gIGNvbnN0IGdyYXBoaWNzTGF5ZXJSZWYgPSB1c2VSZWY8R3JhcGhpY3NMYXllcj4obnVsbClcclxuXHJcbiAgLy8gR2VyZW5jaWFtZW50byBkZSBlc3RhZG8gZG8gY29tcG9uZW50ZVxyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXHJcbiAgY29uc3QgW2NsaWNrZWRDb29yZGluYXRlcywgc2V0Q2xpY2tlZENvb3JkaW5hdGVzXSA9IHVzZVN0YXRlPHtsYXQ6IG51bWJlciwgbG5nOiBudW1iZXJ9IHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbZW1iZWRVcmwsIHNldEVtYmVkVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgLy8gU3Vwb3J0ZSBvcGNpb25hbCBhbyBTdHJlZXRWaWV3UGFub3JhbWFcclxuICBjb25zdCBzdHJlZXRWaWV3Q29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IHN0cmVldFZpZXdQYW5vcmFtYVJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXHJcbiAgY29uc3QgW2xhc3RIZWFkaW5nLCBzZXRMYXN0SGVhZGluZ10gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZ2VyYXIgVVJMIGRvIFN0cmVldCBWaWV3IGVtYmVkXHJcbiAgY29uc3QgZ2VuZXJhdGVFbWJlZFVybCA9IChsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgYXBpS2V5ID0gZ2V0R29vZ2xlTWFwc0FwaUtleSgpXHJcbiAgICBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZC92MS9zdHJlZXR2aWV3J1xyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgIGtleTogYXBpS2V5LFxyXG4gICAgICBsb2NhdGlvbjogYCR7bGF0fSwke2xuZ31gLFxyXG4gICAgICBoZWFkaW5nOiAnMCcsXHJcbiAgICAgIHBpdGNoOiAnMCcsXHJcbiAgICAgIGZvdjogJzkwJ1xyXG4gICAgfSlcclxuICAgIHJldHVybiBgJHtiYXNlVXJsfT8ke3BhcmFtcy50b1N0cmluZygpfWBcclxuICB9XHJcblxyXG4gIC8vIENhcnJlZ2EgR29vZ2xlIE1hcHMgSlMgQVBJIHNvYiBkZW1hbmRhIChzb21lbnRlIHNlIGhhYmlsaXRhZG8pXHJcbiAgY29uc3QgbG9hZEdvb2dsZU1hcHNBcGkgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZiAoIUVOQUJMRV9TVFJFRVRWSUVXX0FQSSkgcmV0dXJuXHJcbiAgICBjb25zdCBhcGlLZXkgPSBnZXRHb29nbGVNYXBzQXBpS2V5KClcclxuICAgIGlmICghYXBpS2V5IHx8IGFwaUtleSA9PT0gJ1NVQV9DSEFWRV9ERV9BUElfQVFVSScpIHJldHVyblxyXG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KT8uZ29vZ2xlPy5tYXBzKSByZXR1cm5cclxuICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1nbWFwcy1wYW5vcmFtYV0nKVxyXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICBleGlzdGluZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4geyByZXNvbHZlKCkgfSlcclxuICAgICAgICBleGlzdGluZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHsgcmVqZWN0KG5ldyBFcnJvcignRmFsaGEgYW8gY2FycmVnYXIgR29vZ2xlIE1hcHMgQVBJJykpIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxuICAgICAgc2NyaXB0LnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7YXBpS2V5fWBcclxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZVxyXG4gICAgICBzY3JpcHQuZGVmZXIgPSB0cnVlXHJcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ21hcHMtcGFub3JhbWEnLCAndHJ1ZScpXHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7IFxyXG4gICAgICAgIHRyeSB7IGNvbnNvbGUuaW5mbygnW1NWXSBHb29nbGUgSlMgQVBJIGNhcnJlZ2FkYS4ga2V5X3N1ZmZpeD0nLCBhcGlLZXkuc2xpY2UoLTYpKSB9IGNhdGNoIHsgLyogbm9vcCAqLyB9XHJcbiAgICAgICAgcmVzb2x2ZSgpIFxyXG4gICAgICB9XHJcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4geyBcclxuICAgICAgICB0cnkgeyBjb25zb2xlLmVycm9yKCdbU1ZdIEVycm8gYW8gY2FycmVnYXIgR29vZ2xlIEpTIEFQSS4ga2V5X3N1ZmZpeD0nLCBhcGlLZXkuc2xpY2UoLTYpKSB9IGNhdGNoIHsgLyogbm9vcCAqLyB9XHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignRmFsaGEgYW8gY2FycmVnYXIgR29vZ2xlIE1hcHMgQVBJJykpIFxyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAvLyBIb29rIHBhcmEgaW5pY2lhbGl6YXIgYSBjYW1hZGEgZGUgZ3LDoWZpY29zIG5vIG1hcGEgQXJjR0lTXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChqaW11TWFwVmlldyAmJiAhZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBpZDogYHN0cmVldHZpZXdfbWFya2VyX2xheWVyXyR7cHJvcHMuaWR9YCB9KVxyXG4gICAgICBncmFwaGljc0xheWVyUmVmLmN1cnJlbnQgPSBsYXllclxyXG4gICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXIpXHJcbiAgICB9XHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBwcm9wcy5pZF0pXHJcblxyXG4gIC8vIENhbGN1bGEgdW0gcG9udG8gZGVzdGlubyBkYWRvIGxhdC9sbmcsIGF6aW11dGUgKGdyYXVzKSBlIGRpc3TDom5jaWEgKG0pXHJcbiAgY29uc3QgY29tcHV0ZURlc3RpbmF0aW9uID0gKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlciwgYmVhcmluZ0RlZzogbnVtYmVyLCBkaXN0YW5jZU1ldGVyczogbnVtYmVyKTogeyBsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIgfSA9PiB7XHJcbiAgICBjb25zdCBSID0gNjM3MTAwMFxyXG4gICAgY29uc3QgYnJuZyA9IChiZWFyaW5nRGVnICogTWF0aC5QSSkgLyAxODBcclxuICAgIGNvbnN0IGxhdDEgPSAobGF0ICogTWF0aC5QSSkgLyAxODBcclxuICAgIGNvbnN0IGxvbjEgPSAobG5nICogTWF0aC5QSSkgLyAxODBcclxuICAgIGNvbnN0IGxhdDIgPSBNYXRoLmFzaW4oTWF0aC5zaW4obGF0MSkgKiBNYXRoLmNvcyhkaXN0YW5jZU1ldGVycyAvIFIpICsgTWF0aC5jb3MobGF0MSkgKiBNYXRoLnNpbihkaXN0YW5jZU1ldGVycyAvIFIpICogTWF0aC5jb3MoYnJuZykpXHJcbiAgICBjb25zdCBsb24yID0gbG9uMSArIE1hdGguYXRhbjIoTWF0aC5zaW4oYnJuZykgKiBNYXRoLnNpbihkaXN0YW5jZU1ldGVycyAvIFIpICogTWF0aC5jb3MobGF0MSksIE1hdGguY29zKGRpc3RhbmNlTWV0ZXJzIC8gUikgLSBNYXRoLnNpbihsYXQxKSAqIE1hdGguc2luKGxhdDIpKVxyXG4gICAgcmV0dXJuIHsgbGF0OiAobGF0MiAqIDE4MCkgLyBNYXRoLlBJLCBsbmc6IChsb24yICogMTgwKSAvIE1hdGguUEkgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2VyYSBwb250b3MgZGEgXCJmYXRpYVwiIGRvIGZhcm9sIChzZXRvcikgYSBwYXJ0aXIgZG8gY2VudHJvIGUgaGVhZGluZ1xyXG4gIGNvbnN0IGJ1aWxkU2VjdG9yUmluZyA9IChjZW50ZXJMYXQ6IG51bWJlciwgY2VudGVyTG5nOiBudW1iZXIsIGhlYWRpbmdEZWc6IG51bWJlciwgZm92RGVnOiBudW1iZXIsIHJhZGl1c01ldGVyczogbnVtYmVyKTogbnVtYmVyW11bXSA9PiB7XHJcbiAgICBjb25zdCBzdGFydCA9IGhlYWRpbmdEZWcgLSBmb3ZEZWcgLyAyXHJcbiAgICBjb25zdCBlbmQgPSBoZWFkaW5nRGVnICsgZm92RGVnIC8gMlxyXG4gICAgY29uc3Qgc3RlcCA9IE1hdGgubWF4KDUsIE1hdGguZmxvb3IoZm92RGVnIC8gMTIpKSAvLyB+MTIgc2VnbWVudG9zXHJcbiAgICBjb25zdCByaW5nOiBudW1iZXJbXVtdID0gW11cclxuICAgIC8vIGNvbWXDp2Egbm8gY2VudHJvXHJcbiAgICByaW5nLnB1c2goW2NlbnRlckxuZywgY2VudGVyTGF0XSlcclxuICAgIGZvciAobGV0IGEgPSBzdGFydDsgYSA8PSBlbmQ7IGEgKz0gc3RlcCkge1xyXG4gICAgICBjb25zdCBkZXN0ID0gY29tcHV0ZURlc3RpbmF0aW9uKGNlbnRlckxhdCwgY2VudGVyTG5nLCBhLCByYWRpdXNNZXRlcnMpXHJcbiAgICAgIHJpbmcucHVzaChbZGVzdC5sbmcsIGRlc3QubGF0XSlcclxuICAgIH1cclxuICAgIC8vIGdhcmFudGUgbyDDumx0aW1vIHBvbnRvIGV4YXRhbWVudGUgZW0gJ2VuZCdcclxuICAgIGNvbnN0IGRlc3RFbmQgPSBjb21wdXRlRGVzdGluYXRpb24oY2VudGVyTGF0LCBjZW50ZXJMbmcsIGVuZCwgcmFkaXVzTWV0ZXJzKVxyXG4gICAgcmluZy5wdXNoKFtkZXN0RW5kLmxuZywgZGVzdEVuZC5sYXRdKVxyXG4gICAgLy8gZmVjaGEgbm8gY2VudHJvXHJcbiAgICByaW5nLnB1c2goW2NlbnRlckxuZywgY2VudGVyTGF0XSlcclxuICAgIHJldHVybiByaW5nXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIGF0dWFsaXphciBvIG1hcmNhZG9yIG5vIG1hcGEgQXJjR0lTIChlIG8gZmFyb2wpXHJcbiAgY29uc3QgdXBkYXRlQXJjR0lTTWFya2VyID0gKGxvY2F0aW9uOiB7bGF0OiBudW1iZXIsIGxuZzogbnVtYmVyfSwgaGVhZGluZz86IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKCFncmFwaGljc0xheWVyUmVmLmN1cnJlbnQpIHJldHVyblxyXG5cclxuICAgIC8vIFJlbW92ZSB0b2RvcyBvcyBtYXJjYWRvcmVzIGV4aXN0ZW50ZXNcclxuICAgIGdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudC5yZW1vdmVBbGwoKVxyXG5cclxuICAgIC8vIENyaWEgYSBnZW9tZXRyaWEgZG8gcG9udG9cclxuICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KHtcclxuICAgICAgbG9uZ2l0dWRlOiBsb2NhdGlvbi5sbmcsXHJcbiAgICAgIGxhdGl0dWRlOiBsb2NhdGlvbi5sYXRcclxuICAgIH0pXHJcblxyXG4gICAgLy8gQ3JpYSBvIHPDrW1ib2xvIGRvIG1hcmNhZG9yXHJcbiAgICBjb25zdCBzeW1ib2wgPSBuZXcgUGljdHVyZU1hcmtlclN5bWJvbCh7XHJcbiAgICAgIHVybDogcGVnbWFuVXJsLFxyXG4gICAgICB3aWR0aDogJzE4cHgnLCAvLyBtYWlzIGVzdHJlaXRvIHBhcmEgbWFudGVyIHByb3BvcsOnw6NvIHZlcnRpY2FsXHJcbiAgICAgIGhlaWdodDogJzI4cHgnLCAvLyBsZXZlbWVudGUgbWFpcyBhbHRvIHBhcmEgcGFyZWNlciBodW1hbm9pZGVcclxuICAgICAgeW9mZnNldDogJzE0cHgnIC8vIGJhc2UgZG8gYm9uZWNvIGFwb250YSBwYXJhIG8gcG9udG9cclxuICAgIH0pXHJcblxyXG4gICAgLy8gQ3JpYSBvIGdyw6FmaWNvIGUgbyBhZGljaW9uYSDDoCBjYW1hZGFcclxuICAgIGNvbnN0IGdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XHJcbiAgICAgIGdlb21ldHJ5OiBwb2ludCxcclxuICAgICAgc3ltYm9sOiBzeW1ib2xcclxuICAgIH0pXHJcbiAgICBncmFwaGljc0xheWVyUmVmLmN1cnJlbnQuYWRkKGdyYXBoaWMpXHJcblxyXG4gICAgLy8gU2UgdGl2ZXJtb3MgaGVhZGluZyAobW9kbyBBUEkpLCBkZXNlbmhhIHVtIHNldG9yIGluZGljYW5kbyBkaXJlw6fDo29cclxuICAgIGNvbnN0IGVmZmVjdGl2ZUhlYWRpbmcgPSB0eXBlb2YgaGVhZGluZyA9PT0gJ251bWJlcicgPyBoZWFkaW5nIDogbGFzdEhlYWRpbmdcclxuICAgIGNvbnN0IGJlYW1MZW5ndGhNZXRlcnMgPSA0NVxyXG4gICAgY29uc3QgZm92RGVnID0gNjBcclxuICAgIGNvbnN0IHJpbmcgPSBidWlsZFNlY3RvclJpbmcobG9jYXRpb24ubGF0LCBsb2NhdGlvbi5sbmcsIGVmZmVjdGl2ZUhlYWRpbmcsIGZvdkRlZywgYmVhbUxlbmd0aE1ldGVycylcclxuICAgIGNvbnN0IHNlY3RvciA9IG5ldyBQb2x5Z29uKHsgcmluZ3M6IFtyaW5nXSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSlcclxuICAgIGNvbnN0IGZpbGxTeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCh7XHJcbiAgICAgIGNvbG9yOiBbMCwgMCwgMjA1LCAwLjVdLFxyXG4gICAgICBvdXRsaW5lOiB7IGNvbG9yOiBbMCwgMCwgMjU1LCAwLjldLCB3aWR0aDogMS41IH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBzZWN0b3JHcmFwaGljID0gbmV3IEdyYXBoaWMoeyBnZW9tZXRyeTogc2VjdG9yLCBzeW1ib2w6IGZpbGxTeW1ib2wgfSlcclxuICAgIGdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudC5hZGQoc2VjdG9yR3JhcGhpYylcclxuICB9XHJcblxyXG4gIC8vIEhvb2sgcGFyYSBjb25maWd1cmFyIGEgaW50ZXJhw6fDo28gZG8gbWFwYVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBQcm9zc2lnYSBhcGVuYXMgc2UgYSB2aXN1YWxpemHDp8OjbyBkbyBtYXBhIEFyY0dJUyBlc3RpdmVyIHByb250YVxyXG4gICAgaWYgKCFqaW11TWFwVmlldykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGljaW9uYSB1bSBvdXZpbnRlIGRlIGV2ZW50byBkZSBjbGlxdWUgYW8gbWFwYSBBcmNHSVNcclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IGppbXVNYXBWaWV3LnZpZXcub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gZXZlbnQubWFwUG9pbnRcclxuXHJcbiAgICAgIC8vIENhbWluaG8gMTogaWZyYW1lIChwYWRyw6NvIHNlZ3VybylcclxuICAgICAgaWYgKCFFTkFCTEVfU1RSRUVUVklFV19BUEkpIHtcclxuICAgICAgICB0cnkgeyBjb25zb2xlLmluZm8oJ1tTVl0gTW9kbyBpZnJhbWUuIEF0dWFsaXphbmRvIGVtYmVkIHBhcmEnLCBsYXRpdHVkZSwgbG9uZ2l0dWRlKSB9IGNhdGNoIHsgLyogbm9vcCAqLyB9XHJcbiAgICAgICAgc2V0Q2xpY2tlZENvb3JkaW5hdGVzKHsgbGF0OiBsYXRpdHVkZSwgbG5nOiBsb25naXR1ZGUgfSlcclxuICAgICAgICBjb25zdCB1cmwgPSBnZW5lcmF0ZUVtYmVkVXJsKGxhdGl0dWRlLCBsb25naXR1ZGUpXHJcbiAgICAgICAgc2V0RW1iZWRVcmwodXJsKVxyXG4gICAgICAgIHVwZGF0ZUFyY0dJU01hcmtlcih7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9uZ2l0dWRlIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENhbWluaG8gMjogQVBJIEpTIGRvIFN0cmVldCBWaWV3IChlbSB0ZW1wbyByZWFsKVxyXG4gICAgICA7KGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBsb2FkR29vZ2xlTWFwc0FwaSgpXHJcbiAgICAgICAgaWYgKCEod2luZG93IGFzIGFueSk/Lmdvb2dsZT8ubWFwcyB8fCAhc3RyZWV0Vmlld0NvbnRhaW5lclJlZi5jdXJyZW50KSByZXR1cm5cclxuXHJcbiAgICAgICAgLy8gQ3JpYSBwYW5vcmFtYSB1bWEgw7puaWNhIHZlelxyXG4gICAgICAgIGlmICghc3RyZWV0Vmlld1Bhbm9yYW1hUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGNvbnN0IHBhbm8gPSBuZXcgZ29vZ2xlLm1hcHMuU3RyZWV0Vmlld1Bhbm9yYW1hKHN0cmVldFZpZXdDb250YWluZXJSZWYuY3VycmVudCwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IGxhdGl0dWRlLCBsbmc6IGxvbmdpdHVkZSB9LFxyXG4gICAgICAgICAgICBwb3Y6IHsgaGVhZGluZzogMCwgcGl0Y2g6IDAgfSxcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vIExpc3RlbmVyIHBhcmEgbW92ZXIgbyBtYXJjYWRvciBjb25mb3JtZSBvIHVzdcOhcmlvIG5hdmVnYVxyXG4gICAgICAgICAgcGFuby5hZGRMaXN0ZW5lcigncG9zaXRpb25fY2hhbmdlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gcGFuby5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIGlmIChwb3MpIHtcclxuICAgICAgICAgICAgICB0cnkgeyBjb25zb2xlLmRlYnVnKCdbU1ZdIHBvc2l0aW9uX2NoYW5nZWQgLT4nLCBwb3MubGF0KCksIHBvcy5sbmcoKSkgfSBjYXRjaCB7IC8qIG5vb3AgKi8gfVxyXG4gICAgICAgICAgICAgIHVwZGF0ZUFyY0dJU01hcmtlcih7IGxhdDogcG9zLmxhdCgpLCBsbmc6IHBvcy5sbmcoKSB9LCBwYW5vLmdldFBvdigpPy5oZWFkaW5nID8/IDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyBMaXN0ZW5lciBwYXJhIGF0dWFsaXphciBmZWl4ZSBxdWFuZG8gbXVkYSBvIGhlYWRpbmdcclxuICAgICAgICAgIHBhbm8uYWRkTGlzdGVuZXIoJ3Bvdl9jaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3YgPSBwYW5vLmdldFBvdigpXHJcbiAgICAgICAgICAgIHNldExhc3RIZWFkaW5nKHBvdj8uaGVhZGluZyA/PyAwKVxyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBwYW5vLmdldFBvc2l0aW9uKClcclxuICAgICAgICAgICAgaWYgKHBvcykge1xyXG4gICAgICAgICAgICAgIHVwZGF0ZUFyY0dJU01hcmtlcih7IGxhdDogcG9zLmxhdCgpLCBsbmc6IHBvcy5sbmcoKSB9LCBwb3Y/LmhlYWRpbmcgPz8gMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHN0cmVldFZpZXdQYW5vcmFtYVJlZi5jdXJyZW50ID0gcGFub1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdHJlZXRWaWV3UGFub3JhbWFSZWYuY3VycmVudC5zZXRQb3NpdGlvbih7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9uZ2l0dWRlIH0pXHJcbiAgICAgICAgICBzdHJlZXRWaWV3UGFub3JhbWFSZWYuY3VycmVudC5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaW5jcm9uaXphIG1hcmNhZG9yIGluaWNpYWxtZW50ZVxyXG4gICAgICAgIHRyeSB7IGNvbnNvbGUuaW5mbygnW1NWXSBNb2RvIEFQSS4gUGFub3JhbWEgc2V0UG9zaXRpb24nLCBsYXRpdHVkZSwgbG9uZ2l0dWRlKSB9IGNhdGNoIHsgLyogbm9vcCAqLyB9XHJcbiAgICAgICAgdXBkYXRlQXJjR0lTTWFya2VyKHsgbGF0OiBsYXRpdHVkZSwgbG5nOiBsb25naXR1ZGUgfSwgc3RyZWV0Vmlld1Bhbm9yYW1hUmVmLmN1cnJlbnQ/LmdldFBvdigpPy5oZWFkaW5nID8/IDApXHJcbiAgICAgIH0pKClcclxuICAgIH0pXHJcblxyXG4gICAgLy8gRnVuw6fDo28gZGUgbGltcGV6YSBwYXJhIHJlbW92ZXIgb3Mgb3V2aW50ZXMgZGUgZXZlbnRvcyBxdWFuZG8gbyBjb21wb25lbnRlIGZvciBkZXNtb250YWRvXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoY2xpY2tIYW5kbGVyKSBjbGlja0hhbmRsZXIucmVtb3ZlKClcclxuICAgIH1cclxuICB9LCBbamltdU1hcFZpZXddKSAvLyBSZS1leGVjdXRhIGVzdGUgZWZlaXRvIHNlIGEgdmlzdWFsaXphw6fDo28gZG8gbWFwYSBtdWRhclxyXG5cclxuICBcclxuXHJcbiAgXHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgc2VyIGNoYW1hZGEgcXVhbmRvIGEgdmlzdWFsaXphw6fDo28gZG8gbWFwYSBBcmNHSVMgc2UgdG9ybmEgYXRpdmFcclxuICBjb25zdCBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgc2V0SmltdU1hcFZpZXcoam12KVxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG5cclxuXHJcbiAgLy8gUmVuZGVyaXphw6fDo28gZG8gY29tcG9uZW50ZVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zdHJlZXQtdmlldyBqaW11LXdpZGdldFwiPlxyXG4gICAgICB7LyogVmVyaWZpY2Egc2UgdW0gd2lkZ2V0IGRlIG1hcGEgZm9pIHNlbGVjaW9uYWRvICovfVxyXG4gICAgICB7IXByb3BzLnVzZU1hcFdpZGdldElkcyB8fCBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxwPlBvciBmYXZvciwgY29uZmlndXJlIHVtIHdpZGdldCBkZSBtYXBhIG5vIHBhaW5lbCBkZSBjb25maWd1cmHDp8O1ZXMuPC9wPlxyXG4gICAgICApIDogIWdldEdvb2dsZU1hcHNBcGlLZXkoKSB8fCBnZXRHb29nbGVNYXBzQXBpS2V5KCkgPT09ICdTVUFfQ0hBVkVfREVfQVBJX0FRVUknID8gKFxyXG4gICAgICAgIDxwPuKaoO+4jyBDaGF2ZSBkZSBBUEkgbsOjbyBjb25maWd1cmFkYS4gRWRpdGUgbyBhcnF1aXZvIGNvbmZpZy50cyBlIGNvbmZpZ3VyZSBzdWEgY2hhdmUgZGUgQVBJIGRvIEdvb2dsZSBNYXBzLjwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgey8qIENvbXBvbmVudGUgcXVlIGNvbmVjdGEgYW8gd2lkZ2V0IGRlIG1hcGEgZG8gQXJjR0lTICovfVxyXG4gICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0gfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17b25BY3RpdmVWaWV3Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgey8qIFN0cmVldCBWaWV3OiBpZnJhbWUgKHBhZHLDo28pIG91IGNvbnRhaW5lciBkYSBBUEkgKG9wY2lvbmFsKSAqL31cclxuICAgICAgICAgIHshRU5BQkxFX1NUUkVFVFZJRVdfQVBJICYmIGVtYmVkVXJsID8gKFxyXG4gICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAga2V5PXtgc3RyZWV0dmlldy0ke2NsaWNrZWRDb29yZGluYXRlcz8ubGF0fS0ke2NsaWNrZWRDb29yZGluYXRlcz8ubG5nfWB9XHJcbiAgICAgICAgICAgICAgc3JjPXtlbWJlZFVybH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiAxXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxyXG4gICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiR29vZ2xlIFN0cmVldCBWaWV3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiBFTkFCTEVfU1RSRUVUVklFV19BUEkgPyAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICByZWY9e3N0cmVldFZpZXdDb250YWluZXJSZWZ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIGxlZnQ6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiAxXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICBDbGlxdWUgbm8gbWFwYSBwYXJhIHZlciBvIFN0cmVldCBWaWV3LlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=