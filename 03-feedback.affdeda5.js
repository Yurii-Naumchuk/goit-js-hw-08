!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}document.querySelector(".feedback-form");var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,b=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var r,i,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),s?p(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=g();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?b(n,u-(e-c)):n}(e))}function h(e){return f=void 0,m&&r?p(e):(r=i=void 0,a)}function w(){var e=g(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(T,t),p(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=S(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=a.test(e);return o||f.test(e)?l(e.slice(2),o?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O=(document.querySelector(".feedback-form input"),document.querySelector(".feedback-form textarea"),"feedback-form-state");function T(){return{email:j.elements.email.value,message:j.elements.message.value}}j.addEventListener("submit",(function(e){e.preventDefault();var t=T();console.log(t),e.currentTarget.reset(),localStorage.removeItem(O)})),j.addEventListener("input",n((function(){var e=T();localStorage.setItem(O,JSON.stringify(e))}),500)),function(){var e=JSON.parse(localStorage.getItem(O));if(null===e)return;t=e,n=t.email,r=t.message,j.elements.email.value=n,j.elements.message.value=r;var t,n,r}()}();
//# sourceMappingURL=03-feedback.affdeda5.js.map