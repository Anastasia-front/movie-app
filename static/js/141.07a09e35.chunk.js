"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[141],{3141:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,i,o,a=t(3433),s=t(5861),u=t(9439),l=t(7757),c=t.n(l),h=t(1087),f=t(2791),p=t(168),x=t(6444),d=t(9128),g=x.ZP.div(r||(r=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: -20px;\n  text-transform: uppercase;\n  position: relative;\n"]))),v=x.ZP.input(i||(i=(0,p.Z)(["\n  padding: 4px 32px 4px 24px;\n  border-radius: 4px;\n  border: 1px solid #7c5400;\n  font: inherit;\n"]))),m=(0,x.ZP)(d.G4C)(o||(o=(0,p.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 6px;\n  right: 6px;\n"]))),Z=t(184),w=function(n){var e=n.value,t=n.onChange,r=n.onSubmit;return(0,Z.jsx)(g,{children:(0,Z.jsxs)("form",{onSubmit:r,children:[(0,Z.jsx)(v,{type:"text",value:e,onChange:function(n){return t(n.target.value)}}),(0,Z.jsx)(m,{})]})})},j=t(2852),y=t(387),S=t(7047),b=t(4771),k=t(4653),C=function(){var n,e,t=(0,f.useState)(null),r=(0,u.Z)(t,2),i=r[0],o=r[1],l=(0,h.lr)(),p=(0,u.Z)(l,2),x=p[0],g=p[1],v=null!==(n=x.get("query"))&&void 0!==n?n:"",m=(0,f.useState)(null!==(e=x.get("query"))&&void 0!==e?e:""),C=(0,u.Z)(m,2),P=C[0],Y=C[1],_=(0,f.useState)(!0),E=(0,u.Z)(_,2),I=E[0],q=E[1],A=(0,f.useState)([]),M=(0,u.Z)(A,2),D=M[0],F=M[1],L=(0,f.useState)(1),z=(0,u.Z)(L,2),B=z[0],G=z[1];(0,f.useEffect)((function(){localStorage.setItem("scrollPos",0)}),[]),(0,f.useEffect)((function(){if(""!==P){if(1===B){var n=function(){var n=(0,s.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{(0,y.iY)(P,B).then((function(n){F(n.results)}))}catch(i){o(i)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}if(B>1){var e=function(){var n=(0,s.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{(0,y.iY)(P,B).then((function(n){F((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(n.results))}))}))}catch(i){o(i)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();e()}}}),[B,P]);0!==D.length&&(0,y.iY)(P,B).then((function(n){D.length===n.total_results&&q(!1)}));var J=0===D.length&&""===P&&""===v,N=0===D.length&&1===B&&""!==P&&""!==v,O=D.length>1&&""!==v;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w,{value:v,onChange:function(n){g(""!==n?{query:n}:{})},onSubmit:function(n){n.preventDefault(),Y(v),G(1)}}),J&&(0,Z.jsx)(j.v,{children:"Find movie that you want to watch above..."}),O&&(0,Z.jsxs)(b.Z,{dataLength:D.length,next:function(){G((function(n){return n+1}))},style:{overflow:"auto"},initialScrollY:JSON.parse(window.localStorage.getItem("scrollPos")),height:(0,k.CY)(),hasMore:I,loader:(0,Z.jsx)("h4",{style:{textAlign:"center"},children:"Loading... "}),endMessage:(0,Z.jsx)("p",{style:{textAlign:"center"},children:(0,Z.jsx)("b",{children:"Yay! You have seen it all ;D"})}),children:[(0,Z.jsx)(S.Z,{movies:D,onClick:function(){return(0,k.lB)((0,k.nE)())}}),(0,k.nE)()>1e3&&(0,Z.jsxs)(j.$,{onClick:function(){return(0,k.SM)()},children:["UP ",(0,Z.jsx)(d.sIl,{size:24})]})]}),N&&(0,Z.jsx)(j.v,{children:"Sorry, there are no movies with that name..."}),null!==i&&(0,Z.jsxs)(j.v,{children:["Something went wrong on API... The messege error `",i,"`"]})]})}}}]);
//# sourceMappingURL=141.07a09e35.chunk.js.map