(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a0930004"],{a671:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-red-5",attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:t.goBack}},[a("q-icon",{attrs:{name:"keyboard_arrow_left"}})],1),a("q-toolbar-title",[t._v("\n        "+t._s(t.title)+"\n      ")])],1)],1),a("q-page-container",{},[a("q-page",{},[a("div",{staticClass:"flex flex-center q-pa-md text-subtitle2 text-weight-bolder"},[t._v("\n        "+t._s(t.company.name)+"\n      ")]),a("div",{staticClass:"flex flex-center column q-mb-lg"},[""!=t.company.url?a("q-btn",{staticClass:"flex flex-center",attrs:{type:"a",target:"_blank",href:t.company.url}},[a("div",{staticClass:"flex flex-center q-pa-md"},[a("q-item-label",[t._v("홈페이지 바로가기")])],1)]):t._e()],1),a("div",{staticClass:"q-pa-md q-gutter-md flex flex-center column"},[a("div",{staticClass:"q-ml-sm",on:{click:t.goLab}},[t._v("\n          "+t._s(t.company.org.name)+"\n        ")]),a("div",{staticClass:"q-ml-sm"},[t._v("\n          등급 :  실버 > 골드 > 플레티넘 > 다이아몬드\n        ")]),a("div",{staticClass:"q-ml-sm"},[t._v("\n          보상 :  직급수당 / 추천수당 / 1년유지수당 / 6개월 무실적 out\n        ")])]),a("div",{staticClass:"q-pa-md q-gutter-md flex flex-center"},[a("q-list",{staticClass:"rounded-borders",staticStyle:{"max-width":"350px"},attrs:{bordered:""}},[a("q-item-label",{attrs:{header:""}},[t._v("댓글")]),a("q-item",[a("q-input",{staticClass:"q-mt-sm full-width",attrs:{color:"red-5",square:"",outlined:"","bottom-slots":"",label:"댓글"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"send"},on:{click:t.submit}})]},proxy:!0}]),model:{value:t.inputWord,callback:function(e){t.inputWord=e},expression:"inputWord"}})],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar2.jpg"}})])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("상품이 좋나요?")]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[a("span",{staticClass:"text-weight-bold"},[t._v("담당자")]),t._v("\n                -- 본 제품은 품질이 매우 우수하여 재구매율이 높은 제품입니다. 믿고 쓰셔도 됩니다.\n              ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[t._v("\n              1 min ago\n            ")])],1),a("q-separator",{attrs:{inset:"item"}}),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar4.jpg"}})])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("회원 등급은 잘 올라가나요?")]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[a("span",{staticClass:"text-weight-bold"},[t._v("담당자")]),t._v("\n                -- 저희는 회원들에게 균등한 기회를 주기위한 상한선을 낮게 해 놓았기때문에 쉽게 등업이 됩니다.\n              ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[t._v("\n              10 min ago\n            ")])],1)],1)],1)])],1)],1)},r=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),o=a.n(i),s=a("2f62"),l=a("b06b");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){o()(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var d={name:"CompanyPage",data:function(){return{title:"기업정보",companies:null,company:{org:{name:null}},inputWord:""}},methods:p({openURL:l["a"]},Object(s["b"])("G_NAME",["setBack"]),{goLab:function(){var t=this.company.org.id;this.$router.push({name:"lab",params:{id:t}}),this.setBack({name:"person",id:this.company.id})},goBack:function(){this.$router.go(-1)},submit:function(){console.log("!!! Submit : ",this.inputWord),this.inputWord=""}}),mounted:function(){var t=this,e=this.$route.params.id;if(console.log("### Mounted companyId : ",e),void 0===e){var a=this.backbtnParmas.id;console.log("!!! if..... newId :",a),e=a}this.companies=this.$p.companies;var n=this.$p.companies;n.filter(function(a,n){a.id==e&&(t.company=a)});console.log("### Mounted labId : ",e)},computed:p({},Object(s["c"])("G_NAME",["backbtnParmas"]))},m=d,u=a("2877"),v=Object(u["a"])(m,n,r,!1,null,null,null);e["default"]=v.exports},b06b:function(t,e,a){"use strict";var n=a("0967"),r=a("2b0e");e["a"]=function(t,e){var a=window.open;if(!0===n["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==r["a"].prototype.$q.electron)return r["a"].prototype.$q.electron.shell.openExternal(t);var i=a(t,"_blank");if(i)return i.focus(),i;e&&e()}}}]);