(this["webpackJsonphello-arabic"]=this["webpackJsonphello-arabic"]||[]).push([[0],{37:function(n,e,t){n.exports=t(65)},65:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),c=t(33),o=t.n(c),i=t(4),u=t(2),l=t(5),s=t.n(l),f=t(6),d=t(10);t(43),t(45);d.initializeApp({apiKey:"AIzaSyDwW6gM3K6Xa-3AyVCxhi7M6BkF0bXWDko",authDomain:"hello-arabic-293707.firebaseapp.com",databaseURL:"https://hello-arabic-293707.firebaseio.com",projectId:"hello-arabic-293707",storageBucket:"hello-arabic-293707.appspot.com",messagingSenderId:"707729584460",appId:"1:707729584460:web:adb677f3bb1f27fc8fdfe9"});var m=d,b=d.auth(),p=d.firestore(),v=t(3),g=t(18);function h(){var n=Object(u.a)(["\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return h=function(){return n},n}function j(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  border: 1px solid #ffed97;\n  border-radius: 20px;\n  margin-bottom: 1rem;\n  color: #333;\n  background-color: #ffed97;\n  &.google {\n    color: #ffed97;\n    background: none;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  right: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50%);\n  font-size: 1rem;\n  color: #eee;\n"]);return O=function(){return n},n}function x(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid #848484;\n  border-radius: 8px;\n  padding: 0 1rem;\n  color: #eee;\n  &:focus {\n    border: 1px solid #ffed97;\n  }\n"]);return x=function(){return n},n}function E(){var n=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: 40px;\n  border: none;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n"]);return E=function(){return n},n}function y(){var n=Object(u.a)(["\n  width: 100%;\n  transform: translateY(-15%);\n"]);return y=function(){return n},n}function w(){var n=Object(u.a)(["\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  color: #ffed97;\n"]);return w=function(){return n},n}function k(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 2rem;\n  color: #eee;\n  background-color: #202020;\n"]);return k=function(){return n},n}var S=v.c.div(k()),z=v.c.button(w()),C=v.c.form(y()),N=v.c.div(E()),L=v.c.input(x()),P=v.c.button(O()),A=v.c.button(j()),D=v.c.div(h());var F=function(){var n=Object(r.useState)(""),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=Object(r.useState)(!1),v=Object(i.a)(p,2),h=v[0],j=v[1],O=Object(r.useState)(""),x=Object(i.a)(O,2),E=x[0],y=x[1],w=Object(r.useState)(!0),k=Object(i.a)(w,2),F=k[0],I=k[1],R=function(n){y("");var e=n.target,t=e.name,r=e.value;"email"===t?c(r):"password"===t&&d(r)},B=function(){var n=Object(f.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),n.prev=1,!h){n.next=7;break}return n.next=5,b.createUserWithEmailAndPassword(t,l);case 5:n.next=9;break;case 7:return n.next=9,b.signInWithEmailAndPassword(t,l);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),y(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}(),G=function(){var n=Object(f.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new m.auth.GoogleAuthProvider,n.next=3,b.signInWithPopup(e);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(S,null,a.a.createElement(z,{onClick:function(){j((function(n){return!n})),c(""),d(""),I(!0),y("")}},h?"\ub85c\uadf8\uc778":"\uacc4\uc815 \ub4f1\ub85d"),a.a.createElement(C,{onSubmit:B},a.a.createElement(N,null,a.a.createElement(L,{name:"email",type:"text",placeholder:"\uc774\uba54\uc77c",value:t,onChange:R,required:!0})),a.a.createElement(N,null,a.a.createElement(L,{name:"password",type:F?"password":"text",placeholder:"\ube44\ubc00\ubc88\ud638",value:l,onChange:R,required:!0}),Boolean(l.length)&&a.a.createElement(P,{type:"button",onClick:function(){return I((function(n){return!n}))}},F?a.a.createElement(g.b,null):a.a.createElement(g.a,null))),Boolean(E.length)&&a.a.createElement(D,null,E),a.a.createElement(A,{type:"submit"},h?"\uacc4\uc815 \ub4f1\ub85d":"\ub85c\uadf8\uc778"),!h&&a.a.createElement(A,{onClick:G,className:"google"},"Google \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778")))},I=t(9),R=t(7),B=Object(r.createContext)([]);function G(){var n=Object(u.a)(["\n  font-size: 0.7rem;\n"]);return G=function(){return n},n}function V(){var n=Object(u.a)(["\n  width: 100%;\n  font-size: 0.6rem;\n  line-height: 1.2rem;\n  color: #a8a8a8;\n"]);return V=function(){return n},n}function T(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  color: #ffed97;\n"]);return T=function(){return n},n}function W(){var n=Object(u.a)(["\n  display: inline-block;\n  font-size: 0.8rem;\n"]);return W=function(){return n},n}function Y(){var n=Object(u.a)(["\n  //font-family: 'Tajawal', sans-serif;\n  display: inline-block;\n  margin-right: 0.5rem;\n  font-size: 1.1rem;\n"]);return Y=function(){return n},n}function q(){var n=Object(u.a)(["\n  width: 100%;\n"]);return q=function(){return n},n}function M(){var n=Object(u.a)(["\n  position: relative;\n  color: #eee;\n"]);return M=function(){return n},n}function U(){var n=Object(u.a)(["\n  border: 1px solid #404040;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  margin-bottom: 0.8rem;\n  background-color: #303030;\n"]);return U=function(){return n},n}var H=v.c.li(U()),J=v.c.div(M()),K=v.c.dl(q()),X=v.c.dt(Y()),Q=v.c.dd(W()),Z=v.c.button(T()),$=v.c.div(V()),_=v.c.span(G());var nn=function(n){var e=n.result,t=n.collectionPath,c=Object(r.useState)(!1),o=Object(i.a)(c,2),u=o[0],l=o[1],d=Object(r.useState)(!1),m=Object(i.a)(d,2),b=m[0],v=m[1],g=Object(r.useState)(""),h=Object(i.a)(g,2),j=h[0],O=h[1],x=Object(r.useContext)(B)[0],E=function(n){var e=document.createElement("textarea");return e.innerHTML=n,e.value},y=function(){var n=Object(f.a)(s.a.mark((function n(){var r,a,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new Date,n.next=3,p.collection(t).add({creator:x.uid,vocForm:e.solution.vocForm,niceGloss:e.solution.niceGloss,posNice:e.solution.posNice,root:e.solution.root,date:r});case 3:a=n.sent,(c=a.id)&&O(c);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(){var n=Object(f.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.doc("".concat(t,"/").concat(j)).delete();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(H,null,a.a.createElement(J,null,a.a.createElement(K,{open:u,onClick:function(){return l((function(n){return!n}))}},a.a.createElement(X,null,E(e.solution.vocForm)),a.a.createElement(Q,null,e.solution.niceGloss)),a.a.createElement(Z,{onClick:function(){b?w():y(),v((function(n){return!n}))}},b?a.a.createElement(R.a,null):a.a.createElement(R.b,null))),a.a.createElement("div",null,a.a.createElement($,null,a.a.createElement("span",null,e.solution.posNice),a.a.createElement("span",null,", Root ",a.a.createElement(_,null,E(e.solution.root))))))};var en=function(n){var e=n.results,t=n.collectionPath;return a.a.createElement("div",null,e.map((function(n,e){return a.a.createElement("ul",{key:e},a.a.createElement(nn,{result:n,collectionPath:t}))})))},tn=t(19),rn=t.n(tn),an=function(){var n=Object(f.a)(s.a.mark((function n(e,t){var r,a,c,o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t?"AR-EN":"EN-AR","https://cors-anywhere.herokuapp.com/","http://www.aratools.net","/dict-service?query=",a=rn.a.create({baseURL:"https://cors-anywhere.herokuapp.com/http://www.aratools.net"}),n.next=7,a.get("".concat("/dict-service?query=",'{"word": "').concat(e,'", "dictionary": "').concat(r,'-WORD-DICTIONARY"}&format=json'));case 7:return c=n.sent,o=c.data.result,n.abrupt("return",o);case 10:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),cn=function(){var n=Object(f.a)(s.a.mark((function n(e,t,r){var a,c,o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"241c526f87mshf4e9baee728bb10p1d98f4jsndd2aa29b9744",a=rn.a.create({baseURL:"https://google-translate20.p.rapidapi.com",headers:{"x-rapidapi-host":"google-translate20.p.rapidapi.com","x-rapidapi-key":"241c526f87mshf4e9baee728bb10p1d98f4jsndd2aa29b9744"}}),n.next=4,a.get("/translate?text=".concat(e,"&sl=").concat(t,"&tl=").concat(r));case 4:return c=n.sent,o=c.data.data.translation,n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),on=t(20);function un(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n"]);return un=function(){return n},n}function ln(){var n=Object(u.a)(["\n   width: 100%;\n   flex-grow: 1;\n   overflow-y: scroll;\n   -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return ln=function(){return n},n}function sn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 40px;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n  border: 1px solid #ffed97;\n  border-radius: 20px;\n  color: #ffed97;\n"]);return sn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  margin-left: 0.3rem;\n  font-size: 0.8rem;\n  font-weight: 400;\n"]);return fn=function(){return n},n}function dn(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 0.7rem;\n  display: flex;\n  align-items: center;\n  font-size: 1.1rem;\n  color: #848484;\n  transform: translateY(-50%);\n"]);return dn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  right: 0.7rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #848484;\n  font-size: 1.2rem;\n  transform: translateY(-50%);\n"]);return mn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  flex-basis: 90%;\n  height: 100%;\n  font-size: 1.1rem;\n  color: #d2d2d2;\n  caret-color: #848484;\n"]);return bn=function(){return n},n}function pn(){var n=Object(u.a)(["\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 45px;\n    border: 1px solid #848484;\n    border-radius: 22px;\n    padding: 0.3rem 0.7rem;\n    margin-bottom: 1rem;\n"]);return pn=function(){return n},n}function vn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n"]);return vn=function(){return n},n}function gn(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100px;\n    height: 40px;\n    border: 1px solid #ffed97;\n    & button {\n      color: #ffed97;\n    }\n    background-color: rgba(0, 0, 0, 0);\n    &.active {\n      & button {\n         color: #333;\n      }\n      background-color: #ffed97;\n    }\n    ","\n"]);return gn=function(){return n},n}function hn(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem 0 2rem;\n"]);return hn=function(){return n},n}function jn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return jn=function(){return n},n}function On(){var n=Object(u.a)(["\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px;\n    "]);return On=function(){return n},n}function xn(){var n=Object(u.a)(["\n      border-top-right-radius: 20px;\n      border-bottom-right-radius: 20px;"]);return xn=function(){return n},n}function En(){var n=Object(u.a)(["\n    ","\n"]);return En=function(){return n},n}var yn=Object(v.b)(En(),(function(n){return"right"===n.position?Object(v.b)(xn()):Object(v.b)(On())})),wn=v.c.div(jn()),kn=v.c.ul(hn()),Sn=v.c.li(gn(),yn),zn=v.c.form(vn()),Cn=v.c.div(pn()),Nn=v.c.input(bn()),Ln=v.c.button(mn()),Pn=v.c.div(dn()),An=v.c.span(fn()),Dn=(v.c.button(sn()),v.c.div(ln())),Fn=v.c.div(un());var In=function(n){var e=n.collectionPath,t=Object(r.useState)([{text:"\uc544\ub78d\uc5b4",position:"left",active:!0},{text:"\uc601\uc5b4",position:"right",active:!1}]),c=Object(i.a)(t,2),o=c[0],u=c[1],l=Object(r.useState)(""),d=Object(i.a)(l,2),m=d[0],b=d[1],p=Object(r.useState)(!0),v=Object(i.a)(p,2),g=v[0],h=v[1],j=Object(r.useState)(null),O=Object(i.a)(j,2),x=O[0],E=O[1],y=Object(r.useState)(""),w=Object(i.a)(y,2),k=w[0],S=w[1],z=function(){var n=Object(f.a)(s.a.mark((function n(e){var t,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),E(null),t=m.length,S(t?"\uacb0\uacfc\ub97c \uac00\uc838\uc624\ub294 \uc911...":"\ub2e8\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),t){n.next=6;break}return n.abrupt("return",!1);case 6:return"\u0632\u064e\u0647\u0652\u0631\u064e\u0629","\u062a\u0645\u0634\u0649",n.next=10,an(m,g);case 10:(r=n.sent).length?E(r):S("\uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement(wn,null,a.a.createElement(kn,null,o.map((function(n,e){return a.a.createElement(Sn,{key:e,onClick:function(){return function(n){h(0===n),u(o.map((function(e,t){return n===t?Object(I.a)({},e,{active:!0}):Object(I.a)({},e,{active:!1})})))}(e)},className:n.active?"active":"",position:n.position},a.a.createElement("button",{type:"button"},n.text))}))),a.a.createElement(zn,{action:"",onSubmit:z},a.a.createElement(Cn,null,a.a.createElement(Nn,{type:"text",lang:"ar",maxLength:30,value:m,onChange:function(n){var e=n.target.value;b(e)}}),Boolean(m.length)?a.a.createElement(Ln,{type:"button",onClick:function(){return b("")}},a.a.createElement(on.a,null)):a.a.createElement(Pn,null,a.a.createElement(on.b,null),a.a.createElement(An,null,"\uac80\uc0c9")))),a.a.createElement(Dn,null,a.a.createElement("div",null,x?a.a.createElement(en,{results:x,collectionPath:e}):a.a.createElement(Fn,null,k))))};function Rn(){var n=Object(u.a)(["\n  width: 100%;\n  margin-top: 0.5rem;\n  font-size: 0.6rem;\n  text-align: right;\n  color: #a8a8a8;\n"]);return Rn=function(){return n},n}function Bn(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  color: #ffed97;\n"]);return Bn=function(){return n},n}function Gn(){var n=Object(u.a)(["\n  font-size: 0.9rem;\n  margin-left: 0.4rem;\n"]);return Gn=function(){return n},n}function Vn(){var n=Object(u.a)(["\n  display: inline-block;\n  font-size: 0.8rem;\n  &.open {\n    display: block;\n    line-height: 1.2rem;\n    color: #bbb;\n  }\n  &.ar {\n    margin-top: 0.3rem;\n  }\n"]);return Vn=function(){return n},n}function Tn(){var n=Object(u.a)(["\n     font-size: 1.1rem;\n  "]);return Tn=function(){return n},n}function Wn(){var n=Object(u.a)(["\n  //font-family: 'Tajawal', sans-serif;\n  display: inline-block;\n  margin-right: 0.5rem;\n  font-size: 0.9rem;\n  ","\n"]);return Wn=function(){return n},n}function Yn(){var n=Object(u.a)(["\n  width: 100%;\n  padding-right: 1.2rem;\n"]);return Yn=function(){return n},n}function qn(){var n=Object(u.a)(["\n  position: relative;\n  color: #eee;\n"]);return qn=function(){return n},n}function Mn(){var n=Object(u.a)(["\n  border: 1px solid #404040;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  margin-bottom: 0.8rem;\n  background-color: #303030;\n"]);return Mn=function(){return n},n}var Un=v.c.li(Mn()),Hn=v.c.div(qn()),Jn=v.c.dl(Yn()),Kn=v.c.dt(Wn(),(function(n){return n.menu&&Object(v.b)(Tn())})),Xn=v.c.dd(Vn()),Qn=v.c.span(Gn()),Zn=v.c.button(Bn()),$n=v.c.div(Rn());var _n=function(n){var e=n.menu,t=n.item,c=t.date.toDate(),o=c.toLocaleDateString().replaceAll(".","").replaceAll(" ","."),u=c.toLocaleTimeString().split(":"),l=Object(i.a)(u,2),d=l[0],m=l[1],b="".concat(o," ").concat(d,":").concat(m);console.log(b);var v=Object(r.useState)(!1),g=Object(i.a)(v,2),h=g[0],j=g[1],O=function(n){var e=document.createElement("textarea");return e.innerHTML=n,e.value},x=function(){var n=Object(f.a)(s.a.mark((function n(){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"words":"translations",n.next=3,p.doc("".concat(r,"/").concat(t.id)).delete();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(Un,null,a.a.createElement(Hn,null,a.a.createElement(Jn,{open:h,onClick:function(){return j((function(n){return!n}))}},e?a.a.createElement(a.a.Fragment,null,a.a.createElement(Kn,{menu:e},O(t.vocForm)),a.a.createElement(Xn,null,t.niceGloss),h&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Xn,{className:"open"},t.posNice),a.a.createElement(Xn,{className:"open"},"Root",a.a.createElement(Qn,null,O(t.root))))):a.a.createElement(a.a.Fragment,null,"ar"===t.sourceLang?a.a.createElement(Kn,{menu:e},O(t.sourceValue)):a.a.createElement(Kn,{menu:e},t.sourceValue),h&&a.a.createElement(a.a.Fragment,null,"ar"===t.targetLang?a.a.createElement(Xn,{className:"open ar"},O(t.targetValue)):a.a.createElement(Xn,{className:"open"},t.targetValue)))),a.a.createElement(Zn,{onClick:x},a.a.createElement(R.c,null))),a.a.createElement($n,null,b))};function ne(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 200px;\n  font-size: 0.8rem;\n  color: #eee;\n  transform: translate(-50%, -50%);\n"]);return ne=function(){return n},n}function ee(){var n=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return ee=function(){return n},n}function te(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100px;\n    height: 40px;\n    border: 1px solid #ffed97;\n    & button {\n      color: #ffed97;\n    }\n    background-color: rgba(0, 0, 0, 0);\n    &.active {\n      & button {\n         color: #333;\n      }\n      background-color: #ffed97;\n    }\n    ","\n"]);return te=function(){return n},n}function re(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem 0 2rem;\n"]);return re=function(){return n},n}function ae(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    height: 100%; \n    background-color: #202020;\n"]);return ae=function(){return n},n}function ce(){var n=Object(u.a)(["\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px;\n    "]);return ce=function(){return n},n}function oe(){var n=Object(u.a)(["\n      border-top-right-radius: 20px;\n      border-bottom-right-radius: 20px;"]);return oe=function(){return n},n}function ie(){var n=Object(u.a)(["\n    ","\n"]);return ie=function(){return n},n}var ue=Object(v.b)(ie(),(function(n){return"right"===n.position?Object(v.b)(oe()):Object(v.b)(ce())})),le=v.c.div(ae()),se=v.c.ul(re()),fe=v.c.li(te(),ue),de=v.c.div(ee()),me=v.c.span(ne());var be=function(){var n=Object(r.useState)([{text:"\ub2e8\uc5b4",position:"left",active:!0},{text:"\ubc88\uc5ed",position:"right",active:!1}]),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(!0),u=Object(i.a)(o,2),l=u[0],s=u[1],f=Object(r.useContext)(B)[0],d=Object(r.useState)([]),m=Object(i.a)(d,2),b=m[0],v=m[1],g=Object(r.useState)([]),h=Object(i.a)(g,2),j=h[0],O=h[1],x=Object(r.useState)(!1),E=Object(i.a)(x,2),y=E[0],w=E[1];Object(r.useEffect)((function(){k("words")}),[]);var k=function(n){p.collection(n).orderBy("date","desc").onSnapshot((function(e){var t=e.docs.map((function(n){return Object(I.a)({id:n.id},n.data())}));t.length?w(!1):w(!0),"words"===n?v(t):O(t)}))};return a.a.createElement(le,{empty:y},a.a.createElement(se,null,t.map((function(n,e){return a.a.createElement(fe,{key:e,onClick:function(){return function(n){var e=0===n;k(e?"words":"translations"),s(!!e),c(t.map((function(e,t){return n===t?Object(I.a)({},e,{active:!0}):Object(I.a)({},e,{active:!1})})))}(e)},className:n.active?"active":"",position:n.position},a.a.createElement("button",{type:"button"},n.text))}))),a.a.createElement(de,null,y?a.a.createElement(me,null,"\uc544\uc9c1 \ubd81\ub9c8\ud06c\ub97c \uc774\uc6a9\ud558\uc9c0 \uc54a\uc73c\uc168\uc5b4\uc694."):a.a.createElement(a.a.Fragment,null,l?a.a.createElement("ul",null,b.filter((function(n){return n.creator===f.uid})).map((function(n){return a.a.createElement(_n,{key:n.id,menu:l,item:n})}))):a.a.createElement("ul",null,j.filter((function(n){return n.creator===f.uid})).map((function(n){return a.a.createElement(_n,{key:n.id,menu:l,item:n})}))))))},pe=t(0);function ve(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #848484;\n"]);return ve=function(){return n},n}var ge=v.c.div(ve());var he=function(n){var e=n.id,t=n.size;return a.a.createElement(ge,null,a.a.createElement(pe.b.Provider,{value:{size:t}},1===e&&a.a.createElement(R.f,null),2===e&&a.a.createElement(R.d,null),3===e&&a.a.createElement(R.a,null),4===e&&a.a.createElement(R.e,null)))};function je(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &.active div {\n    color: #ffed97;\n  }\n"]);return je=function(){return n},n}function Oe(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n"]);return Oe=function(){return n},n}function xe(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0.5em;\n  margin: 0 auto;\n  border: 1px solid #404040;\n  border-radius: 32px;\n  background-color: #303030;\n"]);return xe=function(){return n},n}var Ee=v.c.nav(xe()),ye=v.c.ul(Oe()),we=v.c.li(je()),ke=function(){var n=Object(r.useState)([{id:1,title:"home",active:!0,size:"1.7rem"},{id:2,title:"translate",active:!1,size:"1.7rem"},{id:3,title:"list",active:!1,size:"1.7rem"},{id:4,title:"user",active:!1,size:"2rem"}]),e=Object(i.a)(n,2),t=e[0],c=e[1];return a.a.createElement("div",null,a.a.createElement(Ee,null,a.a.createElement(ye,null,t.map((function(n){return a.a.createElement(we,{key:n.id,onClick:function(){return e=n.id,r=n.title,document.querySelectorAll(".app").forEach((function(n){n.classList.contains(r)?n.classList.add("show"):n.classList.remove("show")})),void c(t.map((function(n,t){return e===n.id?Object(I.a)({},n,{active:!0}):Object(I.a)({},n,{active:!1})})));var e,r},className:n.active?"active":""},a.a.createElement(he,{id:n.id,size:n.size}))})))))};function Se(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return Se=function(){return n},n}function ze(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  border: 1px solid #ffed97;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  color: #ffed97;\n"]);return ze=function(){return n},n}function Ce(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 0.8rem;\n  color: #eee;\n"]);return Ce=function(){return n},n}function Ne(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  border-radius: 20px;\n  margin-bottom: 1rem;\n  color: #333;\n  background: #ffed97;\n"]);return Ne=function(){return n},n}function Le(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  padding: 0;\n  font-size: 1.1rem;\n  background: none;\n  resize: none;\n"]);return Le=function(){return n},n}function Pe(){var n=Object(u.a)(["\n  width: 100%;\n  border: 1px solid #404040;\n  border-radius: 8px;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n  color: #333;\n  background-color: #ffed97;\n  &.result-textarea {\n    background-color: #303030;\n  }\n  &.result-textarea textarea {\n    color: #eee;\n  }\n"]);return Pe=function(){return n},n}function Ae(){var n=Object(u.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 1rem;\n  font-size: 1.5rem;\n  color: #ffed97;\n"]);return Ae=function(){return n},n}function De(){var n=Object(u.a)(["\n  width: 60px;\n  border: none;\n  color: #ffed97;\n  background: none;\n"]);return De=function(){return n},n}function Fe(){var n=Object(u.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 40px;\n  border: 1px solid #ffed97;\n  border-radius: 20px;\n  background: none;\n"]);return Fe=function(){return n},n}function Ie(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 1rem 0 2rem;\n"]);return Ie=function(){return n},n}function Re(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Re=function(){return n},n}var Be=v.c.form(Re()),Ge=v.c.div(Ie()),Ve=v.c.div(Fe()),Te=v.c.select(De()),We=v.c.button(Ae()),Ye=v.c.div(Pe()),qe=v.c.textarea(Le()),Me=(v.c.button(Ne()),v.c.div(Ce())),Ue=v.c.button(ze()),He=v.c.div(Se());var Je=function(n){var e=n.collectionPath,t=Object(r.useContext)(B)[0],c=Object(r.useState)(""),o=Object(i.a)(c,2),u=o[0],l=o[1],d=Object(r.useState)(""),m=Object(i.a)(d,2),b=m[0],v=m[1],g=Object(r.useState)(!1),h=Object(i.a)(g,2),j=h[0],O=h[1],x=Object(r.useState)(""),E=Object(i.a)(x,2),y=E[0],w=E[1],k=Object(r.useState)("ar"),S=Object(i.a)(k,2),z=S[0],C=S[1],N=Object(r.useState)("en"),L=Object(i.a)(N,2),P=L[0],A=L[1],D=Object(r.useState)(""),F=Object(i.a)(D,2),I=F[0],G=F[1],V=function(n){var e=n.target,t=e.name,r=e.value;"source-langs"===t?C(r):"target-langs"===t&&A(r)},T=function(){var n=Object(f.a)(s.a.mark((function n(e){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),O(!1),v(""),n.next=5,cn(u,z,P);case 5:t=n.sent,v(t);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),W=function(){var n=Object(f.a)(s.a.mark((function n(){var r,a,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new Date,n.next=3,p.collection(e).add({creator:t.uid,sourceLang:z,targetLang:P,sourceValue:u,targetValue:b,date:r});case 3:a=n.sent,c=a.id,w(c);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Y=function(){var n=Object(f.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.doc("".concat(e,"/").concat(y)).delete();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(Be,{action:"",onSubmit:T},a.a.createElement(Ge,null,a.a.createElement(Ve,null,a.a.createElement(Te,{name:"source-langs",value:z,onChange:V},a.a.createElement("option",{value:"ar"},"\uc544\ub78d\uc5b4"),a.a.createElement("option",{value:"en"},"\uc601\uc5b4"),a.a.createElement("option",{value:"ko"},"\ud55c\uad6d\uc5b4"))),a.a.createElement(We,{onClick:function(){var n=z;C(P),A(n)}},a.a.createElement(R.g,null)),a.a.createElement(Ve,null,a.a.createElement(Te,{name:"target-langs",value:P,onChange:V},a.a.createElement("option",{value:"ar"},"\uc544\ub78d\uc5b4"),a.a.createElement("option",{value:"en"},"\uc601\uc5b4"),a.a.createElement("option",{value:"ko"},"\ud55c\uad6d\uc5b4")))),a.a.createElement(Ye,null,a.a.createElement(qe,{id:"source-context",rows:"8",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:u,onChange:function(n){var e=n.target.value;l(e),G("")}})),a.a.createElement(Ye,{className:"result-textarea"},a.a.createElement(qe,{id:"target-context",rows:"8",placeholder:"\ubc88\uc5ed \uacb0\uacfc\uc785\ub2c8\ub2e4.",value:b,readOnly:!0}))),a.a.createElement(Me,null,a.a.createElement(He,null,I),a.a.createElement(Ue,{type:"button",onClick:function(){return u.length?b.length?(j?Y():W(),void O((function(n){return!n}))):(G("\ubc88\uc5ed \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),!1):(G("\ubc88\uc5ed\ud560 \ubb38\uc7a5\uc744 \uc785\ub825\ud558\uc138\uc694."),!1)}},j?a.a.createElement(R.a,null):a.a.createElement(R.b,null))))};function Ke(){var n=Object(u.a)(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  font-size: 0.8rem;\n  color: #ffed97;\n"]);return Ke=function(){return n},n}function Xe(){var n=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return Xe=function(){return n},n}var Qe=v.c.div(Xe()),Ze=v.c.button(Ke());var $e=function(){var n=Object(r.useContext)(B)[1];return a.a.createElement(Qe,null,a.a.createElement(Ze,{onClick:function(){b.signOut(),n(null)}},"\ub85c\uadf8\uc544\uc6c3"))};function _e(){var n=Object(u.a)(["\n  width: 100%;\n  height: 12%;\n  padding: 0 1rem;\n  background-color: #202020;\n  @media screen and (min-width: 375px) {\n    padding: 1rem;\n  }\n"]);return _e=function(){return n},n}function nt(){var n=Object(u.a)(["\n  display: none;\n  width: 100%;\n  height: 100%;\n  &.show {\n    display: block;\n  }\n"]);return nt=function(){return n},n}function et(){var n=Object(u.a)(["\n  width: 100%;\n  height: 88%;\n  padding: 1rem;\n  background-color: #202020;\n"]);return et=function(){return n},n}var tt=v.c.div(et()),rt=v.c.div(nt()),at=v.c.div(_e());var ct=function(n){var e=n.login;return a.a.createElement(a.a.Fragment,null,e?a.a.createElement(a.a.Fragment,null,a.a.createElement(tt,null,a.a.createElement(rt,{className:"app home show"},a.a.createElement(In,{collectionPath:"words"})),a.a.createElement(rt,{className:"app translate"},a.a.createElement(Je,{collectionPath:"translate"})),a.a.createElement(rt,{className:"app list"},a.a.createElement(be,null)),a.a.createElement(rt,{className:"app user"},a.a.createElement($e,null))),a.a.createElement(at,null,a.a.createElement(ke,null))):a.a.createElement(F,null))};function ot(){var n=Object(u.a)(["\n\nbody {\n    font-family: 'Nanum Gothic', sans-serif; \n    color: #fff;\n    background-color: #202020;\n    padding: 0;\n    margin: 0;\n  }\n  \n  body * {\n    box-sizing: border-box;\n    &::selection {\n      background-color: rgba(79,192,141,0.5);\n    }\n  }\n  \n  ul, ol, li {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  \n  dl, dt, dd {\n    margin: 0;\n    padding: 0;\n  }\n  \n  a {\n    text-decoration: none;\n    color: #fff;\n  }\n  \n  button, input, textarea, select, option {\n    padding: 0;\n    border: none;\n    cursor: pointer;\n    outline: none;\n    background: none;\n  }\n"]);return ot=function(){return n},n}var it=Object(v.a)(ot());function ut(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return ut=function(){return n},n}function lt(){var n=Object(u.a)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  max-width: 375px;\n  max-height: 667px;\n  background-color: #fff;\n"]);return lt=function(){return n},n}function st(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: #efefef;\n"]);return st=function(){return n},n}var ft=v.c.div(st()),dt=v.c.div(lt()),mt=v.c.div(ut());var bt=function(){var n=Object(r.useState)(!1),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(null),u=Object(i.a)(o,2),l=u[0],s=u[1];return Object(r.useEffect)((function(){b.onAuthStateChanged((function(n){n&&s(n),c(!0)}))}),[]),a.a.createElement(ft,null,a.a.createElement(dt,null,a.a.createElement(it,null),a.a.createElement(B.Provider,{value:[l,s]},t?a.a.createElement(ct,{login:Boolean(l)}):a.a.createElement(mt,null,"\ub85c\ub529\uc911 ..."))))};o.a.render(a.a.createElement(bt,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.0cd8dd58.chunk.js.map