(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(24),c=n(7),a=(n(33),n(34),n(3)),s=(n(35),n(1)),i=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},l=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},o=n(4),j=n(6),d=n(5),u=n(0),b=(n(37),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})});function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=n(9),x=n.n(O),p=function(e){var t=e.person,n=Object(c.d)(),r=Object(d.a)(n,1)[0],a=t.slug,i=t.sex,l=t.name;return Object(s.jsx)(c.b,{to:{pathname:"".concat(a),search:r.toString()},className:x()({"has-text-danger":"f"===i}),children:l})},m={people:[],setPeople:function(){}},f=Object(u.createContext)(m),v=function(e){var t=e.children,n=Object(u.useState)([]),r=Object(d.a)(n,2),c=r[0],a=r[1];return Object(s.jsx)(f.Provider,{value:{people:c,setPeople:a},children:t})},g=function(e){var t=e.parentName,n=Object(u.useContext)(f).people;if(!t)return Object(s.jsx)(s.Fragment,{children:"-"});var r=n.find((function(e){return e.name===t}));return r?Object(s.jsx)(p,{person:r}):Object(s.jsx)(s.Fragment,{children:t})},N=function(e){return e.Sort="sort",e.Order="order",e.Sex="sex",e.Query="query",e.Centuries="centuries",e}({}),S=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),w=function(e){return e.Asc="asc",e.Desc="desc",e}({}),y=function(e){var t=e.people,n=Object(c.d)(),r=Object(d.a)(n,1)[0],i=Object(a.r)().slug,l=function(e){return r.get(N.Sort)===e&&!r.has(N.Order)},o=function(e){return r.get(N.Sort)===e&&r.has(N.Order)},j=function(e){var t=new URLSearchParams(r);return l(e)?(t.set(N.Order,w.Desc),t.toString()):o(e)?(t.delete(N.Order),t.delete(N.Sort),t.toString()):(t.set(N.Sort,e),t.delete(N.Order),t.toString())};return Object(s.jsx)(s.Fragment,{children:t.length?Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object.values(S).map((function(e){return Object(s.jsx)("th",{children:Object(s.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap is-capitalized",children:[e,Object(s.jsx)(c.b,{to:{search:j(e)},children:Object(s.jsx)("span",{className:"icon",children:Object(s.jsx)("i",{className:x()("fas",{"fa-sort":(t=e,r.get(N.Sort)!==t),"fa-sort-up":l(e),"fa-sort-down":o(e)})})})})]})},e);var t})),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":i===e.slug}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(p,{person:e})}),Object(s.jsx)("td",{children:e.sex}),Object(s.jsx)("td",{children:e.born}),Object(s.jsx)("td",{children:e.died}),Object(s.jsx)("td",{children:Object(s.jsx)(g,{parentName:e.motherName})}),Object(s.jsx)("td",{children:Object(s.jsx)(g,{parentName:e.fatherName})})]},e.slug)}))})]}):Object(s.jsx)("p",{children:"There are no people matching the current search criteria"})})},C=function(e){return e.All="",e.Male="m",e.Female="f",e}({}),P=function(e){return e.Sixteen="16",e.Seventeen="17",e.Eighteen="18",e.Nineteen="19",e.Twenty="20",e}({}),k=function(){var e,t=Object(c.d)(),n=Object(d.a)(t,2),r=n[0],a=n[1],i=function(e){var t=new URLSearchParams(r);if(!e)return t.delete(N.Centuries),t.toString();var n=t.getAll(N.Centuries);return n.includes(e)?(t.delete(N.Centuries),n.filter((function(t){return t!==e})).forEach((function(e){return t.append(N.Centuries,e)})),t.toString()):(t.append(N.Centuries,e),t.toString())},l=function(e,t){if(r.get(e)===t)return r.toString();var n=new URLSearchParams(r);return t?(n.set(e,t),n.toString()):(n.delete(e),n.toString())},o=r.has(N.Sex)||r.has(N.Query)||r.has(N.Centuries);return Object(s.jsxs)("nav",{className:"panel",children:[Object(s.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(s.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.entries(C).map((function(e){var t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(s.jsx)(c.b,{to:{search:l(N.Sex,a)},className:x()({"is-active":a===r.get(N.Sex)||a===C.All&&!r.has(N.Sex)}),children:n},n)}))}),Object(s.jsx)("div",{className:"panel-block",children:Object(s.jsxs)("p",{className:"control has-icons-left",children:[Object(s.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:null!==(e=r.get(N.Query))&&void 0!==e?e:"",onChange:function(e){e.preventDefault(),a(l(N.Query,e.target.value))}}),Object(s.jsx)("span",{className:"icon is-left",children:Object(s.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(s.jsx)("div",{className:"panel-block",children:Object(s.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(s.jsx)("div",{className:"level-left",children:Object.values(P).map((function(e){return Object(s.jsx)(c.b,{"data-cy":"century",className:x()("button","mr-1",{"is-info":r.getAll(N.Centuries).includes(e)}),to:{search:i(e)},children:e},e)}))}),Object(s.jsx)("div",{className:"level-right ml-4",children:Object(s.jsx)(c.b,{"data-cy":"centuryALL",className:x()("button","is-success",{"is-outlined":r.has(N.Centuries)}),to:{search:i(null)},children:"All"})})]})}),Object(s.jsx)("div",{className:"panel-block",children:Object(s.jsx)(c.b,{className:x()("button","is-link","is-fullwidth",{"is-outlined":o}),to:{search:function(){var e=new URLSearchParams(r);return e.delete(N.Centuries),e.delete(N.Query),e.delete(N.Sex),e.toString()}()},children:"Reset all filters"})})]})},L=function(){var e=Object(c.d)(),t=Object(d.a)(e,1)[0],n=Object(u.useContext)(f),r=n.people,a=n.setPeople,i=Object(u.useState)(!1),l=Object(d.a)(i,2),O=l[0],x=l[1],p=Object(u.useState)(!1),m=Object(d.a)(p,2),v=m[0],g=m[1],w=O&&!v&&!r.length,C=!O&&v&&!r.length,P=!O&&!v&&!r.length,L=!O&&!v&&!!r.length;Object(u.useEffect)((function(){return g(!1),x(!0),Object(j.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,h();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),g(!0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))(),function(){return a([])}}),[]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[L&&Object(s.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(s.jsx)(k,{})}),Object(s.jsx)("div",{className:"column",children:Object(s.jsxs)("div",{className:"box table-container",children:[w&&Object(s.jsx)(b,{}),C&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),P&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),L&&Object(s.jsx)(y,{people:function(){if(!(null===t||void 0===t?void 0:t.toString()))return r;var e=t.has(N.Order)?-1:1,n=t.get(N.Sort),c=r.slice().sort((function(t,r){switch(n){case S.Name:case S.Sex:return t[n].localeCompare(r[n])*e;case S.Born:case S.Died:return(t[n]-r[n])*e;default:return 0}})),a=t.get(N.Sex),s=t.get(N.Centuries),i=t.get(N.Query);return a||s||i?c.filter((function(e){var n=e.sex,r=e.name,c=e.fatherName,l=e.motherName,o=e.born,j=!0;s&&(j=t.getAll(N.Centuries).includes((o+100).toString().slice(0,2)));var d=!0;a&&(d=n===a);var u=!0;if(i){var b=i.trim().toLowerCase();u=r.toLowerCase().includes(b)||!(null===c||void 0===c||!c.toLowerCase().includes(b))||!(null===l||void 0===l||!l.toLowerCase().includes(b))}return j&&d&&u})):c}()})]})})]})})]})},F=function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},A=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(c.c,{className:F,to:"/",children:"Home"}),Object(s.jsx)(c.c,{className:F,to:"/people",children:"People"})]})})}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(a.b,{})})})]})},Q=function(){return Object(s.jsx)("div",{"data-cy":"app",children:Object(s.jsx)(a.e,{children:Object(s.jsxs)(a.c,{path:"/",element:Object(s.jsx)(A,{}),children:[Object(s.jsx)(a.c,{index:!0,element:Object(s.jsx)(i,{})}),Object(s.jsx)(a.c,{path:"*",element:Object(s.jsx)(l,{})}),Object(s.jsx)(a.c,{path:"people",element:Object(s.jsx)(L,{}),children:Object(s.jsx)(a.c,{path:":slug",element:Object(s.jsx)(L,{})})}),Object(s.jsx)(a.c,{path:"home",element:Object(s.jsx)(a.a,{to:"/",replace:!0})})]})})})};Object(r.createRoot)(document.getElementById("root")).render(Object(s.jsx)(v,{children:Object(s.jsx)(c.a,{children:Object(s.jsx)(Q,{})})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.9643e2eb.chunk.js.map