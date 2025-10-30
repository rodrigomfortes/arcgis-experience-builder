System.register(["jimu-core","jimu-for-builder","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components","jimu-ui/basic/item-selector"],(function(e,t){var s={},a={},i={},o={},n={},r={},l={},c={};return{setters:[function(e){s.CONSTANTS=e.CONSTANTS,s.DataSourceManager=e.DataSourceManager,s.DataSourceStatus=e.DataSourceStatus,s.DataSourceTypes=e.DataSourceTypes,s.ExportFormat=e.ExportFormat,s.Immutable=e.Immutable,s.JimuFieldType=e.JimuFieldType,s.KEYBOARD_NAV_CLASS=e.KEYBOARD_NAV_CLASS,s.React=e.React,s.ReactRedux=e.ReactRedux,s.SessionManager=e.SessionManager,s.appConfigUtils=e.appConfigUtils,s.cancelablePromise=e.cancelablePromise,s.classNames=e.classNames,s.css=e.css,s.dataSourceUtils=e.dataSourceUtils,s.defaultMessages=e.defaultMessages,s.esri=e.esri,s.focusElementInKeyboardMode=e.focusElementInKeyboardMode,s.getAppStore=e.getAppStore,s.hooks=e.hooks,s.jsx=e.jsx,s.lodash=e.lodash,s.polished=e.polished,s.proxyUtils=e.proxyUtils,s.uuidv1=e.uuidv1},function(e){a.getAppConfigAction=e.getAppConfigAction},function(e){i.utils=e.utils},function(e){o.useTheme=e.useTheme,o.withTheme=e.withTheme},function(e){n.Button=e.Button,n.Checkbox=e.Checkbox,n.CollapsablePanel=e.CollapsablePanel,n.Dropdown=e.Dropdown,n.DropdownButton=e.DropdownButton,n.DropdownItem=e.DropdownItem,n.DropdownMenu=e.DropdownMenu,n.Icon=e.Icon,n.Label=e.Label,n.Link=e.Link,n.Loading=e.Loading,n.LoadingType=e.LoadingType,n.Modal=e.Modal,n.NumericInput=e.NumericInput,n.Popper=e.Popper,n.Radio=e.Radio,n.Switch=e.Switch,n.Tab=e.Tab,n.Tabs=e.Tabs,n.TextInput=e.TextInput,n.Tooltip=e.Tooltip,n.defaultMessages=e.defaultMessages},function(e){r.DataSourceErrorItem=e.DataSourceErrorItem,r.DataSourceIdCopyButton=e.DataSourceIdCopyButton,r.DataSourceItem=e.DataSourceItem,r.DataSourceRemoveWaringReason=e.DataSourceRemoveWaringReason,r.DataSourceRemoveWarningPopup=e.DataSourceRemoveWarningPopup,r.DataViewSettingPopup=e.DataViewSettingPopup,r.EditAcradePopup=e.EditAcradePopup,r.ExternalDataSourceSelector=e.ExternalDataSourceSelector,r.dataComponentsUtils=e.dataComponentsUtils},function(e){l.SettingRow=e.SettingRow,l.SettingSection=e.SettingSection,l.SidePopper=e.SidePopper},function(e){c.ItemDetail=e.ItemDetail}],execute:function(){e((()=>{var e={170:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707z" clip-rule="evenodd"></path></svg>'},904:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15.88 2.825a.5.5 0 0 0-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 1 0-.707.707l1.265 1.265a1 1 0 0 0 1.466-.056zm0 8a.5.5 0 0 0-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 1 0-.707.708l1.265 1.264a1 1 0 0 0 1.466-.056zM9 4.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5M8.5 13a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1z" clip-rule="evenodd"></path></svg>'},1027:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5m-9 0a3.5 3.5 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5M15.5 11l-5 1-3 4-1-9.5zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38z" clip-rule="evenodd"></path></svg>'},1496:e=>{"use strict";e.exports=i},1888:e=>{"use strict";e.exports=o},1935:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.986 1a6.99 6.99 0 0 1 5.723 2.969l-2.551-.938a.5.5 0 1 0-.345.938l4.228 1.555.163-.944.013-.005-.009-.019.6-3.471a.5.5 0 1 0-.985-.17l-.403 2.33A8 8 0 0 0 0 7.5c-.016.277.21.501.486.501a.53.53 0 0 0 .517-.5A7 7 0 0 1 7.986 1M8.015 15a6.99 6.99 0 0 1-5.724-2.969l2.551.938a.497.497 0 0 0 .642-.296.5.5 0 0 0-.297-.642L.96 10.476l-.163.944-.013.005.009.019-.6 3.471a.5.5 0 1 0 .985.17l.403-2.33A8 8 0 0 0 16 8.5a.477.477 0 0 0-.485-.501.53.53 0 0 0-.518.5A7 7 0 0 1 8.015 15"></path></svg>'},3089:e=>{"use strict";e.exports=r},3303:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.438.994c.213 0 .397.146.44.35q.227 1.084.316 1.852.562.242 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 22 22 0 0 1-1.49 1.194q.03.27.03.552 0 .32-.038.63l1.465 1.12a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 23 23 0 0 1-1.807-.66q-.49.35-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21 21 0 0 1-.317-1.853 5.3 5.3 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546q.85-.735 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196q1.078.35 1.807.66c.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994zm-.365 1H6.985l-.28 1.866-.467.19q-.353.144-.672.34l-.207.136-.42.293-.476-.197q-.492-.205-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4 4 0 0 0-.021.816l.014.144.058.492-.419.294q-.433.304-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29q.307.219.645.384l.228.103.474.199.059.49q.06.507.19 1.177l.043.219h2.088l.282-1.867.466-.19q.354-.144.672-.34l.207-.136.419-.293.476.198q.495.204 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4 4 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18 18 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.5 4.5 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49q-.049-.405-.14-.916zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clip-rule="evenodd"></path></svg>'},3662:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},3800:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M0 0h16v16H0z" opacity=".01"></path><path fill="#000" fill-rule="evenodd" d="m9.603 3-4.175 9.642.97.358 4.174-9.642zm1.897 8.233-.738-.681L13.524 8l-2.762-2.552.738-.681L15 8zm-7-6.466.738.681L2.476 8l2.762 2.552-.738.681L1 8z" clip-rule="evenodd"></path></svg>'},4108:e=>{"use strict";e.exports=a},4186:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M4 4h2.5v1H4a3 3 0 0 0 0 6h2.5v1H4a4 4 0 1 1 0-8M12 11H9.5v1H12a4 4 0 1 0 0-8H9.5v1H12a3 3 0 0 1 0 6"></path><path fill="#000" d="M5.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></path></svg>'},4321:e=>{"use strict";e.exports=n},4651:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"></path></svg>'},4992:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.497 7c.277 0 .501-.224.502-.5v-.001A.5.5 0 0 0 14.5 6h-12l2.604-3.135a.528.528 0 0 0-.805-.682L1.243 5.718A1 1 0 0 0 1 6.372V6.5a.5.5 0 0 0 .5.5zM1.503 9c-.277 0-.501.224-.502.5v.001c0 .276.224.499.499.499h12l-2.604 3.135a.528.528 0 0 0 .805.682l3.056-3.535A1 1 0 0 0 15 9.628V9.5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></path></svg>'},5508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},6340:e=>{"use strict";e.exports=c},6490:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8M13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97"></path><path fill="#000" d="M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828z"></path></svg>'},6572:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15.29 6.208 8 1 .71 6.208a.5.5 0 1 0 .58.813L2 6.515V15h12V6.514l.71.507a.5.5 0 0 0 .58-.813M13 5.8 8 2.229 3 5.8V14h3v-4h4v4h3zM9 14H7v-3h2z" clip-rule="evenodd"></path></svg>'},7568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},7964:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 4.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5M16 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5M5.146 2.12a.5.5 0 0 1 .055.705l-2.324 2.71a1 1 0 0 1-1.466.057L.146 4.327a.5.5 0 0 1 .708-.707l1.264 1.265 2.323-2.71a.5.5 0 0 1 .705-.055M5.146 10.12a.5.5 0 0 1 .055.705l-2.324 2.71a1 1 0 0 1-1.466.057L.146 12.328a.5.5 0 1 1 .708-.708l1.264 1.265 2.323-2.71a.5.5 0 0 1 .705-.055" clip-rule="evenodd"></path></svg>'},8996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},9244:e=>{"use strict";e.exports=s},9298:e=>{"use strict";e.exports=l},9524:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.5a.5.5 0 0 1 1 0v2.8a.5.5 0 0 1-1 0zm6.028.874a.5.5 0 0 1 .062.705l-1.414 1.685a.5.5 0 1 1-.766-.643l1.414-1.685a.5.5 0 0 1 .704-.062m-10.352.062a.5.5 0 1 0-.766.643l1.414 1.685a.5.5 0 0 0 .766-.643zM6.244 10.6H5.43zM.961 9.8h4.88c.211 0 .359.19.359.4q0 .207.045.4a1.8 1.8 0 0 0 3.51 0h.814a2.6 2.6 0 0 1-5.139 0H.8v3.6h14.4v-3.6H9.755q.045-.194.045-.4c0-.21.148-.4.358-.4h4.881l-2.267-3.4H3.228zm11.81-4.2a.8.8 0 0 1 .666.356l2.429 3.642a.8.8 0 0 1 .134.444V14.2a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8v-4.158a.8.8 0 0 1 .134-.444l2.429-3.642a.8.8 0 0 1 .665-.356z" clip-rule="evenodd"></path></svg>'}},t={};function p(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,p),i.exports}p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},p.d=(e,t)=>{for(var s in t)p.o(t,s)&&!p.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.p="";var d={};return p.p=window.jimuConfig.baseUrl,(()=>{"use strict";p.r(d),p.d(d,{__set_webpack_public_path__:()=>At,default:()=>Tt});var e=p(9244),t=p(4321),s=p(9298),a=p(3089),i=p(6340),o=p(4108),n=p(1496);const r="-$";function l(t,s){const i=m(t);if(!i)return null;let o;if(t.isDataSourceSet()){o={childSchemas:{}};const n=function(){const t=function(){const t=e.appConfigUtils.getAllWidgets(a.dataComponentsUtils.getAppConfig()).filter((e=>{var t;return null===(t=e.useDataSourcesEnabled)||void 0===t||t}));return c(t)}(),s=function(){const e=a.dataComponentsUtils.getAppConfig(),t=e&&e.messageConfigs?Object.keys(e.messageConfigs).map((t=>e.messageConfigs[t])):[];let s=[];t.forEach((e=>{e.actions&&(s=s.concat(e.actions.asMutable()))}));return c(s)}(),i=function(){const e=a.dataComponentsUtils.getAppConfig(),t=e&&e.dataSources;let s=[];return t&&Object.keys(t).forEach((e=>{t[e]&&!t[e].isOutputFromWidget&&t[e].originDataSources&&t[e].originDataSources.length>0&&(s=s.concat(t[e].originDataSources.asMutable().map((e=>e.dataSourceId))))})),s}(),o=t.concat(s).concat(i);return Array.from(new Set(o))}();Object.keys(i.childSchemas).filter((e=>n.some((s=>t.getChildDataSourceId(e)===s)))).forEach((e=>{o.childSchemas[e]=Object.assign({},l(t.getChildDataSource(e),s))}))}else{o=Object.assign(Object.assign({},m(t)),{fields:{}});const n=function(t){var s;if(!t)return[];const i=t.getDataSourceJson()&&t.getDataSourceJson().useFields&&t.getDataSourceJson().useFields.asMutable()||[],o=function(t){if(!t)return[];const s=a.dataComponentsUtils.getOutputDssFromOriginDs(t).map((s=>function(t,s){if(!s||!t)return[];const i=function(t){const s=e.appConfigUtils.getAllWidgets(a.dataComponentsUtils.getAppConfig()).filter((e=>{var t;return null===(t=e.useDataSourcesEnabled)||void 0===t||t}));return function(e,t){if(!e)return[];let s=[];return e.forEach((e=>{e.useDataSources&&e.useDataSources.forEach((e=>{e.fields&&e.mainDataSourceId&&e.mainDataSourceId===t&&(s=s.concat(e.fields))}))})),s}(s,t)}(s.id),o=s.getSchema(),n=o&&o.fields;let r,l,c,p=[];return i.forEach((e=>{r=n[e],l=r&&r.originFields&&r.originFields.asMutable()||[],l.length>0?(c=l.some((e=>e.split(`${t.id}.`).length>1)),c&&(l=l.filter((e=>e.split(`${t.id}.`).length>1)).map((e=>e.split(`${t.id}.`)[1])))):l=[e],p=p.concat(l)})),p}(t,s))),i=Array.prototype.concat.apply([],s);return Array.from(new Set(i))}(t),n=t.getConfigUsedFields(),r=t.getAllDerivedDataSources().reduce(((e,s)=>{var a;const i=s.getConfigUsedFields();return"*"===i?Object.keys((null===(a=t.getSchema())||void 0===a?void 0:a.fields)||{}):e.concat(i)}),"*"===n?Object.keys((null===(s=t.getSchema())||void 0===s?void 0:s.fields)||{}):n),l=i.concat(o).concat(r);return Array.from(new Set(l))}(t);i.fields&&Object.keys(i.fields).filter((e=>n.some((t=>e===t)))).forEach((e=>{o.fields[e]=Object.assign({},i.fields[e]),"function"==typeof s&&(o.fields[e]=s(o.fields[e]))}))}return o}function c(e){if(!e)return[];let t=[];return e.forEach((e=>{e.useDataSources&&e.useDataSources.forEach((e=>{t=t.concat(e.dataSourceId)}))})),t}function h(e,t){return!(!e||!t)&&(u(e)?Object.keys(e.childSchemas).every((s=>h(e.childSchemas[s],t.childSchemas[s]))):e.fields&&Object.keys(e.fields).every((e=>!(!t.fields||!t.fields[e]))))}function u(e){return!!e&&!!e.childSchemas}function m(e){return e&&e.getSchema?e.getSchema():null}function g(t,s,a){let i=s.merge({});return i=i.set("id",t.id),i=i.set("schema",(0,e.Immutable)(a)),i}function f(e){const t=[];return e&&e.id&&e.getDataSourceJson()&&e.isDataSourceSet()&&S(e,t),t}function S(e,t){e.isDataSourceSet()&&e.getChildDataSources().forEach((e=>{e&&e.getDataSourceJson()&&e.id&&(t.push(e),S(e,t))}))}function v(e,t,s){let a={};if(!e||!t)return e&&u(e)&&(a.childSchemas={}),a;if(u(e)&&u(t)){let i,o;a={childSchemas:{}},Object.keys(e.childSchemas).forEach((n=>{i=e.childSchemas[n].childId,o=s&&s.childSchemas&&s.childSchemas[n],a.childSchemas[n]=t.childSchemas[i]?v(e.childSchemas[n],t.childSchemas[i],o):null}))}else u(e)||u(t)?console.error("types of data sources are not matched"):a=Object.assign(Object.assign({},t),{fields:D(e,t,s),jimuChildId:e.jimuChildId});return a}function D(e,t,s){const a={};if(!(e&&e.fields&&t&&t.fields))return a;let i,o,n,r;return Object.keys(e.fields).forEach((l=>{n=e.fields[l],i=n.jimuName,o=n.name,r=t.fields[o],r&&r.esriFieldType===n.esriFieldType&&(a[i]=x(n,r,s))})),a}function x(e,t,s){let a;return s&&s.fields&&s.fields[e.jimuName]?(a=s.asMutable({deep:!0}).fields[e.jimuName],a.name=t.name):(a=function(e){if(!e)return null;const t=Object.assign({},e);t.alias&&delete t.alias;return t}(Object.assign({},t)),a.jimuName=e.jimuName),a}function w(e,t){return!!(e&&t&&t.childSchemas)&&Object.keys(t.childSchemas).some((s=>t.childSchemas[s].childId===e))}function y(e,t){if(!e||!t)return null;const s=Object.assign({},e),a=t.jimuChildId,i=t.childId;let o,n,l,c;return function(e,t){return!!(e&&t&&t.childSchemas)&&Object.keys(t.childSchemas).some((t=>t===e))}(a,e)&&!w(i,e)&&(o=`${a}${r}${function(e,t){let s,a=0;if(!t||!e)return a;const i=e.split(r)[0];return Object.keys(t.childSchemas).forEach((e=>{s=e.split(r)||[],s.length>1&&s[0]===i&&parseInt(s[1])>a&&(a=parseInt(s[1]))})),a+1}(a,e)}`,n=u(t)?Object.assign(Object.assign({},t),{jimuChildId:o}):Object.assign(Object.assign({},t),{fields:{},jimuChildId:o}),s.childSchemas[o]=v(n,n,null)),c=Object.keys(e.childSchemas).filter((t=>e.childSchemas[t].childId===i)),c.forEach((a=>{l=e.childSchemas[a],l&&(u(t)&&u(l)?Object.keys(t.childSchemas).forEach((e=>{s.childSchemas[a]=y(l,t.childSchemas[e])})):u(t)||u(l)?console.error("types of data sources are not matched"):Object.keys(t.fields).forEach((e=>{s.childSchemas[a]=b(l,t.fields[e])})))})),s}function b(e,t){const s=Object.assign({},e),a=t.jimuName;let i,o;var n,l;return!function(e,t){return!!(e&&t&&t.fields)&&!!t.fields[e]}(a,s)||(n=t.name,l=s,n&&l&&l.fields&&Object.keys(l.fields).some((e=>l.fields[e].name===n)))||(i=`${a}${r}${function(e,t){let s,a=0;if(!t||!t.fields)return a;const i=e.split(r)[0];return Object.keys(t.fields).forEach((e=>{s=t.fields[e].jimuName?t.fields[e].jimuName.split(r):[],s.length>1&&s[0]===i&&parseInt(s[1])>a&&(a=parseInt(s[1]))})),a+1}(a,s)}`,o=Object.assign(Object.assign({},t),{jimuName:i}),s.fields[i]=x(o,o,null)),s}function R(e){return Object.keys(e).sort(((e,t)=>null==e?void 0:e.localeCompare(t)))}function M(e,t,s){const a=l(t),i=m(e);return w(i.childId,a)?Object.keys(a.childSchemas).filter((e=>a.childSchemas[e].childId!==i.childId)).every((e=>s.some((t=>m(t).childId===a.childSchemas[e].childId)))):(console.warn("data source is not child of ",t),!1)}function E(e){return e.getDataSourceJson().itemId||m(e)&&m(e).childId}function O(e,t){let s=[];return(null==e?void 0:e.length)>0&&e.forEach((e=>{a.dataComponentsUtils.isFuzzySearch(null==e?void 0:e.getLabel(),t)&&(s=s.concat(e)),(null==e?void 0:e.isDataSourceSet())&&(s=s.concat(O(e.getChildDataSources(),t)))})),s}function C(t,s){var i;const r=null===(i=n.utils.getAppConfig())||void 0===i?void 0:i.widgets;return 0===a.dataComponentsUtils.getWidgetsUsingDsOrItsDescendantDss(t,r).length?((0,o.getAppConfigAction)().removeDataSource(t).exec(),e.DataSourceManager.getInstance().destroyDataSource(t),!0):(s(t),!1)}function N(t,s){t&&s&&Object.keys(t).forEach((a=>{var i,o,n,r;const l=s.find((e=>`${e.id}`===a));l||delete t[a];const c=[e.DataSourceTypes.GroupLayer,e.DataSourceTypes.SubtypeGroupLayer,e.DataSourceTypes.MapService],p=null===(i=t[a])||void 0===i?void 0:i.type;(null===(o=t[a])||void 0===o?void 0:o.childDataSourceJsons)&&(c.includes(p)||p===e.DataSourceTypes.MapService&&(null===(n=l.layers)||void 0===n?void 0:n.length))&&N(null===(r=t[a])||void 0===r?void 0:r.childDataSourceJsons,l.layers)}))}class I extends e.React.PureComponent{constructor(t){super(t),this.onRemove=e=>{var t,s,a;e.stopPropagation(),e.nativeEvent.stopImmediatePropagation();const i=C(null===(t=this.props.dsJson)||void 0===t?void 0:t.id,this.openRemoveWarningPopup);this.props.onRemoveItem&&this.props.onRemoveItem(null===(s=this.props.dsJson)||void 0===s?void 0:s.id),i&&this.props.toggle(null===(a=this.props.dsJson)||void 0===a?void 0:a.id)},this.onRename=e=>{var t,s;e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.props.onRenameItem&&this.props.onRenameItem(null===(t=this.props.dsJson)||void 0===t?void 0:t.id),this.props.toggle(null===(s=this.props.dsJson)||void 0===s?void 0:s.id)},this.openRemoveWarningPopup=()=>{this.setState({isRemoveDsWarningOpen:!0})},this.closeRemoveWarningPopup=()=>{this.setState({isRemoveDsWarningOpen:!1})},this.toggleMoreOptions=()=>{var e;this.closeRemoveWarningPopup(),this.props.toggle(null===(e=this.props.dsJson)||void 0===e?void 0:e.id)},this.getStyle=t=>e.css`
      .ds-more-options{
        position: fixed;
        background-color: ${t.sys.color.secondary.main};
        color: ${t.ref.palette.neutral[1200]};
        z-index: 3;
        user-select: none;
        font-size: 13px;
        border: 1px solid ${t.ref.palette.neutral[600]};
        box-shadow: 0 0 6px 0 ${e.polished.rgba(t.ref.palette.white,.2)};
        margin-left: ${e.polished.rem(-32)};
        border-radius: 2px;
        .ds-more-option{
          word-wrap: break-word;
          white-space: nowrap;
          line-height: ${e.polished.rem(26)};
          border-bottom: 1px;
          border-radius: 0;
          width: 100%;
          cursor: pointer;
          padding-left: 12px;
          padding-right: 12px;
        }
        .ds-more-option:hover{
          background-color: ${t.sys.color.primary.main};
        }
        .ds-more-option:active.ds-more-option:hover{
          background-color: ${t.sys.color.primary.main};
        }
      }
    `,this.state={isRemoveDsWarningOpen:!1,selectedWidgets:[]}}render(){var s;return this.props.reference&&this.props.dsJson?(0,e.jsx)(t.Popper,{css:this.getStyle(this.props.theme),reference:this.props.reference,open:this.props.isOpen,placement:"right-start",offsetOptions:this.props.offset||[25,0],toggle:this.toggleMoreOptions},(0,e.jsx)("div",{className:"ds-more-options py-2"},!this.props.isRenameHidden&&(0,e.jsx)(t.Button,{type:"tertiary",className:"ds-more-option py-0",onClick:this.onRename},this.props.intl.formatMessage({id:"rename",defaultMessage:t.defaultMessages.rename})),!this.props.isRemoveHidden&&(0,e.jsx)(t.Button,{type:"tertiary",className:"ds-more-option py-0",onClick:this.onRemove},this.props.intl.formatMessage({id:"remove",defaultMessage:t.defaultMessages.remove})),(0,e.jsx)(a.DataSourceRemoveWarningPopup,{dataSourceId:null===(s=this.props.dsJson)||void 0===s?void 0:s.id,isOpen:this.state.isRemoveDsWarningOpen,onCancel:this.toggleMoreOptions,toggle:this.closeRemoveWarningPopup,reason:a.DataSourceRemoveWaringReason.DataSourceRemoved,afterRemove:this.toggleMoreOptions}))):null}}const j=[];class k extends e.React.PureComponent{constructor(t){super(t),this.handleFocus=()=>{setTimeout((()=>{var t,s;if(null===(s=null===(t=document.body)||void 0===t?void 0:t.classList)||void 0===s?void 0:s.contains(e.KEYBOARD_NAV_CLASS)){const t=document.querySelector(`.list-item-${this.index} .data-source-item-more-button`);if(t)return void(0,e.focusElementInKeyboardMode)(t,!0);const s=document.querySelector(`.list-item-${this.index+1} .data-source-item-more-button`);if(s)return void(0,e.focusElementInKeyboardMode)(s,!0);const a=document.querySelector(`.list-item-${this.index-1} .data-source-item-more-button`);if(a)return void(0,e.focusElementInKeyboardMode)(a,!0);(0,e.focusElementInKeyboardMode)(document.querySelector(".data-setting-add-data-button"),!0)}}))},this.clearRemovedChildDataSourcesFromDataSourceJson=()=>{var t;if(!(null===(t=this.props.ds)||void 0===t?void 0:t.map)||j.includes(this.props.ds.id))return;j.push(this.props.ds.id);const s=this.props.ds.getDataSourceJson(),a=this.props.ds.map.resourceInfo;if(!(null==s?void 0:s.childDataSourceJsons)||!(null==a?void 0:a.operationalLayers))return;const i=(a.operationalLayers||[]).concat(a.tables||[]),n=s.childDataSourceJsons.asMutable({deep:!0});N(n,i),e.lodash.isDeepEqual(s.childDataSourceJsons,n)||(0,o.getAppConfigAction)().editDataSource(s.set("childDataSourceJsons",n)).exec()},this.onOpenRenameInput=()=>{this.setState({isRenameShown:!0})},this.toggleMoreOptions=()=>{this.props.toggleMoreOptions&&this.props.toggleMoreOptions(this.props.ds.id)},this.onChildDataIconClick=()=>{this.props.onChildDataIconClick&&this.props.onChildDataIconClick(this.props.ds)},this.onRelatedWidgetsIconClick=()=>{this.props.onRelatedWidgetsIconClick&&this.props.onRelatedWidgetsIconClick(this.props.ds)},this.onRename=e=>{if(!e)return void this.setState({isRenameShown:!1});const t=this.props.ds.getDataSourceJson().setIn(["label"],e),s=a.dataComponentsUtils.editDataSourceJson(t);(0,o.getAppConfigAction)().editDataSource(s).exec(),this.setState({isRenameShown:!1})},this.onDataSourceItemClick=()=>{this.props.onDataSourceItemClick(this.props.ds)},this.onMappingIconClick=()=>{this.props.onMappingIconClick(this.props.ds)},this.state={isRenameShown:!1},this.index=k.count,k.count++}componentDidMount(){this.clearRemovedChildDataSourcesFromDataSourceJson()}componentDidUpdate(e){var t,s;(null===(t=this.props.ds)||void 0===t?void 0:t.id)!==(null===(s=e.ds)||void 0===s?void 0:s.id)&&this.clearRemovedChildDataSourcesFromDataSourceJson(),e.isMoreOptionsShown&&!this.props.isMoreOptionsShown&&this.handleFocus()}componentWillUnmount(){this.handleFocus()}render(){if(!this.props.ds)return null;const t=!this.props.ds.parentDataSource;return e.React.createElement("div",{className:`m-4 list-item list-item-${this.index}`,ref:e=>{this.rootDom=e}},e.React.createElement(a.DataSourceItem,{dataSourceJson:this.props.ds.getDataSourceJson().merge({label:this.props.ds.getLabel()}),isMappingIconShown:!1,onDataSourceItemClick:this.onDataSourceItemClick,isMoreIconShown:t,isRenameInputShown:this.state.isRenameShown&&t,isRelatedWidgetsShown:!0,onMoreIconClick:this.toggleMoreOptions,onMappingIconClick:this.onMappingIconClick,onRename:this.onRename,onChildDataIconClick:this.onChildDataIconClick,onRelatedWidgetsIconClick:this.onRelatedWidgetsIconClick,onToggleHidden:this.props.onToggleHidden,isHideable:this.props.isHideable,isCopyIdIconShown:!0}),e.React.createElement(I,{isOpen:this.props.isMoreOptionsShown,reference:this.rootDom,intl:this.props.intl,dsJson:this.props.ds&&this.props.ds.getDataSourceJson(),onRenameItem:this.onOpenRenameInput,theme:this.props.theme,toggle:this.toggleMoreOptions}))}}k.count=0;const T=e.ReactRedux.connect(((e,t)=>{var s;return{dataSourceJson:null===(s=t.ds)||void 0===s?void 0:s.getDataSourceJson()}}))(k);class A extends e.React.PureComponent{constructor(t){super(t),this.toggleMoreOptions=()=>{this.props.toggleMoreOptions&&this.props.toggleMoreOptions(this.props.dsJson.id)},this.onRemoveItem=()=>{var e;C(null===(e=this.props.dsJson)||void 0===e?void 0:e.id,this.openRemoveWarningPopup)},this.openRemoveWarningPopup=()=>{this.setState({isRemoveDsWarningOpen:!0})},this.closeRemoveWarningPopup=()=>{this.setState({isRemoveDsWarningOpen:!1})},this.getIsLoading=()=>{if(!this.props.dsInfo)return!1;if(this.props.dsInfo.instanceStatus===e.DataSourceStatus.CreateError)return!1;if(this.props.dsInfo.instanceStatus===e.DataSourceStatus.Created){const t=e.DataSourceManager.getInstance().getDataSource(this.props.dsJson.id);return!!(null==t?void 0:t.isDataSourceSet())&&!t.areChildDataSourcesCreated()}return!0},this.getNoPermissionResourceInfoForDsItem=()=>{const t=e.SessionManager.getInstance().getNoPermissionResourceInfoList()||{},s=Object.keys(t).find((e=>{var t,s;return(null===(t=this.props.dsJson.url)||void 0===t?void 0:t.includes(e))||(null===(s=this.props.dsJson.portalUrl)||void 0===s?void 0:s.includes(e))||(null==e?void 0:e.includes(this.props.dsJson.itemId))}));return s?{url:s,info:t[s]}:null},this.allowSignIn=()=>{var e,t;return!!(null===(t=null===(e=this.getNoPermissionResourceInfoForDsItem())||void 0===e?void 0:e.info)||void 0===t?void 0:t.allowSignIn)},this.isInNoPermissionResourceInfoList=()=>{var e;return!!(null===(e=this.getNoPermissionResourceInfoForDsItem())||void 0===e?void 0:e.info)},this.tryToLogin=()=>{var t,s;const a=this.getNoPermissionResourceInfoForDsItem(),i=(null===(t=this.props.dsJson.url)||void 0===t?void 0:t.includes(null==a?void 0:a.url))?this.props.dsJson.url:this.props.dsJson.portalUrl;e.SessionManager.getInstance().signInByResourceUrl(i,null===(s=null==a?void 0:a.info)||void 0===s?void 0:s.owningSystemUrl,!0)},this.isError=()=>{var t,s;return(null===(t=this.props.dsInfo)||void 0===t?void 0:t.instanceStatus)===e.DataSourceStatus.CreateError||(null===(s=this.props.dsJson)||void 0===s?void 0:s.type)===e.DataSourceTypes.Error},this.state={isRemoveDsWarningOpen:!1,isLoading:this.getIsLoading()}}componentDidUpdate(e,t){e.dsInfo!==this.props.dsInfo&&this.setState({isLoading:this.getIsLoading()}),this.props.onLoaded&&t.isLoading&&!this.state.isLoading&&this.props.onLoaded(this.props.dsJson)}render(){var t,s;if(!this.props.dsJson)return null;const i=this.isError(),o=this.allowSignIn(),n=o?"signInErrorEnterCredential":this.isInNoPermissionResourceInfoList()?"signInErrorCannotEnterCredential":null,r=n&&this.props.intl.formatMessage({id:n,defaultMessage:e.defaultMessages[n]}),l=!e.dataSourceUtils.getRootDataSourceId(this.props.dsJson.id);return e.React.createElement("div",{className:"m-4 list-item list-error-item",ref:e=>{this.rootDom=e}},e.React.createElement(a.DataSourceErrorItem,{dataSourceJson:this.props.dsJson,isErrorIconShown:i,isMoreIconShown:i&&!(null===(t=e.DataSourceManager.getInstance().getDataSource(this.props.dsJson.id))||void 0===t?void 0:t.getRootDataSource()),isLoadingShown:this.state.isLoading,isCloseIconShown:this.state.isLoading&&l,isRelatedWidgetsShown:!0,isHideable:this.props.isHideable,onToggleHidden:this.props.onToggleHidden,errorTitle:r,isCopyIdIconShown:!0,onCloseIconClick:this.onRemoveItem,onMoreIconClick:this.toggleMoreOptions,onDataSourceItemClick:o&&this.tryToLogin}),e.React.createElement(I,{isOpen:this.props.isMoreOptionsShown,reference:this.rootDom,intl:this.props.intl,dsJson:this.props.dsJson,isRenameHidden:!0,theme:this.props.theme,toggle:this.toggleMoreOptions}),e.React.createElement(a.DataSourceRemoveWarningPopup,{dataSourceId:null===(s=this.props.dsJson)||void 0===s?void 0:s.id,isOpen:this.state.isRemoveDsWarningOpen,toggle:this.closeRemoveWarningPopup,reason:a.DataSourceRemoveWaringReason.DataSourceRemoved}))}}const P=e.ReactRedux.connect(((t,s)=>{var a,i,o,n;const r=(null===(a=null===window||void 0===window?void 0:window.jimuConfig)||void 0===a?void 0:a.isBuilder)?t.appStateInBuilder:t;return{dsInfo:null===(i=null==r?void 0:r.dataSourcesInfo)||void 0===i?void 0:i[null===(o=s.dsJson)||void 0===o?void 0:o.id],areChildDssSettled:!Object.keys(null!==(n=null==r?void 0:r.dataSourcesInfo)&&void 0!==n?n:{}).some((t=>{var a;return t.startsWith((null===(a=s.dsJson)||void 0===a?void 0:a.id)+"-")&&r.dataSourcesInfo[t].instanceStatus===e.DataSourceStatus.NotCreated}))}}))(A),L={createFailedWarning:"Failed to create data!",noSupportedDataSource:"No supported data available.",noUsedFieldToMap:"No in use fields need to be mapped.",noChildDssToMap:"No child data needs to be mapped.",noUsedField:"No used field",noLayer:"No layer",noDataNotice:"No data in the experience.<br/>Please add your data.",noDataViewNotice:'Click the "Create a view" button to add a view.',dataViewIsNotSupportedNotice:"Data views are not supported because the layer does not include attribute information.",dataViews:"Data views",originalDsLabel:"Source",autoRefresh:"Auto refresh",updateMinutesAgo:"Last update: {minutes} minutes ago",updateOneMinuteAgo:"Last update: a minute ago",updateSecondsAgo:"Last update: a few seconds ago",refreshSetting:"Refresh settings",interval:"Interval",honorLayer:"Honor layer's settings",minutes:"minutes",allowExport:"Allow export",exportNotice:"For hosted feature layers, the app will also verify that the end user's role and item settings allow exporting the data.",related:"Related",esriRelCardinalityOneToOne:"One to one",esriRelCardinalityOneToMany:"One to many",esriRelCardinalityManyToMany:"Many to many",exportSettings:"Export settings",maximumExport:"Maximum export",searchPlaceholder:"Search",formatOptions:"Format options",exportSelectLayers:"Select layers",exportSettingsApplyAllTip:"These settings will be applied to all layers.",exportSettingsApplySelectedTip:"These settings will be applied to selected layers."};var H=p(9524),J=p.n(H),V=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const $=t=>{const s=window.SVG,{className:a}=t,i=V(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:J()},i)):e.React.createElement("svg",Object.assign({className:o},i))},W=class extends e.React.PureComponent{constructor(t){super(t),this.getInUseAndOthers=()=>{const t={hidden:[],visible:[],error:[]},s={hidden:[],visible:[],error:[]};return this.state.childDataSources&&this.state.childDataSources.forEach((i=>{var o,n;i&&i.id&&(a.dataComponentsUtils.getWidgetsUsingDsOrItsViews(i.id,this.props.widgets,!1).length>0?i.type===e.DataSourceTypes.Error?t.error.push(i):(null===(o=null==i?void 0:i.getDataSourceJson())||void 0===o?void 0:o.isHidden)?t.hidden.push(i):t.visible.push(i):i.type===e.DataSourceTypes.Error?s.error.push(i):(null===(n=null==i?void 0:i.getDataSourceJson())||void 0===n?void 0:n.isHidden)?s.hidden.push(i):s.visible.push(i))})),{inUseDss:t,otherDss:s}},this.onToggleHidden=e=>{if(!e)return;const t=!e.isHidden;let s=e.setIn(["isHidden"],t);t||(s=this.traverseUnhideChildDss(s));const i=a.dataComponentsUtils.editDataSourceJson(s);(0,o.getAppConfigAction)().editDataSource(i).exec()},this.traverseUnhideChildDss=e=>{if(!e)return;let t=e;return t=t.setIn(["isHidden"],!1),e.childDataSourceJsons&&Object.keys(e.childDataSourceJsons).forEach((e=>{t=t.setIn(["childDataSourceJsons",e],this.traverseUnhideChildDss(t.getIn(["childDataSourceJsons",e])))})),t},this.state={isMapping:!1,childDataSources:null}}componentDidMount(){this.props.ds&&this.setState({childDataSources:this.props.ds.isDataSourceSet()&&this.props.ds.getChildDataSources()})}componentDidUpdate(e,t){e.ds===this.props.ds&&e.areAllChildDssCreated===this.props.areAllChildDssCreated||(this.props.ds?this.setState({childDataSources:this.props.ds.isDataSourceSet()&&this.props.ds.getChildDataSources()}):this.setState({childDataSources:null}))}render(){if(!this.props.ds)return e.React.createElement("div",{className:"m-2"},this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:L.noSupportedDataSource}));const s=this.getInUseAndOthers();return 0===s.inUseDss.visible.length&&0===s.inUseDss.hidden.length&&0===s.inUseDss.error.length&&0===s.otherDss.visible.length&&0===s.otherDss.hidden.length&&0===s.otherDss.error.length?e.React.createElement("div",{className:"empty-placeholder w-100"},e.React.createElement("div",{className:"empty-placeholder-icon"},e.React.createElement($,{size:48})),e.React.createElement("div",{className:"empty-placeholder-text",dangerouslySetInnerHTML:{__html:this.props.intl.formatMessage({id:"noLayer",defaultMessage:L.noLayer})}})):e.React.createElement(e.React.Fragment,null,s.inUseDss.visible.length>0||s.inUseDss.hidden.length>0||s.inUseDss.error.length>0?e.React.createElement("div",null,e.React.createElement("h5",{className:"m-4 data-setting-secondary-title"},this.props.intl.formatMessage({id:"inUse",defaultMessage:t.defaultMessages.inUse})),e.React.createElement("div",null,s.inUseDss.visible.sort(((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order))).map(((t,s)=>t&&t.id?e.React.createElement(T,{ds:t,key:s,onDataSourceItemClick:this.props.onDataSourceItemClick,intl:this.props.intl,theme:this.props.theme,isHideable:!1,onChildDataIconClick:this.props.onChildDataIconClick,onRelatedWidgetsIconClick:this.props.onRelatedWidgetsIconClick,onToggleHidden:this.onToggleHidden}):null)),s.inUseDss.hidden.sort(((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order))).map(((t,s)=>t&&t.id?e.React.createElement(P,{dsJson:t.getDataSourceJson(),key:s,intl:this.props.intl,theme:this.props.theme,isHideable:!1,onToggleHidden:this.onToggleHidden}):null)),s.inUseDss.error.sort(((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order))).map(((t,s)=>t&&t.id?e.React.createElement(P,{dsJson:t.getDataSourceJson(),key:s,intl:this.props.intl,theme:this.props.theme,isHideable:!1,onToggleHidden:this.onToggleHidden}):null)))):null,s.otherDss.visible.length>0||s.otherDss.hidden.length>0||s.otherDss.error.length>0?e.React.createElement("div",null,(s.inUseDss.visible.length>0||s.inUseDss.hidden.length>0)&&e.React.createElement("h5",{className:"m-4 data-setting-secondary-title"},this.props.intl.formatMessage({id:"others",defaultMessage:t.defaultMessages.others})),e.React.createElement("div",null,s.otherDss.visible.sort(((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order))).map(((t,s)=>t&&t.id?e.React.createElement(T,{ds:t,key:s,onDataSourceItemClick:this.props.onDataSourceItemClick,intl:this.props.intl,theme:this.props.theme,isHideable:!0,onChildDataIconClick:this.props.onChildDataIconClick,onRelatedWidgetsIconClick:this.props.onRelatedWidgetsIconClick,onToggleHidden:this.onToggleHidden}):null)),s.otherDss.hidden.sort(((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order))).map(((t,s)=>t&&t.id?e.React.createElement(P,{dsJson:t.getDataSourceJson(),key:s,intl:this.props.intl,theme:this.props.theme,isHideable:!0,onToggleHidden:this.onToggleHidden}):null)),s.otherDss.error.sort(((e,t)=>(null==e?void 0:e.order)-(null==t?void 0:t.order))).map(((t,s)=>t&&t.id?e.React.createElement(P,{dsJson:t.getDataSourceJson(),key:s,intl:this.props.intl,theme:this.props.theme,isHideable:!1,onToggleHidden:this.onToggleHidden}):null)))):null)}},U=600;class F extends e.React.PureComponent{constructor(t){super(t),this.getStyle=t=>e.css`
    .list-refresh-setting-popup{
      width: ${e.polished.rem(240)};
      .interval-label{
        .jimu-widget-setting--section-header>*, .jimu-widget-setting--row>*{
          font-size: ${e.polished.rem(13)};
          font-weight: normal;
          color: ${t.ref.palette.neutral[900]};
        }
      }
      .interval-custom{
        position: relative;
      }
      .interval-custom-input{
        height: ${e.polished.rem(26)};
        input{
          height: ${e.polished.rem(26)};
          padding-right: ${e.polished.rem(80)};
        }
      }
      .interval-custom-placeholder{
        position: absolute;
        right: 8px;
        color: ${t.ref.palette.neutral[900]};
      }
      .disabled-label{
        color: ${t.ref.palette.neutral[700]};
      }
      .disabled{
        border-color: ${t.ref.palette.neutral[700]} !important;
      }
    }
    `,this.onToggleAutoRefresh=(e,t)=>{t?this.props.hasOriginalDataRefreshInterval?this.props.onChange(null):this.props.onChange(U):(this.props.onChange(0),this.setState({interval:10}))},this.onToggleCustom=()=>{"number"==typeof this.props.refreshInterval?this.props.onChange(null):this.props.onChange(U)},this.onIntervalChange=e=>{this.setState({interval:e})},this.onIntervalDone=()=>{var e,t;"number"==typeof this.state.interval&&(null===(e=this.props.ds)||void 0===e||e.stopAutoRefresh(),null===(t=this.props.ds)||void 0===t||t.getAllDerivedDataSources().forEach((e=>{e.stopAutoRefresh()})),this.props.onChange(60*this.state.interval))},this.getWhetherAutoRefresh=()=>this.props.refreshInterval>0||0!==this.props.refreshInterval&&this.props.hasOriginalDataRefreshInterval,this.getWhetherHonorLayerSetting=()=>"number"!=typeof this.props.refreshInterval&&this.props.hasOriginalDataRefreshInterval,this.state={interval:(this.props.refreshInterval||U)/60}}componentDidUpdate(e){if(!this.props.isOpen&&e.isOpen){const e=this.getWhetherAutoRefresh(),t=this.getWhetherHonorLayerSetting();e&&!t&&this.onIntervalDone()}}render(){if(!this.props.reference)return null;const a=this.getWhetherAutoRefresh(),i=this.getWhetherHonorLayerSetting();return(0,e.jsx)(t.Popper,{css:this.getStyle(this.props.theme),reference:this.props.reference,open:this.props.isOpen,placement:"bottom",toggle:this.props.toggle,arrowOptions:!0},(0,e.jsx)("div",{className:"list-refresh-setting-popup"},(0,e.jsx)(s.SettingSection,{className:"border-0"},(0,e.jsx)(s.SettingRow,{tag:"label",label:this.props.intl.formatMessage({id:"autoRefresh",defaultMessage:L.autoRefresh}),className:"interval-label"},(0,e.jsx)(t.Switch,{checked:a,onChange:this.onToggleAutoRefresh}))),a&&(0,e.jsx)(s.SettingSection,{className:"pt-0 interval-label",title:this.props.intl.formatMessage({id:"interval",defaultMessage:L.interval})},this.props.canOriginalDataSetRefreshInterval&&(0,e.jsx)("div",null,(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"align-items-center d-flex"},(0,e.jsx)(t.Radio,{id:"honor-layer-setting",onChange:this.onToggleCustom,checked:i,className:"mr-2",disabled:!this.props.hasOriginalDataRefreshInterval}),(0,e.jsx)(t.Label,{for:"honor-layer-setting",disabled:!this.props.hasOriginalDataRefreshInterval,className:!this.props.hasOriginalDataRefreshInterval&&"disabled-label"},this.props.intl.formatMessage({id:"honorLayer",defaultMessage:L.honorLayer})))),(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"align-items-center d-flex"},(0,e.jsx)(t.Radio,{id:"custom",onChange:this.onToggleCustom,checked:!i,className:"mr-2"}),(0,e.jsx)(t.Label,{for:"custom"},this.props.intl.formatMessage({id:"custom",defaultMessage:t.defaultMessages.custom}))))),(!i||!this.props.canOriginalDataSetRefreshInterval)&&(0,e.jsx)(s.SettingRow,{className:"mt-4 interval-custom"},(0,e.jsx)(t.NumericInput,{className:"w-100 interval-custom-input",value:this.state.interval,min:.1,max:999,precision:1,showHandlers:!1,onChange:this.onIntervalChange,onAcceptValue:this.onIntervalDone}),(0,e.jsx)("span",{className:"interval-custom-placeholder"},this.props.intl.formatMessage({id:"minutes",defaultMessage:L.minutes}))))))}}var _=p(4651),z=p.n(_),B=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const q=t=>{const s=window.SVG,{className:a}=t,i=B(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:z()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var K=p(5508),G=p.n(K),Q=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Y=t=>{const s=window.SVG,{className:a}=t,i=Q(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:G()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var X=p(3303),Z=p.n(X),ee=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const te=t=>{const s=window.SVG,{className:a}=t,i=ee(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:Z()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var se=p(1935),ae=p.n(se),ie=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const oe=t=>{const s=window.SVG,{className:a}=t,i=ie(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:ae()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var ne=p(1888),re=p(6490),le=p.n(re),ce=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const pe=t=>{const s=window.SVG,{className:a}=t,i=ce(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:le()},i)):e.React.createElement("svg",Object.assign({className:o},i))},de=(t,s)=>e.css`
  margin-bottom: ${t.sys.spacing(2)};

  .jimu-link {
    font-size: ${t.sys.typography.label3.fontSize};
  }
  .collapse-header {
    background-color: ${t.sys.color.secondary.main};
    padding: 0 ${t.sys.spacing(2)};
    height: 32px;
    border-top: 1px solid ${s?t.sys.color.primary.main:t.sys.color.secondary.main};
    .collapse-label {
      width: 100%;
      display: flex;
      align-items:center;
      .jimu-link {
        color: ${t.sys.color.surface.overlayHint};
        max-width: calc(100% - 16px);
        padding: 0;
        margin-left: ${t.sys.spacing(1)};
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .collapsing {
    transition: none;
  }
  .collapse-body {
    padding: ${t.sys.spacing(2)};
    .cardinality {
      color: ${t.sys.color.surface.overlayHint};
      font-size: ${t.sys.typography.title3.fontSize};
      margin: ${t.sys.spacing(1)} 0;
    }
    .relationship {
      display: flex;
      .relationship-content {
        width: calc(100% - 15px);
        display: flex;
        flex-direction: column;
        gap: ${t.sys.spacing(2)};
        .relationship-table {
          .jimu-link {
            max-width: 100%;
            padding: 0;
            margin-left: ${t.sys.spacing(1)};
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
`;function he(s){const{dataSource:a,relatedDataSources:i,onRelatedTableClick:o}=s,n=(0,ne.useTheme)(),r=null==a?void 0:a.getLayerDefinition(),l=(null==r?void 0:r.relationships)||[],c=a.getLabel(),p=a.getRootDataSource(),d=e=>{null==o||o(e)},[h,u]=e.React.useState(null),m=e.hooks.useEventCallback((e=>{u(e)}));e.React.useEffect((()=>{u(null)}),[a]);const g=e.hooks.useTranslation(L);return(0,e.jsx)(e.React.Fragment,null,i.map((s=>{var i,o;const u=s.getLayerDefinition(),f=(null==u?void 0:u.relationships)||[],S=l.find((e=>e.relatedTableId===u.id)),v=f.find((e=>e.relatedTableId===r.id));if(!S||!v)return null;const D=s.getLabel(),x={alias:"",name:"",type:e.JimuFieldType.String},w=(null===(i=a.getSchema().fields)||void 0===i?void 0:i[S.keyField])||x,y=(null===(o=s.getSchema().fields)||void 0===o?void 0:o[v.keyField])||x,b=p.isDataSourceSet()&&p.getAllChildDataSources().find((e=>{var t,s;return void 0!==S.relationshipTableId&&(null===(s=null===(t=null==e?void 0:e.getLayerDefinition)||void 0===t?void 0:t.call(e))||void 0===s?void 0:s.id)===S.relationshipTableId})),R=(0,e.jsx)("span",{className:"collapse-label"},(0,e.jsx)(t.Icon,{icon:e.dataSourceUtils.getDsIcon(s.getDataSourceJson()),className:"text-default",size:12}),(0,e.jsx)(t.Link,{onClick:()=>{d(s)},title:D},D)),M=h===S.id;return(0,e.jsx)(t.CollapsablePanel,{key:S.id,css:de(n,M),isOpen:M,onRequestOpen:()=>{m(S.id)},onRequestClose:()=>{m(null)},label:R,"aria-label":D,type:"default"},(0,e.jsx)("div",{className:"collapse-body"},(0,e.jsx)("div",{className:"cardinality"},g(S.cardinality)),(0,e.jsx)("div",{className:"relationship"},(0,e.jsx)(ue,{theme:n}),(0,e.jsx)("div",{className:"relationship-content"},(0,e.jsx)(me,{tableName:c,fieldType:w.type,fieldName:w.alias||w.name,cardinality:S.cardinality,role:S.role,theme:n}),b&&(0,e.jsx)("div",{className:"relationship-table"},(0,e.jsx)(t.Link,{onClick:()=>{d(b)}},b.getLabel())),(0,e.jsx)(me,{tableName:D,fieldType:y.type,fieldName:y.alias||y.name,cardinality:v.cardinality,role:v.role,theme:n})))))})))}const ue=t=>{const{theme:s}=t,a=e.css`
    &.relationship-link {
      width: 20px;
      display: flex;
      flex-direction: column;
      .relationship-link-up {
        flex-grow: 1;
        margin-top: ${s.sys.spacing(4)};
        border-top: 1px solid ${s.sys.color.primary.text};
        margin-left: 10px;
        border-left: 1px solid ${s.sys.color.primary.text};
        margin-bottom: 5px;
      }
      .relationship-link-icon {
        margin-left: 5px;
      }
      .relationship-link-down {
        flex-grow: 1;
        margin-bottom: ${s.sys.spacing(4)};
        border-bottom: 1px solid ${s.sys.color.primary.text};
        margin-left: 10px;
        border-left: 1px solid ${s.sys.color.primary.text};
        margin-top: 5px;
      }
    }
  `;return(0,e.jsx)("div",{className:"relationship-link",css:a},(0,e.jsx)("div",{className:"relationship-link-up"}),(0,e.jsx)(pe,{className:"relationship-link-icon",size:"10px"}),(0,e.jsx)("div",{className:"relationship-link-down"}))},me=s=>{const{tableName:i,cardinality:o,role:n,fieldType:r,fieldName:l,theme:c}=s,p=e.css`
    &.related-table-field {
      padding-left: ${c.sys.spacing(1)};
      font-size: ${c.sys.typography.label2.fontSize};
      line-height: ${c.sys.typography.label2.lineHeight};
      .related-table {
        display: flex;
        justify-content: space-between;
        .related-name {
          width: calc(100% - 25px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: ${c.sys.color.surface.overlayText};
        }
        .related-cardinality {
          color: ${c.sys.color.surface.overlayHint};
          .primary {
            color: ${c.sys.color.primary.main};
            font-weight: bold;
          }
        }
      }
      .related-field {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: ${c.sys.color.surface.overlayHint};
        .related-field-icon {
          margin-right: ${c.sys.spacing[1]}
        }
      }
    }
  `,d="esriRelCardinalityManyToMany"===o?"M":"1",h="esriRelCardinalityOneToOne"===o?"1":"esriRelCardinalityOneToMany"===o?"M":"N",u="esriRelRoleOrigin"===n?"primary":"",m="esriRelRoleDestination"===n?"primary":"";return(0,e.jsx)("div",{className:"related-table-field",css:p},(0,e.jsx)("div",{className:"related-table"},(0,e.jsx)("span",{className:"related-name",title:i},i),(0,e.jsx)("span",{className:"related-cardinality"},(0,e.jsx)("span",{className:u},d),(0,e.jsx)("span",null,":"),(0,e.jsx)("span",{className:m},h))),(0,e.jsx)("div",{className:"related-field",title:l},(0,e.jsx)(t.Icon,Object.assign({className:"related-field-icon"},a.dataComponentsUtils.getIconFromFieldType(r,c))),l))};var ge=p(3800),fe=p.n(ge),Se=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const ve=t=>{const s=window.SVG,{className:a}=t,i=Se(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:fe()},i)):e.React.createElement("svg",Object.assign({className:o},i))},De=[e.ExportFormat.GeoJSON,e.ExportFormat.KML,e.ExportFormat.Shapefile];const xe=e.ReactRedux.connect((e=>({})))((function(s){const{theme:i,intl:n,dataSources:r,exportOptions:l,singleExport:c=!1,cachedAllowExport:p,selectLayerEnabled:d}=s,h=e.React.useId(),u=n.formatMessage({id:"allowExport",defaultMessage:L.allowExport}),m=n.formatMessage({id:"apply",defaultMessage:e.defaultMessages.apply}),g=n.formatMessage({id:"formatOptions",defaultMessage:L.formatOptions}),f=n.formatMessage({id:"exportSettingsApplyAllTip",defaultMessage:L.exportSettingsApplyAllTip}),S=n.formatMessage({id:"exportSettingsApplySelectedTip",defaultMessage:L.exportSettingsApplySelectedTip}),v=c&&r&&null===r[0].getGeometryType(),D={formats:v?Object.values(e.ExportFormat).filter((t=>t!==e.ExportFormat.GeoJSON)):Object.values(e.ExportFormat),maximum:100},x=e.React.useRef(!0),[w,y]=e.React.useState((null==l?void 0:l.formats)||D.formats),[b,R]=e.React.useState(null==p||p),M=(e,t)=>(t.includes(e.id)&&(e.disableExport=!b,b?e.exportOptions={formats:w}:delete e.exportOptions),e.childDataSourceJsons&&Object.keys(e.childDataSourceJsons).forEach((s=>{const a=e.childDataSourceJsons[s];M(a,t)})),e),E=()=>{const e=[],t=r.map((e=>e.id)),i=(0,o.getAppConfigAction)(),n=[];r.forEach((e=>{let t=e.getDataSourceJson();t=t.setIn(["disableExport"],!b),t=b?t.setIn(["exportOptions"],{formats:w}):t.without("exportOptions");const s=a.dataComponentsUtils.editDataSourceJson(t);n.push(s)})),n.forEach((s=>{-1===e.findIndex((e=>e.id===s.id))&&e.push(M(s.asMutable({deep:!0}),t))})),e.reduce(((e,t)=>e.editDataSource(t)),i).exec(),c||(s.cacheSettingStatus(b,{formats:w}),s.onClose())},O=(e,t)=>{y(e.target.checked?[...w,t]:w.filter((e=>e!==t)))};return e.React.useEffect((()=>{if(c){if(x.current)return void(x.current=!1);E()}}),[w]),(0,e.jsx)("div",{css:(t=>e.css`
    padding: 16px;
    width: 200px;
    background-color: ${t.sys.color.surface.paper};
    color: ${t.sys.color.surface.paperText};
    font-size: 13px;
    font-weight: 500;
    .export-common-item{
      height: 26px;
      width: 100%;
      padding: 4px 0;
      box-sizing: border-box;
    }
    .txt{
      margin-left: 8px;
      margin-bottom: 0;
    }
    .max-export{
      margin-top: ${c?0:"16px"};
      .max-export-input{
        margin-top: 8px;
      }
    }
    .divide{
        margin-top: 8px;
        margin-bottom: 8px;
        border-top: 1px solid ${t.sys.color.divider.secondary};
    }
    .format-section{
      .format-label{
        color: ${t.sys.color.surface.paperHint};
        margin-bottom: 0;
      }
      .format-options{
        margin-top: 8px;
      }
    }
    .apply-btn{
      margin-top: 8px;
      height: 32px;
      width: 100%;
      line-height: 32px;
      font-size: 14px;
      font-weight: 500;
    }
    .export-notice{
      height: 32px;
      margin-top: 4px;
      margin-bottom: 4px;
      display: flex;
      align-items: start;
      color: var(--sys-color-surface-overlay-hint, #DCDCDC);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }
  `)(i)},!c&&(0,e.jsx)(t.Label,{check:!0,className:"export-common-item d-flex justify-content-between align-items-center"},(0,e.jsx)("div",null,u),(0,e.jsx)(t.Switch,{checked:b,onChange:t=>{R(t.target.checked),t.target.checked&&y(Object.values(e.ExportFormat))}})),!c&&(0,e.jsx)("div",{className:"export-notice"},(0,e.jsx)("div",null,d?S:f)),(b||c)&&(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"format-section d-flex flex-column",role:"group","aria-label":g},(0,e.jsx)(t.Label,{className:"format-label export-common-item",id:h},g),(0,e.jsx)("div",{className:"format-options d-flex flex-column"},Object.values(e.ExportFormat).filter((e=>!(De.includes(e)&&v))).map((e=>({value:e,label:e}))).map((s=>{const a=s.label===e.ExportFormat.Item?n.formatMessage({id:"exportItem",defaultMessage:e.defaultMessages.exportItem}):s.label;return(0,e.jsx)("div",{key:s.value},(0,e.jsx)(t.Label,{className:"export-common-item d-flex justify-content-start align-items-center","aria-describedby":h},(0,e.jsx)(t.Checkbox,{key:s.value,value:s.value,checked:w.includes(s.value),onChange:e=>{O(e,s.value)}}),(0,e.jsx)("div",{className:"txt"},a)))}))))),!c&&(0,e.jsx)(t.Button,{className:"apply-btn",size:"sm",type:"primary",title:m,onClick:E},m))}));class we extends e.React.PureComponent{constructor(t){var s;super(t),this.__unmounted=!1,this.exportSettingPopperRef=e.React.createRef(),this.onShowDetailClick=()=>{this.props.onShowDetailClick(this.props.ds)},this.onOpenRenameInput=()=>{this.setState({isRenameShown:!0})},this.onRename=()=>{const e=this.state.newName.trim();if(!e)return void this.setState({isRenameShown:!1});const t=this.props.ds.getDataSourceJson().setIn(["label"],e),s=a.dataComponentsUtils.editDataSourceJson(t);(0,o.getAppConfigAction)().editDataSource(s).exec(),this.setState({isRenameShown:!1})},this.onRenameChange=e=>{this.setState({newName:e.target.value})},this.onQueryApply=e=>{if(this.toggleViewSetting(),!e)return;const t=a.dataComponentsUtils.editDataSourceJson(this.props.ds.getDataSourceJson().setIn(["query"],e));(0,o.getAppConfigAction)().editDataSource(t).exec(),this.props.ds.addSourceVersion()},this.onAutoRefreshChange=e=>{var t;let s=this.props.ds.getDataSourceJson();(null===(t=s.query)||void 0===t?void 0:t.id)||(s=s.setIn(["query"],{id:s.id,label:this.props.ds.getLabel()})),s=s.setIn(["query","refreshInterval"],e);const i=a.dataComponentsUtils.editDataSourceJson(s);(0,o.getAppConfigAction)().editDataSource(i).exec()},this.toggleMoreOptions=()=>{this.setState({isMoreOptionsShown:!this.state.isMoreOptionsShown})},this.toggleViewSetting=()=>{this.setState({isViewSettingShown:!this.state.isViewSettingShown})},this.toggleEditScript=()=>{this.setState({isEditScriptShown:!this.state.isEditScriptShown})},this.toggleAutoRefresh=()=>{this.setState({isAutoRefreshShown:!this.state.isAutoRefreshShown})},this.getOriginalLabel=()=>{var t;let s;const a=this.props.intl.formatMessage({id:"originalDsLabel",defaultMessage:L.originalDsLabel});if(this.props.ds.map)s=null===(t=this.props.ds.map.portalItem)||void 0===t?void 0:t.title;else if(this.props.ds.layer)s=this.props.ds.layer.title;else if(this.props.ds.layerDefinition)s=this.props.ds.layerDefinition.name;else if(this.props.ds.serviceDefinition){const t=this.props.ds.getDataSourceJson(),a=null==t?void 0:t.url;s=e.dataSourceUtils.getLabelFromArcGISServiceUrl(a)}return s||a},this.onExportDataActionChange=(e,t)=>{let s=this.props.ds.getDataSourceJson();s=s.setIn(["disableExport"],!t);const i=a.dataComponentsUtils.editDataSourceJson(s);(0,o.getAppConfigAction)().editDataSource(i).exec()};const i=null===(s=this.props.ds)||void 0===s?void 0:s.getDataSourceJson().url;this.state={isMoreOptionsShown:!1,isMappingDetailShown:!1,isRenameShown:!1,isTooltipOpen:!1,isViewSettingShown:!1,isEditScriptShown:!1,isAutoRefreshShown:!1,newName:this.props.ds?this.props.ds.getLabel()||this.props.ds.id:"",isSubscriberOrPremium:e.proxyUtils.isSubscriber(null,i)||e.proxyUtils.isPremium(null,i),relatedDataSources:[],exportSettingShow:!1}}componentDidMount(){this.setIsCurrentDataSourceSubscriber(),this.updateRelatedDataSources()}componentDidUpdate(t,s){s.isRenameShown!==this.state.isRenameShown&&this.state.isRenameShown&&this.renameInput&&((0,e.focusElementInKeyboardMode)(this.renameInput,!0),this.renameInput.select()),t.ds!==this.props.ds&&(this.setState({newName:this.props.ds?this.props.ds.getLabel()||this.props.ds.id:""}),this.setIsCurrentDataSourceSubscriber(),this.updateRelatedDataSources())}componentWillUnmount(){this.__unmounted=!0}setIsCurrentDataSourceSubscriber(){this.props.ds&&e.proxyUtils.isDataSourceSubscriberOrPremium(this.props.ds.getDataSourceJson()).then((e=>{this.__unmounted||this.setState({isSubscriberOrPremium:e})}))}updateRelatedDataSources(){var e,t,s;const a=this.props.ds;null===(s=null===(t=null===(e=null==a?void 0:a.createRelatedDataSources)||void 0===e?void 0:e.call(a))||void 0===t?void 0:t.then)||void 0===s||s.call(t,(e=>{this.setState({relatedDataSources:e||[]})}))}render(){var s,i,o,n,r,l,c;if(!this.props.ds)return null;const p=null!=this.props.ds.getDataSourceJson().arcadeScript,d=e.dataSourceUtils.doesDsSupportQuery(this.props.ds),h=e.dataSourceUtils.doesDsSupportQuery(this.props.ds.parentDataSource),u=a.dataComponentsUtils.getOriginalDataUrl(this.props.ds.getDataSourceJson()),m=null===(s=this.props.ds.getSchema())||void 0===s?void 0:s.refreshInterval,g="number"==typeof m,f=!this.props.ds.parentDataSource,S=!this.state.isSubscriberOrPremium&&!this.props.ds.getDataSourceJson().disableExport,v=this.props.intl.formatMessage({id:"details",defaultMessage:t.defaultMessages.details}),D=this.props.intl.formatMessage({id:"editArcadeScript",defaultMessage:t.defaultMessages.editArcadeScript}),x=this.props.intl.formatMessage({id:"settings",defaultMessage:t.defaultMessages.settings}),w=this.props.intl.formatMessage({id:"more",defaultMessage:t.defaultMessages.more}),y=this.props.intl.formatMessage({id:"refreshSetting",defaultMessage:L.refreshSetting}),b=e.dataSourceUtils.getDsTypeString(this.props.ds.type,this.props.intl),R=this.props.intl.formatMessage({id:"exportSettings",defaultMessage:L.exportSettings});return e.React.createElement("div",{className:"px-4 pb-3 ds-info"},e.React.createElement("div",{className:"d-flex justify-content-between ds-thumbnail-type-label w-100"},e.React.createElement("div",{className:"d-flex align-items-center ds-thumbnail-type"},e.React.createElement("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0 ds-thumbnail"},e.React.createElement(t.Icon,{icon:e.dataSourceUtils.getDsIcon(this.props.ds.getDataSourceJson()),className:"text-default",size:12})),e.React.createElement("div",{className:"d-flex pl-2 ds-type"},e.React.createElement("div",{className:"hint-paper text-truncate w-100 ds-type-name",title:b},b))),e.React.createElement("div",{className:"d-flex justify-content-between"},p&&e.React.createElement(t.Button,{size:"sm",icon:!0,type:"tertiary",disableRipple:!0,onClick:this.toggleEditScript,title:D,"aria-label":D},e.React.createElement(ve,{size:"m"})),E(this.props.ds)&&e.React.createElement(t.Button,{size:"sm",icon:!0,type:"tertiary",disableRipple:!0,onClick:this.onShowDetailClick,ref:this.props.itemInfoBtn,title:v,"aria-label":v},e.React.createElement(Y,{size:"m"})),d&&!p&&e.React.createElement(t.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.toggleViewSetting,title:x,"aria-label":x,ref:this.props.itemInfoBtn},e.React.createElement(te,{size:"m"})),e.React.createElement(t.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.toggleMoreOptions,ref:e=>{this.moreOptionsRef=e},title:w,"aria-label":w},e.React.createElement(q,{size:"m"})))),e.React.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},this.state.isRenameShown?e.React.createElement(t.TextInput,{className:"flex-grow-1 text-truncate ds-label-input ds-label",ref:e=>{this.renameInput=e},onBlur:this.onRename,onPressEnter:this.onRename,onChange:this.onRenameChange,value:this.state.newName}):e.React.createElement("div",{className:"flex-grow-1 three-line-truncate ds-label text-left",title:this.props.ds.getLabel()||this.props.ds.id},this.props.ds.getLabel()||this.props.ds.id),e.React.createElement(a.DataSourceIdCopyButton,{dataSourceId:this.props.ds.id,intl:this.props.intl})),u&&e.React.createElement("div",{className:"ds-origin-label flex-grow-1 d-flex align-items-center",title:this.props.intl.formatMessage({id:"source",defaultMessage:t.defaultMessages.source})},e.React.createElement(t.Link,{to:u,className:"p-0 ds-origin-label-link d-flex",target:"_blank"},e.React.createElement("span",{className:"align-middle text-truncate ds-origin-label-link-text"},this.getOriginalLabel()))),d&&!h&&e.React.createElement("div",{className:"d-flex align-items-center my-4"},e.React.createElement("div",{className:"mr-2 flex-grow-1 refresh-last-update-label"},y),e.React.createElement(t.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.toggleAutoRefresh,ref:e=>{this.autoRefreshRef=e},title:y,"aria-label":y,className:(0,e.classNames)({"highlight-refresh-icon":!!this.props.ds.getAutoRefreshInterval()})},e.React.createElement(oe,{size:"m"}))),d&&!h&&e.React.createElement("div",{className:"d-flex align-items-center mt-4"},e.React.createElement("div",{className:"mr-2 flex-grow-1 d-flex align-items-center"},e.React.createElement(t.Label,{className:"refresh-last-update-label m-0",for:"export-switch"},this.props.intl.formatMessage({id:"allowExport",defaultMessage:L.allowExport})),e.React.createElement(t.Tooltip,{title:this.props.intl.formatMessage({id:"exportNotice",defaultMessage:L.exportNotice}),placement:"bottom",showArrow:!0},e.React.createElement(t.Button,{size:"sm",icon:!0,type:"tertiary",disableHoverEffect:!0,disableRipple:!0,className:"cursor-default jimu-outline-inside"},e.React.createElement(Y,{size:"m"})))),S&&e.React.createElement(t.Button,{size:"sm",icon:!0,type:"tertiary",title:R,"aria-label":R,onClick:()=>{this.setState({exportSettingShow:!this.state.exportSettingShow})},ref:this.exportSettingPopperRef},e.React.createElement(te,{size:"m"})),e.React.createElement(t.Switch,{id:"export-switch",checked:S,onChange:this.onExportDataActionChange,title:this.props.intl.formatMessage({id:"allowExport",defaultMessage:L.allowExport}),disabled:this.state.isSubscriberOrPremium})),this.state.relatedDataSources.length>0&&e.React.createElement("div",{className:"mt-4"},e.React.createElement(t.Label,{className:"refresh-last-update-label mb-2"},this.props.intl.formatMessage({id:"related",defaultMessage:L.related})),e.React.createElement(he,{dataSource:this.props.ds,relatedDataSources:this.state.relatedDataSources,onRelatedTableClick:this.props.onRelatedTableClick})),e.React.createElement(I,{isOpen:this.state.isMoreOptionsShown,reference:this.moreOptionsRef,intl:this.props.intl,dsJson:this.props.ds.getDataSourceJson(),onRenameItem:this.onOpenRenameInput,theme:this.props.theme,offset:[25,0],toggle:this.toggleMoreOptions,isRemoveHidden:!f}),d&&e.React.createElement(a.DataViewSettingPopup,{isOpen:this.state.isViewSettingShown,toggle:this.toggleViewSetting,onApply:this.onQueryApply,mainDataSource:this.props.ds,dataView:this.props.ds.getDataSourceJson().query,disableRename:!0,disableRemove:!0,disableDuplicate:!0,isSettingMainDataSource:!0,newDataViewLabel:this.props.ds.getLabel(),newDataViewId:"default"}),p&&this.state.isEditScriptShown&&e.React.createElement(a.EditAcradePopup,{isOpen:!0,toggle:this.toggleEditScript,mainDataSource:this.props.ds}),d&&!h&&e.React.createElement(F,{ds:this.props.ds,isOpen:this.state.isAutoRefreshShown,intl:this.props.intl,theme:this.props.theme,reference:this.autoRefreshRef,refreshInterval:null===(o=null===(i=this.props.ds.getDataSourceJson())||void 0===i?void 0:i.query)||void 0===o?void 0:o.refreshInterval,onChange:this.onAutoRefreshChange,toggle:this.toggleAutoRefresh,canOriginalDataSetRefreshInterval:g,hasOriginalDataRefreshInterval:g&&m>0}),this.props.ds&&e.React.createElement(t.Popper,{placement:"right-start",open:this.state.exportSettingShow,toggle:()=>{this.setState({exportSettingShow:!1})},reference:this.exportSettingPopperRef},e.React.createElement(xe,{theme:this.props.theme,intl:this.props.intl,dataSources:[this.props.ds],exportOptions:Object.assign(Object.assign({},null===(n=this.props.ds.getDataSourceJson())||void 0===n?void 0:n.exportOptions),{formats:null===(c=null===(l=null===(r=this.props.ds.getDataSourceJson())||void 0===r?void 0:r.exportOptions)||void 0===l?void 0:l.formats)||void 0===c?void 0:c.asMutable()}),singleExport:!0})))}}class ye extends e.React.PureComponent{constructor(){super(...arguments),this.Item=({widgetJson:s})=>{var a,i;const o="string"==typeof s.icon?s.icon:s.icon&&s.icon.svg,n="string"==typeof s.icon?null:s.icon&&s.icon.properties&&s.icon.properties.color;return e.React.createElement("div",{className:"d-flex align-content-center mb-4 mx-4",key:s.id},e.React.createElement("div",{className:"widget-icon"},e.React.createElement(t.Icon,{icon:o,color:n,autoFlip:null===(i=null===(a=s.manifest)||void 0===a?void 0:a.properties)||void 0===i?void 0:i.flipIcon})),e.React.createElement("div",{className:"flex-grow-1 text-truncate px-2",title:s.label},s.label))}}render(){if(!this.props.ds)return e.React.createElement("div",{className:"m-2"},this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:L.noSupportedDataSource}));const s=a.dataComponentsUtils.getWidgetsUsingDsOrItsViews(this.props.ds.id,this.props.widgets,!1);if(!s||0===s.length)return e.React.createElement("div",{className:"empty-placeholder w-100"},e.React.createElement("div",{className:"empty-placeholder-icon"},e.React.createElement($,{size:48})),e.React.createElement("div",{className:"empty-placeholder-text",dangerouslySetInnerHTML:{__html:this.props.intl.formatMessage({id:"noRelatedWidget",defaultMessage:t.defaultMessages.noRelatedWidget})}}));const i=this.Item;return e.React.createElement(e.React.Fragment,null,e.React.createElement("h5",{className:"m-4 data-setting-secondary-title"},this.props.intl.formatMessage({id:"relatedWidgets",defaultMessage:t.defaultMessages.relatedWidgets})),(o=s,o.sort(((e,t)=>{var s;return null===(s=e.label)||void 0===s?void 0:s.localeCompare(t.label)}))).map((t=>e.React.createElement(i,{widgetJson:t,key:t.id}))));var o}}class be extends e.React.PureComponent{componentDidMount(){this.props.ds||this.props.backToHomePage()}componentDidUpdate(e,t){e.ds!==this.props.ds&&(this.props.ds||this.props.backToHomePage())}render(){return this.props.ds?e.React.createElement("div",{className:"ds-list pt-4"},e.React.createElement(we,{ds:this.props.ds,onMappingIconClick:this.props.onMappingIconClick,theme:this.props.theme,onShowDetailClick:this.props.onShowDetailClick,intl:this.props.intl,dsInfo:this.props.dsInfo,itemInfoBtn:this.props.itemInfoBtn,onRelatedTableClick:this.props.onRelatedTableClick}),e.React.createElement(t.Tabs,{type:"pills",fill:!0,defaultValue:this.props.defaultActive},e.React.createElement(t.Tab,{id:"layers",title:this.props.intl.formatMessage({id:"layers",defaultMessage:t.defaultMessages.layers})},e.React.createElement("div",{className:"tab-scroll"},e.React.createElement(W,{dataSourceJson:this.props.dataSourceJson,ds:this.props.ds,key:this.props.ds.id,intl:this.props.intl,dispatch:this.props.dispatch,onDataSourceItemClick:this.props.onDsItemClicked,onChildDataIconClick:this.props.onChildDataIconClick,onRelatedWidgetsIconClick:this.props.onRelatedWidgetsIconClick,widgets:this.props.widgets,theme:this.props.theme,areAllChildDssCreated:this.props.areAllChildDssCreated}))),e.React.createElement(t.Tab,{id:"widgets",title:this.props.intl.formatMessage({id:"widgets",defaultMessage:t.defaultMessages.widgets})},e.React.createElement("div",{className:"tab-scroll"},e.React.createElement(ye,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets}))))):null}}const Re=e.ReactRedux.connect(((e,t)=>{var s;return{dataSourceJson:null===(s=t.ds)||void 0===s?void 0:s.getDataSourceJson()}}))(be),Me=class extends e.React.PureComponent{render(){if(!this.props.field)return null;const t=this.props.field;return e.React.createElement("div",{className:"pl-4 mb-4 d-flex field-item"},e.React.createElement("div",{className:"flex-grow-1 text-truncate field-label",title:t&&(t.alias||t.name)},t&&(t.alias||t.name)))}},Ee=class extends e.React.PureComponent{constructor(e){super(e),this.getFields=e=>{const t=l(e);return t&&t.fields},this.onRemove=e=>{},this.hideRemovePopup=()=>{this.setState({isRemoveOptionsShown:!1})},this.state={isRemoveOptionsShown:!1}}render(){var s;if(!this.props.ds)return e.React.createElement("div",{className:"m-2"},this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:L.noSupportedDataSource}));const i=this.getFields(this.props.ds);return i&&0!==Object.keys(i).length?e.React.createElement(e.React.Fragment,null,e.React.createElement("h5",{className:"m-4 data-setting-secondary-title"},this.props.intl.formatMessage({id:"inUse",defaultMessage:t.defaultMessages.inUse})),i&&R(i).map(((t,s)=>e.React.createElement(Me,{field:i[t],key:s,onRemove:this.onRemove}))),e.React.createElement(a.DataSourceRemoveWarningPopup,{dataSourceId:null===(s=this.props.ds)||void 0===s?void 0:s.id,isOpen:this.state.isRemoveOptionsShown,toggle:this.hideRemovePopup,reason:a.DataSourceRemoveWaringReason.DataSourceRemoved})):e.React.createElement("div",{className:"empty-placeholder w-100"},e.React.createElement("div",{className:"empty-placeholder-icon"},e.React.createElement($,{size:48})),e.React.createElement("div",{className:"empty-placeholder-text",dangerouslySetInnerHTML:{__html:this.props.intl.formatMessage({id:"noUsedField",defaultMessage:L.noUsedField})}}))}};var Oe=p(1027),Ce=p.n(Oe),Ne=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Ie=t=>{const s=window.SVG,{className:a}=t,i=Ne(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:Ce()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var je=p(3662),ke=p.n(je),Te=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Ae=t=>{const s=window.SVG,{className:a}=t,i=Te(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:ke()},i)):e.React.createElement("svg",Object.assign({className:o},i))};class Pe extends e.React.PureComponent{constructor(e){super(e),this.state={isTooltipOpen:!1}}render(){if(!this.props.dataView||!this.props.ds)return null;const s=e.DataSourceManager.getInstance().getDataViewDataSourceId(this.props.ds.id,this.props.dataView.id),i=a.dataComponentsUtils.getWidgetsUsingDsOrItsDescendantDss(s,this.props.widgets),o=this.props.intl.formatMessage({id:"relatedWidgetsWithDirectlyNum",defaultMessage:t.defaultMessages.relatedWidgetsWithDirectlyNum},{num:null==i?void 0:i.length});return e.React.createElement("div",{tabIndex:0,className:"d-flex align-items-center justify-content-between my-2 mx-4 py-1 px-2 data-view-item text-left text-default",onClick:()=>{this.props.onDataViewClick(this.props.dataView)},title:o,"aria-label":this.props.label},e.React.createElement("div",{className:"flex-grow-1 pl-2 my-1 two-line-truncate data-view-label",title:this.props.label},this.props.label),e.React.createElement(a.DataSourceIdCopyButton,{dataSourceId:s,intl:this.props.intl}))}}class Le extends e.React.PureComponent{constructor(s){super(s),this.__unmount=!1,this.toggleViewSetting=()=>{this.setState({isViewSettingOpen:!this.state.isViewSettingOpen})},this.toggleDataViewForNoSelection=(s,a)=>{if(a){const s=(0,e.Immutable)({id:e.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION,label:this.props.intl.formatMessage({id:"dataViewForNoSelection",defaultMessage:t.defaultMessages.dataViewForNoSelection})});this.editDataView(s,!1)}else this.removeDataView(e.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION)},this.onDataViewClick=e=>{this.setState({selectedDataView:e}),this.toggleViewSetting()},this.onCreateViewClick=()=>{this.setState({selectedDataView:null}),this.toggleViewSetting()},this.onApply=e=>{this.editDataView(e,!0)},this.onDuplicate=e=>{this.editDataView(e,!1)},this.removeDataView=t=>{var s,i;if(!t)return;const n=this.props.ds.getDataSourceJson();let r=n.dataViews||(0,e.Immutable)({});r=r.without(t);const l=a.dataComponentsUtils.editDataSourceJson(n.setIn(["dataViews"],r));(0,o.getAppConfigAction)().editDataSource(l).exec(),e.DataSourceManager.getInstance().destroyDataSource(null===(i=null===(s=this.props.ds.getMainDataSource())||void 0===s?void 0:s.getDataView(t))||void 0===i?void 0:i.id),this.updateSelectionView(t)},this.editDataView=(t,s)=>{if(!t)return;const i=this.props.ds.getDataSourceJson();let n=i.dataViews||(0,e.Immutable)({});n=n.set(t.id,t);const r=a.dataComponentsUtils.editDataSourceJson(i.setIn(["dataViews"],n));(0,o.getAppConfigAction)().editDataSource(r).exec(),e.lodash.defer((()=>{e.DataSourceManager.getInstance().createDataSource(i,t.id).then((s=>s.dataViewId===e.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION&&(null==s?void 0:s.load)?this.loadNoSelectionView(s).then((()=>(this.updateSelectionView(t.id),Promise.resolve(null)))):(this.changeVersionToLetWidgetsUpdate(),Promise.resolve(null)))).then((()=>{this.__unmount||(this.setState({selectedDataView:t}),s&&this.toggleViewSetting())}),(e=>{console.error("Failed to add data view, ",e),this.__unmount||(this.setState({selectedDataView:null}),s&&this.toggleViewSetting())}))}))},this.loadNoSelectionView=t=>Promise.all([t.load({returnGeometry:!0},{widgetId:e.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION}),t.loadCount({},{widgetId:e.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION})]),this.updateSelectionView=t=>{var s;t===e.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION&&0===(null===(s=this.props.ds.getMainDataSource())||void 0===s?void 0:s.getSelectedRecordIds().filter((e=>!!e)).length)&&this.clearSelectionView()},this.clearSelectionView=()=>{e.lodash.defer((()=>{var t,s,a,i,o;null===(s=null===(t=this.props.ds.getMainDataSource())||void 0===t?void 0:t.getDataView(e.CONSTANTS.SELECTION_DATA_VIEW_ID))||void 0===s||s.clearRecords(),null===(o=null===(i=null===(a=this.props.ds.getMainDataSource())||void 0===a?void 0:a.getDataView(e.CONSTANTS.SELECTION_DATA_VIEW_ID))||void 0===i?void 0:i.getAllDerivedDataSources())||void 0===o||o.forEach((e=>{null==e||e.clearRecords()})),this.changeVersionToLetWidgetsUpdate()}))},this.changeVersionToLetWidgetsUpdate=()=>{var e;null===(e=this.props.ds.getMainDataSource())||void 0===e||e.addSourceVersion()},this.state={isViewSettingOpen:!1,selectedDataView:null}}componentWillUnmount(){this.__unmount=!0}render(){var s,i,o,n;if(!this.props.ds)return e.React.createElement("div",{className:"m-2"},this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:L.noSupportedDataSource}));const r=null===(i=null===(s=this.props.ds.getDataSourceJson())||void 0===s?void 0:s.dataViews)||void 0===i?void 0:i.without(e.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION),l=(null===(o=this.props.ds.getDataSourceJson())||void 0===o?void 0:o.dataViews)&&this.props.ds.getDataSourceJson().dataViews[e.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION],c=this.props.intl.formatMessage({id:"createAView",defaultMessage:t.defaultMessages.createAView}),p=this.props.intl.formatMessage({id:"dataViewForNoSelectionHint",defaultMessage:t.defaultMessages.dataViewForNoSelectionHint}),d=this.props.intl.formatMessage({id:"dataViewForNoSelection",defaultMessage:t.defaultMessages.dataViewForNoSelection}),h=this.props.intl.formatMessage({id:"settings",defaultMessage:t.defaultMessages.settings}),u=e.dataSourceUtils.doesDsSupportQuery(this.props.ds);return e.React.createElement("div",{className:"tab-scroll-with-bottom-fix"},u&&e.React.createElement(t.Button,{className:"m-4 d-flex justify-content-center align-items-center font-size-13 create-a-view-btn",onClick:this.onCreateViewClick,title:c,"aria-label":c},e.React.createElement(Ae,{size:"m",className:"flex-shrink-0"}),e.React.createElement("div",{className:"text-truncate text-left"},c)),e.React.createElement("div",{className:"data-view-container pt-1"},r&&Object.keys(r).length>0?Object.values(r).map(((t,s)=>e.React.createElement(Pe,Object.assign({onDataViewClick:this.onDataViewClick,dataView:t,label:t.label,key:s},this.props)))):e.React.createElement("div",{className:"empty-placeholder w-100"},e.React.createElement("div",{className:"empty-placeholder-icon"},e.React.createElement(Ie,{size:48})),e.React.createElement("div",{className:"empty-placeholder-text px-4",dangerouslySetInnerHTML:{__html:u?this.props.intl.formatMessage({id:"noDataViewNotice",defaultMessage:L.noDataViewNotice}):this.props.intl.formatMessage({id:"dataViewIsNotSupportedNotice",defaultMessage:L.dataViewIsNotSupportedNotice})}}))),u&&e.React.createElement("div",{className:"d-flex align-items-center justify-content-between p-4 no-selection-view-item bg-default",title:p},e.React.createElement("div",{className:"d-flex"},e.React.createElement(t.Checkbox,{checked:!!l,onChange:this.toggleDataViewForNoSelection,className:"mr-2",id:"no-selection-view-setting"}),e.React.createElement(t.Label,{className:"text-truncate mb-0 no-selection-view-label",for:"no-selection-view-setting",title:d},d)),e.React.createElement("div",{className:"d-flex align-items-center justify-content-between"},e.React.createElement("div",{className:"pl-2",title:p},e.React.createElement(t.Button,{size:"sm",icon:!0,type:"tertiary",disableHoverEffect:!0,disableRipple:!0,className:"cursor-default","aria-label":p},e.React.createElement(Y,{size:"m"}))),e.React.createElement(t.Button,{type:"tertiary",icon:!0,size:"sm",onClick:()=>{this.onDataViewClick(l)},title:h,"aria-label":h,disabled:!l},e.React.createElement(te,{size:"m"})))),e.React.createElement(a.DataViewSettingPopup,{isOpen:this.state.isViewSettingOpen,toggle:this.toggleViewSetting,onApply:this.onApply,onDuplicate:this.onDuplicate,mainDataSource:this.props.ds,dataView:this.state.selectedDataView,disableRename:(null===(n=this.state.selectedDataView)||void 0===n?void 0:n.id)===e.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION}))}}const He=e.ReactRedux.connect(((e,t)=>{var s;return{dataSourceJson:null===(s=t.ds)||void 0===s?void 0:s.getDataSourceJson()}}))(Le),Je=class extends e.React.PureComponent{componentDidMount(){this.props.ds||this.props.backToHomePage()}componentDidUpdate(e,t){e.ds!==this.props.ds&&(this.props.ds||this.props.backToHomePage())}render(){if(!this.props.ds)return null;const s=!!this.props.ds.query,a=this.props.ds.type!==e.DataSourceTypes.ImageryTileLayer&&this.props.ds.type!==e.DataSourceTypes.ElevationLayer,i=s||a;return e.React.createElement("div",{className:"field-list pt-4 overflow-auto"},e.React.createElement(we,{ds:this.props.ds,onMappingIconClick:this.props.onMappingIconClick,theme:this.props.theme,onShowDetailClick:this.props.onShowDetailClick,intl:this.props.intl,dsInfo:this.props.dsInfo,itemInfoBtn:this.props.itemInfoBtn,onRelatedTableClick:this.props.onRelatedTableClick}),i?e.React.createElement(t.Tabs,{type:"pills",fill:!0,defaultValue:this.props.defaultActive},s&&e.React.createElement(t.Tab,{id:"dataViews",title:this.props.intl.formatMessage({id:"dataViews",defaultMessage:L.dataViews})},e.React.createElement("div",{className:"h-100"},e.React.createElement(He,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets}))),e.React.createElement(t.Tab,{id:"fields",title:this.props.intl.formatMessage({id:"fields",defaultMessage:t.defaultMessages.fields})},e.React.createElement("div",{className:"tab-scroll"},e.React.createElement(Ee,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets,messages:this.props.messages}))),e.React.createElement(t.Tab,{id:"widgets",title:this.props.intl.formatMessage({id:"widgets",defaultMessage:t.defaultMessages.widgets})},e.React.createElement("div",{className:"tab-scroll"},e.React.createElement(ye,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets})))):e.React.createElement("div",{className:"tab-scroll"},e.React.createElement(ye,{ds:this.props.ds,intl:this.props.intl,widgets:this.props.widgets})))}};var Ve=p(4186),$e=p.n(Ve),We=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Ue=t=>{const s=window.SVG,{className:a}=t,i=We(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:$e()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var Fe=p(8996),_e=p.n(Fe),ze=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Be=t=>{const s=window.SVG,{className:a}=t,i=ze(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:_e()},i)):e.React.createElement("svg",Object.assign({className:o},i))},qe=class extends e.React.PureComponent{constructor(s){super(s),this.toggleDropdown=()=>{this.setState({isNewDsDropdownOpen:!this.state.isNewDsDropdownOpen})},this.setNewChildDss=e=>{e&&this.setState({newDss:e.isDataSourceSet()&&e.getChildDataSources()})},this.getSelectedDsLabel=e=>e&&(e.getLabel()||e.id),this.onSelectedNewDsChange=e=>{this.props.updateMappedSchema(this.props.curDs,e)},this.DsInfo=({curDs:s,selectedNewDs:i})=>{if(!s)return null;const o=a.dataComponentsUtils.getWidgetsUsingDsOrItsViews(s.id,this.props.widgets,!1);return e.React.createElement("div",null,e.React.createElement("div",{className:"d-flex align-items-center m-2"},e.React.createElement("div",{className:"d-flex align-items-center justify-content-center mr-1 flex-shrink-0 border-color-secondary ds-thumbnail"},e.React.createElement(t.Icon,{icon:e.dataSourceUtils.getDsIcon(s.getDataSourceJson()),className:"text-default",size:"22"})),e.React.createElement("div",{className:"flex-grow-1 text-truncate p-1",title:s.getLabel()||s.id},s.getLabel()||s.id),this.props.isDone?null:e.React.createElement("div",{className:"d-flex align-items-center justify-content-center mb-4"},e.React.createElement(Be,{size:"s",style:{color:"var(--sys-color-error)"}}))),e.React.createElement("div",{className:"d-flex m-2"},e.React.createElement("div",{className:"w-100 d-flex"},e.React.createElement("div",{className:"d-flex bg-default ds-type h6 pl-1 pr-1"},e.React.createElement("div",{className:"flex-shrink-0 hint-paper mr-1 text-truncate ds-type-name"},e.dataSourceUtils.getDsTypeString(s.type,this.props.intl)))),e.React.createElement("div",{className:"flex-shrink-0 d-flex flex-row ds-related-widgets"},e.React.createElement(Ue,{className:"mr-1 text-default"}),e.React.createElement("span",{className:"align-middle"},o&&o.length))))},this.state={isNewDsDropdownOpen:!1,newDss:null}}componentDidMount(){this.setNewChildDss(this.props.newParentDs)}componentDidUpdate(e){e.newParentDs!==this.props.newParentDs&&this.setNewChildDss(this.props.newParentDs)}render(){if(!this.props.curDs)return null;const s=this.props.selectedNewDs,a=this.DsInfo;return e.React.createElement("div",{className:"border-color-secondary bg-overlay m-2 p-2 list-item ds-mapping-ds-item"},e.React.createElement(a,{curDs:this.props.curDs,selectedNewDs:s}),e.React.createElement("div",{className:"align-items-center"},e.React.createElement("div",{className:"ds-mapping-drop-down p-2"},e.React.createElement(t.Dropdown,{isOpen:this.state.isNewDsDropdownOpen,className:"w-100 drop-down",toggle:this.toggleDropdown},e.React.createElement(t.DropdownButton,{className:"w-100 text-truncate",disabled:!this.state.newDss},this.getSelectedDsLabel(s)||""),this.state.newDss?e.React.createElement(t.DropdownMenu,{className:"text-truncate",zIndex:1050},e.dataSourceUtils.getSortedArrayByLabel(this.state.newDss).map(((s,a)=>s&&s.id?e.React.createElement(t.DropdownItem,{key:a,onClick:()=>{this.onSelectedNewDsChange(s)},title:s.getLabel()||s.id,style:{width:"220px"}},e.React.createElement("div",{className:"text-truncate"},s.getLabel()||s.id)):null))):null))))}},Ke=class extends e.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState({isDropdownOpen:!this.state.isDropdownOpen})},this.onDropDownItemClicked=e=>{this.props.updateMappedSchema(this.props.curField,e)},this.state={isDropdownOpen:!1}}render(){if(!this.props.curField||!this.props.newSchema)return null;const s=this.props.newSchema,a=this.props.selectedNewField;return e.React.createElement("div",{className:"m-2 filed-mapping-item"},e.React.createElement("div",null,this.props.curField.alias||this.props.curField.name),e.React.createElement("div",{className:"ds-mapping-drop-down p-2"},e.React.createElement(t.Dropdown,{isOpen:this.state.isDropdownOpen,className:"w-100 drop-down",toggle:this.toggleDropdown},e.React.createElement(t.DropdownButton,{className:"w-100 text-truncate",disabled:!s||!s.fields},a&&(a.alias||a.name)||""),s&&s.fields?e.React.createElement(t.DropdownMenu,{className:"text-truncate",zIndex:1050},R(s.fields).map(((a,i)=>s.fields[a]&&s.fields[a].esriType===this.props.curField.esriType?e.React.createElement(t.DropdownItem,{key:i,onClick:()=>{this.onDropDownItemClicked(s.fields[a])},style:{width:"220px"}},e.React.createElement("div",{className:"text-truncate"},s.fields[a].alias||s.fields[a].name)):null))):null)))}};var Ge=p(4992),Qe=p.n(Ge),Ye=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Xe=t=>{const s=window.SVG,{className:a}=t,i=Ye(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:Qe()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var Ze=p(7568),et=p.n(Ze),tt=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const st=t=>{const s=window.SVG,{className:a}=t,i=tt(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:et()},i)):e.React.createElement("svg",Object.assign({className:o},i))};class at extends e.React.PureComponent{constructor(){super(...arguments),this.onToggleExternalDsClicked=()=>{this.props.toggleExternalDs(!this.props.isExternalDsShown)},this.onCancelClicked=()=>{this.props.hideMapping()}}render(){if(!this.props.curDs)return e.React.createElement("div",{className:"m-2"},this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:L.noSupportedDataSource}));const t=this.props.newDs||this.props.curDs;return e.React.createElement("div",{className:"mapping-info"},e.React.createElement("div",{className:"border-color-gray-300 m-2 ds-mapping-header"},this.props.isMappingReady&&e.React.createElement("div",{className:"d-inline-block ds-mapping-header-back",onClick:this.onCancelClicked},e.React.createElement(st,{autoFlip:!0}),e.React.createElement("span",{className:"align-middle ml-2"},this.props.intl.formatMessage({id:"cancel",defaultMessage:e.defaultMessages.cancel})))),e.React.createElement("div",{className:"border-color-gray-300 ds-mapping-cur-info"},e.React.createElement("div",{className:"flex-grow-1 m-2 align-self-center text-truncate ds-label",title:this.props.curDs.getLabel()||this.props.curDs.id},this.props.curDs.getLabel()||this.props.curDs.id),e.React.createElement("div",{className:"d-flex m-2"},e.React.createElement("div",{className:"d-flex bg-default ds-type h6"},e.React.createElement("div",{className:"ml-1 mr-1 ds-type-icon",style:{backgroundColor:"var(--sys-color-success)"}}),e.React.createElement("div",{className:"flex-shrink-0 hint-paper mr-1 text-truncate ds-type-name"},e.dataSourceUtils.getDsTypeString(this.props.curDs.type,this.props.intl))))),e.React.createElement("div",{className:"m-2 d-flex flex-column ds-mapping-collapse"},e.React.createElement("div",{className:"mt-1 d-flex justify-content-between"},e.React.createElement("span",{className:"align-middle ml-1"},"Source"),this.props.isOpenSelectDataBtnHide?null:e.React.createElement("span",{className:"inline-block mr-1 bg-default ds-mapping-source",onClick:this.onToggleExternalDsClicked},e.React.createElement(Xe,{className:"text-default",size:"s"}))),e.React.createElement("div",{className:(0,e.classNames)("text-truncate pl-1 mt-2 w-100 ds-origin-label",{"border border-primary":!!this.props.newDs},{"border-light-500":!this.props.newDs}),title:t.getLabel()||t.id},e.React.createElement("span",{className:"align-middle"},t.getLabel()||t.id))))}}class it extends e.React.PureComponent{constructor(t){super(t),this.updateMappedSchema=(e,t)=>{const s=Object.assign({},this.state.mappedSchema),a=x(e,t,this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema);s.fields[a.jimuName]=a,this.setState({mappedSchema:s})},this.getIsDoneStatus=()=>{let e;return e=!(!h(this.state.curSchema,this.state.mappedSchema)||!this.props.newDs),e},this.getCanSelectNewDs=()=>!this.props.newDs||this.props.newDs.id===this.props.curDs.id,this.getSelectedNewField=(e,t)=>{if(!(this.state.newSchema&&this.state.newSchema.fields&&this.state.mappedSchema&&this.state.mappedSchema.fields&&this.state.mappedSchema.fields[e]))return null;const s=this.state.newSchema.fields[this.state.mappedSchema.fields[e].name];return s&&s.esriType===t?s:null},this.onNextClicked=()=>{let e=Object.assign({},this.state.mappedSchema);this.state.newSchema&&this.state.newSchema.fields&&Object.keys(this.state.newSchema.fields).forEach((t=>{e=b(e,this.state.newSchema.fields[t])})),this.setState({mappedSchema:e},(()=>{this.props.onMappingFinished(this.props.curDs,this.state.mappedSchema,this.props.isLast)}))},this.onPreviousClicked=()=>{this.props.backToPreviousMapping()},this.state={curSchema:l(this.props.curDs),newSchema:m(this.props.newDs),mappedSchema:this.props.defaultMappedSchema&&this.props.defaultMappedSchema.fields?(0,e.Immutable)(this.props.defaultMappedSchema).asMutable({deep:!0}):null,isDone:!1}}componentDidMount(){if(this.getCanSelectNewDs()?this.props.toggleExternalDs(!0):this.props.toggleExternalDs(!1),!this.state.mappedSchema||!this.state.mappedSchema.fields||0===Object.keys(this.state.mappedSchema.fields).length){const e=this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema;this.setState({mappedSchema:{fields:D(this.state.curSchema,this.state.newSchema,e)}})}this.setState({isDone:this.getIsDoneStatus()})}componentDidUpdate(t,s){if((t.curDs!==this.props.curDs||this.getWhetherJsonRelatedDataChange(t,this.props))&&this.setState({curSchema:l(this.props.curDs)}),(t.newDs!==this.props.newDs||this.getWhetherJsonRelatedDataChange(t,this.props))&&this.setState({newSchema:m(this.props.newDs)}),s.newSchema!==this.state.newSchema||s.curSchema!==this.state.curSchema)if(this.props.defaultMappedSchema&&this.props.defaultMappedSchema.fields&&Object.keys(this.props.defaultMappedSchema.fields).length>0)this.setState({mappedSchema:(0,e.Immutable)(this.props.defaultMappedSchema).asMutable({deep:!0})});else{const e=this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema,t={fields:D(this.state.curSchema,this.state.newSchema,e)};this.setState({mappedSchema:t})}s.curSchema===this.state.curSchema&&s.mappedSchema===this.state.mappedSchema&&s.newSchema===this.state.newSchema||this.setState({isDone:this.getIsDoneStatus()})}getWhetherJsonRelatedDataChange(e,t){return e.dataSources!==t.dataSources||e.widgets!==t.widgets||e.messages!==t.messages}render(){return this.props.curDs?e.React.createElement("div",{className:"ds-mapping-field"},e.React.createElement(at,{curDs:this.props.curDs,newDs:this.props.newDs,hideMapping:this.props.hideMapping,isOpenSelectDataBtnHide:!this.getCanSelectNewDs(),toggleExternalDs:this.props.toggleExternalDs,isMappingReady:this.props.isMappingReady,isExternalDsShown:this.props.isExternalDsShown,intl:this.props.intl}),this.state.curSchema&&this.state.curSchema.fields&&Object.keys(this.state.curSchema.fields).length>0?R(this.state.curSchema.fields).map(((t,s)=>e.React.createElement(Ke,{curField:this.state.curSchema.fields[t],newSchema:this.state.newSchema,updateMappedSchema:this.updateMappedSchema,selectedNewField:this.getSelectedNewField(t,this.state.curSchema.fields[t].esriType),key:s}))):e.React.createElement("div",{className:"ml-5 mt-2"},this.props.intl.formatMessage({id:"noUsedFieldToMap",defaultMessage:L.noUsedFieldToMap})),e.React.createElement("div",{className:"fixed-bottom ds-mapping-buttons"},this.props.curDs.parentDataSource&&e.React.createElement(t.Button,{onClick:this.onPreviousClicked,disabled:!this.props.isMappingReady||this.props.isWarning},this.props.intl.formatMessage({id:"previous",defaultMessage:t.defaultMessages.previous})),e.React.createElement(t.Button,{disabled:!this.state.isDone||!this.props.isMappingReady||this.props.isWarning,onClick:this.onNextClicked,className:"ml-2",style:{backgroundColor:"var(--sys-color-primary)"}},this.props.isLast?this.props.intl.formatMessage({id:"done",defaultMessage:t.defaultMessages.done}):this.props.intl.formatMessage({id:"next",defaultMessage:t.defaultMessages.next})))):e.React.createElement("div",{className:"m-2"},this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:L.noSupportedDataSource}))}}class ot extends e.React.PureComponent{constructor(e){super(e),this.updateMappedChildSchema=(e,t)=>{const s=Object.assign({},this.state.mappedSchema),a=m(e),i=a&&a.jimuChildId,o=e&&e.getDataSourceJson()&&e.getDataSourceJson()&&e.getDataSourceJson().schema,n=v(l(e),m(t),o);s.childSchemas[i]=n,this.setState({mappedSchema:s})},this.updateMappedSchema=(e,t)=>{const s=Object.assign({},this.state.mappedSchema),a=m(t),i=a&&a.jimuChildId;s.childSchemas[i]=Object.assign(Object.assign({},s.childSchemas[i]),e),this.setState({mappedSchema:s})},this.setChildDs=(e,t)=>{this.setState({curChildDs:e,newChildDs:t})},this.getIsDoneStatus=()=>{let e;return e=!!h(this.state.curSchema,this.state.mappedSchema),e},this.getIsChildMappingDoneStatus=()=>{let e;var t,s;return t=this.state.curSchema,s=this.state.mappedSchema,e=!!(t&&s&&(u(t)?Object.keys(t.childSchemas).every((e=>!(!s.childSchemas||!s.childSchemas[e]))):t.fields&&Object.keys(t.fields).every((e=>!(!s.fields||!s.fields[e]))))),e},this.getSelectedNewDs=e=>{if(!(this.state.mappedSchema&&this.state.mappedSchema.childSchemas&&this.state.mappedSchema.childSchemas[e]&&this.props.newDs))return null;const t=this.state.mappedSchema.childSchemas[e].childId;return t&&this.props.newDs.isDataSourceSet()?this.props.newDs.getChildDataSource(t):null},this.getDefaultMappedFieldSchema=()=>{const e=m(this.props.curDs);return this.props.defaultMappedSchema&&e?this.props.defaultMappedSchema.childSchemas[e.jimuChildId]:null},this.getWhetherHaveChildDssToMap=()=>this.state.curSchema&&this.state.curSchema.childSchemas&&0!==Object.keys(this.state.curSchema.childSchemas).length,this.onFieldMappingFinished=(e,t,s)=>{const a=Object.assign({},t);this.props.updateMappedSchema&&this.props.updateMappedSchema(a,this.props.curDs),s?this.props.onDsMappingFinished():this.props.traverseParentDsMapping&&this.props.traverseParentDsMapping()},this.onDsMappingFinished=()=>{if(!this.props.newDs||!this.props.newDs.isDataSourceSet())return;let e=Object.assign({},this.state.mappedSchema);this.props.newDs.getChildDataSources().forEach((t=>{e=y(e,m(t))})),this.setState({mappedSchema:e},(()=>{if(this.props.isRoot){const e=g(this.props.curDs.getDataSourceJson(),this.props.newDs.getDataSourceJson(),this.state.mappedSchema);this.props.onMappingFinished&&this.props.onMappingFinished(e)}else this.props.updateMappedSchema&&this.props.updateMappedSchema(this.state.mappedSchema,this.props.curDs);this.props.hideMapping()}))},this.traverseDsMapping=()=>{const e=R(this.state.curSchema.childSchemas).find((e=>this.props.mappingHistory.every((t=>!m(t).jimuChildId||m(t).jimuChildId!==e)))),t=this.props.curDs.isDataSourceSet()&&this.props.curDs.getChildDataSource(e),s=this.getSelectedNewDs(e);t?(this.setChildDs(t,s),this.props.updateMappingHistory(this.props.mappingHistory.concat(t))):this.props.traverseParentDsMapping?this.props.traverseParentDsMapping():(this.setChildDs(null,null),this.onDsMappingFinished())},this.reverseTraverseDsMapping=()=>{const e=this.props.mappingHistory.length>1?this.props.mappingHistory.slice(this.props.mappingHistory.length-2)[0]:null,t=m(e)&&m(e).jimuChildId,s=this.getSelectedNewDs(t);e&&(this.setChildDs(e,s),this.props.updateMappingHistory(this.props.mappingHistory.slice(0,this.props.mappingHistory.length-1)))},this.state={newChildDs:null,curChildDs:null,curSchema:this.props.curDs&&this.props.curDs.isDataSourceSet()?l(this.props.curDs):null,newSchema:this.props.newDs&&this.props.newDs.isDataSourceSet()?m(this.props.newDs):null,mappedSchema:this.props.defaultMappedSchema||null,isDone:!1,isChildMappingDone:!1}}componentDidMount(){if(!this.state.mappedSchema||0===Object.keys(this.state.mappedSchema).length){const e=this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema;this.setState({mappedSchema:v(this.state.curSchema,this.state.newSchema,e)})}this.setState({isDone:this.getIsDoneStatus(),isChildMappingDone:this.getIsChildMappingDoneStatus()})}componentDidUpdate(e,t){if((e.curDs!==this.props.curDs&&this.props.curDs&&this.props.curDs.isDataSourceSet()||this.getWhetherJsonRelatedDataChange(e,this.props))&&this.setState({curSchema:l(this.props.curDs)}),(e.newDs!==this.props.newDs&&this.props.newDs&&this.props.newDs.isDataSourceSet()||this.getWhetherJsonRelatedDataChange(e,this.props))&&this.setState({newSchema:m(this.props.newDs)}),t.newSchema!==this.state.newSchema){const e=this.props.curDs&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson()&&this.props.curDs.getDataSourceJson().schema;this.setState({mappedSchema:v(this.state.curSchema,this.state.newSchema,e)})}t.curSchema===this.state.curSchema&&t.mappedSchema===this.state.mappedSchema&&t.newSchema===this.state.newSchema||this.setState({isDone:this.getIsDoneStatus(),isChildMappingDone:this.getIsChildMappingDoneStatus()}),e.isRoot!==this.props.isRoot&&this.props.isRoot&&this.props.toggleExternalDs(!0)}getWhetherJsonRelatedDataChange(e,t){return e.dataSources!==t.dataSources||e.widgets!==t.widgets||e.messages!==t.messages}render(){return this.props.curDs?e.React.createElement(e.React.Fragment,null,this.state.curChildDs&&this.state.newChildDs?e.React.createElement(ot,{newDs:this.state.newChildDs,curDs:this.state.curChildDs,defaultMappedSchema:this.state.mappedSchema,isRoot:!1,isExternalDsShown:this.props.isExternalDsShown,isMappingReady:this.props.isMappingReady,hideMapping:this.props.hideMapping,toggleExternalDs:this.props.toggleExternalDs,isWarning:this.props.isWarning,mappingHistory:this.props.mappingHistory,updateMappedSchema:this.updateMappedSchema,traverseParentDsMapping:this.traverseDsMapping,updateMappingHistory:this.props.updateMappingHistory,widgets:this.props.widgets,dataSources:this.props.dataSources,messages:this.props.messages,reverseTraverseParentDsMapping:this.reverseTraverseDsMapping,onDsMappingFinished:this.onDsMappingFinished,intl:this.props.intl}):e.React.createElement("div",{className:"w-100 h-100 ds-mapping-ds"},this.props.curDs.isDataSourceSet()?e.React.createElement("div",null,e.React.createElement(at,{curDs:this.props.curDs,newDs:this.props.newDs,hideMapping:this.props.hideMapping,toggleExternalDs:this.props.toggleExternalDs,isMappingReady:this.props.isMappingReady,isExternalDsShown:this.props.isExternalDsShown,intl:this.props.intl}),this.getWhetherHaveChildDssToMap()?e.React.createElement("div",null,e.React.createElement("h5",{className:"m-4 data-setting-secondary-title"},this.props.intl.formatMessage({id:"inUse",defaultMessage:t.defaultMessages.inUse})),R(this.state.curSchema.childSchemas).map(((t,s)=>e.React.createElement(qe,{curDs:this.props.curDs.isDataSourceSet()&&this.props.curDs.getChildDataSource(t),selectedNewDs:this.getSelectedNewDs(t),key:s,newParentDs:this.props.newDs,updateMappedSchema:this.updateMappedChildSchema,isDone:h(this.state.curSchema.childSchemas[t],this.state.mappedSchema.childSchemas[t]),widgets:this.props.widgets,intl:this.props.intl})))):e.React.createElement("div",{className:"p-2"},this.props.intl.formatMessage({id:"noChildDssToMap",defaultMessage:L.noChildDssToMap})),e.React.createElement("div",{className:"fixed-bottom ds-mapping-buttons"},e.React.createElement(t.Button,{disabled:1===this.props.mappingHistory.length||!this.props.isMappingReady||this.props.isWarning,type:"secondary",onClick:this.reverseTraverseDsMapping},this.props.intl.formatMessage({id:"previous",defaultMessage:t.defaultMessages.previous})),e.React.createElement(t.Button,{type:"secondary",onClick:this.traverseDsMapping,disabled:!this.state.isChildMappingDone||!this.props.isMappingReady||this.props.isWarning,className:"ml-2",style:{backgroundColor:"var(--sys-color-primary)"}},this.getWhetherHaveChildDssToMap()?this.props.intl.formatMessage({id:"next",defaultMessage:t.defaultMessages.next}):this.props.intl.formatMessage({id:"done",defaultMessage:t.defaultMessages.done})))):e.React.createElement("div",{className:"ds-mapping-field-container"},e.React.createElement(it,{curDs:this.props.curDs,newDs:this.props.newDs,onMappingFinished:this.onFieldMappingFinished,defaultMappedSchema:this.getDefaultMappedFieldSchema(),isExternalDsShown:this.props.isExternalDsShown,hideMapping:this.props.hideMapping,isLast:M(this.props.curDs,this.props.curDs.parentDataSource,this.props.mappingHistory),toggleExternalDs:this.props.toggleExternalDs,isMappingReady:this.props.isMappingReady,mappingHistory:this.props.mappingHistory.concat(this.props.curDs),isWarning:this.props.isWarning,backToPreviousMapping:this.props.reverseTraverseParentDsMapping,intl:this.props.intl,widgets:this.props.widgets,dataSources:this.props.dataSources,messages:this.props.messages})))):e.React.createElement("div",{className:"m-2"},this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:L.noSupportedDataSource}))}}class nt extends e.React.PureComponent{constructor(){super(...arguments),this.contentStyle={position:"fixed",bottom:"50px",top:"auto",left:"0",right:"auto",width:"280px",height:"90px",backgroundColor:this.props.theme.ref.palette.neutral[500],borderColor:this.props.theme.sys.color.error.main,borderWidth:"1px",borderStyle:"solid",zIndex:5}}render(){return this.props.warning?(0,e.jsx)(t.Popper,{open:!0,style:this.contentStyle,disablePortal:!0,reference:null},this.props.warning):null}}const rt=(0,ne.withTheme)(nt);var lt=function(e,t,s,a){return new(s||(s=Promise))((function(i,o){function n(e){try{l(a.next(e))}catch(e){o(e)}}function r(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((a=a.apply(e,t||[])).next())}))};class ct extends e.React.PureComponent{constructor(t){super(t),this.__unmount=!1,this.createSameDsWithDiffId=t=>lt(this,void 0,void 0,(function*(){if(!t||!t.id)return yield Promise.reject(new Error("Pass a wrong data source"));const s=this.getTempDsId(t.id),a=t.set("id",s).without("schema");return this.creatingDsId=s,yield e.DataSourceManager.getInstance().createDataSource(a).then((e=>(this.creatingDsId=null,e)))})),this.destroyDs=t=>{t&&t!==this.props.ds.id&&e.DataSourceManager.getInstance().destroyDataSource(t)},this.updateMappingHistory=e=>{this.setState({mappingHistory:e})},this.hideMapping=()=>{this.state.newDs&&this.destroyDs(this.state.newDs.id),this.creatingDsId&&this.destroyDs(this.creatingDsId),this.props.hideMapping()},this.hideExternalDs=()=>{this.setState({isExternalDsShown:!1})},this.getTempDsId=t=>`${t}-${(0,e.uuidv1)()}`,this.toggleExternalDs=e=>{this.setState({isExternalDsShown:e})},this.onSelectExternalDs=e=>{const t=e[0];t?(this.setState({isMappingReady:!1}),this.createSameDsWithDiffId(t).then((e=>{this.__unmount||this.setState({newDs:e,isMappingReady:!0,isWarning:!1})}),(e=>{this.__unmount||(console.error(e),this.setState({isMappingReady:!0,isWarning:!0}))}))):this.setState({isWarning:!0})},this.onRemoveExternalDs=e=>{e[0]||this.setState({isWarning:!0}),this.setState({newDs:null})},this.state={newDs:null,mappedSchema:this.props.ds&&this.props.ds.isDataSourceSet()?{childSchemas:{}}:{},mappingHistory:this.props.ds?[this.props.ds]:[],isExternalDsShown:!0,isDone:!1,isMappingReady:!1,isWarning:!1}}componentDidMount(){this.__unmount=!1,this.rootDom&&this.dataSelector&&this.moveDataSelector(),this.props.ds&&this.createSameDsWithDiffId(this.props.ds.getDataSourceJson()).then((e=>{this.__unmount||this.setState({newDs:e,mappedSchema:l(e,(e=>(delete e.alias,e))),isMappingReady:!0,isWarning:!1})}),(e=>{this.__unmount||(console.error(e),this.setState({isMappingReady:!0,isWarning:!0}))}))}componentDidUpdate(e,t){this.rootDom&&this.dataSelector&&this.moveDataSelector(),t.newDs!==this.state.newDs&&t.newDs&&this.destroyDs(t.newDs.id),this.state.newDs||this.creatingDsId||!this.props.ds||(this.setState({isMappingReady:!1}),this.createSameDsWithDiffId(this.props.ds.getDataSourceJson()).then((e=>{this.__unmount||this.setState({newDs:e,mappedSchema:l(e,(e=>(delete e.alias,e))),isMappingReady:!0,isWarning:!1})}),(e=>{this.__unmount||(console.error(e),this.setState({isMappingReady:!0,isWarning:!0}))})))}componentWillUnmount(){this.__unmount=!0,this.state.newDs&&this.destroyDs(this.state.newDs.id),this.creatingDsId&&this.destroyDs(this.creatingDsId)}moveDataSelector(){const e=function(e){if(!e)return null;let t=e.offsetLeft,s=e.offsetTop,a=e.offsetParent;for(;null!==a;)t+=a.offsetLeft,s+=a.offsetTop,a=a.offsetParent;return{x:t,y:s}}(this.rootDom);this.dataSelector&&e&&(this.dataSelector.style.left=`${e.x+this.rootDom.offsetWidth}px`,this.dataSelector.style.top="40px",this.dataSelector.style.bottom="0px",this.dataSelector.style.right="0px")}onMappingFinished(t,s){if(!t||!this.state.newDs)return;let a;t.getDataSourceJson?t.getDataSourceJson&&s&&(a=g(this.props.ds.getDataSourceJson(),this.state.newDs.getDataSourceJson(),s)):a=t,(0,o.getAppConfigAction)().editDataSource(a).exec(),e.DataSourceManager.getInstance().createDataSource(a),this.setState({mappedSchema:a.schema}),this.hideMapping()}render(){return this.props.ds?e.React.createElement("div",{className:"ds-mapping",ref:e=>{this.rootDom=e}},this.props.ds.isDataSourceSet()?e.React.createElement("div",{className:"ds-mapping-ds-container"},e.React.createElement(ot,{curDs:this.props.ds,newDs:this.state.newDs,isRoot:!0,intl:this.props.intl,onMappingFinished:this.onMappingFinished.bind(this),defaultMappedSchema:this.state.mappedSchema,hideMapping:this.hideMapping,toggleExternalDs:this.toggleExternalDs,isWarning:this.state.isWarning,isExternalDsShown:this.state.isExternalDsShown,isMappingReady:this.state.isMappingReady,mappingHistory:this.state.mappingHistory,updateMappingHistory:this.updateMappingHistory,widgets:this.props.widgets,dataSources:this.props.dataSources,messages:this.props.messages})):null,this.props.ds.isDataSourceSet()?null:e.React.createElement("div",{className:"ds-mapping-field-container"},e.React.createElement(it,{curDs:this.props.ds,newDs:this.state.newDs,onMappingFinished:this.onMappingFinished.bind(this),defaultMappedSchema:this.state.mappedSchema,hideMapping:this.hideMapping,isWarning:this.state.isWarning,isMappingReady:this.state.isMappingReady,isExternalDsShown:this.state.isExternalDsShown,isLast:!0,toggleExternalDs:this.toggleExternalDs,mappingHistory:this.state.mappingHistory,intl:this.props.intl,widgets:this.props.widgets,dataSources:this.props.dataSources,messages:this.props.messages})),this.state.isMappingReady?null:e.React.createElement("div",{className:"jimu-secondary-loading"}),this.state.isExternalDsShown?e.React.createElement("div",{className:"ds-mapping-external-data",ref:e=>{this.dataSelector=e}},e.React.createElement(a.ExternalDataSourceSelector,{portalUrl:this.props.portalUrl,onSelect:this.onSelectExternalDs,onRemove:this.onRemoveExternalDs,onCancel:this.hideExternalDs,types:this.props.ds?(0,e.Immutable)([this.props.ds.type]):(0,e.Immutable)([])})):null,this.state.isWarning?e.React.createElement(rt,{warning:this.props.intl.formatMessage({id:"createFailedWarning",defaultMessage:L.createFailedWarning})}):null):e.React.createElement("div",{className:"m-2"},this.props.intl.formatMessage({id:"noSupportedDataSource",defaultMessage:L.noSupportedDataSource}))}}var pt=p(7964),dt=p.n(pt),ht=p(904),ut=p.n(ht),mt=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const gt=t=>{const s=window.SVG,{className:a}=t,i=mt(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component has-rtl-svg",a);return s?e.React.createElement(s,Object.assign({className:o,src:dt(),srcRTL:ut()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var ft=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const St=t=>{const s=window.SVG,{className:a}=t,i=ft(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:ut()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var vt=p(170),Dt=p.n(vt),xt=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const wt=t=>{const s=window.SVG,{className:a}=t,i=xt(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:Dt()},i)):e.React.createElement("svg",Object.assign({className:o},i))},yt=e.ReactRedux.connect((e=>({isRTL:e.appContext.isRTL})))((s=>{var i,n,r,l;const{intl:c,dataSources:p,theme:d,onSearchValueChange:h}=s,[u,m]=e.React.useState(!1),[g,f]=e.React.useState(""),[S,v]=e.React.useState(!1),[D,x]=e.React.useState(!1),[w,y]=e.React.useState(!1),[b,R]=e.React.useState(null),[M,E]=e.React.useState({}),[O,C]=e.React.useState([]),[N,I]=e.React.useState(!1),[j,k]=e.React.useState(!0),[T,A]=e.React.useState({formats:Object.values(e.ExportFormat),maximum:0}),P=e.React.useRef(null),H=e.React.useRef(null),J=e.React.useRef(null),V=c.formatMessage({id:"layers",defaultMessage:t.defaultMessages.layers}),$=c.formatMessage({id:"exportSelectLayers",defaultMessage:L.exportSelectLayers}),W=c.formatMessage({id:"exportSettings",defaultMessage:L.exportSettings}),U=c.formatMessage({id:"search",defaultMessage:e.defaultMessages.search}),F=c.formatMessage({id:"selectAll",defaultMessage:t.defaultMessages.selectAll}),_=c.formatMessage({id:"unSelectAll",defaultMessage:t.defaultMessages.unSelectAll}),z=c.formatMessage({id:"toggleAll",defaultMessage:t.defaultMessages.toggleAll}),B=c.formatMessage({id:"allowExport",defaultMessage:L.allowExport}),q=()=>{const e=Object.keys(M).filter((e=>M[e]));return O.filter((t=>e.includes(t.id)))};e.React.useEffect((()=>{const e={},t=[];Object.keys(p).forEach((s=>{p[s].forEach((s=>{e[s.id]=void 0===M[s.id]||M[s.id],t.push(s)}))})),C(t),E(e)}),[p]),e.React.useEffect((()=>{h(g)}),[g,h]),e.React.useEffect((()=>{J.current&&N&&(J.current.select(),(0,e.focusElementInKeyboardMode)(J.current,!0))}),[N,J]);const K=()=>{v(!1),(0,e.focusElementInKeyboardMode)(P.current)},G=()=>{y(!1),(0,e.focusElementInKeyboardMode)(H.current),H.current=null,R(null)},Q=s=>{var i;const n=void 0===s.getDataSourceJson().disableExport||!s.getDataSourceJson().disableExport;return(0,e.jsx)("div",{key:s.id,className:"layer-item",role:"group","aria-label":s.getLabel()},D&&(0,e.jsx)(t.Checkbox,{className:"chk",checked:null!==(i=M[s.id])&&void 0!==i&&i,onChange:(e,t)=>{((e,t)=>{E((s=>Object.assign(Object.assign({},s),{[e]:t})))})(s.id,t)}}),(0,e.jsx)("div",{className:"flex-grow-1 text-truncate txt",title:s.getLabel()},s.getLabel()),n&&(0,e.jsx)(t.Button,{size:"sm",icon:!0,type:"tertiary","aria-haspopup":"dialog",title:W,"aria-label":W,onClick:e=>{((e,t)=>{w?G():(H.current=e.target,R(t),y(!0),e.stopPropagation())})(e,s)}},(0,e.jsx)(te,{size:"m"})),(0,e.jsx)(t.Switch,{className:"switch",checked:n,"aria-label":B,onChange:(t,i)=>{((t,s)=>{let i=s.getDataSourceJson();i=i.setIn(["disableExport"],!t),i=t?i.setIn(["exportOptions"],{formats:Object.values(e.ExportFormat)}):i.without("exportOptions");const n=a.dataComponentsUtils.editDataSourceJson(i);(0,o.getAppConfigAction)().editDataSource(n).exec()})(i,s)}}))};return(0,e.jsx)("div",{css:e.css`
    .export-setting {
      margin-left: 16px;
      margin-right: 16px;
      padding: 4px 0;
      box-sizing: content-box;
      .export-setting-text {
        font-size: 14px;
        color: ${d.sys.color.surface.paperText};
        font-weight: 600;
      }
      .export-setting-btn {
        padding: 0;
        margin-left: 4px;
      }
      .drop-down-btn{
        padding: 0;
        margin: 0;
        width: 16px;
        .caret-icon {
          margin-left: 8px!important;
        }
      }
      .active{
          background-color: ${d.sys.color.primary.main} !important;
          .jimu-icon{
            color: ${d.sys.color.primary.text} !important;
          }
        }
      .jimu-icon {
        color: ${d.sys.color.surface.paperHint};
      }
    }
    .divider {
      width: 100%;
      margin-top: 8px;
      border-top: 1px solid ${d.sys.color.divider.primary};
    }
    .search-input {
      .input-prefix-icon {
        color: ${d.ref.palette.custom2[400]};
        margin: 5px !important;
      }
    }
    .layer-section {
      display: flex;
      flex-direction: column;
      font-size: 13px;
      color: ${d.sys.color.surface.paperHint};
      font-weight: 600;
      .text-truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .layer-list {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      .layer-title {
        line-height: 26px;
        box-sizing: border-box;
        padding: 4px 0;
        font-weight: 600;
      }
      .second-divider{
        width: 100%;
        margin-top: 12px;
        height: 1px;
        background-color: ${d.sys.color.divider.secondary};
      }
      .title-icon{
          margin-right: 8px;
      }
      .layer-item {
        display: flex;
        align-items: center;
        margin-top: 4px;
        height: 26px;
        line-height: 26px;
        box-sizing: border-box;
        padding: 4px 0;
        .chk {
          margin-right: 8px;
        }
        .txt {
          color: ${d.sys.color.surface.paperText};
          font-weight: 400;
          width: 160px;
        }
        .switch {
          margin-left: 8px;
        }
        .text-truncate {
          flex-grow: 1;
        }
      }
    }
  `,role:"group","aria-label":V},(0,e.jsx)("div",{className:"d-flex justify-content-between export-setting"},(0,e.jsx)("div",{className:"d-flex align-items-center justify-left"},(0,e.jsx)(t.Label,{className:"export-setting-text",title:V,check:!0},V)),(0,e.jsx)("div",{className:"d-flex align-items-center justify-left"},(0,e.jsx)(t.Button,{"aria-expanded":N,size:"sm",icon:!0,type:"tertiary",title:U,"aria-label":U,onClick:()=>{I(!N),f("")}},(0,e.jsx)(wt,{size:"m"})),(0,e.jsx)(t.Button,{className:(0,e.classNames)("export-setting-btn",{active:D}),icon:!0,type:"tertiary",ref:P,title:$,"aria-pressed":D,"aria-label":$,disabled:0===Object.keys(p).length,onClick:()=>{const e=Object.assign({},M);Object.keys(e).forEach((t=>{e[t]=!0})),E(e),x(!D)}},s.isRTL?(0,e.jsx)(St,null):(0,e.jsx)(gt,null)),(0,e.jsx)(t.Dropdown,{isOpen:u,"aria-label":$,disabled:!D,toggle:()=>{m(!u)}},(0,e.jsx)(t.DropdownButton,{title:$,className:"drop-down-btn",arrow:!0,icon:!0,type:"tertiary"}),(0,e.jsx)(t.DropdownMenu,null,[{value:"checked",label:F},{value:"unchecked",label:_},{value:"toggle",label:z}].map((s=>(0,e.jsx)(t.DropdownItem,{key:s.value,onClick:()=>{(e=>{const t=Object.assign({},M);Object.keys(t).forEach((s=>{t[s]="checked"===e||"unchecked"!==e&&!t[s]})),E(t)})(s.value)}},s.label))))),(0,e.jsx)(t.Button,{className:"export-setting-btn",icon:!0,type:"tertiary","aria-haspopup":"dialog",ref:P,title:W,"aria-label":W,disabled:0===q().length,onClick:()=>{v(!S)}},(0,e.jsx)(te,null)))),(0,e.jsx)("div",{className:"divider"}),N&&(0,e.jsx)(t.TextInput,{ref:J,value:g,onChange:e=>{f(e.target.value)},className:"search-input w-100 pl-4 pt-4 pr-4",placeholder:U,allowClear:!0,"aria-label":U,prefix:(0,e.jsx)(wt,{className:"input-prefix-icon"})}),(0,e.jsx)("div",{className:"layer-section p-4 pt-0"},Object.keys(M).length>0&&Object.keys(p).map(((s,a)=>{var i;return(0,e.jsx)("div",{key:s,role:"group","aria-label":s,className:"layer-list"},(0,e.jsx)("div",{className:"flex-grow-1 text-truncate layer-title",title:s},(0,e.jsx)(t.Icon,{icon:e.dataSourceUtils.getDsIcon(null===(i=p[s][0].parentDataSource?p[s][0].parentDataSource:p[s][0])||void 0===i?void 0:i.getDataSourceJson()),className:"title-icon",size:"16"}),s),p[s].map((e=>Q(e))),a!==Object.keys(p).length-1&&(0,e.jsx)("div",{className:"second-divider"}))})),0===Object.keys(M).length&&Object.keys(p).length>0&&(0,e.jsx)(t.Loading,{type:t.LoadingType.Secondary})),(0,e.jsx)(t.Popper,{placement:"right-start",offsetOptions:8,open:S,toggle:K,reference:P,"aria-label":W},(0,e.jsx)(xe,{theme:d,intl:s.intl,cachedAllowExport:j,exportOptions:T,dataSources:q(),onClose:K,cacheSettingStatus:(e,t)=>{k(e),A(t)},selectLayerEnabled:D})),b&&(0,e.jsx)(t.Popper,{placement:"bottom-start",offsetOptions:8,open:w,toggle:G,reference:H,"aria-label":W},(0,e.jsx)(xe,{theme:d,intl:s.intl,dataSources:[b],exportOptions:Object.assign(Object.assign({},null===(i=b.getDataSourceJson())||void 0===i?void 0:i.exportOptions),{formats:null===(l=null===(r=null===(n=b.getDataSourceJson())||void 0===n?void 0:n.exportOptions)||void 0===r?void 0:r.formats)||void 0===l?void 0:l.asMutable()}),singleExport:!0})))})),{useEffect:bt}=e.React;const Rt=e.ReactRedux.connect((e=>({})))((function(t){const{dataSources:s,theme:a}=t,[i,o]=e.React.useState(""),[n,r]=e.React.useState({});return bt((()=>{const e={};Object.keys(s).forEach((t=>{const a=s[t].filter((e=>e.getLabel().toLowerCase().includes(i.toLowerCase())||t.toLowerCase().includes(i.toLowerCase())));a.length>0&&(e[t]=a)})),r(e)}),[s,i]),(0,e.jsx)("div",{css:e.css`
`},(0,e.jsx)(yt,{theme:a,dataSources:n,intl:t.intl,onSearchValueChange:e=>{o(e)}}))}));var Mt=p(6572),Et=p.n(Mt),Ot=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Ct=t=>{const s=window.SVG,{className:a}=t,i=Ot(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",a);return s?e.React.createElement(s,Object.assign({className:o,src:Et()},i)):e.React.createElement("svg",Object.assign({className:o},i))};var Nt=function(e,t,s,a){return new(s||(s=Promise))((function(i,o){function n(e){try{l(a.next(e))}catch(e){o(e)}}function r(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((a=a.apply(e,t||[])).next())}))};const It="layers",jt="dataViews";class kt extends e.React.PureComponent{constructor(t){super(t),this.promises=[],this.externalDsStyle={width:"100%",height:"100%",maxWidth:"5000px",margin:0},this.sidePopperTrigger=e.React.createRef(),this.moreNavTrigger=e.React.createRef(),this.itemInfoBtn=e.React.createRef(),this.exportSettingBtn=e.React.createRef(),this.addToDsHistory=e=>{this.setState({dsHistory:this.state.dsHistory.concat(e)})},this.onRelatedTableClick=e=>{const t=this.state.dsHistory.splice(0,this.state.dsHistory.length-1);t.push(e),this.setState({dsHistory:t})},this.onDsItemClick=e=>{const t=[e],s=0===this.state.dsHistory.length,a=this.state.isSearchInputShown&&!!this.state.searchValue;if(s&&a){let s=e.parentDataSource;for(;s;)t.unshift(s),s=s.parentDataSource}this.addToDsHistory(t),this.resetDefaultActiveTab()},this.onChildDataIconClick=e=>{this.addToDsHistory([e]),this.setState({dsListActiveTab:"layers",fieldListActiveTab:jt})},this.onRelatedWidgetsIconClick=e=>{this.addToDsHistory([e]),e.isDataSourceSet()?this.setState({dsListActiveTab:"widgets",fieldListActiveTab:jt}):this.setState({dsListActiveTab:It,fieldListActiveTab:"widgets"})},this.resetDefaultActiveTab=()=>{this.setState({dsListActiveTab:It,fieldListActiveTab:jt})},this.removeFromDsHistory=e=>{if(this.resetDefaultActiveTab(),!e)return void this.setState({dsHistory:[],detailedItem:null});let t=[];const s=this.state.dsHistory.findIndex((t=>t.id===e.id));this.state.dsHistory.length>0&&(t=this.state.dsHistory.slice(0,s+1)),this.setState({dsHistory:t,detailedItem:null})},this.getSearch=t=>{const s=E(t);if(!s)return null;const a=t.getDataSourceJson().portalUrl;return{q:`id: ${s}`,authentication:e.SessionManager.getInstance().getSessionByUrl(a)}},this.getDsById=t=>t?e.DataSourceManager.getInstance().getDataSource(t):null,this.getListUsedDs=e=>e?this.getDsById(e.id):null,this.backToHomePage=()=>{this.removeFromDsHistory(null)},this.onHomeKeyDown=e=>{this.wrapKeyDown(e,this.backToHomePage)},this.wrapKeyDown=(e,t,...s)=>{e.target!==e.currentTarget||"Enter"!==e.key&&" "!==e.key||t(...s)},this.onNavClicked=e=>{this.removeFromDsHistory(e)},this.onMoreNavClick=()=>{this.toggleMoreNavPopper()},this.onMoreNavKeyDown=e=>{this.wrapKeyDown(e,this.onMoreNavClick)},this.toggleMoreNavPopper=()=>{this.setState({isMoreNavPopperOpen:!this.state.isMoreNavPopperOpen})},this.onSelectDataFinished=t=>{if(!t)return void this.setState({isExternalDsShown:!1});(0,o.getAppConfigAction)().addDataSources(t).exec();const s=t.map((t=>e.DataSourceManager.getInstance().createDataSource(t).then((e=>{if(e.isDataSourceSet()&&!e.getRootDataSource())return e.childDataSourcesReady()}))));Promise.allSettled(s),this.setState({isExternalDsShown:!1})},this.onSelectDataCanceled=()=>{this.setState({isExternalDsShown:!1})},this.onMappingIconClick=e=>{this.setState({mappingDs:e})},this.onShowDetailClick=t=>{const s=this.getSearch(t);if(!s)return;const a=e.cancelablePromise.cancelable(e.esri.restPortal.searchItems(s).then((e=>{this.setState({detailedItem:{item:e.results[0],portalUrl:t.getDataSourceJson().portalUrl}})}),(e=>{console.error(e)})));this.promises.push(a)},this.onCloseDetailClicked=()=>{this.setState({detailedItem:null}),(0,e.focusElementInKeyboardMode)(this.itemInfoBtn.current)},this.onExportSettingClick=()=>{this.props.dataSources&&Object.keys(this.props.dataSources).length>0?this.setState({isExportSettingShown:!this.state.isExportSettingShown}):this.setState({isExportSettingShown:!1})},this.onCloseExportSettingClicked=()=>{this.setState({isExportSettingShown:!1}),(0,e.focusElementInKeyboardMode)(this.exportSettingBtn.current)},this.toggleMoreOptions=e=>{this.setState({moreOptionsDsId:this.state.moreOptionsDsId===e?null:e})},this.onToggleExternalDs=()=>{this.setState({isExternalDsShown:!this.state.isExternalDsShown})},this.hideMapping=()=>{this.setState({mappingDs:null})},this.showExternalDs=()=>{this.setState({isExternalDsShown:!0})},this.onSearchIconClick=e=>{this.setState({isSearchInputShown:!this.state.isSearchInputShown})},this.onSearchValueChange=e=>{this.setState({searchValue:e.target.value})},this.getValidDsJsons=()=>{let t=[];if(!this.props.dataSources)return t;const s=e.dataSourceUtils.getSortedArrayByLabel(Object.keys(this.props.dataSources).map((e=>this.getDsById(e))).filter((e=>e&&!e.getDataSourceJson().isOutputFromWidget&&!e.parentDataSource)));return t=this.state.isSearchInputShown&&this.state.searchValue?O(s,this.state.searchValue):s.map((e=>e.getDataSourceJson())).concat(Object.values(this.props.dataSources).filter((e=>!this.getDsById(null==e?void 0:e.id)&&!(null==e?void 0:e.isOutputFromWidget)))),t},this.onDsItemLoaded=e=>{this.setState({loadedDsItemCount:this.state.loadedDsItemCount+1})},this.getWhetherAllChildDssCreated=e=>!(null==e?void 0:e.isDataSourceSet())||e.areChildDataSourcesCreated(),this.hasPrivilege=t=>Nt(this,void 0,void 0,(function*(){return!(yield e.proxyUtils.isDataSourceSubscriberOrPremium(t.getDataSourceJson()))})),this.getExportSettingDataSources=()=>Nt(this,void 0,void 0,(function*(){if(this.props.dataSources){const t={},s=[],a={},i=Object.keys(this.props.dataSources).map((t=>{const s=this.props.dataSources[t].asMutable({deep:!0}),a=this.getDsById(s.id);if(a&&!s.isOutputFromWidget&&s.type!==e.DataSourceTypes.GroupLayer&&this.getWhetherAllChildDssCreated(a))return a})).filter((e=>void 0!==e));e.dataSourceUtils.getSortedArrayByLabel(i).forEach((a=>{let i=[a];a.isDataSourceSet()&&i.push(...f(a)),i=i.filter((t=>e.dataSourceUtils.doesDsSupportQuery(t)&&!e.dataSourceUtils.doesDsSupportQuery(t.parentDataSource))),i.length>0&&(t[a.getLabel()]=i,s.push(...i))}));const o=yield Promise.allSettled(s.map((e=>this.hasPrivilege(e)))),n=[];return o.forEach(((e,t)=>{"fulfilled"===e.status&&e.value||n.push(s[t])})),Object.keys(t).forEach((e=>{const s=t[e].filter((e=>!n.includes(e)));s.length>0&&(a[e]=s)})),Promise.resolve(a)}return Promise.resolve(null)})),this.state={isExternalDsShown:!1,isSearchInputShown:!1,mappingDs:null,detailedItem:null,dsHistory:[],moreOptionsDsId:null,searchValue:"",dsListActiveTab:It,fieldListActiveTab:jt,isMoreNavPopperOpen:!1,loadedDsItemCount:0,isExportSettingShown:!1,loadedExportSettingDss:null}}componentDidUpdate(t,s){s.isSearchInputShown!==this.state.isSearchInputShown&&this.state.isSearchInputShown&&this.searchInput&&((0,e.focusElementInKeyboardMode)(this.searchInput,!0),this.searchInput.select()),t.isDataSettingActive&&!this.props.isDataSettingActive&&(this.state.detailedItem&&this.onCloseDetailClicked(),this.state.isExportSettingShown&&this.onCloseExportSettingClicked()),t.dataSources===this.props.dataSources&&Object.keys(t.dataSourcesInfo||{}).filter((s=>[e.DataSourceStatus.Created,e.DataSourceStatus.CreateError].includes(t.dataSourcesInfo[s].instanceStatus))).length===Object.keys(this.props.dataSourcesInfo||{}).filter((t=>[e.DataSourceStatus.Created,e.DataSourceStatus.CreateError].includes(this.props.dataSourcesInfo[t].instanceStatus))).length||this.getExportSettingDataSources().then((e=>{this.setState({loadedExportSettingDss:e})}))}componentWillUnmount(){this.promises.forEach((e=>{e.cancel()}))}render(){var o,n,r,l,c,p,d,h;const u=this.getValidDsJsons();return(0,e.jsx)("div",{css:(m=this.props.theme,e.css`
    .more-nav-popper{
      max-width: ${e.polished.rem(228)};
      border-radius: ${e.polished.rem(3)};
      .more-nav-line{
        width: ${e.polished.rem(4)};
        height: ${e.polished.rem(16)};
        border-left: 1px solid ${m.ref.palette.neutral[1e3]};
        border-bottom: 1px solid ${m.ref.palette.neutral[1e3]};
        border-right: 0;
        border-top: 0;
        position: relative;
        right: ${e.polished.rem(-6)};
        top: ${e.polished.rem(-6)};
      }
      .more-nav-link{
        font-size: ${e.polished.rem(12)};
        line-height: ${e.polished.rem(18)};
        text-decoration: none;
      }
    }
    .widget-ds-setting{
      width: 100%;
      height: 100%;
      background-color: ${m.ref.palette.neutral[300]};
      transform: translate(0, 0);

      .cursor-default{
        cursor: default;
      }

      .tab-scroll{
        height: 100%;
        overflow: auto;
        position: relative;
      }

      .tab-scroll-with-bottom-fix{
        height: calc(100% - 50px);
        overflow: auto;
        position: relative;
      }

      .no-selection-view-label{
        width: ${e.polished.rem(150)};
      }

      .font-size-13{
        font-size: ${e.polished.rem(13)};
      }

      .highlight-refresh-icon{
        svg{
          color: ${m.sys.color.primary.light};
        }
      }

      .refresh-last-update-label{
        font-size: ${e.polished.rem(13)};
        color: ${m.ref.palette.neutral[1e3]};
      }

      .data-view-item{
        width: ${e.polished.rem(228)};
        background-color: ${m.ref.palette.neutral[500]};
        font-size: ${e.polished.rem(13)};
        border-radius: 0;
        cursor: pointer;
        .data-view-label {
          padding-right: 8px;
        }
        .data-source-id-copy-button {
          display: none;
        }
      }
      .data-view-item:hover{
        background-color: ${m.ref.palette.neutral[600]};
        .data-view-label {
          padding-right: 0;
        }
        .data-source-id-copy-button {
          display: flex;
        }
      }

      .create-a-view-btn{
        width: ${e.polished.rem(228)};
        height: ${e.polished.rem(32)};
        position: sticky;
      }

      .data-view-container{
        overflow: auto;
        height: calc(100% - 65px);
      }

      .no-selection-view-item{
        width: ${e.polished.rem(260)};
        height: ${e.polished.rem(40)};
        border-top: 1px solid ${m.ref.palette.neutral[700]};
        position: fixed;
        bottom: 0;
      }

      .empty-placeholder{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .empty-placeholder-text, .empty-placeholder-icon{
          display: table;
          margin: 0 auto;
        }
        .empty-placeholder-text{
          color: ${m.ref.palette.neutral[900]};
          font-size: ${e.polished.rem(14)};
          margin-top: 16px;
          text-align: center;
        }
        .empty-placeholder-icon{
          color: var(--sys-color-action-disabled-text);
        }
      }

      .title{
        padding: 18px 16px 2px 16px !important;
        font-size: 1rem;
        font-weight: 500;
        .search-icon{
          cursor: pointer;
          width: 30px;
        }
      }
      .search-input{
        height: 26px;
        border-radius: 2px;
      }

      .list-container{
        height: calc(100% - 127px);
        overflow: auto;
        padding-bottom: 20px;
      }

      .with-search-input.list-container{
        height: calc(100% - 120px);
      }

      .text-data-600{
        color: ${m.ref.palette.neutral[1e3]};
      }

      .border-color-gray-300{
        border-color: ${m.ref.palette.neutral[500]} !important;
      }

      .data-setting-secondary-title{
        font-size: 14px;
        color: ${m.ref.palette.neutral[900]};
        margin-top: 16px !important;
        margin-bottom: 16px !important;
        font-weight: 400;
      }

      .widget-icon{
        >img{
          vertical-align: text-top;
          width: ${e.polished.rem(16)};
          height: ${e.polished.rem(16)};
        }
      }

      .drop-down{
        button{
          background-color: ${m.ref.palette.white};
        }
      }

      .setting-header{
        border-bottom: 1px;
      }

      .ds-nav{
        border-bottom: 1px solid ${m.ref.palette.neutral[700]};
        padding: ${e.polished.rem(10)} ${e.polished.rem(16)};
        .max-width-1{
          max-width: ${e.polished.rem(190)};
        }
        .max-width-2{
          max-width: ${e.polished.rem(90)};
        }
        .max-width-3{
          max-width: ${e.polished.rem(55)};
        }
        .max-width-4{
          max-width: ${e.polished.rem(45)};
        }
        a, .current-ds-link{
          font-size: ${e.polished.rem(12)} !important;
          padding: 0 !important;
          svg{
            margin: 0 0 3px 0 !important;
          }
        }
        .current-ds-link{
          color: ${m.ref.palette.neutral[1100]};
        }
      }

      .add-data{
        height: ${e.polished.rem(30)};
        line-height: ${e.polished.rem(30)};
        width: 228px;
        padding: 0;
        border-radius: 2px;
        cursor: pointer;
        .add-data-label{
          max-width: 85%;
        }
      }
      button.add-data:hover{
        color: ${m.ref.palette.black} !important;
      }

      .export-setting-text{
        font-size: ${e.polished.rem(13)};
        line-height: ${e.polished.rem(18)};
        color: ${m.ref.palette.neutral[1e3]};
        font-weight: 500;
      }

      .two-line-truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
        word-wrap: break-word;
      }

      .three-line-truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-word;
        word-wrap: break-word;
      }

      .ds-info{
        .ds-more, .ds-detail{
          cursor: pointer;
        }
        .ds-more{
          margin-right: ${e.polished.rem(-8)};
        }
      }

      .ds-origin-label{
        max-width: 100%;
        .ds-origin-label-link, .ds-origin-label-link:hover, .ds-origin-label-link:focus, .ds-origin-label-link:active{
          box-shadow: 0 0 0 !important;
          border: 0 !important;
          max-width: 100%;
        }
        .ds-origin-label-link-text{
          display: inline-block;
          font-size: ${e.polished.rem(12)};
          max-width: 100%;
        }
      }

      .mapping-info{
        .ds-label{
          cursor: default;
        }
      }

      .ds-mapping-collapse{
        padding: ${e.polished.rem(10)} ${e.polished.rem(10)} 0  ${e.polished.rem(10)};
        .ds-origin-label{
          max-width: 170px;
          height:  ${e.polished.rem(25)};
          line-height:  ${e.polished.rem(25)};
          border-radius: 2px;
        }
      }

      .ds-thumbnail{
        width:  ${e.polished.rem(18)};
        height:  ${e.polished.rem(18)};
        background-color: ${m.sys.color.info.main};
      }

      .mapping-info{
        .ds-mapping-collapse{
          border: 0;
        }
      }

      .ds-list{
        display: flex;
        flex-direction: column;
        .jimu-tabs{
          flex-grow: 1;
          overflow-y: auto;
          .jimu-nav.nav-pills{
            margin: 0 ${e.polished.rem(16)} !important;
          }
        }
      }

      .field-list{
        display: flex;
        flex-direction: column;
        .jimu-tabs{
          flex-grow: 1;
          .tab-content{
            height: calc(100% - 50px);
          }
          .jimu-nav.nav-pills{
            margin: 0 ${e.polished.rem(16)} !important;
          }
        }
      }

      .field-list, .ds-list{
        height: calc(100% - 60px);

        .ds-info{
          width: 100%;
          .ds-thumbnail-type{
            width: calc(100% - 52px);
          }
          .ds-label{
            font-size: ${e.polished.rem(14)};
            color: ${m.ref.palette.neutral[1100]};
          }
          .ds-type{
            width: calc(100% - 16px);
            font-size: ${e.polished.rem(13)};
            color: ${m.ref.palette.neutral[1e3]};
          }
        }
        .tab-pane{
          width: 100%;
        }
      }

      .field-item{
        font-size: ${e.polished.rem(13)};
        color: ${m.ref.palette.neutral[1200]};
      }

      .ds-mapping{
        .ds-mapping-header{
          height:  ${e.polished.rem(42)};
          line-height:  ${e.polished.rem(42)};
          border-bottom: 1px solid;
          .ds-mapping-header-back{
            cursor: pointer;
          }
        }

        .ds-mapping-cur-info{
          border-bottom: 1px solid;
        }

        .ds-mapping-external-data{
          position: fixed;
          z-index: 4;
        }

        .ds-mapping-set-item{
          .ds-mapping-drop-down{
            .btn-group{
              width: 100%;
              button{
                width: 100%;
              }
            }
          }
        }

        .ds-mapping-buttons{
          left:  ${e.polished.rem(65)};
          bottom:  ${e.polished.rem(10)};
        }

        .ds-mapping-source{
          width:  ${e.polished.rem(20)};
          height:  ${e.polished.rem(20)};
          border-radius:  ${e.polished.rem(10)};
          line-height:  ${e.polished.rem(20)};
          text-align: center;
          cursor: pointer;
        }

        .ds-mapping-ds{
          .ds-origin-label{
            max-width: 100%;
          }
        }

      }
    }

    .widget-ds-setting-add-data-popup{
      .modal-content{
        height: 100%;
      }
    }

    .jimu-nav{
      .jimu-nav-link-wrapper{
        display: block !important;
      }
    }

    .export-setting{
      padding: 4px 0;
      height: 19px;
      line-height: 19px;
      box-sizing: content-box;
      .export-setting-text{
        font-size: 14px;
        color: ${m.sys.color.surface.paperHint};
        font-weight: 600;
      }
    }

  `),className:"w-100 h-100"},(0,e.jsx)("div",{className:"jimu-widget widget-ds-setting setting-pane bg-default",ref:this.sidePopperTrigger},this.state.mappingDs?(0,e.jsx)(ct,{portalUrl:this.props.portalUrl,ds:this.state.mappingDs,widgets:this.props.widgets,dispatch:this.props.dispatch,hideMapping:this.hideMapping,intl:this.props.intl,dataSources:this.props.dataSources,messages:this.props.messages}):(0,e.jsx)("div",{className:"h-100"},this.state.dsHistory.length>0?(0,e.jsx)("div",{className:"d-flex flex-wrap ds-nav"},(0,e.jsx)(t.Link,{title:this.props.intl.formatMessage({id:"home",defaultMessage:t.defaultMessages.home}),onClick:this.backToHomePage,onKeyDown:this.onHomeKeyDown,role:"button"},(0,e.jsx)(Ct,{size:"m"})),this.state.dsHistory.map(((s,a)=>a===this.state.dsHistory.length-1?(0,e.jsx)("div",{className:"d-flex align-items-center",key:a},(0,e.jsx)("span",{className:"mx-1"},"/"),(0,e.jsx)("div",{title:s.getLabel(),className:(0,e.classNames)("current-ds-link text-left text-truncate",{"max-width-1":1===this.state.dsHistory.length,"max-width-2":2===this.state.dsHistory.length,"max-width-3":3===this.state.dsHistory.length,"max-width-4":this.state.dsHistory.length>3})},s.getLabel())):a===this.state.dsHistory.length-2||a===this.state.dsHistory.length-3?(0,e.jsx)("div",{className:"d-flex align-items-center",key:a},(0,e.jsx)("span",{className:"mx-1"},"/"),(0,e.jsx)(t.Link,{title:s.getLabel(),onClick:()=>{this.onNavClicked(s)},onKeyDown:e=>{this.wrapKeyDown(e,this.onNavClicked,s)},className:(0,e.classNames)("text-left text-truncate",{"max-width-1":1===this.state.dsHistory.length,"max-width-2":2===this.state.dsHistory.length,"max-width-3":3===this.state.dsHistory.length,"max-width-4":this.state.dsHistory.length>3}),role:"button"},(0,e.jsx)("div",{className:"text-truncate"},s.getLabel()))):a===this.state.dsHistory.length-4?(0,e.jsx)("div",{className:"d-flex align-items-center",key:a,ref:this.moreNavTrigger},(0,e.jsx)("span",{className:"mx-1"},"/"),(0,e.jsx)(t.Link,{title:this.props.intl.formatMessage({id:"more",defaultMessage:t.defaultMessages.more}),onClick:this.onMoreNavClick,role:"button",onKeyDown:this.onMoreNavKeyDown},(0,e.jsx)(q,null))):null))):null,0===this.state.dsHistory.length?(0,e.jsx)("div",{className:"h-100"},(0,e.jsx)("div",{className:"jimu-builder-panel--header d-flex flex-row text-data-600 title justify-content-between"},(0,e.jsx)("div",{className:"mb-0 w-100 text-truncate text-left"},this.props.intl.formatMessage({id:"data",defaultMessage:t.defaultMessages.data})),(0,e.jsx)("div",{className:"search-icon d-flex align-items-start justify-content-end",onClick:this.onSearchIconClick,title:this.props.intl.formatMessage({id:"search",defaultMessage:e.defaultMessages.search})},(0,e.jsx)(t.Button,{"aria-expanded":this.state.isSearchInputShown,size:"sm",icon:!0,type:"tertiary","aria-label":this.props.intl.formatMessage({id:"search",defaultMessage:e.defaultMessages.search})},(0,e.jsx)(wt,{size:"m"})))),(0,e.jsx)("div",{className:"w-100 px-4"},this.state.isSearchInputShown&&(0,e.jsx)("div",null,(0,e.jsx)(t.TextInput,{value:this.state.searchValue,onChange:this.onSearchValueChange,className:"search-input my-4",placeholder:this.props.intl.formatMessage({id:"search",defaultMessage:e.defaultMessages.search}),ref:e=>{this.searchInput=e},allowClear:!0,"aria-label":this.props.intl.formatMessage({id:"search",defaultMessage:e.defaultMessages.search})}))),(0,e.jsx)("div",{className:"w-100"},e.DataSourceManager.getInstance()&&(0,e.jsx)("div",{className:"d-flex mx-4 mb-1 mt-4"},(0,e.jsx)(t.Button,{type:"primary",className:"flex-grow-1 text-center add-data data-setting-add-data-button",onClick:this.showExternalDs,"aria-label":this.props.intl.formatMessage({id:"addData",defaultMessage:t.defaultMessages.addData})},(0,e.jsx)("div",{className:"w-100 px-2 d-flex align-items-center justify-content-center"},(0,e.jsx)(Ae,{size:"m",className:"mr-2"}),(0,e.jsx)("div",{className:"add-data-label text-truncate",title:this.props.intl.formatMessage({id:"addData",defaultMessage:t.defaultMessages.addData})},this.props.intl.formatMessage({id:"addData",defaultMessage:t.defaultMessages.addData})))))),(0,e.jsx)("div",{className:"w-100"},this.state.loadedExportSettingDss&&Object.keys(this.state.loadedExportSettingDss).length>0&&(0,e.jsx)("div",{className:"d-flex mx-4 mb-1 mt-4 export-setting"},(0,e.jsx)("div",{className:"mb-0 w-100 text-truncate text-left export-setting-text"},this.props.intl.formatMessage({id:"exportSettings",defaultMessage:L.exportSettings})),(0,e.jsx)(t.Button,{size:"sm",icon:!0,type:"tertiary",ref:this.exportSettingBtn,title:this.props.intl.formatMessage({id:"exportSettings",defaultMessage:L.exportSettings}),"aria-label":this.props.intl.formatMessage({id:"exportSettings",defaultMessage:L.exportSettings}),"aria-haspopup":"dialog",onClick:this.onExportSettingClick},(0,e.jsx)(te,{size:16})))),this.props.dataSources&&Object.values(this.props.dataSources).filter((e=>!e.isOutputFromWidget)).length>0?(0,e.jsx)("div",{className:(0,e.classNames)("list-container",{"with-search-input":this.state.isSearchInputShown})},(0,e.jsx)("div",{role:"listbox"},u.map(((t,s)=>{const a=this.getDsById(null==t?void 0:t.id);return(null==t?void 0:t.id)?a&&a.id&&(!a.isDataSourceSet()||a.areChildDataSourcesCreated())?(0,e.jsx)(T,{ds:a,key:s,onDataSourceItemClick:this.onDsItemClick,intl:this.props.intl,onMappingIconClick:this.onMappingIconClick,isMoreOptionsShown:this.state.moreOptionsDsId===a.id,onChildDataIconClick:this.onChildDataIconClick,onRelatedWidgetsIconClick:this.onRelatedWidgetsIconClick,toggleMoreOptions:this.toggleMoreOptions,theme:this.props.theme}):(0,e.jsx)(P,{dsJson:t,key:s,intl:this.props.intl,isMoreOptionsShown:this.state.moreOptionsDsId===t.id,theme:this.props.theme,toggleMoreOptions:this.toggleMoreOptions,onLoaded:this.onDsItemLoaded}):null})))):(0,e.jsx)("div",null,(null===(n=null===(o=(0,e.getAppStore)().getState())||void 0===o?void 0:o.appStateInBuilder)||void 0===n?void 0:n.appConfig)&&(0,e.jsx)("div",{className:"empty-placeholder w-100"},(0,e.jsx)("div",{className:"empty-placeholder-icon"},(0,e.jsx)($,{size:48})),(0,e.jsx)("div",{className:"empty-placeholder-text",dangerouslySetInnerHTML:{__html:this.props.intl.formatMessage({id:"noDataNotice",defaultMessage:L.noDataNotice})}})))):null,this.props.dataSources&&this.state.dsHistory.length>0&&!this.state.dsHistory[this.state.dsHistory.length-1].isDataSourceSet()?(0,e.jsx)(Je,{onShowDetailClick:this.onShowDetailClick,backToHomePage:this.backToHomePage,itemInfoBtn:this.itemInfoBtn,ds:this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1]),widgets:this.props.widgets,onMappingIconClick:this.onMappingIconClick,intl:this.props.intl,theme:this.props.theme,messages:this.props.messages,defaultActive:this.state.fieldListActiveTab,dsInfo:null===(r=this.props.dataSourcesInfo)||void 0===r?void 0:r[null===(l=this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1]))||void 0===l?void 0:l.id],onRelatedTableClick:this.onRelatedTableClick}):null,this.props.dataSources&&this.state.dsHistory.length>0&&this.state.dsHistory[this.state.dsHistory.length-1].isDataSourceSet()?(0,e.jsx)(Re,{onDsItemClicked:this.onDsItemClick,dispatch:this.props.dispatch,itemInfoBtn:this.itemInfoBtn,ds:this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1]),theme:this.props.theme,onMappingIconClick:this.onMappingIconClick,onRelatedTableClick:this.onRelatedTableClick,onShowDetailClick:this.onShowDetailClick,intl:this.props.intl,widgets:this.props.widgets,backToHomePage:this.backToHomePage,onChildDataIconClick:this.onChildDataIconClick,onRelatedWidgetsIconClick:this.onRelatedWidgetsIconClick,areAllChildDssCreated:this.getWhetherAllChildDssCreated(this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1])),defaultActive:this.state.dsListActiveTab,dsInfo:null===(c=this.props.dataSourcesInfo)||void 0===c?void 0:c[null===(p=this.getListUsedDs(this.state.dsHistory[this.state.dsHistory.length-1]))||void 0===p?void 0:p.id]}):null)),(0,e.jsx)(s.SidePopper,{position:"left",isOpen:!!this.state.detailedItem,toggle:this.onCloseDetailClicked,trigger:this.sidePopperTrigger.current},(0,e.jsx)(i.ItemDetail,{item:null===(d=this.state.detailedItem)||void 0===d?void 0:d.item,portalUrl:null===(h=this.state.detailedItem)||void 0===h?void 0:h.portalUrl,onClose:this.onCloseDetailClicked})),(0,e.jsx)(s.SidePopper,{position:"left",isOpen:this.state.isExportSettingShown&&this.state.loadedExportSettingDss&&Object.keys(this.state.loadedExportSettingDss).length>0,toggle:this.onCloseExportSettingClicked,trigger:this.exportSettingBtn.current,title:this.props.intl.formatMessage({id:"exportSettings",defaultMessage:L.exportSettings})},(0,e.jsx)(Rt,{theme:this.props.theme,dataSources:this.state.loadedExportSettingDss,intl:this.props.intl})),this.state.isExternalDsShown?(0,e.jsx)(t.Modal,{isOpen:this.state.isExternalDsShown,style:this.externalDsStyle,toggle:this.onToggleExternalDs,contentClassName:"border-0 h-100",className:"widget-ds-setting-add-data-popup",keyboard:!1},(0,e.jsx)(a.ExternalDataSourceSelector,{portalUrl:this.props.portalUrl,onCancel:this.onSelectDataCanceled,onFinish:this.onSelectDataFinished,isMultiple:!0})):null,this.state.dsHistory.length>3&&(0,e.jsx)(t.Popper,{reference:this.moreNavTrigger,open:this.state.isMoreNavPopperOpen,disablePortal:!0,strategy:"fixed",className:"more-nav-popper",placement:"bottom-start",toggle:this.toggleMoreNavPopper},this.state.dsHistory.map(((s,a)=>a<this.state.dsHistory.length-3?(0,e.jsx)("div",{className:"d-flex align-items-center",key:a,style:{paddingLeft:4*a+"px"}},0!==a&&(0,e.jsx)("div",{className:"more-nav-line"}),(0,e.jsx)(t.Link,{title:s.getLabel(),onClick:()=>{this.onNavClicked(s)},onKeyDown:e=>{this.wrapKeyDown(e,this.onNavClicked,s)},className:"text-left text-truncate more-nav-link pb-0"},s.getLabel())):null))));var m}}kt.mapExtraStateProps=e=>{var t,s,a,i,o,n,r,l,c,p;return{dataSources:null===(s=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.dataSources,widgets:null===(i=null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===i?void 0:i.widgets,messages:null===(n=null===(o=e.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===n?void 0:n.messageConfigs,dataSourcesInfo:null===(r=e.appStateInBuilder)||void 0===r?void 0:r.dataSourcesInfo,isDataSettingActive:"data"===(null===(p=null===(c=null===(l=e.appRuntimeInfo)||void 0===l?void 0:l.sectionNavInfos)||void 0===c?void 0:c["opts-section"])||void 0===p?void 0:p.currentViewId)}};const Tt=kt;function At(e){p.p=e}})(),d})())}}}));