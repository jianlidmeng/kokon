(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.kokon={}))})(this,function(e){"use strict";const n=(t,o)=>{o||(o=window.location.href);const s=o.slice(o.indexOf("?")+1).split("&"),i={};return s.map(p=>{const[c,f]=p.split("=");i[c]=decodeURIComponent(f)}),i[t]},d=t=>t?t.includes("http")?t:`${location.protocol}//${t}`:"";e.getUrlParameter=n,e.urlAddHttp=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});