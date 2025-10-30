/*! For license information please see widget.js.LICENSE.txt */
System.register(["jimu-core","jimu-core/react","jimu-for-builder","jimu-for-builder/service","jimu-for-builder/templates","jimu-layouts/layout-builder","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/builder-components","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components","jimu-ui/basic/qr-code"],(function(e,t){var o={},i={},s={},a={},n={},l={},r={},p={},d={},c={},u={},h={},m={};return Object.defineProperty(i,"__esModule",{value:!0}),{setters:[function(e){o.APP_FRAME_NAME_IN_BUILDER=e.APP_FRAME_NAME_IN_BUILDER,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.CONSTANTS=e.CONSTANTS,o.DialogMode=e.DialogMode,o.Immutable=e.Immutable,o.Keyboard=e.Keyboard,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.PageMode=e.PageMode,o.React=e.React,o.ReactDOM=e.ReactDOM,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.SessionManager=e.SessionManager,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.defaultMessages=e.defaultMessages,o.extensionSpec=e.extensionSpec,o.focusElementInKeyboardMode=e.focusElementInKeyboardMode,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jimuHistory=e.jimuHistory,o.jsx=e.jsx,o.loadArcGISJSAPIModule=e.loadArcGISJSAPIModule,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.portalUrlUtils=e.portalUrlUtils,o.portalUtils=e.portalUtils,o.queryString=e.queryString,o.semver=e.semver,o.urlUtils=e.urlUtils,o.utils=e.utils,o.version=e.version},function(e){Object.keys(e).forEach((function(t){i[t]=e[t]}))},function(e){s.builderActions=e.builderActions,s.builderAppSync=e.builderAppSync,s.getAppConfigAction=e.getAppConfigAction,s.helpUtils=e.helpUtils,s.utils=e.utils},function(e){a.AppType=e.AppType,a.appServices=e.appServices,a.getNewTypeKeywordsWhenSaveApp=e.getNewTypeKeywordsWhenSaveApp,a.getPublishStatus=e.getPublishStatus},function(e){n.getFixedModalWindowTemplates=e.getFixedModalWindowTemplates,n.getFixedNonModalWindowTemplates=e.getFixedNonModalWindowTemplates},function(e){l.canDeleteInExpressMode=e.canDeleteInExpressMode,l.splitGridCell=e.splitGridCell},function(e){r.defaultMessages=e.defaultMessages,r.searchUtils=e.searchUtils},function(e){p.styled=e.styled,p.useTheme=e.useTheme,p.withTheme=e.withTheme},function(e){d.AdvancedButtonGroup=e.AdvancedButtonGroup,d.Alert=e.Alert,d.AlertPopup=e.AlertPopup,d.Button=e.Button,d.ButtonGroup=e.ButtonGroup,d.Dropdown=e.Dropdown,d.DropdownButton=e.DropdownButton,d.DropdownItem=e.DropdownItem,d.DropdownMenu=e.DropdownMenu,d.FloatingPanel=e.FloatingPanel,d.Icon=e.Icon,d.Label=e.Label,d.Link=e.Link,d.Loading=e.Loading,d.LoadingType=e.LoadingType,d.Message=e.Message,d.Modal=e.Modal,d.ModalBody=e.ModalBody,d.ModalFooter=e.ModalFooter,d.ModalHeader=e.ModalHeader,d.Option=e.Option,d.Popper=e.Popper,d.Select=e.Select,d.Switch=e.Switch,d.TagInput=e.TagInput,d.TextArea=e.TextArea,d.TextInput=e.TextInput,d.Tooltip=e.Tooltip,d.UserProfile=e.UserProfile,d.defaultMessages=e.defaultMessages},function(e){c.DownloadAppModal=e.DownloadAppModal},function(e){u.dataComponentsUtils=e.dataComponentsUtils},function(e){h.ProxySettingPopup=e.ProxySettingPopup,h.TemplateSelector=e.TemplateSelector,h.changeCurrentDialog=e.changeCurrentDialog,h.changeCurrentPage=e.changeCurrentPage,h.proxySettingUtils=e.proxySettingUtils},function(e){m.QRCode=e.QRCode}],execute:function(){e((()=>{var e={63:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 2H2v2h12zM2 1H1v4h14V1H2m2 7H2v6h2zM2 7H1v8h4V7H2m6 1h6v6H8zM7 7h8v8H7V7" clip-rule="evenodd"></path></svg>'},505:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 4h12v7H2zM0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 10a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></path></svg>'},1496:e=>{"use strict";e.exports=r},1546:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARYSURBVHgB7ZvLahNRGMf/J6mirWJcKFhQp4IKLdiK6KaCEURQF1bwumr6BK1P0OkTmDxB01XxAsaNghU7BV2ICHVRF4oaFRUMaERbxaY5nm9iFk3SJOcyl9T+YLqYziSc//muJ+cwBMHktIVIIYEIGwZHXtxxsBQdw5XjWfgMg5/cnIqLv6Ni0PHaD7A02OIELpxy4BPeCzA+HcPmpUFwPrDywKuYFdaRxPkTE/AY7wSggbcXRkpmzmNQgmVR5CnwtoxX7mFeADJzzofFRw/AKMI9PIgT5gS49WDAHXjzZq4GEwGTCTEMuYeeAEbMXBXhHhHYWIzO6FiFmgBk5kWcFQNP+D/wChjLC6vLqLqHnAAN01jQ8AzYUkomjTYWoGzmjA2KL7DQEvxzjybiRH0Brk/Zwfi3KYQQDarM2gLQrG8q3A6vqatQu8qM1Hy2Y8leXYMnuAjY0fHKu9UCuIGOChmz9MU2Y3B3J8JGtQCcgp15SID0kW68PX0UZzu3IyxUC8B4HzzE6tiATP8BjB/ugdW+EUFTwwLgqQBlEtYOvD3Tj2t9+wMVog2ajOzbhdHuPYita0N2/he67j6We3/vTveSJTv/G/bca0y8+wwdItAgvm0rrvXucwfvN+RK6SM92t+tJYDVEbwP94rgqoOWAKsB32zXyX1F3HkGHQ7GNrlB0yS+CUBBiy4dZnLfjAvw37vAmgBocQJNg2Eg09+rVU2uChegSnI6fkip2/QtCySsTtEAdTf1LKVLivgylCrDblEaf5J6T8sCtgRQAtcjnZUbPKElADVCYSG/WMDY3BvIoiwAmbTVvgFhIfnyPbIL8oWWkgDUBI327EFYoDZ87IX87BNKAlD/H6bZt+fUBk9IC0CzT6s5YSHzMae1KCItQLOpzC+Sr95DB6k8RrNPq0AqyLTDz/M/4BdSAlCwIX+zFQKgiXbYC6RdgKJt191HSkVHGFHKAjSTQ09f4OrsS7Q6WpUgVV+tztqCCAwSW78uFD93yWC0naPVGfq5S5eDU08w61MqDKUL+Nlmr8UAaPDtzyJaHS0B7nzKuVdQ0BqA7NJZJdrONvD4OY4p9AddYg2P1hRks0a5n/guahD5QOnuGluGkWijMgszOVrD++yu6A6LpbVmhdCacY7ZyluBB8Hkqw84LmbVl96iWEhV3gpFFij3FtRkOV/0fHpFOGxcOZWtvF29UfLGw2NAYcT8fv8AKbI0Lp8YqvWvlbfKTt6zEI2WNkYzZqE1yaPIbVw+mVrpgcabpUkIROPCWUZbSAhHDC2D+R8TGDqXr/eg3Hb5yfsJRN2NlHGEE0c4u42LJ2eafUHtwETZPcASCJ48eDGNYjFVK8g1Qu/ITLDuQSdFklj4mWpk5vUwd2jKP/dwZM28HuaPzZXSaMKwe5TMnInAZmjgZbw7OGkmjRox83r4c3aY3EMuTjjgoni51MpHZ2vR2D0ck/7dDP4KUGa5e8S8NvN6/AXWppIKbqQ9gQAAAABJRU5ErkJggg=="},1594:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m2.556 4.75.297 9.75c0 .398.164.78.455 1.06.292.282.688.44 1.1.44h7.184c.412 0 .808-.158 1.1-.44.291-.28.455-.662.455-1.06l.297-9.75zm4.333 8.222a.778.778 0 1 1-1.556 0V7.778a.778.778 0 1 1 1.556 0zm3.667 0a.778.778 0 1 1-1.556 0V7.778a.778.778 0 1 1 1.556 0zM12.058 2.5a1 1 0 0 1-.766-.357l-.659-.786A1 1 0 0 0 9.867 1H6.133a1 1 0 0 0-.766.357l-.659.786a1 1 0 0 1-.766.357H2a1 1 0 0 0-1 1V4h14v-.5a1 1 0 0 0-1-1z"></path></svg>'},1625:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2h3v9H2zm0-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm4 5V2h8v4zm0 5V7h8v4zm-4.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},1888:e=>{"use strict";e.exports=p},1972:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 3a2 2 0 0 1 2-2h8.086a1 1 0 0 1 .707.293l2.914 2.914a1 1 0 0 1 .293.707v1.982l-.612-.613c-.367-.366-.95-.379-1.302-.027L10.18 9.162a2.625 2.625 0 1 0-3.643 3.643l-.092.092L6.067 15H3a2 2 0 0 1-2-2zm1.75.75a1 1 0 0 1 1-1h5.875a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1zm10.92 4.455c.28-.282.747-.272 1.04.022l1.063 1.063c.294.293.304.76.022 1.04l-5.313 5.314-1.944.35a.463.463 0 0 1-.531-.532l.35-1.944z" clip-rule="evenodd"></path></svg>'},2046:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},2075:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 3a2 2 0 0 1 2-2h8.086a1 1 0 0 1 .707.293l2.914 2.914a1 1 0 0 1 .293.707V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm1.75.75a1 1 0 0 1 1-1h5.875a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1zm7.875 6.875a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0" clip-rule="evenodd"></path></svg>'},2199:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6.671 1c.449 0 .819.338.87.773l.005.102v1.78q7.317.616 7.432 8.277l.022.442v.64q-.002.326-.022.746l-.034.503c-.089.525-.433.757-.82.736-.305-.018-.532-.302-.607-.6l-.103-.398-.108-.388q-.184-.63-.325-.901c-1.298-2.504-3.343-3.685-5.435-3.824v1.38a.875.875 0 0 1-1.364.725l-.087-.067L1.299 6.73a.875.875 0 0 1-.078-1.24l.078-.077 4.796-4.197A.88.88 0 0 1 6.67 1" clip-rule="evenodd"></path></svg>'},2460:e=>{"use strict";e.exports=m},3089:e=>{"use strict";e.exports=u},3317:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.329 1a.875.875 0 0 0-.87.773l-.005.102v1.78q-7.317.616-7.432 8.277L1 12.374v.64l.006.35q.006.186.016.396l.034.503c.089.525.433.757.82.736.305-.018.532-.302.607-.6l.103-.398.109-.388q.183-.63.324-.901c1.298-2.504 3.343-3.685 5.435-3.824v1.38a.875.875 0 0 0 1.364.725l.087-.067 4.796-4.196a.875.875 0 0 0 .078-1.24l-.078-.077-4.796-4.197A.88.88 0 0 0 9.33 1" clip-rule="evenodd"></path></svg>'},3600:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2c3.314 0 6 2.574 6 5.75s-2.686 5.75-6 5.75c-.78 0-1.524-.142-2.207-.402Q5.2 12.873 2 14l.198-.52q.879-2.379.549-2.95A5.54 5.54 0 0 1 2 7.75C2 4.574 4.686 2 8 2m0 1C5.23 3 3 5.136 3 7.75c0 .809.212 1.587.613 2.28.282.49.294 1.153.068 2.09l-.08.304.155-.044c1.092-.306 1.81-.391 2.297-.248l.094.031A5.2 5.2 0 0 0 8 12.5c2.77 0 5-2.136 5-4.75S10.77 3 8 3M6 5H5v5h1V8h2v2h1V5H8v2H6zm4 2h1v3h-1zm1-2h-1v1h1z" clip-rule="evenodd"></path></svg>'},4108:e=>{"use strict";e.exports=s},4321:e=>{"use strict";e.exports=d},4324:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10"><g fill="#000"><path d="M7.718 1.293a1 1 0 0 0-1.415 0L5.596 2l2.122 2.121.707-.707a1 1 0 0 0 0-1.414zM7.01 4.828l-2.12-2.12L1 6.595v2.122h2.121z"></path></g></svg>'},4939:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clip-rule="evenodd"></path></svg>'},5160:(e,t,o)=>{"use strict";var i=o(8972);var s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,n=i.useRef,l=i.useEffect,r=i.useMemo,p=i.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,o,i,d){var c=n(null);if(null===c.current){var u={hasValue:!1,value:null};c.current=u}else u=c.current;c=r((function(){function e(e){if(!l){if(l=!0,a=e,e=i(e),void 0!==d&&u.hasValue){var t=u.value;if(d(t,e))return n=t}return n=e}if(t=n,s(a,e))return t;var o=i(e);return void 0!==d&&d(t,o)?(a=e,t):(a=e,n=o)}var a,n,l=!1,r=void 0===o?null:o;return[function(){return e(t())},null===r?void 0:function(){return e(r())}]}),[t,o,i,d]);var h=a(e,c[0],c[1]);return l((function(){u.hasValue=!0,u.value=h}),[h]),p(h),h}},5196:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm0-1V2h4v12zm5-7V2h4v5zm0 7V8h4v6z" clip-rule="evenodd"></path><path fill="#000" d="M14 14.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0z"></path></svg>'},5531:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10"><path fill="#000" fill-rule="evenodd" d="M9.771 2.636 4.124 9.478.298 5.713l1.404-1.426 2.27 2.234 4.257-5.158z" clip-rule="evenodd"></path></svg>'},5664:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="#00C9DD" d="m0 9 4 2v5l-4-2zm4-7 4 2v5L4 7zm4 7 4 2v5l-4-2z"></path><path fill="#70F2FF" d="m0 9 4-2 4 2-4 2zm4-7 4-2 4 2-4 2zm4 7 4-2 4 2-4 2z"></path><path fill="#008197" d="m4 11 4-2v5l-4 2zm4-7 4-2v5L8 9zm4 7 4-2v4.667L12 16z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>'},5737:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m14 4-6 8-6-8z"></path></svg>'},5762:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 11.577 4.461 8.039l.708-.72L7.5 9.65V1h1v8.65l2.33-2.33.709.719zM1 15v-4.038h1V14h12v-3.038h1V15z"></path></svg>'},6055:e=>{"use strict";e.exports=l},6572:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15.29 6.208 8 1 .71 6.208a.5.5 0 1 0 .58.813L2 6.515V15h12V6.514l.71.507a.5.5 0 0 0 .58-.813M13 5.8 8 2.229 3 5.8V14h3v-4h4v4h3zM9 14H7v-3h2z" clip-rule="evenodd"></path></svg>'},6739:e=>{"use strict";e.exports=c},6884:e=>{"use strict";e.exports=n},8013:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"></path></svg>'},8243:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 3H4v11h8zM4 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z" clip-rule="evenodd"></path></svg>'},8418:(e,t,o)=>{"use strict";e.exports=o(5160)},8972:e=>{"use strict";e.exports=i},8996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},9044:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1m0 3V1H5v2zm1.895 1h-9.79l.8 11h8.19z" clip-rule="evenodd"></path></svg>'},9165:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M10 5H6v9h4zM6 3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" clip-rule="evenodd"></path></svg>'},9244:e=>{"use strict";e.exports=o},9298:e=>{"use strict";e.exports=h},9507:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10"><g clip-path="url(#a)"><path fill="#000" d="M0 6h9v2H5v2zm5-4V0l5 4H1V2z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h10v10H0z"></path></clipPath></defs></svg>'},9703:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.25 5.621a.6.6 0 0 1 .933-.5l3.568 2.38a.6.6 0 0 1 0 .998l-3.568 2.38a.6.6 0 0 1-.933-.5z" clip-rule="evenodd"></path></svg>'},9860:e=>{"use strict";e.exports=a}},t={};function g(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,g),s.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var o in t)g.o(t,o)&&!g.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="";var v={};return g.p=window.jimuConfig.baseUrl,(()=>{"use strict";g.r(v),g.d(v,{__set_webpack_public_path__:()=>ko,default:()=>Mo});var e=g(9244),t=g(4321),o=g(4108),i=g(9860);const s="exb-site-express";var a,n,l;!function(e){e.Experience="Web Experience",e.Template="Web Experience Template"}(a||(a={})),function(e){e.Published="Published",e.Draft="Draft",e.Changed="Changed",e.Publishing="Publishing"}(n||(n={})),function(e){e.Save="Save",e.Saved="Saved",e.Saving="Saving",e.SaveError="Save Error",e.SaveSuccess="Save Success"}(l||(l={}));const r={createNew:"Create new",newExperience:"New experience",undo:"Undo",redo:"Redo",save:"Save",saving:"Saving",saved:"Saved",saveError:"Saving error",saveSuccess:"Saved successfully!",publishing:"Publishing",published:"Published",publishError:"Publishing error",publishSuccess:"Published successfully!",publishTo:"Publish to {portal}",saveAndPublishRemind:"You have unsaved changes. These will be automatically saved and published. Do you want to proceed?",saveAndPreviewRemind:"You have unsaved changes. These will be automatically saved and launched in preview. Do you want to proceed?",saveAndPreview:"Save and preview",publishOptions:"Publish options",copySuccess:"Copied successfully!",changeShareSettings:"Change share settings",viewPublishedItem:"View published item",copyPublishedItemLink:"Copy published item link",headerLeave:"Leave",headerLeaveSite:"Leave site?",headerLeaveDescription:"Changes you made may not be saved.",headerScreenSizes:"Screen sizes",editPageForLargeScreen:"Edit your page for large screen devices",editPageForMediumScreen:"Edit your page for medium screen devices",editPageForSmallScreen:"Edit your page for small screen devices",viewPageForMediumScreen:"View layout for medium screen devices",viewPageForSmallScreen:"View layout for small screen devices",appMode:"Live view",generateTemplate:"Generate template",generatingTemplate:"Generating template",moreOptionsForTool:"More",moreTools:"More tools",access:"Access",generateTemplateSuccess:"Generated template successfully!",generateTemplateError:"Generating error",headerLockLayout:"Lock layout",enableLayoutEditing:"Turn on layout lock to disable layout editing",disableLayoutEditing:"Turn off layout lock to enable layout editing",layoutIsEnabled:"Layout editing is enabled.",layoutIsDisabled:"Layout editing is disabled.",appTypeTemplate:"Experience Template",appTypeExperience:"Experience",publishedTitle:"This item can be viewed by users you've shared with.",publishedUnsaveTitle:"There are unpublished changes since last publishing.",itemStatusDraft:"Draft",draftStatusTitle:"This item is not published. It can only be viewed by you.",headerHome:"Home",renameExperience:"Rename experience",renameTemplate:"Rename template",turnOnLiveView:"Turn on live view",turnOffLiveView:"Turn off live view",resolution:"Resolution",changeScreenSize:"Change screen size",createNewExperience:"Create new experience",gotIt:"Got it",templateRemind:"You are now working on an experience template.",unpublishedChanges:"Unpublished changes",transferToFullMode:"Switch to full mode",transferToFullModeErrorRemind:"Failed to switch to full mode",transferAppTitle:"Do you want to move this app to full mode?",transferRemind:"You are about to move this app to Full Mode. This action is irreversible. Once moved, the app can only be edited in Full Mode and cannot be reverted to Express Mode. Proceed with caution.",transferDirectly:"Move directly",transferCopy:"Move a copy",scanQRCode:"Scan QR code to view",downloadQRCode:"Download the QR code"};var p=g(3089),d=g(1888),c=g(4939),u=g.n(c),h=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const m=t=>{const o=window.SVG,{className:i}=t,s=h(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:u()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var f=g(2199),b=g.n(f),w=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const y=t=>{const o=window.SVG,{className:i}=t,s=w(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:b()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var x=g(3317),S=g.n(x),j=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const O=t=>{const o=window.SVG,{className:i}=t,s=j(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:S()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var I=g(9044),T=g.n(I),A=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const P=t=>{const o=window.SVG,{className:i}=t,s=A(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:T()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var M=g(2075),k=g.n(M),C=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const N=t=>{const o=window.SVG,{className:i}=t,s=C(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:k()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var R=g(1972),E=g.n(R),z=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const D=t=>{const o=window.SVG,{className:i}=t,s=z(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:E()},s)):e.React.createElement("svg",Object.assign({className:a},s))};class L extends e.React.PureComponent{getStyle(t){return e.css`
      .item-inner {
        width: 16px;
        height: 16px;
        position: relative;
      }

      .item-loader-container {
        width: 100%;
        height: 100%;
      }

      .la-ball-fall,
        .la-ball-fall>div {
          position:relative;
          -webkit-box-sizing:border-box;
          -moz-box-sizing:border-box;
          box-sizing:border-box
        }

      .la-ball-fall {
        display:block;
        font-size:0;
        color:${t.ref.palette.black}
      }

      .la-ball-fall>div {
        display:inline-block;
        float:none;
        background-color:currentColor;
        border:0 solid currentColor
      }

      .la-ball-fall {
        width:54px;
        height:18px
      }

      .la-ball-fall>div{
        width:10px;
        height:10px;
        margin:4px;
        border-radius:100%;
        opacity:0;
        -webkit-animation:ball-fall 1s ease-in-out infinite;
        -moz-animation:ball-fall 1s ease-in-out infinite;
        -o-animation:ball-fall 1s ease-in-out infinite;
        animation:ball-fall 1s ease-in-out infinite
      }

      .la-ball-fall>div:nth-of-type(1){
        -webkit-animation-delay:-200ms;
        -moz-animation-delay:-200ms;
        -o-animation-delay:-200ms;
        animation-delay:-200ms
      }

      .la-ball-fall>div:nth-of-type(2){
        -webkit-animation-delay:-100ms;
        -moz-animation-delay:-100ms;
        -o-animation-delay:-100ms;
        animation-delay:-100ms
      }

      .la-ball-fall>div:nth-of-type(3){
        -webkit-animation-delay:0ms;
        -moz-animation-delay:0ms;
        -o-animation-delay:0ms;
        animation-delay:0ms
      }

      .la-ball-fall.la-2x{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .la-ball-fall.la-2x>div{
        width:25%;
        height:25%;
        margin:3%;
      }

      @-webkit-keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}
      }

      @-moz-keyframes ball-fall{
        0%{opacity:0;-moz-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-moz-transform:translateY(145%);transform:translateY(145%)}
      }

      @-o-keyframes ball-fall{
        0%{opacity:0;-o-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-o-transform:translateY(145%);transform:translateY(145%)}
      }

      @keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);
        -moz-transform:translateY(-145%);
        -o-transform:translateY(-145%);
        transform:translateY(-145%)}10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;
        -webkit-transform:translateY(145%);
        -moz-transform:translateY(145%);
        -o-transform:translateY(145%);
        transform:translateY(145%)}
      }
    `}render(){return(0,e.jsx)("div",{className:"w-100 h-100",css:this.getStyle(this.props.theme)},(0,e.jsx)("div",{className:"item-inner"},(0,e.jsx)("div",{className:"item-loader-container"},(0,e.jsx)("div",{className:"la-ball-fall la-2x"},(0,e.jsx)("div",null),(0,e.jsx)("div",null),(0,e.jsx)("div",null)))))}}const B=L;var $=g(8972),F=g(8996),U=g.n(F),H=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const V=t=>{const o=window.SVG,{className:i}=t,s=H(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:U()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var W=g(2046),G=g.n(W),Y=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const q=t=>{const o=window.SVG,{className:i}=t,s=Y(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:G()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var _;!function(e){e.AllFolder="AllFolder",e.OtherFolder="OtherFolder"}(_||(_={}));const K={IMAGE:[".png",".jpg",".gif",".jpeg"]},Q=s=>{const a=e.hooks.useTranslation(t.defaultMessages),l=(0,d.useTheme)(),r=(0,$.useRef)(null),p=(0,$.useRef)(null),c=e.css`
    &.modal-dialog{
      width: ${e.polished.rem(640)};
      max-width: ${e.polished.rem(640)};
    }
    & .edit-info-con {
      .info-content-otherinfo {
        width: ${e.polished.rem(346)};
      }
      .info-content-pic {
        width: ${e.polished.rem(240)};
        aspect-ratio: 200/133;
        background-size: 100% 100%;
        background-position: top center;
        margin-right: ${e.polished.rem(20)};
      }
      .edit-thumbnail-btn {
        width: ${e.polished.rem(240)};
        margin-top: ${e.polished.rem(11)};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        display: block;
      }
      .edit-thumbnail-btn-con:hover .edit-thumbnail-btn {
      }
      .info-title-input {
        margin-bottom: ${e.polished.rem(16)};
      }
      .edit-thumbnail-inp {
        bottom: 0;
        left: 0;
        width: ${e.polished.rem(240)};
        height: ${e.polished.rem(34)};
        opacity: 0;
        cursor: pointer;
      }
      .info-content-label {
        font-size: ${e.polished.rem(14)};
        line-height: ${e.polished.rem(18)};
        color: ${l.ref.palette.neutral[900]};
        font-weight: 600;
        margin-bottom: ${e.polished.rem(10)} !important;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
      }
      .info-content-textarea {
        resize: none;
        box-sizing: border-box;
        font-size: ${e.polished.rem(14)};
        textarea {
          max-height: ${e.polished.rem(87)};
          min-height: ${e.polished.rem(32)};
        }
      }
      .link-button {
        text-decoration: underline;
      }
    }
    .modal-footer {
      .left-btn-container {
        flex: 1;
        .jimu-btn {
          min-width: 100px;
        }
      }
    }
  `,{folderUrl:u,templateHeaderText:h,experienceHeaderText:m,originalAppInfo:g,isOpen:v,toggle:f,changePublishStatus:b,onSaveSuccess:w,onSaveError:y,togglePublishOptionList:x,handleTokenInvalid:S,checkAndShowReadOnlyRemind:j}=s,[O,I]=(0,$.useState)(!1),[T,A]=(0,$.useState)(!1),[P,M]=(0,$.useState)(null),[k,C]=(0,$.useState)([]),[N,R]=(0,$.useState)((null==g?void 0:g.title)||""),[E,z]=(0,$.useState)([]),[D,L]=(0,$.useState)(g),[B,F]=(0,$.useState)((null==g?void 0:g.ownerFolder)||"/"),[U,H]=(0,$.useState)([]),[W,G]=(0,$.useState)((null==g?void 0:g.snippet)||""),[Y,_]=(0,$.useState)(null);(0,$.useEffect)((()=>{v&&(X(),Z(),J(),Q())}),[v]);const Q=()=>{var t,o;const i=(null===(o=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.user)||void 0===o?void 0:o.username)||"",s=(null==g?void 0:g.owner)===i;F(s&&(null==g?void 0:g.ownerFolder)||"/")},J=()=>{var e,t;const o=(null==g?void 0:g.tags)?null===(e=null==g?void 0:g.tags)||void 0===e?void 0:e.asMutable({deep:!0}):[],i=null==o?void 0:o.filter((e=>e));R((null==g?void 0:g.title)||""),L(g),F((null==g?void 0:g.ownerFolder)||"/"),H(i),G((null==g?void 0:g.snippet)||""),re(null===(t=null==g?void 0:g.classification)||void 0===t?void 0:t.asMutable({deep:!0}))},X=()=>{var t,o;if(window.jimuConfig.isDevEdition)return!1;const s=(null===(o=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.user)||void 0===o?void 0:o.username)||"";s&&i.appServices.getUserTags(s).then((e=>{var t;const o=null===(t=null==e?void 0:e.tags)||void 0===t?void 0:t.map((e=>e.tag));z(o||[])}))},Z=()=>!window.jimuConfig.isDevEdition&&i.appServices.getFolders({num:1}).then((e=>{ee(e||[])}),(e=>Promise.reject(new Error(e)))),ee=t=>{const o=(0,e.getAppStore)().getState().user,i=(null==o?void 0:o.username)||"",s=[];i&&s.push({value:"/",text:i}),t.forEach((e=>{const t={value:e.id,text:e.title};s.push(t)})),C(s)},te=()=>{A(!T)},oe=(e,t=!1)=>{let o=e.target.value;o=o.length>250?o.slice(0,250):o;let i=D;window.jimuConfig.isDevEdition&&(i=i.set("text",""));t&&(o=/^[ ]*$/.test(o)?D.title:o,o=null==o?void 0:o.replace(/(^\s*)|(\s*$)/g,"")),i=i.set("name",o),i=i.set("title",o),L(i),R(o)},ie=e.hooks.useEventCallback((()=>{if(j())return void f();I(!0);const t=p.current||null,s=window.jimuConfig.isDevEdition?null:B,a=se(g);o.builderAppSync.publishChangeSelectionToApp(null);const l={title:D.title,name:D.name,tags:D.tags,snippet:D.snippet};pe&&(l.classification=D.classification),i.appServices.saveAsApp(null==a?void 0:a.asMutable({deep:!0}),l,s,t).then((t=>{const{id:i}=t;(0,e.getAppStore)().dispatch(o.builderActions.refreshAppListAction(!0));const s=D.set("id",i).set("thumbnailurl",null);L(s),o.builderAppSync.publishAppInfoChangeToApp(s),e.jimuHistory.changeQueryObject({id:i},!1),I(!1),f(),b(n.Draft),w(),x&&x()}),(e=>{I(!1),ae(),S(e)}))})),se=t=>{let o=t.typeKeywords||[];return o=o.map((t=>t.includes("version:")?`version:${e.version}`:t.includes("publishVersion:")?`publishVersion:${e.version}`:t.includes("status:")?`status: ${n.Draft}`:t)),t.set("typeKeywords",o)},ae=()=>{I(!1),f(),y()},ne=()=>{var e;f(),y(!0),_(null),G(""),fe(!1),re(null===(e=null==g?void 0:g.classification)||void 0===e?void 0:e.asMutable({deep:!0}))},[le,re]=(0,$.useState)(),[pe,de]=(0,$.useState)(!0),[ce,ue]=e.React.useState(null),he=e.ReactRedux.useSelector((t=>e.portalUtils.shouldShowClassificationConfig(t))),me=(0,$.useRef)(),ge=`${e.React.useId()}-app-edit-info-classification-banner-text`,[ve,fe]=(0,$.useState)(!1),be=()=>{fe(!0),he&&!ce&&(0,e.loadArcGISJSAPIModule)("esri/kernel").then((t=>{t&&e.moduleLoader.loadModule("jimu-ui/advanced/portal-components").then(ue)})).catch((e=>{console.error("loadArcGISJSAPIModule error",e)}))};return(0,e.jsx)(t.Modal,{isOpen:null==s?void 0:s.isOpen,centered:!0,returnFocusAfterClose:!0,css:c,"aria-label":(null==s?void 0:s.isTemplate)?h:m,backdrop:"static"},(0,e.jsx)(t.ModalHeader,{toggle:ne},(null==s?void 0:s.isTemplate)?h:m),(0,e.jsx)(t.ModalBody,null,(0,e.jsx)("div",{className:"edit-info-con h-100","data-testid":"editInfo"},(0,e.jsx)("div",{className:ve?"d-none":"d-flex justify-content-center w-100 h-100","aria-hidden":ve},(0,e.jsx)("div",null,(0,e.jsx)("div",{"data-testid":"thumbnailCon",className:"info-content-pic",style:{backgroundImage:`url(${Y||(()=>{const t=null==D?void 0:D.thumbnail,o=(0,e.getAppStore)().getState().portalUrl,i=e.SessionManager.getInstance().getSessionByUrl(o);if(null==D?void 0:D.thumbnailurl)return D.thumbnailurl;let s=t;return s=s?`${o}/sharing/rest/content/items/${D.id}/info/${t}?token=${null==i?void 0:i.token}`:`${u}./dist/runtime/assets/defaultthumb.png`,t&&window.jimuConfig.isDevEdition&&(s=`${window.location.origin}${window.jimuConfig.mountPath}/apps/${D.id}/${t}`),s})()})`}}),(0,e.jsx)("div",{className:"position-relative edit-thumbnail-btn-con"},(0,e.jsx)(t.Button,{className:"edit-thumbnail-btn",title:a("editThumbnail")},a("editThumbnail")),(0,e.jsx)("input",{"data-testid":"thumbnailInput",title:a("editThumbnail"),ref:r,className:"position-absolute edit-thumbnail-inp",type:"file",accept:".png, .jpeg, .jpg, .gif, .bmp",onChange:()=>{const e=r.current.files;if(!e||!e[0])return!1;if(e[0].size>10485760)return M(a("fileSizeTips",{maxSize:"10M"})),A(!0),r.current.value=null,!1;const t=".png";if(!K.IMAGE.includes(t.toLowerCase()))return M(a("editAppErrorMessage")),te(),!1;const o=new File([e[0]],`thumbnail${(new Date).getTime()}${t}`,{type:"image/png"}),i=window.URL.createObjectURL(o);_(i),p.current=o}}))),(0,e.jsx)("div",{className:"info-content-otherinfo flex-grow-1"},(0,e.jsx)("div",{className:"info-content-label",title:a("name")},a("name")),(0,e.jsx)(t.TextInput,{value:N,className:"info-title-input",onChange:e=>{let t=e.target.value;t.length>250&&(t=t.slice(0,250)),R(t)},onBlur:e=>{oe(e,!0)},onPressEnter:e=>{oe(e)}}),(0,e.jsx)("div",{className:"info-content-label",title:a("summaryField")},a("summaryField")),(0,e.jsx)(t.TextArea,{placeholder:a("summaryPlaceholder"),defaultValue:W,height:80,className:"info-content-textarea form-control mb-4",onAcceptValue:e=>{const t=D.set("snippet",e);L(t),G(e)}}),!window.jimuConfig.isDevEdition&&(0,e.jsx)("div",{className:"select-choices-con mb-4"},(0,e.jsx)("div",{className:"info-content-label",title:a("tags")},a("tags")),(0,e.jsx)(t.TagInput,{"aria-label":a("tags"),values:U,suggestions:E,onChange:e=>{const t=D.setIn(["tags"],e);H(e),L(t)},name:a("tagsLowerCase"),maxListHeight:80})),!window.jimuConfig.isDevEdition&&(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"info-content-label",title:a("saveInFolder")},a("saveInFolder")),(0,e.jsx)(t.Select,{value:B||"/",onChange:e=>{const t=e.target.value;F(t)}},k.map((o=>(0,e.jsx)(t.Option,{value:o.value,key:o.value},o.text))))),he&&(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"info-content-label d-flex justify-content-between mt-5",role:"group","aria-label":a("classification")},a("classification"),(0,e.jsx)(t.Button,{className:"jimu-outline-inside",icon:!0,type:"tertiary",size:"sm",ref:me,onClick:be,"aria-label":a("edit"),"aria-describedby":ge},(0,e.jsx)(q,null))),(0,e.jsx)("div",{className:"text-truncate",title:null==le?void 0:le.banner,id:ge},(null==le?void 0:le.banner)||(0,e.jsx)(t.Link,{className:"link-button p-0",type:"tertiary",onClick:be},a("classificationPlaceholder")))))),(null==ce?void 0:ce.ClassificationConfigModalContent)&&(0,e.jsx)("div",{className:(0,e.classNames)({"d-none":!ve}),"aria-hidden":!ve},(0,e.jsx)(ce.ClassificationConfigModalContent,{className:"p-1",portalItemId:g.id,values:le,onChange:(e,t)=>{de(e),L(D.set("classification",t))}})),O&&(0,e.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",zIndex:1e4},className:"jimu-primary-loading"}),(0,e.jsx)(t.AlertPopup,{isOpen:T,hideCancel:!0,toggle:()=>{A(!T)}},(0,e.jsx)("div",{className:"align-middle pt-2",style:{fontSize:"1rem"}},(0,e.jsx)(V,{className:"mr-2 align-middle",size:24,color:"var(--sys-color-warning-main)"}),(0,e.jsx)("span",{className:"align-middle"},P))))),(0,e.jsx)(t.ModalFooter,null,ve&&(0,e.jsx)("div",{className:"left-btn-container d-flex justify-content-start"},(0,e.jsx)(t.Button,{onClick:()=>{var t;fe(!1),re(null===(t=null==D?void 0:D.classification)||void 0===t?void 0:t.asMutable({deep:!0})),setTimeout((()=>{(0,e.focusElementInKeyboardMode)(me.current)}))}},a("back"))),(0,e.jsx)(t.Button,{type:"primary",onClick:ie,disabled:!pe},a("commonModalOk")),(0,e.jsx)(t.Button,{onClick:ne},a("commonModalCancel"))))},J=Object.assign({},r,t.defaultMessages),X=o=>{const s=e.hooks.useTranslation(J),a=(0,d.useTheme)(),{originalAppInfo:n,folderUrl:r,appConfig:p,isSave:c,toolListWidth:u,isInDropdown:h,saveState:m,isOpenSaveAsPopper:g,handleTokenInvalid:v,togglePublishOptionList:f,onSaveSuccess:b,setIsOpenSaveAsPopper:w,onSaveError:y,changePublishStatus:x,onSaveClick:S,checkAndShowReadOnlyRemind:j,saveAsPrivileges:O}=o,I=e.React.useRef(c),[T,A]=e.React.useState(l.Saved),P=()=>{j()||(I.current=c,A(l.Saving),w(!0))},M=(null==n?void 0:n.type)===i.AppType.TemplateType;return(0,e.jsx)("div",null,h?(0,e.jsx)("div",null,u<114&&(0,e.jsx)(t.DropdownItem,{onClick:c?void 0:e=>{S()},title:s("save"),className:"dropdown-more-save save-menu",disabled:c,toggle:!1},m===l.Saving?(0,e.jsx)("div",{className:"d-inline-block toollist-dropdown-icon",style:{width:"16px",height:"16px"}},(0,e.jsx)(B,{theme:a})):(0,e.jsx)(N,{className:"toollist-item-icon d-inline-block toollist-dropdown-icon"}),s("save")),(0,e.jsx)(t.DropdownItem,{className:"save-menu",onClick:P,title:s("saveAs"),toggle:!1,disabled:!O},T===l.Saving?(0,e.jsx)("div",{className:"d-inline-block toollist-dropdown-icon",style:{width:"16px",height:"16px"}},(0,e.jsx)(B,{theme:a})):(0,e.jsx)(D,{className:"toollist-item-icon d-inline-block toollist-dropdown-icon"}),s("saveAs"))):(()=>{const o=(()=>{switch(m){case l.Save:return s("save");case l.SaveError:return s("saveError");case l.SaveSuccess:return s("saveSuccess");case l.Saved:return s("saved");case l.Saving:return s("saving")}})();return(0,e.jsx)(t.Button,{id:"tooltip_save",className:(0,e.classNames)("toollist-item",{"toollist-item-click":!c,"tool-hidden":u<114}),type:"tertiary",icon:!0,size:"sm",title:o,disabled:c,onClick:e=>{S()},"aria-label":o},m===l.Saving?(0,e.jsx)("div",{style:{width:"16px",height:"16px"}},(0,e.jsx)(B,{theme:a})):(0,e.jsx)(N,{className:"toollist-item-icon"}))})(),(0,e.jsx)(Q,{handleTokenInvalid:v,originalAppInfo:n,isOpen:g,folderUrl:r,appConfig:p,templateHeaderText:s("saveAsTemplateTitle"),experienceHeaderText:s(M?"saveAsNewTemplate":"saveAsAppTitle"),toggle:()=>{w(!g)},changePublishStatus:x,onSaveSuccess:b,onSaveError:(e=!1)=>{A(I.current?l.Saved:l.Save),!e&&y()},togglePublishOptionList:f,checkAndShowReadOnlyRemind:j}))};var Z=g(5664),ee=g.n(Z),te=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const oe=t=>{const o=window.SVG,{className:i}=t,s=te(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:ee()},s)):e.React.createElement("svg",Object.assign({className:a},s))},ie=o=>{const i=e.hooks.useTranslation(t.defaultMessages),{itemId:s,isOpen:a,itemProtected:n,detailUrl:l,itemTitle:r,deleteToggle:p,deleteApp:d}=o,c=e.css`
    .icon-con {
      margin-right: ${e.polished.rem(12)};
      svg {
        color: var(--sys-color-error-main);
      }
    }
    .modal-title {
      color: var(--ref-palette-neutral-1000);
    }
    .can-not-delete-con {
      margin-bottom: ${e.polished.rem(16)};
      font-size: ${e.polished.rem(16)};
      font-weight: 500;
      line-height: ${e.polished.rem(24)};
      svg {
        margin: 0 ${e.polished.rem(6)} 0 ${e.polished.rem(6)};
      }
      &>div, div a {
        line-height: ${e.polished.rem(24)};
        display: inline-block;
        color: var(--ref-palette-neutral-1000);
      }
      div a {
        font-size: ${e.polished.rem(14)};
        text-decoration: underline;
        font-weight: 400;
      }
    }
    .delete-remind {
      font-size: ${e.polished.rem(13)};
      color: var(--ref-palette-neutral-1100);
    }
    .cancel-button {
      background: var(--ref-palette-neutral-500);
      color: var(--ref-palette-white);
      border: none;
      color: #fff;
    }
  `;return(0,e.jsx)(t.Modal,{className:(0,e.classNames)("d-flex justify-content-center"),isOpen:a,centered:!0,returnFocusAfterClose:!0,autoFocus:!0,backdrop:"static",toggle:p,css:c},(0,e.jsx)(t.ModalHeader,{tag:"h4",toggle:p,className:"item-delete-header"},i("delete")),(0,e.jsx)(t.ModalBody,null,(()=>{const t=i(n?"cannotDeleteItemMessage":"itemDeleteRemind");return(0,e.jsx)("div",{className:"w-100 h-100 d-flex"},n&&(0,e.jsx)("div",{className:"icon-con"},(0,e.jsx)(V,{size:24})),(0,e.jsx)("div",{className:"flex-grow-1"},n&&(0,e.jsx)("div",{className:"can-not-delete-con"},i("cannotDeleteItem",{title:""}),(0,e.jsx)("div",null,(0,e.jsx)(oe,{size:16}),(0,e.jsx)("a",{href:l,target:"view_window"},r))),(0,e.jsx)("div",{className:"delete-remind"},t)))})()),(0,e.jsx)(t.ModalFooter,null,!n&&(0,e.jsx)(t.Button,{type:"danger",onClick:e=>{d(s),p()}},i("delete")),(0,e.jsx)(t.Button,{className:"cancel-button",onClick:p},i("cancel"))))};var se,ae=function(e,t,o,i){return new(o||(o=Promise))((function(s,a){function n(e){try{r(i.next(e))}catch(e){a(e)}}function l(e){try{r(i.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,l)}r((i=i.apply(e,t||[])).next())}))};!function(e){e.AllFolder="AllFolder",e.OtherFolder="OtherFolder"}(se||(se={}));const ne=e.css`
  & .modal-content {
    border: none;
  }
  .header-con {
    & {
      border: none;
      padding: ${e.polished.rem(30)};
      padding-bottom: 0;
    }
    svg {
      color: var(--sys-color-warning-main);
      border-bottom: none;
      margin-right: ${e.polished.rem(12)} !important;
    }
  }
  .transfer-app-con {
    padding-left: ${e.polished.rem(36)};
  }
  .modal-body {
    padding: ${e.polished.rem(24)} ${e.polished.rem(30)};
  }
  .modal-footer {
    & {
      padding: ${e.polished.rem(30)};
      padding-top: 0;
    }
  }
`,le=a=>{const n=e.hooks.useTranslation(t.defaultMessages,r),{originalAppInfo:l,isOpen:p,isSave:d,toggle:c,handleTokenInvalid:u,checkAndShowReadOnlyRemind:h,toggleErrorAlertPopupTips:m}=a,[g,v]=(0,$.useState)(!1),[f,b]=(0,$.useState)(!1),[w,y]=(0,$.useState)(null);(0,$.useEffect)((()=>{!d&&p&&(b(!0),y(n("headerLeaveDescription")))}),[d,p]);const x=()=>{if(h())return void c();v(!0);const e=T();i.appServices.transferAppToFullMode({appInfo:null==l?void 0:l.asMutable({deep:!0}),folderId:e,transferDirectly:!1}).then((e=>{const{id:t,appInfo:o}=e;O(o,t)}),(e=>{j(e)}))},S=()=>{I().then((e=>{const{appInfo:t}=e;O(t,t.id)}),(e=>{j(e)}))},j=e=>{v(!1),u(e),m(!0,n("transferToFullModeErrorRemind")),c()},O=(t,i)=>{v(!1),c(),setTimeout((()=>{o.builderAppSync.publishChangeSelectionToApp(null),e.utils.removeFromLocalStorage(s);const a=o.utils.getBuilderUrl(i);window.location.href=a,o.builderAppSync.publishAppInfoChangeToApp(t)}),200)},I=()=>ae(void 0,void 0,void 0,(function*(){if(!h())return v(!0),o.builderAppSync.publishChangeSelectionToApp(null),i.appServices.transferAppToFullMode({appInfo:null==l?void 0:l.asMutable({deep:!0}),transferDirectly:!0});c()})),T=()=>{var t,o;if(window.jimuConfig.isDevEdition)return null;let i="/";const s=(null===(o=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.user)||void 0===o?void 0:o.username)||"";return(null==l?void 0:l.username)===s&&(null==l?void 0:l.ownerFolder)&&(i=null==l?void 0:l.ownerFolder),i},A=()=>{c(),b(!1)},P=()=>{b(!1)};return(0,e.jsx)("div",null,(0,e.jsx)(t.Modal,{isOpen:p&&!f,centered:!0,returnFocusAfterClose:!0,css:ne,backdrop:"static"},(0,e.jsx)(t.ModalHeader,{className:"header-con"},(0,e.jsx)(V,{className:"mr-2",size:24}),n("transferAppTitle")),(0,e.jsx)(t.ModalBody,null,(0,e.jsx)("div",{className:"transfer-app-con h-100"},(0,e.jsx)("div",null,n("transferRemind")),g&&(0,e.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",zIndex:1e4},className:"jimu-primary-loading"}))),(0,e.jsx)(t.ModalFooter,null,(0,e.jsx)(t.Button,{disabled:g,type:"primary",onClick:S,title:n("transferDirectly")},n("transferDirectly")),(0,e.jsx)(t.Button,{disabled:g,onClick:x,title:n("transferCopy")},n("transferCopy")),(0,e.jsx)(t.Button,{disabled:g,onClick:c,title:n("commonModalCancel")},n("commonModalCancel")))),p&&(0,e.jsx)(t.AlertPopup,{severity:"warning",withIcon:!0,isOpen:f,title:n("transferToFullMode"),description:w,closable:!0,onClickOk:P,onClickClose:A}))},re=e.css`
  & {
    left: 50%;
    transform: translateX(-50%);
    top: 54px;
  }
`,pe=o=>{const{open:i,message:s,type:a,toggle:n}=o,l=(0,e.jsx)("div",{className:"position-fixed alert-popup-con",css:re},(0,e.jsx)(t.Alert,{"aria-live":"polite",closable:!0,banner:!0,form:"basic",onClose:()=>{n(!1)},open:i,shape:"none",text:s,type:a||"error",variant:"contained",withIcon:!0}));return e.ReactDOM.createPortal(l,document.body)};var de=g(2460),ce=g(5762),ue=g.n(ce),he=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const me=t=>{const o=window.SVG,{className:i}=t,s=he(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:ue()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var ge;!function(e){e.Draft="Draft",e.Published="Published"}(ge||(ge={}));const ve=o=>{const i=e.hooks.useTranslation(t.defaultMessages,r),s=(0,d.useTheme)(),a=e.React.useRef(null),[l,p]=e.React.useState(ge.Draft),c=e.React.useCallback((()=>{var e,t;let i="";if(o.url){i=window.location.origin+o.url;const s=new URL(i);let a=null;o.publishStatus===n.Draft||o.publishStatus===n.Published?a=o.publishStatus:o.publishStatus===n.Changed&&(a=l),a===n.Published&&(null===(e=s.searchParams)||void 0===e?void 0:e.has("draft"))&&(null===(t=s.searchParams)||void 0===t||t.delete("draft"),i=s.toString())}return i}),[o.publishStatus,l,o.url]),[u,h]=e.React.useState("");e.React.useEffect((()=>{h(c())}),[o.url,l,o.publishStatus,c]);const m=i("scanQRCode"),g=i("itemStatusDraft"),v=i("published"),f=e.React.useCallback((()=>{let e="";return o.publishStatus===n.Draft?e=g:o.publishStatus===n.Published?e=v:o.publishStatus===n.Changed&&(l===ge.Draft?e=g:l===ge.Published&&(e=v)),e}),[o.publishStatus,l,g,v]),b=i("downloadQRCode")+" "+f();return(0,e.jsx)("div",{className:"qr-code-comp px-4 pt-2 pb-4 jimu-outline-inside",css:e.css`
    &.qr-code-comp {
      /*max-width: 222px;*/

      .jimu-qrcode {
        margin: 20px;
      }

      .tips-btns {
        .draft-published {
          max-width: calc(100% - 16px - 8px);
        }
      }
    }
  `,role:"menuitem",tabIndex:0,"aria-label":m},(0,e.jsx)("div",{className:"pb-2 text-truncate",title:m},m),(0,e.jsx)("div",null,o.publishStatus===n.Publishing&&(0,e.jsx)("div",{style:{position:"relative",height:"216px",width:"190px"}},(0,e.jsx)(t.Loading,{type:t.LoadingType.Secondary})),o.publishStatus!==n.Publishing&&(0,e.jsx)("div",{style:{border:"1px solid var(--sys-color-divider-secondary)"}},(0,e.jsx)(de.QRCode,{level:"M",size:140,marginSize:1,hideDownloadBtn:!0,onRef:e=>a.current=e,value:u,downloadFileName:"Exb_QRCode",fgColor:s.ref.palette.neutral[1100],bgColor:s.ref.palette.neutral[500],id:"app-qr-code-content"}))),(0,e.jsx)("div",{className:"tips-btns mt-3 justify-content-between align-items-center "+(o.publishStatus===n.Publishing?"d-none":"d-flex")},o.publishStatus===n.Draft&&(0,e.jsx)(t.Label,{className:"draft-published text-truncate mb-0",title:g,"aria-label":g},g),o.publishStatus===n.Published&&(0,e.jsx)(t.Label,{className:"draft-published text-truncate mb-0",title:v,"aria-label":v},v),o.publishStatus===n.Changed&&(0,e.jsx)(t.ButtonGroup,{className:"draft-published d-flex",color:"primary",size:"default",variant:"outlined",role:"radiogroup"},(0,e.jsx)(t.Button,{size:"sm",type:"tertiary",className:"draft",style:{maxWidth:80},title:g,"aria-label":g,role:"radio","aria-checked":l===ge.Draft,active:l===ge.Draft,onClick:()=>{p(ge.Draft)}},(0,e.jsx)("div",{className:"text-truncate"}," ",g," ")),(0,e.jsx)(t.Button,{size:"sm",type:"tertiary",className:"published",style:{maxWidth:80},title:v,"aria-label":v,role:"radio","aria-checked":l===ge.Published,active:l===ge.Published,onClick:()=>{p(ge.Published)}},(0,e.jsx)("div",{className:"text-truncate"}," ",v," "))),(0,e.jsx)("div",{className:"download d-flex"},(0,e.jsx)(t.Button,{title:b,"aria-describedby":"app-qr-code-content","aria-label":b,icon:!0,size:"sm",type:"tertiary",onClick:()=>{var e;null===(e=a.current)||void 0===e||e.downloadImg()}},(0,e.jsx)(me,null)))))};var fe=g(6739),be=function(e,t,o,i){return new(o||(o=Promise))((function(s,a){function n(e){try{r(i.next(e))}catch(e){a(e)}}function l(e){try{r(i.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,l)}r((i=i.apply(e,t||[])).next())}))};function we(t){const{queryObject:o,isTemplate:i,isDraft:s}=t;let a=e.urlUtils.getAppUrl({id:o.id,type:i?"template":"app",isDraft:s});return o.locale&&(a=e.urlUtils.appendQueryParam(a,"locale",o.locale)),o.__env__&&(a=e.urlUtils.appendQueryParam(a,"__env__",o.__env__)),a}const ye=t=>{const o=(null==t?void 0:t.groups)||(0,e.Immutable)([]),i=[];return o.forEach((e=>{e.capabilities.indexOf("updateitemcontrol")>-1&&i.push(e.id)})),i};var xe=g(9298),Se=function(e,t,o,i){return new(o||(o=Promise))((function(s,a){function n(e){try{r(i.next(e))}catch(e){a(e)}}function l(e){try{r(i.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,l)}r((i=i.apply(e,t||[])).next())}))};const{useState:je,useEffect:Oe,useRef:Ie,memo:Te}=e.React,Ae=Te((s=>{const a=Ie(!1),p=e.hooks.useTranslation(r,t.defaultMessages),{publishStatus:d,isDataSourceHadInit:c,saveState:u,stateHistory:h,appItem:m,appConfig:g}=s,{isInOnLine:v,checkAndShowReadOnlyRemind:f,changePublishStatus:b,handleTokenInvalid:w,toastNote:y,onSaveClick:x,toggleErrorAlertPopupTips:S}=s,[j,O]=je(null),[I,T]=je(!1),[A,P]=je(!1);Oe((()=>{const e=v()?"ArcGIS Online":"Portal for ArcGIS",t=window.jimuConfig.isDevEdition?"":p("publishTo",{portal:e});O(t)}),[]);const M=e.hooks.useEventCallback((()=>Se(void 0,void 0,void 0,(function*(){const e=f();if(d===n.Publishing||e)return;if(E())k();else{(yield xe.proxySettingUtils.needToConfigProxy())?k(!1):T(!0)}})))),k=e.hooks.useEventCallback(((...e)=>Se(void 0,[...e],void 0,(function*(e=!0){(yield xe.proxySettingUtils.needToConfigProxy())?P(!0):e?N():C(g)})))),C=e=>(b(n.Publishing),a.current=!0,x(e,null,!0).then((()=>{N()}),(e=>{R(e)}))),N=()=>{b(n.Publishing),a.current=!0,i.appServices.publishApp(m).then((e=>{o.builderAppSync.publishAppInfoChangeToApp(e),b(n.Published),y(p("publishSuccess")),a.current=!1}),(e=>{R(e)})).catch((e=>{R(e)}))},R=e=>{e&&(console.error(e),w(e)),a.current=!1,S(!0,p("publishError")),b(n.Changed)},E=e.hooks.useEventCallback((()=>u===l.Saved||h.past.length<=1&&h.future.length<1));return(0,e.jsx)("div",null,(0,e.jsx)(t.Button,{className:"ml-2 tool-list-publish",onClick:M,disabled:((e,t)=>!!a.current||(e===n.Published||e===n.Publishing||!t))(d,c),title:j,"aria-label":j},(0,e.jsx)("span",null,(e=>{if(a.current)return p("publishing");switch(e){case n.Published:return p("published");case n.Publishing:return p("publishing");case n.Changed:case n.Draft:return p("publish")}})(d))),(0,e.jsx)(xe.ProxySettingPopup,{isOpen:A,onToggle:()=>{P(!A)},onCancel:()=>{P(!1)},onFinish:e=>Se(void 0,void 0,void 0,(function*(){return P(!1),C(e)})),appHasBeenSaved:E()}),(0,e.jsx)(t.AlertPopup,{severity:"warning",withIcon:!0,isOpen:I,title:p("publish"),description:p("saveAndPublishRemind"),toggle:e=>{T(!1),e&&k(!1)},okLabel:p("saveAndPublish"),closable:!0}))}));var Pe=g(9703),Me=g.n(Pe),ke=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const Ce=t=>{const o=window.SVG,{className:i}=t,s=ke(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Me()},s)):e.React.createElement("svg",Object.assign({className:a},s))},{memo:Ne,useState:Re,useEffect:Ee}=e.React,ze=Ne((o=>{const i=e.hooks.useTranslation(r,t.defaultMessages),{toolListWidth:s,queryObject:a,isTemplate:n,inDropdown:p,saveState:d,stateHistory:c}=o,{onSave:u,toggleErrorAlertPopupTips:h}=o,[m,g]=Re(!1),[v,f]=Re(!0);Ee((()=>{const e=w(d,c);f(e)}),[d,c]);const b=()=>{g(!0)},w=(e,t)=>e===l.Saved||t.past.length<=1&&t.future.length<1,y=e.hooks.useEventCallback((()=>we({queryObject:a,isTemplate:n,isDraft:!0}))),x=()=>{g(!1)},S=s>=152;return(0,e.jsx)(e.React.Fragment,null,p?!S&&(v?(0,e.jsx)(t.DropdownItem,{onClick:void 0,className:"dropdown-more-preview custom-dropdown-item",disabled:s>=184,tag:"a",href:y(),rel:"noreferrer",target:"_blank",title:i("preview")},(0,e.jsx)("div",{id:"tooltip_preview",title:i("preview")},(0,e.jsx)(Ce,{className:"toollist-dropdown-icon"}),i("preview"))):(0,e.jsx)(t.DropdownItem,{onClick:b,className:"dropdown-more-preview custom-dropdown-item",disabled:s>=184||d===l.Saving,toggle:!1},(0,e.jsx)("div",{id:"tooltip_preview",title:i("preview")},(0,e.jsx)(Ce,{className:"toollist-dropdown-icon"}),i("preview")))):v?(0,e.jsx)(t.Button,{className:(0,e.classNames)("toollist-item toollist-item-click",{"tool-hidden":s<152}),icon:!0,size:"sm",tag:"a",href:y(),rel:"noreferrer",target:"_blank",role:"button",title:i("preview"),type:"tertiary","aria-label":i("preview")},(0,e.jsx)(Ce,{className:"toollist-item-icon"})):(0,e.jsx)(t.Button,{className:(0,e.classNames)("toollist-item toollist-item-click",{"tool-hidden":s<152}),icon:!0,size:"sm",id:"tooltip_preview",title:i("preview"),type:"tertiary",onClick:b,disabled:d===l.Saving,"aria-label":i("preview")},(0,e.jsx)(Ce,{className:"toollist-item-icon"})),(0,e.jsx)(t.AlertPopup,{severity:"warning",withIcon:!0,isOpen:m,title:i("preview"),description:i("saveAndPreviewRemind"),toggle:x,okLabel:i("saveAndPreview"),closable:!0,onClickOk:()=>u(null,null,!0).then((()=>{const e=y();window.open(e,"_blank")}),(e=>{h(!0,i("saveError"))})),onClickClose:x}))}));var De,Le=function(e,t,o,i){return new(o||(o=Promise))((function(s,a){function n(e){try{r(i.next(e))}catch(e){a(e)}}function l(e){try{r(i.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,l)}r((i=i.apply(e,t||[])).next())}))};!function(e){e.NewApp="NewApp",e.SaveAsTemplate="SaveAsTemplate"}(De||(De={}));const Be=Object.assign({},r,t.defaultMessages,e.defaultMessages);class $e extends e.React.PureComponent{constructor(s){var p;super(s),this.fontSizeBase=14,this.panelWidth=210/this.fontSizeBase+"rem",this.save="save",this.saved="saved",this.saving="saving",this.saveError="saveError",this.saveSuccess="saveSuccess",this.translationMap={},this.hasUpdateAppconfigVersion=!1,this.moreButtonRef=null,this.updateSaveState=()=>{const{appConfig:t,appItem:o}=this.props,{savedAppConfig:i,savedAppItem:s,saveState:a}=this.state;if(a!==l.Saving)if(i||s){const a=this.checkIsAppInfoChange(Object.assign({},o),Object.assign({},s)),n=!e.lodash.isDeepEqual(null==t?void 0:t.asMutable({deep:!0}),null==i?void 0:i.asMutable({deep:!0}));a||n?this.onSaveStateChange(l.Save):this.onSaveStateChange(l.Saved)}else a===this.saveError&&this.onSaveStateChange(l.Save)},this.checkIsAppInfoChange=(t,o)=>(delete t.typeKeywords,delete o.typeKeywords,delete t.title,delete o.title,!e.lodash.isDeepEqual(t,o)),this.getDiffKey=(e,t)=>{const o=[],i=(e,t,s)=>{for(const a in e){const n=e[a],l=null==t?void 0:t[a],r=s?`${s}.${a}`:a;"object"==typeof n&&"object"==typeof l?i(n,l,r):n!==l&&o.push(r)}};return i(e,t,""),o},this.updateToollistWidth=()=>{var e,t;const{toolListWidth:o}=this.state,i=(null===(t=null===(e=this.toolContainer)||void 0===e?void 0:e.current)||void 0===t?void 0:t.clientWidth)||0;o!==i&&this.setState({toolListWidth:i})},this.checkIsSaved=()=>this.state.saveState===l.Saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1,this.onUndo=()=>{this.props.stateHistory.past.length<=1||o.utils.undo()},this.onRedo=()=>{this.props.stateHistory.future.length<=0||o.utils.redo()},this._getTimeOffset=e=>{const t=e.getTimezoneOffset();return(t<0?1:-1)*(t<0?Math.abs(t)/60:t/60)*60*60*1e3},this.onSaveClick=(e,t,...o)=>Le(this,[e,t,...o],void 0,(function*(e,t,o=!1){if(this.props.checkAndShowReadOnlyRemind())return;const{titleText:i}=this.props,s=t||this.props.appItem;this.setState({saveState:l.Saving});let a=e||this.props.appConfig;return a=this.updateExbVersion(a),a=this.updateOriginExbVersion(a),s.title=i,this.toggleErrorAlertPopupTips(!1),yield this.saveRequest(s,a).then((e=>Le(this,void 0,void 0,(function*(){return this.onSaveSuccess(a,s,o),this.updateTypeKeywordsAfterSaveItem(s),yield Promise.resolve(null)}))),(e=>Le(this,void 0,void 0,(function*(){return console.error(e),this.onSaveError(o),this.props.handleTokenInvalid(e),yield Promise.reject(new Error(e))}))))})),this.updateExbVersion=t=>{let s=t;return e.semver.lt(e.version,t.exbVersion)&&(s=i.appServices.replaceExbVersionInAppConfig(t),o.builderAppSync.publishAppConfigChangeToApp(s),this.hasUpdateAppconfigVersion=!0),s},this.updateOriginExbVersion=t=>{let i=t;return e.semver.eq(e.version,t.originExbVersion)||(i=t.set("originExbVersion",e.version),o.builderAppSync.publishAppConfigChangeToApp(i)),i},this.onSaveSuccess=(e,t,o=!1)=>{var i,s;!o&&this.props.toastNote(this.translationMap[this.saveSuccess]),this.setState({savedAppConfig:e||(null===(i=this.props)||void 0===i?void 0:i.appConfig),savedAppItem:t||(null===(s=this.props)||void 0===s?void 0:s.appItem),saveState:l.Saved})},this.onSaveError=(e=!1)=>{this.setState({saveState:l.SaveError}),e||this.toggleErrorAlertPopupTips(!0,this.translationMap[this.saveError])},this.saveRequest=(e,t)=>{const o=(new Date).getTime();return i.appServices.saveApp(e,t.set("timestamp",o),!0)},this.duplicateAppItem=e=>{const t=this.getFolderId();return i.appServices.duplicateApp(e,t).then((e=>Promise.resolve(e)),(e=>{console.log(e)}))},this.updateTypeKeywordsAfterSaveItem=e=>{const t=e||this.props.appItem;t.title=this.props.titleText;const s=(0,i.getNewTypeKeywordsWhenSaveApp)(t);t.typeKeywords=s;const a=(0,i.getPublishStatus)(e);o.builderAppSync.publishAppInfoChangeToApp(t),this.props.changePublishStatus(a)},this.onToggleToolTipUndo=()=>{this.setState({toolTipUndoOpen:!this.state.toolTipUndoOpen,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipRedo=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!this.state.toolTipRedoOpen,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipSave=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!this.state.toolTipSaveOpen,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPreview=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!this.state.toolTipPreviewOpen,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublish=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!this.state.toolTipPublishOpen,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublishOptions=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!this.state.toolTipPublishOptionsOpen})},this.togglePublishOptionList=()=>{this.setState({publishOptionsListOpen:!this.state.publishOptionsListOpen,toolTipPublishOptionsOpen:!1}),this.state.publishOptionsListOpen||this.props.onMoreOptionOpen()},this.handelTabEvent=e=>!0,this.toggleMoreToolList=()=>{this.setState({moreToolListOpen:!this.state.moreToolListOpen})},this.copyPublishUrlToClipBoard=()=>{const t=location.origin+window.jimuConfig.mountPath+(window.jimuConfig.useStructuralUrl?`experience/${this.props.queryObject.id}/`:`experience/?id=${this.props.queryObject.id}`),o=document.createElement("input");o.value=t,o.style.position="absolute",o.style.opacity="0",document.body.appendChild(o),(0,e.focusElementInKeyboardMode)(o,!0),o.select(),document.execCommand("copy"),document.body.removeChild(o),this.props.toastNote(this.copySuccess),this.setState({publishOptionsListOpen:!1})},this.isInOnLine=()=>e.portalUrlUtils.isAGOLDomain(this.props.portalUrl),this.saveForKeyBoard=()=>(this.state.saveState===l.Saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1||this.state.saveState===l.Saving||this.onSaveClick(),!1),this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},this.newApp=()=>{if(!this.checkIsSaved())return this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=De.NewApp,!1;this.toNewApp()},this.toNewApp=()=>{const{locale:t}=this.props,i=t?{redirect:"back",locale:t}:{redirect:"back"},s=t?{page:"template",redirect:"back",locale:t}:{page:"template",redirect:"back"};o.builderAppSync.publishChangeSelectionToApp(null),this.props.itemType===a.Experience?(e.jimuHistory.changePage("template"),window.jimuConfig.useStructuralUrl?e.jimuHistory.changeQueryObject(i,!0):e.jimuHistory.changeQueryObject(s,!0)):this.createNewAppByTemplate(this.props.appItem)},this.createNewAppByTemplate=t=>{i.appServices.createAppByItemTemplateInfo(t).then((t=>{t&&(e.jimuHistory.changeQueryObject({id:t},!0),this.props.changePublishStatus(n.Draft))}),(()=>null))},this.isConfirmsaveAsTemplate=()=>{if(!this.props.checkAndShowReadOnlyRemind())return this.checkIsSaved()?void this.saveAsTemplate():(this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=De.SaveAsTemplate,!1)},this.saveAsTemplate=()=>{var t;this.toggleLoading(!0),i.appServices.createTemplateByApp(null===(t=this.props)||void 0===t?void 0:t.appItem).then((t=>{this.toggleLoading(!1),t&&(this.props.toastNote(this.generateTemplateSuccess),e.jimuHistory.changeQueryObject({id:t},!0),this.props.changePublishStatus(n.Draft))}),(()=>{this.props.toastNote(this.generateTemplateError),this.toggleLoading(!1)}))},this.toggleLoading=o=>{(0,e.getAppStore)().dispatch(e.appActions.setIsBusy(o,t.LoadingType.Skeleton,this.generatingTemplate))},this.deleteApp=(t,o)=>{i.appServices.deleteApp(t).then((()=>{o&&(e.jimuHistory.changeQueryObject({id:o},!0),this.props.changePublishStatus(n.Draft))}),(e=>{this.props.handleTokenInvalid(e)}))},this.handleToggleForLeaveAlertPopup=e=>{if(this.setState({isShowLeaveAlertPopup:!this.state.isShowLeaveAlertPopup}),e)switch(this.clickEventType){case De.NewApp:this.toNewApp();break;case De.SaveAsTemplate:this.saveAsTemplate()}},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:Be[e]}):e,this.getAlertPopTitle=()=>{switch(this.clickEventType){case De.NewApp:case De.SaveAsTemplate:return this.nls("headerLeaveSite")}},this.getAlertPopOkLabel=()=>{switch(this.clickEventType){case De.NewApp:case De.SaveAsTemplate:return this.nls("headerLeave")}},this.previewAlertPopStyle=()=>{var t,o,i,s,a,n;const l=null===(t=this.props)||void 0===t?void 0:t.theme;return e.css`
      .preview-alert-pop-content {
        font-size: 1rem;
        position: relative;
      }
      .modal-footer {
        padding: 0;
      }
      .modal-content {
        border: 1px solid ${null===(o=null==l?void 0:l.sys.color)||void 0===o?void 0:o.secondary.main};
      }
      .perview-pop-button-con {
        right:0;
        bottom: -20px;
        text-align: right;
        margin-top: ${e.polished.rem(32)};
      }
      .preview-alert-pop-btn {
        min-width: ${e.polished.rem(80)};
        border: none;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.375rem;
        border-radius: 2px;
        background: transparent;
      }
      .btn-primary {
        color: ${null===(i=l.ref.palette)||void 0===i?void 0:i.black};
        background: ${null===(s=null==l?void 0:l.sys.color)||void 0===s?void 0:s.primary.main};
      }
      .btn-cancle {
        color: ${null===(a=null==l?void 0:l.ref.palette)||void 0===a?void 0:a.neutral[1e3]};
        border-color: ${null===(n=null==l?void 0:l.sys.color)||void 0===n?void 0:n.secondary.dark};
        margin-left: ${e.polished.rem(10)};
        border-width: 1px;
        border-style: solid;
      }
    `},this.getFolderId=()=>{var t,o;const{appItem:i}=this.props;return(null===(o=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.user)||void 0===o?void 0:o.username)===(null==i?void 0:i.owner)?null:(null==i?void 0:i.ownerFolder)||null},this.onSaveStateChange=e=>{this.setState({saveState:e})},this.setIsOpenSaveAsPopper=e=>{this.setState({isOpenSaveAsPopper:e})},this.handleToggle=()=>{if(this.props.checkAndShowReadOnlyRemind())return;const{appItem:e}=this.props;if(null==e?void 0:e.protected)return void this.setState({isOpenDeletePopper:!0,alertPopupMessage:this.nls("unableDelete")});const{isOpenDeletePopper:t}=this.state;this.setState({isOpenDeletePopper:!t})},this.handleConfirm=e=>{window.onbeforeunload=null,this.setState({loading:!0,isOpenDeletePopper:!1}),i.appServices.deleteApp(e).then((()=>{this.setState({loading:!1});const e=window.isExpressBuilder?"?express=true":"",t=`${window.jimuConfig.mountPath}${e}`;window.location.assign(t)}),(e=>{this.props.handleTokenInvalid(e),"CONT_0048"===(null==e?void 0:e.code)?this.setState({loading:!1,itemProtected:!0,isOpenDeletePopper:!0,alertPopupMessage:this.nls("unableDelete")}):this.setState({isShowAlertPopup:!0,alertPopupMessage:this.nls("deleteError"),loading:!1})}))},this.toggleAlertPopup=()=>{const{isShowAlertPopup:e}=this.state;this.setState({isShowAlertPopup:!e,alertPopupMessage:""})},this.onDownloadAppModalOpen=()=>{this.setState({isOpenDownloadAppModal:!0})},this.onDownloadAppModalClose=()=>{this.setState({isOpenDownloadAppModal:!1}),(0,e.focusElementInKeyboardMode)(this.moreButtonRef)},this.toggleTransferToFullModePopper=()=>{this.setState({openTransferToFullModePopper:!this.state.openTransferToFullModePopper})},this.checkIsAppSaved=()=>{var e,t;const{stateHistory:o}=this.props,{saveState:i}=this.state;return i===l.Saved||(null===(e=null==o?void 0:o.past)||void 0===e?void 0:e.length)<=1&&(null===(t=null==o?void 0:o.future)||void 0===t?void 0:t.length)<1},this.renderMore=()=>{const o=window.jimuConfig.isDevEdition,i=window.isExpressBuilder,{itemType:s,publishStatus:l,stateHistory:p,theme:d,queryObject:c,appItem:u,appConfig:h,canEditItem:g,handleTokenInvalid:v}=this.props,{saveState:f,toolListWidth:b,isOpenSaveAsPopper:w}=this.state,x=s===a.Template,S=this.checkIsAppSaved(),j=we({queryObject:c,isTemplate:x,isDraft:!0}),I=we({queryObject:c,isTemplate:x});return(0,e.jsx)("div",{className:"tool_more_con h-100"},(0,e.jsx)(t.Dropdown,{size:"sm",toggle:this.togglePublishOptionList,isOpen:this.state.publishOptionsListOpen||w,handelTabEvent:this.handelTabEvent},(0,e.jsx)(t.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"tertiary",className:"toollist-item-click",title:this.moreOptionsForTool,ref:e=>{this.moreButtonRef=e}},(0,e.jsx)(m,{className:"toollist-dropdown-icon"})),(0,e.jsx)(t.DropdownMenu,{css:this.getDropdownStyle(d)},(0,e.jsx)(t.DropdownItem,{onClick:this.onUndo,className:"dropdown-more-undo",disabled:p.past.length<=1||b>=38,toggle:!1},(0,e.jsx)("div",{title:this.undo},(0,e.jsx)(y,{className:"toollist-dropdown-icon",autoFlip:!0}),this.undo)),(0,e.jsx)(t.DropdownItem,{onClick:this.onRedo,className:"dropdown-more-redo",disabled:this.props.stateHistory.future.length<1||b>=76,toggle:!1},(0,e.jsx)("div",{title:this.redo},(0,e.jsx)(O,{className:"toollist-dropdown-icon",autoFlip:!0}),this.redo)),(0,e.jsx)(X,{handleTokenInvalid:v,originalAppInfo:(0,e.Immutable)(u),folderUrl:this.props.folderUrl,appConfig:h,isSave:S,toolListWidth:b,isInDropdown:!0,onSaveSuccess:this.onSaveSuccess,onSaveError:this.onSaveError,saveState:f,onSaveStateChange:this.onSaveStateChange,changePublishStatus:this.props.changePublishStatus,onSaveClick:this.onSaveClick,setIsOpenSaveAsPopper:this.setIsOpenSaveAsPopper,isOpenSaveAsPopper:w,togglePublishOptionList:this.togglePublishOptionList,checkAndShowReadOnlyRemind:this.props.checkAndShowReadOnlyRemind,saveAsPrivileges:g}),(0,e.jsx)(ze,{onSave:this.onSaveClick,toggleErrorAlertPopupTips:this.toggleErrorAlertPopupTips,toolListWidth:b,isTemplate:x,saveState:f,stateHistory:this.props.stateHistory,queryObject:this.props.queryObject,inDropdown:!0}),(0,e.jsx)(t.DropdownItem,{onClick:this.handleToggle,className:"dropdown-more-delete",disabled:!g},(0,e.jsx)("div",{id:"tooltip_delete",title:this.delete},(0,e.jsx)(P,{className:"toollist-dropdown-icon"}),this.delete)),(0,e.jsx)(t.DropdownItem,{divider:!0}),!o&&(0,e.jsx)(t.DropdownItem,{onClick:()=>{window.open(`${this.props.portalUrl}/home/item.html?id=${this.props.currentAppId}`)}},this.changeShareSettings),(0,e.jsx)(t.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{window.open(I,"_blank"),this.setState({publishOptionsListOpen:!1})}},this.viewPublishedItem),o&&l!==n.Draft&&(0,e.jsx)(t.DropdownItem,{onClick:this.onDownloadAppModalOpen,a11yFocusBack:!1},this.props.intl.formatMessage({id:"download",defaultMessage:t.defaultMessages.download})),(0,e.jsx)(t.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{this.copyPublishUrlToClipBoard()}},this.copyPublishedItemLink),l!==n.Draft&&x&&(0,e.jsx)(t.DropdownItem,{onClick:()=>{this.newApp()}},this.createNewExperience),!x&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(t.DropdownItem,{divider:!0}),(0,e.jsx)(t.DropdownItem,{onClick:()=>{this.newApp()}},this.createNew)),s===a.Experience&&!i&&(0,e.jsx)(t.DropdownItem,{disabled:!g,onClick:()=>{this.isConfirmsaveAsTemplate()}},this.generateTemplate),i&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(t.DropdownItem,{onClick:this.toggleTransferToFullModePopper},this.props.intl.formatMessage({id:"transferToFullMode",defaultMessage:r.transferToFullMode}))),(0,e.jsx)(t.DropdownItem,{divider:!0}),(0,e.jsx)(ve,{url:j,publishStatus:l,isTemplate:x}))),o&&l!==n.Draft&&this.state.isOpenDownloadAppModal&&(0,e.jsx)(fe.DownloadAppModal,{appId:this.props.appItem.id,isOpen:this.state.isOpenDownloadAppModal,onClose:this.onDownloadAppModalClose}))},this.toggleErrorAlertPopupTips=(e=!1,t)=>{this.setState({openAlertPopupTips:e,errorTipsMessage:t})},this.translationMap[this.save]=this.props.intl.formatMessage({id:"save",defaultMessage:r.save}),this.translationMap[this.saved]=this.props.intl.formatMessage({id:"saved",defaultMessage:r.saved}),this.translationMap[this.saving]=this.props.intl.formatMessage({id:"saving",defaultMessage:r.saving}),this.translationMap[this.saveError]=this.props.intl.formatMessage({id:"saveError",defaultMessage:r.saveError}),this.translationMap[this.saveSuccess]=this.props.intl.formatMessage({id:"saveSuccess",defaultMessage:r.saveSuccess}),this.undo=this.props.intl.formatMessage({id:"undo",defaultMessage:r.undo}),this.redo=this.props.intl.formatMessage({id:"redo",defaultMessage:r.redo}),this.delete=this.props.intl.formatMessage({id:"deleteOption",defaultMessage:t.defaultMessages.deleteOption}),this.publishOptions=this.props.intl.formatMessage({id:"publishOptions",defaultMessage:r.publishOptions}),this.copySuccess=this.props.intl.formatMessage({id:"copySuccess",defaultMessage:r.copySuccess}),this.changeShareSettings=this.props.intl.formatMessage({id:"changeShareSettings",defaultMessage:r.changeShareSettings}),this.viewPublishedItem=this.props.intl.formatMessage({id:"viewPublishedItem",defaultMessage:r.viewPublishedItem}),this.copyPublishedItemLink=this.props.intl.formatMessage({id:"copyPublishedItemLink",defaultMessage:r.copyPublishedItemLink}),this.createNew=this.props.intl.formatMessage({id:"createNew",defaultMessage:r.createNew}),this.createNewExperience=this.props.intl.formatMessage({id:"createNewExperience",defaultMessage:r.createNewExperience}),this.generateTemplate=this.props.intl.formatMessage({id:"generateTemplate",defaultMessage:r.generateTemplate}),this.generatingTemplate=this.props.intl.formatMessage({id:"generatingTemplate",defaultMessage:r.generatingTemplate}),this.moreOptionsForTool=this.props.intl.formatMessage({id:"moreOptionsForTool",defaultMessage:r.moreOptionsForTool}),this.moreTools=this.props.intl.formatMessage({id:"moreTools",defaultMessage:r.moreTools}),this.access=this.props.intl.formatMessage({id:"access",defaultMessage:r.access}),this.generateTemplateSuccess=this.props.intl.formatMessage({id:"generateTemplateSuccess",defaultMessage:r.generateTemplateSuccess}),this.generateTemplateError=this.props.intl.formatMessage({id:"generateTemplateError",defaultMessage:r.generateTemplateError}),this.clickEventType=De.NewApp,this.state={saveState:l.Save,savedAppConfig:null,savedAppItem:null,toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1,publishOptionsListOpen:!1,moreToolListOpen:!1,isPublished:!1,isShowLeaveAlertPopup:!1,toolListWidth:184,newAppId:null,isSaveStateSaved:!1,isOpenSaveAsPopper:!1,isOpenDeletePopper:!1,isShowAlertPopup:!1,alertPopupMessage:"",loading:!1,itemProtected:null===(p=s.appItem)||void 0===p?void 0:p.protected,isOpenDownloadAppModal:!1,openTransferToFullModePopper:!1,openAlertPopupTips:!1,errorTipsMessage:null},this.toolContainer=e.React.createRef()}getStyle(t){var o;return e.css`
      button:disabled:hover,button:disabled, .tool_more_con:disabled:hover, .tool_more_con:disabled{
        color:${t.ref.palette.neutral[700]};
      }
      button, .tool_more_con button{
        color:${t.ref.palette.neutral[900]}
      }
      .tool_more_con {
        margin: 0 6px;
      }
      .tool_more_con button:hover {
        color: ${t.ref.palette.black};
      }
      button:disabled:hover {
        border:none;
      }
      .toollist {
        .toollist-length-screen {
          width: ${e.polished.rem(0)};
          overflow: hidden;
          .tool-hidden {
            display: none;
          }
        }

        @media only screen and (max-width: 1025px) {
          .toollist-length-screen {
            width: ${e.polished.rem(0)};
          }
        }
        @media only screen and (min-width: 1025px) {
          .toollist-length-screen {
            width: ${e.polished.rem(38)};
          }
        }
        @media only screen and (min-width: 1071px) {
          .toollist-length-screen {
            width: ${e.polished.rem(76)};
          }
        }
        @media only screen and (min-width: 1117px) {
          .toollist-length-screen {
            width: ${e.polished.rem(114)};
          }
        }
        @media only screen and (min-width: 1163px) {
          .toollist-length-screen {
            width: ${e.polished.rem(152)};
          }
        }

        .tool_more_content {
          width: ${e.polished.rem(38)};
          height: 26px;
          .toollist-dropdown-icon{
            margin: 0
          }
        }
        .toollist-item {
          margin: 4px 6px;
          padding: 5px;
          border: 0;
        }
        .toollist-item-click:focus {
          box-shadow: none !important;
        }
        .tool-list-publish {
          border-radius: 2px;
          min-width: 4.25rem;
          height: ${e.polished.rem(26)};
          color: ${t.ref.palette.black};
          background: ${t.ref.palette.neutral[700]};
          font-size: ${e.polished.rem(13)};
          padding-top: 0;
          padding-bottom: 0;
          border:none;
          &:hover {
            background: ${t.sys.color.primary.main};
            border:none;
          }
          &.btn.disabled {
            background-color: ${t.ref.palette.neutral[700]};
            color: ${t.ref.palette.neutral[900]};
            border:none;
          }
        }
        .tool-list-publish:focus {
          box-shadow: none !important;
        }

        .btn {
          &.disabled,
          &:disabled {
            background-color: transparent;
          }
        }
        .btn:not(:disabled):not(.disabled):active,
        .btn:not(:disabled):not(.disabled).active,
        .show > .btn.dropdown-toggle {
          color: ${(null===(o=null==t?void 0:t.ref.palette)||void 0===o?void 0:o.black)||"black"};
        }
      }

      button:not(:disabled):not(.disabled):active, button:not(:disabled):not(.disabled).active{
        border:none;
      }

      .loading-con {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: ${e.polished.rgba(t.ref.palette.white,.2)};
      }
    `}getDropdownStyle(t){return e.css`
      & {
        background: ${t.ref.palette.neutral[500]};
        border: 1px solid ${t.ref.palette.neutral[400]};;
        box-shadow: 0 0 10px 2px ${e.polished.rgba(t.ref.palette.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        min-width:${e.polished.rem(220)};
        padding-top: ${e.polished.rem(8)};
        padding-bottom: 0;
      }
      button.save-menu, button.custom-dropdown-item, a.custom-dropdown-item {
        padding-left: ${e.polished.rem(16)};
        margin-bottom: ${e.polished.rem(8)};
      }
      .dropdown-menu--inner {
        max-height: calc(100vh - 50px);

        .toollist-dropdown-icon {
          margin-right: ${e.polished.rem(8)};
          margin-bottom: ${e.polished.rem(2)};
        }
        &>button, &>a {
          padding-left: ${e.polished.rem(16)};
          margin-bottom: ${e.polished.rem(8)};
        }
        button, a {
          box-sizing:border-box;
        }
        .dropdown-more-preview-a {
          color: inherit;
          text-decoration: none;
        }

        @media only screen and (min-width: 1162px) {
          .dropdown-more-preview {
            display: none;
          }
        }
        @media only screen and (max-width: 1162px) {
          .dropdown-more-preview {
            display: flex;
          }
        }
        @media only screen and (min-width: 1116px) {
          .dropdown-more-save {
            display: none;
          }
        }
        @media only screen and (max-width: 1116px) {
          .dropdown-more-save {
            display: flex;
          }
        }
        @media only screen and (min-width: 1070px) {
          .dropdown-more-redo {
            display: none;
          }
        }
        @media only screen and (max-width: 1070px) {
          .dropdown-more-redo {
            display: flex;
          }
        }
        @media only screen and (min-width: 1024px) {
          .dropdown-more-undo {
            display: none;
          }
        }
        @media only screen and (max-width: 1024px) {
          .dropdown-more-undo {
            display: flex;
          }
        }
      }
    `}componentDidMount(){window.onbeforeunload=()=>{if(!this.checkIsSaved())return!1},window.addEventListener("resize",this.updateToollistWidth)}componentWillUnmount(){window.onbeforeunload=null}componentDidUpdate(e,t){var o,i;const{appConfig:s,publishStatus:a,appItem:l}=this.props,{savedAppConfig:r}=this.state;if(this.updateToollistWidth(),this.props.onSaveStatusChanged&&this.props.onSaveStatusChanged(this.checkIsSaved()),(null==l?void 0:l.protected)===(null===(o=null==e?void 0:e.appItem)||void 0===o?void 0:o.protected)&&(null==l?void 0:l.id)===(null===(i=null==e?void 0:e.appItem)||void 0===i?void 0:i.id)||this.setState({itemProtected:null==l?void 0:l.protected}),a!==e.publishStatus&&(a===n.Draft?this.setState({isPublished:!1}):this.setState({isPublished:!0})),this.props!==e){if(this.hasUpdateAppconfigVersion){return void((null==s?void 0:s.exbVersion)===(null==r?void 0:r.exbVersion)&&(this.setState({savedAppConfig:s}),this.hasUpdateAppconfigVersion=!1))}s&&this.updateSaveState()}}render(){const{toolListWidth:o,saveState:i,isOpenDeletePopper:s,isShowAlertPopup:n,alertPopupMessage:l,loading:r,itemProtected:d,openTransferToFullModePopper:c,openAlertPopupTips:u,errorTipsMessage:h}=this.state,{itemType:m,publishStatus:g,appItem:v,appConfig:f,itemId:b,canEditItem:w,handleTokenInvalid:x}=this.props,S=this.checkIsAppSaved(),j=m===a.Template,I=this.props.appConfig&&p.dataComponentsUtils.getWhetherDataSourceIsInited(this.props.dataSources,this.props.dataSourcesInfo);return(0,e.jsx)("div",{className:"float-right d-flex flex-row align-items-center",css:this.getStyle(this.props.theme)},this.isMac()&&(0,e.jsx)(e.Keyboard,{bindings:{"command+keys":()=>{this.saveForKeyBoard()}}}),!this.isMac()&&(0,e.jsx)(e.Keyboard,{bindings:{"ctrl+keys":()=>{this.saveForKeyBoard()}}}),(0,e.jsx)("div",{className:"h-100 toollist d-flex flex-row align-items-center justify-content-end"},(0,e.jsx)("div",{className:"toollist-length-screen d-flex align-items-center justify-content-starth-100 justify-content-start",ref:this.toolContainer},(0,e.jsx)(t.Button,{id:"tooltip_undo",className:(0,e.classNames)("toollist-item",{"toollist-item-click":!(this.props.stateHistory.past.length<=1),"tool-hidden":o<38}),type:"tertiary",title:this.undo,icon:!0,size:"sm",disabled:this.props.stateHistory.past.length<=1,onClick:this.onUndo,"aria-label":this.undo},(0,e.jsx)(y,{className:"toollist-item-icon",autoFlip:!0})),(0,e.jsx)(t.Button,{id:"tooltip_redo",className:(0,e.classNames)("toollist-item",{"toollist-item-click":!(this.props.stateHistory.future.length<1),"tool-hidden":o<76}),type:"tertiary",title:this.redo,icon:!0,size:"sm",disabled:this.props.stateHistory.future.length<1,onClick:this.onRedo,"aria-label":this.redo},(0,e.jsx)(O,{className:"toollist-item-icon",autoFlip:!0})),o>=114&&(0,e.jsx)(X,{originalAppInfo:(0,e.Immutable)(v),folderUrl:this.props.folderUrl,appConfig:f,isSave:S,toolListWidth:o,isInDropdown:!1,onSaveSuccess:this.onSaveSuccess,onSaveError:()=>null,saveState:i,onSaveStateChange:this.onSaveStateChange,changePublishStatus:this.props.changePublishStatus,onSaveClick:this.onSaveClick}),w&&window.isExpressBuilder&&(0,e.jsx)(le,{originalAppInfo:(0,e.Immutable)(v),isOpen:c,isSave:S,onSaveClick:this.onSaveClick,onSaveSuccess:this.onSaveSuccess,handleTokenInvalid:x,toggle:this.toggleTransferToFullModePopper,checkAndShowReadOnlyRemind:this.props.checkAndShowReadOnlyRemind,toggleErrorAlertPopupTips:this.toggleErrorAlertPopupTips}),(0,e.jsx)(ze,{onSave:this.onSaveClick,toggleErrorAlertPopupTips:this.toggleErrorAlertPopupTips,toolListWidth:o,isTemplate:j,saveState:i,stateHistory:this.props.stateHistory,queryObject:this.props.queryObject})),(0,e.jsx)("div",{className:"tool_more_content"},this.renderMore()),(0,e.jsx)(Ae,{publishStatus:g,isDataSourceHadInit:I,saveState:i,stateHistory:this.props.stateHistory,appItem:v,appConfig:f,isInOnLine:this.isInOnLine,checkAndShowReadOnlyRemind:this.props.checkAndShowReadOnlyRemind,changePublishStatus:this.props.changePublishStatus,handleTokenInvalid:this.props.handleTokenInvalid,toastNote:this.props.toastNote,toggleErrorAlertPopupTips:this.toggleErrorAlertPopupTips,onSaveClick:this.onSaveClick})),(0,e.jsx)(t.AlertPopup,{isOpen:this.state.isShowLeaveAlertPopup,okLabel:this.getAlertPopOkLabel(),title:this.getAlertPopTitle(),toggle:this.handleToggleForLeaveAlertPopup},(0,e.jsx)("div",{style:{fontSize:"1rem"}},this.nls("headerLeaveDescription"))),r&&(0,e.jsx)("div",{className:"loading-con"},(0,e.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-primary-loading"})),(0,e.jsx)(ie,{itemTitle:null==v?void 0:v.title,itemId:b,isOpen:s,itemProtected:d,deleteToggle:()=>{this.setState({isOpenDeletePopper:!1})},deleteApp:this.handleConfirm,detailUrl:`${this.props.portalUrl}/home/item.html?id=${this.props.currentAppId}`}),(0,e.jsx)(t.AlertPopup,{isOpen:n,title:this.nls("variableColorWarning"),hideCancel:!0,toggle:this.toggleAlertPopup},(0,e.jsx)("div",{style:{fontSize:"1rem"}},l)),(0,e.jsx)(pe,{open:u,message:h,toggle:this.toggleErrorAlertPopupTips}))}}const Fe=(0,d.withTheme)($e),Ue=e.ReactRedux.connect((e=>({stateHistory:e.appStateHistory,queryObject:e.queryObject,appConfig:e.appStateInBuilder&&e.appStateInBuilder.appConfig,currentAppId:e.builder&&e.builder.currentAppId,portalUrl:e.portalUrl,dataSources:e.appStateInBuilder&&e.appStateInBuilder.appConfig&&e.appStateInBuilder.appConfig.dataSources,dataSourcesInfo:e.appStateInBuilder&&e.appStateInBuilder.dataSourcesInfo})))(Fe);class He extends e.React.PureComponent{constructor(t){super(t),this.onAppModeChange=()=>{this.props&&(this.getAppDocument(),this.props.appMode===e.AppMode.Run?(this.appFrameDoc&&this.appFrameDoc.body.classList.add("design-mode"),o.builderAppSync.publishAppModeChangeToApp(e.AppMode.Design)):(this.appFrameDoc&&this.appFrameDoc.body.classList.remove("design-mode"),o.builderAppSync.publishAppModeChangeToApp(e.AppMode.Run)))},this.onLockLayoutChange=()=>{const e=(0,o.getAppConfigAction)();this.getAppDocument(),this.appFrameDoc&&(this.props.lockLayout?this.appFrameDoc.body.classList.remove("lock-layout"):this.appFrameDoc.body.classList.add("lock-layout")),e.setLockLayout(!this.props.lockLayout).exec()},this.nls=e=>this.props.intl.formatMessage({id:e,defaultMessage:r[e]}),this.appMode=this.props.intl.formatMessage({id:"appMode",defaultMessage:r.appMode}),this.lockLayout=this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:r.headerLockLayout})}getStyle(t){return e.css`
      .lock-layout-label {
        font-weight: 500;
        color: ${t.ref.palette.neutral[1e3]};
        margin-right: ${e.polished.rem(10)};
      }

      .live-view-icon {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: ${t.ref.palette.black};
      }

      .edit-view-icon {
        width: 7px;
        height: 7px;
        border: 1px solid ${t.ref.palette.neutral[1100]};
        border-radius: 50%;
      }
    `}getAppDocument(){const t=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);this.appFrameDoc=t.contentDocument||t.contentWindow.document}render(){const{appMode:o,lockLayout:i}=this.props,s=o===e.AppMode.Run,a=this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:r.headerLockLayout});return(0,e.jsx)("div",{className:"d-flex align-items-center",css:this.getStyle(this.props.theme),title:i?this.props.intl.formatMessage({id:"disableLayoutEditing",defaultMessage:r.disableLayoutEditing}):this.props.intl.formatMessage({id:"enableLayoutEditing",defaultMessage:r.enableLayoutEditing})},!s&&(0,e.jsx)("div",{className:"d-flex align-items-center",onClick:this.onLockLayoutChange,style:{cursor:"pointer"}},(0,e.jsx)("div",{className:"lock-layout-label"},a),(0,e.jsx)(t.Switch,{checked:i,"aria-label":a})),(0,e.jsx)("div",{className:"liveview-gap"}),(0,e.jsx)(t.Button,{variant:s?"contained":"outlined",color:"primary",size:"sm",style:{whiteSpace:"nowrap"},className:"d-flex align-items-center","aria-pressed":s,title:s?this.nls("turnOffLiveView"):this.nls("turnOnLiveView"),onClick:this.onAppModeChange},(0,e.jsx)("div",{className:(0,e.classNames)("mr-2",{"live-view-icon":s,"edit-view-icon":!s})}),(0,e.jsx)("div",{className:"d-flex align-items-center border-left-0 app-toolbar-mode"},(0,e.jsx)("span",null,this.appMode))))}}const Ve=(0,d.withTheme)(He),We=e.ReactRedux.connect((e=>{var t,o,i,s,a;return{appMode:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.appMode,lockLayout:null!==(a=null===(s=null===(i=null===(o=e.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.forBuilderAttributes)||void 0===s?void 0:s.lockLayout)&&void 0!==a&&a}}))(Ve);var Ge=g(505),Ye=g.n(Ge),qe=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const _e=t=>{const o=window.SVG,{className:i}=t,s=qe(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Ye()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var Ke=g(9165),Qe=g.n(Ke),Je=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const Xe=t=>{const o=window.SVG,{className:i}=t,s=Je(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Qe()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var Ze=g(8243),et=g.n(Ze),tt=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const ot=t=>{const o=window.SVG,{className:i}=t,s=tt(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:et()},s)):e.React.createElement("svg",Object.assign({className:a},s))};class it extends e.React.PureComponent{constructor(e){super(e),this.headerScreenSizes=this.props.intl.formatMessage({id:"headerScreenSizes",defaultMessage:r.headerScreenSizes}),this.editPageForLargeScreen=this.props.intl.formatMessage({id:"editPageForLargeScreen",defaultMessage:r.editPageForLargeScreen}),this.editPageForMediumScreen=this.props.intl.formatMessage({id:"editPageForMediumScreen",defaultMessage:r.editPageForMediumScreen}),this.editPageForSmallScreen=this.props.intl.formatMessage({id:"editPageForSmallScreen",defaultMessage:r.editPageForSmallScreen}),this.viewPageForMediumScreen=this.props.intl.formatMessage({id:"viewPageForMediumScreen",defaultMessage:r.viewPageForMediumScreen}),this.viewPageForSmallScreen=this.props.intl.formatMessage({id:"viewPageForSmallScreen",defaultMessage:r.viewPageForSmallScreen})}getStyle(t){var o,i;return e.css`
      .device-switch-group {
        margin-right: ${e.polished.rem(10)};
      }

      .device-switch {
        width: ${e.polished.rem(26)};
        height: ${e.polished.rem(26)};
        border-radius: 2px !important;
        border: 0;
        margin-left: 1px;
        margin-right: 1px;
        transition: none;
        -webkit-transition: none;
        color: ${null===(o=null==t?void 0:t.ref.palette)||void 0===o?void 0:o.neutral[900]};

        &:focus {
          box-shadow: none !important;
        }

        &:hover {
          color: ${null===(i=null==t?void 0:t.ref.palette)||void 0===i?void 0:i.black};
        }
      }

      .device-switch-gap {
        margin-right: ${e.polished.rem(6)};
      }

      .device-active {
        background-color: ${t.sys.color.primary.main} !important;
        color: ${t.ref.palette.black} !important;
      }
    `}onBrowserSizeModeChange(e){o.builderAppSync.publishChangeBrowserSizeModeToApp(e),e!==this.props.browserSizeMode&&o.builderAppSync.publishChangeSelectionToApp(null),this.setState({isDeviceChooseShow:!1})}render(){const o=window.isExpressBuilder,{theme:i,browserSizeMode:s}=this.props,a=!s||s===e.BrowserSizeMode.Large,n=s===e.BrowserSizeMode.Medium,l=s===e.BrowserSizeMode.Small;return(0,e.jsx)("div",{css:this.getStyle(i)},(0,e.jsx)(t.AdvancedButtonGroup,{variant:"text",role:"radiogroup","aria-label":this.headerScreenSizes,className:"h-100 d-flex align-items-center device-switch-group"},(0,e.jsx)(t.Button,{icon:!0,role:"radio",title:this.editPageForLargeScreen,"aria-label":this.editPageForLargeScreen,onClick:()=>{this.onBrowserSizeModeChange(e.BrowserSizeMode.Large)},"aria-checked":a,active:a,className:(0,e.classNames)("device-switch d-flex align-items-center p-0 device-switch-gap",{"device-active":a,"device-disactive":!a})},(0,e.jsx)(_e,null)),(0,e.jsx)(t.Button,{icon:!0,role:"radio",title:o?this.viewPageForMediumScreen:this.editPageForMediumScreen,"aria-label":o?this.viewPageForMediumScreen:this.editPageForMediumScreen,onClick:()=>{this.onBrowserSizeModeChange(e.BrowserSizeMode.Medium)},"aria-checked":n,active:n,className:(0,e.classNames)("device-switch d-flex align-items-center p-0 device-switch-gap",{"device-active":n,"device-disactive":!n})},(0,e.jsx)(ot,null)),(0,e.jsx)(t.Button,{icon:!0,role:"radio",type:"tertiary",title:o?this.viewPageForSmallScreen:this.editPageForSmallScreen,"aria-label":o?this.viewPageForSmallScreen:this.editPageForSmallScreen,onClick:()=>{this.onBrowserSizeModeChange(e.BrowserSizeMode.Small)},"aria-checked":l,active:l,className:(0,e.classNames)("device-switch d-flex align-items-center p-0",{"device-active":l,"device-disactive":!l})},(0,e.jsx)(Xe,null))))}}const st=(0,d.withTheme)(it),at=e.ReactRedux.connect((e=>({browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode})))(st);var nt=g(5737),lt=g.n(nt),rt=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const pt=t=>{const o=window.SVG,{className:i}=t,s=rt(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:lt()},s)):e.React.createElement("svg",Object.assign({className:a},s))};class dt extends e.React.PureComponent{constructor(e){super(e),this.onToggleResolutionChoose=()=>{this.setState({isResolutionChooseShow:!this.state.isResolutionChooseShow})},this.setViewportSize=e=>{(0,o.getAppConfigAction)().setViewportSize(this.props.browserSizeMode,e).exec(),this.setState({isResolutionChooseShow:!1})},this.state={isResolutionChooseShow:!1}}getStyle(t){return e.css`
      .switch-resolution-toggle {
        width: auto;
        font-weight: 500;
        color: ${this.props.theme.ref.palette.neutral[1e3]};
        padding-top: 0;
        padding-bottom: 0;
        height: 26px;
        .switch-label {
          width: auto;
          display: inline-block;
        }
      }
      .dropdown-toggle-content svg {
        margin-right: 0;
        margin-top: ${e.polished.rem(-8)};
        vertical-align: center;
      }
      .no-user-select {
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select :none;
        user-select: none;
      }
    `}getDropdownStyle(t){return e.css`
      & {
        background: ${t.ref.palette.neutral[500]};
        border: 1px solid ${t.ref.palette.neutral[400]};;
        box-shadow: 0 0 10px 2px ${e.polished.rgba(t.ref.palette.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        padding-top: ${e.polished.rem(8)};
        padding-bottom: ${e.polished.rem(8)};
      }
    `}render(){const{browserSizeMode:o,viewportSize:i,pageMode:s,appMode:a}=this.props,n=s===e.PageMode.FitWindow?"":this.props.nls("auto"),l=i?`${i.width} \xd7 ${s!==e.PageMode.FitWindow&&a===e.AppMode.Design?n:i.height}`:"";let r=e.CONSTANTS.SCREEN_RESOLUTIONS[o]||[];if(s!==e.PageMode.FitWindow){const e={},t=[];r.forEach((o=>{null==e[o.width]&&(t.push(o),e[o.width]=o)})),r=t}return(0,e.jsx)("div",{css:this.getStyle(this.props.theme)},(0,e.jsx)("div",{className:"sr-only",id:"app-resolution-select"},this.props.nls("changeScreenSize")),(0,e.jsx)(t.Dropdown,{size:"sm",toggle:this.onToggleResolutionChoose,isOpen:this.state.isResolutionChooseShow,className:"resolution-choose","aria-label":this.props.nls("resolution")},(0,e.jsx)(t.DropdownButton,{size:"sm",type:"tertiary",arrow:!1,role:"combobox",css:e.css`line-height: 1.5rem;`,className:"switch-resolution-toggle lin","aria-describedby":"app-resolution-select",title:this.props.nls("changeScreenSize")},(0,e.jsx)("span",{className:"switch-label"},l),(0,e.jsx)(pt,{size:"s"})),(0,e.jsx)(t.DropdownMenu,{css:this.getDropdownStyle(this.props.theme)},r.map(((o,i)=>(0,e.jsx)(t.DropdownItem,{key:i,className:"no-user-select",onClick:()=>{this.setViewportSize(o)}},`${o.width} \xd7 ${s!==e.PageMode.FitWindow&&a===e.AppMode.Design?n:o.height}`))))))}}const ct=(0,d.withTheme)(dt),ut=e.ReactRedux.connect((t=>{var o,i,s,a,n,l;const r=t.appStateInBuilder&&t.appStateInBuilder.browserSizeMode;let p;t.appStateInBuilder&&(p=e.utils.findViewportSize(t.appStateInBuilder.appConfig,r));const d=t.appStateInBuilder&&t.appStateInBuilder.appRuntimeInfo.currentPageId;let c;return d&&(c=null===(a=null===(s=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.pages)||void 0===s?void 0:s[d])||void 0===a?void 0:a.mode),{viewportSize:p,pageMode:c,appMode:null===(l=null===(n=t.appStateInBuilder)||void 0===n?void 0:n.appRuntimeInfo)||void 0===l?void 0:l.appMode,browserSizeMode:t.appStateInBuilder&&t.appStateInBuilder.browserSizeMode}}))(ct);var ht=g(8418);Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var mt=Symbol.for("react-redux-context"),gt="undefined"!=typeof globalThis?globalThis:{};function vt(){if(!$.createContext)return{};const e=gt[mt]??=new Map;let t=e.get($.createContext);return t||(t=$.createContext(null),e.set($.createContext,t)),t}var ft=vt();function bt(e=ft){return function(){return $.useContext(e)}}var wt=bt();var yt=(e,t)=>e===t;function xt(e=ft){const t=e===ft?wt:bt(e),o=(e,o={})=>{const{equalityFn:i=yt}="function"==typeof o?{equalityFn:o}:o;const s=t(),{store:a,subscription:n,getServerState:l}=s,r=($.useRef(!0),$.useCallback({[e.name]:t=>e(t)}[e.name],[e])),p=(0,ht.useSyncExternalStoreWithSelector)(n.addNestedSub,a.getState,l||a.getState,r,i);return $.useDebugValue(p),p};return Object.assign(o,{withTypes:()=>o}),o}var St=xt(),jt=g(1496),Ot=g(3600),It=g.n(Ot),Tt=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const At=t=>{const o=window.SVG,{className:i}=t,s=Tt(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:It()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var Pt=g(6572),Mt=g.n(Pt),kt=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const Ct=t=>{const o=window.SVG,{className:i}=t,s=kt(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Mt()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var Nt=g(8013),Rt=g.n(Nt),Et=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const zt=t=>{const o=window.SVG,{className:i}=t,s=Et(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Rt()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var Dt=g(6884),Lt=g(63),Bt=g.n(Lt),$t=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const Ft=t=>{const o=window.SVG,{className:i}=t,s=$t(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:Bt()},s)):e.React.createElement("svg",Object.assign({className:a},s))},{useState:Ut}=e.React,Ht=Object.assign({},e.defaultMessages,jt.defaultMessages),Vt=(0,d.styled)(t.DropdownMenu)`
  padding: unset;
  max-width: 240px;

  .jimu-dropdown-item-header {
    height: 2rem;
    background-color: var(--ref-palette-neutral-600);
    color: var(--ref-palette-neutral-1100) !important;
    font-size: 14px;
    line-height: 2rem;
    display: flex !important;
    align-items: center;
  }

  .dropdown-item {
    font-size: 13px;
    color: var(--ref-palette-black) !important;
    padding: 0 24px !important;
    height: 2rem;
    cursor: pointer;
    &:not(.active):hover {
      background: var(--ref-palette-neutral-600) !important;
    }
    &.active {
      background: var(--sys-color-primary-main);
    }

    .item-home-icon {
      &.item-home-true {
        color: var(--ref-palette-black);
      }
      &.item-home-false {
        display: none;
        &:hover {
          display: inline-flex;
          color: var(--ref-palette-black);
        }
      }
    }
    &:hover {
      .item-home-icon {
        &.item-home-false {
          display: inline-flex;
          color: var(--ref-palette-neutral-1000);
        }
        &.item-home-fake {
          display: none;
        }
      }
    }
    &:focus, &:focus-within {
      .item-home-icon {
        &.item-home-false {
          display: inline-flex;
        }
        &.item-home-fake {
          display: none;
        }
      }
    }

    &.has-dot {
      padding-left: 10px !important;
    }
  }
`;const Wt=function(){var i,s;const a=St((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.pageStructure})),n=St((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.pages})),l=St((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.dialogs})),r=St((e=>{var t;return null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId})),p=St((e=>{var t;return null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentDialogId})),d=e.React.useRef(null),[c,u]=Ut(!1),h=e.React.useMemo((()=>(0,Dt.getFixedModalWindowTemplates)(!1).concat((0,Dt.getFixedNonModalWindowTemplates)())),[]),m=e.hooks.useTranslation(Ht),g=()=>{u(!c)};if((()=>{const e=n?Object.keys(n).length:0;return 0===e||1===e&&l&&0===Object.keys(l).length})())return null;const v=(null===(i=null==l?void 0:l[p])||void 0===i?void 0:i.label)||(null===(s=null==n?void 0:n[r])||void 0===s?void 0:s.label);return(0,e.jsx)("div",{className:"page-window-select d-flex align-items-center"},(0,e.jsx)(t.Dropdown,{menuRole:"listbox",supportInsideNodesAccessible:!0,"aria-label":m("pageWindowSelect")},(0,e.jsx)(t.DropdownButton,{size:"sm",type:"tertiary",css:e.css`max-width: 240px;`,title:v},v),(0,e.jsx)(Vt,{alignment:"start",autoFocus:!1},((i,s,a,n)=>{const l=Object.keys(i).length;return(s||[]).map((s=>{const r=Object.keys(s)[0],p=i[r],d=null==p?void 0:p.isDefault,c=a===r&&n&&l>1;return(0,e.jsx)(t.DropdownItem,{key:r,tag:"div",tabIndex:0,className:"mt-1 mb-1 "+(c?"has-dot":""),active:a===r&&!n,onClick:()=>{var e;e=r,(0,xe.changeCurrentPage)(e)}},(0,e.jsx)("div",{className:"text-truncate w-100",title:p.label},c&&(0,e.jsx)(zt,{size:"6px",className:"mr-2"}),p.label),l>1&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(t.Tooltip,{title:m("makeHome"),placement:"bottom"},(0,e.jsx)(t.Button,{icon:!0,size:"sm",type:"tertiary",active:d,"aria-label":m("makeHome"),"aria-pressed":d,className:`item-home-icon ml-1 jimu-outline-inside item-home-${d} ${d?"":"visible-by-focus"}`,onClick:e=>{var t;e.stopPropagation(),t=r,(0,o.getAppConfigAction)().replaceHomePage(t).exec()}},(0,e.jsx)(Ct,null))),!d&&(0,e.jsx)(t.Button,{icon:!0,disabled:!0,size:"sm",type:"tertiary",className:"item-home-icon item-home-true item-home-fake ml-1"})))}))})(n,a,r,p),l&&Object.keys(l).length>0&&(0,e.jsx)(e.React.Fragment,null,(f=l,b=p,Object.keys(f).map((i=>{var s;const a=f[i],n=null==a?void 0:a.isSplash;return(null===(s=f[i])||void 0===s?void 0:s.mode)===e.DialogMode.Fixed&&(0,e.jsx)(t.DropdownItem,{key:i,tag:"div",tabIndex:0,className:"mt-1 mb-1",active:b===i,onClick:()=>{var e;e=i,(0,xe.changeCurrentDialog)(e)}},(0,e.jsx)("div",{className:"text-truncate w-100",title:f[i].label},f[i].label),(0,e.jsx)(t.Tooltip,{title:m("makeSplash"),placement:"bottom"},(0,e.jsx)(t.Button,{icon:!0,size:"sm",type:"tertiary",disableHoverEffect:!0,disableRipple:!0,active:n,"aria-pressed":n,className:`item-home-icon ml-1 jimu-outline-inside item-home-${n} ${n?"":"visible-by-focus"}`,onClick:e=>{e.stopPropagation(),(e=>{const t=(0,o.getAppConfigAction)().appConfig,i=Object.keys(l).filter((e=>t.dialogs[e].isSplash))[0];(0,o.getAppConfigAction)().replaceSplashDialog(e,i).exec(),i===e&&e===p&&(0,xe.changeCurrentDialog)(e,!0)})(i)}},(0,e.jsx)(At,null))),!n&&(0,e.jsx)(t.Button,{icon:!0,disabled:!0,size:"sm",type:"tertiary",className:"item-home-icon item-home-true item-home-fake ml-1"}))})))))),p&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(t.Tooltip,{title:m("chooseTemplate",{type:m("dialog").toLocaleLowerCase()})},(0,e.jsx)(t.Button,{icon:!0,size:"sm",onClick:g,ref:e=>{d.current=e},variant:"text"},(0,e.jsx)(Ft,{autoFlip:!0,size:"m"}))),c&&(0,e.jsx)(xe.TemplateSelector,{templates:h,referenceElement:d.current,onItemSelect:t=>{const i=(0,o.getAppConfigAction)();i.removeLayout(l[p].layout.LARGE),i.applyDialogTemplate(p,t,e.BrowserSizeMode.Large).then((()=>{i.exec()})).catch((e=>{console.error(e)}))},onClose:g})));var f,b};var Gt=g(1594),Yt=g.n(Gt),qt=g(6055);const _t=e.css`
  border: none;

  .tooltip {
    color: var(--ref-palette-black);
    background-color: var(--ref-palette-neutral-600);
    border-color: var(--ref-palette-neutral-400);
  }
`,Kt=e.css`
  width: ${e.polished.rem(26)};
  height: ${e.polished.rem(26)};
  border: none;
  color: var(--ref-palette-neutral-1100);

  &:hover {
    color: var(--ref-palette-black);
    background-color: transparent;
  }
 
  &.disabled, &.disabled:hover {
    color: var(--sys-color-action-disabled-text);
    background-color: transparent;
  }

  &:focus {
    box-shadow: none !important;
  }
`;function Qt(o){const{icon:i,tooltip:s,disabled:a,rotate:n,autoFlip:l,extName:r,onClick:p}=o,d=(0,e.jsx)(t.Button,{"aria-label":s,className:"p-0 d-flex align-items-center rounded-circle",type:"tertiary",icon:!0,role:"menuitem",title:a?s:void 0,onClick:p,disabled:a,"data-extname":r,css:Kt},(0,e.jsx)(t.Icon,{className:"tool-item-icon",icon:i,rotate:n,autoFlip:l}));return a?d:(0,e.jsx)(t.Tooltip,{placement:"bottom",title:s,css:_t},d)}const Jt=e.css`
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      user-select: none;
      &:has( ~ div.toolbar-item:not(.d-none)) {
        margin-right: ${e.polished.rem(6)};
      }
      &.selected > .jimu-btn {
        color: var(--ref-palette-black);
        background: var(--sys-color-primary-main);
      }

      &.disabled,
      &.no-action {
        cursor: default;
      }
      &.disabled {
        .jimu-btn {
          cursor: default;
          pointer-events: auto;
        }
      }

      .popper {
        border: 1px solid var(--ref-palette-neutral-900);
      }
    `,Xt=e.css`
  border: 1px solid var(--sys-color-divider-secondary);

  .panel-header {
    background: transparent;
    color: var(--sys-color-surface-paper-hint);
    border-bottom: 1px solid var(--sys-color-divider-secondary);

    .title {
      font-size: 1rem;
      font-weight: 600;
    }
    .jimu-btn svg {
      color: var(--sys-color-surface-paper-hint);
    }
  }

  .content {
    .content {
      display: flex;
      pointer-events: all;
      border-radius: 2px;
      box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;function Zt(e,t){return"function"==typeof e?e(t):e}function eo(i){var s,a;const{extName:n,title:l,layoutId:r,layoutItemId:p,settingPanel:d,openWhenAdded:c,isActive:u=!1,isToggleOn:h=!1,onClick:m,onItemClick:g,onToggleChange:v}=i,f=e.React.useRef(),b=e.hooks.useTranslation(),w=e.ReactRedux.useSelector((e=>{var t;const o=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig;if(o)return jt.searchUtils.findLayoutItem(o,{layoutId:r,layoutItemId:p})})),y=d&&u&&h,x=e.hooks.usePrevious(y),S=Zt(i.checked,{layoutId:r,layoutItem:w}),j=Zt(i.disabled,{layoutId:r,layoutItem:w}),O=Zt(i.visible,{layoutId:r,layoutItem:w}),I=Zt(i.icon,{layoutId:r,layoutItem:w}),T=e.ReactRedux.useSelector((t=>{if((null==w?void 0:w.type)===e.LayoutItemType.Widget&&w.widgetId)return w.widgetId})),A=e.ReactRedux.useSelector((e=>{var t,o,i;const s=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.widgetsRuntimeInfo;return null!==(i=null===(o=null==s?void 0:s[T])||void 0===o?void 0:o.shouldExpandContextTool)&&void 0!==i&&i})),P=e.ReactRedux.useSelector((e=>{var t,o,i;if(T&&n){const s=e.appStateInBuilder.widgetsRuntimeInfo[T];return null!==(i=null===(o=null===(t=null==s?void 0:s.layoutItemTools)||void 0===t?void 0:t[n])||void 0===o?void 0:o.version)&&void 0!==i?i:0}return 0}));e.React.useEffect((()=>{!x||O&&!j||v()}),[j,O,v,x]),e.hooks.useEffectOnce((()=>{T&&n&&(c&&A&&M(),window.jimuConfig.isInBuilder?(0,e.getAppStore)().dispatch(e.appActions.widgetRuntimeInfoChange(T,"shouldExpandContextTool",!1)):o.builderAppSync.publishWidgetRuntimeInfoChangeToApp(T,"shouldExpandContextTool",!1))}));const M=e.React.useCallback((e=>{null==e||e.stopPropagation(),m({layoutId:r,layoutItem:w,clientRect:null},e),g(n)}),[m,n,r,w,g]),k=d;let C,N="";return"function"==typeof l?N=l({layoutId:r,layoutItem:w,formatMessage:b}):"string"==typeof l&&(N=l),y&&f.current&&(C=f.current.getBoundingClientRect()),(0,e.jsx)("div",{className:(0,e.classNames)("toolbar-item",{selected:y||S,disabled:j,"d-none":null!=i.visible&&!O}),css:Jt,"data-toolstate":P,ref:f},(0,e.jsx)(Qt,{icon:I,tooltip:N,disabled:j,rotate:i.rotate,extName:i.extName,autoFlip:i.autoFlipIcon,onClick:M}),y&&(0,e.jsx)(t.FloatingPanel,{css:Xt,autoSize:!0,trapFocus:!0,autoFocus:!1,disableResize:!0,headerTitle:N,defaultPosition:{x:null!==(s=null==C?void 0:C.left)&&void 0!==s?s:0,y:null!==(a=null==C?void 0:C.bottom)&&void 0!==a?a:0},onHeaderClose:v},(0,e.jsx)("div",{className:"d-flex content"},y&&(0,e.jsx)(k,{layoutId:r,layoutItemId:p,widgetId:T}))))}var to=g(5196),oo=g.n(to),io=g(1625),so=g.n(io);const ao=e.css`
  .toolbar-container {
    background: var(--ref-palette-secondary-700);
    width: 0;
    &:has(div.toolbar-item:not(.d-none)) {
      border-radius: 26px;
      padding: 4px 11px;
      width: auto;
      + .sep-line { display: block; }
    }
  }
  .sep-line {
    height: 30px;
    width: 2px;
    border-right: 1px solid var(--ref-palette-neutral-700);
    display: none;
  }
`,no={icon:Yt(),title:e=>e.formatMessage("delete"),visible:e=>{const{layoutId:t,layoutItem:i}=e,s=(0,o.getAppConfigAction)().appConfig;return(0,qt.canDeleteInExpressMode)({layoutId:t,layoutItemId:i.id},s)},onClick:t=>{const{layoutItem:i,layoutId:s}=t,a={layoutId:s,layoutItemId:i.id};(0,e.getAppStore)().dispatch(o.builderActions.confirmDeleteContentChanged(a))},extName:"delete"},lo={icon:oo(),autoFlipIcon:!0,title:e=>e.formatMessage("splitHorizontally"),visible:t=>{var i;const{layoutId:s}=t,a=(0,o.getAppConfigAction)().appConfig,n=null===(i=null==a?void 0:a.layouts)||void 0===i?void 0:i[s];return(null==n?void 0:n.type)===e.LayoutType.GridLayout},onClick:e=>{const{layoutId:t,layoutItem:o}=e;(0,qt.splitGridCell)({layoutId:t,layoutItemId:o.id},"h")},extName:"splitHorizontal"},ro={icon:so(),title:e=>e.formatMessage("splitVertically"),visible:t=>{var i;const{layoutId:s}=t,a=(0,o.getAppConfigAction)().appConfig,n=null===(i=null==a?void 0:a.layouts)||void 0===i?void 0:i[s];return(null==n?void 0:n.type)===e.LayoutType.GridLayout},onClick:e=>{const{layoutId:t,layoutItem:o}=e;(0,qt.splitGridCell)({layoutId:t,layoutItemId:o.id},"v")},extName:"splitVertical"};function po(t,o){if(!o)return[];return window._extensionManager.getExtensions(e.extensionSpec.ExtensionPoints.ContextTool).filter((e=>e.widgetId===o)).map((e=>{var i;return{widgetId:o,icon:e.getIcon(),title:e.getTitle.bind(e),onClick:e.onClick.bind(e),checked:e.checked&&e.checked.bind(e),disabled:e.disabled?"function"==typeof e.disabled?e.disabled.bind(e):e.disabled:null,visible:e.visible?"function"==typeof e.visible?e.visible.bind(e):e.visible:null,openWhenAdded:null!==(i=e.openWhenAdded)&&void 0!==i&&i,settingPanel:e.getSettingPanel({layoutId:t,layoutItem:{widgetId:o},clientRect:null}),index:e.index,extName:e.name}})).sort(((e,t)=>e.index-t.index))}function co(t){const o=(0,e.getAppStore)().getState().appStateInBuilder;if(!(null==o?void 0:o.appConfig))return Promise.resolve([]);const i=o.appConfig.widgets[t];return window._extensionManager.registerWidgetExtensions(i,!1)}function uo(){const t=e.React.useRef(null),[o,i]=e.React.useState(),[s,a]=e.React.useState(!1),[n,l]=e.React.useState(!1),[r,p]=e.React.useState(!1),d=e.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===o?void 0:o.selection})),c=e.hooks.usePrevious(d),u=e.React.useMemo((()=>{if(d){const t=(0,e.getAppStore)().getState().appStateInBuilder,o=null==t?void 0:t.appConfig;if(o){const e=jt.searchUtils.findLayoutItem(o,d);return null==e?void 0:e.widgetId}}return null}),[d]),h=e.ReactRedux.useSelector((t=>{var o,i,s;if(d){const a=t.appStateInBuilder.appConfig,n=t.appStateInBuilder.browserSizeMode,{layoutId:l}=d,r=null===(o=a.layouts)||void 0===o?void 0:o[l];if((null===(i=r.parent)||void 0===i?void 0:i.type)===e.LayoutParentType.Widget){const t=r.parent.id;if("widgets/common/controller/"===(null===(s=a.widgets)||void 0===s?void 0:s[t]).uri){const o=jt.searchUtils.getLayoutInfosHoldContent(a,e.LayoutItemType.Widget,t,n);return{layoutId:null==o?void 0:o[0].layoutId,layoutItemId:null==o?void 0:o[0].layoutItemId,widgetId:t}}}}return null}),e.ReactRedux.shallowEqual);e.React.useEffect((()=>{u&&co(u).then((t=>{if(t.length>0){l(!0);"widgets/common/controller/"===(0,e.getAppStore)().getState().appStateInBuilder.appConfig.widgets[u].uri&&p(!0)}}))}),[u]),e.React.useEffect((()=>{(null==h?void 0:h.widgetId)&&!r&&co(h.widgetId).then((e=>{e.length>0&&p(!0)}))}),[null==h?void 0:h.widgetId,r]);const m=()=>{(o||s)&&(i(null),a(!1))},g=e.React.useMemo((()=>{if(n&&(null==d?void 0:d.layoutId))return po(d.layoutId,u)}),[null==d?void 0:d.layoutId,n,u]),v=e.React.useMemo((()=>{if(h&&r)return po(h.layoutId,h.widgetId)}),[r,h]),f=e.React.useCallback((e=>{a(e!==o||!s),i(e)}),[s,o]),b=e.React.useCallback((e=>{f(e)}),[f]),w=e.React.useCallback((()=>{a(!1)}),[]);return d?((()=>{var t;if(!c||!h||c.layoutId!==h.layoutId||c.layoutItemId!==h.layoutItemId){if(d&&c){const o=(0,e.getAppStore)().getState().appStateInBuilder,i=jt.searchUtils.findParentLayoutInfo(c,o.appConfig,o.browserSizeMode),s=null===(t=o.appConfig.widgets)||void 0===t?void 0:t[u];if(i&&"widgets/common/controller/"===(null==s?void 0:s.uri)&&i.layoutId===d.layoutId&&i.layoutItemId===d.layoutItemId)return;const a=jt.searchUtils.findParentLayoutInfo(d,o.appConfig,o.browserSizeMode);if(h&&i&&a&&a.layoutId===i.layoutId&&a.layoutItemId===i.layoutItemId)return;d.layoutId===c.layoutId&&d.layoutItemId===c.layoutItemId||m()}d&&!c&&m()}})(),(0,e.jsx)("div",{className:"d-flex align-items-center",css:ao,ref:t},(0,e.jsx)("div",{className:"toolbar-container d-flex align-items-center"},d&&[...g||[],...null!=v?v:[],lo,ro,no].map((t=>(0,e.jsx)(eo,Object.assign({key:t.extName},t,{layoutId:(null==h?void 0:h.widgetId)&&t.widgetId===h.widgetId?h.layoutId:d.layoutId,layoutItemId:(null==h?void 0:h.widgetId)&&t.widgetId===h.widgetId?h.layoutItemId:d.layoutItemId,isActive:o===t.extName,isToggleOn:s,onToggleChange:w,onItemClick:b}))))),(0,e.jsx)("div",{className:"sep-line mx-4"}))):null}var ho=g(4324),mo=g.n(ho),go=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const vo=t=>{const o=window.SVG,{className:i}=t,s=go(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:mo()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var fo=g(5531),bo=g.n(fo),wo=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const yo=t=>{const o=window.SVG,{className:i}=t,s=wo(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:bo()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var xo=g(9507),So=g.n(xo),jo=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]])}return o};const Oo=t=>{const o=window.SVG,{className:i}=t,s=jo(t,["className"]),a=(0,e.classNames)("jimu-icon jimu-icon-component",i);return o?e.React.createElement(o,Object.assign({className:a,src:So()},s)):e.React.createElement("svg",Object.assign({className:a},s))};var Io=function(e,t,o,i){return new(o||(o=Promise))((function(s,a){function n(e){try{r(i.next(e))}catch(e){a(e)}}function l(e){try{r(i.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,l)}r((i=i.apply(e,t||[])).next())}))};const To=Object.assign({},r,t.defaultMessages);var Ao;!function(e){e.OrgAdmin="org_admin",e.OrgPublisher="org_publisher",e.OrgUser="org_user",e.CustomRoles="custom_roles"}(Ao||(Ao={}));class Po extends e.React.PureComponent{constructor(t){super(t),this.titleTextInput=e.React.createRef(),this.spanTextInput=e.React.createRef(),this.originTitleMaxWidth=236,this.currentToolContainerWidth=0,this.currentPublishStateContainerWidth=0,this.focusTitleInput=!1,this.headerContainerCon=e.React.createRef(),this.toolListConRef=e.React.createRef(),this.publishStatusConRef=e.React.createRef(),this.getHelpUrl=()=>{var e;null===(e=null===o.helpUtils||void 0===o.helpUtils?void 0:o.helpUtils.getHomeHelpLink())||void 0===e||e.then((e=>{e&&this.setState({helpUrl:e})}))},this.checkIsItemInUpdateGroup=e=>Io(this,void 0,void 0,(function*(){const{user:t,appInfo:o,queryObject:s}=this.props;if((s.id!==e.queryObject.id||t!==(null==e?void 0:e.user))&&(null==o?void 0:o.id)&&t){const e=yield function(e,t){return be(this,void 0,void 0,(function*(){if(window.jimuConfig.isDevEdition)return!1;const o=ye(t),s={items:e,groups:o.join(",")};let a=!1;return i.appServices.getAppGroups(s).then((t=>{for(const o in t)o===e&&(a=!0);return Promise.resolve(a)}),(e=>Promise.resolve(a)))}))}(null==o?void 0:o.id,t);this.setState({isItemInUpdateGroup:e},(()=>{this.checkEditPrivileges()}))}})),this.editTitle=e=>{if(this.checkAndShowReadOnlyRemind())return;let t=e;this.focusTitleInput=!1;const{appItem:s}=this.state;if(t=t.replace(/(^\s*)|(\s*$)/g,""),0===t.length||/^[ ]*$/.test(t)||t===s.title)return t=s.title,this.setState({titleText:t}),!1;i.appServices.updateAppInfo({id:this.props.queryObject.id,title:t,owner:s.owner}).then((()=>{this.props.dispatch(o.builderActions.refreshAppListAction(!0)),o.builderAppSync.publishAppInfoChangeToApp(Object.assign(Object.assign({},s),{title:t})),s.title=t,this.setState({appItem:s,titleText:t})}),(e=>{console.error(e),this.handleTokenInvalid(e)}))},this.checkAndShowReadOnlyRemind=()=>{const t=(0,e.getAppStore)().getState().portalSelf;return(null==t?void 0:t.isReadOnly)&&this.toastNote(this.nls("remindTextForReadonlyMode")),null==t?void 0:t.isReadOnly},this.handleTokenInvalid=t=>{498===Number(null==t?void 0:t.code)&&e.SessionManager.getInstance().gotoAuthErrorPage()},this.refreshTitleByAppId=t=>{e.portalUtils.getAppInfo(t).then((e=>{this.refreshTitle(e,!0)}),(e=>{console.error(e)}))},this.refreshTitle=(e,t=!1)=>{if(!e)return;const{titleText:o}=this.state,i=this.state.itemType,s=(null==e?void 0:e.type)===a.Template?a.Template:a.Experience,n=s===a.Template&&i!==s;this.getPublishStatusByTypeKeyword(e),o&&!t&&(e.title=o),this.setState({titleText:e.title||"",itemType:s,itemId:e.id,appItem:this.initAppInfo(e),isShowTemplateRemind:n})},this.resetTitle=e=>{this.setState({titleText:e})},this.initAppInfo=e=>(null==e?void 0:e.id)?(e.isLocalApp=window.jimuConfig.isDevEdition,e.portalUrl=this.props.portalUrl,e):null,this.getPublishStatusByTypeKeyword=e=>{const t=(0,i.getPublishStatus)(e);this.setState({publishStatus:t})},this.getAppPublishStatus=()=>{if(!this.state.publishStatus||this.state.publishStatus===n.Publishing)return"";const t=e.css`
      padding: 0.25rem 0.5rem;
      font-size: 12px;
      line-height: 150%;
      font-style: normal;
      border: 1px solid ${this.props.theme.sys.color.divider.tertiary};
      box-shadow: ${this.props.theme.sys.shadow.shadow2};
      border-radius: 2px;
      .name {
        font-weight: 600;
      }
      .desc {
        font-weight: 400;
      }
    `;let o="",i="";switch(this.state.publishStatus){case n.Draft:o="itemStatusDraft",i="draftStatusTitle";break;case n.Published:o="published",i="publishedTitle";break;case n.Changed:o="unpublishedChanges",i="publishedUnsaveTitle"}return(0,e.jsx)("div",{css:t},(0,e.jsx)("div",{className:"name",id:"app-status-label"},this.nls(o)),(0,e.jsx)("div",{className:"desc",id:"app-status-desc"},this.nls(i)))},this.getPublishIcon=()=>{const{publishStatus:t}=this.state;let o;switch(t){case n.Draft:o=(0,e.jsx)(vo,{size:"s",color:"var(--ref-palette-white)"});break;case n.Published:o=(0,e.jsx)(yo,{size:"s",color:"var(--ref-palette-white)"});break;case n.Changed:o=(0,e.jsx)(Oo,{size:"s",color:"var(--ref-palette-white)"})}return o},this.changePublishStatus=e=>{this.setState({publishStatus:e})},this.titleTextChange=e=>{let t=e.target.value;t.length>250&&(t=t.slice(0,250)),this.setState({titleText:t})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:To[e]}):e,this.handleKeydown=e=>{"Enter"===e.key&&setTimeout((()=>{this.titleTextInput.current.blur()}),0)},this.onToolContainerResize=({width:e,height:t})=>{this.currentToolContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.onHeaderContainerResize=()=>{this.checkAndResizeTileMaxWidth()},this.onPublishStateContainerResized=({width:e,height:t})=>{this.currentPublishStateContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.checkAndResizeTileMaxWidth=()=>{if(!this.currentToolContainerWidth||!this.currentPublishStateContainerWidth)return;const e=window.innerWidth-this.currentToolContainerWidth-52-this.currentPublishStateContainerWidth;e>=this.originTitleMaxWidth?this.setState({titleMaxWidth:this.originTitleMaxWidth}):e<=40?this.setState({titleMaxWidth:40}):this.setState({titleMaxWidth:e})},this.getTemplatePopperStyle=()=>{const{theme:t}=this.props;return e.css`
      &{
        background: ${t.ref.palette.neutral[600]};
        color: ${t.ref.palette.black};
        border: 1px solid ${t.ref.palette.neutral[400]};
        box-sizing: border-box;
        padding: ${e.polished.rem(10)} ${e.polished.rem(12)};
        border-radius: 2px;
        box-shadow: 0 0 10px 2px ${e.polished.rgba(t.ref.palette.white,.2)};
      }
      .template-remind-popper {
        div{
          white-space: nowrap;
          text-align: center;
          font-size: ${e.polished.rem(13)};
          line-height: ${e.polished.rem(13)};
          margin-bottom: ${e.polished.rem(14)};
        }
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::before{
        border-right-color: ${t.ref.palette.neutral[400]};
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::after {
        border-right-color: ${t.ref.palette.neutral[600]};
      }
    `},this.closeTemplateRemind=()=>{this.setState({isShowTemplateRemind:!1})},this.onSaveStatusChanged=e=>{this.setState({isAppSaved:e})},this.checkIsOwner=()=>{const{appInfo:e}=this.props,{user:t}=this.props;return(null==t?void 0:t.username)===(null==e?void 0:e.owner)},this.checkEditPrivileges=()=>{const{appInfo:e}=this.props,{user:t}=this.props,{isItemInUpdateGroup:o}=this.state,i=null==e?void 0:e.isOrgItem,s=this.checkIsOwner()||(null==t?void 0:t.role)===Ao.OrgAdmin&&(i||window.jimuConfig.isDevEdition)||o;this.setState({canEditItem:s})},this.handleFocusTitleInput=e=>{this.focusTitleInput=!0},this.toastNote=e=>{this.setState({showToast:!0,toastText:e})},this.hideToastNote=()=>{this.setState({showToast:!1})},this.initExbExpressModeInLocalStorage=()=>{window.isExpressBuilder?e.utils.setLocalStorage(s,"true"):e.utils.removeFromLocalStorage(s)},this.state={titleText:"",accountPopoverOpen:!1,itemType:a.Experience,itemId:"",titleMaxWidth:this.originTitleMaxWidth,publishStatus:null,isShowTemplateRemind:!1,isAppSaved:!0,showTitle:!0,helpUrl:"#",canEditItem:!1,showToast:!1,toastText:null,isItemInUpdateGroup:!0,keyForExpressToolbar:0}}getStyle(){const t=this.props.theme,{publishStatus:o}=this.state;let i;switch(o){case n.Publishing:i="unset";break;case n.Draft:i="var(--sys-color-warning-light)";break;case n.Published:i="var(--sys-color-success-light)";break;case n.Changed:i="var(--sys-color-error-light)"}return e.css`
      .widget-builder-header {
        background-color: ${t.ref.palette.neutral[500]};
        border: 1px solid ${t.ref.palette.neutral[700]};
        padding-left: ${e.polished.rem(12)};
        overflow: auto;

        .header-title-container {
          display: flex;
          .header-logo-title-state {
            display: flex;
            width: 310px;
          }
        }
        .header-logo {
          a {
            margin-right:${e.polished.rem(6)};
          }
          .header-logo-item {
            height: ${e.polished.rem(32)};
            width: ${e.polished.rem(32)};
            background: url('./assets/exb-logo.png') no-repeat center;
            background-size: 100%;
            &:hover {
              background: url(${g(1546)}) no-repeat center;
              background-size: 100%;
            }
          }
        }

        .app-type {
          background: ${t.sys.color.secondary.dark};
          color: ${t.sys.color.info.light};
          border-radius: 2px;
          font-size: ${e.polished.rem(10)};
          white-space: nowrap;
          width: ${e.polished.rem(24)};
          padding: ${e.polished.rem(2)} 0;
          text-align: center;
        }
        .publish-state {
          overflow: visible;
          margin-left: ${e.polished.rem(8)};
          // max-width: ${e.polished.rem(152)};
          height: ${e.polished.rem(16)};
          width: ${e.polished.rem(16)};
          border-radius: 50%;
          background: ${i};
          .jimu-icon {
            margin-right: 0;
          }
        }
        .publish-state div {
          background: ${t.sys.color.success.light};
          border-radius: 2px;
          font-size: ${e.polished.rem(10)};
          line-height: ${e.polished.rem(18)};
          position: relative;
          white-space: nowrap;
          padding: 0 ${e.polished.rem(6)};
          text-align: center;
          color: ${t.ref.palette.white};
          max-width: ${e.polished.rem(150)};
          font-weight: bold;
        }
        .publish-state .Draft{
          color: ${t.ref.palette.white};
          background: ${t.sys.color.warning.light};
        }
        .publish-state .Changed{
          color: ${t.ref.palette.white};
          background: ${t.sys.color.error.light};
        }

        .app-title-content {
          width: 100%;
          height: ${e.polished.rem(28)};
          min-width: ${e.polished.rem(40)};
          position: relative;
          .title-placeholder {
            width: auto;
            padding: 0 0.5rem;
            font-size: ${e.polished.rem(16)};
            visibility: hidden;
            pointer-events: none;
          }
        }
        .header-title-input {
          position: absolute;
          width: 100%;
          height: 100%;
          .input-wrapper {
            background-color: transparent;
            input {
              font-size: ${e.polished.rem(16)};
              color: var(--ref-palette-neutral-1100);
            }
          }
          min-width: ${e.polished.rem(40)};
        }
        .header-title-input {
          left: 0;
          top: 0;
          width: 100%;
        }
        .title-text-placeholder {
          display: block;
          opacity: 0;
          padding-left:${e.polished.rem(5)};
          padding-right:${e.polished.rem(7)};
          word-spacing: ${e.polished.rem(6)};
        }

        .header-account {
          float: left;
          color: ${t.ref.palette.black};

          div {
            background-color: initial;
          }

          &:hover {
            // background-color: ${t.ref.palette.white};
          }
        }

        .header-login {
          cursor: pointer;
          fill: ${t.ref.palette.black};
        }

        .header-login-username {
          color: ${t.ref.palette.black};
          margin-left: 5px;
          font-size: 14px;
        }

        .toollist-seperateline {
          margin-left: ${e.polished.rem(16)};
          height: 30px;
          border: 1px solid ${t.ref.palette.neutral[700]};
        }

        .liveview-gap {
          margin-right: ${e.polished.rem(20)};
        }

        .dropdown-toggle-content {
          margin-top: ${e.polished.rem(4)};
        }

        .user-container {
          margin: 10.5px 16px;
        }
      }

      .account-dropdown-toggle:focus {
        box-shadow: none !important;
      }`}componentDidMount(){this.props.queryObject.id&&this.refreshTitleByAppId(this.props.queryObject.id),this.getHelpUrl(),this.checkEditPrivileges()}getSnapshotBeforeUpdate(e,t){return!(!this.props.queryObject.id||e.queryObject.id===this.props.queryObject.id)}componentDidUpdate(e,t,o){const{currentPageId:i,appInfo:s,queryObject:a}=this.props;if(o&&this.setState({titleText:""}),a.id!==e.queryObject.id&&e.queryObject.id?this.refreshTitleByAppId(this.props.queryObject.id):s&&0!==Object.keys(s).length&&s!==(null==e?void 0:e.appInfo)&&!this.focusTitleInput&&this.refreshTitle(null==s?void 0:s.asMutable({deep:!0})),e.currentPageId!==i){let e=!0;"template"===i&&(e=!1),this.setState({showTitle:e})}this.checkEditPrivileges(),this.props.portalUrl===(null==e?void 0:e.portalUrl)&&this.props.portalSelf===(null==e?void 0:e.portalSelf)||this.getHelpUrl(),this.checkIsItemInUpdateGroup(e)}getQuery(t){return e.queryString.parse(window.location.search)[t]||""}render(){const i=o.utils.getHomePageUrl(window.isExpressBuilder),{itemType:s,titleText:n,titleMaxWidth:l,isShowTemplateRemind:r,showTitle:p,canEditItem:d}=this.state,c=window.isExpressBuilder;return(0,e.jsx)("div",{css:this.getStyle(),ref:this.headerContainerCon,className:"h-100"},(0,e.jsx)("div",{className:"widget-builder-header d-flex justify-content-between h-100 pr-0 border-left-0 border-right-0 border-top-0",style:{overflowX:"hidden"}},(0,e.jsx)("div",{className:"header-title-container"},(0,e.jsx)("div",{className:"header-logo-title-state"},(0,e.jsx)("div",{className:"header-logo d-flex align-items-center"},(0,e.jsx)("a",{onClick:this.initExbExpressModeInLocalStorage,href:i,title:this.nls("headerHome"),"aria-label":this.nls("headerHome")},(0,e.jsx)("div",{className:"header-logo-item d-block"})),p&&(0,e.jsx)("div",{className:"header-title d-flex align-items-center",style:{maxWidth:l}},(0,e.jsx)("div",{className:"app-title-content flex-grow-1"},(0,e.jsx)("span",{className:"title-placeholder text-truncate"},n),(0,e.jsx)(t.TextInput,{ref:this.titleTextInput,className:"header-title-input font-weight-normal",value:n,onAcceptValue:this.editTitle,onChange:this.titleTextChange,onKeyDown:this.handleKeydown,onFocus:this.handleFocusTitleInput,borderless:!0,"aria-label":this.nls("appTitle")})))),(0,e.jsx)("div",{className:"d-flex align-items-center",ref:this.publishStatusConRef},(0,e.jsx)("div",{ref:e=>{this.reference=e}},s===a.Template&&(0,e.jsx)("div",{title:this.nls("appTypeTemplate"),className:"app-type  position-relative"},(0,e.jsx)(Ft,{className:"toollist-item-icon",size:"l"}),(0,e.jsx)(t.Popper,{reference:this.reference,open:r,arrowOptions:!0,toggle:this.closeTemplateRemind,placement:"right-end",offsetOptions:[-8,0],css:this.getTemplatePopperStyle()},(0,e.jsx)("div",{className:"template-remind-popper"},(0,e.jsx)("div",null,this.nls("templateRemind")),(0,e.jsx)(t.Button,{type:"primary",className:"float-right",size:"sm",onClick:this.closeTemplateRemind},this.nls("gotIt")),(0,e.jsx)("span",{className:"position-absolute"}))))),(0,e.jsx)(t.Tooltip,{title:this.getAppPublishStatus(),describeChild:!0,enterDelay:0,"aria-live":"off",placement:"bottom-start"},(0,e.jsx)(t.Button,{type:"tertiary",size:"sm",className:"publish-state position-relative p-0","aria-labelledby":"app-status-label","aria-describedby":"app-status-desc"},this.getPublishIcon())),(0,e.jsx)(e.ReactResizeDetector,{targetRef:this.publishStatusConRef,handleWidth:!0,onResize:this.onPublishStateContainerResized}))),c&&(0,e.jsx)(Wt,null)),(0,e.jsx)("div",{className:"d-flex align-items-center justify-content-end",ref:this.toolListConRef},!c&&(0,e.jsx)($.Fragment,null,(0,e.jsx)(We,{intl:this.props.intl}),(0,e.jsx)("div",{className:"liveview-gap"})),c&&(0,e.jsx)(uo,{key:this.state.keyForExpressToolbar}),(0,e.jsx)(at,{intl:this.props.intl}),(0,e.jsx)(ut,{nls:this.nls}),(0,e.jsx)("div",{className:"toollist-seperateline border-bottom-0 border-top-0 border-left-0 mt-1 mb-1 ml-2 mr-2"}),(0,e.jsx)(Ue,{handleTokenInvalid:this.handleTokenInvalid,theme:this.props.theme,itemId:this.state.itemId,itemType:this.state.itemType,intl:this.props.intl,appItem:this.state.appItem,publishStatus:this.state.publishStatus,changePublishStatus:this.changePublishStatus,titleText:n,locale:this.getQuery("locale")||"",onSaveStatusChanged:this.onSaveStatusChanged,onMoreOptionOpen:()=>{this.setState({keyForExpressToolbar:this.state.keyForExpressToolbar+1})},folderUrl:this.props.context.folderUrl,resetTitle:this.resetTitle,canEditItem:d,toastNote:this.toastNote,checkAndShowReadOnlyRemind:this.checkAndShowReadOnlyRemind}),(0,e.jsx)("div",{className:"float-right d-flex user-container"},this.props.user&&(0,e.jsx)(t.UserProfile,{user:this.props.user,portalUrl:this.props.portalUrl,isAppSaved:this.state.isAppSaved,helpUrl:this.state.helpUrl})),(0,e.jsx)(e.ReactResizeDetector,{targetRef:this.toolListConRef,handleWidth:!0,onResize:this.onToolContainerResize}))),(0,e.jsx)(t.Message,{open:this.state.showToast,autoHideDuration:2e3,elevation:"shadow1",withIcon:!0,severity:"success",message:this.state.toastText,onClose:this.hideToastNote}),(0,e.jsx)(e.ReactResizeDetector,{handleWidth:!0,onResize:this.onHeaderContainerResize,targetRef:this.headerContainerCon}))}}Po.mapExtraStateProps=e=>{var t;return{currentPageId:e.appRuntimeInfo&&e.appRuntimeInfo.currentPageId,queryObject:e.queryObject,appInfo:null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appInfo}};const Mo=Po;function ko(e){g.p=e}})(),v})())}}}));