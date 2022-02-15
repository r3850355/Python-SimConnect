(()=>{"use strict";var e={2238:(e,t,n)=>{n(71),n(5363);var o=n(8880),r=n(9592),i=n(3673);function a(e,t,n,o,r,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const l=(0,i.aZ)({name:"App"});var s=n(4260);const c=(0,s.Z)(l,[["render",a]]),u=c;var d=n(7083),p=n(9582);const f=[{path:"/",component:()=>Promise.all([n.e(736),n.e(126)]).then(n.bind(n,8126)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(10)]).then(n.bind(n,5010))},{path:"map",component:()=>Promise.all([n.e(736),n.e(481)]).then(n.bind(n,1481))},{path:"instruments",component:()=>Promise.all([n.e(736),n.e(482)]).then(n.bind(n,2482))},{path:"radio",component:()=>Promise.all([n.e(736),n.e(842)]).then(n.bind(n,3842))},{path:"avionics",component:()=>Promise.all([n.e(736),n.e(13)]).then(n.bind(n,5013))},{path:"settings",component:()=>Promise.all([n.e(736),n.e(540)]).then(n.bind(n,6540))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(193)]).then(n.bind(n,2193))}],h=f,g=(0,d.BC)((function(){const e=p.PO,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/")});return t}));async function m(e,t){const n="function"===typeof g?await g({}):g,o=e(u);return o.use(r.Z,t),{app:o,router:n}}var b=n(6417),v=n(4478);const _={config:{},plugins:{Notify:b.Z,BottomSheet:v.Z}};var y=n(1413);(0,y.z)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(736).then(n.t.bind(n,9501,23));const w="/";async function P({app:e,router:t},n){let o=!1;const r=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t)},a=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<n.length;s++)try{await n[s]({app:e,router:t,ssrContext:null,redirect:i,urlPath:a,publicPath:w})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}m(o.ri,_).then((e=>Promise.all([Promise.resolve().then(n.bind(n,3083)),Promise.resolve().then(n.bind(n,5474))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,n)}))))},5474:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s,api:()=>l});var o=n(7083),r=n(52),i=n.n(r);const a=`http://${window.location.host}`,l=i().create({baseURL:a}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=l}))},3083:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(9151);const r={index:{title:"Fly with GoogleMap"},nav:{map:"Maps",instruments:"Heading",radio:"Radio",avionics:"Avionics",settings:"Settings"},map:{error_message_nokey:"Error: googleMapAPIKey required"},instruments:{title_instruments:"Heading",button_set_now_heading:"SET TO NOW HEADING",button_step_10:"Step 10",title_frequency_COM:"Frequency - COM",button_set:"SET",title_frequency_NAV:"Frequency - NAV"},avionics:{title_right_large_rotate:"RightLargeRotate",title_right_small_rotate:"RightSmallRotate",button_push:"PUSH",title_right:"Functions - Right",title_bottom:"Functions - Bottom",title_zoom:"Functions - Zoom",warning_text:"This Page's Function is Require MobiFlight Modules.",warning_btn:"Go Checkout MobiFlight"},settings:{title_language:"Language"}},i={nav:{map:"地圖",instruments:"航向",radio:"通訊",avionics:"航電",settings:"設定"},map:{error_message_nokey:"錯誤: 缺少 GoogleMap API 金鑰"},instruments:{title_instruments:"航向",button_set_now_heading:"設為目前航向",button_step_10:"精度： 10",title_frequency_COM:"頻率 - COM",button_set:"設定",title_frequency_NAV:"頻率 - NAV"},avionics:{title_right_large_rotate:"右下方大旋鈕",title_right_small_rotate:"右下方小旋鈕",button_push:"按下",title_right:"右側功能列",title_bottom:"底部功能列",title_zoom:"地圖縮放",warning_text:"本頁功能需安裝 MobiFlight Modules 才能正常使用",warning_btn:"前往 MobiFlight 官網"},settings:{title_language:"語言"}},a={"en-US":r,"zh-TW":i},l=({app:e})=>{var t;const n=(0,o.o)({locale:null!==(t=localStorage.getItem("language"))&&void 0!==t?t:"en-US",globalInjection:!0,messages:a});e.use(n),e.i18n=n}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(u=0;u<e.length;u++){for(var[o,r,i]=e[u],l=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>o[e]));return a["default"]=()=>o,n.d(i,a),i}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{10:"9cf8c7d0",13:"fa8d055e",126:"1fc50f28",193:"e3598cae",481:"14dcc6dd",482:"72b16376",540:"ca5b5726",842:"84ac37d6"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"3171b27b",736:"135976b6"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="fs2020map:";n.l=(o,r,i,a)=>{if(e[o])e[o].push(r);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=o),e[o]=[r];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{n.p="/"})(),(()=>{var e={143:0};n.f.j=(t,o)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise(((n,o)=>r=e[t]=[n,o]));o.push(r[2]=i);var a=n.p+n.u(t),l=new Error,s=o=>{if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[a,l,s]=o,c=0;if(a.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var u=s(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkfs2020map"]=self["webpackChunkfs2020map"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[736],(()=>n(2238)));o=n.O(o)})();