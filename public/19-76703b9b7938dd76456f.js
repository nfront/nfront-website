(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{261:function(e,t,o){var i;o(237),o(73),o(71),o(140),o(98),o(30),o(16),o(96),"undefined"!=typeof self&&self,i=function(e){return function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=o(1),r=(i=n)&&i.__esModule?i:{default:i};t.default=r.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),s=o(2),a=(i=s)&&i.__esModule?i:{default:i};var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),r(t,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var i=e.currentTarget.getAttribute("href").slice(1),n=document.getElementById(i).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:n-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var o={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i]);return o}(e,["offset"]));return a.default.createElement("a",n({},t,{onClick:this.smoothScroll}))}}]),t}();t.default=l},function(t,o){t.exports=e},function(e,t,o){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var o,i=e.HTMLElement||e.Element,n=468,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:i.prototype.scroll||l,scrollIntoView:i.prototype.scrollIntoView},s=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(u(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},i.prototype.scroll=i.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==u(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},i.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},i.prototype.scrollIntoView=function(){if(!0!==u(arguments[0])){var o=function(e){var o;do{o=(e=e.parentNode)===t.body}while(!1===o&&!1===c(e));return o=null,e}(this),i=o.getBoundingClientRect(),n=this.getBoundingClientRect();o!==t.body?(f.call(this,o,o.scrollLeft+n.left-i.left,o.scrollTop+n.top-i.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})):e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function u(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function h(t,o){var i=e.getComputedStyle(t,null)["overflow"+o];return"auto"===i||"scroll"===i}function c(e){var t=p(e,"Y")&&h(e,"Y"),o=p(e,"X")&&h(e,"X");return t||o}function d(t){var o,i,r,a,l=(s()-t.startTime)/n;a=l=l>1?1:l,o=.5*(1-Math.cos(Math.PI*a)),i=t.startX+(t.x-t.startX)*o,r=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,i,r),i===t.x&&r===t.y||e.requestAnimationFrame(d.bind(e,t))}function f(o,i,n){var a,u,p,h,c=s();o===t.body?(a=e,u=e.scrollX||e.pageXOffset,p=e.scrollY||e.pageYOffset,h=r.scroll):(a=o,u=o.scrollLeft,p=o.scrollTop,h=l),d({scrollable:a,method:h,startTime:c,startX:u,startY:p,x:i,y:n})}}}}()}])},e.exports=i(o(0))},262:function(e,t,o){"use strict";function i(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function n(){p||(t.globalHide=p=!0,window.removeEventListener("scroll",n,!0),i("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",n,!0),window.document.removeEventListener("visibilitychange",n))}o(73),o(30),o(29),o(96),Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,o,i,n){var r=Math.log(i),s=(Math.log(n)-r)/(o-t);return Math.exp(r+s*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+c)+"{"+e+"}",o=d[e];return o?""+v+o:(f.insertRule(t,f.cssRules.length),d[e]=c,""+v+c++)},t.hideAll=n,t.default=function(e){var o=e.ssrFadeout;t.fadeOutEnabled=o};var r=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},u=t.disableSsr=function(){return t.ssr=s=!1},p=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),h=(t.ie10=!1,t.collapseend=void 0),c=1,d={},f=!1,v=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(u,1500),a||(t.collapseend=h=document.createEvent("Event"),h.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",n,!0),window.addEventListener("orientationchange",n,!0),window.document.addEventListener("visibilitychange",n))}},303:function(e,t,o){"use strict";function i(e,t){var o=t.distance,i=t.left,n=t.right,r=t.up,s=t.down,l=t.top,u=t.bottom,p=t.big,c=t.mirror,d=t.opposite,f=(o?o.toString():0)+((i?1:0)|(n?2:0)|(l||s?4:0)|(u||r?8:0)|(c?16:0)|(d?32:0)|(e?64:0)|(p?128:0));if(h.hasOwnProperty(f))return h[f];var v=i||n||r||s||l||u,m=void 0,y=void 0;if(v){if(!c!=!(e&&d)){var b=[n,i,u,l,s,r];i=b[0],n=b[1],l=b[2],u=b[3],r=b[4],s=b[5]}var w=o||(p?"2000px":"100%");m=i?"-"+w:n?w:"0",y=s||l?"-"+w:r||u?w:"0"}return h[f]=(0,a.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),h[f]}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.children,n=(e.out,e.forever),r=e.timeout,s=e.duration,l=void 0===s?a.defaults.duration:s,p=e.delay,h=void 0===p?a.defaults.delay:p,c=e.count,d=void 0===c?a.defaults.count:c,f=function(e,t){var o={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i]);return o}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:i,duration:void 0===r?l:r,delay:h,forever:n,count:d,style:{animationFillMode:"both"},reverse:f.left};return t?(0,u.default)(f,v,v,o):v}o(96),o(69),o(97),o(8),o(304),o(30),Object.defineProperty(t,"__esModule",{value:!0});var r,s=o(55),a=o(262),l=o(305),u=(r=l)&&r.__esModule?r:{default:r},p={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},h={};n.propTypes=p,t.default=n,e.exports=t.default},304:function(e,t,o){"use strict";o(235)("big",function(e){return function(){return e(this,"big","","")}})},305:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}o(16),o(96),o(53),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e};t.default=function(e,t,o,i){return"in"in e&&(e.when=e.in),r.default.Children.count(i)<2?r.default.createElement(s.default,n({},e,{inEffect:t,outEffect:o,children:i})):(i=r.default.Children.map(i,function(i){return r.default.createElement(s.default,n({},e,{inEffect:t,outEffect:o,children:i}))}),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,i):r.default.createElement("span",null,i))};var r=i(o(0)),s=i(o(306));e.exports=t.default},306:function(e,t,o){"use strict";o(42),o(53),o(71),o(16),o(70),o(14),o(54),o(17),o(140),o(98),o(96),Object.defineProperty(t,"__esModule",{value:!0});var i,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!t||o.length!==t);i=!0);}catch(e){n=!0,r=e}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},a=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),l=o(0),u=(i=l)&&i.__esModule?i:{default:i},p=o(55),h=o(262),c=(0,p.shape)({make:p.func,duration:p.number.isRequired,delay:p.number.isRequired,forever:p.bool,count:p.number.isRequired,style:p.object.isRequired,reverse:p.bool}),d={collapse:p.bool,collapseEl:p.element,cascade:p.bool,wait:p.number,force:p.bool,disabled:p.bool,appear:p.bool,enter:p.bool,exit:p.bool,fraction:p.number,refProp:p.string,innerRef:p.func,onReveal:p.func,unmountOnExit:p.bool,mountOnEnter:p.bool,inEffect:c.isRequired,outEffect:(0,p.oneOfType)([c,(0,p.oneOf)([!1])]).isRequired,ssrReveal:p.bool,collapseOnly:p.bool,ssrFadeout:p.bool},f={transitionGroup:p.object},v=function(e){function t(e,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,h.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u["default"].Component),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!h.observerMode&&this.props.collapse&&window.document.dispatchEvent(h.collapseend)))}},{key:"animationEnd",value:function(e,t,o){var i=this,n=o.forever,r=o.count,s=o.delay,a=o.duration;if(!n){this.animationEndTimeout=window.setTimeout(function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))},s+(a+(t?a:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,o){var i=o.duration+(t.cascade?o.duration:0),n=this.isOn?this.getDimensionValue():0,r=void 0,s=void 0;if(t.collapseOnly)r=o.duration/3,s=o.delay;else{var a=i>>2,l=a>>1;r=a,s=o.delay+(this.isOn?0:i-a-l),e.style.animationDuration=i-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=o.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:n,transition:"height "+r+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,o=e[t?"outEffect":"inEffect"],i="style"in o&&o.style.animationName||void 0,n=void 0;e.collapseOnly?n={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&o.make&&(i=o.make),n={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},o.style,{animationDuration:o.duration+"ms",animationDelay:o.delay+"ms",animationIterationCount:o.forever?"infinite":o.count,opacity:1,animationName:i}),className:o.className}),this.setState(e.collapse?this.collapse(n,e,o):n),t?(this.savedChild=u.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,o)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),h.ssr&&(0,h.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&h.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];h.globalHide||(0,h.hideAll)(),this&&this.el&&(e||(e=this.props),h.ssr&&(0,h.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):o||this.inViewport(e)||e.force?this.animate(e):h.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var o=this.context.transitionGroup,i=o&&!o.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||h.ssr&&!h.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):h.ssr&&(h.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,o=void 0;o="string"==typeof e?e.split("").map(function(e,t){return u.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):u.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=i.duration,a=i.reverse,l=o.length,p=2*r;this.props.collapse&&(p=parseInt(this.state.style.animationDuration,10),r=p/2);var c=a?l:0;return o.map(function(e){return"object"===(void 0===e?"undefined":n(e))&&e?u.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,h.cascade)(a?c--:c++,0,l,r,p))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===n(this.props.children)){var e=u.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:u.default.createElement("div",null,e)}return u.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var o=!1,i=t.props,n=i.style,r=i.className,a=i.children,l=this.props.disabled?r:(this.props.outEffect?h.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,p=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(o=this.cascade(a),p=s({},n,{opacity:1})):p=this.props.disabled?n:s({},n,this.state.style);var c=s({},this.props.props,function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}({className:l,style:p},this.props.refProp,this.saveRef)),d=u.default.cloneElement(t,c,e?o||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?u.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:d}):u.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:d}):d}},{key:"makeHandler",value:function(e){var t=this,o=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,h.raf)(o),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var o=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),n=Math.min(o,window.innerHeight)*(h.globalHide?e.fraction:0);return i>n-window.innerHeight&&i<o-n}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){h.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!h.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();v.propTypes=d,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},308:function(e,t,o){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}o(53),o(42),o(98),o(71);var n=i(o(0)),r=i(o(55)),s={width:"100%",height:"100%",position:"relative"},a={width:"100%",height:"100%",position:"absolute"},l=function(e){function t(t){e.call(this,t),this.state={frames:[].concat(t.frames||t.children||[]),current:0},this.mounted=!1,this.debounceTimeoutId=null,this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onResize=this.onResize.bind(this),this.autoSlide=this.autoSlide.bind(this),this.prev=this.prev.bind(this),this.next=this.next.bind(this),!1===t.loop&&t.auto&&console.warn("[re-carousel] Auto-slide only works in loop mode.")}return e&&(t.__proto__=e),((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.componentDidMount=function(){this.mounted=!0,this.prepareAutoSlide(),this.hideFrames(),this.refs.wrapper.addEventListener("touchmove",this.onTouchMove,{capture:!0}),this.refs.wrapper.addEventListener("touchend",this.onTouchEnd,{capture:!0}),window.addEventListener("resize",this.onResize)},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.clearAutoTimeout(),this.refs.wrapper.removeEventListener("touchmove",this.onTouchMove,{capture:!0}),this.refs.wrapper.removeEventListener("touchend",this.onTouchEnd,{capture:!0}),window.removeEventListener("resize",this.onResize)},t.prototype.componentDidUpdate=function(e,t){this.state.frames.length&&this.state.frames.length!==t.frames.length&&(this.hideFrames(),this.prepareAutoSlide())},t.getDerivedStateFromProps=function(e,t){var o=[].concat(e.frames||e.children||[]),i={frames:o};return o.length&&o.length!==t.frames.length&&(i.current=0),i},t.prototype.hideFrames=function(){for(var e=1;e<this.state.frames.length;e++)this.refs["f"+e].style.opacity=0},t.prototype.onResize=function(){var e=this;clearTimeout(this.debounceTimeoutId),this.debounceTimeoutId=setTimeout(function(){e.updateFrameSize(function(){e.prepareSiblingFrames()})},25)},t.prototype.onTouchStart=function(e){if(!(this.state.total<2)){this.clearAutoTimeout(),this.updateFrameSize(),this.prepareSiblingFrames();var t=e.touches&&e.touches[0]||e,o=t.pageX,i=t.pageY;this.setState({startX:o,startY:i,deltaX:0,deltaY:0}),this.refs.wrapper.addEventListener("mousemove",this.onTouchMove,{capture:!0}),this.refs.wrapper.addEventListener("mouseup",this.onTouchEnd,{capture:!0}),this.refs.wrapper.addEventListener("mouseleave",this.onTouchEnd,{capture:!0})}},t.prototype.onTouchMove=function(e){if(!(e.touches&&1<e.touches.length)){this.clearAutoTimeout();var t=e.touches&&e.touches[0]||e,o=t.pageX,i=t.pageY,n=o-this.state.startX,r=i-this.state.startY;this.setState({deltaX:n,deltaY:r}),"x"===this.props.axis&&Math.abs(n)>Math.abs(r)&&(e.preventDefault(),e.stopPropagation()),"y"===this.props.axis&&Math.abs(r)>Math.abs(n)&&(e.preventDefault(),e.stopPropagation()),this.props.loop||(this.state.current===this.state.frames.length-1&&(n<0&&(n/=3),r<0&&(r/=3)),0===this.state.current&&(0<n&&(n/=3),0<r&&(r/=3))),this.moveFramesBy(n,r)}},t.prototype.onTouchEnd=function(){var e=this,t=this.decideEndPosition();t&&this.transitFramesTowards(t),this.refs.wrapper.removeEventListener("mousemove",this.onTouchMove,{capture:!0}),this.refs.wrapper.removeEventListener("mouseup",this.onTouchEnd,{capture:!0}),this.refs.wrapper.removeEventListener("mouseleave",this.onTouchEnd,{capture:!0}),setTimeout(function(){return e.prepareAutoSlide()},this.props.duration)},t.prototype.decideEndPosition=function(){var e=this.state,t=e.deltaX;void 0===t&&(t=0);var o=e.deltaY;void 0===o&&(o=0);var i=e.current,n=e.frames,r=this.props,s=r.axis,a=r.loop,l=r.minMove;switch(s){case"x":if(!1===a){if(0===i&&0<t)return"origin";if(i===n.length-1&&t<0)return"origin"}return Math.abs(t)<l?"origin":0<t?"right":"left";case"y":if(!1===a){if(0===i&&0<o)return"origin";if(i===n.length-1&&o<0)return"origin"}return Math.abs(o)<l?"origin":0<o?"down":"up"}},t.prototype.moveFramesBy=function(e,t){var o=this.state.movingFrames,i=o.prev,n=o.current,r=o.next,s=this.state,a=s.frameWidth,l=s.frameHeight;switch(this.props.axis){case"x":u(n,e,0),e<0?u(r,e+a,0):u(i,e-a,0);break;case"y":u(n,0,t),t<0?u(r,0,t+l):u(i,0,t-l)}},t.prototype.prepareAutoSlide=function(){var e=this;if(!(this.state.frames.length<2)&&(this.clearAutoTimeout(),this.updateFrameSize(function(){e.prepareSiblingFrames()}),this.mounted&&this.props.loop&&this.props.auto)){var t=setTimeout(this.autoSlide,this.props.interval);this.setState({slider:t})}},t.prototype.autoSlide=function(e){var t=this;switch(this.clearAutoTimeout(),e){case"prev":this.transitFramesTowards("x"===this.props.axis?"right":"down");break;case"next":default:this.transitFramesTowards("x"===this.props.axis?"left":"up")}setTimeout(function(){return t.prepareAutoSlide()},this.props.duration)},t.prototype.next=function(){var e=this.state,t=e.current,o=e.frames;if(!this.props.loop&&t===o.length-1)return!1;this.autoSlide("next")},t.prototype.prev=function(){if(!this.props.loop&&0===this.state.current)return!1;var e=this.state.movingFrames,t=e.prev;t===e.next&&("x"===this.props.axis?u(t,-this.state.frameWidth,0,0):u(t,0,-this.state.frameHeight,0),t.getClientRects()),this.autoSlide("prev")},t.prototype.clearAutoTimeout=function(){clearTimeout(this.state.slider)},t.prototype.updateFrameSize=function(e){var t=window.getComputedStyle(this.refs.wrapper),o=t.width,i=t.height;this.setState({frameWidth:parseFloat(o.split("px")[0]),frameHeight:parseFloat(i.split("px")[0])},e)},t.prototype.getSiblingFrames=function(){return{current:this.refs["f"+this.getFrameId()],prev:this.refs["f"+this.getFrameId("prev")],next:this.refs["f"+this.getFrameId("next")]}},t.prototype.prepareSiblingFrames=function(){var e=this.getSiblingFrames();return this.props.loop||(0===this.state.current&&(e.prev=void 0),this.state.current===this.state.frames.length-1&&(e.next=void 0)),this.setState({movingFrames:e}),u(e.current,0,0),"x"===this.props.axis?(u(e.prev,-this.state.frameWidth,0),u(e.next,this.state.frameWidth,0)):(u(e.prev,0,-this.state.frameHeight),u(e.next,0,this.state.frameHeight)),e},t.prototype.getFrameId=function(e){var t=this.state,o=t.frames,i=t.current,n=o.length;switch(e){case"prev":return(i-1+n)%n;case"next":return(i+1)%n;default:return i}},t.prototype.transitFramesTowards=function(e){var t=this,o=this.state.movingFrames,i=o.prev,n=o.current,r=o.next,s=this.props,a=s.duration,l=s.axis,p=s.onTransitionEnd,h=this.state.current;switch(e){case"up":u(n,0,-this.state.frameHeight,a),u(r,0,0,a),h=this.getFrameId("next");break;case"down":u(n,0,this.state.frameHeight,a),u(i,0,0,a),h=this.getFrameId("prev");break;case"left":u(n,-this.state.frameWidth,0,a),u(r,0,0,a),h=this.getFrameId("next");break;case"right":u(n,this.state.frameWidth,0,a),u(i,0,0,a),h=this.getFrameId("prev");break;default:u(n,0,0,a),"x"===l?(u(i,-this.state.frameWidth,0,a),u(r,this.state.frameWidth,0,a)):"y"===l&&(u(i,0,-this.state.frameHeight,a),u(r,0,this.state.frameHeight,a))}p&&setTimeout(function(){return p(t.getSiblingFrames())},a),this.setState({current:h})},t.prototype.render=function(){var e=this,t=this.state,o=t.frames,i=t.current,r=this.props,l=r.widgets,u=r.axis,h=r.loop,c=r.auto,d=r.interval,f=p(s,this.props.style);return n.createElement("div",{style:f},n.createElement("div",{ref:"wrapper",style:p({overflow:"hidden"},f),onTouchStart:this.onTouchStart,className:this.props.className,onMouseDown:this.onTouchStart},o.map(function(e,t){var o=p({zIndex:99-t},a);return n.createElement("div",{ref:"f"+t,key:t,style:o},e)}),this.props.frames&&this.props.children),l&&[].concat(l).map(function(t,r){return n.createElement(t,{key:r,index:i,total:o.length,prevHandler:e.prev,nextHandler:e.next,axis:u,loop:h,auto:c,interval:d})}))},t}(n.Component);function u(e,t,o,i){void 0===i&&(i=0),e&&(e.style.opacity="1",e.style.transitionDuration=i+"ms",e.style.webkitTransitionDuration=i+"ms",e.style.transform="translate("+t+"px, "+o+"px)",e.style.webkitTransform="translate("+t+"px, "+o+"px) translateZ(0)")}function p(e){for(var t=arguments,o=Object(e),i=1;i<arguments.length;i++){var n=t[i];if(null!=n)for(var r in n)n.hasOwnProperty(r)&&(o[r]=n[r])}return o}l.propTypes={axis:r.oneOf(["x","y"]),auto:r.bool,loop:r.bool,interval:r.number,duration:r.number,widgets:r.arrayOf(r.func),frames:r.arrayOf(r.element),style:r.object,minMove:r.number,onTransitionEnd:r.func},l.defaultProps={axis:"x",auto:!1,loop:!1,interval:5e3,duration:300,minMove:42},e.exports=l}}]);
//# sourceMappingURL=19-76703b9b7938dd76456f.js.map