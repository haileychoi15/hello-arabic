(this["webpackJsonphello-arabic"]=this["webpackJsonphello-arabic"]||[]).push([[0],{37:function(n,e,t){n.exports=t(65)},65:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),c=t(33),o=t.n(c),i=t(4),l=t(2),u=t(5),s=t.n(u),m=t(6),d=t(11);t(43),t(45);d.initializeApp({apiKey:"AIzaSyDwW6gM3K6Xa-3AyVCxhi7M6BkF0bXWDko",authDomain:"hello-arabic-293707.firebaseapp.com",databaseURL:"https://hello-arabic-293707.firebaseio.com",projectId:"hello-arabic-293707",storageBucket:"hello-arabic-293707.appspot.com",messagingSenderId:"707729584460",appId:"1:707729584460:web:adb677f3bb1f27fc8fdfe9"});var f=d,b=d.auth(),p=d.firestore(),v=t(3),h=t(19);function g(){var n=Object(l.a)(["\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return g=function(){return n},n}function j(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  border: 1px solid #ffed97;\n  border-radius: 20px;\n  margin-bottom: 1rem;\n  color: #333;\n  background-color: #ffed97;\n  &.google {\n    color: #ffed97;\n    background: none;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  right: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50%);\n  font-size: 1rem;\n  color: #eee;\n"]);return O=function(){return n},n}function E(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid #848484;\n  border-radius: 8px;\n  padding: 0 1rem;\n  color: #eee;\n  &:focus {\n    border: 1px solid #ffed97;\n  }\n"]);return E=function(){return n},n}function x(){var n=Object(l.a)(["\n  position: relative;\n  width: 100%;\n  height: 40px;\n  border: none;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n"]);return x=function(){return n},n}function w(){var n=Object(l.a)(["\n  width: 100%;\n  transform: translateY(-15%);\n  @media screen and (min-width: 30rem) {\n    width: 375px;\n    transform: translateY(0);\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(l.a)(["\n  display: none;\n  font-family: 'Slabo 27px', serif;\n  margin-bottom: 2rem;\n  font-size: 3rem;\n  color: #eee;\n  text-align: center;\n  @media screen and (min-width: 30rem) {\n    display: block;\n    width: 375px;\n    transform: translateY(0);\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(l.a)(["\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  color: #ffed97;\n"]);return k=function(){return n},n}function z(){var n=Object(l.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 2rem;\n  color: #eee;\n  background-color: #202020;\n"]);return z=function(){return n},n}var C=v.c.div(z()),S=v.c.button(k()),N=v.c.div(y()),A=v.c.form(w()),F=v.c.div(x()),P=v.c.input(E()),L=v.c.button(O()),B=v.c.button(j()),D=v.c.div(g());var I=function(){var n=Object(r.useState)(""),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(""),l=Object(i.a)(o,2),u=l[0],d=l[1],p=Object(r.useState)(!1),v=Object(i.a)(p,2),g=v[0],j=v[1],O=Object(r.useState)(""),E=Object(i.a)(O,2),x=E[0],w=E[1],y=Object(r.useState)(!0),k=Object(i.a)(y,2),z=k[0],I=k[1],R=Object(r.useCallback)((function(n){w("");var e=n.target,t=e.name,r=e.value;"email"===t?c(r):"password"===t&&d(r)}),[]),G=Object(r.useCallback)(function(){var n=Object(m.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),n.prev=1,!g){n.next=7;break}return n.next=5,b.createUserWithEmailAndPassword(t,u);case 5:n.next=9;break;case 7:return n.next=9,b.signInWithEmailAndPassword(t,u);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),w(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}(),[g,t,u]),Y=Object(r.useCallback)((function(){j((function(n){return!n})),c(""),d(""),I(!0),w("")}),[]),V=Object(r.useCallback)(Object(m.a)(s.a.mark((function n(){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new f.auth.GoogleAuthProvider,n.next=3,b.signInWithPopup(e);case 3:case"end":return n.stop()}}),n)}))),[]);return a.a.createElement(C,null,a.a.createElement(S,{onClick:Y},g?"\ub85c\uadf8\uc778":"\uacc4\uc815 \ub4f1\ub85d"),a.a.createElement(N,null,g?"Join":"Login"),a.a.createElement(A,{onSubmit:G},a.a.createElement(F,null,a.a.createElement(P,{name:"email",type:"text",placeholder:"\uc774\uba54\uc77c",value:t,onChange:R,required:!0})),a.a.createElement(F,null,a.a.createElement(P,{name:"password",type:z?"password":"text",placeholder:"\ube44\ubc00\ubc88\ud638",value:u,onChange:R,required:!0}),Boolean(u.length)&&a.a.createElement(L,{type:"button",onClick:function(){return I((function(n){return!n}))}},z?a.a.createElement(h.b,null):a.a.createElement(h.a,null))),Boolean(x.length)&&a.a.createElement(D,null,x),a.a.createElement(B,{type:"submit"},g?"\uacc4\uc815 \ub4f1\ub85d":"\ub85c\uadf8\uc778"),!g&&a.a.createElement(B,{onClick:V,className:"google"},"Google \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778")))},R=t(9),G=t(7),Y=Object(r.createContext)([]),V=function(){for(var n=document.createElement("textarea"),e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.innerHTML=t.join(","),n.value.split(",")};function W(){var n=Object(l.a)(["\n  font-size: 0.7rem;\n  line-height: 1.5rem;\n"]);return W=function(){return n},n}function q(){var n=Object(l.a)(["\n  width: 100%;\n  font-size: 0.6rem;\n  line-height: 1.2rem;\n  color: #a8a8a8;\n  @media screen and (min-width: 30rem) {\n    font-size: 0.8rem;\n    line-height: 1.6rem;\n  }\n"]);return q=function(){return n},n}function M(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  color: #ffed97;\n  @media screen and (min-width: 30rem) {\n    display: none;\n    font-size: 1.6rem;\n    transition: all 150ms ease-in-out;\n    color: #848484;\n    transition: all 150ms ease-in-out;\n    ",":hover & {\n      display: flex;\n    }\n    &:hover {\n      color: #ffed97;\n    }\n  }\n  }\n"]);return M=function(){return n},n}function T(){var n=Object(l.a)(["\n  display: inline-block;\n  font-size: 0.8rem;\n  @media screen and (min-width: 30rem) {\n    font-size: 1.1rem;\n  }\n"]);return T=function(){return n},n}function U(){var n=Object(l.a)(["\n  display: inline-block;\n  margin-right: 0.5rem;\n  font-size: 1.1rem;\n  @media screen and (min-width: 30rem) {\n    font-size: 1.3rem;\n  }\n"]);return U=function(){return n},n}function J(){var n=Object(l.a)(["\n  width: 100%;\n"]);return J=function(){return n},n}function K(){var n=Object(l.a)(["\n  position: relative;\n  color: #eee;\n"]);return K=function(){return n},n}function X(){var n=Object(l.a)(["\n  border: 1px solid #404040;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  margin-bottom: 0.8rem;\n  background-color: #303030;\n  @media screen and (min-width: 30rem) {\n    transition: all 150ms ease-in-out;\n    &:hover {\n      border: 1px solid #eee;\n    }\n    &:hover AddButton {\n      display: flex;\n    }\n  }\n"]);return X=function(){return n},n}var H=v.c.li(X()),Q=v.c.div(K()),Z=v.c.dl(J()),$=v.c.dt(U()),_=v.c.dd(T()),nn=v.c.button(M(),H),en=v.c.div(q()),tn=v.c.span(W());var rn=function(n){var e=n.result,t=n.collectionPath,c=Object(r.useState)(!1),o=Object(i.a)(c,2),l=o[0],u=o[1],d=Object(r.useState)(!1),f=Object(i.a)(d,2),b=f[0],v=f[1],h=Object(r.useState)(""),g=Object(i.a)(h,2),j=g[0],O=g[1],E=Object(r.useContext)(Y)[0],x=V(e.solution.vocForm,e.solution.root),w=Object(i.a)(x,2),y=w[0],k=w[1],z=Object(r.useCallback)(Object(m.a)(s.a.mark((function n(){var r,a,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new Date,n.next=3,p.collection(t).add({creator:E.uid,vocForm:e.solution.vocForm,niceGloss:e.solution.niceGloss,posNice:e.solution.posNice,root:e.solution.root,date:r});case 3:a=n.sent,(c=a.id)&&O(c);case 6:case"end":return n.stop()}}),n)}))),[E.uid,t,e]),C=Object(r.useCallback)(Object(m.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.doc("".concat(t,"/").concat(j)).delete();case 2:case"end":return n.stop()}}),n)}))),[j,t]),S=Object(r.useCallback)((function(){b?C():z(),v((function(n){return!n}))}),[b,C,z]);return a.a.createElement(H,null,a.a.createElement(Q,null,a.a.createElement(Z,{open:l,onClick:function(){return u((function(n){return!n}))}},a.a.createElement($,null,y),a.a.createElement(_,null,e.solution.niceGloss)),a.a.createElement(nn,{onClick:S},b?a.a.createElement(G.a,null):a.a.createElement(G.b,null))),a.a.createElement("div",null,a.a.createElement(en,null,a.a.createElement("span",null,e.solution.posNice),a.a.createElement("span",null,", Root ",a.a.createElement(tn,null,k)))))};var an=function(n){var e=n.results,t=n.collectionPath;return a.a.createElement("div",null,e.map((function(n,e){return a.a.createElement("ul",{key:e},a.a.createElement(rn,{result:n,collectionPath:t}))})))},cn=t(20),on=t.n(cn),ln=function(){var n=Object(m.a)(s.a.mark((function n(e,t){var r,a,c,o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t?"AR-EN":"EN-AR","https://cors-anywhere.herokuapp.com/","http://www.aratools.net","/dict-service?query=",a=on.a.create({baseURL:"https://cors-anywhere.herokuapp.com/http://www.aratools.net"}),n.next=7,a.get("".concat("/dict-service?query=",'{"word": "').concat(e,'", "dictionary": "').concat(r,'-WORD-DICTIONARY"}&format=json'));case 7:return c=n.sent,o=c.data.result,n.abrupt("return",o);case 10:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),un=function(){var n=Object(m.a)(s.a.mark((function n(e,t,r){var a,c,o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"241c526f87mshf4e9baee728bb10p1d98f4jsndd2aa29b9744",a=on.a.create({baseURL:"https://google-translate20.p.rapidapi.com",headers:{"x-rapidapi-host":"google-translate20.p.rapidapi.com","x-rapidapi-key":"241c526f87mshf4e9baee728bb10p1d98f4jsndd2aa29b9744"}}),n.next=4,a.get("/translate?text=".concat(e,"&sl=").concat(t,"&tl=").concat(r));case 4:return c=n.sent,o=c.data.data.translation,n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}();function sn(){var n=Object(l.a)(["\n  display: none;\n  width: 100%;\n  font-family: 'Slabo 27px', serif;\n  font-size: 1.3rem;\n  color: #eee;\n  text-align: left;\n  @media screen and (min-width: 30rem) {\n    display: block;\n  }\n  @media screen and (min-width: 48rem) {\n    display: block;\n    font-size: 1.7rem;\n  }\n"]);return sn=function(){return n},n}var mn=v.c.div(sn());var dn=function(n){var e=n.menu;return a.a.createElement(mn,null,e)},fn=t(10);function bn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n"]);return bn=function(){return n},n}function pn(){var n=Object(l.a)(["\n   width: 100%;\n   flex-grow: 1;\n   overflow-y: scroll;\n   -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  @media screen and (min-width: 30rem) {\n    width: 90%;\n    margin: 0 auto;\n  }\n  @media screen and (min-width: 48rem) {\n    width: 70%;\n  }\n"]);return pn=function(){return n},n}function vn(){var n=Object(l.a)(["\n  margin-left: 0.3rem;\n  font-size: 0.8rem;\n  font-weight: 400;\n"]);return vn=function(){return n},n}function hn(){var n=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 1.1rem;\n  color: #848484;\n  transform: translateY(-50%);\n"]);return hn=function(){return n},n}function gn(){var n=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  right: 0.7rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #848484;\n  font-size: 1.2rem;\n  transform: translateY(-50%);\n"]);return gn=function(){return n},n}function jn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 45px;\n  border: 1px solid #848484;\n  border-radius: 22px;\n  padding: 0.3rem 2rem 0.3rem 1rem;\n  font-size: 1.1rem;\n  color: #d2d2d2;\n  caret-color: #848484;\n  &:active,\n  &:focus {\n    border: 1px solid #ffed97;\n  }\n  @media screen and (min-width: 30rem) {\n    padding: 0.5rem 2rem 0.5rem 1rem;\n    font-size: 1.2rem;\n  }\n"]);return jn=function(){return n},n}function On(){var n=Object(l.a)(["\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 45px;\n    border: none;\n    margin-bottom: 1rem;\n    @media screen and (min-width: 30rem) {\n      width: 375px;\n      margin: 0 auto 2rem;\n  }\n"]);return On=function(){return n},n}function En(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n"]);return En=function(){return n},n}function xn(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100px;\n    height: 40px;\n    border: 1px solid #ffed97;\n    & button {\n      color: #ffed97;\n    }\n    background-color: rgba(0, 0, 0, 0);\n    &.active {\n      & button {\n         color: #333;\n      }\n      background-color: #ffed97;\n    }\n    ","\n"]);return xn=function(){return n},n}function wn(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem 0 2rem;\n"]);return wn=function(){return n},n}function yn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return yn=function(){return n},n}function kn(){var n=Object(l.a)(["\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px;\n    "]);return kn=function(){return n},n}function zn(){var n=Object(l.a)(["\n      border-top-right-radius: 20px;\n      border-bottom-right-radius: 20px;"]);return zn=function(){return n},n}function Cn(){var n=Object(l.a)(["\n    ","\n"]);return Cn=function(){return n},n}var Sn=Object(v.b)(Cn(),(function(n){return"right"===n.position?Object(v.b)(zn()):Object(v.b)(kn())})),Nn=v.c.div(yn()),An=v.c.ul(wn()),Fn=v.c.li(xn(),Sn),Pn=v.c.form(En()),Ln=v.c.div(On()),Bn=v.c.input(jn()),Dn=v.c.button(gn()),In=v.c.div(hn()),Rn=v.c.span(vn()),Gn=v.c.div(pn()),Yn=v.c.div(bn());var Vn=function(n){var e=n.collectionPath,t=Object(r.useState)([{text:"\uc544\ub78d\uc5b4",position:"left",active:!0},{text:"\uc601\uc5b4",position:"right",active:!1}]),c=Object(i.a)(t,2),o=c[0],l=c[1],u=Object(r.useState)(!0),d=Object(i.a)(u,2),f=d[0],b=d[1],p=Object(r.useState)(""),v=Object(i.a)(p,2),h=v[0],g=v[1],j=Object(r.useState)(null),O=Object(i.a)(j,2),E=O[0],x=O[1],w=Object(r.useState)(""),y=Object(i.a)(w,2),k=y[0],z=y[1],C=Object(r.useCallback)(function(){var n=Object(m.a)(s.a.mark((function n(e){var t,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),x(null),t=h.length,z(t?"\uacb0\uacfc\ub97c \uac00\uc838\uc624\ub294 \uc911...":"\ub2e8\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),t){n.next=6;break}return n.abrupt("return",!1);case 6:return n.next=8,ln(h,f);case 8:(r=n.sent).length?x(r):z("\uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[h,f]),S=Object(r.useCallback)((function(n){var e=n.target.value;g(e)}),[]),N=Object(r.useCallback)((function(n){b(0===n),l(o.map((function(e,t){return n===t?Object(R.a)({},e,{active:!0}):Object(R.a)({},e,{active:!1})})))}),[o]);return a.a.createElement(Nn,null,a.a.createElement(dn,{menu:"Word Search"}),a.a.createElement(An,null,o.map((function(n,e){return a.a.createElement(Fn,{key:e,onClick:function(){return N(e)},className:n.active?"active":"",position:n.position},a.a.createElement("button",{type:"button"},n.text))}))),a.a.createElement(Pn,{action:"",onSubmit:C},a.a.createElement(Ln,null,a.a.createElement(Bn,{type:"text",lang:f?"ar":"en",value:h,onChange:S}),Boolean(h.length)?a.a.createElement(Dn,{type:"button",onClick:function(){return g("")}},a.a.createElement(fn.a,null)):a.a.createElement(In,null,a.a.createElement(fn.b,null),a.a.createElement(Rn,null,"\uac80\uc0c9")))),a.a.createElement(Gn,null,a.a.createElement(a.a.Fragment,null,E?a.a.createElement(an,{results:E,collectionPath:e}):a.a.createElement(Yn,null,k))))};function Wn(){var n=Object(l.a)(["\n  width: 100%;\n  margin-top: 0.5rem;\n  font-size: 0.6rem;\n  text-align: right;\n  color: #a8a8a8;\n  @media screen and (min-width: 30rem) {\n    font-size: 0.8rem;\n  }\n"]);return Wn=function(){return n},n}function qn(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  color: #ffed97;\n  @media screen and (min-width: 30rem) {\n    top: 0;\n    right: 0;\n    display: none;\n    font-size: 1.5rem;\n    color: #848484;\n    transition: all 150ms ease-in-out;\n    ",":hover & {\n      display: flex;\n    }\n    &:hover {\n      color: #ffed97;\n    }\n  }\n"]);return qn=function(){return n},n}function Mn(){var n=Object(l.a)(["\n  font-size: 0.9rem;\n  margin-left: 0.4rem;\n"]);return Mn=function(){return n},n}function Tn(){var n=Object(l.a)(["\n  display: inline-block;\n  font-size: 0.8rem;\n  &.open {\n    display: block;\n    line-height: 1.2rem;\n    color: #bbb;\n  }\n  &.ar {\n    margin-top: 0.3rem;\n  }\n  @media screen and (min-width: 30rem) {\n    font-size: 1.1rem;\n  }\n"]);return Tn=function(){return n},n}function Un(){var n=Object(l.a)(["\n     font-size: 1.3rem;\n  "]);return Un=function(){return n},n}function Jn(){var n=Object(l.a)(["\n  display: inline-block;\n  margin-right: 0.5rem;\n  font-size: 0.9rem;\n  @media screen and (min-width: 30rem) {\n    font-size: 1.1rem;\n  }\n  ","\n"]);return Jn=function(){return n},n}function Kn(){var n=Object(l.a)(["\n  width: 100%;\n  padding-right: 1.2rem;\n"]);return Kn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n  position: relative;\n  color: #eee;\n"]);return Xn=function(){return n},n}function Hn(){var n=Object(l.a)(["\n  border: 1px solid #404040;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  margin-bottom: 0.8rem;\n  background-color: #303030;\n"]);return Hn=function(){return n},n}var Qn=v.c.li(Hn()),Zn=v.c.div(Xn()),$n=v.c.dl(Kn()),_n=v.c.dt(Jn(),(function(n){return n.menu&&Object(v.b)(Un())})),ne=v.c.dd(Tn()),ee=v.c.span(Mn()),te=v.c.button(qn(),Qn),re=v.c.div(Wn());var ae=function(n){var e=n.menu,t=n.item,c=Object(r.useState)(!1),o=Object(i.a)(c,2),l=o[0],u=o[1],d=V(t.vocForm,t.root,t.sourceValue,t.targetValue),f=Object(i.a)(d,4),b=f[0],v=f[1],h=f[2],g=f[3],j=function(n){var e=n.toLocaleDateString().replaceAll(".","").replaceAll(" ","."),t=n.toLocaleTimeString().split(":"),r=Object(i.a)(t,2),a=r[0],c=r[1];return"".concat(e," ").concat(a,":").concat(c)}(t.date),O=Object(r.useCallback)(Object(m.a)(s.a.mark((function n(){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"words":"translations",n.next=3,p.doc("".concat(r,"/").concat(t.id)).delete();case 3:case"end":return n.stop()}}),n)}))),[e,t.id]);return a.a.createElement(Qn,null,a.a.createElement(Zn,null,a.a.createElement($n,{open:l,onClick:function(){return u((function(n){return!n}))}},e?a.a.createElement(a.a.Fragment,null,a.a.createElement(_n,{menu:e},b),a.a.createElement(ne,null,t.niceGloss),l&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,{className:"open"},t.posNice),a.a.createElement(ne,{className:"open"},"Root",a.a.createElement(ee,null,v)))):a.a.createElement(a.a.Fragment,null,"ar"===t.sourceLang?a.a.createElement(_n,{menu:e},h):a.a.createElement(_n,{menu:e},t.sourceValue),l&&a.a.createElement(a.a.Fragment,null,"ar"===t.targetLang?a.a.createElement(ne,{className:"open ar"},g):a.a.createElement(ne,{className:"open"},t.targetValue)))),a.a.createElement(te,{onClick:O},a.a.createElement(G.c,null))),a.a.createElement(re,null,j))};function ce(){var n=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 200px;\n  font-size: 0.8rem;\n  color: #eee;\n  transform: translate(-50%, -50%);\n"]);return ce=function(){return n},n}function oe(){var n=Object(l.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  @media screen and (min-width: 30rem) {\n    width: 90%;\n    margin: 0 auto;\n  }\n  @media screen and (min-width: 48rem) {\n    width: 70%;\n  }\n"]);return oe=function(){return n},n}function ie(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100px;\n    height: 40px;\n    border: 1px solid #ffed97;\n    & button {\n      color: #ffed97;\n    }\n    background-color: rgba(0, 0, 0, 0);\n    &.active {\n      & button {\n         color: #333;\n      }\n      background-color: #ffed97;\n    }\n    ","\n"]);return ie=function(){return n},n}function le(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem 0 2rem;\n"]);return le=function(){return n},n}function ue(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    height: 100%; \n    background-color: #202020;\n"]);return ue=function(){return n},n}function se(){var n=Object(l.a)(["\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px;\n    "]);return se=function(){return n},n}function me(){var n=Object(l.a)(["\n      border-top-right-radius: 20px;\n      border-bottom-right-radius: 20px;"]);return me=function(){return n},n}function de(){var n=Object(l.a)(["\n    ","\n"]);return de=function(){return n},n}var fe=Object(v.b)(de(),(function(n){return"right"===n.position?Object(v.b)(me()):Object(v.b)(se())})),be=v.c.div(ue()),pe=v.c.ul(le()),ve=v.c.li(ie(),fe),he=v.c.div(oe()),ge=v.c.span(ce());var je=function(){var n=Object(r.useState)([{text:"\ub2e8\uc5b4",position:"left",active:!0},{text:"\ubc88\uc5ed",position:"right",active:!1}]),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(!0),l=Object(i.a)(o,2),u=l[0],s=l[1],m=Object(r.useContext)(Y)[0],d=Object(r.useState)([]),f=Object(i.a)(d,2),b=f[0],v=f[1],h=Object(r.useState)([]),g=Object(i.a)(h,2),j=g[0],O=g[1],E=Object(r.useState)(!1),x=Object(i.a)(E,2),w=x[0],y=x[1];Object(r.useEffect)((function(){k("words")}));var k=Object(r.useCallback)((function(n){p.collection(n).orderBy("date","desc").onSnapshot((function(e){var t=e.docs.filter((function(n){return n.data().creator===m.uid})).map((function(n){return Object(R.a)({id:n.id},n.data(),{date:n.data().date.toDate()})}));0===t.length?y(!0):y(!1),"words"===n?v(t):O(t)}))}),[m.uid]),z=Object(r.useCallback)((function(n){var e=0===n;k(e?"words":"translations"),s(!!e),c(t.map((function(e,t){return n===t?Object(R.a)({},e,{active:!0}):Object(R.a)({},e,{active:!1})})))}),[t,k]);return a.a.createElement(be,null,a.a.createElement(dn,{menu:"Bookmark"}),a.a.createElement(pe,null,t.map((function(n,e){return a.a.createElement(ve,{key:e,onClick:function(){return z(e)},className:n.active?"active":"",position:n.position},a.a.createElement("button",{type:"button"},n.text))}))),a.a.createElement(he,null,w?a.a.createElement(ge,null,"\uc544\uc9c1 \ubd81\ub9c8\ud06c\ub97c \uc774\uc6a9\ud558\uc9c0 \uc54a\uc73c\uc168\uc5b4\uc694."):a.a.createElement(a.a.Fragment,null,u?a.a.createElement("ul",null,b.map((function(n){return a.a.createElement(ae,{key:n.id,menu:u,item:n})}))):a.a.createElement("ul",null,j.map((function(n){return a.a.createElement(ae,{key:n.id,menu:u,item:n})}))))))},Oe=t(0);function Ee(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #848484;\n"]);return Ee=function(){return n},n}var xe=v.c.div(Ee());var we=function(n){var e=n.id,t=n.size;return a.a.createElement(xe,null,a.a.createElement(Oe.b.Provider,{value:{size:t}},1===e&&a.a.createElement(G.f,null),2===e&&a.a.createElement(G.d,null),3===e&&a.a.createElement(G.a,null),4===e&&a.a.createElement(G.e,null)))};function ye(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &.active div {\n    color: #ffed97;\n  }\n"]);return ye=function(){return n},n}function ke(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n"]);return ke=function(){return n},n}function ze(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0.5em;\n  margin: 0 auto;\n  border: 1px solid #404040;\n  border-radius: 32px;\n  background-color: #303030;\n  @media screen and (min-width: 30rem) {\n    width: 375px;\n  }\n"]);return ze=function(){return n},n}var Ce=v.c.nav(ze()),Se=v.c.ul(ke()),Ne=v.c.li(ye()),Ae=function(){var n=Object(r.useState)([{id:1,title:"home",active:!0,size:"1.7rem"},{id:2,title:"translate",active:!1,size:"1.7rem"},{id:3,title:"list",active:!1,size:"1.7rem"},{id:4,title:"user",active:!1,size:"2rem"}]),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useCallback)((function(n,e){document.querySelectorAll(".app").forEach((function(n){n.classList.contains(e)?n.classList.add("show"):n.classList.remove("show")})),c(t.map((function(e,t){return n===e.id?Object(R.a)({},e,{active:!0}):Object(R.a)({},e,{active:!1})})))}),[t]);return a.a.createElement("div",null,a.a.createElement(Ce,null,a.a.createElement(Se,null,t.map((function(n){return a.a.createElement(Ne,{key:n.id,onClick:function(){return o(n.id,n.title)},className:n.active?"active":""},a.a.createElement(we,{id:n.id,size:n.size}))})))))};function Fe(){var n=Object(l.a)(["\n  margin-bottom: 1rem;\n  text-align: center;\n  font-size: 0.9rem;\n"]);return Fe=function(){return n},n}function Pe(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  color: #ffed97;\n  @media screen and (min-width: 30rem) {\n    font-size: 1.6rem;\n    color: #848484;\n    transition: all 150ms ease-in-out;\n    &:hover {\n      color: #ffed97;\n    }\n"]);return Pe=function(){return n},n}function Le(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  border-radius: 20px;\n  margin-bottom: 1rem;\n  color: #333;\n  background: #ffed97;\n  @media screen and (min-width: 30rem) {\n    width: 100px;\n    margin: 0 0 5rem auto;\n  }\n"]);return Le=function(){return n},n}function Be(){var n=Object(l.a)(["\n  position: absolute;\n  top: 1rem;\n  right: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #848484;\n  font-size: 1.2rem;\n  transform: translateY(-50%);\n"]);return Be=function(){return n},n}function De(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  padding: 0;\n  font-size: 1.1rem;\n  background: none;\n  color: #eee;\n  resize: none;\n  &::placeholder {\n    font-size: 0.9rem;\n  }\n"]);return De=function(){return n},n}function Ie(){var n=Object(l.a)(["\n  position: relative;\n  width: 100%;\n  border: 1px solid #404040;\n  border-radius: 8px;\n  padding: 0.5rem 1.5rem 0.5rem 0.5rem;  \n  margin-bottom: 1rem;\n  color: #eee;\n  background-color: #303030;\n"]);return Ie=function(){return n},n}function Re(){var n=Object(l.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 1rem;\n  font-size: 1.5rem;\n  color: #ffed97;\n"]);return Re=function(){return n},n}function Ge(){var n=Object(l.a)(["\n  width: 60px;\n  border: none;\n  color: #ffed97;\n  background: none;\n"]);return Ge=function(){return n},n}function Ye(){var n=Object(l.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 40px;\n  border: 1px solid #ffed97;\n  border-radius: 20px;\n  background: none;\n"]);return Ye=function(){return n},n}function Ve(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 1rem 0 2rem;\n"]);return Ve=function(){return n},n}function We(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media screen and (min-width: 30rem) {\n    width: 70%;\n    margin: 0 auto;\n  }\n  @media screen and (min-width: 30rem) {\n    width: 40%;\n    min-width: 400px;\n  }\n"]);return We=function(){return n},n}var qe=v.c.form(We()),Me=v.c.div(Ve()),Te=v.c.div(Ye()),Ue=v.c.select(Ge()),Je=v.c.button(Re()),Ke=v.c.div(Ie()),Xe=v.c.textarea(De()),He=v.c.button(Be()),Qe=v.c.button(Le()),Ze=v.c.button(Pe()),$e=v.c.div(Fe());var _e=function(n){var e=n.collectionPath,t=Object(r.useContext)(Y)[0],c=Object(r.useState)(""),o=Object(i.a)(c,2),l=o[0],u=o[1],d=Object(r.useState)(""),f=Object(i.a)(d,2),b=f[0],v=f[1],h=Object(r.useState)(!1),g=Object(i.a)(h,2),j=g[0],O=g[1],E=Object(r.useState)(""),x=Object(i.a)(E,2),w=x[0],y=x[1],k=Object(r.useState)("ar"),z=Object(i.a)(k,2),C=z[0],S=z[1],N=Object(r.useState)("en"),A=Object(i.a)(N,2),F=A[0],P=A[1],L=Object(r.useState)(""),B=Object(i.a)(L,2),D=B[0],I=B[1],R=Object(r.useCallback)((function(n){var e=n.target.value;u(e),I("")}),[]),V=Object(r.useCallback)((function(){var n=C;S(F),P(n)}),[C,F]),W=Object(r.useCallback)((function(n){var e=n.target,t=e.name,r=e.value;"source-langs"===t?S(r):"target-langs"===t&&P(r)}),[]),q=Object(r.useCallback)(function(){var n=Object(m.a)(s.a.mark((function n(e){var t,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),O(!1),t=l.length,v(""),I(t?"\uacb0\uacfc\ub97c \uac00\uc838\uc624\ub294 \uc911...":"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),t){n.next=7;break}return n.abrupt("return",!1);case 7:return n.next=9,un(l,C,F);case 9:(r=n.sent).length?v(r):I("\uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[l,C,F]),M=Object(r.useCallback)(Object(m.a)(s.a.mark((function n(){var r,a,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new Date,n.next=3,p.collection(e).add({creator:t.uid,sourceLang:C,targetLang:F,sourceValue:l,targetValue:b,date:r});case 3:a=n.sent,c=a.id,y(c);case 6:case"end":return n.stop()}}),n)}))),[e,t.uid,C,F,l,b]),T=Object(r.useCallback)(Object(m.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.doc("".concat(e,"/").concat(w)).delete();case 2:case"end":return n.stop()}}),n)}))),[e,w]),U=Object(r.useCallback)((function(){j?T():M(),O((function(n){return!n}))}),[j,T,M]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(dn,{menu:"Translate"}),a.a.createElement(qe,{action:"",onSubmit:q},a.a.createElement(Me,null,a.a.createElement(Te,null,a.a.createElement(Ue,{name:"source-langs",value:C,onChange:W},a.a.createElement("option",{value:"ar"},"\uc544\ub78d\uc5b4"),a.a.createElement("option",{value:"en"},"\uc601\uc5b4"),a.a.createElement("option",{value:"ko"},"\ud55c\uad6d\uc5b4"))),a.a.createElement(Je,{type:"button",onClick:V},a.a.createElement(G.g,null)),a.a.createElement(Te,null,a.a.createElement(Ue,{name:"target-langs",value:F,onChange:W},a.a.createElement("option",{value:"ar"},"\uc544\ub78d\uc5b4"),a.a.createElement("option",{value:"en"},"\uc601\uc5b4"),a.a.createElement("option",{value:"ko"},"\ud55c\uad6d\uc5b4")))),a.a.createElement(Ke,null,a.a.createElement(Xe,{id:"source-context",rows:"6",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:l,onChange:R}),Boolean(l.length)&&a.a.createElement(He,{type:"button",onClick:function(){return u("")}},a.a.createElement(fn.a,null))),a.a.createElement(Qe,{type:"submit"},"\ubc88\uc5ed\ud558\uae30"),Boolean(b.length)?a.a.createElement(a.a.Fragment,null,a.a.createElement(Ke,null,a.a.createElement(Xe,{id:"target-context",rows:"6",placeholder:"\ubc88\uc5ed \uacb0\uacfc\uc785\ub2c8\ub2e4.",value:b,readOnly:!0}),a.a.createElement(Ze,{type:"button",onClick:U},j?a.a.createElement(G.a,null):a.a.createElement(G.b,null)))):a.a.createElement($e,null,D)))};function nt(){var n=Object(l.a)(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  font-size: 0.8rem;\n  color: #ffed97;\n"]);return nt=function(){return n},n}function et(){var n=Object(l.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return et=function(){return n},n}var tt=v.c.div(et()),rt=v.c.button(nt());var at=function(){var n=Object(r.useContext)(Y)[1],e=Object(r.useCallback)((function(){b.signOut(),n(null)}),[n]);return a.a.createElement(tt,null,a.a.createElement(dn,{menu:"My Profile"}),a.a.createElement(rt,{onClick:e},"\ub85c\uadf8\uc544\uc6c3"))};function ct(){var n=Object(l.a)(["\n  width: 100%;\n  height: 12%;\n  padding: 0 1rem;\n  margin: 0 auto;\n  background-color: #202020;\n  @media screen and (min-width: 23.43rem) { //375px\n    padding: 1rem;  \n  }\n"]);return ct=function(){return n},n}function ot(){var n=Object(l.a)(["\n  display: none;\n  width: 100%;\n  height: 100%;\n  &.show {\n    display: block;\n  }\n"]);return ot=function(){return n},n}function it(){var n=Object(l.a)(["\n  width: 100%;\n  height: 88%;\n  padding: 1rem;\n  background-color: #202020;\n"]);return it=function(){return n},n}var lt=v.c.div(it()),ut=v.c.div(ot()),st=v.c.div(ct());var mt=function(n){var e=n.login;return a.a.createElement(a.a.Fragment,null,e?a.a.createElement(a.a.Fragment,null,a.a.createElement(lt,null,a.a.createElement(ut,{className:"app home show"},a.a.createElement(Vn,{collectionPath:"words"})),a.a.createElement(ut,{className:"app translate"},a.a.createElement(_e,{collectionPath:"translations"})),a.a.createElement(ut,{className:"app list"},a.a.createElement(je,null)),a.a.createElement(ut,{className:"app user"},a.a.createElement(at,null))),a.a.createElement(st,null,a.a.createElement(Ae,null))):a.a.createElement(I,null))};function dt(){var n=Object(l.a)(["\n\nbody {\n    font-family: 'Nanum Gothic', sans-serif; \n    color: #fff;\n    background-color: #202020;\n    padding: 0;\n    margin: 0;\n  }\n  \n  body * {\n    box-sizing: border-box;\n    &::selection {\n      background-color: rgba(255, 237, 151, 0.5);\n    }\n  }\n  \n  ul, ol, li {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  \n  dl, dt, dd {\n    margin: 0;\n    padding: 0;\n  }\n  \n  a {\n    text-decoration: none;\n    color: #fff;\n  }\n  \n  button, input, textarea, select, option {\n    font-family: 'Nanum Gothic', sans-serif; \n    padding: 0;\n    border: none;\n    cursor: pointer;\n    outline: none;\n    background: none;\n  }\n"]);return dt=function(){return n},n}var ft=Object(v.a)(dt());function bt(){var n=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return bt=function(){return n},n}function pt(){var n=Object(l.a)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n"]);return pt=function(){return n},n}function vt(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: #efefef;\n  //background-color: #202020;\n"]);return vt=function(){return n},n}var ht=v.c.div(vt()),gt=v.c.div(pt()),jt=v.c.div(bt());var Ot=function(){var n=Object(r.useState)(!1),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(null),l=Object(i.a)(o,2),u=l[0],s=l[1];return Object(r.useEffect)((function(){b.onAuthStateChanged((function(n){n&&s(n),c(!0)}))}),[]),a.a.createElement(ht,null,a.a.createElement(ft,null),a.a.createElement(gt,null,a.a.createElement(Y.Provider,{value:[u,s]},t?a.a.createElement(mt,{login:Boolean(u)}):a.a.createElement(jt,null,"\ub85c\ub529\uc911 ..."))))};o.a.render(a.a.createElement(Ot,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.0169c982.chunk.js.map