"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,c=e(861),u=e(439),o=e(757),a=e.n(o),i=e(791),s=e(689),f=e(387),p=e(598),h=e(168),l=e(444).ZP.li(r||(r=(0,h.Z)(["\n  margin-bottom: 20px;\n  list-style: none;\n  border-bottom: 1px solid grey;\n"]))),v=e(184),d=function(){var n=(0,i.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem("reviews")))&&void 0!==n?n:{}})),t=(0,u.Z)(n,2),e=t[0],r=t[1],o=(0,i.useState)(null),h=(0,u.Z)(o,2),d=h[0],w=h[1],m=(0,s.UO)().id;return(0,i.useEffect)((function(){window.localStorage.setItem("reviews",JSON.stringify(e))}),[e]),(0,i.useEffect)((function(){function n(){return(n=(0,c.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.Xj)(m).then((function(n){return n}));case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),w(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[m]),(0,v.jsx)(v.Fragment,{children:null===d?(0,v.jsx)(p.W2,{children:0!==e.results.length?(0,v.jsx)("ul",{children:e.results.map((function(n){return(0,v.jsxs)(l,{children:[(0,v.jsxs)("h3",{style:{color:"darkgreen"},children:["Author: ",n.author]}),(0,v.jsxs)("p",{children:["`",n.content,"`"]})]},n.id)}))}):(0,v.jsx)("h3",{children:"We don`t have any reviews for this movie."})}):(0,v.jsxs)("h3",{children:["Something went wrong on API... The messege error `",d,"`"]})})}},387:function(n,t,e){e.d(t,{$w:function(){return p},Hg:function(){return i},Pg:function(){return f},Xj:function(){return h},iY:function(){return l}});var r=e(861),c=e(757),u=e.n(c),o="https://api.themoviedb.org/3/",a="78844696e6f21da4f5b43c08b71ce0bd";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"trending/movie/day?api_key=").concat(a));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function l(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"search/movie?api_key=").concat(a,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},861:function(n,t,e){function r(n,t,e,r,c,u,o){try{var a=n[u](o),i=a.value}catch(s){return void e(s)}a.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var o=n.apply(t,e);function a(n){r(o,c,u,a,i,"next",n)}function i(n){r(o,c,u,a,i,"throw",n)}a(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=779.4654504d.chunk.js.map