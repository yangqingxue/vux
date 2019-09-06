webpackJsonp([63],{XPng:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=r("MfmH"),n=r.n(t),d=r("wSez"),i={name:"addAddress",data:function(){return{username:"",userTel:"",address:"",detailAddress:"",addressArr:n.a,showArea:!1,provinceId:"",province:"",provinceIndex:"",cityId:"",city:"",cityIndex:"",districtId:"",district:""}},mounted:function(){this.$route.query.address_id&&(this.getAddressInfo(),document.title="编辑地址")},methods:{getAddressInfo:function(){var e=this;this.$post("user/getAddressList",{token:this.$getCookie("token")?this.$getCookie("token"):""}).then(function(s){for(var r=0;r<s.list.length;r++)e.$route.query.address_id==s.list[r].address_id&&(e.username=s.list[r].consignee,e.userTel=s.list[r].mobile,e.address=s.list[r].address_base,e.detailAddress=s.list[r].address)})},showAreaChange:function(){this.showArea=!0,this.addressArr=n.a,this.provinceId="",this.province="",this.cityId="",this.city="",this.districtId="",this.district="",this.address=""},sureAddress:function(){this.showArea=!1},addressClick:function(e,s){this.addressArr=e.children,"100000"==e.parent_id?(this.province=e.region_name,this.provinceId=e.region_id,this.provinceIndex=s):e.parent_id==this.provinceId?(this.city=e.region_name,this.cityId=e.region_id,this.cityIndex=s):e.children||e.parent_id!=this.cityId||(this.district=e.region_name,this.districtId=e.region_id,this.sureAddress()),this.address=""+this.province+this.city+this.district},provinceClick:function(){this.addressArr=n.a,this.cityId="",this.city="",this.districtId="",this.district=""},cityClick:function(){this.addressArr=n.a[this.provinceIndex].children,this.districtId="",this.district=""},saveAdd:function(){var e=this;if(/^[1][1,2,3,4,5,6,7,8,9][0-9]{9}$/.test(this.userTel)&&""!=this.nameState&&""!=this.userTel&&""!=this.detailAddress)this.$route.query.address_id?this.$post("user/handleAddress",{address_id:"2"==this.$route.query.type?this.$route.query.address_id:"",token:this.$getCookie("token"),type:this.$route.query.type||"2",consignee:this.username,province:this.provinceId,city:this.cityId,district:this.districtId,is_default:"0",address_base:this.address,address:this.detailAddress,mobile:this.userTel}).then(function(s){Object(d.Toast)("编辑成功"),setTimeout(function(){e.$router.push({path:"/address",query:{goods_id:e.$route.query.goods_id,goods_number:e.$route.query.goods_number,spec_key:e.$route.query.spec_key,order_class:e.$route.query.order_class,group_id:e.$route.query.group_id,from:"user"==e.$route.query.from?"user":""}})},1e3)}):this.$post("user/handleAddress",{address_id:"2"==this.$route.query.type?this.$route.query.address_id:"",token:this.$getCookie("token"),type:this.$route.query.type||"1",consignee:this.username,province:this.provinceId,city:this.cityId,district:this.districtId,is_default:"0",address_base:this.address,address:this.detailAddress,mobile:this.userTel}).then(function(s){Object(d.Toast)("添加成功"),setTimeout(function(){e.$router.push({path:"/address",query:{goods_id:e.$route.query.goods_id,goods_number:e.$route.query.goods_number,spec_key:e.$route.query.spec_key,order_class:e.$route.query.order_class,group_id:e.$route.query.group_id,from:"user"==e.$route.query.from?"user":""}})},1e3)});else{var s=Object(d.Toast)("请填写正确的信息");setTimeout(function(){s.close()},2e3)}}}},o=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"address"},[r("div",[r("label",[e._v("收货人")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入收件人姓名"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}})]),e._v(" "),r("div",[r("label",[e._v("联系电话")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userTel,expression:"userTel"}],attrs:{type:"tel",placeholder:"请输入联系电话"},domProps:{value:e.userTel},on:{input:function(s){s.target.composing||(e.userTel=s.target.value)}}})]),e._v(" "),r("div",[r("label",[e._v("详细地址")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.detailAddress,expression:"detailAddress"}],attrs:{type:"text",placeholder:"(如XX县XX街道，小区，乡镇，村)"},domProps:{value:e.detailAddress},on:{input:function(s){s.target.composing||(e.detailAddress=s.target.value)}}})]),e._v(" "),r("div",{staticClass:"sureBtn"},[r("button",{on:{click:e.saveAdd}},[e._v("保存")])]),e._v(" "),e.showArea?r("div",{staticClass:"chooseAddress"},[r("div",{staticClass:"bg"}),e._v(" "),r("div",{staticClass:"addressDiv"},[r("div",{staticClass:"addressTop"},[r("div",{staticClass:"divFl"},[r("span",{on:{click:e.provinceClick}},[e._v(e._s(e.province||"请选择"))]),e._v(" "),e.province?r("span",{on:{click:e.cityClick}},[e._v(e._s(e.city||"请选择"))]):e._e(),e._v(" "),e.city?r("span",[e._v(e._s(e.district||"请选择"))]):e._e()]),e._v(" "),r("div",{staticClass:"divFr"},[r("i",{on:{click:e.sureAddress}})])]),e._v(" "),r("div",{staticClass:"addressBody"},[r("ul",e._l(e.addressArr,function(s,t){return r("li",{on:{click:function(r){return e.addressClick(s,t)}}},[e._v("\n                        "+e._s(s.region_name)+"\n                    ")])}),0)])])]):e._e()])};o._withStripped=!0;var A={render:o,staticRenderFns:[]},a=A;var c=!1;var u=r("C7Lr")(i,a,!1,function(e){c||r("iPwC")},"data-v-7e5c9a22",null);u.options.__file="src/view/address/addAddress.vue";s.default=u.exports},iPwC:function(e,s,r){var t=r("l8Xv");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);r("FIqI")("83138b62",t,!1,{})},l8Xv:function(e,s,r){var t=r("L4zZ");(e.exports=r("UTlt")(!0)).push([e.i,"\n.address[data-v-7e5c9a22] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #fff;\n}\n.address > div[data-v-7e5c9a22] {\n  padding: 0 0.346667rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 1.413333rem;\n  line-height: 1.413333rem;\n}\n.address > div label[data-v-7e5c9a22] {\n  width: 1.893333rem;\n  font-size: 0.373333rem;\n  color: #333;\n  text-align: left;\n}\n.address > div input[data-v-7e5c9a22] {\n  /*line-height: 106px;*/\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border: none;\n  border-bottom: 0.013333rem solid #eee;\n  border-radius: 0;\n  padding: 0.426667rem 0;\n  text-indent: 0;\n  font-size: 0.373333rem;\n}\n.address > div > p[data-v-7e5c9a22] {\n  width: 100%;\n  font-size: 0.373333rem;\n  padding-left: 0.346667rem;\n}\n.address .sureBtn button[data-v-7e5c9a22] {\n  width: 9.306667rem;\n  height: 1.306667rem;\n  line-height: 1.306667rem;\n  margin: 1.093333rem auto 0;\n  font-size: 0.426667rem;\n  border-radius: 0.106667rem;\n  background-color: #FF4862;\n}\n.address .chooseAddress[data-v-7e5c9a22] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  background: rgba(0, 0, 0, 0.6);\n}\n.address .chooseAddress .addressDiv[data-v-7e5c9a22] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 8rem;\n  padding: 0 0.346667rem;\n  background-color: #fff;\n  border-radius: 0.266667rem 0.266667rem 0 0;\n}\n.address .chooseAddress .addressDiv .addressTop[data-v-7e5c9a22] {\n  height: 1.333333rem;\n  line-height: 1.333333rem;\n  border-bottom: 0.013333rem solid #eee;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.address .chooseAddress .addressDiv .addressTop .divFl span[data-v-7e5c9a22] {\n  width: auto;\n  font-size: 0.4rem;\n  color: #4c4c4c;\n  margin-right: 0.266667rem;\n  border-bottom: 0.053333rem solid #FF4862;\n}\n.address .chooseAddress .addressDiv .addressTop .divFr i[data-v-7e5c9a22] {\n  width: 0.373333rem;\n  height: 0.373333rem;\n  background: url("+t(r("eB3r"))+") no-repeat center/100%;\n}\n.address .chooseAddress .addressDiv .addressBody[data-v-7e5c9a22] {\n  max-height: 6.666667rem;\n  overflow: scroll;\n}\n.address .chooseAddress .addressDiv .addressBody ul li[data-v-7e5c9a22] {\n  height: 1.066667rem;\n  line-height: 1.066667rem;\n  font-size: 0.4rem;\n  color: #4c4c4c;\n}","",{version:3,sources:["E:/Vux/vue-pqd-wx-master20190905/src/view/address/addAddress.vue"],names:[],mappings:";AAAA;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,OAAO;EACP,UAAU;EACV,uBAAuB;CACxB;AAED;EACE,uBAAuB;EACvB,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAA4B;MAA5B,qBAA4B;UAA5B,4BAA4B;EAC5B,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,oBAAoB;EACpB,yBAAyB;CAC1B;AAED;EACE,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;CAClB;AAED;EACE,uBAAuB;EACvB,oBAAQ;MAAR,YAAQ;UAAR,QAAQ;EACR,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;EACf,uBAAuB;CACxB;AAED;EACE,YAAY;EACZ,uBAAuB;EACvB,0BAA0B;CAC3B;AAED;EACE,mBAAmB;EACnB,oBAAoB;EACpB,yBAAyB;EACzB,2BAA2B;EAC3B,uBAAuB;EAGvB,2BAA2B;EAC3B,0BAA0B;CAC3B;AAED;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,OAAO;EACP,YAAY;EACZ,aAAa;EACb,aAAa;EACb,+BAA+B;CAChC;AAED;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EAGvB,2CAA2C;CAC5C;AAED;EACE,oBAAoB;EACpB,yBAAyB;EACzB,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;CACrB;AAED;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,0BAA0B;EAC1B,yCAAyC;CAC1C;AAED;EACE,mBAAmB;EACnB,oBAAoB;EACpB,gEAAyF;CAC1F;AAED;EACE,wBAAwB;EACxB,iBAAiB;CAClB;AAED;EACE,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;CAChB",file:"addAddress.vue",sourcesContent:['.address {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #fff;\n}\n\n.address > div {\n  padding: 0 0.346667rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 1.413333rem;\n  line-height: 1.413333rem;\n}\n\n.address > div label {\n  width: 1.893333rem;\n  font-size: 0.373333rem;\n  color: #333;\n  text-align: left;\n}\n\n.address > div input {\n  /*line-height: 106px;*/\n  flex: 1;\n  border: none;\n  border-bottom: 0.013333rem solid #eee;\n  border-radius: 0;\n  padding: 0.426667rem 0;\n  text-indent: 0;\n  font-size: 0.373333rem;\n}\n\n.address > div > p {\n  width: 100%;\n  font-size: 0.373333rem;\n  padding-left: 0.346667rem;\n}\n\n.address .sureBtn button {\n  width: 9.306667rem;\n  height: 1.306667rem;\n  line-height: 1.306667rem;\n  margin: 1.093333rem auto 0;\n  font-size: 0.426667rem;\n  -webkit-border-radius: 0.106667rem;\n  -moz-border-radius: 0.106667rem;\n  border-radius: 0.106667rem;\n  background-color: #FF4862;\n}\n\n.address .chooseAddress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.address .chooseAddress .addressDiv {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 8rem;\n  padding: 0 0.346667rem;\n  background-color: #fff;\n  -webkit-border-radius: 0.266667rem 0.266667rem 0 0;\n  -moz-border-radius: 0.266667rem 0.266667rem 0 0;\n  border-radius: 0.266667rem 0.266667rem 0 0;\n}\n\n.address .chooseAddress .addressDiv .addressTop {\n  height: 1.333333rem;\n  line-height: 1.333333rem;\n  border-bottom: 0.013333rem solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.address .chooseAddress .addressDiv .addressTop .divFl span {\n  width: auto;\n  font-size: 0.4rem;\n  color: #4c4c4c;\n  margin-right: 0.266667rem;\n  border-bottom: 0.053333rem solid #FF4862;\n}\n\n.address .chooseAddress .addressDiv .addressTop .divFr i {\n  width: 0.373333rem;\n  height: 0.373333rem;\n  background: url("../../imgs/address/icon-close-addressChoose.png") no-repeat center/100%;\n}\n\n.address .chooseAddress .addressDiv .addressBody {\n  max-height: 6.666667rem;\n  overflow: scroll;\n}\n\n.address .chooseAddress .addressDiv .addressBody ul li {\n  height: 1.066667rem;\n  line-height: 1.066667rem;\n  font-size: 0.4rem;\n  color: #4c4c4c;\n}'],sourceRoot:""}])}});
//# sourceMappingURL=63.f1001f4c125c3879926e.js.map