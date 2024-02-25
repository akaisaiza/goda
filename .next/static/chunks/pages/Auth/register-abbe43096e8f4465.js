(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{7479:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var a=t(29);function n(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=t(7794),s=t.n(o),c=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl="https://api.goda-ai.com"}var r,t,o;return r=e,t=[{key:"fetchData",value:function(){var e=(0,a.Z)(s().mark((function e(r){var t,a,n,o,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:null,a={method:"GET",headers:{"Content-Type":"application/json"}},t&&(a.headers.Authorization="Bearer ".concat(t)),n="".concat(this.baseUrl,"/").concat(r),e.prev=4,e.next=7,fetch(n,a);case 7:if((o=e.sent).ok){e.next=10;break}throw new Error("Network response was not ok");case 10:return e.abrupt("return",o.json());case 13:throw e.prev=13,e.t0=e.catch(4),console.error("There was a problem with the fetch operation:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(r){return e.apply(this,arguments)}}()},{key:"postData",value:function(){var e=(0,a.Z)(s().mark((function e(r,t){var a,n,o,c,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:null,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},a&&(n.headers.Authorization="Bearer ".concat(a)),o="".concat(this.baseUrl,"/").concat(r),e.prev=4,e.next=7,fetch(o,n);case 7:if((c=e.sent).ok){e.next=10;break}throw new Error("Network response was not ok");case 10:return e.abrupt("return",c.json());case 13:throw e.prev=13,e.t0=e.catch(4),console.error("There was a problem with the fetch operation:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(r,t){return e.apply(this,arguments)}}()},{key:"postData1",value:function(){var e=(0,a.Z)(s().mark((function e(r,t){var a,n,o,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},a&&(n.headers.Authorization="Bearer ".concat(a)),o="".concat(this.baseUrl,"/").concat(r),e.prev=4,e.next=7,fetch(o,n);case 7:if(e.sent.ok){e.next=10;break}throw new Error("Network response was not ok");case 10:return e.abrupt("return","ok");case 13:throw e.prev=13,e.t0=e.catch(4),console.error("There was a problem with the fetch operation:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(r,t){return e.apply(this,arguments)}}()}],t&&n(r.prototype,t),o&&n(r,o),e}(),i=c},5379:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var a=t(29),n=t(7794),o=t.n(n),s=t(7294),c=t(7479),i=t(5893);function u(){var e=(0,s.useState)(""),r=e[0],t=e[1],n=(0,s.useState)(""),u=n[0],l=n[1],d=(0,s.useState)(""),h=d[0],p=d[1],f=(0,s.useState)(""),m=f[0],b=f[1],g=new c.Z,x=function(){var e=(0,a.Z)(o().mark((function e(t){var a,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={username:r,email:u,password:h,address:"Ha Noi"},e.next=5,g.postData("api/auth/signup",a);case 5:n=e.sent,console.log(n),window.location.href="/Auth/login",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),b("\u0110\u0103ng k\xed th\u1ea5t b\u1ea1i");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r){return e.apply(this,arguments)}}();return(0,i.jsx)("section",{className:"bg-gray-50 dark:bg-gray-900",children:(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:[(0,i.jsxs)("a",{href:"",className:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white",children:[(0,i.jsx)("img",{className:"w-8 h-8 mr-2",src:"/assets/goda_logo.png",alt:"logo"}),"Goda AI"]}),(0,i.jsx)("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:(0,i.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[(0,i.jsx)("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"\u0110\u0103ng k\xed t\xe0i kho\u1ea3n"}),m&&(0,i.jsx)("p",{className:"text-red",children:m}),(0,i.jsxs)("form",{className:"space-y-4 md:space-y-6",onSubmit:x,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"username",className:"block mb-2 text-sm  text-gray-900 dark:text-white",children:"T\xean \u0111\u0103ng k\xed"}),(0,i.jsx)("input",{type:"text",name:"username",value:r,onChange:function(e){return t(e.target.value)},id:"username",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm  text-gray-900 dark:text-white",children:"Email"}),(0,i.jsx)("input",{type:"email",name:"email",value:u,onChange:function(e){return l(e.target.value)},id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"password",className:"block mb-2 text-sm  text-gray-900 dark:text-white",children:"M\u1eadt kh\u1ea9u"}),(0,i.jsx)("input",{type:"password",value:h,onChange:function(e){return p(e.target.value)},name:"password",id:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),(0,i.jsx)("button",{type:"submit",className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"\u0110\u0103ng k\xed"}),(0,i.jsxs)("p",{className:"text-sm font-light ",children:["\u0110\xe3 c\xf3 t\xe0i kho\u1ea3n ? ",(0,i.jsx)("a",{href:"/Auth/login",className:" text-primary-600 hover:underline dark:text-primary-500",children:"\u0110\u0103ng nh\u1eadp"})]})]})]})})]})})}},4600:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Auth/register",function(){return t(5379)}])},29:function(e,r,t){"use strict";function a(e,r,t,a,n,o,s){try{var c=e[o](s),i=c.value}catch(u){return void t(u)}c.done?r(i):Promise.resolve(i).then(a,n)}function n(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var s=e.apply(r,t);function c(e){a(s,n,o,c,i,"next",e)}function i(e){a(s,n,o,c,i,"throw",e)}c(void 0)}))}}t.d(r,{Z:function(){return n}})}},function(e){e.O(0,[774,888,179],(function(){return r=4600,e(e.s=r);var r}));var r=e.O();_N_E=r}]);