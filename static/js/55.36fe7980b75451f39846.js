webpackJsonp([55],{"+MmH":function(e,t,n){var o=n("L4zZ");(e.exports=n("UTlt")(!0)).push([e.i,"\n.hello[data-v-c490186c] {\n  position: relative;\n  width: 10rem;\n}\n.hello > div #canvas[data-v-c490186c] {\n  position: absolute;\n  top: 2.666667rem;\n  width: 9.04rem;\n  height: 3.706667rem;\n  background: url("+o(n("ujC1"))+") no-repeat center/100%;\n}","",{version:3,sources:["E:/Vux/vue-pqd-wx-master20190905/src/view/coupon/test.vue"],names:[],mappings:";AAAA;EACE,mBAAmB;EACnB,aAAa;CACd;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,gEAA6E;CAC9E",file:"test.vue",sourcesContent:['.hello {\n  position: relative;\n  width: 10rem;\n}\n\n.hello > div #canvas {\n  position: absolute;\n  top: 2.666667rem;\n  width: 9.04rem;\n  height: 3.706667rem;\n  background: url("../../imgs/index/icon-coupon-bg.png") no-repeat center/100%;\n}'],sourceRoot:""}])},Mvdb:function(e,t,n){"use strict";(function(e){e(function(){!function(){var e=document.getElementById("canvas");console.log(e);var t=e.getContext("2d"),n=e.width,o=e.height;t.beginPath(),t.fillStyle="#939393",t.rect(0,0,n,o),t.closePath(),t.fill();var i=!1,s=[],a=0,r=0,c="ontouchstart"in window,l=c?"touchstart":"mousedown",u=c?"touchmove":"mousemove",d=c?"touchend":"mouseup";function v(e){if(e.save(),e.beginPath(),e.moveTo(s[0][0],s[0][1]),e.lineCap="round",e.lineJoin="round",e.lineWidth=60,e.globalCompositeOperation="destination-out",1==s.length)e.lineTo(s[0][0]+1,s[0][1]+1);else for(var t=1;t<s.length;t++)e.lineTo(s[t][0],s[t][1]),e.moveTo(s[t][0],s[t][1]);e.closePath(),e.stroke(),e.restore()}e.addEventListener(l,function(e){var n=window.event||e;this.style.cursor="move",i=!0,a=c?n.targetTouches[0].pageX:n.clientX-this.offsetLeft,r=c?n.targetTouches[0].pageY:n.clientY-this.offsetTop,s.push([a,r]),v(t)}),e.addEventListener(u,function(e){var n=window.event||e;i&&(a=c?n.targetTouches[0].pageX:n.clientX-this.offsetLeft,r=c?n.targetTouches[0].pageY:n.clientY-this.offsetTop,s.push([a,r]),v(t))}),e.addEventListener(d,function(e){i=!1,s=[]})}()}),t.a={data:function(){return{imgShow:!1}},mounted:function(){},methods:{}}}).call(t,n("qqHy"))},"P61+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Mvdb"),i=function(){var e=this.$createElement;this._self._c;return this._m(0)},s=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("img",{staticStyle:{display:"none"},attrs:{src:n("F48+"),alt:""}}),this._v(" "),t("div",[t("canvas",{staticClass:"brs20",attrs:{id:"canvas"}})])])}];i._withStripped=!0;var a={render:i,staticRenderFns:s},r=a;var c=!1;var l=function(e){c||n("d6fV")},u=n("C7Lr")(o.a,r,!1,l,"data-v-c490186c",null);u.options.__file="src/view/coupon/test.vue";t.default=u.exports},d6fV:function(e,t,n){var o=n("+MmH");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("FIqI")("552150fd",o,!1,{})}});
//# sourceMappingURL=55.36fe7980b75451f39846.js.map