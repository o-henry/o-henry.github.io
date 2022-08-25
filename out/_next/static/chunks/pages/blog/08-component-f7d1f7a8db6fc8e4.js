(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{2471:function(n,e,s){"use strict";var a=s(536),t=s.n(a),o=s(7099),c=s.n(o),l=s(5893),r=c()("{MM} {DD}, {YYYY}");e.Z=function(n){var e=n.meta,s=n.project,a=n.blog;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"jsx-366848195 "+((s||a?"great-title":null)||""),children:e.title}),(0,l.jsxs)("div",{className:"jsx-366848195 details",children:[s||a?null:(0,l.jsx)("p",{className:"jsx-366848195",children:e.description}),(0,l.jsx)("span",{className:"jsx-366848195 "+((s||a?"hide":"date")||""),children:r.render(new Date(e.date))}),(0,l.jsx)("span",{className:"jsx-366848195 "+((s||a?"hide":"date")||""),children:e.readTime+" min read"})]}),(0,l.jsx)(t(),{id:"366848195",children:'.hide.jsx-366848195{display:none;}h1.jsx-366848195{font-size:1.5rem;font-weight:700;color:var(--color-header);font-family:"Recoleta-Regular";}.great-title.jsx-366848195{margin-top:2.5rem;font-size:3.125rem;text-align:center;color:var(--color-header);}.details.jsx-366848195 span.jsx-366848195{color:#bdbdbd;margin-right:1rem;}.details.jsx-366848195{font-weight:300;margin-bottom:2px;font-size:11pt;line-height:22pt;-webkit-letter-spacing:0.8px;-moz-letter-spacing:0.8px;-ms-letter-spacing:0.8px;letter-spacing:0.8px;font-family:"NotoSansKR-Thin",MalgunGothic;}.date.jsx-366848195{font-size:15px;}'})]})}},891:function(n,e,s){"use strict";var a=s(2471),t=s(5893);e.Z=function(n){var e=n.children,s=n.meta;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{meta:s,project:!0,blog:!0}),(0,t.jsx)("article",{children:e})]})}},2177:function(n,e,s){"use strict";s.r(e),s.d(e,{meta:function(){return o}});var a=s(5893),t=s(891),o={title:"Component Pattern",description:"\ucef4\ud3ec\ub10c\ud2b8 \ud328\ud134",date:"2021-05-09T12:02:00.0Z",readTime:10},c=function(n){var e=n.children;return(0,a.jsx)(t.Z,{meta:o,children:e})};function l(n){var e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span"},n.components);return(0,a.jsxs)("div",{style:{marginTop:"4rem",fontFamily:"Poppins, NotoSansKR-Thin, MalgunGothic",fontSize:"11pt",lineHeight:"22pt",letterSpacing:".8px"},children:[(0,a.jsx)(e.h1,{children:"Reusable"}),(0,a.jsx)("hr",{}),(0,a.jsx)(e.p,{children:"\ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\ub2e4 \ubcf4\uba74, \uc5b4\ub5bb\uac8c \uc7ac\ud65c\uc6a9 \uac00\ub2a5\ud55c \ucf54\ub4dc\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc744\uc9c0 \uace0\ubbfc\ud558\uac8c \ub429\ub2c8\ub2e4.\n\uc2e4\uc608\ub85c, \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\ub4e4\uc758 \uacbd\uc6b0, \uc190\uc27d\uac8c \ud574\ub2f9 UI\ub97c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4.\n\ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c, API\ub97c \ucc38\uc870\ud560 \ubfd0, \ub0b4\ubd80 \uad6c\ud604\uc5d0 \ub300\ud574 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uace0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\uc5b4\ub5bb\uac8c \ud574\uc57c \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc744\uc9c0\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud558\uaca0\uc2b5\ub2c8\ub2e4."}),(0,a.jsx)("br",{}),(0,a.jsx)(e.h1,{children:"Context"}),(0,a.jsx)("hr",{}),(0,a.jsx)(e.p,{children:"\ub9ac\uc561\ud2b8\ub294 Hook \uacfc \ud568\uaed8 function\uc5d0\uc11c\ub3c4 \uc0c1\ud0dc\uad00\ub9ac\ub97c \ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc73c\uba70, custom hook \uc744 \uc0ac\uc6a9\ud574 \uc7ac\uc0ac\uc6a9\uc758 \uc774\uc810 \ub610\ud55c \uac16\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 Context API\uc758 \uac1c\ubc1c\uc740, Redux\uc640 \uac19\uc740 Flux \uad6c\uc870\uc758 global \ud55c \uc0c1\ud0dc \uad00\ub9ac\uac00 \uc544\ub2c8\uc5b4\ub3c4, Prop drilling\uc744 \ud53c\ud560 \uc218 \uc788\ub294 \uc0c1\ud0dc \uad00\ub9ac \uae30\ub2a5\uc744 \uac16\ucd94\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ubb3c\ub860 Context\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74, Context\ub97c \uc0ac\uc6a9\ud55c \ud2b9\uc815 \ubc94\uc704\uc548\uc5d0 \uc2a4\ud1a0\uc5b4\uac00 \uc0dd\uae30\uac8c \ub418\uc5b4, Context\ub97c \ubc97\uc5b4\ub09c \uacf3\uc5d0\uc11c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4\ub294 \ubb38\uc81c\uc640, \uc7ac\uc0ac\uc6a9\uc774 \ubd88\uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub41c\ub2e4\ub294 \ubb38\uc81c\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),(0,a.jsx)("br",{}),(0,a.jsx)(e.h1,{children:"Compound Component"}),(0,a.jsx)("div",{style:{fontFamily:'Poppins, "SeoulNamsanL"',borderRadius:"4px",lineHeight:"1.9rem",maxWidth:"100%",fontSize:"0.965rem",fontWeight:"100",position:"relative",padding:"2rem 1rem"},children:(0,a.jsxs)(e.p,{children:["Think of compound component like the ",(0,a.jsx)(e.code,{children:"<select>"})," and ",(0,a.jsx)(e.code,{children:"<option>"})," elements in HTML.\nApart they don't do too much, but together they allow you to create the complete experience. - Kent C.Dodds"]})}),(0,a.jsx)(e.p,{children:"Compound Component\ub294 \uc554\ubb35\uc801 \uc0c1\ud0dc\ub97c \uacf5\uc720\ud558\uace0, \ucef4\ud3ec\ub10c\ud2b8 \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub294 \uc720\uc5f0\uc131\uc744 \ubd80\uc5ec\ud569\ub2c8\ub2e4.\n\ub0b4\ubd80 \ub3d9\uc791\uc740 \ucd94\uc0c1\ud654 \ud558\uace0, \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub294 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub85c\uc9c1\uc744 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\ub3c4\ub85d \uac00\ub2a5\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.\n\uc0ac\uc6a9\uc790\ub294 \uadf8\uc800, \ud574\ub2f9 \uc694\uc18c\uc758 \ubc30\uce58\uc5d0\ub9cc \uad00\uc2ec\uc744 \uac16\uc73c\uba74 \ub429\ub2c8\ub2e4."}),(0,a.jsx)("br",{}),(0,a.jsx)(e.h1,{children:"Implementation"}),(0,a.jsx)("hr",{}),(0,a.jsx)(e.p,{children:"\uc694\uc810\uc740 \uc774\ub807\uc2b5\ub2c8\ub2e4. \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud558\uac8c \ud558\uae30 \uc704\ud558\uc5ec Hook \uacfc Context \ub97c \ud65c\uc6a9\ud558\ub294 \uac83 \uc785\ub2c8\ub2e4.\n\uc704\uc5d0\uc11c \ub9d0\ud588\ub4ef\uc774, Hook\uc740 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4\ub294 \uc774\uc810\uc774 \uc788\uc73c\uba70, context\ub294 \uc0c1\ud0dc\uad00\ub9ac\uc758 \uc774\uc810\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),(0,a.jsx)("div",{className:"blog-post",children:(0,a.jsx)(e.pre,{className:"language-ts",children:(0,a.jsxs)(e.code,{className:"language-ts",children:[(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"TabsContext"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"React"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsxs)(e.span,{className:"token generic-function",children:[(0,a.jsx)(e.span,{className:"token function",children:"createContext"}),(0,a.jsxs)(e.span,{className:"token generic class-name",children:[(0,a.jsx)(e.span,{className:"token operator",children:"<"}),(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"ITabsContext"}),(0,a.jsx)(e.span,{className:"token operator",children:">"})]})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token keyword nil",children:"undefined"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(e.span,{className:"token keyword module",children:"export"})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," useTabs ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"ITabsContext"})," ",(0,a.jsx)(e.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," context ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"React"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token method function property-access",children:"useContext"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"TabsContext"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token operator",children:"!"}),"context",(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n        ",(0,a.jsx)(e.span,{className:"token keyword control-flow",children:"throw"})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(e.span,{className:"token class-name",children:(0,a.jsx)(e.span,{className:"token known-class-name class-name",children:"Error"})}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"\n            ",(0,a.jsx)(e.span,{className:"token string",children:'"\uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 <Tabs> \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."'}),"\n        ",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword control-flow",children:"return"})," context",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n"]})})})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(c,Object.assign({},n,{children:(0,a.jsx)(l,n)}))}},8163:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/08-component",function(){return s(2177)}])}},function(n){n.O(0,[184,774,888,179],(function(){return e=8163,n(n.s=e);var e}));var e=n.O();_N_E=e}]);