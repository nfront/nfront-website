(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(219),o=a(277),l=a(279),c=a(293),s=a(222),m=a(233),d=a(227),u=(a(236),a(297)),p=a(237),f=a.n(p),g=a(230),h=a(217),b=h.b.div.withConfig({displayName:"bio__Bio",componentId:"sc-141ww1r-0"})(["display:flex;align-items:center;flex-flow:column;@media (min-width:","){flex-flow:row;}img{min-width:60px;border-radius:50%;}"],function(e){return e.theme.screen.sm}),w=h.b.p.withConfig({displayName:"bio__Text",componentId:"sc-141ww1r-1"})(["font-size:95%;margin:1.5rem 0;@media (min-width:","){margin:0 1rem;}"],function(e){return e.theme.screen.sm}),y=function(){var e=u.data,t=e.site.siteMetadata,a=t.author,n=t.social;return r.a.createElement(b,null,r.a.createElement(f.a,{style:{padding:"0 1.6rem"},fixed:e.avatar.childImageSharp.fixed,alt:a}),r.a.createElement(w,null,"Written by ",r.a.createElement("strong",null,a),", a talented young freelance photographer and aspiring scientist imbued with superhuman abilities."," ",r.a.createElement(g.a,{href:"https://twitter.com/"+n.twitter},"Follow him on Twitter")," ","but don't stalk him."))},v=a(221),E=a(218),x=a(240),I=a.n(x),A=a(223),N=a.n(A);a.d(t,"query",function(){return R});var C=h.b.ul.withConfig({displayName:"postTemplate__PrevNext",componentId:"sc-27sg87-0"})(["display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none;margin-left:0;padding:0;"]),M=h.b.span.withConfig({displayName:"postTemplate__Prev",componentId:"sc-27sg87-1"})(["display:block;"]),k=h.b.span.withConfig({displayName:"postTemplate__Next",componentId:"sc-27sg87-2"})(["display:block;text-align:left;@media (min-width:","){text-align:right;}"],function(e){return e.theme.screen.sm}),O=h.b.ul.withConfig({displayName:"postTemplate__TagList",componentId:"sc-27sg87-3"})(["list-style-type:none;margin-left:0;li{display:inline;&:not(:last-child):after{content:' • ';}}"]),R="3232600843",j=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.mdx,t=e.frontmatter.image,a=t&&t.childImageSharp.fluid.src,n=this.props.data.site.siteMetadata.title,u=this.props.pageContext,p=u.previous,f=u.next,g=this.props.data.site.siteMetadata.social.disqus,h={identifier:e.id,title:e.frontmatter.title};return r.a.createElement(s.a,{location:this.props.location,title:n},r.a.createElement(d.a,{accent:"inverse"}),r.a.createElement(v.a,{title:e.frontmatter.title,description:e.frontmatter.description,image:a||N.a,pathname:this.props.location.pathname}),null!=t&&r.a.createElement(I.a,{fluid:e.frontmatter.image.childImageSharp.fluid,style:{height:"60vh",width:"100vw",backgroundPosition:"center center"}}),r.a.createElement(E.c,null,r.a.createElement(E.a,null,r.a.createElement("h1",null,e.frontmatter.title),r.a.createElement(O,{className:"label"},r.a.createElement("li",null,e.frontmatter.date),r.a.createElement("li",null,e.timeToRead," Min Read"),e.frontmatter.tags.map(function(e){return r.a.createElement("li",{key:e+"tag"},r.a.createElement(i.a,{to:"/tag/"+Object(l.kebabCase)(e)+"/"},e))})),r.a.createElement("hr",null),r.a.createElement("article",null,r.a.createElement(o.MDXRenderer,null,e.body)),r.a.createElement("hr",null),r.a.createElement(C,null,r.a.createElement("li",null,p&&r.a.createElement(i.a,{to:p.fields.slug,rel:"prev"},r.a.createElement(M,{className:"label"},"Previous"),p.frontmatter.title)),r.a.createElement("li",null,f&&r.a.createElement(i.a,{to:f.fields.slug,rel:"next"},r.a.createElement(k,{className:"label"},"Next"),f.frontmatter.title))),r.a.createElement("hr",null),r.a.createElement(y,null),r.a.createElement(c.DiscussionEmbed,{shortname:g,config:h}))),r.a.createElement(m.a,null))},n}(n.Component);t.default=j},218:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return l});var n=a(217);t.e={screen:{xs:"575px",sm:"767px",md:"991px",lg:"1199px"}};var r=n.b.div.withConfig({displayName:"global__Container",componentId:"sc-10uw9fq-0"})(["max-width:var(--max-width);width:100%;margin:0 auto;padding:0 1.5rem;",";"],function(e){return e.fluid&&"\n        max-width: 100%;\n    "}),i=n.b.section.withConfig({displayName:"global__Section",componentId:"sc-10uw9fq-1"})(["padding:4rem 0;",";",";"],function(e){return e.alt&&"\n        background-color: var(--accent-color);  \n    "},function(e){return"alt"===e.accent&&"\n        background-color: var(--alt-blue);\n        h2,\n        p {\n            color: var(--accent-color)!important;\n        }\n    "}),o=n.b.div.withConfig({displayName:"global__SectionTitle",componentId:"sc-10uw9fq-2"})(["margin-bottom:3rem;text-align:center;@media (min-width:","){margin-bottom:3rem;}"],function(e){return e.theme.screen.sm}),l=n.b.div.withConfig({displayName:"global__Overlay",componentId:"sc-10uw9fq-3"})(["background:rgba(12,23,41,0.8);position:absolute;width:100%;height:100%;left:0;top:0;bottom:0;right:0;opacity:1;transition:all 0.4s ease-in-out 0s;"])},219:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(68),o=a.n(i);a.d(t,"a",function(){return o.a}),a.d(t,"b",function(){return i.navigate});a(220),a(10).default.enqueue,r.a.createContext({})},220:function(e,t,a){var n;e.exports=(n=a(224))&&n.default||n},221:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(226),r=a(0),i=a.n(r),o=a(234),l=a.n(o),c=a(223),s=a.n(c);function m(e){var t=e.lang,a=e.meta,r=e.keywords,o=e.title,c=e.description,m=e.image,d=e.pathname,u=n.data,p=c||u.site.siteMetadata.description,f=u.site.siteMetadata.siteUrl+(m||s.a),g=""+u.site.siteMetadata.siteUrl+d;return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+u.site.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:o},{property:"og:url",content:g},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:creator",content:"@"+u.site.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:p}].concat(f?[{property:"og:image",content:f},{property:"og:image:alt",content:o},{property:"og:image:width",content:m.width},{property:"og:image:height",content:m.height},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:f}]:[{name:"twitter:card",content:"summary"}]).concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})}m.defaultProps={lang:"en",meta:[],keywords:[],pathname:"",image:""}},222:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(225),r=a(0),i=a.n(r),o=a(217),l=a(218),c=a(221);function s(e){var t=e.children,a=n.data;return i.a.createElement(o.a,{theme:l.e},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:a.site.siteMetadata.title}),i.a.createElement("main",null,t)))}},223:function(e,t,a){e.exports=a.p+"static/cover-030d79644f497a8e06c7ed38f6cd550d.jpg"},224:function(e,t,a){"use strict";a.r(t);a(52),a(17),a(14),a(15),a(8),a(22);var n=a(0),r=a.n(n),i=a(100);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach(function(t){l(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({location:t,pageResources:a},a.json)):null}},225:function(e){e.exports={data:{site:{siteMetadata:{title:"NFRONT",description:"A starter template to build a React and Gatsby-powered blog"}}}}},226:function(e){e.exports={data:{site:{siteMetadata:{title:"NFRONT",siteUrl:"https://marvelouss.netlify.com",description:"A starter template to build a React and Gatsby-powered blog",social:{twitter:""}}}}}},227:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a(16),a(29);var n=a(228),r=a(0),i=a.n(r),o=a(219),l=a(229);function c(){return i.a.createElement(i.a.Fragment,null,[{name:"About",path:"/#about"},{name:"Capital",path:"/venture-capital/"},{name:"Software",path:"/software-development/"},{name:"Contact",path:"/contact/"}].map(function(e){var t=e.name,a=e.path;return i.a.createElement(l.f,{key:t},i.a.createElement(o.a,{to:a},t))}))}function s(e){var t=Object(r.useState)(!1),a=t[0],s=t[1],m=a?"hamburger is-open":"hamburger",d=a?"is-open":"",u=n.data;return i.a.createElement(l.d,Object.assign({},e,{className:d}),i.a.createElement(l.e,null,i.a.createElement(l.a,null,i.a.createElement(o.a,{to:"/"},u.site.siteMetadata.title)),i.a.createElement(l.g,{desktop:!0},i.a.createElement(c,null))),i.a.createElement(l.c,null,i.a.createElement(l.b,{className:m,onClick:function(){return s(!a)}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),a&&i.a.createElement(l.g,null,i.a.createElement(c,null))))}},228:function(e){e.exports={data:{site:{siteMetadata:{title:"NFRONT"}}}}},229:function(e,t,a){"use strict";a.d(t,"e",function(){return r}),a.d(t,"d",function(){return i}),a.d(t,"g",function(){return o}),a.d(t,"f",function(){return l}),a.d(t,"a",function(){return c}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return m});var n=a(217),r=n.b.div.withConfig({displayName:"navstyles__NavContainer",componentId:"rgiwr4-0"})(["display:flex;justify-content:space-between;@media (max-width:","){padding:0 1.5rem;}"],function(e){return e.theme.screen.md}),i=n.b.nav.withConfig({displayName:"navstyles__Nav",componentId:"rgiwr4-1"})(["position:absolute;top:0;left:0;right:0;width:100%;max-width:var(--max-width);margin:0 auto;z-index:1000;padding:1rem 1.5rem;background-color:transparent;@media (max-width:","){padding:1rem 0;}&.is-open{background-color:var(--alt-color);height:100vh;overflow:hidden;a{color:var(--secondary-color);}}font-size:90%;font-weight:500;text-transform:uppercase;letter-spacing:1px;",";",";"],function(e){return e.theme.screen.md},function(e){return"inverse"===e.accent&&"\n        a {\n            color: var(--accent-color);\n        }\n    }\n    "},function(e){return e.fluid&&"\n        max-width: 100%;\n    "}),o=n.b.ul.withConfig({displayName:"navstyles__NavList",componentId:"rgiwr4-2"})(["list-style:none;display:flex;flex-direction:column;margin:1rem 0;",";"],function(e){return e.desktop&&"\n        flex-direction: row;\n        margin: 0;\n        \n        @media (max-width: "+e.theme.screen.md+") {\n            display: none;\n        }\n    "}),l=n.b.li.withConfig({displayName:"navstyles__NavItem",componentId:"rgiwr4-3"})(["position:relative;margin-bottom:0;margin-left:1.5rem;width:100%;@media (max-width:","){margin-left:0;padding:0.75rem 1.5rem;border-bottom:1px solid rgba(225,225,225,0.4);&:first-child{border-top:1px solid rgba(225,225,225,0.4);}}&.active{a{font-weight:600;}}@media (min-width:","){::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:var(--secondary-color);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}}"],function(e){return e.theme.screen.md},function(e){return e.theme.screen.md}),c=n.b.div.withConfig({displayName:"navstyles__Brand",componentId:"rgiwr4-4"})([""]),s=n.b.div.withConfig({displayName:"navstyles__Mobile",componentId:"rgiwr4-5"})(["opacity:0;display:none;transition:all 0.25s ease;@media (max-width:","){opacity:1;display:block;visibility:visible;}"],function(e){return e.theme.screen.md}),m=n.b.div.withConfig({displayName:"navstyles__Hamburger",componentId:"rgiwr4-6"})(["position:absolute;top:1rem;right:1.5rem;width:25px;cursor:pointer;-webkit-tap-highlight-color:hsla(0,0%,0%,0);-webkit-tap-highlight-color:transparent;span{display:block;opacity:1;width:100%;height:3px;margin:4px 0;background:var(--secondary-color);transition:all 0.25s ease-in-out;&:nth-child(2){width:70%;}}&.is-open{span{background:var(--secondary-color);}span:first-child{transform:translateY(8px) translateY(-50%) rotate(45deg);}span:nth-child(2){opacity:0;}span:last-child{transform:translateY(-9px) translateY(50%) rotate(-45deg);}}"])},230:function(e,t,a){"use strict";a(14),a(15),a(8),a(22),a(16);var n=a(0),r=a.n(n);t.a=function(e){var t=e.href,a=e.children,n=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["href","children"]);return r.a.createElement("a",Object.assign({href:t},n,{rel:"noreferrer noopener",target:"_blank"}),a)}},233:function(e,t,a){"use strict";a(232);var n=a(0),r=a.n(n),i=a(219),o=a(217),l=a(218),c=a(230);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=r.a.createElement("path",{d:"M27.11 0A27.11 27.11 0 000 27.11a27.11 27.11 0 0027.11 27.11 27.11 27.11 0 0027.11-27.11V0z"}),d=r.a.createElement("g",{fill:"rgba(0,0,0,0.5)"},r.a.createElement("path",{d:"M34.79 40.9V37a1.5 1.5 0 00-1.5-1.5H20.22a1.5 1.5 0 01-1.5-1.5V20.92a1.5 1.5 0 00-1.5-1.5h-3.9a1.5 1.5 0 00-1.5 1.5v20a1.5 1.5 0 001.5 1.5h20a1.5 1.5 0 001.47-1.52zM42.55 32.65h-2.91a2 2 0 01-2-2V18.57a2 2 0 00-2-2H23.57a2 2 0 01-2-2v-2.9a2 2 0 012-2h19a2 2 0 012 2v19a2 2 0 01-2.02 1.98z"})),u=function(e){return r.a.createElement("svg",s({viewBox:"0 0 54.22 54.22"},e),m,d)},p=[{icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2U9IiNmMWM0MGYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgPHRpdGxlPlR3aXR0ZXIgSWNvbjwvdGl0bGU+CiAgIDxwYXRoIGQ9Ik0yMyAzYTEwLjkgMTAuOSAwIDAgMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMCAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMCAxIDMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwIDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAgMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAgMCAyMyAzeiI+PC9wYXRoPgo8L3N2Zz4KCg==",link:"/"}],f=o.b.footer.withConfig({displayName:"footer__FooterWrapper",componentId:"ebcb2c-0"})(["font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:1px;color:var(--alt-color);background-color:var(--footer-color);a{color:var(--yellow);}"]),g=Object(o.b)(l.a).withConfig({displayName:"footer__StyledContainer",componentId:"ebcb2c-1"})(["display:flex;flex-direction:column;align-items:center;padding:2rem 1.5rem;@media (min-width:","){flex-direction:row;justify-content:space-between;}",";svg{stroke:var(--yellow) !important;}"],function(e){return e.theme.screen.sm},function(e){return e.fluid&&"\n        max-width: 100%;\n    "}),h=o.b.div.withConfig({displayName:"footer__SocialIcons",componentId:"ebcb2c-2"})(["display:flex;img{margin:0 8px;width:24px;height:24px;}@media (max-width:","){margin-top:30px;}"],function(e){return e.theme.screen.sm}),b=o.b.div.withConfig({displayName:"footer__Copyright",componentId:"ebcb2c-3"})([""]),w=Object(o.b)(l.a).withConfig({displayName:"footer__GRID",componentId:"ebcb2c-4"})(["display:flex;flex-direction:column;justify-content:space-between;@media (min-width:","){flex-direction:row;}"],function(e){return e.theme.screen.sm}),y=Object(o.b)(l.c).withConfig({displayName:"footer__StyledSection",componentId:"ebcb2c-5"})(["background:#212529;padding:3rem 0 !important;p{color:#6c757d;}.label{font-size:14px;color:var(--accent-color);}ul{list-style-type:none;margin-left:0;li{margin-bottom:5px;}}svg{width:50px;fill:var(--yellow);}"]);t.a=function(e){return r.a.createElement(f,e,r.a.createElement(y,null,r.a.createElement(w,null,r.a.createElement("div",null,r.a.createElement("p",{className:"label"},"Headquarters"),r.a.createElement("p",null,"Tollbugata 24, 0157Oslo, Norway"),r.a.createElement("p",null,"Los Angeles, CA",r.a.createElement("br",null),"Warsaw, Poland")),r.a.createElement("div",null,r.a.createElement("p",{className:"label"},"Services"),r.a.createElement("ul",null,r.a.createElement("li",null,"Media"),r.a.createElement("li",null,"FAQs"))),r.a.createElement("div",null,r.a.createElement("p",{className:"label"},"Legal"),r.a.createElement("ul",null,r.a.createElement("li",null,"Privacy"),r.a.createElement("li",null,"Terms and Conditions"),r.a.createElement("li",null,"GDPR"),r.a.createElement("li",null,"Disclaimer"))),r.a.createElement("div",null,r.a.createElement(u,null)))),r.a.createElement(g,null,r.a.createElement(b,null,"© ",(new Date).getFullYear(),". Built for"," ",r.a.createElement(i.a,{to:"/"},"nFront")," by"," ",r.a.createElement(c.a,{href:"https://www.adamidea.com/"},"ADAMIDEA")),r.a.createElement(h,null,p.map(function(e){var t=e.icon,a=e.link;return r.a.createElement(c.a,{key:t,href:a},r.a.createElement("img",{src:t,alt:"link"}))}))))}},297:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD1ElEQVQ4y32Uz28bRRTHN4nEBSpuUMG5vwnE9s7+cOLY+8NOghvKgaSA1D8BhIRK7yBaqTd6qFAOFVIrKoSqgnpAFQjxQwJUtUmlpqRUpK0bO06cOq29Xtvx2vvlzeyuExXBSKOdfe87n/fm7ZuVJBruRFISzyOW1DDkISkczaP559zD6YQ7NfaGOzl2xM2nFXdm6vnI38jEh9xpI9ibS0qtE+/xhR4YplID9ReeCdb58UNkn3NttdS0FXhZTcymrYJs6+T7wn09FY/AFHAggOqhYTIwhMYTDVvtYkJHhwMsBQ1L8cOJLQrAfS735fRP+vsmRweibCRn3+5gndU+x2QSzQDiRZCnJrd5PBDX0p4L25mmqA4mEzVzbe0jLiBxl8S++29Qf7rBFGABtdWToqaGPBhldoA7WyRsZTU/2vR/QP5sk5avW/z4WU2W+l/LUsRRNw3ZK+vDVCcVzn9Auc0RtVRR0l/BY5N5vKbkuxhkZ6vPkqCIrIqCwfwrxz/AajqBjsXgbH+UHTBVwCqjr+LrD9/HTUv3u6Qlf6VuqS/y7GJczL/o/bERlO7dw8LFCygk9sKjL+rYGonFBhGgQ4GL8T2YnzuLlfIafhmNoZRO9HrUVhRwnAMPbwmh5v+tHkJ54Qb4uPHleSzT8TuZOBokplaCZyTwQDmI6+fmhGblzhKuEXA5nei6AXCWA6d5du2c7pfZfix/fxXRWPr5JyxOpNBKjaCdjuFPS8Ptq9/1/bfJf0sbxorBujVirBnyUQ5M8L7jERrqQdw8/akQ+62WeK5Vq1g4NoP5t/IollZDX1M8r589g79ie7Bqab0a1XbDYBkO3EWzvEXAdibh350aR6FQ6GdRbbfxx+w05qdtVGr1vr1UqeD3vIX1VMzfoIQeGay6abCXorY5F14nr5l6DYszeSx+cwl3fvwBvx6bxX2qbZHqee3tN7FEJVm88i1+o3UxOYx1ughUf94+l7b70GQjQVswXnx/i+r1UN6HhfhePCRQ0VRQMpholbvyftyiY5ZpvU52OqbPfxp1k40FfWgpQwFU+Ti8ep7DoTkdDkXmsGJGRpkmZYPH1EZPyL4WwDqYSHLYZ5xRs5RBiV52Znpe3M2gkcWdrpkMZYNglOFGMP1Nk3WfmMwPYZej/Y4RshyTDeyAnmqHv6h2cFN6dVPpEqhLhe/VKZhP2YvrabIz0b66ETIaYYY7oeRkZP+KsnzEbwCHI6eJAJTZJmV9uWaw1NMwcdqSPsJhwlEzZIn+0IORsJaRd5M4Q8J3KMC7BDGrGfnl/hGpZrXwmBxGWukfQC4o/DvrfwoAAAAASUVORK5CYII=",width:60,height:60,src:"/static/a653e2c56385b4aa5c4cebd9d4ed87bf/43244/avatar.png",srcSet:"/static/a653e2c56385b4aa5c4cebd9d4ed87bf/43244/avatar.png 1x,\n/static/a653e2c56385b4aa5c4cebd9d4ed87bf/5cf0a/avatar.png 1.5x,\n/static/a653e2c56385b4aa5c4cebd9d4ed87bf/1e576/avatar.png 2x"}}},site:{siteMetadata:{author:"",social:{twitter:""}}}}}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-e0bec55f2535fff7b169.js.map