webpackJsonp([36],{"N/Dv":function(i,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"review",data:function(){return{list:[],swiperOptionTap:{freeMode:!1,initialSlide:"0",speed:600,slidesPerView:"auto",observer:!0},showBigImg:!1,imgsArr:[],showBigZhuiImg:!1,imgsZhuiArr:[],bigCurrentIndexImg:"",page:0,loading:!1,showBottom:!1}},mounted:function(){},methods:{getReview:function(i){var e=this;this.$post("goods/comments",{goods_id:this.$route.query.goods_id,page:i}).then(function(i){e.list=i.list})},loadMore:function(){this.loading=!0,this.page++,this.getReview(this.page),this.loading=!1},bigClick:function(i,e){this.swiperOptionTap.initialSlide=e,this.bigCurrentIndexImg=e,this.showBigImg=!0},getImgArr:function(i,e){this.imgsArr=i.img,this.imgsZhuiArr=i.list[0].img.length>0?i.list[0].img:i.list[1].img},bigZhuiClick:function(i,e){console.log(i),console.log(e),this.swiperOptionTap.initialSlide=e,this.showBigZhuiImg=!0},closeImg:function(){this.showBigImg=!1,this.showBigZhuiImg=!1}}},A=function(){var i=this,e=i.$createElement,r=i._self._c||e;return r("div",{staticClass:"reviewDiv"},[r("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:i.loadMore,expression:"loadMore"}],staticClass:"reviewListDiv",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"20"}},i._l(i.list,function(e,A){return r("li",{staticClass:"reviewDivDiv"},[r("div",{staticClass:"reviewTop"},[r("div",{staticClass:"divFl"},[r("div",{staticClass:"divFlFl"},[r("img",{attrs:{src:e.user_pic,alt:e.user_nickname}})]),i._v(" "),r("div",{staticClass:"divFlFr"},[r("p",[i._v(i._s(e.user_nickname))]),i._v(" "),r("div",[i._l(e.star,function(i,e){return r("img",{attrs:{src:n("XlN7"),alt:""}})}),i._v(" "),i._l(5-e.star,function(i,e){return r("img",{attrs:{src:n("xBbg"),alt:""}})})],2)])]),i._v(" "),r("div",{staticClass:"divFr"},[r("span",[i._v(i._s(e.add_time))])])]),i._v(" "),r("div",{staticClass:"reviewBody"},[r("p",[i._v(i._s(e.content))])]),i._v(" "),r("div",{staticClass:"reviewBottom"},[r("span",[i._v(i._s(e.goods_spec_name))])])])}),0),i._v(" "),i.showBottom?r("p",{staticClass:"tips"},[i._v("--------------拉到底了----------------")]):i._e(),i._v(" "),i.showBigImg?r("div",{staticClass:"swiperDiv",on:{click:function(e){return e.preventDefault(),i.closeImg(e)}}},[r("swiper",{ref:"mySwiperTap",attrs:{options:i.swiperOptionTap}},i._l(i.imgsArr,function(i,e){return r("swiper-slide",{key:e},[r("img",{attrs:{src:i,alt:e}})])}),1)],1):i._e(),i._v(" "),i.showBigZhuiImg?r("div",{staticClass:"swiperDiv",on:{click:function(e){return e.preventDefault(),i.closeImg(e)}}},[r("swiper",{ref:"mySwiperTap",attrs:{options:i.swiperOptionTap}},i._l(i.imgsZhuiArr,function(i,e){return r("swiper-slide",{key:e},[r("img",{attrs:{src:i,alt:e}})])}),1)],1):i._e()])};A._withStripped=!0;var t={render:A,staticRenderFns:[]},v=t;var o=!1;var s=n("C7Lr")(r,v,!1,function(i){o||n("w21/")},"data-v-89b31af6",null);s.options.__file="src/view/detail/review.vue";e.default=s.exports},XlN7:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABvUlEQVQ4T62TvWsUURTFf2c2fmChhY1lIBZGG42lIIjozK7EekHQOBuiK1goiEUQbBSb2JlodGcbQVIJKs6OdoqlSBADBsHSP0AFP5K5ssO67CbPTEa95b3n/N557/JETln51BBWepHJvNIhPb27uJZFucAgvA+cyHSmOSWN6l8DLRgbBO8DUOpAljHtUtJo95y1ZkLza9PI6iucs2pFZwoDrTK2g9T7CGxeYf6BDQwqmf3kgjoTml/biWwKOO5OYo9Bl2hFiwLr1cgOn9zOwIYK2AiyvaB9wLa8ZXXmX4C3iHlS5lnyHsr8cAExvE5Anuy9LAi/AZvylOucf28DLwLt9/oPpbPZUqx8uo5p+p+IsnOKmzPdLXegt4Dc37Pq4A6s3e8zWzmcwLhTKKlRVxLd/u3pB45ObOHn0tdCwI1s1aPosxt4bHyY5XShEFC2R3Gz6+lPGNSqYA8KAquKm3PuhH54A3G5GJDriqNJNzAIYyBwbPF51jMdWT3jieJo9E/Ad8DuHlNC6k3q2b3XGe/o+H689Brg92jeqBWNuIHl8DzGTeAl0hXFjVeu61uldpDUrgIHQBfUanQ/xS9N9JIFKWdiPwAAAABJRU5ErkJggg=="},mrAp:function(i,e,n){(i.exports=n("UTlt")(!0)).push([i.i,"\n.reviewDiv[data-v-89b31af6] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  min-height: 100%;\n  background-color: #fff;\n}\n.reviewDiv .reviewListDiv[data-v-89b31af6] {\n  padding: 0 0.346667rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv[data-v-89b31af6] {\n  padding: 0.533333rem 0;\n  border-bottom: 0.013333rem solid #eee;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop[data-v-89b31af6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl[data-v-89b31af6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl .divFlFl img[data-v-89b31af6] {\n  width: 1.066667rem;\n  height: 1.066667rem;\n  border-radius: 50%;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl .divFlFr p[data-v-89b31af6] {\n  color: #61B2C2;\n  font-size: 0.373333rem;\n  line-height: 0.64rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl .divFlFr > div[data-v-89b31af6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl .divFlFr > div img[data-v-89b31af6] {\n  width: 0.266667rem;\n  height: 0.266667rem;\n  margin-right: 0.106667rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFr[data-v-89b31af6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-item-align: center;\n      align-self: center;\n  line-height: 0.533333rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFr span[data-v-89b31af6] {\n  color: #999;\n  font-size: 0.32rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody[data-v-89b31af6] {\n  margin: 0.4rem 0;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody p[data-v-89b31af6] {\n  color: #333;\n  word-wrap: break-word;\n  font-size: 0.4rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody ul[data-v-89b31af6] {\n  margin-top: 0.32rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody ul li[data-v-89b31af6] {\n  margin-right: 0.133333rem;\n  margin-bottom: 0.133333rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody ul li[data-v-89b31af6]:nth-child(3n) {\n  margin-right: 0;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody ul li img[data-v-89b31af6] {\n  width: 3.013333rem;\n  height: 3.013333rem;\n  border-radius: 0.106667rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBottom[data-v-89b31af6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBottom span[data-v-89b31af6] {\n  color: #999;\n  font-size: 0.373333rem;\n  margin-right: 0.533333rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore[data-v-89b31af6] {\n  margin-top: 0.666667rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .title[data-v-89b31af6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /*flex-direction: column;*/\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-item-align: center;\n      align-self: center;\n  line-height: 0.533333rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .title p[data-v-89b31af6] {\n  color: #61B2C2;\n  font-size: 0.373333rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .title span[data-v-89b31af6] {\n  color: #999;\n  font-size: 0.32rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content[data-v-89b31af6] {\n  margin: 0.4rem 0 0.266667rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content p[data-v-89b31af6] {\n  color: #333;\n  font-size: 0.4rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content ul[data-v-89b31af6] {\n  margin-top: 0.32rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content ul li[data-v-89b31af6] {\n  margin-right: 0.133333rem;\n  margin-bottom: 0.133333rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content ul li[data-v-89b31af6]:nth-child(3n) {\n  margin-right: 0;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content ul li img[data-v-89b31af6] {\n  width: 3.013333rem;\n  height: 3.013333rem;\n  border-radius: 0.106667rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .spec[data-v-89b31af6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0.266667rem 0;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .spec span[data-v-89b31af6] {\n  color: #999;\n  font-size: 0.373333rem;\n  margin-right: 0.533333rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMoreMore[data-v-89b31af6] {\n  position: relative;\n  width: 100%;\n  background-color: #eee;\n  padding: 0.373333rem 0.346667rem;\n  margin-top: 0.533333rem;\n  border-radius: 0.266667rem;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMoreMore[data-v-89b31af6]::after {\n  position: absolute;\n  content: '';\n  left: 0.666667rem;\n  top: -0.266667rem;\n  border-bottom: 0.266667rem solid #eee;\n  border-left: 0.266667rem solid transparent;\n  border-right: 0.266667rem solid transparent;\n}\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMoreMore span[data-v-89b31af6] {\n  color: #4c4c4c;\n  font-size: 0.373333rem;\n}\n.reviewDiv .tips[data-v-89b31af6] {\n  width: 100%;\n  font-size: 0.373333rem;\n  color: #999;\n  text-align: center;\n}\n.reviewDiv .swiperDiv[data-v-89b31af6] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: black;\n}\n.reviewDiv .swiperDiv .swiper-container[data-v-89b31af6] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.reviewDiv .swiperDiv .swiper-container .swiper-wrapper .swiper-slide img[data-v-89b31af6] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  z-index: 999;\n  width: 10rem;\n  /*height: 750px;*/\n}","",{version:3,sources:["E:/Vux/vue-pqd-wx-master20190905/src/view/detail/review.vue"],names:[],mappings:"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",file:"review.vue",sourcesContent:[".reviewDiv {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  min-height: 100%;\n  background-color: #fff;\n}\n\n.reviewDiv .reviewListDiv {\n  padding: 0 0.346667rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv {\n  padding: 0.533333rem 0;\n  border-bottom: 0.013333rem solid #eee;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl .divFlFl img {\n  width: 1.066667rem;\n  height: 1.066667rem;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl .divFlFr p {\n  color: #61B2C2;\n  font-size: 0.373333rem;\n  line-height: 0.64rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl .divFlFr > div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFl .divFlFr > div img {\n  width: 0.266667rem;\n  height: 0.266667rem;\n  margin-right: 0.106667rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFr {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-self: center;\n  line-height: 0.533333rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewTop .divFr span {\n  color: #999;\n  font-size: 0.32rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody {\n  margin: 0.4rem 0;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody p {\n  color: #333;\n  word-wrap: break-word;\n  font-size: 0.4rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody ul {\n  margin-top: 0.32rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody ul li {\n  margin-right: 0.133333rem;\n  margin-bottom: 0.133333rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody ul li:nth-child(3n) {\n  margin-right: 0;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBody ul li img {\n  width: 3.013333rem;\n  height: 3.013333rem;\n  -webkit-border-radius: 0.106667rem;\n  -moz-border-radius: 0.106667rem;\n  border-radius: 0.106667rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBottom {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewBottom span {\n  color: #999;\n  font-size: 0.373333rem;\n  margin-right: 0.533333rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore {\n  margin-top: 0.666667rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .title {\n  display: flex;\n  /*flex-direction: column;*/\n  justify-content: space-between;\n  align-items: flex-start;\n  align-self: center;\n  line-height: 0.533333rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .title p {\n  color: #61B2C2;\n  font-size: 0.373333rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .title span {\n  color: #999;\n  font-size: 0.32rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content {\n  margin: 0.4rem 0 0.266667rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content p {\n  color: #333;\n  font-size: 0.4rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content ul {\n  margin-top: 0.32rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content ul li {\n  margin-right: 0.133333rem;\n  margin-bottom: 0.133333rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content ul li:nth-child(3n) {\n  margin-right: 0;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .content ul li img {\n  width: 3.013333rem;\n  height: 3.013333rem;\n  -webkit-border-radius: 0.106667rem;\n  -moz-border-radius: 0.106667rem;\n  border-radius: 0.106667rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .spec {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0.266667rem 0;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMore .spec span {\n  color: #999;\n  font-size: 0.373333rem;\n  margin-right: 0.533333rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMoreMore {\n  position: relative;\n  width: 100%;\n  background-color: #eee;\n  padding: 0.373333rem 0.346667rem;\n  margin-top: 0.533333rem;\n  -webkit-border-radius: 0.266667rem;\n  -moz-border-radius: 0.266667rem;\n  border-radius: 0.266667rem;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMoreMore::after {\n  position: absolute;\n  content: '';\n  left: 0.666667rem;\n  top: -0.266667rem;\n  border-bottom: 0.266667rem solid #eee;\n  border-left: 0.266667rem solid transparent;\n  border-right: 0.266667rem solid transparent;\n}\n\n.reviewDiv .reviewListDiv .reviewDivDiv .reviewMoreMore span {\n  color: #4c4c4c;\n  font-size: 0.373333rem;\n}\n\n.reviewDiv .tips {\n  width: 100%;\n  font-size: 0.373333rem;\n  color: #999;\n  text-align: center;\n}\n\n.reviewDiv .swiperDiv {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: black;\n}\n\n.reviewDiv .swiperDiv .swiper-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.reviewDiv .swiperDiv .swiper-container .swiper-wrapper .swiper-slide img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  z-index: 999;\n  width: 10rem;\n  /*height: 750px;*/\n}"],sourceRoot:""}])},"w21/":function(i,e,n){var r=n("mrAp");"string"==typeof r&&(r=[[i.i,r,""]]),r.locals&&(i.exports=r.locals);n("FIqI")("069842c8",r,!1,{})},xBbg:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABwklEQVQ4T6WTv2tUQRDHv7MWioUWNpYBLRJt9O0sV3gIFpIgaH1gr0ZIoSAWQbBRbLTzZy2EVCkiiNgpFndv944gCoaApX+ACqfcu69sOI872bv3Lk458/1+dnZnVlAS3vtjAN5FWVEU52q12vY0i1QAvgRwOepIrjvnGnsGdjqduaIodgDsG0AKEZm31sZcMqZ26L1/AmB51EnyhXPu6szAVqt11BjzFcCBf8y/Acyp6rcUNNlhCOE4gIckL6VMJDcB3FLVbRHhqEaazeYRY8wFAJmInAJwGsDhsmEN6j9IfhSRLQBbvV5vQ7z3nwEsVASUyb5EYBfA/jJlxfqvCLwZ36uiYaqM5LXdoXjv42rEFfmfuK6qT4dTHkAfAyj9PYlTd2ExP2YOIVwh+XzGNpdV9dlfzxjQe38QwM9ZgN1u91C9Xv+eBIYQFkjGNaocxpiTWZYNPWMd5nneEJG1yrT4ZiINa+36pCs/AHB7FiDJ+8651SQwz/PXIrKUAL4d5M4naq9U9eKkDj8BODFieiMiq9baEHMhBEvyHoDFEU1HVbNJwBUAjwC8J3nHOfchdf12u3223+/fBXAGwA1VHX6KP5IYpOQ0Nz10AAAAAElFTkSuQmCC"}});
//# sourceMappingURL=36.ff262a69df9ed6457fd8.js.map