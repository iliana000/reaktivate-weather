(this["webpackJsonpreaktivate-weather"]=this["webpackJsonpreaktivate-weather"]||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=(a(22),a(3)),i=a.n(l),u=a(4),s=a(15),m=a(2),d=a(16);a(41);var p=function(){var e,t,a,o,c=Object(n.useState)(""),l=Object(m.a)(c,2),p=l[0],f=l[1],v=Object(n.useState)(""),h=Object(m.a)(v,2),g=h[0],E=h[1],b=Object(n.useState)(""),w=Object(m.a)(b,2),y=w[0],j=w[1];function k(){return(k=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({baseURL:"https://api.openweathermap.org/data/2.5/",url:"weather",params:{lat:t.latitude,lon:t.longitude,appid:"142c1e9a1787ce68fb592fb786e93507",units:"metric"}});case 2:return a=e.sent,n=a.data,E(n),j(O(n.main.temp)),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return e<-10?"#00ffff":e>30?"#ff8c00":"#fff700"}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header",style:{backgroundColor:y}},p?r.a.createElement("ul",null,r.a.createElement("li",null,"latitude: ",p.latitude),r.a.createElement("li",null,"longitude: ",p.longitude)):r.a.createElement("div",{className:"question"},r.a.createElement("p",null,"Do you allow to proceed your location?"),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",null,"Decline"),r.a.createElement("button",{onClick:function(){!p&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){f(e.coords),function(e){k.apply(this,arguments)}(e.coords)}),(function(e){return console.log("Error occurred. Error code: "+e.code)}))}},"Allow"))),g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(g.weather[0].icon,"@2x.png"),alt:""}),r.a.createElement("h2",{className:"current__temperature"},Math.round(null===(e=g.main)||void 0===e?void 0:e.temp)," ",r.a.createElement("small",null,"\xb0C")),r.a.createElement("div",{className:"current__city"},null!==(t=p.description)&&void 0!==t?t:"".concat(g.name,", ").concat(null===(a=g.sys)||void 0===a?void 0:a.country))),r.a.createElement("p",null,r.a.createElement("input",{type:"range",min:"-50",max:"50",value:null===(o=g.main)||void 0===o?void 0:o.temp,onChange:function(e){return t=e.target.value,E(Object(u.a)({},g,{main:Object(u.a)({},g.main,{temp:t})})),void j(O(t));var t}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5f88836a.chunk.js.map