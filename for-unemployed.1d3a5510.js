!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=a||d||Function("return this")(),v=Object.prototype.toString,b=Math.max,p=Math.min,y=function(){return s.Date.now()};function m(t,n,e){var o,r,u,f,c,l,a=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(i);function m(n){var e=o,i=r;return o=r=void 0,a=n,f=t.apply(i,e)}function h(t){return a=t,c=setTimeout(j,n),d?m(t):f}function T(t){var e=t-l;return void 0===l||e>=n||e<0||s&&t-a>=u}function j(){var t=y();if(T(t))return O(t);c=setTimeout(j,function(t){var e=n-(t-l);return s?p(e,u-(t-a)):e}(t))}function O(t){return c=void 0,v&&o?m(t):(o=r=void 0,f)}function x(){var t=y(),e=T(t);if(o=arguments,r=this,l=t,e){if(void 0===c)return h(l);if(s)return c=setTimeout(j,n),m(l)}return void 0===c&&(c=setTimeout(j,n)),f}return n=g(n)||0,w(e)&&(d=!!e.leading,u=(s="maxWait"in e)?b(g(e.maxWait)||0,n):u,v="trailing"in e?!!e.trailing:v),x.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=l=r=c=void 0},x.flush=function(){return void 0===c?f:O(y())},x}function w(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function g(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==v.call(n)}(n))return NaN;if(w(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=w(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var i=f.test(n);return i||c.test(n)?l(n.slice(2),i?2:8):u.test(n)?NaN:+n}n=function(t,n,e){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(i);return w(e)&&(o="leading"in e?!!e.leading:o,r="trailing"in e?!!e.trailing:r),m(t,n,{leading:o,maxWait:n,trailing:r})};var h=document.querySelector(".stt-button"),T=null;function j(){h.classList.add("stt-button--hidden")}window.onscroll=t(n)((function(){T&&clearTimeout(T);window.scrollY>700?h.classList.remove("stt-button--hidden"):window.scrollY>600&&window.scrollY<700&&j();T=setTimeout(j,1e3)}),500),h.onclick=function(){console.log("click"),window.scrollTo({top:0,left:0,behavior:"smooth"})}}();
//# sourceMappingURL=for-unemployed.1d3a5510.js.map