(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ad01876"],{"778b":function(e,o,n){"use strict";var t=n("bc3a"),i=n.n(t),d="v1",s="192.168.240.140";function r(e,o){i.a.post("http://192.168.240.140:3000/v1/User/Login/",{userName:o.userName,userPwd:o.userPwd}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}var u={user_login:function(e,o,n,t){if(t=d+": user_login","production"===e)throw t+" ERROR: production Mode is not defined!";if("development"!==e)throw"buildlocal"===e?t+" ERROR: buildlocal Mode is not defined!":"test"===e?t+" ERROR: test Mode is not defined!":"ERROR: Mode is not defined!";r(s,o)}};o["a"]={data_provider_tester:function(e){var o="data_provider_tester";throw"production"===e?o+" ERROR: production Mode is not defined!":"development"===e?o+" ERROR: development Mode is not defined!":"buildlocal"===e?o+" ERROR: buildlocal Mode is not defined!":"test"===e?o+" ERROR: test Mode is not defined!":"ERROR: Mode is not defined!"},user_login:function(e,o,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i="",d=u;if(!o.userName||!o.userPwd)throw"Error: No input of userName or userPassword! And the developer seems forgot to deal with it!";return""===t||"latest"===t?d.user_login(e,o,n,i):"v1"===t?u.user_login(e,o,n,i):(console.log("Warning: You haven't define a legal version number of user login API!"),d.user_login(e,o,n,i))}}},8951:function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"pageUpComing"},[n("div",{staticClass:"test"},[e._v("\n    "+e._s(e.envMode)+"\n  ")])])},i=[],d=(n("778b"),n("2f62"),{name:"pageupcoming",data:function(){return{envMode:"buildlocal"}}}),s=d,r=n("2877"),u=Object(r["a"])(s,t,i,!1,null,"f2074368",null);o["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7ad01876.276171e3.js.map