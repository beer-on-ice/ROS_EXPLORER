"use strict";var precacheConfig=[["/index.html","6656a571cc0b943bea3cd962fac05d9c"],["/static/css/main.0a57c235.css","52dc62e7127843bca0294389a52f33f3"],["/static/js/0.f35cfe7f.chunk.js","0ec4d1b49e518ced4c4038bd38a43eaf"],["/static/js/1.326b13f3.chunk.js","86c0e6620edd17d649ac42d94b9ea169"],["/static/js/10.76b578d7.chunk.js","3fbb195152cb1161dac783d1c33538d8"],["/static/js/11.e047be09.chunk.js","54624acbed1d6114a9be3d0905c6be0c"],["/static/js/12.c1884150.chunk.js","db270f64c95bdb058019339166c33772"],["/static/js/13.17642c1b.chunk.js","c0a683e0200c02c6dec268fb064d08f9"],["/static/js/14.9bbf21e4.chunk.js","d327c51e6538d21cc61a6bb086920236"],["/static/js/15.e610fbf6.chunk.js","117b1a6f19eac34d385ad35381375278"],["/static/js/16.35d9023b.chunk.js","29dc57f0902ebf3eeba8d633f8a71ab2"],["/static/js/17.95d2f68b.chunk.js","da73f516c37eda661c315fbd272a04a8"],["/static/js/18.1a41bfe6.chunk.js","8511e09d4575debfe1035b62626deeb2"],["/static/js/19.e09e5f49.chunk.js","139cc7acdfd5b6649a86bff8a33e3fad"],["/static/js/2.5da16bd7.chunk.js","c706b7d61afe8a8b1dba8f4d4808eda4"],["/static/js/20.3d0d6783.chunk.js","2461163d4c2d874861e9958c5e698466"],["/static/js/21.00fee659.chunk.js","45b9e478cfe60d1aee88e7ba695df068"],["/static/js/22.30c65369.chunk.js","c4f1b142f1a64c5b3875ca65a7eaf99d"],["/static/js/23.9331a7e7.chunk.js","ff408df35726f59bae2e715475f17d10"],["/static/js/24.498eba24.chunk.js","63ee7bbbfda5dfa6dc53b8bd5e28d709"],["/static/js/25.c557ba5e.chunk.js","e3668046ef1ab29cdc4ec655746320eb"],["/static/js/26.300afa26.chunk.js","cf6a7c2c02b6202673e1871966fd6f6e"],["/static/js/27.04d302d9.chunk.js","90f24e6e9366bd2dfc5f0c24b276b4af"],["/static/js/28.2b7b8dfa.chunk.js","486e09702ce39693b66f0872a4ffce94"],["/static/js/29.7b2071b3.chunk.js","5e853fda153e1eb167f90bb0d9708a52"],["/static/js/3.58b7f393.chunk.js","91f3d5b740f670f8e81b4b4f20109c80"],["/static/js/30.d9390a33.chunk.js","031333551d6dc7f7e3644805fdfc408b"],["/static/js/31.bce44ff0.chunk.js","f6d4fe703508f0bb9d0caa95cc3b9d22"],["/static/js/32.0f5fadce.chunk.js","50eb2410f09978d705d93094cd03b344"],["/static/js/33.ddd66863.chunk.js","8dad4bc25943539a29ead302db3c5f5b"],["/static/js/34.dedd2619.chunk.js","8343ed0ee1c112be359907dd8aceb88a"],["/static/js/35.b9a7658c.chunk.js","e2fad408e70a72f3bf37407b85047632"],["/static/js/36.664ddd6b.chunk.js","3a125672d0637ed27be7bdb02c46f47f"],["/static/js/4.d8e9919b.chunk.js","2a1821b1a276978289b02e2126b79d56"],["/static/js/5.2238932e.chunk.js","f25cdef8f76d1aa3d010a5d359b01fdb"],["/static/js/6.f3cf425e.chunk.js","1abbd58f1e5322f797a4aac8f48a4fa0"],["/static/js/7.3a74724c.chunk.js","e61abdabe2b237ae585c17b287ab685d"],["/static/js/8.9de8da20.chunk.js","33415a701952a8f14ac64a9b9906384f"],["/static/js/9.01ad4ff0.chunk.js","0290c33d14af429e316eaebcd2bb486f"],["/static/js/main.d2d9e6d6.js","db55bc144be4c9339047f7ef98994b4f"],["/static/media/AccountLink.test.js.dcc832fd.snap","dcc832fd9494f3f96620181b3615d8b9"],["/static/media/JSONButton.test.js.72f1cf68.snap","72f1cf68bf653ab3be6651cc7275b853"],["/static/media/LumensRates.test.js.3ccc84d2.snap","3ccc84d28f386aebdca934177c5a3f6f"],["/static/media/ManageData.test.js.d903db8c.snap","d903db8ccdb77c9ce31c6d4cb202e961"],["/static/media/TitleWithJSONButton.test.js.ee52094d.snap","ee52094d2bf8a2bbdfc2032efe220344"],["/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function a(s,o,i){function u(n,e){if(!o[n]){if(!s[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(f)return f(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var c=o[n]={exports:{}};s[n][0].call(c.exports,function(e){var t=s[n][1][e];return u(t||e)},c,c.exports,a,s,o,i)}return o[n].exports}for(var f="function"==typeof require&&require,e=0;e<i.length;e++)u(i[e]);return u}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var a,s=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(n,r){var t=(r=r||{}).successResponses||s.successResponses;return fetch(n.clone()).then(function(e){return"GET"===n.method&&t.test(e.status)&&c(r).then(function(t){t.put(n,e).then(function(){var e=r.cache||s.cache;(e.maxEntries||e.maxAgeSeconds)&&e.name&&function(e,t,n){var r=function(e,n,t){var r=e.url,c=t.maxAgeSeconds,a=t.maxEntries,s=t.name,o=Date.now();return i("Updating LRU order for "+r+". Max entries is "+a+", max age is "+c),u.getDb(s).then(function(e){return u.setTimestampForUrl(e,r,o)}).then(function(e){return u.expireEntries(e,a,c,o)}).then(function(e){i("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,e,t,n);a=a?a.then(r):r()}(n,t,e)})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var c="sw-toolbox-",a=1,u="store",f="url",h="timestamp",r={};t.exports={getDb:function(e){return e in r||(r[e]=function(r){return new Promise(function(e,t){var n=indexedDB.open(c+r,a);n.onupgradeneeded=function(){n.result.createObjectStore(u,{keyPath:f}).createIndex(h,h,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}(e)),r[e]},setTimestampForUrl:function(r,c,a){return new Promise(function(e,t){var n=r.transaction(u,"readwrite");n.objectStore(u).put({url:c,timestamp:a}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return function(s,o,i){return o?new Promise(function(e,t){var r=1e3*o,c=[],n=s.transaction(u,"readwrite"),a=n.objectStore(u);a.index(h).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&i-r>t.value[h]){var n=t.value[f];c.push(n),a.delete(n),t.continue()}},n.oncomplete=function(){e(c)},n.onabort=t}):Promise.resolve([])}(e,t,r).then(function(t){return function(r,i){return i?new Promise(function(e,t){var c=[],n=r.transaction(u,"readwrite"),a=n.objectStore(u),s=a.index(h),o=s.count();s.count().onsuccess=function(){var r=o.result;i<r&&(s.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[f];c.push(n),a.delete(n),r-c.length>i&&t.continue()}})},n.oncomplete=function(){e(c)},n.onabort=t}):Promise.resolve([])}(e,n).then(function(e){return t.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var c=e("./helpers"),a=e("./router"),s=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){c.debug("activate event fired");var t=s.cache.name+"$$$inactive$$$";e.waitUntil(c.renameCache(t,s.cache.name))},installListener:function(e){var t=s.cache.name+"$$$inactive$$$";c.debug("install event fired"),c.debug("creating cache ["+t+"]"),e.waitUntil(c.openCache({cache:{name:t}}).then(function(t){return Promise.all(s.preCacheItems).then(r).then(c.validatePrecacheInput).then(function(e){return c.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=c+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=r,this.handler=n}var c=new URL("./",self.location).pathname,a=e("path-to-regexp");r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){function o(e,t){for(var n=e.entries(),r=n.next(),c=[];!r.done;){new RegExp(r.value[0]).test(t)&&c.push(r.value[1]),r=n.next()}return c}function c(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var u=e("./route"),f=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){c.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),c.prototype.add=function(e,t,n,r){var c;r=r||{},c=t instanceof RegExp?RegExp:(c=r.origin||self.location.origin)instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c),e=e.toLowerCase();var a=new u(e,t,n,r);this.routes.has(c)||this.routes.set(c,new Map);var s=this.routes.get(c);s.has(e)||s.set(e,new Map);var o=s.get(e),i=a.regexp||a.fullUrlRegExp;o.has(i.source)&&f.debug('"'+t+'" resolves to same regex as existing route.'),o.set(i.source,a)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,c=n.pathname;return this._match(e,o(this.routes,r),c)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var c=t[r],a=c&&c.get(e.toLowerCase());if(a){var s=o(a,n);if(0<s.length)return s[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var a=e("../options"),s=e("../helpers");t.exports=function(r,e,c){return c=c||{},s.debug("Strategy: cache first ["+r.url+"]",c),s.openCache(c).then(function(e){return e.match(r).then(function(e){var t=c.cache||a.cache,n=Date.now();return s.isResponseFresh(e,t.maxAgeSeconds,n)?e:s.fetchAndCache(r,c)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var c=e("../options"),a=e("../helpers");t.exports=function(t,e,r){return r=r||{},a.debug("Strategy: cache only ["+t.url+"]",r),a.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||c.cache,n=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var u=e("../helpers"),f=e("./cacheOnly");t.exports=function(s,o,i){return u.debug("Strategy: fastest ["+s.url+"]",i),new Promise(function(t,n){function r(e){a.push(e.toString()),c?n(new Error('Both cache and network failed: "'+a.join('", "')+'"')):c=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var c=!1,a=[];u.fetchAndCache(s.clone(),i).then(e,r),f(s,o,i).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var f=e("../options"),h=e("../helpers");t.exports=function(s,e,o){var i=(o=o||{}).successResponses||f.successResponses,u=o.networkTimeoutSeconds||f.networkTimeoutSeconds;return h.debug("Strategy: network first ["+s.url+"]",o),h.openCache(o).then(function(e){var t,n,r=[];if(u){var c=new Promise(function(c){t=setTimeout(function(){e.match(s).then(function(e){var t=o.cache||f.cache,n=Date.now(),r=t.maxAgeSeconds;h.isResponseFresh(e,r,n)&&c(e)})},1e3*u)});r.push(c)}var a=h.fetchAndCache(s,o).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw h.debug("Response was an HTTP error: "+e.statusText,o),n=e,new Error("Bad response")}).catch(function(t){return h.debug("Network or response error, fallback to cache ["+s.url+"]",o),e.match(s).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(a),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),c=e("./router"),a=e("./helpers"),s=e("./strategies"),o=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",o.installListener),self.addEventListener("activate",o.activateListener),self.addEventListener("fetch",o.fetchListener),t.exports={networkOnly:s.networkOnly,networkFirst:s.networkFirst,cacheOnly:s.cacheOnly,cacheFirst:s.cacheFirst,fastest:s.fastest,router:c,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],c=0,a=0,s="",o=t&&t.delimiter||"/";null!=(n=E.exec(e));){var i=n[0],u=n[1],f=n.index;if(s+=e.slice(a,f),a=f+i.length,u)s+=u[1];else{var h=e[a],d=n[2],l=n[3],p=n[4],b=n[5],m=n[6],g=n[7];s&&(r.push(s),s="");var v=null!=d&&null!=h&&h!==d,w="+"===m||"*"===m,x="?"===m||"*"===m,y=n[2]||o,j=p||b;r.push({name:l||c++,prefix:d||"",delimiter:y,optional:x,repeat:w,partial:v,asterisk:!!g,pattern:j?(k=j,k.replace(/([=!:$\/()])/g,"\\$1")):g?".*":"[^"+R(y)+"]+?"})}}var k;return a<e.length&&(s+=e.substr(a)),s&&r.push(s),r}function d(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(f){for(var h=new Array(f.length),e=0;e<f.length;e++)"object"==typeof f[e]&&(h[e]=new RegExp("^(?:"+f[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},c=(t||{}).pretty?d:encodeURIComponent,a=0;a<f.length;a++){var s=f[a];if("string"!=typeof s){var o,i=r[s.name];if(null==i){if(s.optional){s.partial&&(n+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(b(i)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(i)+"`");if(0===i.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var u=0;u<i.length;u++){if(o=c(i[u]),!h[a].test(o))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(o)+"`");n+=(0===u?s.prefix:s.delimiter)+o}}else{if(o=s.asterisk?encodeURI(i).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):c(i),!h[a].test(o))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+o+'"');n+=s.prefix+o}}else n+=s}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function a(e,t,n){b(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,c=!1!==n.end,a="",s=0;s<e.length;s++){var o=e[s];if("string"==typeof o)a+=R(o);else{var i=R(o.prefix),u="(?:"+o.pattern+")";t.push(o),o.repeat&&(u+="(?:"+i+u+")*"),a+=u=o.optional?o.partial?i+"("+u+")?":"(?:"+i+"("+u+"))?":i+"("+u+")"}}var f=R(n.delimiter||"/"),h=a.slice(-f.length)===f;return r||(a=(h?a.slice(0,-f.length):a)+"(?:"+f+"(?=$))?"),a+=c?"$":r&&h?"":"(?="+f+"|$)",l(new RegExp("^"+a,p(n)),t)}function s(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):b(e)?function(e,t,n){for(var r=[],c=0;c<e.length;c++)r.push(s(e[c],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):function(e,t,n){return a(r(e,n),t,n)}(e,t,n)}var b=e("isarray");t.exports=s,t.exports.parse=r,t.exports.compile=function(e,t){return c(r(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=a;var E=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var c=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return c.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/api\.stellarterm\.com\/v1\/ticker.json/,toolbox.cacheFirst,{cache:{name:"directory-cache",maxAgeSeconds:172800}}),toolbox.router.get(/^https:\/\/api\.coinmarketcap\.com\/v1\/ticker\/stellar\//,toolbox.cacheFirst,{cache:{name:"price-cache",maxAgeSeconds:300}}),toolbox.router.get(/^https:\/\/raw.githubusercontent.com\/chatch\/stellarexplorer\/master\/banner.json/,toolbox.cacheFirst,{cache:{name:"banner-cache",maxAgeSeconds:21600}});