(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+ZCN":function(t,e,a){},"/8Du":function(t,e,a){"use strict";a("QWBl"),a("yq1k"),a("FZtP");var s={props:{record:{},showtags:!1,pathPrefix:"",border:{type:Boolean,default:!0}},computed:{path:function(){return this.pathPrefix?this.pathPrefix+"/"+this.record.id:this.record.path},memberships:function(){var t=[],e=this.record.memberships;return e?(e.forEach((function(e){["foundation","tech","cofounders"].includes(e.title)&&t.push(e)})),t):[]}},methods:{displaytags:function(){return this.showtags},img:function(t){return t?t.src?t.src:t:""}}},r=(a("Y20Q"),a("KHd+")),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[a("g-link",{staticClass:"post-card-image-link",attrs:{to:t.path}},[a("g-image",{staticClass:"post-card-image",attrs:{src:t.img(t.record.image),alt:t.record.title}})],1),a("div",[a("g-link",{attrs:{to:t.path}},[a("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title||t.record.name))]),a("p",{staticClass:"post-card-excerpt text-gray-700"},[t._v(t._s(t.record.excerpt))]),a("section",{staticClass:"flex flex-wrap post-tags container mx-auto relative py-1"},t._l(t.memberships,(function(e){return a("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full mb-2",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)]),a("div",{staticClass:"w-full post-card-meta pt-2"},[a("div",{staticClass:"avatars"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex justify-between items-center"},[a("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.record.authors,(function(e){return a("li",{key:e.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.name,expression:"author.name"}],attrs:{to:e.path}},[a("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.img(e.image),alt:e.name}})],1)],1)})),0)]),a("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[a("p",[a("g-link",{attrs:{to:t.path}},[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])])],1),a("p",[a("g-link",{attrs:{to:t.path}},[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.startDate))])]),t._v("\n              "+t._s(t.record.status)+"\n            ")],1)])]),t.displaytags()?a("section",{staticClass:"post-tags container mx-auto relative py-3"},t._l(t.record.tags,(function(e){return a("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1):t._e()])])],1)],1)}),[],!1,null,"4af5adfa",null);e.a=n.exports},"8tYL":function(t,e,a){"use strict";a.r(e);a("QWBl"),a("yq1k"),a("DQNa"),a("07d7"),a("JTJg"),a("FZtP"),a("3bBZ");var s=a("U8pU"),r=a("/8Du"),n=a("HgpQ"),i=a("nwne"),o={data:function(){var t=(new Date).getFullYear(),e=["All Years"];return this.range(2019,t).forEach((function(t){return e.push(String(t))})),{selectedTopic:"All Topics",selectedYear:"All Years",selectedMonth:"All Months",months:["All Months","January","February","March","April","May","June","July","August","September","October","November","December"],years:e,listArchive:!1,archiveButtonText:"Archive"}},metaInfo:{title:"Blog"},components:{PostListItem:r.a,Pagination:n.a,NewsFilterHeader:i.a},methods:{setTopic:function(t){this.selectedTopic=t},setYear:function(t){this.selectedYear=t},setMonth:function(t){this.selectedMonth=t},resetAll:function(){this.selectedTopic="All Topics",this.selectedYear="All Years",this.selectedMonth="All Months"},range:function(t,e,a){var r=[],n=Object(s.a)(t),i=Object(s.a)(e);if(0===a)throw TypeError("Step cannot be zero.");if("undefined"==n||"undefined"==i)throw TypeError("Must pass start and end arguments.");if(n!=i)throw TypeError("Start and end arguments must be of same type.");if(void 0===a&&(a=1),e<t&&(a=-a),"number"==n)for(;a>0?e>=t:e<=t;)r.push(t),t+=a;else{if("string"!=n)throw TypeError("Only string and number types are supported");if(1!=t.length||1!=e.length)throw TypeError("Only strings with one character are supported.");for(t=t.charCodeAt(0),e=e.charCodeAt(0);a>0?e>=t:e<=t;)r.push(String.fromCharCode(t)),t+=a}return r}},computed:{topics:function(){var t=["All Topics"];return this.$page.topics.edges.forEach((function(e){return t.push(e.node.title)})),t},contentHeight:function(){return window.innerHeight-100},blogs:function(){var t={},e=this.$page.entries;t.totalCount=e.totalCount,t.pageInfo=e.pageInfo,t.edges=[];for(var a=0;a<e.edges.length;a++){var s=e.edges[a].node,r=["All Topics"];s.tags.forEach((function(t){return r.push(t.title)}));var n=new Date(s.datetime);if(r.includes(this.selectedTopic))if(["All Years",String(n.getFullYear())].includes(this.selectedYear))["All Months",this.months[n.getMonth()+1]].includes(this.selectedMonth)&&t.edges.push({node:s,id:s.id})}return t},baseurl:function(){return"/blog/"}}},l=a("KHd+"),c=null,u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("NewsFilterHeader",{attrs:{topics:t.topics,years:t.years,months:t.months},on:{selectedTopic:t.setTopic,selectedYear:t.setYear,selectedMonth:t.setMonth,resetAll:t.resetAll}}),a("div",{staticClass:"container sm:pxi-0 mx-auto mt-8",style:{"min-height":t.contentHeight+"px"}},[a("div",{staticClass:"flex flex-wrap news pt-12 mt-8 pb-8 mx-4 sm:-mx-4"},[t._l(t.blogs.edges,(function(t){return a("PostListItem",{key:t.node.id,attrs:{record:t.node}})})),0==t.blogs.edges.length?a("div",{staticClass:"text-center mx-auto"},[a("h2",{staticClass:"flex text-gray-700 w-3/4"},[t._v("No results")])]):t._e()],2),a("div",{staticClass:"pagination flex justify-center mb-8"},[t.blogs.pageInfo.totalPages>1&&t.blogs.edges.length>0?a("Pagination",{attrs:{baseUrl:t.baseurl,currentPage:t.blogs.pageInfo.currentPage,totalPages:t.blogs.pageInfo.totalPages,maxVisibleButtons:5}}):t._e()],1)])],1)}),[],!1,null,null,null);"function"==typeof c&&c(u);e.default=u.exports},DQNa:function(t,e,a){var s=a("busE"),r=Date.prototype,n=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&s(r,"toString",(function(){var t=i.call(this);return t==t?n.call(this):"Invalid Date"}))},HgpQ:function(t,e,a){"use strict";a("ma9I"),a("qePV");var s={props:{baseUrl:String,currentPage:Number,totalPages:Number,maxVisibleButtons:{type:Number,required:!1,default:3}},methods:{isFirstPage:function(t,e){return 1==t},isLastPage:function(t,e){return t==e},isCurrentPage:function(t,e){return t==e},nextPage:function(t,e){return"".concat(this.baseUrl,"/").concat(t+1)},previousPage:function(t,e){return 2===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t-1)}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var t=[],e=this.startPage;e<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);e+=1)t.push({name:e,isDisabled:e===this.currentPage,link:1===e?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(e)});return t}}},r=a("KHd+"),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"flex pl-0 list-none rounded my-2"},[t.isFirstPage(t.currentPage,t.totalPages)?t._e():a("li",{staticClass:"w-10 relative block text-center py-2 leading-tight bg-white border border-gray-300 text-black ml-0 mr-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:t.previousPage(t.currentPage,t.totalPages),tabindex:"-1"}},[t._v("«")])],1),t._l(t.pages,(function(e){return a("li",{key:e.name,staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black rounded hover:bg-gray-300 ml-1 mr-1",class:[t.isCurrentPage(t.currentPage,e.name)?"border-l-2 border-l-black":""]},[a("g-link",{staticClass:"page-link",attrs:{to:e.link,"aria-label":e.name,"aria-current":e.name}},[t._v(t._s(e.name))])],1)})),t.isLastPage(t.currentPage,t.totalPages)?t._e():a("li",{staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black ml-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:t.nextPage(t.currentPage,t.totalPages),tabindex:"-1"}},[t._v("»")])],1)],2)}),[],!1,null,null,null);e.a=n.exports},JeZ1:function(t,e,a){},RCOx:function(t,e,a){"use strict";a("JeZ1")},Y20Q:function(t,e,a){"use strict";a("+ZCN")},nwne:function(t,e,a){"use strict";var s={props:["topics","years","months"],data:function(){return{isOpen:!1,open:!1,active:null,listArchive:!1,topic:"All Topics",year:"All Years",month:"All Months"}},methods:{setActive:function(t){this.active=t,this.open=!this.open},setTopic:function(t){this.$emit("selectedTopic",t),this.topic=t},setYear:function(t){this.$emit("selectedYear",t),this.year=t},setMonth:function(t){this.$emit("selectedMonth",t),this.month=t},resetAll:function(){this.$emit("resetAll",!0),this.topic="All Topics",this.year="All Years",this.month="All Months"},close:function(t){this.$el.contains(t.target)||(this.open=!1)}},mounted:function(){document.addEventListener("click",this.close)},beforeDestroy:function(){document.removeEventListener("click",this.close)}},r=(a("RCOx"),a("KHd+")),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed top-16 left-0 z-50 mb-5 h-16 bg-gray-100 w-full"},[a("header",{staticClass:"flex items-center justify-between flex-wrap container mx-auto px-4 py-1 sm:px-0 transition-all transition-500"},[a("div",{staticClass:"flex items-center justify-between px-4 py-2 sm:p-0"},[a("div",{staticClass:"sm:hidden ml-auto"},[a("button",{staticClass:"block text-gray-500 focus:outline-none",attrs:{type:"button"},on:{click:function(e){t.isOpen=!t.isOpen}}},[a("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[t.isOpen?a("path",{attrs:{"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}}):t._e(),t.isOpen?t._e():a("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])]),t._m(0)]),a("div",{staticClass:"sm:block md:hidden"},[a("ul",{staticClass:"list-none inline-flex justify-center md:justify-end"},[a("li",{staticClass:"py-1 mx-5 cursor-pointer",on:{click:function(e){return t.resetAll()}}},[t._v("Reset")])])]),a("nav",{staticClass:"inline-flex md:order-2 sm:w-28 px-2 pt-2 pb-4 sm:flex sm:p-0 bg-gray-100",class:t.isOpen?"flex":"hidden"},[a("ul",{staticClass:"list-none sm:flex justify-left capitalize transition-all transition-500"},[a("li",{staticClass:"py-1 mx-5"},[a("div",{staticClass:"relative",attrs:{"x-data":"{ open: false }"}},[a("button",{staticClass:"flex flex-row items-center w-full md:w-auto md:inline md:mt-0 md:ml-4 animated-link",on:{click:function(e){return t.setActive(0)}}},[a("span",{staticClass:"capitalize"},[t._v(t._s(t.topic))]),a("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",class:{"rotate-180":0==t.active,"rotate-0":0==!t.active},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),0==t.active?a("div",{staticClass:"absolute w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30",attrs:{"x-show":"open","x-transition:enter":"transition ease-out duration-100","x-transition:enter-start":"transform opacity-0 scale-95","x-transition:enter-end":"transform opacity-100 scale-100","x-transition:leave":"transition ease-in duration-75","x-transition:leave-start":"transform opacity-100 scale-100","x-transition:leave-end":"transform opacity-0 scale-95"}},[t.open?a("div",{staticClass:"w-64 max-h-10 px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"},t._l(t.topics,(function(e){return a("a",{key:e,staticClass:"cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:function(a){if(a.target!==a.currentTarget)return null;t.setTopic(e),t.open=!1}}},[t._v(t._s(e))])})),0):t._e()]):t._e()])]),a("li",{staticClass:"py-1 mx-5"},[a("div",{staticClass:"relative",attrs:{"x-data":"{ open: false }"}},[a("button",{staticClass:"flex flex-row items-center w-full md:w-auto md:inline md:mt-0 md:ml-4 animated-link",on:{click:function(e){return t.setActive(1)}}},[a("span",{staticClass:"capitalize"},[t._v(t._s(t.year))]),a("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",class:{"rotate-180":1==t.active,"rotate-0":1==!t.active},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),1==t.active?a("div",{staticClass:"absolute w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30",attrs:{"x-show":"open","x-transition:enter":"transition ease-out duration-100","x-transition:enter-start":"transform opacity-0 scale-95","x-transition:enter-end":"transform opacity-100 scale-100","x-transition:leave":"transition ease-in duration-75","x-transition:leave-start":"transform opacity-100 scale-100","x-transition:leave-end":"transform opacity-0 scale-95"}},[t.open?a("div",{staticClass:"w-64 px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"},t._l(t.years,(function(e){return a("a",{key:e,staticClass:"cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:function(a){if(a.target!==a.currentTarget)return null;t.setYear(e),t.open=!1}}},[t._v(t._s(e))])})),0):t._e()]):t._e()])]),a("li",{staticClass:"py-1 mx-5"},[a("div",{staticClass:"relative",attrs:{"x-data":"{ open: false }"}},[a("button",{staticClass:"flex flex-row items-center w-full md:w-auto md:inline md:mt-0 md:ml-4 animated-link",on:{click:function(e){return t.setActive(2)}}},[a("span",{staticClass:"capitalize"},[t._v(t._s(t.month))]),a("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",class:{"rotate-180":2==t.active,"rotate-0":2==!t.active},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),2==t.active?a("div",{staticClass:"absolute w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30",attrs:{"x-show":"open","x-transition:enter":"transition ease-out duration-100","x-transition:enter-start":"transform opacity-0 scale-95","x-transition:enter-end":"transform opacity-100 scale-100","x-transition:leave":"transition ease-in duration-75","x-transition:leave-start":"transform opacity-100 scale-100","x-transition:leave-end":"transform opacity-0 scale-95"}},[t.open?a("div",{staticClass:"w-64 overflow-y-auto h-40 px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"},t._l(t.months,(function(e){return a("a",{key:e,staticClass:"cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",on:{click:function(a){if(a.target!==a.currentTarget)return null;t.setMonth(e),t.open=!1}}},[t._v(t._s(e))])})),0):t._e()]):t._e()])])])]),a("div",{staticClass:"hidden md:ml-auto md:inline-block md:order-last"},[a("ul",{staticClass:"list-none inline-flex justify-center md:justify-end"},[a("li",{staticClass:"py-1 mx-5 cursor-pointer",on:{click:function(e){return t.resetAll()}}},[t._v("Reset")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inline-flex items-center flex-shrink-0"},[e("span",{staticClass:"flex text-xl p-3 capitalize tracking-tight"},[this._v("filter")])])}],!1,null,"050eecf7",null);e.a=n.exports}}]);