(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h}),n.d(t,"listQuery",function(){return b});var a=n(0),r=n.n(a),i=n(225),o=n(223),l=n(228),c=n(237),u=n(236),s=n(227);var m=o.b.section.withConfig({displayName:"bloglist__Section",componentId:"mk581q-0"})(["background-color:var(--alt-color);padding:2.5rem 0;overflow:hidden;@media (min-width:","){padding:5rem 0;}"],function(e){return e.theme.screen.md}),d=o.b.div.withConfig({displayName:"bloglist__Grid",componentId:"mk581q-1"})(["display:grid;grid-template-columns:1fr;grid-template-rows:min-content;grid-gap:0;justify-content:space-between;border-top:1px solid var(--border-color);@media (min-width:","){grid-template-columns:repeat(2,1fr);}@media (min-width:","){grid-template-columns:repeat(3,1fr);}"],function(e){return e.theme.screen.sm},function(e){return e.theme.screen.lg}),p=o.b.div.withConfig({displayName:"bloglist__Box",componentId:"mk581q-2"})(["padding:2.5rem 1.5rem 1rem;border:1px solid var(--border-color);border-top:0;border-left:0;background-color:white;&:hover{cursor:pointer;background-color:var(--alt-color);}"]),g=o.b.div.withConfig({displayName:"bloglist__SectionText",componentId:"mk581q-3"})(["margin-bottom:2.5rem;padding-left:1.5rem;text-transform:uppercase;letter-spacing:1px;"]),f=o.b.div.withConfig({displayName:"bloglist__Pagination",componentId:"mk581q-4"})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:2.5rem;margin-left:1.5rem;padding:0;"]),h=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.data,n=e.pageContext,a=t.allMdx.edges,o=n.previousPagePath,h=n.nextPagePath;return r.a.createElement(l.a,null,r.a.createElement(s.a,{title:"BLOG"}),r.a.createElement(u.a,{fluid:!0}),r.a.createElement(m,null,r.a.createElement(g,null,r.a.createElement("h3",null,"Recent Posts")),r.a.createElement(d,null,a.map(function(e,t){var n=e.node;return r.a.createElement(p,null,r.a.createElement(i.a,{to:n.fields.slug,key:t},r.a.createElement("h2",null,n.frontmatter.title),r.a.createElement("p",{style:{fontSize:"90%"}},n.excerpt),r.a.createElement("p",{className:"label"},n.frontmatter.date," •"," ",n.timeToRead," Min Read")))}),r.a.createElement(f,null,h?r.a.createElement(i.a,{to:h},"← Older Posts"):null,o?r.a.createElement(i.a,{to:o},"Newer Posts →"):null))),r.a.createElement(c.a,{fluid:!0}))},a}(a.Component),b="2798205554"},224:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var a=n(223);t.c={screen:{xs:"575px",sm:"767px",md:"991px",lg:"1199px"}};var r=a.b.div.withConfig({displayName:"global__Container",componentId:"sc-10uw9fq-0"})(["max-width:var(--max-width);width:100%;margin:0 auto;padding:0 1.5rem;",";"],function(e){return e.fluid&&"\n        max-width: 100%;\n    "}),i=a.b.section.withConfig({displayName:"global__Section",componentId:"sc-10uw9fq-1"})(["padding:5rem 0;@media (min-width:","){padding:7rem 0;}",";",";",";"],function(e){return e.theme.screen.sm},function(e){return e.alt&&"\n        background-color: var(--accent-color);  \n    "},function(e){return"secondary"===e.accent&&"\n        background-color: var(--primary-color);        \n    "},function(e){return"alt"===e.accent&&"\n        background-color: var(--alt-blue);\n        h2,\n        p {\n            color: white;\n        }\n    "});Object(a.b)(r).withConfig({displayName:"global__Hero",componentId:"sc-10uw9fq-2"})(["display:flex;flex-flow:column;justify-content:center;align-items:center;min-width:100%;min-height:100vh;color:var(--secondary-color);background-color:var(--primary-color);",";"],function(e){return"inverse"===e.accent&&"\n        background-color: var(--alt-color);\n    "})},225:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(68),o=n.n(i);n.d(t,"a",function(){return o.a}),n.d(t,"b",function(){return i.navigate});n(226),n(10).default.enqueue,r.a.createContext({})},226:function(e,t,n){var a;e.exports=(a=n(230))&&a.default||a},227:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(232),r=n(0),i=n.n(r),o=n(241),l=n.n(o),c=n(229),u=n.n(c);function s(e){var t=e.lang,n=e.meta,r=e.keywords,o=e.title,c=e.description,s=e.image,m=e.pathname,d=a.data,p=c||d.site.siteMetadata.description,g=d.site.siteMetadata.siteUrl+(s||u.a),f=""+d.site.siteMetadata.siteUrl+m;return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+d.site.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:o},{property:"og:url",content:f},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:creator",content:"@"+d.site.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:p}].concat(g?[{property:"og:image",content:g},{property:"og:image:alt",content:o},{property:"og:image:width",content:s.width},{property:"og:image:height",content:s.height},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:g}]:[{name:"twitter:card",content:"summary"}]).concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}s.defaultProps={lang:"en",meta:[],keywords:[],pathname:"",image:""}},228:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(231),r=n(0),i=n.n(r),o=n(223),l=n(224),c=n(227);function u(e){var t=e.children,n=a.data;return i.a.createElement(o.a,{theme:l.c},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:n.site.siteMetadata.title}),i.a.createElement("main",null,t)))}},229:function(e,t,n){e.exports=n.p+"static/cover-030d79644f497a8e06c7ed38f6cd550d.jpg"},230:function(e,t,n){"use strict";n.r(t);n(54),n(17),n(14),n(15),n(8),n(22);var a=n(0),r=n.n(a),i=n(100);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},231:function(e){e.exports={data:{site:{siteMetadata:{title:"NFRONT",description:"A starter template to build a React and Gatsby-powered blog"}}}}},232:function(e){e.exports={data:{site:{siteMetadata:{title:"NFRONT",siteUrl:"https://marvelouss.netlify.com",description:"A starter template to build a React and Gatsby-powered blog",social:{twitter:"SpiderMan"}}}}}},233:function(e){e.exports={data:{site:{siteMetadata:{title:"NFRONT"}}}}},234:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"g",function(){return o}),n.d(t,"f",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return s});var a=n(223),r=a.b.div.withConfig({displayName:"navstyles__NavContainer",componentId:"rgiwr4-0"})(["display:flex;justify-content:space-between;@media (max-width:","){padding:0 1.5rem;}"],function(e){return e.theme.screen.md}),i=a.b.nav.withConfig({displayName:"navstyles__Nav",componentId:"rgiwr4-1"})(["position:absolute;top:0;left:0;right:0;width:100%;max-width:var(--max-width);margin:0 auto;z-index:1000;padding:1rem 1.5rem;background-color:transparent;@media (max-width:","){padding:1rem 0;}&.is-open{background-color:var(--alt-color);height:100vh;overflow:hidden;a{color:var(--secondary-color);}}font-size:90%;text-transform:uppercase;letter-spacing:1px;",";",";"],function(e){return e.theme.screen.md},function(e){return"inverse"===e.accent&&"\n        a {\n            color: var(--accent-color);\n        }\n    }\n    "},function(e){return e.fluid&&"\n        max-width: 100%;\n    "}),o=a.b.ul.withConfig({displayName:"navstyles__NavList",componentId:"rgiwr4-2"})(["list-style:none;display:flex;flex-direction:column;margin:1rem 0;",";"],function(e){return e.desktop&&"\n        flex-direction: row;\n        margin: 0;\n        \n        @media (max-width: "+e.theme.screen.md+") {\n            display: none;\n        }\n    "}),l=a.b.li.withConfig({displayName:"navstyles__NavItem",componentId:"rgiwr4-3"})(["position:relative;margin-bottom:0;margin-left:1.5rem;width:100%;font-weight:600;@media (max-width:","){margin-left:0;padding:0.75rem 1.5rem;border-bottom:1px solid rgba(225,225,225,0.4);&:first-child{border-top:1px solid rgba(225,225,225,0.4);}}&.active{a{font-weight:600;}}@media (min-width:","){::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:var(--secondary-color);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}}"],function(e){return e.theme.screen.md},function(e){return e.theme.screen.md}),c=a.b.div.withConfig({displayName:"navstyles__Brand",componentId:"rgiwr4-4"})(["font-weight:600;"]),u=a.b.div.withConfig({displayName:"navstyles__Mobile",componentId:"rgiwr4-5"})(["opacity:0;display:none;transition:all 0.25s ease;@media (max-width:","){opacity:1;display:block;visibility:visible;}"],function(e){return e.theme.screen.md}),s=a.b.div.withConfig({displayName:"navstyles__Hamburger",componentId:"rgiwr4-6"})(["position:absolute;top:1rem;right:1.5rem;width:25px;cursor:pointer;-webkit-tap-highlight-color:hsla(0,0%,0%,0);-webkit-tap-highlight-color:transparent;span{display:block;opacity:1;width:100%;height:3px;margin:4px 0;background:var(--secondary-color);transition:all 0.25s ease-in-out;&:nth-child(2){width:70%;}}&.is-open{span{background:var(--secondary-color);}span:first-child{transform:translateY(8px) translateY(-50%) rotate(45deg);}span:nth-child(2){opacity:0;}span:last-child{transform:translateY(-9px) translateY(50%) rotate(-45deg);}}"])},235:function(e,t,n){"use strict";n(14),n(15),n(8),n(22),n(16);var a=n(0),r=n.n(a);t.a=function(e){var t=e.href,n=e.children,a=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["href","children"]);return r.a.createElement("a",Object.assign({href:t},a,{rel:"noreferrer noopener",target:"_blank"}),n)}},236:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(16),n(30);var a=n(233),r=n(0),i=n.n(r),o=n(225),l=n(234);function c(){return i.a.createElement(i.a.Fragment,null,[{name:"Data",path:"/spreadsheet/"},{name:"Portfolio",path:"/portfolio/"},{name:"Blog",path:"/blog/"},{name:"Contact",path:"/contact/"}].map(function(e){var t=e.name,n=e.path;return i.a.createElement(l.f,{key:t},i.a.createElement(o.a,{to:n},t))}))}function u(e){var t=Object(r.useState)(!1),n=t[0],u=t[1],s=n?"hamburger is-open":"hamburger",m=n?"is-open":"",d=a.data;return i.a.createElement(l.d,Object.assign({},e,{className:m}),i.a.createElement(l.e,null,i.a.createElement(l.a,null,i.a.createElement(o.a,{to:"/"},d.site.siteMetadata.title)),i.a.createElement(l.g,{desktop:!0},i.a.createElement(c,null))),i.a.createElement(l.c,null,i.a.createElement(l.b,{className:s,onClick:function(){return u(!n)}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),n&&i.a.createElement(l.g,null,i.a.createElement(c,null))))}},237:function(e,t,n){"use strict";n(238);var a=n(0),r=n.n(a),i=n(225),o=n(223),l=n(224),c=n(235);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=r.a.createElement("path",{d:"M27.11 0A27.11 27.11 0 000 27.11a27.11 27.11 0 0027.11 27.11 27.11 27.11 0 0027.11-27.11V0z"}),m=r.a.createElement("g",{fill:"rgba(0,0,0,0.5)"},r.a.createElement("path",{d:"M34.79 40.9V37a1.5 1.5 0 00-1.5-1.5H20.22a1.5 1.5 0 01-1.5-1.5V20.92a1.5 1.5 0 00-1.5-1.5h-3.9a1.5 1.5 0 00-1.5 1.5v20a1.5 1.5 0 001.5 1.5h20a1.5 1.5 0 001.47-1.52zM42.55 32.65h-2.91a2 2 0 01-2-2V18.57a2 2 0 00-2-2H23.57a2 2 0 01-2-2v-2.9a2 2 0 012-2h19a2 2 0 012 2v19a2 2 0 01-2.02 1.98z"})),d=function(e){return r.a.createElement("svg",u({viewBox:"0 0 54.22 54.22"},e),s,m)},p=[{icon:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiNmZWM4NWIiPgogICA8dGl0bGU+R2l0SHViIEljb248L3RpdGxlPgogICA8cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+Cjwvc3ZnPgoK",link:"/"}],g=o.b.footer.withConfig({displayName:"footer__FooterWrapper",componentId:"ebcb2c-0"})(["font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--alt-color);background-color:var(--footer-color);a{color:var(--yellow);}"]),f=Object(o.b)(l.a).withConfig({displayName:"footer__StyledContainer",componentId:"ebcb2c-1"})(["display:flex;flex-direction:column;align-items:center;padding:2rem 1.5rem;@media (min-width:","){flex-direction:row;justify-content:space-between;}",";"],function(e){return e.theme.screen.sm},function(e){return e.fluid&&"\n        max-width: 100%;\n    "}),h=o.b.div.withConfig({displayName:"footer__SocialIcons",componentId:"ebcb2c-2"})(["display:flex;img{margin:0 8px;width:24px;height:24px;}@media (max-width:","){margin-top:30px;}"],function(e){return e.theme.screen.sm}),b=o.b.div.withConfig({displayName:"footer__Copyright",componentId:"ebcb2c-3"})([""]),y=Object(o.b)(l.a).withConfig({displayName:"footer__GRID",componentId:"ebcb2c-4"})(["display:flex;flex-direction:column;justify-content:space-between;@media (min-width:","){flex-direction:row;}"],function(e){return e.theme.screen.sm}),w=Object(o.b)(l.b).withConfig({displayName:"footer__StyledSection",componentId:"ebcb2c-5"})(["background:#212529;padding:3rem 0 !important;p{color:#6c757d;}.label{font-size:14px;color:var(--accent-color);}.button{font-size:14px;}ul{list-style-type:none;margin-left:0;li{margin-bottom:5px;}}svg{width:50px;fill:var(--yellow);}"]);t.a=function(e){return r.a.createElement(g,e,r.a.createElement(w,null,r.a.createElement(y,null,r.a.createElement("div",null,r.a.createElement("p",{className:"label"},"Headquarters"),r.a.createElement("p",null,"Tollbugata 24, 0157Oslo, Norway"),r.a.createElement("p",null,"Los Angeles, CA",r.a.createElement("br",null),"Warsaw, Poland")),r.a.createElement("div",null,r.a.createElement("p",{className:"label"},"Services"),r.a.createElement("ul",null,r.a.createElement("li",null,"Media"),r.a.createElement("li",null,"FAQs"))),r.a.createElement("div",null,r.a.createElement("p",{className:"label"},"Legal"),r.a.createElement("ul",null,r.a.createElement("li",null,"Privacy"),r.a.createElement("li",null,"Terms and Conditions"),r.a.createElement("li",null,"GDPR"),r.a.createElement("li",null,"Disclaimer"))),r.a.createElement("div",null,r.a.createElement(d,null)))),r.a.createElement(f,null,r.a.createElement(b,null,"© ",(new Date).getFullYear(),". Built for"," ",r.a.createElement(i.a,{to:"/"},"nFront")," by"," ",r.a.createElement(c.a,{href:"https://www.adamidea.com/"},"ADAMIDEA")),r.a.createElement(h,null,p.map(function(e){var t=e.icon,n=e.link;return r.a.createElement(c.a,{key:t,href:n},r.a.createElement("img",{src:t,alt:"link"}))}))))}},238:function(e,t,n){"use strict";n(239)("link",function(e){return function(t){return e(this,"a","href",t)}})},239:function(e,t,n){var a=n(1),r=n(9),i=n(38),o=/"/g,l=function(e,t,n,a){var r=String(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-templates-bloglist-js-58e02ac045852a6eabec.js.map