(window["webpackJsonpbreaking-bad-samba"]=window["webpackJsonpbreaking-bad-samba"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),o=a.n(c),s=(a(62),a(11)),l=a(17),i=a(56),u=a(45),m=a(12),E=Object(m.b)(),p=a(21),d=a(24),h=a(50);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f={REQUEST_SEARCH:"character/REQUEST_SEARCH",SUCCESS:"character/SUCCESS_REQUEST",FAILURE:"character/FAILURE_REQUEST",RESET_SEARCH_LIST:"character/RESET_SEARCH_LIST",REQUEST_LIST:"character/REQUEST_LIST",ADD_SEARCH_LIST:"character/ADD_SEARCH_LIST"},S={data:{},loading:!1,error:null,searchTerm:null,searchResults:[]};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.REQUEST_LIST:return g({},e,{loading:!0});case f.REQUEST_SEARCH:return g({},e,{loading:!0,searchTerm:t.payload.name});case f.SUCCESS:return{data:t.payload,loading:!1,error:!1};case f.FAILURE:return{data:[],loading:!1,error:!0};case f.RESET_SEARCH_LIST:return g({},e,{searchResults:[]});case f.ADD_SEARCH_LIST:return g({},e,{searchResults:[].concat(Object(d.a)(e.searchResults),Object(d.a)(t.payload))});default:return e}}var O=function(e){return{type:f.REQUEST_SEARCH,payload:{name:e}}},j=function(e){return{type:f.REQUEST_LIST,payload:{page:e}}},R=function(e){return Object(l.c)({router:Object(p.b)(e),character:y})},v=a(18),w=a.n(v),k=a(52),x=a.n(k).a.create({baseURL:"https://www.breakingbadapi.com/api/",headers:{"Content-Type":"application/json"}}),_=a(7),C=a(8),T=w.a.mark(H),A=w.a.mark(P),U=w.a.mark(Q),I=a(44),L=8;function N(e){return x.get("characters?limit=".concat(L,"&offset=").concat(e.payload.page*L))}function D(e){return x.get("characters?name=".concat(e))}function H(e){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.c)({type:f.RESET_SEARCH_LIST});case 2:return t.next=4,Object(_.c)(Object(C.d)("/search"));case 4:return t.next=6,Object(_.a)(I.map(function(t){return-1===t.indexOf(e.payload.name.toLowerCase())||Object(_.b)(P,t)}));case 6:case"end":return t.stop()}},T)}function P(e){var t,a;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.replace(/\s+/g,"+"),n.next=4,Object(_.b)(D,t);case 4:if(!(a=n.sent)||!a.data||200!==a.status){n.next=10;break}return n.next=8,Object(_.c)({type:f.ADD_SEARCH_LIST,payload:a.data});case 8:n.next=12;break;case 10:return n.next=12,Object(_.c)({type:f.FAILURE,error:{message:""}});case 12:n.next=19;break;case 14:return n.prev=14,n.t0=n.catch(0),console.log("ERROR",n.t0),n.next=19,Object(_.c)({type:f.FAILURE,error:{message:""}});case 19:case"end":return n.stop()}},A,null,[[0,14]])}function Q(e){var t;return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_.b)(N,e);case 3:if(!(t=a.sent)||!t.data||200!==t.status){a.next=9;break}return a.next=7,Object(_.c)({type:f.SUCCESS,payload:t.data});case 7:a.next=11;break;case 9:return a.next=11,Object(_.c)({type:f.FAILURE,error:{message:""}});case 11:a.next=18;break;case 13:return a.prev=13,a.t0=a.catch(0),console.log("ERROR",a.t0),a.next=18,Object(_.c)({type:f.FAILURE,error:{message:""}});case 18:case"end":return a.stop()}},U,null,[[0,13]])}var F=[Object(_.d)(f.REQUEST_LIST,Q),Object(_.d)(f.REQUEST_SEARCH,H)],B=w.a.mark(z);function z(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)(Object(d.a)(F));case 2:case"end":return e.stop()}},B)}var q=Object(i.a)(),J=Object(u.a)(E),M=Object(l.e)(R(E),Object(l.d)(Object(l.a)(J,q)));q.run(z);var V=M,W=a(15),K=(a(86),a(53)),$=function(e){var t=e.item,a=t.img,n={};return n="Presumed dead"===t.status?{class:"tag tag-status__rip",text:"Morto*"}:"Deceased"===t.status?{class:"tag tag-status__rip",text:"Morto"}:"Alive"===t.status?{class:"tag tag-status__alive",text:"Vivo"}:{class:"tag tag-status__unk",text:"Desconhecido"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:n.class},n.text),r.a.createElement("img",{src:a,alt:t.name}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.name),r.a.createElement("div",{className:"birth"},r.a.createElement(K.a,{className:"iconBirth"}),r.a.createElement("span",null,t.birthday)),r.a.createElement("p",{className:"desc"},t.occupation.join(", "))))},G=a(28),X=(a(87),a(44)),Y=function(){for(var e=Object(s.d)(),t=Object(n.useState)(0),a=Object(G.a)(t,2),c=a[0],o=a[1],l=[],i=0;i<=Math.ceil((X.length-1)/8);i++)l.push(i);return r.a.createElement("div",{className:"pagination"},l.map(function(t){return r.a.createElement("a",{key:t,href:"#",onClick:function(a){return function(t,a){t.preventDefault(),o(a),e(j(a))}(a,t)},className:c===t?"active":""},t+1)}))},Z=(a(88),a(9)),ee=function(){var e=Object(s.e)(function(e){return e.character.data}),t=Object(s.d)(),a=function(){t(j(0))};return Object(n.useEffect)(function(){a()},[]),r.a.createElement(Z.Container,null,r.a.createElement(Z.Row,null,r.a.createElement(Z.Col,null,r.a.createElement("h1",{className:"titleHome"},"Personagens"))),r.a.createElement(Z.Row,null,r.a.createElement(r.a.Fragment,null,e&&e.length&&e.map(function(e,t){return r.a.createElement(Z.Col,{xs:12,sm:6,md:6,lg:3,key:t},r.a.createElement($,{key:t,item:e,className:"cardItem"}))}))),r.a.createElement(Z.Row,{className:"containerPagination"},r.a.createElement(Z.Col,null,r.a.createElement(Y,null))))},te=(a(99),function(){var e=Object(s.e)(function(e){return e.character.searchResults}),t=Object(s.e)(function(e){return e.character.searchTerm});return r.a.createElement(Z.Container,null,r.a.createElement(Z.Row,null,r.a.createElement("h1",{className:"titleSearch"},'Voc\xea pesquisou por "',t,'"')),r.a.createElement(Z.Row,null,e&&e.length&&e.map(function(e,t){return r.a.createElement(Z.Col,{xs:12,sm:6,md:6,lg:3,key:t,style:{margin:"15px 0px"}},r.a.createElement($,{key:t,item:e,className:"cardItem"}))})))}),ae=a(54),ne=a.n(ae),re=a(55),ce=a(30),oe=(a(100),function(){var e=Object(s.d)(),t=function(){o&&o.length>=3&&e(O(o))},a=Object(n.useState)(""),c=Object(G.a)(a,2),o=c[0],l=c[1];return r.a.createElement("header",{className:"header"},r.a.createElement(Z.Container,null,r.a.createElement(Z.Row,{className:"containerHeader"},r.a.createElement(ce.a,{to:"/"},r.a.createElement("img",{src:ne.a,alt:"Breaking Bad Logo",height:"60"})),r.a.createElement("div",{className:"searchContainer"},r.a.createElement("input",{type:"text",placeholder:"Pesquise os personagens",className:"inputSearch",onChange:function(e){return l(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(l(e.target.value),t())}}),r.a.createElement("button",{className:"buttonSearch",onClick:t},r.a.createElement(re.a,null))))))}),se=function(){return r.a.createElement(p.a,{history:E},r.a.createElement(oe,null),r.a.createElement(W.c,null,r.a.createElement(W.a,{exact:!0,path:"/",component:ee}),r.a.createElement(W.a,{path:"/search",component:te})))},le=(a(101),function(){return r.a.createElement(s.a,{store:V},r.a.createElement("div",{className:"App"},r.a.createElement(se,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e){e.exports=JSON.parse('["walter white","jesse pinkman","skyler white","walter white jr.","henry schrader","marie schrader","mike ehrmantraut","saul goodman","gustavo fring","hector salamanca","domingo molina","tuco salamanca","marco & leonel salamanca","lydia rodarte-quayle","todd alquist","jane margolis","skinny pete","brandon mayhew","huell babineaux","steven gomez","theodore beneke","gale boetticher","andrea cantillo","brock cantillo","carmen molina","gretchen schwartz","elliot schwartz","gonzo","christian ortgea","mrs. pinkman","adam pinkman","jake pinkman","no-doze","emilio koyama","dr. delcavoli","wendy s.","bogdan wolynetz","ken","holly white","george merkert","donald margolis","clovis","sac ramey","victor","tom\xe1s cantillo","francesca liddy","cynthia","tortuga","tim roberts","juan bolsa","group leader","kaylee ehrmantraut","pamela","duane chow","stacey ehrmantraut","officer saxton","jack welker"]')},54:function(e,t,a){e.exports=a.p+"static/media/Breaking_Bad_logo.427a4adc.svg"},57:function(e,t,a){e.exports=a(102)},62:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},99:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.95af1c9b.chunk.js.map