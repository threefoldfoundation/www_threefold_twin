(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+ZCN":function(t,e,s){},"/8Du":function(t,e,s){"use strict";s("QWBl"),s("yq1k"),s("FZtP");var a={props:{record:{},showtags:!1,pathPrefix:"",border:{type:Boolean,default:!0}},computed:{path:function(){return this.pathPrefix?this.pathPrefix+"/"+this.record.id:this.record.path},memberships:function(){var t=[],e=this.record.memberships;return e?(e.forEach((function(e){["foundation","tech","cofounders"].includes(e.title)&&t.push(e)})),t):[]}},methods:{displaytags:function(){return this.showtags},img:function(t){return t?t.src?t.src:t:""}}},r=(s("Y20Q"),s("KHd+")),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[s("g-link",{staticClass:"post-card-image-link",attrs:{to:t.path}},[s("g-image",{staticClass:"post-card-image",attrs:{src:t.img(t.record.image),alt:t.record.title}})],1),s("div",[s("g-link",{attrs:{to:t.path}},[s("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title||t.record.name))]),s("p",{staticClass:"post-card-excerpt text-gray-700"},[t._v(t._s(t.record.excerpt))]),s("section",{staticClass:"flex flex-wrap post-tags container mx-auto relative py-1"},t._l(t.memberships,(function(e){return s("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full mb-2",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)]),s("div",{staticClass:"w-full post-card-meta pt-2"},[s("div",{staticClass:"avatars"},[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"flex justify-between items-center"},[s("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.record.authors,(function(e){return s("li",{key:e.id,staticClass:"author-list-item"},[s("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.name,expression:"author.name"}],attrs:{to:e.path}},[s("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.img(e.image),alt:e.name}})],1)],1)})),0)]),s("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[s("p",[s("g-link",{attrs:{to:t.path}},[s("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])])],1),s("p",[s("g-link",{attrs:{to:t.path}},[s("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.startDate))])]),t._v("\n              "+t._s(t.record.status)+"\n            ")],1)])]),t.displaytags()?s("section",{staticClass:"post-tags container mx-auto relative py-3"},t._l(t.record.tags,(function(e){return s("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1):t._e()])])],1)],1)}),[],!1,null,"4af5adfa",null);e.a=i.exports},"3q1x":function(t,e,s){"use strict";s.r(e);s("QWBl"),s("FZtP");var a=s("/8Du"),r=s("davN"),i={components:{PostListItem:a.a,TagFilterHeader:r.a},computed:{memberships:function(){var t=[{title:"All",path:"/team"}];return this.$page.allMembership.edges.forEach((function(e){return t.push({title:e.node.title,path:e.node.path})})),t}},metaInfo:function(){return{title:this.$page.membership.title}}},n=s("KHd+"),l=null,o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[t.$page.allMembership.edges.length>1?s("TagFilterHeader",{attrs:{tags:t.memberships,selected:t.$page.membership.title}}):t._e(),s("div",{staticClass:"container sm:pxi-0 mx-auto mt-8 overflow-x-hidden"},[s("div",{staticClass:"mx-4 sm:mx-0"},[s("h1",{staticClass:"pb-0 mb-0 text-5xl font-medium capitalize"},[t._v("\n        "+t._s(t.$page.membership.title)+"\n      ")]),s("p",{staticClass:"text-gray-700 text-xl"},[s("span",{staticClass:"self-center"},[t._v(t._s(t.$page.membership.belongsTo.totalCount)+" People")])])]),s("div",{staticClass:"pt-8 border-b"}),s("div",{staticClass:"flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4"},t._l(t.$page.membership.belongsTo.edges,(function(t){return s("PostListItem",{key:t.node.id,attrs:{record:t.node}})})),1)])],1)}),[],!1,null,null,null);"function"==typeof l&&l(o);e.default=o.exports},Y20Q:function(t,e,s){"use strict";s("+ZCN")},davN:function(t,e,s){"use strict";var a={props:["tags","selected"],data:function(){return{tag:"All",isOpen:!1,open:!1,active:null}},methods:{setActive:function(t){this.active=t,this.open=!this.open},close:function(t){this.$el.contains(t.target)||(this.open=!1)},resetAll:function(){this.$emit("resetAll",!0)}},mounted:function(){document.addEventListener("click",this.close)},beforeDestroy:function(){document.removeEventListener("click",this.close)}},r=(s("zokr"),s("KHd+")),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fixed top-16 left-0 z-50 mb-5 h-16 bg-gray-100 w-full"},[s("header",{staticClass:"flex items-center flex-wrap container mx-auto pt-1 pb-0 sm:px-0 transition-all transition-500"},[t._m(0),s("nav",{staticClass:"inline-flex md:order-2 px-2 pt-2 pb-4 sm:flex sm:p-0 bg-transparent"},[s("ul",{staticClass:"list-none sm:flex justify-left capitalize transition-all transition-500"},[s("li",{staticClass:"pt-2 mx-5"},[s("div",{staticClass:"relative",attrs:{"x-data":"{ open: false }"}},[s("button",{staticClass:"flex flex-row items-center w-full md:w-auto md:inline md:mt-0 md:ml-4 animated-link",on:{click:function(e){return t.setActive(0)}}},[s("span",{staticClass:"capitalize"},[t._v(t._s(t.selected))]),s("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",class:{"rotate-180":0==t.active,"rotate-0":0==!t.active},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),0==t.active?s("div",{staticClass:"absolute w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30",attrs:{"x-show":"open","x-transition:enter":"transition ease-out duration-100","x-transition:enter-start":"transform opacity-0 scale-95","x-transition:enter-end":"transform opacity-100 scale-100","x-transition:leave":"transition ease-in duration-75","x-transition:leave-start":"transform opacity-100 scale-100","x-transition:leave-end":"transform opacity-0 scale-95"}},[t.open?s("div",{staticClass:"w-64 max-h-10 px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"},t._l(t.tags,(function(e){return s("a",{key:e.path,staticClass:"cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",attrs:{href:e.path},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.open=!1}}},[t._v(t._s(e.title))])})),0):t._e()]):t._e()])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-between px-4 sm:p-0"},[e("div",{staticClass:"inline-flex items-center flex-shrink-0"},[e("span",{staticClass:"flex text-xl p-3 capitalize tracking-tight"},[this._v("filter:")])])])}],!1,null,"651cbc95",null);e.a=i.exports},xHNG:function(t,e,s){},zokr:function(t,e,s){"use strict";s("xHNG")}}]);