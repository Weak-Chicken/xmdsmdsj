(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-23619682":"727cd119","chunk-2d0c4682":"53db4358","chunk-2d0df253":"e3b3f3d7","chunk-3721ead4":"8872c305","chunk-be3705d6":"7df361a1","chunk-e2bb79a6":"9065aec2","chunk-f9f56642":"0b217bda"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3721ead4":1,"chunk-f9f56642":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-23619682":"31d6cfe0","chunk-2d0c4682":"31d6cfe0","chunk-2d0df253":"31d6cfe0","chunk-3721ead4":"c80905ed","chunk-be3705d6":"31d6cfe0","chunk-e2bb79a6":"31d6cfe0","chunk-f9f56642":"475478ef"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"2b14":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheTopHeader"),n("router-view"),n("TheFooter")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theTopHeader"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/article"}},[e._v("Articles")]),n("router-link",{attrs:{to:"/upcoming"}},[e._v("Up Coming")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e.checkLogin?e.checkLogin?n("router-link",{staticClass:"to-right",attrs:{to:{name:"pageuserinfo",params:{userName:this.$store.getters.getUserName}}}},[e._v("Welcome! "+e._s(this.$store.getters.getUserName))]):e._e():n("router-link",{staticClass:"to-right",attrs:{to:"/login"}},[e._v("Sign in / Sign up")])],1)},c=[],i=n("cebc"),s=n("2f62"),l={name:"thetopheader",components:{},computed:Object(i["a"])({},Object(s["c"])({checkLogin:"checkLogin",getUserName:"getUserName"}))},f=l,d=(n("713d"),n("2877")),h=Object(d["a"])(f,u,c,!1,null,"040b4564",null),p=h.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theFooter"})},g=[],b={name:"thefooter",components:{}},v=b,k=Object(d["a"])(v,m,g,!1,null,"15fd90b0",null),_=k.exports,N={name:"app",components:{TheTopHeader:p,TheFooter:_},created:function(){}},y=N,O=(n("034f"),Object(d["a"])(y,o,a,!1,null,null,null)),w=O.exports,E=n("8c4f"),L={loggingIn:function(e,t){var n=e.commit;n("LOGGING_IN",t)},loggingOut:function(e,t){var n=e.commit;n("LOGGING_OUT",t)}},T={LOGGING_IN:function(e,t){e.loggedIn=!0,e.userName=t.userName},LOGGING_OUT:function(e,t){e.loggedIn=!1,e.userName=""}},j={checkLogin:function(e){return e.loggedIn},getUserName:function(e){return e.userName}},I={loggedIn:!1,userName:""};r["a"].use(s["a"]);var S=new s["a"].Store({state:I,mutations:T,actions:L,getters:j}),G=S;r["a"].use(E["a"]);var U=new E["a"]({routes:[{path:"/",name:"pagehome",component:function(){return n.e("chunk-23619682").then(n.bind(null,"6b9f"))}},{path:"/about",name:"pageabout",component:function(){return n.e("chunk-3721ead4").then(n.bind(null,"ba91"))}},{path:"/article",name:"pagepost",component:function(){return n.e("chunk-e2bb79a6").then(n.bind(null,"9263"))}},{path:"/article/:articleId",name:"pagearticle",component:function(){return n.e("chunk-be3705d6").then(n.bind(null,"3ae5"))}},{path:"/upcoming",name:"pageupcoming",component:function(){return n.e("chunk-2d0df253").then(n.bind(null,"8951"))}},{path:"/login",name:"pageauthentication",component:function(){return n.e("chunk-f9f56642").then(n.bind(null,"64b5"))}},{path:"/register",name:"pageauthentication",component:function(){return n.e("chunk-f9f56642").then(n.bind(null,"64b5"))}},{path:"/user/:userName",name:"pageuserinfo",component:function(){return n.e("chunk-2d0c4682").then(n.bind(null,"3b63"))},meta:{requireAuthentication:!0}}]});U.beforeEach(function(e,t,n){e.meta.requireAuthentication?G.getters.checkLogin?n():(alert("Please log in to visit this page!"),n({path:"/login"})):n()});var C=U,P=n("bc3a"),A=n.n(P),x=n("a7fe"),D=n.n(x),R=n("778b");r["a"].config.productionTip=!1,A.a.defaults.baseURL="http://192.168.240.140:3000/",r["a"].use(D.a,A.a),r["a"].use(R["a"]),new r["a"]({router:C,store:G,render:function(e){return e(w)}}).$mount("#app")},"64a9":function(e,t,n){},"713d":function(e,t,n){"use strict";var r=n("2b14"),o=n.n(r);o.a},"778b":function(e,t,n){"use strict";t["a"]={install:function(e,t){var n=e.prototype;n.DataProvider={},n=n.DataProvider,n.$userLogin=function(e){return e?{success:!0,flag:"INFO_USER_LOGIN_SUCCEEDED",userData:{uuid:1,userName:"Jon",userPwd:"12345",userEmail:"jon@233.com",userBio:"wahaha",userLevel:"User"}}:{success:!1,flag:"ERROR_USER_NAME_WRONG"}}}}}});
//# sourceMappingURL=app.aa57e95a.js.map