(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["77536938"],{"49f3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-ma-lg"},[s("div",{staticClass:"flex flex-center column "},[s("div",{staticClass:"test-subtitle2 text-weight-bolder"},[t._v("\n      "+t._s(t.footer.desk_title)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.biz_num)+" "+t._s(t.footer.com_num)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.represent)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.address)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.admin)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.copy)+"\n    ")])])])},n=[],o={name:"FooterComponent",data:function(){return{title_name:"Test",lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",studies:[],footer:{}}},methods:{goBack:function(){this.$router.go(-1)},goStudy:function(t){var e=this.studies[t],s=e.id;this.$router.push({name:"study",params:{id:s}}),console.log("bad guy studyId : ",s)}},computed:{},created:function(){},mounted:function(){this.studies=this.$p.studies,this.footer=this.$p.footer}},i=o,r=s("2877"),c=Object(r["a"])(i,a,n,!1,null,null,null);e["a"]=c.exports},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{},[s("div",{staticClass:"flex flex-center q-pa-md "},[s("q-carousel",{staticClass:"full-width",attrs:{arrows:"",animated:"",padding:!1,navigation:"",infinite:"","transition-prev":"slide-right","transition-next":"slide-left",height:"200px"},nativeOn:{click:function(e){return t.goAds(e)}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("q-carousel-slide",{attrs:{name:1,"img-src":t.img01}}),s("q-carousel-slide",{attrs:{name:2,"img-src":t.img02}}),s("q-carousel-slide",{attrs:{name:3,"img-src":t.img03}}),s("q-carousel-slide",{attrs:{name:4,"img-src":t.img04}}),s("q-carousel-slide",{attrs:{name:5,"img-src":t.img05}}),s("q-carousel-slide",{attrs:{name:6,"img-src":t.img06}})],1)],1),s("div",{},[s("q-tabs",{attrs:{dense:"",align:"justify","active-color":"red-5"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab",{attrs:{name:"company",label:""}},[s("q-item-label",[t._v("기업 / 사업아이템")]),s("q-item-label",{staticClass:"q-mb-xs",attrs:{caption:""}},[t._v("업체소개")])],1),s("q-tab",{attrs:{name:"product",label:""}},[s("q-item-label",[t._v("제품")]),s("q-item-label",{staticClass:"q-mb-xs",attrs:{caption:""}},[t._v("제품소개")])],1),s("q-tab",{attrs:{name:"trade",label:""}},[s("q-item-label",[t._v("자유거래소")]),s("q-item-label",{staticClass:"q-mb-xs",attrs:{caption:""}},[t._v("포인트거래")])],1),s("q-tab",{attrs:{name:"calculator",label:""}},[s("q-item-label",[t._v("수당계산")]),s("q-item-label",{staticClass:"q-mb-xs",attrs:{caption:""}},[t._v("설명")])],1)],1)],1),s("q-tab-panels",{staticClass:"shadow-1 rounded-borders",attrs:{animated:"",swipeable:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab-panel",{attrs:{name:"company"}},[s("company")],1),s("q-tab-panel",{attrs:{name:"product"}},[s("product")],1),s("q-tab-panel",{attrs:{name:"trade"}},[s("trade")],1),s("q-tab-panel",{attrs:{name:"calculator"}},[s("calculator")],1)],1),s("div",{},[s("mobile-footer",{staticClass:"mobile-only"}),s("desktopFooter",{staticClass:"desktop-only"})],1)],1)},n=[],o=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("c47a")),i=s.n(o),r=s("2f62"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{},[s("div",{staticClass:"flex flex-center "},[s("q-banner",{staticClass:"full-width text-white bg-red-5",attrs:{"inline-actions":""}},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",{on:{click:t.goJoin}},[s("q-item-label",[t._v("한 분야의 장인이 되고 싶으세요? 지금 등록하세요. 등록하기")])],1)],1)],1),t._l(t.persons,function(e,a){return s("q-card",{key:a,staticClass:"flex flex-center q-ma-sm ",attrs:{square:!0},on:{click:function(e){return t.goPerson(a)}}},[s("q-card-section",{staticClass:"text-center"},[s("div",{staticClass:"text-h6"},[t._v(t._s(e.name))]),s("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.org.name))])]),s("q-card-section",{staticClass:"q-ma-sm"},[s("q-img",{staticStyle:{width:"200px"},attrs:{src:e.photo,ratio:16/9}})],1),s("q-card-section",[t._v("\n        "+t._s(e.intro)+"\n      ")]),s("q-card-section",[e.opportunity?s("q-chip",{attrs:{dense:"",color:"red-5","text-color":"white",icon:"star"}},[t._v("\n          수강생 모집\n        ")]):t._e()],1)],1)})],2)])},l=[],d=s("967e"),u=s.n(d),m=(s("96cf"),s("fa84")),p=s.n(m),f={name:"SampleComponent",data:function(){return{title_name:"Test",lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",persons:[]}},methods:{goBack:function(){this.$router.go(-1)},goPerson:function(t){var e=this.persons[t],s=e.id;this.$router.push({name:"person",params:{id:s}})},goJoin:function(){var t=p()(u.a.mark(function t(){var e,s;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={},t.next=3,this.$axios.post("http://35.222.91.109:9090/test",e);case 3:s=t.sent,console.log("!!! Be ready!!!! Test Server : ",s.data.data.item),this.$q.notify({message:"준비중입니다",color:"red-5",icon:"fas fa-check-circle",timeout:800});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},computed:{},created:function(){},mounted:function(){this.persons=this.$p.persons}},h=f,g=s("2877"),v=Object(g["a"])(h,c,l,!1,null,null,null),b=v.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{},[s("div",{staticClass:"flex flex-center "},[s("q-btn",{staticClass:"full-width text-white bg-red-5",on:{click:t.goCreate}},[s("div",{},[s("div",{staticClass:"text-weight-bolder"},[t._v("좋은 제품 홍보하고 싶으신가요? ")]),s("div",{staticClass:"text-caption"},[t._v("지금 무료등록하세요")])])]),s("q-input",{staticClass:"q-mt-sm full-width",attrs:{color:"red-5",square:"",outlined:"","bottom-slots":"",label:"제품검색",dense:t.dense},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"search"},on:{click:t.goFind}})]},proxy:!0}]),model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),t._l(t.products,function(e,a){return s("q-card",{key:a,staticClass:"flex q-mb-sm full-width items-center",attrs:{square:!0},on:{click:function(e){return t.goProduct(a)}}},[s("q-card-section",{staticClass:"q-ma-sm"},[s("q-img",{staticStyle:{width:"80px"},attrs:{src:e.photo,ratio:1}})],1),s("div",{staticClass:"vertical-middle"},[s("q-card-section",{staticClass:"text-center"},[t._v("\n          "+t._s(e.org.name)+"\n        ")])],1),s("div",{staticClass:"vertical-middle"},[s("q-card-section",{staticClass:"text-center"},[s("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.name))]),s("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.thousandSeprator(e.price)))])])],1)],1)})],2)])},_=[],x=(s("6b54"),s("a481"),{name:"productComponent",data:function(){return{products:[],searchKeyword:"",dense:!1}},methods:{goBack:function(){this.$router.go(-1)},goProduct:function(t){console.log("bad guy idx : ",t);var e=this.products[t],s=e.id;this.$router.push({name:"product",params:{id:s}}),console.log("bad guy productId : ",s)},goCreate:function(){console.log("Be ready!!!!"),this.$q.notify({message:"준비중입니다",color:"red-5",icon:"fas fa-check-circle",timeout:800})},thousandSeprator:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},goFind:function(){console.log("!!! Search Keyword : ",this.searchKeyword),this.searchKeyword=""}},computed:{},created:function(){},mounted:function(){this.products=this.$p.products}}),y=x,C=Object(g["a"])(y,q,_,!1,null,null,null),w=C.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{},[s("div",{staticClass:"flex flex-center "},[s("q-btn",{staticClass:"full-width text-white bg-red-5",attrs:{square:""},on:{click:t.goCreate}},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"column text-center",attrs:{clickable:""}},[s("q-item-label",[t._v("착한 기업 홍보하고 싶으신가요? ")]),s("q-item-label",{staticClass:"text-white",attrs:{caption:""}},[t._v("지금 무료등록하세요")])],1)],1),s("q-input",{staticClass:"q-mt-sm full-width",attrs:{color:"red-5",square:"",outlined:"","bottom-slots":"",label:"기업검색",dense:t.dense},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"search"},on:{click:t.goFind}})]},proxy:!0}]),model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),t._l(t.companies,function(e,a){return s("q-card",{key:a,staticClass:"flex flex-center q-ma-sm full-width",attrs:{square:!0},on:{click:function(e){return t.goCompany(a)}}},[s("q-card-section",{staticClass:"q-mt-sm"},[s("q-img",{staticStyle:{width:"200px"},attrs:{src:e.photo,ratio:16/9}})],1),s("q-card-section",{staticClass:"text-center"},[s("div",{staticClass:"text-h6"},[t._v(t._s(e.name))]),s("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.org.name))])]),s("q-card-section",[t._v("\n        "+t._s(e.intro)+"\n      ")]),s("q-card-section",[e.like?s("q-chip",{attrs:{dense:"",color:"red-5","text-color":"white",icon:"star"}},[t._v("\n          좋아요\n        ")]):t._e()],1)],1)})],2)])},O=[],j={name:"SampleComponent",data:function(){return{title_name:"Test",lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",companies:[],searchKeyword:"",dense:!1}},watch:{searchKeyword:function(t){console.log("!!! searchKeyword : ",t)}},methods:{goBack:function(){this.$router.go(-1)},goCompany:function(t){var e=this.companies[t],s=e.id;this.$router.push({name:"company",params:{id:s}}),console.log("bad guy companyId : ",s)},goCreate:function(){console.log("Be ready!!!!"),this.$q.notify({message:"준비중입니다",color:"red-5",icon:"fas fa-check-circle",timeout:800})},goFind:function(){console.log("!!! Search Keyword : ",this.searchKeyword),this.searchKeyword=""}},computed:{},created:function(){},mounted:function(){this.companies=this.$p.companies}},$=j,S=Object(g["a"])($,k,O,!1,null,null,null),B=S.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{},[s("div",{staticClass:"flex flex-center "},[s("q-btn",{staticClass:"full-width text-white bg-red-5",on:{click:t.goDescription}},[s("div",{},[s("div",{staticClass:"text-weight-bolder"},[t._v("넥스트휴먼캐쉬란")]),s("div",{staticClass:"text-caption"},[t._v("사용법안내")])])]),s("q-btn",{staticClass:"full-width q-mt-xs q-mb-sm text-white bg-red-5",on:{click:t.goCreate}},[s("div",{},[s("div",{staticClass:"text-weight-bolder"},[t._v("대한민국의 모든 포인트가 거래가능합니다")]),s("div",{staticClass:"text-caption"},[t._v("당신도 거래해 보세요")])])]),t._l(t.trades,function(e,a){return s("q-card",{key:a,staticClass:"flex q-ma-sm full-width items-center",attrs:{square:!0},on:{click:function(e){return t.gotrade(a)}}},[s("q-card-section",{staticClass:"q-ma-sm"},[s("q-img",{staticStyle:{width:"50px"},attrs:{src:e.photo,ratio:1}})],1),s("div",{staticClass:"vertical-middle"},[s("q-card-section",{staticClass:"text-center "},[s("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.name))]),s("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.kakaoId))])])],1),s("q-card-section",[s("div",{staticClass:"text-subtitle2"},[t._v("판매량 : "+t._s(t.thousandSeprator(e.has)))]),s("div",{staticClass:"text-subtitle2"},[t._v("판매가 : "+t._s(t.thousandSeprator(e.sell)))])]),s("div",{staticClass:"vertical-middle"},[s("q-card-section",[e.opportunity?s("q-chip",{attrs:{dense:"",color:"red-5","text-color":"white",icon:""}},[t._v("\n            최저가\n          ")]):t._e()],1)],1)],1)})],2),s("q-dialog",{model:{value:t.showIntro,callback:function(e){t.showIntro=e},expression:"showIntro"}},[s("intro")],1)],1)},T=[],E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Terms of Agreement")])]),s("q-separator"),s("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},t._l(15,function(e){return s("p",{key:e},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.")])}),0),s("q-separator"),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"확인",color:"primary"},on:{click:function(t){}}})],1)],1)},K=[];function D(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function I(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?D(s,!0).forEach(function(e){i()(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):D(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var N={name:"TermsComponent",data:function(){return{}},methods:I({},Object(r["b"])("G_NAME",["setConfirm"]),{confirm:function(){this.setConfirm(!0)}}),computed:{},created:function(){},mounted:function(){console.log("# mounted ()")}},F=N,V=Object(g["a"])(F,E,K,!1,null,null,null),A=V.exports,L={name:"TradeComponent",components:{intro:A},data:function(){return{title_name:"Test",lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",trades:[],img011:"http://yun0304.cdn3.cafe24.com/img/ads06.jpg",showIntro:!1}},methods:{goBack:function(){this.$router.go(-1)},gotrade:function(t){this.$q.notify({message:"준비중입니다",color:"red-5",icon:"fas fa-check-circle",timeout:800})},goCreate:function(){var t=p()(u.a.mark(function t(){var e,s;return u.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={},t.next=3,this.$axios.post("http://35.222.91.109:9090/test",e);case 3:s=t.sent,console.log("!!! Be ready!!!! Test Server : ",s.data.data.item),this.$q.notify({message:"준비중입니다",color:"red-5",icon:"fas fa-check-circle",timeout:800});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goDescription:function(){this.showIntro=!0,console.log("!!! Go description ")},thousandSeprator:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},computed:{},created:function(){},mounted:function(){this.trades=this.$p.trade}},G=L,J=Object(g["a"])(G,P,T,!1,null,null,null),M=J.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{},[s("div",{staticClass:"flex flex-center "},[s("div",{staticClass:"full-width"},[s("q-stepper",{ref:"stepper",staticClass:"bg-grey-10",attrs:{dark:"","active-color":"deep-orange","done-color":"secondary",animated:"",vertical:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("q-step",{attrs:{name:1,title:"비회원",icon:"settings",done:t.step>1}},[t._v("\n          일반 판매 가격으로 좋은 제품을 구매한다.\n          그러나 회원이 돼서 제품을 구매하면 할인된 가격으로 좋은 제품을 사용함과 동시에 수익도 발생한다.\n          "),s("q-stepper-navigation",[s("q-btn",{attrs:{color:"deep-orange",label:"Next"},on:{click:function(e){t.step=2}}})],1)],1),s("q-step",{attrs:{name:2,title:"실버(Silver)",caption:"Optional",icon:"create_new_folder",done:t.step>2}},[t._v("\n          첫구매 50 BV  누적 100 BV\n          "),s("q-stepper-navigation",[s("q-btn",{attrs:{color:"deep-orange",label:"Next"},on:{click:function(e){t.step=3}}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"deep-orange",label:"Back"},on:{click:function(e){t.step=1}}})],1)],1),s("q-step",{attrs:{name:3,title:"골드(Gold)",icon:"add_comment",done:t.step>3}},[t._v("\n          첫구매 300 BV  누적 400 BV\n          "),s("q-stepper-navigation",[s("q-btn",{attrs:{color:"deep-orange",label:"Next"},on:{click:function(e){t.step=4}}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"deep-orange",label:"Back"},on:{click:function(e){t.step=2}}})],1)],1),s("q-step",{attrs:{name:4,title:"플래티넘(Platinum)",icon:"add_comment",done:t.step>4}},[t._v("\n          첫구매 600 BV  누적 800 BV\n          "),s("q-stepper-navigation",[s("q-btn",{attrs:{color:"deep-orange",label:"Next"},on:{click:function(e){t.step=5}}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"deep-orange",label:"Back"},on:{click:function(e){t.step=3}}})],1)],1),s("q-step",{attrs:{name:5,title:"다이아몬드(Diamond)",icon:"add_comment"}},[t._v("\n          첫구매 900 BV  누적 1200 BV\n          "),s("q-stepper-navigation",[s("q-btn",{attrs:{flat:"",color:"deep-orange",label:"Back"},on:{click:function(e){t.step=4}}})],1)],1)],1)],1)])])},R=[],H={name:"calculatorComponent",data:function(){return{title_name:"Test",step:1}},methods:{goBack:function(){this.$router.go(-1)}},computed:{},created:function(){},mounted:function(){}},Q=H,U=Object(g["a"])(Q,z,R,!1,null,null,null),W=U.exports,X=s("d35b"),Y=s("49f3");function Z(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function tt(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?Z(s,!0).forEach(function(e){i()(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Z(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var et={name:"PageIndex",components:{person:b,product:w,company:B,trade:M,calculator:W,mobileFooter:X["a"],desktopFooter:Y["a"]},data:function(){return{slide:1,tab:"company",img01:"http://yun0304.cdn3.cafe24.com/img/ads01.jpg",img02:"http://yun0304.cdn3.cafe24.com/img/ads02.png",img03:"http://yun0304.cdn3.cafe24.com/img/ads03.jpg",img04:"http://yun0304.cdn3.cafe24.com/img/ads04.jpg",img05:"http://yun0304.cdn3.cafe24.com/img/ads05.jpg",img06:"http://yun0304.cdn3.cafe24.com/img/ads06.jpg"}},watch:{tab:function(t){this.setTab(t),window.scrollTo(0,0),console.log("!!! Tab val : ",t)}},methods:tt({},Object(r["b"])("G_NAME",["setTab"]),{getTab:function(t){console.log("### getTab : ",t)},goAds:function(){this.$q.notify({color:"red-5",textColor:"white",icon:"fas fa-exclamation-triangle",timeout:800,message:"광고 링크 준비중"})}}),mounted:function(){var t=this.currentTab;null!=t&&(this.tab=t),console.log("!!! cuttentTab : ",t)},computed:tt({},Object(r["c"])("G_NAME",["currentTab"]))},st=et,at=Object(g["a"])(st,a,n,!1,null,null,null);e["default"]=at.exports},d35b:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-ma-lg"},[s("div",{staticClass:"flex flex-center column "},[s("div",{staticClass:"test-subtitle2 text-weight-bolder"},[t._v("\n      "+t._s(t.footer.mobile_title)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.biz_num)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.com_num)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.represent)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.address)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.admin)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.footer.copy)+"\n    ")])])])},n=[],o={name:"FooterComponent",data:function(){return{title_name:"Test",lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",studies:[],footer:{}}},methods:{goBack:function(){this.$router.go(-1)},goStudy:function(t){var e=this.studies[t],s=e.id;this.$router.push({name:"study",params:{id:s}}),console.log("bad guy studyId : ",s)}},computed:{},created:function(){},mounted:function(){this.studies=this.$p.studies,this.footer=this.$p.footer}},i=o,r=s("2877"),c=Object(r["a"])(i,a,n,!1,null,null,null);e["a"]=c.exports}}]);