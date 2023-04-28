"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[491],{5491:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r,a,o,s,i,c,l,u,f,m=n(5861),p=n(9439),d=n(7757),h=n.n(d),v=n(2791),x=n(7689),g=n(9128),j=n(168),w=n(6444),_=n(1087),Z=(0,w.ZP)(_.rU)(r||(r=(0,j.Z)(["\n  margin-bottom: 15px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),k=n(184),b=function(e){var t=e.to,n=e.children;return(0,k.jsxs)(Z,{to:t,children:[(0,k.jsx)(g.jTe,{size:"24"}),n]})},y=n(387),S=n(1598),P=w.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Q=w.ZP.div(o||(o=(0,j.Z)(["\n  display: flex;\n"]))),U=w.ZP.img(s||(s=(0,j.Z)(["\n  max-width: 500px;\n  max-height: 400px;\n  border-radius: 7px;\n"]))),O=w.ZP.div(i||(i=(0,j.Z)(["\n  margin-left: 30px;\n"]))),C=w.ZP.ul(c||(c=(0,j.Z)(["\n  margin-bottom: 10px;\n"]))),I=w.ZP.li(l||(l=(0,j.Z)(["\n  list-style: circle;\n  margin-bottom: 10px;\n  font-size: 18px;\n  a {\n    text-decoration: underline dotted;\n    color: #7c5400;\n  }\n"]))),T=w.ZP.ul(u||(u=(0,j.Z)(["\n  display: flex;\n  gap: 6px;\n  padding: 0;\n"]))),z=w.ZP.li(f||(f=(0,j.Z)(["\n  list-style: none;\n  padding: 0 6px 0 0;\n  :not(:last-child) {\n    border-right: 1px solid grey;\n  }\n"]))),A=function(){var e=(0,v.useState)(y.Q_.idle),t=(0,p.Z)(e,2),n=t[0],r=t[1],a=(0,v.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("movie")))&&void 0!==e?e:{backdrop_path:null,id:0,poster_path:null,title:"",original_title:"",release_date:"",vote_average:0,vote_count:0,overview:"",genres:[{id:0,name:""}]}})),o=(0,p.Z)(a,2),s=o[0],i=o[1],c=(0,v.useState)(null),l=(0,p.Z)(c,2),u=l[0],f=l[1],d=(0,x.UO)().id;(0,v.useEffect)((function(){window.localStorage.setItem("movie",JSON.stringify(s))}),[s]),(0,v.useEffect)((function(){function e(){return(e=(0,m.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.Pg)(d).then((function(e){return e}));case 3:t=e.sent,i(t),r(y.Q_.resolved),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),f(e.t0),r(y.Q_.rejected);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}r(y.Q_.pending),function(){e.apply(this,arguments)}()}),[d]);var g=(0,x.TH)();return(0,k.jsxs)(k.Fragment,{children:[n===y.Q_.resolved&&(0,k.jsxs)(S.W2,{children:[(0,k.jsx)(b,{to:function(){if(null===g.state)return{pathname:"/",search:""};if(null===g.state.from.state){var e,t=null===g.state.from.state?g.state.from.search:g.state.from.state.from.search,n="/movies"===g.pathname||"/movies/".concat(d)?null!==(e={locationSearch:t})&&void 0!==e?e:"/movies":0;return{pathname:"/"===(null===g.state.from.state?g.state.from.pathname:g.state.from.state.from.pathname)?"/":"/movies",search:n.locationSearch}}if(null===g.state.from.state.from.state){var r,a=null===g.state.from.state.from.state?g.state.from.state.from.search:g.state.from.state.from.state.from.search,o="/movies"===g.pathname||"/movies/".concat(d)?null!==(r={locationSearch:a})&&void 0!==r?r:"/movies":0;return{pathname:"/"===(null===g.state.from.state.from.state?g.state.from.state.from.pathname:g.state.from.state.from.state.from.pathname)?"/":"/movies",search:o.locationSearch}}if(null===g.state.from.state.from.state.from.state){var s,i=null===g.state.from.state.from.state.from.state?g.state.from.state.from.state.from.search:g.state.from.state.from.state.from.state.from.search,c="/movies"===g.pathname||"/movies/".concat(d)?null!==(s={locationSearch:i})&&void 0!==s?s:"/movies":0;return{pathname:"/"===(null===g.state.from.state.from.state.from.state?g.state.from.state.from.state.from.pathname:g.state.from.state.from.state.from.state.from.pathname)?"/":"/movies",search:c.locationSearch}}}(),children:"Back to movies"}),(0,k.jsxs)(P,{children:[(0,k.jsxs)(Q,{children:[null!==s.backdrop_path?(0,k.jsx)(U,{src:"https://image.tmdb.org/t/p/w500".concat(s.backdrop_path),alt:s.title}):(0,k.jsx)(U,{src:"https://fisnikde.com/wp-content/uploads/2019/01/broken-image.png",alt:s.title}),(0,k.jsxs)(O,{children:[(0,k.jsxs)("h1",{children:[s.original_title," (",s.release_date.slice(0,4),")"]}),(0,k.jsxs)("p",{children:["User Score: ",Math.round(10*s.vote_average),"%"]}),(0,k.jsx)("h2",{children:"Overview"}),(0,k.jsx)("p",{children:s.overview}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)(T,{children:s.genres.map((function(e){return(0,k.jsxs)(z,{children:[" ",e.name]},e.id)}))})]})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Additional information"}),(0,k.jsxs)(C,{children:[(0,k.jsx)(I,{children:(0,k.jsx)(_.rU,{to:"cast",state:{from:g},children:"Cast"})}),(0,k.jsx)(I,{children:(0,k.jsx)(_.rU,{to:"reviews",state:{from:g},children:"Reviews"})})]})]}),(0,k.jsx)(v.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading subpage..."}),children:(0,k.jsx)(x.j3,{})})]})]}),n===y.Q_.rejected&&(0,k.jsxs)("h3",{children:["Something went wrong on API... The messege error `",u,"`"]}),n===y.Q_.pending&&(0,k.jsx)("h3",{children:"Please wait, information is loading..."})]})}},387:function(e,t,n){n.d(t,{$w:function(){return f},Hg:function(){return c},Pg:function(){return u},Q_:function(){return h},Xj:function(){return m},iY:function(){return p}});var r=n(5861),a=n(7757),o=n.n(a),s="https://api.themoviedb.org/3/",i="78844696e6f21da4f5b43c08b71ce0bd";function c(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"trending/movie/day?api_key=").concat(i,"&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function p(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h={idle:"idle",pending:"pending",rejected:"rejected",resolved:"resolved"}}}]);
//# sourceMappingURL=491.f23dd492.chunk.js.map