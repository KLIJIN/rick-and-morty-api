(this["webpackJsonprick-morty2"]=this["webpackJsonprick-morty2"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(22),s=a.n(r),i=(a(28),a(7)),o=a(3),l=(a(29),a(2)),d=a(9),j=a.n(d),u=a(12),b=a(16),O="SET_LOADING",p="SET_STORIES",h="REMOVE_STORY",x="HANDLE_PAGE",g="HANDLE_SEARCH",v="GET_SINGLE_STORY_BEGIN",f="GET_SINGLE_STORY_SUCCESS",m="GET_SINGLE_STORY_ERROR",y="GET_SINGLE_STORY_CHARS",_="LOAD_STORIES",N="UPDATE_FILTERS",S="FILTER_STORIES",E=function(e){var t=e.hits,a=e.nbPages,c=e.nextPage,n=e.prevPage;return{type:p,payload:{hits:t,nbPages:a,nextPage:c,prevPage:n}}},P=a(14),C=a(17),R=function(e,t){var a=[];switch(t.type){case _:return Object(l.a)(Object(l.a)({},e),{},{all_stories:Object(C.a)(t.payload),filtered_stories:Object(C.a)(t.payload),filters:Object(l.a)({},e.filters)});case N:var c=t.payload,n=c.name,r=c.value;return Object(l.a)(Object(l.a)({},e),{},{filters:Object(l.a)(Object(l.a)({},e.filters),{},Object(P.a)({},n,r))});case S:var s=e.all_stories;a=Object(C.a)(s);var i=e.filters.text;return a=a.filter((function(e){return e.name.toLowerCase().indexOf(i.toLowerCase())>=0})),Object(l.a)(Object(l.a)({},e),{},{filtered_stories:a});case v:return Object(l.a)(Object(l.a)({},e),{},{single_story_loading:!0,single_story_error:!1});case f:return Object(l.a)(Object(l.a)({},e),{},{single_story_loading:!1,single_story:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{single_story_loading:!1,single_story_error:!0});case y:return Object(l.a)(Object(l.a)({},e),{},{single_story:Object(l.a)(Object(l.a)({},e.single_story),{},{chars:t.payload})});default:return e}},k={isLoading:!0,hits:[],query:"",page:1,nbPages:0},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(console.log(" Episodes REDUCER ->>>",t),t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case p:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,hits:t.payload.hits,nbPages:t.payload.nbPages,nextPage:t.payload.nextPage,prevPage:t.payload.prevPage});case h:return Object(l.a)(Object(l.a)({},e),{},{hits:e.hits.filter((function(e){return e.id!==t.payload.id}))});case g:return console.log("reducer",e,t),Object(l.a)(Object(l.a)({},e),{},{query:t.payload.query,page:t.payload.page});case x:if("inc"===t.payload){var a=e.page+1;return a>e.nbPages&&(a=1),Object(l.a)(Object(l.a)({},e),{},{page:a})}if("dec"===t.payload){var c=e.page-1;return c<1&&(c=e.nbPages),Object(l.a)(Object(l.a)({},e),{},{page:c})}return Object(l.a)({},e);default:return e}},T=a(0),I={isLoading:!0,hits:[],page:1,nextPage:null,prevPage:null,nbPages:0},w=Object(c.createContext)(),G=function(e){var t=e.children,a=Object(c.useReducer)(L,I),n=Object(b.a)(a,2),r=n[0],s=n[1],i=r.page,o=function(){var e=Object(u.a)(j.a.mark((function e(t,a){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:O}),e.prev=1,e.next=4,fetch("".concat(t).concat(a));case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,s(E({hits:n.results,nbPages:n.info.pages,nextPage:n.info.next,prevPage:n.info.prev})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){o("https://rickandmortyapi.com/api/episode?page=",i)}),[r.page]);return Object(T.jsx)(w.Provider,{value:Object(l.a)(Object(l.a)({},r),{},{removeStory:function(e){s(function(e){return{type:h,payload:{id:e}}}(e))},handlePage:function(e){s(function(e){return{type:x,payload:e}}(e))}}),children:t})},D=function(){return Object(c.useContext)(w)},A={filtered_stories:[],all_stories:[],filters:{text:localStorage.getItem("text")?JSON.parse(localStorage.getItem("text")):""},single_story_loading:!1,single_story_error:!1,single_story:{}},q=n.a.createContext(),Y=function(e){var t=e.children,a=D().hits,n=Object(c.useReducer)(R,A),r=Object(b.a)(n,2),s=r[0],i=r[1];Object(c.useEffect)((function(){localStorage.setItem("text",JSON.stringify(s.filters.text)),i({type:_,payload:a})}),[a,s.filters.text]),Object(c.useEffect)((function(){i({type:S})}),[a,s.filters]);var o=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({type:v}),e.prev=1,e.next=4,fetch("".concat(t));case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,i({type:f,payload:c}),e.next=11,Promise.all(c.characters.map((function(e){return d(e)})));case 11:n=e.sent,i({type:y,payload:n}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),i({type:m});case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsx)(q.Provider,{value:Object(l.a)(Object(l.a)({},s),{},{updateFilters:function(e){var t=e.target.name,a=e.target.value;i(function(e){var t=e.name,a=e.value;return{type:N,payload:{name:t,value:a}}}({name:t,value:a}))},fetchSingleStory:o,fetchChar:d}),children:t})},F=function(){return Object(c.useContext)(q)},H=function(){var e=F(),t=e.filters.text,a=e.updateFilters;return Object(T.jsx)("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()},children:Object(T.jsx)("input",{type:"text",name:"text",className:"form-input",placeholder:"search story",value:t,onChange:a})})},B=function(){var e=F().filtered_stories;return(null===e||void 0===e?void 0:e.length)<1?Object(T.jsx)("div",{className:"loading",children:" "}):Object(T.jsx)("section",{className:"section",children:e.map((function(e){var t=e.id,a=e.name,c=e.air_date,n=e.episode,r=new Date(c),s=r.getDate();s=s<10?s="0".concat(s):s;var o=r.getMonth()+1;o=o<10?o="0".concat(o):o;var l=r.getFullYear();return Object(T.jsxs)("div",{className:"episode",children:[Object(T.jsxs)("h3",{children:[" ",a," "]}),Object(T.jsxs)("div",{children:[" \u0421\u0435\u0437\u043e\u043d: ",+"".concat(n.slice(1,3))," "]}),Object(T.jsxs)("div",{children:[" \u0421\u0435\u0440\u0438\u044f: ",+"".concat(n.slice(4,6))," "]}),Object(T.jsxs)("div",{children:[" \u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430: ","".concat(s,".").concat(o,".").concat(l)," "]}),Object(T.jsx)(i.b,{to:"/episodes/".concat(t),className:"link",children:" read more "})]},t)}))})},J=function(){var e=D(),t=e.isLoading,a=e.page,c=e.nbPages,n=e.handlePage;return Object(T.jsxs)("div",{className:"btn-container",children:[Object(T.jsx)("button",{disabled:t,onClick:function(){return n("dec")},children:" Prev "}),Object(T.jsxs)("p",{children:[" ",a," of ",c," "]}),Object(T.jsx)("button",{disabled:t,onClick:n.bind(undefined,"inc"),children:" Next "})]})},M=function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)(H,{}),Object(T.jsx)(J,{}),Object(T.jsx)(B,{})]})},U=function(){var e={display:"block",width:"100%",height:"1px",backgroundColor:"#476a2e",margin:"20px 1px"};return Object(T.jsxs)("section",{className:"section about-section",children:[Object(T.jsx)("h1",{className:"section",children:"about"}),Object(T.jsx)("span",{style:e}),Object(T.jsx)("p",{className:"section",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, delectus. Asperiores repudiandae quod architecto ea sunt voluptatem doloribus enim eaque, exercitationem voluptatum facilis iusto iste, accusantium eum officiis dignissimos tempora id suscipit ab esse quibusdam fugit, aperiam natus accusamus. Blanditiis temporibus eaque repellat sapiente, provident error! Placeat doloribus quia beatae."}),Object(T.jsx)("span",{style:e})]})};var Q=function(){var e=Object(o.f)().id,t=F(),a=t.single_story_loading,n=t.single_story,r=t.fetchSingleStory,s=n.air_date,i=n.episode,l=n.name,d=n.chars;if(Object(c.useEffect)((function(){r("".concat("https://rickandmortyapi.com/api/episode/").concat(e))}),[e]),a)return Object(T.jsx)("div",{className:"loading",children:" "});var j=new Date(s),u=j.getDate();u=u<10?u="0".concat(u):u;var b=j.getMonth()+1;b=b<10?b="0".concat(b):b;var O=j.getFullYear();return Object(T.jsxs)("section",{className:"section ",children:[Object(T.jsxs)("div",{className:"single_story",children:[Object(T.jsxs)("h3",{children:["   ",l," "]}),Object(T.jsxs)("div",{children:[" \u0421\u0435\u0437\u043e\u043d: ",+"".concat(null===i||void 0===i?void 0:i.slice(1,3))," "]}),Object(T.jsxs)("div",{children:[" \u0421\u0435\u0440\u0438\u044f: ",+"".concat(null===i||void 0===i?void 0:i.slice(4,6))," "]}),Object(T.jsxs)("div",{children:[" \u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430: ","".concat(u,".").concat(b,".").concat(O)," "]})]}),Object(T.jsxs)("div",{className:"single_story",children:[" ",Object(T.jsx)("h3",{children:" characters: "})," "]}),Object(T.jsx)("div",{className:"container",children:null===d||void 0===d?void 0:d.map((function(e){var t=e.id,a=e.name,c=e.status,n=e.species,r=e.gender,s=e.image,i=e.origin,o=e.location;return Object(T.jsxs)("div",{className:"CharacterCard",children:[Object(T.jsx)("div",{className:"CharacterCard__image",style:{backgroundImage:"url(".concat(s,")")},children:" "}),Object(T.jsxs)("div",{className:"CharacterCard__description",children:[Object(T.jsxs)("div",{children:[" Name: ",a," "]}),Object(T.jsxs)("div",{children:[" Gender: ",r," "]}),Object(T.jsxs)("div",{children:[" Species: ",n]}),Object(T.jsxs)("div",{children:[" Status: ",c]}),Object(T.jsxs)("div",{children:[" Origin: ",i.name]}),Object(T.jsxs)("div",{children:[" Location: ",o.name]})]})]},t)}))})]})},V=function(){return Object(T.jsx)("section",{className:"error-page section",children:Object(T.jsxs)("div",{className:"error-container",children:[Object(T.jsx)("h1",{children:" \u041e\u0439 \u0442\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 "}),Object(T.jsx)(i.b,{to:"/",className:"btn btn-primary",style:{marginTop:"50px"},children:" Back to Home "})]})})},z=a.p+"static/media/logo.d4800c1d.png",K=function(){return Object(T.jsx)("nav",{className:"navbar",children:Object(T.jsxs)("div",{className:"nav-center",children:[Object(T.jsx)(i.b,{to:"/",children:Object(T.jsx)("img",{src:z,alt:"logo_image",className:"logo"})}),Object(T.jsxs)("ul",{className:"nav-links",children:[Object(T.jsxs)("li",{children:[" ",Object(T.jsx)(i.b,{to:"/",children:" Home "})," "]}),Object(T.jsxs)("li",{children:[" ",Object(T.jsx)(i.b,{to:"/about",children:" About "})," "]}),Object(T.jsxs)("li",{children:[" ",Object(T.jsx)(i.b,{to:"/error",children:" Error Page "})," "]})]})]})})},W=function(){return Object(T.jsxs)(i.a,{children:[Object(T.jsx)(K,{}),Object(T.jsxs)(o.c,{children:[Object(T.jsxs)(o.a,{exact:!0,path:"/",children:[" ",Object(T.jsx)(M,{}),"  "]}),Object(T.jsx)(o.a,{exact:!0,path:"/episodes/:id",children:Object(T.jsx)(Q,{})}),Object(T.jsxs)(o.a,{path:"/about",children:[" ",Object(T.jsx)(U,{})," "]}),Object(T.jsxs)(o.a,{path:"*",children:[" ",Object(T.jsx)(V,{})," "]})]})]})};s.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(G,{children:Object(T.jsx)(Y,{children:Object(T.jsx)(W,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.af4e3ee7.chunk.js.map