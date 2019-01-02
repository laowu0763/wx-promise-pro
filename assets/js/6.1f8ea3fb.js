(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"wx-pro-showtoptips-object-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-pro-showtoptips-object-this","aria-hidden":"true"}},[t._v("#")]),t._v(" wx.pro.showTopTips(OBJECT,this)")]),a("h3",{attrs:{id:"object-参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-参数说明","aria-hidden":"true"}},[t._v("#")]),t._v(" OBJECT 参数说明")]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("类型")]),a("th",[t._v("必填")]),a("th",[t._v("说明")])])]),a("tbody",[a("tr",[a("td",[t._v("content")]),a("td",[t._v("String")]),a("td",[t._v("是")]),a("td",[t._v("提示的内容")])]),a("tr",[a("td",[t._v("duration")]),a("td",[t._v("Number")]),a("td",[t._v("否")]),a("td",[t._v("提示持续的时间（默认3000ms）")])])])]),a("h3",{attrs:{id:"bug-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-tips","aria-hidden":"true"}},[t._v("#")]),t._v(" Bug & Tips")]),a("ol",[a("li",[t._v("tip：第二个参数 this 是必填的，意思是传递当前页面的 this 给组件")]),a("li",[t._v("这个方法是需要视图层配合的，如果你使用的是 "),a("code",[t._v("weui-wxss")]),t._v("，那么在页面中引入下面的代码即可：")])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("weui-toptips weui-toptips_warn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wx:")]),t._v("if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{topTips.show}}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{topTips.content}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("你如果没有使用 "),a("code",[t._v("weui-wxss")]),t._v(" 也没关系，自己定义样式，只要数据绑定正确即可。")])]),a("h3",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[t._v("#")]),t._v(" demo")]),a("p",[t._v("视图层：")]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("weui-toptips weui-toptips_warn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wx:")]),t._v("if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{topTips.show}}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{topTips.content}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("逻辑层：")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showTopTips")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入正确的手机号！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"截图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#截图","aria-hidden":"true"}},[t._v("#")]),t._v(" 截图")]),a("p",[a("img",{attrs:{src:"http://cdn.wakeuptocode.me/414889324205353169.jpg",alt:""}})])])}],!1,null,null,null);e.options.__file="showTopTips.md";s.default=e.exports}}]);