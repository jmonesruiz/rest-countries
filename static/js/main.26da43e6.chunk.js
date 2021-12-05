(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(17),i=t.n(n),r=t(15),l=t.n(r),o=t(24),u=t(13),d=t(6),j=t(28),b=t(33),h=(t(48),t(2));var m=function(e){return Object(h.jsxs)("label",{className:"theme-switch",htmlFor:"theme-switch",children:[Object(h.jsx)("input",{type:"checkbox",className:"theme-switch__checkbox",name:"theme-switch",id:"theme-switch",checked:e.darkTheme,onChange:function(a){e.setDarkTheme(a.target.checked)}}),Object(h.jsxs)("div",{className:"theme-switch__label",children:[e.darkTheme?Object(h.jsx)(b.a,{className:"theme-switch__icon"}):Object(h.jsx)(b.b,{className:"theme-switch__icon"}),Object(h.jsx)("p",{className:"theme-switch__text",children:"Dark Mode"})]})]})};t(50);var _=function(e){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{className:"header__title",children:"Where in the world?"}),Object(h.jsx)(m,{darkTheme:e.darkTheme,setDarkTheme:e.setDarkTheme})]})},O=t(23),x=t(39);t(51);var f=function(e){return Object(h.jsxs)("label",{className:"search-bar",htmlFor:"search-bar",children:[Object(h.jsx)(x.a,{className:"search-bar__icon"}),Object(h.jsx)("input",{id:"search-bar",className:"search-bar__input",type:"text",value:e.value,onChange:function(a){e.onChange(a.target.value)},placeholder:"Search for a country..."})]})},v=(t(52),t(42));var p=function(e){return Object(h.jsx)(v.a,{className:"rs",classNamePrefix:"rs",isSearchable:!1,isClearable:!0,placeholder:"Filter by Region",options:[{value:"Africa",label:"Africa"},{value:"Americas",label:"America"},{value:"Asia",label:"Asia"},{value:"Europe",label:"Europe"},{value:"Oceania",label:"Oceania"}],value:e.value,onChange:function(a){e.onChange(a)}})},N=t(11);t(68);var g=function(e){var a=e.country;return Object(h.jsx)("li",{className:"country-item",children:Object(h.jsxs)(N.b,{className:"country",to:"/details/".concat(e.id),children:[Object(h.jsx)("div",{className:"country__flag-container",children:Object(h.jsx)("img",{className:"country__flag",src:a.flag,alt:"".concat(e.id," flag'")})}),Object(h.jsxs)("div",{className:"country__info",children:[Object(h.jsx)("h2",{className:"country__name",children:a.name}),Object(h.jsxs)("div",{className:"country__info-item",children:[Object(h.jsx)("h3",{className:"country__label",children:"Population: "}),Object(h.jsx)("p",{className:"country__value",children:a.population.toLocaleString("en-US")})]}),Object(h.jsxs)("div",{className:"country__info-item",children:[Object(h.jsx)("h3",{className:"country__label",children:"Region: "}),Object(h.jsx)("p",{className:"country__value",children:a.region})]}),Object(h.jsxs)("div",{className:"country__info-item",children:[Object(h.jsx)("h3",{className:"country__label",children:"Capital: "}),Object(h.jsx)("p",{className:"country__value",children:a.capital})]})]})]})})};t(73);var y=function(e){return Object(h.jsx)("ul",{className:"country-list",children:Object(O.a)(e.countries).map((function(e){return Object(h.jsx)(g,{id:e[0],country:e[1]},e[0])}))})};t(74);function L(e,a){return"SEARCH"===a.type?{search:a.value,filter:e.filter,countries:e.countries}:"FILTER"===a.type?{search:e.search,filter:a.value,countries:e.countries}:"SET_COUNTRIES"===a.type?{search:e.search,filter:e.filter,countries:a.value}:{search:"",filter:null,countries:e.countries}}var k=function(e){var a=Object(c.useReducer)(L,{search:"",filter:null,countries:e.countries}),t=Object(u.a)(a,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){var a=e.countries;null!==s.filter&&(a=Object(O.a)(a).reduce((function(e,a){return a[1].region===s.filter.value&&e.set(a[0],a[1]),e}),new Map)),""!==s.search&&(a=Object(O.a)(a).reduce((function(e,a){return a[1].name.toLowerCase().includes(s.search.toLowerCase())&&e.set(a[0],a[1]),e}),new Map)),n({type:"SET_COUNTRIES",value:a})}),[s.search,s.filter,e.countries]),Object(h.jsxs)("section",{className:"home",children:[Object(h.jsxs)("div",{className:"home__bar",children:[Object(h.jsx)(f,{value:s.search,onChange:function(e){n({type:"SEARCH",value:e})}}),Object(h.jsx)(p,{value:s.filter,onChange:function(e){n({type:"FILTER",value:e})}})]}),Object(h.jsx)(y,{countries:s.countries})]})},E=t(41);t(75);var S=function(){return Object(h.jsxs)(N.b,{className:"back-btn",to:"/",children:[Object(h.jsx)(E.a,{className:"back-btn__icon"}),"Back"]})};t(76);function T(e,a){return"SET_LOADING"===a.type?{isLoading:!0,isValid:!1,countryDetails:{}}:"SET_INVALID"===a.type?{isLoading:!1,isValid:!1,countryDetails:{}}:"SET_VALUE"===a.type?{isLoading:!1,isValid:!0,countryDetails:a.value}:{isLoading:!1,isValid:!1,countryDetails:{}}}var D=function(e){var a,t=Object(d.f)().id,s=Object(c.useReducer)(T,{isLoading:!0,isValid:!1,countryDetails:{}}),n=Object(u.a)(s,2),i=n[0],r=n[1];if(Object(c.useEffect)((function(){Object(o.a)(l.a.mark((function a(){var c,s;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r({type:"SET_LOADING"}),a.prev=1,!e.countries.has(t)){a.next=17;break}return a.next=5,fetch("https://restcountries.com/v3.1/alpha/".concat(t,"?fields=name,tld,currencies,languages,subregion,borders"));case 5:if(!(c=a.sent).ok){a.next=14;break}return a.next=9,c.json();case 9:s={nativeName:(s=a.sent).name.nativeName,tld:s.tld?s.tld[0]:[],currencies:s.currencies,languages:s.languages?s.languages:[],subregion:s.subregion,borders:s.borders?s.borders:[]},r({type:"SET_VALUE",value:s}),a.next=15;break;case 14:r({type:"SET_INVALID"});case 15:a.next=18;break;case 17:r({type:"SET_INVALID"});case 18:a.next=23;break;case 20:a.prev=20,a.t0=a.catch(1),r({type:"SET_INVALID"});case 23:case"end":return a.stop()}}),a,null,[[1,20]])})))()}),[t,e.countries]),i.isLoading)a=Object(h.jsx)("div",{className:"details__container",children:Object(h.jsx)(j.PulseLoader,{color:"var(--text-color)"})});else if(i.isValid){var b=e.countries.get(t);a=Object(h.jsxs)("div",{className:"details__country",children:[Object(h.jsx)("img",{className:"details__country-flag",src:b.flag,alt:"".concat(t," flag'")}),Object(h.jsxs)("div",{className:"details__country-info",children:[Object(h.jsx)("h2",{className:"details__name",children:b.name}),Object(h.jsxs)("div",{className:"details__info-items",children:[Object(h.jsxs)("div",{className:"details__info-item",children:[Object(h.jsx)("h3",{className:"details__label",children:"Native Name: "}),Object(h.jsx)("p",{className:"details__value",children:Object.values(i.countryDetails.nativeName)[0]?Object.values(i.countryDetails.nativeName)[0].common:""})]}),Object(h.jsxs)("div",{className:"details__info-item",children:[Object(h.jsx)("h3",{className:"details__label",children:"Top Level Domain: "}),Object(h.jsx)("p",{className:"details__value",children:i.countryDetails.tld})]}),Object(h.jsxs)("div",{className:"details__info-item",children:[Object(h.jsx)("h3",{className:"details__label",children:"Population: "}),Object(h.jsx)("p",{className:"details__value",children:b.population.toLocaleString("en-US")})]}),Object(h.jsxs)("div",{className:"details__info-item",children:[Object(h.jsx)("h3",{className:"details__label",children:"Currencies: "}),Object(h.jsx)("p",{className:"details__value",children:Object.entries(i.countryDetails.currencies).reduce((function(e,a){return""===e?a[1].name:e+", "+a[1].name}),"")})]}),Object(h.jsxs)("div",{className:"details__info-item",children:[Object(h.jsx)("h3",{className:"details__label",children:"Region: "}),Object(h.jsx)("p",{className:"details__value",children:b.region})]}),Object(h.jsxs)("div",{className:"details__info-item",children:[Object(h.jsx)("h3",{className:"details__label",children:"Languages: "}),Object(h.jsx)("p",{className:"details__value",children:Object.entries(i.countryDetails.languages).reduce((function(e,a){return""===e?a[1]:e+", "+a[1]}),"")})]}),Object(h.jsxs)("div",{className:"details__info-item details__info-item--subregion",children:[Object(h.jsx)("h3",{className:"details__label",children:"Sub Region: "}),Object(h.jsx)("p",{className:"details__value",children:i.countryDetails.subregion})]}),Object(h.jsxs)("div",{className:"details__info-item",children:[Object(h.jsx)("h3",{className:"details__label",children:"Capital: "}),Object(h.jsx)("p",{className:"details__value",children:b.capital})]})]}),Object(h.jsxs)("div",{className:"details__info-item--borders",children:[0!==i.countryDetails.borders.length?Object(h.jsx)("h3",{className:"details__label",children:"Border Countries: "}):"",i.countryDetails.borders.map((function(a){return Object(h.jsx)(N.b,{className:"details__border-country",to:"/details/".concat(a),children:e.countries.get(a).name},a)}))]})]})]})}else a=e.countries.has(t)?Object(h.jsx)("div",{className:"details__container",children:Object(h.jsx)("h2",{className:"details__not-found-title",children:"An error has ocurred, please try again."})}):Object(h.jsx)("div",{className:"details__container",children:Object(h.jsx)("h2",{className:"details__not-found-title",children:"Country not found"})});return Object(h.jsxs)("section",{className:"details",children:[Object(h.jsx)(S,{}),a]})};t(102);var I=function(){return Object(h.jsxs)("section",{className:"not-found",children:[Object(h.jsx)(S,{}),Object(h.jsx)("div",{className:"not-found__container",children:Object(h.jsx)("h2",{className:"not-found__title",children:"Page not found"})})]})};t(103);function A(e,a){return"SET_LOADING"===a.type?{isLoading:!0,isValid:!1,countries:null}:"SET_INVALID"===a.type?{isLoading:!1,isValid:!1,countries:null}:"SET_VALUE"===a.type?{isLoading:!1,isValid:!0,countries:a.value}:{isLoading:!1,isValid:!1,countries:null}}var V=function(){var e,a=Object(c.useState)(!0),t=Object(u.a)(a,2),s=t[0],n=t[1],i=Object(c.useReducer)(A,{isLoading:!0,isValid:!1,countries:null}),r=Object(u.a)(i,2),b=r[0],m=r[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("dark-theme");e&&n(e="true"===e),Object(o.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m({type:"SET_LOADING"}),e.prev=1,e.next=4,fetch("https://restcountries.com/v3.1/all?fields=cca3,flags,name,population,region,capital");case 4:if(!(a=e.sent).ok){e.next=13;break}return e.next=8,a.json();case 8:t=(t=e.sent).reduce((function(e,a){return e.set(a.cca3,{name:a.name.common,flag:a.flags.svg,population:a.population,region:a.region,capital:a.capital?a.capital[0]:[]}),e}),new Map),m({type:"SET_VALUE",value:t}),e.next=14;break;case 13:m({type:"SET_INVALID"});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),m({type:"SET_INVALID"});case 19:case"end":return e.stop()}}),e,null,[[1,16]])})))()}),[]),Object(c.useEffect)((function(){localStorage.setItem("dark-theme",s)}),[s]),e=b.isLoading?Object(h.jsx)("div",{className:"page__container",children:Object(h.jsx)(j.PulseLoader,{color:"var(--text-color)"})}):b.isValid?Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/",exact:!0,children:Object(h.jsx)(k,{countries:b.countries})}),Object(h.jsx)(d.a,{path:"/details/:id",exact:!0,children:Object(h.jsx)(D,{countries:b.countries})}),Object(h.jsx)(d.a,{path:"*",children:Object(h.jsx)(I,{})})]}):Object(h.jsx)("div",{className:"page__container",children:Object(h.jsx)("h2",{className:"page__not-found-title",children:"An error has ocurred, please try again."})}),Object(h.jsxs)("div",{className:"app".concat(s?" dark":""),children:[Object(h.jsx)(_,{darkTheme:s,setDarkTheme:n}),Object(h.jsx)("main",{className:"page",children:e})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,105)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(N.a,{basename:"/rest-countries",children:Object(h.jsx)(V,{})})}),document.getElementById("root")),C()},48:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},68:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.26da43e6.chunk.js.map