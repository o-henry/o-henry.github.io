(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,i=o(n(7294)),l=n(4957),u=n(7995),c=n(647),f=n(1992),s=n(639),d=n(4019),p=n(227),h="undefined"!==typeof i.default.useTransition,v={};function y(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var m=i.default.forwardRef((function(e,t){var n,o=e.href,m=e.as,b=e.children,g=e.prefetch,j=e.passHref,x=e.replace,O=e.soft,w=e.shallow,_=e.scroll,P=e.locale,E=e.onClick,k=e.onMouseEnter,S=e.onTouchStart,C=e.legacyBehavior,M=void 0===C?!0!==Boolean(!1):C,I=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!M||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var A=!1!==g,L=h?i.default.useTransition():[],R=r(L,2)[1],T=i.default.useContext(c.RouterContext),Z=i.default.useContext(f.AppRouterContext);Z&&(T=Z);var D,U=i.default.useMemo((function(){var e=l.resolveHref(T,o,!0),t=r(e,2),n=t[0],a=t[1];return{href:n,as:m?l.resolveHref(T,m):a||n}}),[T,o,m]),N=U.href,H=U.as,z=i.default.useRef(N),B=i.default.useRef(H);M&&(D=i.default.Children.only(n));var F=M?D&&"object"===typeof D&&D.ref:t,K=s.useIntersection({rootMargin:"200px"}),W=r(K,3),X=W[0],q=W[1],G=W[2],V=i.default.useCallback((function(e){B.current===H&&z.current===N||(G(),B.current=H,z.current=N),X(e),F&&("function"===typeof F?F(e):"object"===typeof F&&(F.current=e))}),[H,F,N,G,X]);i.default.useEffect((function(){var e=q&&A&&l.isLocalURL(N),t="undefined"!==typeof P?P:T&&T.locale,n=v[N+"%"+H+(t?"%"+t:"")];e&&!n&&y(T,N,H,{locale:t})}),[H,N,q,P,A,T]);var $={ref:V,onClick:function(e){M||"function"!==typeof E||E(e),M&&D.props&&"function"===typeof D.props.onClick&&D.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:u})};f?f(s):s()}}(e,T,N,H,x,O,w,_,P,Z?R:void 0)},onMouseEnter:function(e){M||"function"!==typeof k||k(e),M&&D.props&&"function"===typeof D.props.onMouseEnter&&D.props.onMouseEnter(e),l.isLocalURL(N)&&y(T,N,H,{priority:!0})},onTouchStart:function(e){M||"function"!==typeof S||S(e),M&&D.props&&"function"===typeof D.props.onTouchStart&&D.props.onTouchStart(e),l.isLocalURL(N)&&y(T,N,H,{priority:!0})}};if(!M||j||"a"===D.type&&!("href"in D.props)){var Q="undefined"!==typeof P?P:T&&T.locale,J=T&&T.isLocaleDomain&&d.getDomainLocale(H,Q,T.locales,T.domainLocales);$.href=J||p.addBasePath(u.addLocale(H,Q,T&&T.defaultLocale))}return M?i.default.cloneElement(D,$):i.default.createElement("a",Object.assign({},I,$),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!i,f=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],h=d[1],v=o.useState(null),y=r(v,2),m=y[0],b=y[1];o.useEffect((function(){if(i){if(f.current&&(f.current(),f.current=void 0),c||p)return;return m&&m.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},u.push(n),l.set(n,t),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(m,(function(e){return e&&h(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==f.current||f.current(),f.current=void 0}}if(!p){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,c,n,t,p]);var g=o.useCallback((function(){h(!1)}),[]);return[b,p,g]};var o=n(7294),a=n(6286),i="function"===typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var i=r.default.createContext(null);t.GlobalLayoutRouterContext=i},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,a=(0,n(1598).Z)(n(7294)),i=o(n(1585)),l=n(8e3),u=n(5850),c=n(9470);n(9475);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce(s,[]).reverse().concat(f(t.inAmpMode).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var l=o.key.slice(o.key.indexOf("$")+1);e.has(l)?a=!1:e.add(l)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(s)?(p.add(s),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=r({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,a.default.cloneElement(e,i)}return a.default.cloneElement(e,{key:o})}))}var h=function(e){var t=e.children,n=a.useContext(l.AmpStateContext),r=a.useContext(u.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:c.isInAmpMode(n)},t)};t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function l(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),l()}return a((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),a((function(){return t&&(t._pendingUpdate=l),function(){t&&(t._pendingUpdate=l)}})),i((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var o=!1,a=o?function(){}:r.useLayoutEffect,i=o?function(){}:r.useEffect},2181:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return R}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.createContext({}),f=function(e){var t=o.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=f(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=f(n),p=r,h=s["".concat(i,".").concat(p)]||s[p]||d[p]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));p.displayName="MDXCreateElement";var h,v=n(9008),y=n.n(v),m=n(1664),b=n.n(m),g=["title","titleId"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O,w=function(e){var t=e.title,n=e.titleId,r=x(e,g);return o.createElement("svg",j({width:"1em",height:"1em",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,h||(h=o.createElement("path",{d:"M43.275 29.212A18.765 18.765 0 0 1 20.788 6.725h0a18.752 18.752 0 1 0 22.487 22.488h0Z",fill:"#fff",stroke:"#000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},_=["title","titleId"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k=function(e){var t=e.title,n=e.titleId,r=E(e,_);return o.createElement("svg",P({width:"1em",height:"1em",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,O||(O=o.createElement("path",{d:"m11.75 35.417-1.48 1.479a2.083 2.083 0 0 0 0 2.937 2.084 2.084 0 0 0 2.938 0l1.48-1.479a2.084 2.084 0 0 0-2.938-2.937ZM10.417 25a2.083 2.083 0 0 0-2.084-2.083H6.25a2.083 2.083 0 0 0 0 4.166h2.083A2.083 2.083 0 0 0 10.417 25ZM25 10.417a2.083 2.083 0 0 0 2.083-2.084V6.25a2.083 2.083 0 0 0-4.166 0v2.083A2.083 2.083 0 0 0 25 10.417Zm-13.25 4.27a2.084 2.084 0 0 0 2.938 0 2.084 2.084 0 0 0 0-2.937l-1.48-1.48a2.083 2.083 0 0 0-2.937 2.938l1.48 1.48Zm25 .605a2.084 2.084 0 0 0 1.458-.604l1.48-1.48a2.082 2.082 0 1 0-2.938-2.937l-1.333 1.479a2.083 2.083 0 0 0 0 2.938c.367.365.857.58 1.375.604h-.042Zm7 7.625h-2.083a2.083 2.083 0 0 0 0 4.166h2.083a2.083 2.083 0 0 0 0-4.166ZM25 39.583a2.083 2.083 0 0 0-2.083 2.084v2.083a2.083 2.083 0 0 0 4.166 0v-2.083A2.083 2.083 0 0 0 25 39.583Zm13.25-4.166a2.084 2.084 0 0 0-2.833 2.833l1.479 1.48a2.084 2.084 0 0 0 2.937 0 2.083 2.083 0 0 0 0-2.938l-1.583-1.375ZM25 13.542A11.458 11.458 0 1 0 36.458 25 11.48 11.48 0 0 0 25 13.542Zm0 18.75a7.292 7.292 0 1 1 0-14.585 7.292 7.292 0 0 1 0 14.585Z",fill:"#000"})))},S=n(5893);function C(){var e=(0,o.useState)(void 0),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e=window.document.documentElement.style.getPropertyValue("--initial-color-mode");n("dark"===e)}),[]),(0,o.useEffect)((function(){void 0!==t&&(t?(document.documentElement.setAttribute("data-theme","dark"),window.localStorage.setItem("theme","dark")):(document.documentElement.removeAttribute("data-theme"),window.localStorage.setItem("theme","light")))}),[t]),(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"0 4rem 0 4rem",flexShrink:0},children:[(0,S.jsx)("div",{style:{flex:9},children:(0,S.jsx)(b(),{href:"/",children:(0,S.jsx)("a",{children:(0,S.jsx)("h1",{style:{fontSize:"1.125rem"},children:"Henry"})})})}),(0,S.jsx)("div",{style:{flexShrink:"0",width:"15px"}}),(0,S.jsx)(b(),{href:"/blog",children:(0,S.jsx)("a",{children:(0,S.jsx)("h2",{style:{fontSize:"0.825rem"},children:"Blog"})})}),(0,S.jsx)("div",{style:{flexShrink:"0",width:"15px"}}),(0,S.jsx)("a",{href:"https://lee-note.notion.site/82a3ac3053a9457b9f1a4e1b3d7baedc?v=2acb0e3dd5c64d4d8582ee28f193acd7",target:"_blank",children:(0,S.jsx)("h2",{style:{fontSize:"0.825rem"},children:"Read"})}),(0,S.jsx)("div",{style:{flexShrink:"0",width:"15px"}}),(0,S.jsx)(b(),{href:"/about",children:(0,S.jsx)("a",{children:(0,S.jsx)("h2",{style:{fontSize:"0.825rem"},children:"About"})})}),(0,S.jsx)("div",{style:{flexShrink:"0",width:"15px"}}),t?(0,S.jsxs)("label",{children:[(0,S.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){n(!!e.target.checked)}}),(0,S.jsx)(w,{style:{position:"relative",fontSize:"25px",top:"2.5px"}})]}):(0,S.jsxs)("label",{children:[(0,S.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){n(!!e.target.checked)}}),(0,S.jsx)(k,{style:{position:"relative",fontSize:"25px",top:"3.465px"}})]})]})})}var M=function(e){var t=e.children,n=e.pageTitle,r=e.description;return(0,S.jsxs)("div",{className:"container",children:[(0,S.jsxs)(y(),{children:[(0,S.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,S.jsx)("meta",{charSet:"utf-8"}),(0,S.jsx)("meta",{name:"Description",content:r}),(0,S.jsx)("title",{children:n})]}),(0,S.jsxs)("main",{children:[(0,S.jsx)(C,{}),(0,S.jsx)("div",{className:"content",children:t})]}),(0,S.jsx)("footer",{style:{fontSize:"0.625rem",fontWeight:"200",flexShrink:0,margin:"4.125rem"},children:"2022 \xa9 Henry"})]})};n(7787);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={code:function(e){return(0,S.jsx)("pre",A({},e))},pre:function(e){return(0,S.jsx)("div",A({},e))}};function R(e){var t=e.Component,n=e.pageProps;return(0,S.jsx)(s,{components:L,children:(0,S.jsx)(M,{pageTitle:"Henry's log",description:"Personal Blog",children:(0,S.jsx)(t,A({},n))})})}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2181)}])},7787:function(){},9008:function(e,t,n){e.exports=n(2717)},1664:function(e,t,n){e.exports=n(7942)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(9898)}));var n=e.O();_N_E=n}]);