(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(154),c=t(169),o=t(152);var s=function(e){const{nextItem:a,prevItem:t}=e;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(o.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){const{content:a}=e,{frontMatter:t,metadata:n}=a;return r.a.createElement(l.b,{title:n.title,description:n.description},a&&r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(c.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),(n.nextItem||n.prevItem)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(s,{nextItem:n.nextItem,prevItem:n.prevItem}))))))}},154:function(e,a,t){"use strict";t.d(a,"a",(function(){return be}));var n=t(0),r=t.n(n),l=t(158),c=t(151),o=t(146),s=t(147),i=t(166),m=t(165),p=t(159),u=t(150),E=t(8),v=t.n(E),d=(t(12),t(149)),g=t.n(d),b=t(94),f=t.n(b);const h={DEFAULT:"default",CTA:"cta"},N=({isExternal:e,label:a,to:t,type:n})=>{const l=Object(c.a)(t)?Object(s.a)(t):t;return r.a.createElement("li",{className:g()(f.a.root,f.a[n],{[f.a.active]:Object(c.a)(l)})},r.a.createElement("a",{href:l,target:e?"_blank":"_self"},a))};N.propTypes={isExternal:v.a.bool,label:v.a.string.isRequired,type:v.a.oneOf(Object.values(h)),to:v.a.string.isRequired},N.defaultProps={isExternal:!1,type:h.DEFAULT};var k=N,_=t(95),y=t.n(_),P=t(93),O=t.n(P);var j=()=>{const{siteConfig:{themeConfig:e}}=Object(o.a)(),{navbar:a}=e,{cornerLink:t,primaryLinks:n,logo:l}=a;return r.a.createElement("div",{className:y.a.root},r.a.createElement("a",{className:O.a.logo,href:l.href},r.a.createElement("img",{alt:l.alt,src:Object(s.a)(l.src)})),r.a.createElement("ul",{className:y.a.right},n.map(({isExternal:e,label:a,to:t})=>r.a.createElement(k,{key:a,isExternal:e,label:a,to:t})),r.a.createElement(k,{className:y.a["corner-link"],label:t.label,to:t.href,type:h.CTA})))},M=t(96),w=t.n(M);const I=({children:e,links:a,onClick:t})=>{let l;return Object(n.useEffect)(()=>{l.addEventListener("click",e=>{e.stopPropagation()})}),r.a.createElement("div",{className:w.a.root,ref:e=>l=e},r.a.createElement("div",{className:w.a.menu},a.map(({isExternal:e,label:a,to:t})=>r.a.createElement(k,{key:a,isExternal:e,label:a,to:t})),e))};I.propTypes={links:v.a.array.isRequired};var x=I,C=t(97),L=t.n(C);var T=({cb:e,closeIcon:a,isOpen:t,openIcon:l})=>{let c;const o=Object(n.useRef)(null);return o.current=t,Object(n.useEffect)(()=>{c.addEventListener("click",a=>{o.current||(a.stopPropagation(),e())})},[]),r.a.createElement("img",{className:L.a.root,ref:e=>c=e,src:t?a:l})},S=t(98),R=t.n(S);const B=({activePopupMenu:e,setPopupMenu:a})=>{const{siteConfig:{themeConfig:t}}=Object(o.a)(),{navbar:n}=t,{cornerLink:l,primaryLinks:c,logo:i}=n;return r.a.createElement("div",{className:R.a.root},r.a.createElement("div",{className:R.a.mainContainer},r.a.createElement(T,{cb:()=>{a("primary")},closeIcon:Object(s.a)("img/close.svg"),isOpen:"primary"===e,openIcon:Object(s.a)("img/vertical-ellipse.svg")}),r.a.createElement("a",{href:i.href},r.a.createElement("img",{alt:i.alt,className:O.a.logo,src:Object(s.a)(i.src)})),r.a.createElement("a",{href:l.href},r.a.createElement("img",{src:Object(s.a)(l.image.src)}))),"primary"===e&&r.a.createElement(x,{links:c}))};B.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var q=B,A=t(99),D=t.n(A);const z=({activePopupMenu:e,setPopupMenu:a})=>r.a.createElement("div",{className:D.a.root},r.a.createElement("div",{className:"width-wrapper"},r.a.createElement(u.Breakpoint,{medium:!0,down:!0},r.a.createElement(q,{activePopupMenu:e,setPopupMenu:a})),r.a.createElement(u.Breakpoint,{large:!0,up:!0},r.a.createElement(j,null))));z.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var F=z,J=t(153),H=t(100),U=t.n(H);var $=()=>r.a.createElement("div",{className:U.a.root},r.a.createElement("span",{className:U.a.primary},r.a.createElement("b",null,"Developers")),r.a.createElement("span",{className:U.a.divider}," / "),r.a.createElement("span",{className:U.a.secondary},"Governance")),G=t(101),K=t.n(G);var Q=()=>{const{siteConfig:{themeConfig:e}}=Object(o.a)(),[a,t]=Object(n.useState)(!1),{navbar:l}=e,{secondaryLinks:c}=l;return r.a.createElement("div",{className:K.a.root},r.a.createElement($,null),r.a.createElement("div",{className:K.a.right},c.map(({isExternal:e,label:a,to:t})=>r.a.createElement(k,{key:a,isExternal:e,label:a,to:t})),r.a.createElement("div",{className:K.a.search},r.a.createElement(J.a,{handleSearchBarToggle:t,isSearchBarExpanded:a}))))},V=t(102),W=t.n(V);const X=({activePopupMenu:e,setPopupMenu:a})=>{const{siteConfig:{themeConfig:t}}=Object(o.a)(),[l,c]=Object(n.useState)(!1),{navbar:i}=t,{cornerLink:m,secondaryLinks:p,logo:u}=i;return r.a.createElement("div",null,r.a.createElement("div",{className:W.a.mainContainer},r.a.createElement($,null),r.a.createElement(T,{cb:()=>{a("secondary")},closeIcon:Object(s.a)("img/chevron-pressed.svg"),isOpen:"secondary"===e,openIcon:Object(s.a)("img/chevron-down.svg")})),"secondary"===e&&r.a.createElement(x,{links:p,onClick:e=>e.stopPropagation()},r.a.createElement("div",{className:W.a.search},r.a.createElement(J.a,{handleSearchBarToggle:c,isSearchBarExpanded:l}))))};X.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var Y=X,Z=t(103),ee=t.n(Z);const ae=({activePopupMenu:e,setPopupMenu:a})=>r.a.createElement("div",{className:ee.a.root},r.a.createElement("div",{className:"width-wrapper"},r.a.createElement(u.Breakpoint,{medium:!0,down:!0},r.a.createElement(Y,{activePopupMenu:e,setPopupMenu:a})),r.a.createElement(u.Breakpoint,{large:!0,up:!0},r.a.createElement(Q,null))));ae.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var te=ae,ne=t(104),re=t.n(ne);Object(u.setDefaultBreakpoints)([{small:parseInt(re.a["small-mobile-breakpoint-size"])},{medium:parseInt(re.a["medium-tablet-breakpoint-size"])},{large:parseInt(re.a["large-tablet-breakpoint-size"])},{xlarge:parseInt(re.a["larget-desktop-breakpoint-size"])}]);var le=()=>{const[e,a]=Object(n.useState)(null),t=e=>{a(e),null!==e&&document.querySelector("body").addEventListener("click",(function(){a(null)}),{once:!0})};return r.a.createElement(u.BreakpointProvider,null,r.a.createElement("nav",{className:O.a.root},r.a.createElement(F,{activePopupMenu:e,setPopupMenu:t}),r.a.createElement(te,{activePopupMenu:e,setPopupMenu:t})))},ce=t(1),oe=t(152),se=t(105),ie=t.n(se),me=t(160),pe=t(164);function ue({to:e,href:a,label:t,...n}){const l=Object(s.a)(e);return r.a.createElement(oe.a,Object(ce.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},n),t)}const Ee=({url:e,alt:a})=>r.a.createElement("img",{alt:a,className:g()("footer__logo",ie.a.logo),src:e}),ve=({children:e,title:a})=>r.a.createElement("div",{className:g()("col footer__col",ie.a.linkSection)},r.a.createElement("h4",{className:g()("footer__title",ie.a.title)},a),r.a.createElement("ul",{className:"footer__items"},e)),de=({items:e,title:a})=>r.a.createElement(ve,{title:a},e.map((e,a)=>e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(ue,e))));var ge=function(){const e=Object(o.a)(),{siteConfig:a={}}=e,{themeConfig:t={},projectName:n}=a,{footer:l}=t,{copyright:c,links:i=[],logo:m={},social:p={}}=l||{},{twitterHandle:u,githubRepo:E}=p,v=Object(s.a)(m.src);if(!l)return null;const d=[];for(let o=0;o<i.length;o+=2)d.push(r.a.createElement("div",{key:o,className:ie.a.linkColumn},r.a.createElement(de,{items:i[o].items,title:i[o].title}),i[o+1]&&r.a.createElement(de,{items:i[o+1].items,title:i[o+1].title})));return r.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===l.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:ie.a.footerLogoLink},r.a.createElement(Ee,{alt:m.alt,url:v})):r.a.createElement(Ee,{alt:m.alt,url:v}),d,r.a.createElement("div",{className:ie.a.linkColumn},r.a.createElement(ve,{title:"Social"},u&&r.a.createElement("li",{className:ie.a.socialLink},r.a.createElement(me.a,{"aria-label":`Star ${n} on GitHub`,className:ie.a.github,"data-show-count":"true",href:E},n)),E&&r.a.createElement("li",{className:ie.a.socialLink},r.a.createElement(pe.a,{className:ie.a.twitter,options:{showCount:!1},screenName:u}))))),(m||c)&&r.a.createElement("div",{className:g()("text--center",ie.a.copyright)},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}))))};t(106);const be="nav-pusher";a.b=function(e){const{siteConfig:a={}}=Object(o.a)(),{favicon:t,title:n,themeConfig:{image:u},url:E}=a,{children:v,title:d,noFooter:g,description:b,image:f,keywords:h,permalink:N,version:k}=e,_=d?`${d} | ${n}`:n,y=f||u;let P=E+Object(s.a)(y);Object(c.a)(y)||(P=y);const O=Object(s.a)(t);return r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),t&&r.a.createElement("link",{rel:"shortcut icon",href:O}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),k&&r.a.createElement("meta",{name:"docsearch:version",content:k}),h&&h.length&&r.a.createElement("meta",{name:"keywords",content:h.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:P}),y&&r.a.createElement("meta",{property:"twitter:image",content:P}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),N&&r.a.createElement("meta",{property:"og:url",content:E+N}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(p.a,null),r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement("div",{className:"nav-spacer"})),r.a.createElement("div",{className:be},r.a.createElement("div",{className:"main-wrapper width-wrapper"},v),!g&&r.a.createElement(ge,null))))}},169:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(149),c=t.n(l),o=t(148),s=t(152),i=t(176),m=t(108),p=t.n(m);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:l,isBlogPostPage:m=!1}=e,{date:E,permalink:v,tags:d}=n,{author:g,title:b}=t,f=t.author_url||t.authorURL,h=t.author_title||t.authorTitle,N=t.author_image_url||t.authorImageURL;return r.a.createElement("article",{className:m?void 0:"margin-bottom--xl"},(()=>{const e=m?"h1":"h2",a=E.substring(0,10).split("-"),t=a[0],n=u[parseInt(a[1],10)-1],l=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:c()("margin-bottom--sm",p.a.blogPostTitle)},m?b:r.a.createElement(s.a,{to:v},b)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:p.a.blogPostDate},n," ",l,", ",t)),r.a.createElement("div",{className:"avatar margin-vert--md"},N&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:f,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:N,alt:g})),r.a.createElement("div",{className:"avatar__intro"},g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},g)),r.a.createElement("small",{className:"avatar__subtitle"},h)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:i.a},a)),(d.length>0||l)&&r.a.createElement("footer",{className:"row margin-vert--lg"},d.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),d.map(({label:e,permalink:a})=>r.a.createElement(s.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:n.permalink,"aria-label":"Read more about "+b},r.a.createElement("strong",null,"Read More")))))}}}]);