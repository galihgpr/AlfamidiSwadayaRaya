(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(t,n,r){"use strict";r(10),r(9),r(69),r(27),r(330),r(329),r(59),r(74);var o=r(0);var e,c=r(89);n.a=(e="container",o.a.extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var r=n.props,data=n.data,o=n.children;data.staticClass="".concat(e," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var r,o=n.props,data=n.data,e=n.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(r||[])}),e)}})},335:function(t,n,r){t.exports=r.p+"img/Lemonilo.0671f42.png"},358:function(t,n,r){var content=r(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("12ea01ed",content,!0,{sourceMap:!1})},458:function(t,n,r){t.exports=r.p+"img/Indomie.d33886d.png"},459:function(t,n,r){t.exports=r.p+"img/Mikuya.13cdf90.png"},460:function(t,n,r){t.exports=r.p+"img/Pop Mie.ec0d2ef.png"},461:function(t,n,r){"use strict";r(358)},462:function(t,n,r){var o=r(17)(!1);o.push([t.i,"img{width:100%;height:100%}",""]),t.exports=o},541:function(t,n,r){"use strict";r.r(n);r(50);var o={data:function(){return{loading:!1,selection:1,fotos:[{src:r(335),flex:12,dialog:!1},{src:r(458),flex:6,dialog:!1},{src:r(459),flex:6,dialog:!1},{src:r(460),flex:6,dialog:!1}]}},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)}}},e=(r(461),r(75)),c=r(103),l=r.n(c),d=r(221),f=r(365),v=r(328),m=r(530),x=r(333),h=r(533),y=r(131),k=r(531),_=r(532),component=Object(e.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("v-container",[r("v-row",{attrs:{dense:""}},t._l(t.fotos,(function(n,i){return r("v-col",{key:i,attrs:{cols:n.flex}},[r("v-card",{staticClass:"mx-auto",attrs:{loading:t.loading}},[r("v-img",{attrs:{src:n.src},on:{click:function(t){n.dialog=!0}}})],1)],1)})),1),t._v(" "),t._l(t.fotos,(function(n,i){return r("v-dialog",{key:i,attrs:{persistent:""},model:{value:n.dialog,callback:function(r){t.$set(n,"dialog",r)},expression:"item.dialog"}},[r("v-card",[r("v-img",{attrs:{src:n.src}}),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){n.dialog=!1}}},[t._v("\n            Tutup\n          ")])],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCol:m.a,VContainer:x.a,VDialog:h.a,VImg:y.a,VRow:k.a,VSpacer:_.a})}}]);