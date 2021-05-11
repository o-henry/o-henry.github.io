_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{fzsH:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return r})),n.d(t,"default",(function(){return N}));var a=n("cpVT"),o=n("dhJC"),c=(n("q1tI"),n("7ljp")),s=n("xK7a");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var r={title:"Component Pattern",description:"\ucef4\ud3ec\ub10c\ud2b8 \ud328\ud134",date:"2021-05-09T12:02:00.0Z",readTime:10},m={meta:r},l=function(e){var t=e.children;return Object(c.b)(s.a,{meta:r},t)};function N(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(l,b(b(b({},m),n),{},{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{style:{marginTop:"4rem",fontFamily:"NotoSansKR-Thin, MalgunGothic",fontSize:"11pt",lineHeight:"22pt",letterSpacing:".8px"}},Object(c.b)("h1",null,"Reusable"),Object(c.b)("p",null,"\ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\ub2e4 \ubcf4\uba74, \uc5b4\ub5bb\uac8c \uc7ac\ud65c\uc6a9 \uac00\ub2a5\ud55c \ucf54\ub4dc\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc744\uc9c0 \uace0\ubbfc\ud558\uac8c \ub429\ub2c8\ub2e4.\n\uc2e4\uc608\ub85c, \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\ub4e4\uc758 \uacbd\uc6b0, \uc190\uc27d\uac8c \ud574\ub2f9 UI\ub97c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4.\n\ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c, API\ub97c \ucc38\uc870\ud560 \ubfd0, \ub0b4\ubd80 \uad6c\ud604\uc5d0 \ub300\ud574 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uace0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\uc5b4\ub5bb\uac8c \ud574\uc57c \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc744\uc9c0\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud558\uaca0\uc2b5\ub2c8\ub2e4."),Object(c.b)("br",null),Object(c.b)("h1",null,"Context"),Object(c.b)("p",null,"\ub9ac\uc561\ud2b8\ub294 Hook \uacfc \ud568\uaed8 function\uc5d0\uc11c\ub3c4 \uc0c1\ud0dc\uad00\ub9ac\ub97c \ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc73c\uba70, ",Object(c.b)("strong",{parentName:"p"},"custom hook")," \uc744 \uc0ac\uc6a9\ud574 \uc7ac\uc0ac\uc6a9\uc758 \uc774\uc810 \ub610\ud55c \uac16\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 ",Object(c.b)("strong",{parentName:"p"},"Context API"),"\uc758 \uac1c\ubc1c\uc740, Redux\uc640 \uac19\uc740 Flux \uad6c\uc870\uc758 global \ud55c \uc0c1\ud0dc \uad00\ub9ac\uac00 \uc544\ub2c8\uc5b4\ub3c4, Prop drilling\uc744 \ud53c\ud560 \uc218 \uc788\ub294 \uc0c1\ud0dc \uad00\ub9ac \uae30\ub2a5\uc744 \uac16\ucd94\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ubb3c\ub860 Context\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74, Context\ub97c \uc0ac\uc6a9\ud55c \ud2b9\uc815 \ubc94\uc704\uc548\uc5d0 \uc2a4\ud1a0\uc5b4\uac00 \uc0dd\uae30\uac8c \ub418\uc5b4, Context\ub97c \ubc97\uc5b4\ub09c \uacf3\uc5d0\uc11c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4\ub294 \ubb38\uc81c\uc640, \uc7ac\uc0ac\uc6a9\uc774 \ubd88\uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub41c\ub2e4\ub294 \ubb38\uc81c\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("br",null),Object(c.b)("h1",null,"Compound Component"),Object(c.b)("div",{style:{fontFamily:'Poppins, "SeoulNamsanL"',borderRadius:"4px",lineHeight:"1.9rem",maxWidth:"100%",fontSize:"0.965rem",fontWeight:"100",position:"relative",padding:"2rem 1rem"}},Object(c.b)("p",null,"Think of compound component like the ",Object(c.b)("inlineCode",{parentName:"p"},"<select>")," and ",Object(c.b)("inlineCode",{parentName:"p"},"<option>")," elements in HTML.\nApart they don't do too much, but together they allow you to create the complete experience. - Kent C.Dodds")),Object(c.b)("p",null,"Compound Component\ub294 \uc554\ubb35\uc801 \uc0c1\ud0dc\ub97c \uacf5\uc720\ud558\uace0, \ucef4\ud3ec\ub10c\ud2b8 \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub294 \uc720\uc5f0\uc131\uc744 \ubd80\uc5ec\ud569\ub2c8\ub2e4.\n\ub0b4\ubd80 \ub3d9\uc791\uc740 \ucd94\uc0c1\ud654 \ud558\uace0, \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub294 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub85c\uc9c1\uc744 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\ub3c4\ub85d \uac00\ub2a5\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.\n\uc0ac\uc6a9\uc790\ub294 \uadf8\uc800, \ud574\ub2f9 \uc694\uc18c\uc758 \ubc30\uce58\uc5d0\ub9cc \uad00\uc2ec\uc744 \uac16\uc73c\uba74 \ub429\ub2c8\ub2e4."),Object(c.b)("br",null),Object(c.b)("h1",null,"Implementation"),Object(c.b)("p",null,"\uad6c\ud604 \uc608\uc81c\uc758 \uacbd\uc6b0 \ub9ce\uc740 \uc608\uc81c\uac00 \uc874\uc7ac\ud558\uae30 \ub54c\ubb38\uc5d0 \ub530\ub85c \ub2e4\ub8e8\uc9c0\ub294 \uc54a\uaca0\uc9c0\ub9cc,\n\uc694\uc810\uc740 \uc774\ub807\uc2b5\ub2c8\ub2e4. \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud558\uac8c \ud558\uae30 \uc704\ud558\uc5ec ",Object(c.b)("strong",{parentName:"p"},"Hook")," \uacfc ",Object(c.b)("strong",{parentName:"p"},"Context")," \ub97c \ud65c\uc6a9\ud558\ub294 \uac83 \uc785\ub2c8\ub2e4.\n\uc704\uc5d0\uc11c \ub9d0\ud588\ub4ef\uc774, hook\uc740 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4\ub294 \uc774\uc810\uc774 \uc788\uc73c\uba70, context\ub294 \uc0c1\ud0dc\uad00\ub9ac\uc758 \uc774\uc810\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("div",{className:"blog-post"},Object(c.b)("pre",b({},{className:"language-ts"}),Object(c.b)("code",b({parentName:"pre"},{className:"language-ts"}),Object(c.b)("span",b({parentName:"code"},{className:"token keyword"}),"const")," ",Object(c.b)("span",b({parentName:"code"},{className:"token maybe-class-name"}),"TabsContext")," ",Object(c.b)("span",b({parentName:"code"},{className:"token operator"}),"=")," ",Object(c.b)("span",b({parentName:"code"},{className:"token maybe-class-name"}),"React"),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",b({parentName:"code"},{className:"token generic-function"}),Object(c.b)("span",b({parentName:"span"},{className:"token function"}),"createContext"),Object(c.b)("span",b({parentName:"span"},{className:"token generic class-name"}),Object(c.b)("span",b({parentName:"span"},{className:"token operator"}),"<"),Object(c.b)("span",b({parentName:"span"},{className:"token maybe-class-name"}),"ITabsContext"),Object(c.b)("span",b({parentName:"span"},{className:"token operator"}),">"))),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",b({parentName:"code"},{className:"token keyword"}),"undefined"),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(c.b)("span",b({parentName:"code"},{className:"token keyword"}),"export")," ",Object(c.b)("span",b({parentName:"code"},{className:"token keyword"}),"const")," useTabs ",Object(c.b)("span",b({parentName:"code"},{className:"token operator"}),"=")," ",Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",b({parentName:"code"},{className:"token operator"}),":")," ",Object(c.b)("span",b({parentName:"code"},{className:"token maybe-class-name"}),"ITabsContext")," ",Object(c.b)("span",b({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(c.b)("span",b({parentName:"code"},{className:"token keyword"}),"const")," context ",Object(c.b)("span",b({parentName:"code"},{className:"token operator"}),"=")," ",Object(c.b)("span",b({parentName:"code"},{className:"token maybe-class-name"}),"React"),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",b({parentName:"code"},{className:"token method function property-access"}),"useContext"),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",b({parentName:"code"},{className:"token maybe-class-name"}),"TabsContext"),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(c.b)("span",b({parentName:"code"},{className:"token keyword"}),"if")," ",Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",b({parentName:"code"},{className:"token operator"}),"!"),"context",Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(c.b)("span",b({parentName:"code"},{className:"token keyword"}),"throw")," ",Object(c.b)("span",b({parentName:"code"},{className:"token keyword"}),"new")," ",Object(c.b)("span",b({parentName:"code"},{className:"token class-name"}),Object(c.b)("span",b({parentName:"span"},{className:"token known-class-name class-name"}),"Error")),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",b({parentName:"code"},{className:"token string"}),'"\uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 <Tabs> \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."'),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(c.b)("span",b({parentName:"code"},{className:"token keyword"}),"return")," context",Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),"}"),Object(c.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n"))),Object(c.b)("br",null),Object(c.b)("h1",null,"Provider Pattern"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Provider pattern")," \uc740 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac\uc804\uccb4\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uacf5\uc720\ud560 \uc218 \uc788\ub294 \ubc29\ubc95 \uc785\ub2c8\ub2e4.\n\ud398\uc774\uc9c0\uc5d0 \uacf5\uc720 \ub370\uc774\ud130\ub97c \ub85c\ub4dc\ud558\uace0 \ud45c\uc2dc\ud558\ub294 \ubb38\uc81c\ub294 \ud398\uc774\uc9c0\uc5d0 \uc561\uc138\uc2a4\ud574\uc57c \ud558\ub294 \ud558\uc704 \uad6c\uc131 \uc694\uc18c\uc5d0 \ud574\ub2f9 \uacf5\uc720 \uc0c1\ud0dc\ub97c \uc81c\uacf5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc774\ub97c \uc704\ud574\uc11c \uc6b0\ub9ac\ub294 ",Object(c.b)("strong",{parentName:"p"},"Context API"),"\ub85c data provider\ub97c \uc0dd\uc131\ud558\uace0, data\ub97c fetching \ud558\uace0 \uc804\uccb4 \ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac\uc5d0 \uc0c1\ud0dc\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774 \uacbd\uc6b0, child \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5bc\ub9c8\ub098 \uae4a\uac8c nesting \ub418\uc5b4\uc788\ub294\uc9c0\uc640 \uad00\uacc4\uc5c6\uc774, \uac19\uc740 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(c.b)("br",null),Object(c.b)("hr",{style:{width:"15px",border:"0.325px solid gray",marginTop:"1.125rem",marginBottom:"1.125rem"}}),Object(c.b)("h5",null,"\ucc38\uc870"),Object(c.b)("p",null,Object(c.b)("a",b({parentName:"p"},{href:"https://dev.to/alexi_be3/react-component-patterns-49ho"}),"component-pattern")))}N.isMDXComponent=!0},x3WN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/08-component",function(){return n("fzsH")}])}},[["x3WN",0,1,2]]]);