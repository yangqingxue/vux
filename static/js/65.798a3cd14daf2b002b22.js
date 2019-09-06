webpackJsonp([65],{WDSC:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("3cXf"),A=t.n(i),a=t("wSez"),r=t("JpXR"),o={name:"feedbackSubmit",data:function(){return{textType:"",textNum:"500",contentVal:"",imgList:[],tel:""}},mounted:function(){switch(this.$route.query.id){case"1":this.textType="新功能建议";break;case"2":this.textType="功能异常&体验问题";break;case"3":this.textType="服务投诉"}document.title=this.textType},methods:{upload:function(n){var e=this,t="";a.Indicator.open({text:"图片上传中...",spinnerType:"snake"}),r(n.target.files[0],{quality:.4}).then(function(n){t=n.base64,e.uploadImg(t)}).always(function(){n.target.value=null})},uploadImg:function(n){var e=this,t=new FormData;t.append("_uimg",n),t.append("_utype","base64"),t.append("type","default"),this.$upload("Upload/index",t).then(function(n){e.imgList.push(n)})},deleteImg:function(n,e){this.imgList.splice(e,1)},submitBtn:function(){var n=this;""==this.tel||/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)?this.$post("user/addfeedback",{token:this.$getCookie("token"),msg_type:this.$route.query.id,msg_content:this.contentVal,msg_img:A()(this.imgList),user_mobile:this.tel}).then(function(e){Object(a.Toast)({message:"提交成功！",duration:1200}),setTimeout(function(){n.$router.push("/user/index")},1e3)}):Object(a.Toast)("请输入正确的手机号")}},watch:{contentVal:function(n){this.textNum=500-this.$refs.count.value.length}}},s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"feedbackSubmit"},[t("div",{staticClass:"title"},[t("div",{staticClass:"divFl"},[n._v(n._s(n.textType))]),n._v(" "),t("div",{staticClass:"divFr"},[n._v("您还可以输入"+n._s(n.textNum)+"字")])]),n._v(" "),t("div",{staticClass:"content"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:n.contentVal,expression:"contentVal"}],ref:"count",attrs:{rows:"4",placeholder:"请提出宝贵意见，我们将不断优化您的使用体验"},domProps:{value:n.contentVal},on:{input:function(e){e.target.composing||(n.contentVal=e.target.value)}}}),n._v(" "),t("div",{staticClass:"imgs"},[n._l(n.imgList,function(e,i){return t("div",{staticClass:"imgList"},[t("i",{staticClass:"red",on:{click:function(t){return n.deleteImg(e,i)}}}),n._v(" "),t("img",{attrs:{src:e,alt:""}})])}),n._v(" "),n.imgList.length<5?t("div",{staticClass:"addImg",on:{change:n.upload}},[t("input",{attrs:{type:"file",accept:"image/jpeg,image/jpg,image/png",captur:"camera"}}),n._v(" "),t("i"),n._v(" "),t("span",[n._v(n._s(n.imgList.length)+"/5")])]):n._e()],2),n._v(" "),t("div",{staticClass:"tips"},[n._m(0),n._v(" "),t("div",{staticClass:"divFr"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.tel,expression:"tel"}],attrs:{type:"tel",placeholder:"请输入手机号"},domProps:{value:n.tel},on:{input:function(e){e.target.composing||(n.tel=e.target.value)}}})])])]),n._v(" "),t("div",{staticClass:"btnDiv"},[t("button",{on:{click:n.submitBtn}},[n._v("提交")])])])};s._withStripped=!0;var m={render:s,staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"divFl"},[e("label",[this._v("联系电话")])])}]},c=m;var d=!1;var b=t("C7Lr")(o,c,!1,function(n){d||t("cUID")},"data-v-7988abb0",null);b.options.__file="src/view/user/feedbackSubmit.vue";e.default=b.exports},cUID:function(n,e,t){var i=t("rZLj");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("FIqI")("da2cd066",i,!1,{})},rZLj:function(n,e,t){var i=t("L4zZ");(n.exports=t("UTlt")(!0)).push([n.i,"\n.feedbackSubmit[data-v-7988abb0] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  min-height: 100%;\n  background-color: #fff;\n}\n.feedbackSubmit > div[data-v-7988abb0] {\n  padding: 0 0.346667rem;\n}\n.feedbackSubmit .title[data-v-7988abb0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.533333rem 0.346667rem;\n}\n.feedbackSubmit .title .divFl[data-v-7988abb0] {\n  font-size: 0.4rem;\n  color: #333;\n}\n.feedbackSubmit .title .divFr[data-v-7988abb0] {\n  font-size: 0.32rem;\n  color: #999;\n}\n.feedbackSubmit .content textarea[data-v-7988abb0] {\n  border: none;\n  width: 100%;\n  font-size: 0.4rem;\n}\n.feedbackSubmit .content .imgs[data-v-7988abb0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 0.266667rem;\n}\n.feedbackSubmit .content .imgs .imgList[data-v-7988abb0] {\n  position: relative;\n  margin-right: 0.266667rem;\n  margin-bottom: 0.213333rem;\n}\n.feedbackSubmit .content .imgs .imgList img[data-v-7988abb0] {\n  width: 2rem;\n  height: 2rem;\n}\n.feedbackSubmit .content .imgs .imgList .red[data-v-7988abb0] {\n  position: absolute;\n  right: -0.266667rem;\n  top: -0.266667rem;\n  width: 0.533333rem;\n  height: 0.533333rem;\n  text-align: center;\n  color: #fff;\n  background: url("+i(t("YAyx"))+") no-repeat center/100%;\n  border-radius: 50%;\n}\n.feedbackSubmit .content .imgs .addImg[data-v-7988abb0] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 2rem;\n  height: 2rem;\n  border: 0.026667rem dashed #ccc;\n}\n.feedbackSubmit .content .imgs .addImg input[type='file'][data-v-7988abb0] {\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  left: 0;\n  right: 0;\n  opacity: 0;\n}\n.feedbackSubmit .content .imgs .addImg i[data-v-7988abb0] {\n  display: block;\n  width: 0.613333rem;\n  height: 0.613333rem;\n  line-height: 0.613333rem;\n  background: url("+i(t("mNHA"))+") no-repeat center/100%;\n}\n.feedbackSubmit .content .imgs .addImg span[data-v-7988abb0] {\n  color: #999;\n  font-size: 0.32rem;\n  margin-top: 0.133333rem;\n}\n.feedbackSubmit .content .tips[data-v-7988abb0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 1.066667rem;\n}\n.feedbackSubmit .content .tips .divFl label[data-v-7988abb0] {\n  width: 1.6rem;\n  font-size: 0.373333rem;\n  color: #333;\n}\n.feedbackSubmit .content .tips .divFr[data-v-7988abb0] {\n  margin-left: 0.4rem;\n}\n.feedbackSubmit .content .tips .divFr input[data-v-7988abb0] {\n  border: none;\n  width: 7.466667rem;\n}\n.feedbackSubmit .btnDiv[data-v-7988abb0] {\n  margin-top: 1.6rem;\n}\n.feedbackSubmit .btnDiv button[data-v-7988abb0] {\n  width: 100%;\n  height: 1.306667rem;\n  line-height: 1.306667rem;\n  background-color: #FF4862;\n  font-size: 0.426667rem;\n  border-radius: 0.106667rem;\n}","",{version:3,sources:["E:/Vux/vue-pqd-wx-master20190905/src/view/user/feedbackSubmit.vue"],names:[],mappings:";AAAA;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,OAAO;EACP,iBAAiB;EACjB,uBAAuB;CACxB;AAED;EACE,uBAAuB;CACxB;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,iCAAiC;CAClC;AAED;EACE,kBAAkB;EAClB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,YAAY;CACb;AAED;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;CACnB;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAA4B;MAA5B,qBAA4B;UAA5B,4BAA4B;EAC5B,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,wBAAwB;CACzB;AAED;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,2BAA2B;CAC5B;AAED;EACE,YAAY;EACZ,aAAa;CACd;AAED;EACE,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;EACZ,gEAAiF;EAGjF,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,gCAAgC;CACjC;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,QAAQ;EACR,SAAS;EACT,WAAW;CACZ;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,yBAAyB;EACzB,gEAA4E;CAC7E;AAED;EACE,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;CACzB;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAA4B;MAA5B,qBAA4B;UAA5B,4BAA4B;EAC5B,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,wBAAwB;CACzB;AAED;EACE,cAAc;EACd,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,oBAAoB;CACrB;AAED;EACE,aAAa;EACb,mBAAmB;CACpB;AAED;EACE,mBAAmB;CACpB;AAED;EACE,YAAY;EACZ,oBAAoB;EACpB,yBAAyB;EACzB,0BAA0B;EAC1B,uBAAuB;EAGvB,2BAA2B;CAC5B",file:"feedbackSubmit.vue",sourcesContent:['.feedbackSubmit {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  min-height: 100%;\n  background-color: #fff;\n}\n\n.feedbackSubmit > div {\n  padding: 0 0.346667rem;\n}\n\n.feedbackSubmit .title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.533333rem 0.346667rem;\n}\n\n.feedbackSubmit .title .divFl {\n  font-size: 0.4rem;\n  color: #333;\n}\n\n.feedbackSubmit .title .divFr {\n  font-size: 0.32rem;\n  color: #999;\n}\n\n.feedbackSubmit .content textarea {\n  border: none;\n  width: 100%;\n  font-size: 0.4rem;\n}\n\n.feedbackSubmit .content .imgs {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 0.266667rem;\n}\n\n.feedbackSubmit .content .imgs .imgList {\n  position: relative;\n  margin-right: 0.266667rem;\n  margin-bottom: 0.213333rem;\n}\n\n.feedbackSubmit .content .imgs .imgList img {\n  width: 2rem;\n  height: 2rem;\n}\n\n.feedbackSubmit .content .imgs .imgList .red {\n  position: absolute;\n  right: -0.266667rem;\n  top: -0.266667rem;\n  width: 0.533333rem;\n  height: 0.533333rem;\n  text-align: center;\n  color: #fff;\n  background: url("../../imgs/service/icon-image-close.png") no-repeat center/100%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n}\n\n.feedbackSubmit .content .imgs .addImg {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n  border: 0.026667rem dashed #ccc;\n}\n\n.feedbackSubmit .content .imgs .addImg input[type=\'file\'] {\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  left: 0;\n  right: 0;\n  opacity: 0;\n}\n\n.feedbackSubmit .content .imgs .addImg i {\n  display: block;\n  width: 0.613333rem;\n  height: 0.613333rem;\n  line-height: 0.613333rem;\n  background: url("../../imgs/service/icon-camera.png") no-repeat center/100%;\n}\n\n.feedbackSubmit .content .imgs .addImg span {\n  color: #999;\n  font-size: 0.32rem;\n  margin-top: 0.133333rem;\n}\n\n.feedbackSubmit .content .tips {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 1.066667rem;\n}\n\n.feedbackSubmit .content .tips .divFl label {\n  width: 1.6rem;\n  font-size: 0.373333rem;\n  color: #333;\n}\n\n.feedbackSubmit .content .tips .divFr {\n  margin-left: 0.4rem;\n}\n\n.feedbackSubmit .content .tips .divFr input {\n  border: none;\n  width: 7.466667rem;\n}\n\n.feedbackSubmit .btnDiv {\n  margin-top: 1.6rem;\n}\n\n.feedbackSubmit .btnDiv button {\n  width: 100%;\n  height: 1.306667rem;\n  line-height: 1.306667rem;\n  background-color: #FF4862;\n  font-size: 0.426667rem;\n  -webkit-border-radius: 0.106667rem;\n  -moz-border-radius: 0.106667rem;\n  border-radius: 0.106667rem;\n}'],sourceRoot:""}])}});
//# sourceMappingURL=65.798a3cd14daf2b002b22.js.map