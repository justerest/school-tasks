webpackJsonp([1],{"20lE":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{console:""},n=Math.pow(2,2)-12;!function(){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e]);t.console+=n.join("").replace(/\n/g,"<br>"),t.console+="<br>"}("D = ",n+"\n");var e=(-2+Math.sqrt(n))/6;!function(){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e]);t.console+=n.join("").replace(/\n/g,"<br>"),t.console+="<br>"}("x1 = ",e);var r=(-2-Math.sqrt(n))/6;return function(){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e]);t.console+=n.join("").replace(/\n/g,"<br>"),t.console+="<br>"}("x2 = ",r),t}},"5OIu":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("ka9c"),u=e("VU/8"),s=u(r.a,null,!1,null,null,null);n.default=s.exports},AdYB:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"b-task"},[e("h2",[t._v("Задание "+t._s(t.taskNumber))]),t._v(" "),e(t.taskTexts[t.componentName],{tag:"component",staticClass:"b-task__text"}),t._v(" "),e("div",{staticClass:"b-task__desktop"},[e("p",{domProps:{innerHTML:t._s(t.console)}})]),t._v(" "),t.isSuccess?e("div",{staticClass:"b-task__success"},[e("span",[t._v("Ответ совпал")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(0)]):t._e()],1)},u=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mark",[e("small",[t._v("\n        - Но это не значит, что задание выполнено полностью!\n        "),e("br"),t._v(" "),e("small",[t._v(" - А может оно вообще не выполнено.\n          "),e("br"),t._v(" "),e("small",[t._v(" - А может и выполнено.\n            "),e("br"),t._v(" "),e("small",[t._v(" - Неизвестно.")])])])])])}],s={render:r,staticRenderFns:u};n.a=s},CxKf:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:{console:""}}},DEcA:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("U0BB"),u=e("VU/8"),s=u(r.a,null,!1,null,null,null);n.default=s.exports},"L//q":function(t,n,e){"use strict";var r=e("woOf"),u=e.n(r),s=e("hqFF"),o=e("NFPx");n.a={props:["taskNumber"],data:function(){return{console:"",taskTexts:o.a}},computed:{componentName:function(){return"Task"+this.taskNumber},isSuccess:function(){return"1"===this.taskNumber?this.console.match("10<br>5<br>15")||this.console.match("10 5 15"):"2"===this.taskNumber?this.console.match("120"):void 0}},created:function(){this.connectPupilCode()},updated:function(){this.connectPupilCode()},methods:{connectPupilCode:function(){u()(this,s.default[this.componentName]())}}}},L77h:function(t,n,e){function r(t){return e(u(t))}function u(t){var n=s[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var s={"./Task1.vue":"5OIu","./Task2.vue":"u9Ag","./Task3.vue":"DEcA"};r.keys=function(){return Object.keys(s)},r.resolve=u,t.exports=r,r.id="L77h"},M93x:function(t,n,e){"use strict";function r(t){e("rP40")}var u=e("xJD8"),s=e("PBWY"),o=e("VU/8"),a=r,c=o(u.a,s.a,!1,a,null,null);n.a=c.exports},NFPx:function(t,n,e){"use strict";var r=e("iRKo");n.a=Object(r.a)(e("L77h"),"vue")},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("7+uW"),u=e("M93x"),s=e("cHtD");r.a.config.productionTip=!1,new r.a({el:"#app",template:"<App/>",components:{App:u.a},router:s.a})},OBM1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:{console:""}}},PBWY:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",{on:{click:function(n){t.$router.push("/")}}},[t._v("Староуткинская школа №13")]),t._v(" "),e("router-view"),t._v(" "),e("nav",{staticClass:"b-navbar"},[e("h3",[t._v("Список заданий:")]),t._v(" "),e("ul",{staticClass:"b-navbar__ul"},t._l(t.tasks,function(n,r){return"index"!==r?e("li",{staticClass:"b-navbar__li"},[e("router-link",{attrs:{to:"/task/"+r.slice(4)}},[t._v("Задание "+t._s(r.slice(4)))])],1):t._e()}))])],1)},u=[],s={render:r,staticRenderFns:u};n.a=s},RTiM:function(t,n,e){function r(t){return e(u(t))}function u(t){var n=s[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var s={"./Task1.js":"OBM1","./Task2.js":"CxKf","./Task3.js":"20lE","./index.js":"hqFF"};r.keys=function(){return Object.keys(s)},r.resolve=u,t.exports=r,r.id="RTiM"},U0BB:function(t,n,e){"use strict";n.a={functional:!0,render:function(){var t=arguments[0];return t("div",null,[t("p",null,["Составить программу решения квадратных уравнений вида:",t("br",null,[]),t("br",null,[])," ax^2 + bx + c = 0",t("br",null,[]),t("br",null,[]),"Выполнить пункты TODO."])])}}},WtCc:function(t,n,e){"use strict";function r(t){e("g9hT")}var u=e("L//q"),s=e("AdYB"),o=e("VU/8"),a=r,c=o(u.a,s.a,!1,a,"data-v-155ba04d",null);n.a=c.exports},cHtD:function(t,n,e){"use strict";var r=e("7+uW"),u=e("/ocq"),s=e("WtCc");r.a.use(u.a),n.a=new u.a({base:"/school-tasks/",mode:"history",routes:[{path:"/task/:taskNumber",props:!0,component:s.a}]})},g9hT:function(t,n){},hqFF:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("iRKo");n.default=Object(r.a)(e("RTiM"))},iRKo:function(t,n,e){"use strict";function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"js",e=new RegExp("\\.\\/(.*)\\."+n);return t.keys().reduce(function(n,r){var u=r.replace(e,"$1"),s=t(r).default;return n[u]=s,n},{})}n.a=r},jKRt:function(t,n,e){"use strict";n.a={functional:!0,render:function(){var t=arguments[0];return t("div",null,[t("p",null,["Решить задачку по физике.",t("br",null,[])," Автомобиль за полчаса проехал 60 км."]),t("p",null,["С какой средней скоростью двигался автомобиль?",t("br",null,[])," Дано и ответ вывести на экран."])])}}},ka9c:function(t,n,e){"use strict";n.a={functional:!0,render:function(){var t=arguments[0];return t("div",null,[t("p",null,["Вывести на экран значения трёх перменных (a, b и c) согласно указаниям, используя арифметические действия над переменными."]),t("p",null,["Первая переменная равна 10, а вторая - половине первой, третья - сумме первых двух."])])}}},rP40:function(t,n){},u9Ag:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("jKRt"),u=e("VU/8"),s=u(r.a,null,!1,null,null,null);n.default=s.exports},xJD8:function(t,n,e){"use strict";var r=e("WtCc"),u=e("NFPx");n.a={name:"app",components:{Desktop:r.a},data:function(){return{tasks:u.a}}}}},["NHnr"]);
//# sourceMappingURL=app.418ff59b6705014cf2a4.js.map