if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/7b172eb4e6875643a31fcdec031a5c3b3b09702d.593bbd983240f44ee8d7.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/chunks/commons.d704e7a529161d516edb.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/chunks/framework.1cddd991bfe63666dc71.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/chunks/main-59863979b7414f4cf727.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/chunks/pages/_app-d565d62c0423ccd5c478.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/chunks/pages/_error-93527fcec7b208473f4c.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/chunks/pages/episodes/%5Bslug%5D-e58502209a72a90bceab.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/chunks/pages/index-ad47ba79217f14f3fe13.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/css/543a793e472829766596.css",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/css/68d663333a85ad38e94e.css",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/css/e6ae82f1bbe37a78daba.css",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/kZP6m3-LLf4aaFXdID8do/_buildManifest.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/_next/static/kZP6m3-LLf4aaFXdID8do/_ssgManifest.js",revision:"kZP6m3-LLf4aaFXdID8do"},{url:"/arrow-left.svg",revision:"a4bec8983393a6650eeadc70ceaca3f1"},{url:"/favicon.png",revision:"9a10a0c57853a065708f39c0cf7c8640"},{url:"/logo-144x144.svg",revision:"113e5aec943a989fb20806538e75d373"},{url:"/logo-192x192.png",revision:"99915b5b6b62db626936b7264d3273d2"},{url:"/logo-512x512.png",revision:"16173475ba9d35183aacb546842a7979"},{url:"/logo-512x512.svg",revision:"3115b410f0bef7db6aa06bf65353ff25"},{url:"/logo.svg",revision:"270fed2f85e264e3b1b678bb7fb3f2fd"},{url:"/manifest.json",revision:"07c51e46de6af26091761a1a3d3e8612"},{url:"/pause.svg",revision:"54841e81896727b41392f30ac032a7be"},{url:"/play-green.svg",revision:"de07138a15303202044cb5e780d3fdd3"},{url:"/play-next.svg",revision:"25a2b47e3cda80ad6285c6725bf9d5ba"},{url:"/play-previous.svg",revision:"85b6ed81bd274cf318272535025f002b"},{url:"/play.svg",revision:"4639f696f322c696dc52f91fdf2f6fcc"},{url:"/playing.svg",revision:"2f05f6b73a93700697b0491d1b77370a"},{url:"/public/sw.js",revision:"9b84b53107e78d9251a3300fb655baa3"},{url:"/public/workbox-ea903bce.js",revision:"e9ae36e97e3d9d9785e8e3ee16685f89"},{url:"/repeat.svg",revision:"f61d9bb4e9c66d07ecb06fc5844a52c8"},{url:"/shuffle.svg",revision:"34540ba61de3ff9c3fff2af2c9cad007"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));