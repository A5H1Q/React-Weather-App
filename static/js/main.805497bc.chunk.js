(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(5),i=n.n(r),a=(n(11),n(4)),h=n.n(a),o=n(6),u=n(2),j=(n(13),n(0));var l=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),a=i[0],l=i[1],b=Object(c.useState)(""),d=Object(u.a)(b,2),m=d[0],p=d[1],x=function(){return Object(j.jsxs)("footer",{children:["Made with \u2764 by ",Object(j.jsx)("a",{href:"https://github.com/A5H1Q",children:"Ashik saleem"})]})};function O(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+"&APPID=53ce694fa7a406a42ef14bac23f0f404&units=metric");case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,s(!1),"404"===c.cod?p(Object(j.jsxs)("div",{style:{textAlign:"center",fontStyle:"italic"},className:"tile",children:["No data found for '",a,"'"]})):p(Object(j.jsxs)("div",{className:"tile",children:[Object(j.jsx)("img",{alt:"loading..",src:"https://openweathermap.org/img/wn/"+c.weather[0].icon+"@2x.png"}),Object(j.jsxs)("span",{children:[c.name,", ",c.sys.country]}),Object(j.jsxs)("h1",{children:[c.main.temp," \xb0C"]}),Object(j.jsxs)("i",{children:["-- Feels like ",c.main.feels_like," \xb0C"]}),Object(j.jsxs)("h5",{children:["- ",c.weather[0].main,", ",c.weather[0].description]}),Object(j.jsxs)("h5",{children:["- Sunrise : ",new Date(1e3*c.sys.sunrise).toLocaleTimeString({},{hour:"numeric",minute:"numeric",hour12:!0})," IST"]}),Object(j.jsxs)("h5",{children:["- Sunset : ",new Date(1e3*c.sys.sunset).toLocaleTimeString({},{hour:"numeric",minute:"numeric",hour12:!0})," IST"]})]}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:O,className:"App",children:[Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("input",{onChange:function(e){l(e.target.value)},placeholder:"Enter city name",type:"text"}),Object(j.jsx)("svg",{onClick:O,xmlns:"http://www.w3.org/2000/svg",width:"18",height:"24",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"})})]}),m]}),n?Object(j.jsx)(x,{}):null]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.805497bc.chunk.js.map