(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{5575:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});e(7294);var r=e(9008),i=e(5893);function u(n){var t=n.title;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.default,{children:(0,i.jsx)("title",{children:"[".concat(t,"] - Henrique Holtz")})})})}},5836:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var r=e(29),i=e(7794),u=e.n(i),c=e(5575),a=e(9669),s=e.n(a),o=e(7294),l=e(2822),f=e(4792),d=e(9659),h=e(5893);function x(){var n=(0,o.useState)(!0),t=n[0],e=n[1],i=(0,o.useState)(!1),a=(i[0],i[1]),x=(0,o.useState)([]),_=x[0],p=x[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("api/articles").then((function(n){console.log("data",n.data),p(n.data),e(!1),a(!1)})).catch((function(){return a(!0)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Z,{title:"About"}),t?(0,h.jsx)("h3",{children:"Loading"}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:"Articles"}),(0,h.jsx)(l.Z,{children:null===_||void 0===_?void 0:_.map((function(n){return(0,h.jsx)(f.Z,{children:(0,h.jsx)(d.Z,{color:"initial",href:n.url,target:"_blank",rel:"noreferrer",underline:"none",children:n.description})},n.id)}))})]})]})}},7617:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return e(5836)}])}},function(n){n.O(0,[650,774,888,179],(function(){return t=7617,n(n.s=t);var t}));var t=n.O();_N_E=t}]);