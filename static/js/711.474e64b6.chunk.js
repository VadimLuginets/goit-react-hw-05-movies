"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[711],{182:function(e,n,t){function r(e,n,t,r,a,c,i){try{var s=e[c](i),o=s.value}catch(u){return void t(u)}s.done?n(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,c){var i=e.apply(n,t);function s(e){r(i,a,c,s,o,"next",e)}function o(e){r(i,a,c,s,o,"throw",e)}s(void 0)}))}}t.d(n,{KJ:function(){return h},YJ:function(){return p},ZF:function(){return u},_L:function(){return s},dW:function(){return v}});var c=t(687),i=t.n(c);function s(e){return o.apply(this,arguments)}function o(){return(o=a(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/movie/popular?api_key=6bfc661313cc74df3ae441abc4c4707b",e.next=4,fetch("https://api.themoviedb.org/3/movie/popular?api_key=6bfc661313cc74df3ae441abc4c4707b").then((function(e){return e.json()}));case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function u(e,n){return l.apply(this,arguments)}function l(){return(l=a(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r="https://api.themoviedb.org/3/search/movie?api_key=6bfc661313cc74df3ae441abc4c4707b&language=en-US&query=".concat(n.trim().toLowerCase(),"&page=1&include_adult=false"),e.next=6,fetch(r).then((function(e){return e.json()}));case 6:if(0!==(a=e.sent).total_pages){e.next=10;break}return t(null),e.abrupt("return");case 10:t(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function p(e,n){return f.apply(this,arguments)}function f(){return(f=a(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r="\nhttps://api.themoviedb.org/3/movie/".concat(n,"?api_key=6bfc661313cc74df3ae441abc4c4707b&language=en-US"),e.next=6,fetch(r).then((function(e){return e.json()}));case 6:a=e.sent,t(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function h(e,n){return d.apply(this,arguments)}function d(){return(d=a(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r="\nhttps://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=6bfc661313cc74df3ae441abc4c4707b&language=en-US"),e.next=6,fetch(r).then((function(e){return e.json()}));case 6:if(0!==(a=e.sent).total_pages){e.next=10;break}return t(null),e.abrupt("return");case 10:t(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function v(e,n){return x.apply(this,arguments)}function x(){return(x=a(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r="\nhttps://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=6bfc661313cc74df3ae441abc4c4707b&language=en-US"),e.next=6,fetch(r).then((function(e){return e.json()}));case 6:if(a=e.sent,console.log(a),0!==a.total_pages){e.next=11;break}return t(null),e.abrupt("return");case 11:t(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}},711:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,a,c,i,s,o,u,l=t(885),p=t(182),f=t(791),h=t(689),d=t(731),v=t(168),x=t(934),b=x.Z.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin: 20px;\n  font-size: 25px;\n"]))),m=x.Z.div(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]))),g=x.Z.img(c||(c=(0,v.Z)(["\n  display: flex;\n"]))),k=x.Z.h2(i||(i=(0,v.Z)(["\n  display: flex;\n"]))),w=x.Z.h3(s||(s=(0,v.Z)(["\n  display: flex;\n"]))),j=x.Z.p(o||(o=(0,v.Z)(["\n  display: flex;\n  width: 600px;\n"]))),y=x.Z.div(u||(u=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin: 20px;\n  font-size: 25px;\n"]))),_=t(184);var Z=function(){var e=(0,f.useState)(null),n=(0,l.Z)(e,2),t=n[0],r=n[1],a=(0,f.useState)(""),c=(0,l.Z)(a,2),i=c[0],s=c[1],o=(0,h.UO)().id,u=(0,h.TH)();if((0,f.useEffect)((function(){var e,n;(0,p.YJ)(o,r),s(null!==(e=null===(n=u.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies")}),[o]),null!==t){var v=t.poster_path,x=t.original_title,Z=t.overview,S=t.genres,L=t.release_date;return(0,_.jsxs)("div",{children:[(0,_.jsx)(d.OL,{to:i,children:(0,_.jsx)(k,{children:"Go Back"})}),(0,_.jsxs)(m,{children:[(0,_.jsx)(g,{width:400,src:"https://image.tmdb.org/t/p/original".concat(v),alt:"qweqweqwe"}),(0,_.jsxs)(y,{children:[(0,_.jsx)(k,{children:x}),(0,_.jsxs)(w,{children:["Overview","(".concat(L.slice(0,4),")")]}),null!==Z?(0,_.jsx)(j,{children:Z}):(0,_.jsx)(j,{children:"Sprry overview is null"}),(0,_.jsx)(w,{children:"Genres"}),(0,_.jsx)(j,{children:S.map((function(e){return"\n       ".concat(e.name," |")}))})]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{children:"Aditional Information"}),(0,_.jsxs)(b,{children:[(0,_.jsx)(d.OL,{to:"cast",children:"Cast"}),(0,_.jsx)(d.OL,{to:"reviews",children:"Reviews"})]})]}),(0,_.jsx)("div",{children:(0,_.jsx)(f.Suspense,{fallback:(0,_.jsx)("div",{children:"Is loading..."}),children:(0,_.jsx)(h.j3,{})})})]})}}}}]);
//# sourceMappingURL=711.474e64b6.chunk.js.map