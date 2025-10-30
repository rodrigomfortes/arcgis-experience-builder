System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
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

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/measurement-enhanced/src/setting/setting.tsx ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



const Setting = (props) => {
    var _a, _b;
    const { useMapWidgetIds, config, id } = props;
    const onMapWidgetSelected = (ids) => {
        props.onSettingChange({
            id,
            useMapWidgetIds: ids
        });
    };
    const onToolToggle = (tool, value) => {
        props.onSettingChange({
            id,
            config: Object.assign(Object.assign({}, config), { tools: Object.assign(Object.assign({}, config.tools), { [tool]: value }) })
        });
    };
    const onSnapToggle = (value) => {
        props.onSettingChange({
            id,
            config: Object.assign(Object.assign({}, config), { angularSnap: value })
        });
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-demo", style: { padding: '16px' } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { marginBottom: '10px' } }, "Selecione uma camada"),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: useMapWidgetIds, onSelect: onMapWidgetSelected }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("hr", { style: { margin: '24px -16px', border: 'none', borderTop: '1px solid #ccc' } }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { marginBottom: '10px' } }, "Ferramentas ativas"),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: '12px' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, { checked: !!((_a = config === null || config === void 0 ? void 0 : config.tools) === null || _a === void 0 ? void 0 : _a.distance), onChange: e => onToolToggle('distance', e.target.checked) }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { marginLeft: '8px' } }, "Dist\u00E2ncia")),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: '12px' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, { checked: !!((_b = config === null || config === void 0 ? void 0 : config.tools) === null || _b === void 0 ? void 0 : _b.area), onChange: e => onToolToggle('area', e.target.checked) }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { marginLeft: '8px' } }, "\u00C1rea")),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("hr", { style: { margin: '24px -16px', border: 'none', borderTop: '1px solid #ccc' } }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", { style: { marginBottom: '10px' } }, "Snap Angular (\u00C2ngulos Fixos)"),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { style: { fontSize: '12px', color: '#666', marginBottom: '12px' } }, "Habilita o snap para for\u00E7ar as linhas de medi\u00E7\u00E3o a seguir \u00E2ngulos predefinidos: 90\u00B0, 45\u00B0 e 30\u00B0. Facilita o desenho ortogonal e angular."),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: '12px' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, { checked: !!(config === null || config === void 0 ? void 0 : config.angularSnap), onChange: e => onSnapToggle(e.target.checked) }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { marginLeft: '8px' } }, "Trava o cursor nos \u00E2ngulos 90\u00B0, 45\u00B0, 30\u00B0"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tZWFzdXJlbWVudC1lbmhhbmNlZC9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbEI7QUFFc0M7QUFDckM7QUFFbEMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFpQyxFQUFFLEVBQUU7O0lBQ3BELE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEtBQUs7SUFFN0MsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEdBQWEsRUFBRSxFQUFFO1FBQzVDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRTtZQUNGLGVBQWUsRUFBRSxHQUFHO1NBQ3JCLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUF5QixFQUFFLEtBQWMsRUFBRSxFQUFFO1FBQ2pFLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRTtZQUNGLE1BQU0sa0NBQ0QsTUFBTSxLQUNULEtBQUssa0NBQ0EsTUFBTSxDQUFDLEtBQUssS0FDZixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUss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QUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWVhc3VyZW1lbnQtZW5oYW5jZWQvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHsgTWFwV2lkZ2V0U2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdqaW11LXVpJ1xyXG5cclxuY29uc3QgU2V0dGluZyA9IChwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4pID0+IHtcclxuICBjb25zdCB7IHVzZU1hcFdpZGdldElkcywgY29uZmlnLCBpZCB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3Qgb25NYXBXaWRnZXRTZWxlY3RlZCA9IChpZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZCxcclxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiBpZHNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblRvb2xUb2dnbGUgPSAodG9vbDogJ2Rpc3RhbmNlJyB8ICdhcmVhJywgdmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkLFxyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICAuLi5jb25maWcsXHJcbiAgICAgICAgdG9vbHM6IHtcclxuICAgICAgICAgIC4uLmNvbmZpZy50b29scyxcclxuICAgICAgICAgIFt0b29sXTogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblNuYXBUb2dnbGUgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkLFxyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICAuLi5jb25maWcsXHJcbiAgICAgICAgYW5ndWxhclNuYXA6IHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctZGVtb1wiIHN0eWxlPXt7IHBhZGRpbmc6ICcxNnB4JyB9fT5cclxuICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlNlbGVjaW9uZSB1bWEgY2FtYWRhPC9oND5cclxuICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXHJcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt1c2VNYXBXaWRnZXRJZHN9XHJcbiAgICAgICAgb25TZWxlY3Q9e29uTWFwV2lkZ2V0U2VsZWN0ZWR9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8aHIgc3R5bGU9e3sgbWFyZ2luOiAnMjRweCAtMTZweCcsIGJvcmRlcjogJ25vbmUnLCBib3JkZXJUb3A6ICcxcHggc29saWQgI2NjYycgfX0gLz5cclxuXHJcbiAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5GZXJyYW1lbnRhcyBhdGl2YXM8L2g0PlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcxMnB4JyB9fT5cclxuICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgIGNoZWNrZWQ9eyEhY29uZmlnPy50b29scz8uZGlzdGFuY2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvblRvb2xUb2dnbGUoJ2Rpc3RhbmNlJywgZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnOHB4JyB9fT5EaXN0w6JuY2lhPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMTJweCcgfX0+XHJcbiAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICBjaGVja2VkPXshIWNvbmZpZz8udG9vbHM/LmFyZWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvblRvb2xUb2dnbGUoJ2FyZWEnLCBlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc4cHgnIH19PsOBcmVhPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcyNHB4IC0xNnB4JywgYm9yZGVyOiAnbm9uZScsIGJvcmRlclRvcDogJzFweCBzb2xpZCAjY2NjJyB9fSAvPlxyXG5cclxuICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlNuYXAgQW5ndWxhciAow4JuZ3Vsb3MgRml4b3MpPC9oND5cclxuICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjNjY2JywgbWFyZ2luQm90dG9tOiAnMTJweCcgfX0+XHJcbiAgICAgICAgSGFiaWxpdGEgbyBzbmFwIHBhcmEgZm9yw6dhciBhcyBsaW5oYXMgZGUgbWVkacOnw6NvIGEgc2VndWlyIMOibmd1bG9zIHByZWRlZmluaWRvczogOTDCsCwgNDXCsCBlIDMwwrAuIFxyXG4gICAgICAgIEZhY2lsaXRhIG8gZGVzZW5obyBvcnRvZ29uYWwgZSBhbmd1bGFyLlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzEycHgnIH19PlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgY2hlY2tlZD17ISFjb25maWc/LmFuZ3VsYXJTbmFwfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25TbmFwVG9nZ2xlKGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzhweCcgfX0+VHJhdmEgbyBjdXJzb3Igbm9zIMOibmd1bG9zIDkwwrAsIDQ1wrAsIDMwwrA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ1xyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9