(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5575:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});e(7294);var r=e(9008),i=e(5893);function c(n){var t=n.title;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.default,{children:(0,i.jsx)("title",{children:"[".concat(t,"] - Henrique Holtz")})})})}},1974:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p}});var r=e(29),i=e(7794),c=e.n(i),u=e(7294),s=e(5575),o=e(9669),a=e.n(o),l=e(2318),f=e(2822),d=e(4792),h=e(9659),j=e(5893);function p(){var n=(0,u.useState)(!1),t=n[0],e=n[1],i=(0,u.useState)(!1),o=(i[0],i[1]),p=(0,u.useState)(null),x=p[0],v=p[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/api/projects.json").then((function(n){v(n.data),e(!1),o(!1)})).catch((function(){return o(!0)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Z,{title:"Projects"}),t?(0,j.jsx)(l.Z,{children:"Loading"}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.Z,{variant:"h2",className:"pl-10",children:"Projects"}),(0,j.jsx)(f.Z,{children:null===x||void 0===x?void 0:x.map((function(n){return(0,j.jsxs)(d.Z,{children:[(0,j.jsx)(l.Z,{variant:"body1",style:{marginRight:"5px",fontWeight:700},children:n.title}),(0,j.jsx)(h.Z,{color:"initial",href:n.repository,target:"_blank",rel:"noreferrer",underline:"none",children:"See the repository"})]},n.id)}))})]})]})}},4478:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return e(1974)}])}},function(n){n.O(0,[650,774,888,179],(function(){return t=4478,n(n.s=t);var t}));var t=n.O();_N_E=t}]);