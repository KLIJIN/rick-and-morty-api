(this["webpackJsonprick-morty2"]=this["webpackJsonprick-morty2"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),s=a.n(r),i=(a(28),a(9)),o=a(3),l=(a(29),a(2)),j=a(15),d="SET_LOADING",u="SET_STORIES",b="REMOVE_STORY",O="HANDLE_PAGE",p="HANDLE_SEARCH",f="GET_SINGLE_STORY_BEGIN",g="GET_SINGLE_STORY_SUCCESS",h="GET_SINGLE_STORY_ERROR",x="LOAD_STORIES",v="UPDATE_FILTERS",y="FILTER_STORIES",_=function(e){var t=e.hits,a=e.nbPages,n=e.nextPage,c=e.prevPage;return{type:u,payload:{hits:t,nbPages:a,nextPage:n,prevPage:c}}},m=a(13),E=a(16),S=function(e,t){var a=[];switch(t.type){case x:return Object(l.a)(Object(l.a)({},e),{},{all_stories:Object(E.a)(t.payload),filtered_stories:Object(E.a)(t.payload),filters:Object(l.a)({},e.filters)});case v:var n=t.payload,c=n.name,r=n.value;return Object(l.a)(Object(l.a)({},e),{},{filters:Object(l.a)(Object(l.a)({},e.filters),{},Object(m.a)({},c,r))});case y:var s=e.all_stories;a=Object(E.a)(s);var i=e.filters.text;return a=a.filter((function(e){return e.name.toLowerCase().indexOf(i.toLowerCase())>=0})),Object(l.a)(Object(l.a)({},e),{},{filtered_stories:a});case"CLEAR_FILTERS":return console.log("filter_reducer CLEAR_FILTERS"),Object(l.a)(Object(l.a)({},e),{},{filters:Object(l.a)(Object(l.a)({},e.filters),{},{text:""})});default:return e}},P=a(12),R=a.n(P),L=a(19),N={isLoading:!0,hits:[],query:"",page:1,nbPages:0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(console.log(" Episodes REDUCER ->>>",t),t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case u:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,hits:t.payload.hits,nbPages:t.payload.nbPages,nextPage:t.payload.nextPage,prevPage:t.payload.prevPage});case b:return Object(l.a)(Object(l.a)({},e),{},{hits:e.hits.filter((function(e){return e.id!==t.payload.id}))});case p:return console.log("reducer",e,t),Object(l.a)(Object(l.a)({},e),{},{query:t.payload.query,page:t.payload.page});case O:if("inc"===t.payload){var a=e.page+1;return a>e.nbPages&&(a=1),Object(l.a)(Object(l.a)({},e),{},{page:a})}if("dec"===t.payload){var n=e.page-1;return n<1&&(n=e.nbPages),Object(l.a)(Object(l.a)({},e),{},{page:n})}case f:return Object(l.a)(Object(l.a)({},e),{},{single_story_loading:!0,single_story_error:!1});case g:return Object(l.a)(Object(l.a)({},e),{},{single_story_loading:!1,single_story:t.payload});case h:return Object(l.a)(Object(l.a)({},e),{},{single_story_loading:!1,single_story_error:!0})}},I=a(1),C={isLoading:!0,hits:[],page:1,nextPage:null,prevPage:null,nbPages:0,single_story_loading:!1,single_story_error:!1,single_story:{}},k=Object(n.createContext)(),w=function(e){var t=e.children,a=Object(n.useReducer)(T,C),c=Object(j.a)(a,2),r=c[0],s=c[1],i=r.page,o=function(){var e=Object(L.a)(R.a.mark((function e(t,a){var n,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:d}),e.prev=1,e.next=4,fetch("".concat(t).concat(a));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,s(_({hits:c.results,nbPages:c.info.pages,nextPage:c.info.next,prevPage:c.info.prev})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){o("https://rickandmortyapi.com/api/episode?page=",i)}),[r.page]);var u=function(){var e=Object(L.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:f}),e.prev=1,e.next=4,fetch("".concat(t));case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log("EpisodesProvider SINGLE STORY--\x3e",n),s({type:g,payload:n}),s(_({hits:n.results,nbPages:n.info.pages})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),s({type:h});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(k.Provider,{value:Object(l.a)(Object(l.a)({},r),{},{removeStory:function(e){s(function(e){return{type:b,payload:{id:e}}}(e))},handlePage:function(e){s(function(e){return{type:O,payload:e}}(e))},fetchSingleStory:u}),children:t})},D=function(){return Object(n.useContext)(k)},G={filtered_stories:[],all_stories:[],filters:{text:localStorage.getItem("text")?JSON.parse(localStorage.getItem("text")):""}},A=c.a.createContext(),F=function(e){var t=e.children,a=D().hits,c=Object(n.useReducer)(S,G),r=Object(j.a)(c,2),s=r[0],i=r[1];Object(n.useEffect)((function(){localStorage.setItem("text",JSON.stringify(s.filters.text)),i({type:x,payload:a})}),[a,s.filters.text]),Object(n.useEffect)((function(){i({type:y})}),[a,s.filters]);return Object(I.jsx)(A.Provider,{value:Object(l.a)(Object(l.a)({},s),{},{updateFilters:function(e){var t=e.target.name,a=e.target.value;i(function(e){var t=e.name,a=e.value;return{type:v,payload:{name:t,value:a}}}({name:t,value:a}))}}),children:t})},Y=function(){return Object(n.useContext)(A)},J=function(){var e=Y(),t=e.filters.text,a=e.updateFilters;return Object(I.jsxs)("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()},children:[Object(I.jsx)("h2",{children:"search story"}),Object(I.jsx)("input",{type:"text",name:"text",className:"form-input",placeholder:"\u043f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u044d\u043f\u0438\u0437\u043e\u0434\u0430",value:t,onChange:a})]})},M=function(){var e=Y().filtered_stories;return(null===e||void 0===e?void 0:e.length)<1?Object(I.jsx)("div",{className:"loading",children:" "}):Object(I.jsx)("section",{className:"section",children:e.map((function(e){var t=e.id,a=e.name,n=e.air_date,c=e.episode,r=new Date(n),s=r.getDate();s=s<10?s="0".concat(s):s;var o=r.getMonth()+1;o=o<10?o="0".concat(o):o;var l=r.getFullYear();return Object(I.jsxs)("div",{children:[Object(I.jsxs)("h3",{children:[" ",a," "]}),Object(I.jsxs)("div",{children:[" \u0421\u0435\u0437\u043e\u043d: ",+"".concat(c.slice(1,3))," "]}),Object(I.jsxs)("div",{children:[" \u0421\u0435\u0440\u0438\u044f: ",+"".concat(c.slice(4,6))," "]}),Object(I.jsxs)("div",{children:[" \u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430: ","".concat(s,".").concat(o,".").concat(l)," "]}),Object(I.jsx)(i.b,{to:"/episodes/".concat(t),className:"link",children:" read more "})]},t)}))})},q=function(){var e=D(),t=e.isLoading,a=e.page,n=e.nbPages,c=e.handlePage;return Object(I.jsxs)("div",{className:"btn-container",children:[Object(I.jsx)("button",{disabled:t,onClick:function(){return c("dec")},children:" \u041d\u0430\u0437\u0430\u0434 "}),Object(I.jsxs)("p",{children:[" ",a," of ",n," "]}),Object(I.jsx)("button",{disabled:t,onClick:c.bind(undefined,"inc"),children:" \u0414\u0430\u043b\u0435\u0435 "})]})},H=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(J,{}),Object(I.jsx)(q,{}),Object(I.jsx)(M,{})]})};var U=function(){var e=Object(o.f)().id,t=D(),a=t.single_story_loading,c=t.single_story,r=t.fetchSingleStory,s=c.air_date,i=c.episode,l=c.name;if(Object(n.useEffect)((function(){r("".concat("https://rickandmortyapi.com/api/episode/").concat(e))}),[e]),a)return Object(I.jsx)("div",{className:"loading",children:" "});var j=new Date(s),d=j.getDate();d=d<10?d="0".concat(d):d;var u=j.getMonth()+1;u=u<10?u="0".concat(u):u;var b=j.getFullYear();return i?Object(I.jsxs)("section",{className:"section",children:[Object(I.jsxs)("h3",{children:[" \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u042d\u043f\u0438\u0437\u043e\u0434\u0430: ",l," "]}),Object(I.jsxs)("div",{children:[" \u0421\u0435\u0437\u043e\u043d: ",+"".concat(i.slice(1,3))," "]}),Object(I.jsxs)("div",{children:[" \u0421\u0435\u0440\u0438\u044f: ",+"".concat(i.slice(4,6))," "]}),Object(I.jsxs)("div",{children:[" \u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430: ","".concat(d,".").concat(u,".").concat(b)," "]})]}):Object(I.jsx)("section",{className:"section"})},B=function(){return Object(I.jsx)(i.a,{children:Object(I.jsxs)(o.c,{children:[Object(I.jsxs)(o.a,{exact:!0,path:"/",children:[" ",Object(I.jsx)(H,{}),"  "]}),Object(I.jsx)(o.a,{exact:!0,path:"/episodes/:id",children:Object(I.jsx)(U,{})})]})})};s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(w,{children:Object(I.jsx)(F,{children:Object(I.jsx)(B,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d8555034.chunk.js.map