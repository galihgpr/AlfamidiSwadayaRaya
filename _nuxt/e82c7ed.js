(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{333:function(t,n,r){"use strict";r(10),r(9),r(69),r(27),r(330),r(329),r(59),r(74);var e=r(0);var o,c=r(89);n.a=(o="container",e.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var r=n.props,data=n.data,e=n.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,e)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var r,e=n.props,data=n.data,o=n.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),o)}})},362:function(t,n,r){var content=r(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("09dfedd7",content,!0,{sourceMap:!1})},497:function(t,n,r){t.exports=r.p+"img/Personal.46b4f53.png"},498:function(t,n,r){t.exports=r.p+"img/Listerine.8ef733f.png"},499:function(t,n,r){t.exports=r.p+"img/Garnier.0e2d940.png"},500:function(t,n,r){t.exports=r.p+"img/Charm Cooling.647f86e.png"},501:function(t,n,r){t.exports=r.p+"img/Charm safe.36070cb.png"},502:function(t,n,r){t.exports=r.p+"img/Lourier.7bf64d6.png"},503:function(t,n,r){t.exports=r.p+"img/Lifree.7ecb6b0.png"},504:function(t,n,r){t.exports=r.p+"img/Lifreec2.6293ef2.png"},505:function(t,n,r){t.exports=r.p+"img/Selection.203fe18.png"},506:function(t,n,r){"use strict";r(362)},507:function(t,n,r){var e=r(17)(!1);e.push([t.i,"img{width:100%;height:100%}",""]),t.exports=e},545:function(t,n,r){"use strict";r.r(n);r(50);var e={data:function(){return{loading:!1,selection:1,fotos:[{src:r(497),flex:12,dialog:!1},{src:r(498),flex:12,dialog:!1},{src:r(499),flex:12,dialog:!1},{src:r(500),flex:6,dialog:!1},{src:r(501),flex:6,dialog:!1},{src:r(502),flex:6,dialog:!1},{src:r(503),flex:6,dialog:!1},{src:r(504),flex:6,dialog:!1},{src:r(505),flex:6,dialog:!1}]}},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)}}},o=(r(506),r(75)),c=r(103),l=r.n(c),d=r(221),f=r(365),v=r(328),m=r(530),x=r(333),h=r(533),C=r(131),y=r(531),k=r(532),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("v-container",[r("v-row",{attrs:{dense:""}},t._l(t.fotos,(function(n,i){return r("v-col",{key:i,attrs:{cols:n.flex}},[r("v-card",{staticClass:"mx-auto",attrs:{loading:t.loading}},[r("v-img",{attrs:{src:n.src},on:{click:function(t){n.dialog=!0}}})],1)],1)})),1),t._v(" "),t._l(t.fotos,(function(n,i){return r("v-dialog",{key:i,attrs:{persistent:""},model:{value:n.dialog,callback:function(r){t.$set(n,"dialog",r)},expression:"item.dialog"}},[r("v-card",[r("v-img",{attrs:{src:n.src}}),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){n.dialog=!1}}},[t._v("\n            Tutup\n          ")])],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCol:m.a,VContainer:x.a,VDialog:h.a,VImg:C.a,VRow:y.a,VSpacer:k.a})}}]);