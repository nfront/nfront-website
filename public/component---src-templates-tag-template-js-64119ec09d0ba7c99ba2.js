(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{208:function(t,e,n){"use strict";n.r(e),n.d(e,"Query",function(){return d});var a=n(0),r=n.n(a),i=n(225),o=n(228),c=n(227),l=n(236),s=n(224),d="3202288788";e.default=function(t){var e=t.data.allMdx.edges,n=t.pageContext.tag,a=t.data.allMdx.totalCount,d=a+" post"+(1===a?"":"s")+' tagged with "'+n+'"';return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:n}),r.a.createElement(l.a,null),r.a.createElement(s.b,null,r.a.createElement(s.a,null,r.a.createElement("h2",null,d),r.a.createElement("hr",null),e.map(function(t,e){var n=t.node;return r.a.createElement("div",null,r.a.createElement(i.a,{to:n.fields.slug,key:e},r.a.createElement("h3",null,n.frontmatter.title)),r.a.createElement("p",{className:"label"},"Published on ",n.frontmatter.date),r.a.createElement("hr",null))}),r.a.createElement(i.a,{to:"/tags"},r.a.createElement("button",{className:"button inverse"},"All tags")))))}},224:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var a=n(223);e.c={screen:{xs:"575px",sm:"767px",md:"991px",lg:"1199px"}};var r=a.b.div.withConfig({displayName:"global__Container",componentId:"sc-10uw9fq-0"})(["max-width:var(--max-width);width:100%;margin:0 auto;padding:0 1.5rem;",";"],function(t){return t.fluid&&"\n        max-width: 100%;\n    "}),i=a.b.section.withConfig({displayName:"global__Section",componentId:"sc-10uw9fq-1"})(["padding:5rem 0;@media (min-width:","){padding:7rem 0;}",";",";",";"],function(t){return t.theme.screen.sm},function(t){return t.alt&&"\n        background-color: var(--accent-color);  \n    "},function(t){return"secondary"===t.accent&&"\n        background-color: var(--primary-color);        \n    "},function(t){return"alt"===t.accent&&"\n        background-color: var(--alt-blue);\n        h2,\n        p {\n            color: white;\n        }\n    "});Object(a.b)(r).withConfig({displayName:"global__Hero",componentId:"sc-10uw9fq-2"})(["display:flex;flex-flow:column;justify-content:center;align-items:center;min-width:100%;min-height:100vh;color:var(--secondary-color);background-color:var(--primary-color);",";"],function(t){return"inverse"===t.accent&&"\n        background-color: var(--alt-color);\n    "})},225:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(68),o=n.n(i);n.d(e,"a",function(){return o.a}),n.d(e,"b",function(){return i.navigate});n(226),n(10).default.enqueue,r.a.createContext({})},226:function(t,e,n){var a;t.exports=(a=n(232))&&a.default||a},227:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var a=n(234),r=n(0),i=n.n(r),o=n(241),c=n.n(o),l=n(229),s=n.n(l);function d(t){var e=t.lang,n=t.meta,r=t.keywords,o=t.title,l=t.description,d=t.image,u=t.pathname,m=a.data,p=l||m.site.siteMetadata.description,f=m.site.siteMetadata.siteUrl+(d||s.a),g=""+m.site.siteMetadata.siteUrl+u;return i.a.createElement(c.a,{htmlAttributes:{lang:e},title:o,titleTemplate:"%s | "+m.site.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:o},{property:"og:url",content:g},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:creator",content:"@"+m.site.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:p}].concat(f?[{property:"og:image",content:f},{property:"og:image:alt",content:o},{property:"og:image:width",content:d.width},{property:"og:image:height",content:d.height},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:f}]:[{name:"twitter:card",content:"summary"}]).concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[],pathname:"",image:""}},228:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(233),r=n(0),i=n.n(r),o=n(223),c=n(224),l=n(227);function s(t){var e=t.children,n=a.data;return i.a.createElement(o.a,{theme:c.c},i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:n.site.siteMetadata.title}),i.a.createElement("main",null,e)))}},229:function(t,e,n){t.exports=n.p+"static/cover-030d79644f497a8e06c7ed38f6cd550d.jpg"},230:function(t){t.exports={data:{site:{siteMetadata:{title:"NFRONT"}}}}},231:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"d",function(){return i}),n.d(e,"g",function(){return o}),n.d(e,"f",function(){return c}),n.d(e,"a",function(){return l}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return d});var a=n(223),r=a.b.div.withConfig({displayName:"navstyles__NavContainer",componentId:"rgiwr4-0"})(["display:flex;justify-content:space-between;@media (max-width:","){padding:0 1.5rem;}"],function(t){return t.theme.screen.md}),i=a.b.nav.withConfig({displayName:"navstyles__Nav",componentId:"rgiwr4-1"})(["position:absolute;top:0;left:0;right:0;width:100%;max-width:var(--max-width);margin:0 auto;z-index:1000;padding:1rem 1.5rem;background-color:transparent;@media (max-width:","){padding:1rem 0;}&.is-open{background-color:var(--alt-color);height:100vh;overflow:hidden;a{color:var(--secondary-color);}}font-size:90%;text-transform:uppercase;letter-spacing:1px;",";",";"],function(t){return t.theme.screen.md},function(t){return"inverse"===t.accent&&"\n        a {\n            color: var(--accent-color);\n        }\n    }\n    "},function(t){return t.fluid&&"\n        max-width: 100%;\n    "}),o=a.b.ul.withConfig({displayName:"navstyles__NavList",componentId:"rgiwr4-2"})(["list-style:none;display:flex;flex-direction:column;margin:1rem 0;",";"],function(t){return t.desktop&&"\n        flex-direction: row;\n        margin: 0;\n        \n        @media (max-width: "+t.theme.screen.md+") {\n            display: none;\n        }\n    "}),c=a.b.li.withConfig({displayName:"navstyles__NavItem",componentId:"rgiwr4-3"})(["position:relative;margin-bottom:0;margin-left:1.5rem;width:100%;font-weight:600;@media (max-width:","){margin-left:0;padding:0.75rem 1.5rem;border-bottom:1px solid rgba(225,225,225,0.4);&:first-child{border-top:1px solid rgba(225,225,225,0.4);}}&.active{a{font-weight:600;}}@media (min-width:","){::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:var(--secondary-color);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}}"],function(t){return t.theme.screen.md},function(t){return t.theme.screen.md}),l=a.b.div.withConfig({displayName:"navstyles__Brand",componentId:"rgiwr4-4"})(["font-weight:600;"]),s=a.b.div.withConfig({displayName:"navstyles__Mobile",componentId:"rgiwr4-5"})(["opacity:0;display:none;transition:all 0.25s ease;@media (max-width:","){opacity:1;display:block;visibility:visible;}"],function(t){return t.theme.screen.md}),d=a.b.div.withConfig({displayName:"navstyles__Hamburger",componentId:"rgiwr4-6"})(["position:absolute;top:1rem;right:1.5rem;width:25px;cursor:pointer;-webkit-tap-highlight-color:hsla(0,0%,0%,0);-webkit-tap-highlight-color:transparent;span{display:block;opacity:1;width:100%;height:3px;margin:4px 0;background:var(--secondary-color);transition:all 0.25s ease-in-out;&:nth-child(2){width:70%;}}&.is-open{span{background:var(--secondary-color);}span:first-child{transform:translateY(8px) translateY(-50%) rotate(45deg);}span:nth-child(2){opacity:0;}span:last-child{transform:translateY(-9px) translateY(50%) rotate(-45deg);}}"])},232:function(t,e,n){"use strict";n.r(e);n(55),n(17),n(14),n(15),n(8),n(22);var a=n(0),r=n.n(a),i=n(101);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(i.a,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({location:e,pageResources:n},n.json)):null}},233:function(t){t.exports={data:{site:{siteMetadata:{title:"NFRONT",description:"A starter template to build a React and Gatsby-powered blog"}}}}},234:function(t){t.exports={data:{site:{siteMetadata:{title:"NFRONT",siteUrl:"https://marvelouss.netlify.com",description:"A starter template to build a React and Gatsby-powered blog",social:{twitter:"SpiderMan"}}}}}},236:function(t,e,n){"use strict";n.d(e,"a",function(){return s});n(16),n(30);var a=n(230),r=n(0),i=n.n(r),o=n(225),c=n(231);function l(){return i.a.createElement(i.a.Fragment,null,[{name:"Data",path:"/spreadsheet/"},{name:"Portfolio",path:"/portfolio/"},{name:"Blog",path:"/blog/"},{name:"Contact",path:"/contact/"}].map(function(t){var e=t.name,n=t.path;return i.a.createElement(c.f,{key:e},i.a.createElement(o.a,{to:n},e))}))}function s(t){var e=Object(r.useState)(!1),n=e[0],s=e[1],d=n?"hamburger is-open":"hamburger",u=n?"is-open":"",m=a.data;return i.a.createElement(c.d,Object.assign({},t,{className:u}),i.a.createElement(c.e,null,i.a.createElement(c.a,null,i.a.createElement(o.a,{to:"/"},m.site.siteMetadata.title)),i.a.createElement(c.g,{desktop:!0},i.a.createElement(l,null))),i.a.createElement(c.c,null,i.a.createElement(c.b,{className:d,onClick:function(){return s(!n)}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),n&&i.a.createElement(c.g,null,i.a.createElement(l,null))))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-js-64119ec09d0ba7c99ba2.js.map