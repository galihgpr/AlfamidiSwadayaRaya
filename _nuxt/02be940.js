(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{333:function(t,n,r){"use strict";r(10),r(9),r(69),r(27),r(330),r(329),r(59),r(74);var o=r(0);var e,c=r(89);n.a=(e="container",o.a.extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var r=n.props,data=n.data,o=n.children;data.staticClass="".concat(e," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var r,o=n.props,data=n.data,e=n.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(r||[])}),e)}})},357:function(t,n,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("85e5c512",content,!0,{sourceMap:!1})},449:function(t,n,r){t.exports=r.p+"img/Red.fffc63e.png"},450:function(t,n,r){t.exports=r.p+"img/Milk.76d2f99.png"},451:function(t,n,r){t.exports=r.p+"img/Bonus.564cdd2.png"},452:function(t,n,r){t.exports=r.p+"img/Gop.a45eddf.png"},453:function(t,n,r){t.exports=r.p+"img/Reddd.895a1f3.png"},454:function(t,n,r){t.exports=r.p+"img/Buah.520f0c5.png"},455:function(t,n,r){t.exports=r.p+"img/Hari Daging.e8a4004.png"},456:function(t,n,r){"use strict";r(357)},457:function(t,n,r){var o=r(17)(!1);o.push([t.i,"img{width:100%;height:100%}",""]),t.exports=o},540:function(t,n,r){"use strict";r.r(n);r(50);var o={data:function(){return{loading:!1,selection:1,fotos:[{src:r(449),flex:12,dialog:!1},{src:r(450),flex:12,dialog:!1},{src:r(451),flex:12,dialog:!1},{src:r(452),flex:12,dialog:!1},{src:r(453),flex:12,dialog:!1},{src:r(454),flex:6,dialog:!1},{src:r(455),flex:6,dialog:!1}]}},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)}}},e=(r(456),r(75)),c=r(103),l=r.n(c),d=r(221),f=r(365),v=r(328),m=r(530),x=r(333),h=r(533),k=r(131),y=r(531),_=r(532),component=Object(e.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("v-container",[r("v-row",{attrs:{dense:""}},t._l(t.fotos,(function(n,i){return r("v-col",{key:i,attrs:{cols:n.flex}},[r("v-card",{staticClass:"mx-auto",attrs:{loading:t.loading}},[r("v-img",{attrs:{src:n.src},on:{click:function(t){n.dialog=!0}}})],1)],1)})),1),t._v(" "),t._l(t.fotos,(function(n,i){return r("v-dialog",{key:i,attrs:{persistent:""},model:{value:n.dialog,callback:function(r){t.$set(n,"dialog",r)},expression:"item.dialog"}},[r("v-card",[r("v-img",{attrs:{src:n.src}}),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){n.dialog=!1}}},[t._v("\n            Tutup\n          ")])],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCol:m.a,VContainer:x.a,VDialog:h.a,VImg:k.a,VRow:y.a,VSpacer:_.a})}}]);