(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{Er5i:function(e,a,t){"use strict";t.r(a),t.d(a,"meta",(function(){return r})),t.d(a,"default",(function(){return l}));var n=t("cpVT"),c=t("dhJC"),s=(t("q1tI"),t("7ljp")),o=t("xK7a");function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var r={title:"TDD",description:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud328\ud134\uacfc \ud14c\uc2a4\ud2b8",date:"2021-05-04T11:15:00.0Z",readTime:4},m={meta:r},N=function(e){var a=e.children;return Object(s.b)(o.a,{meta:r},a)};function l(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(s.b)(N,b(b(b({},m),t),{},{components:a,mdxType:"MDXLayout"}),Object(s.b)("div",{style:{marginTop:"4rem",fontFamily:"NotoSansKR-Thin, MalgunGothic",fontSize:"11pt",lineHeight:"22pt",letterSpacing:".8px"}},Object(s.b)("h1",null,"TDD"),Object(s.b)("hr",null),Object(s.b)("h3",{style:{fontFamily:"SeoulNamsanL"}},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub77c"),Object(s.b)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\ub97c \ub9cc\ub4e4\ub824\uba74 \ud504\ub85c\uadf8\ub7a8\uc744 \ub2e8\uc704\ubcc4\ub85c \ub098\ub204\uc5b4 \uac1c\ubc1c\ud558\ub77c."),Object(s.b)("p",null,"\ub2e8\uc704\ub780 \uc791\uc740 \uc778\ud130\ud398\uc774\uc2a4 \uc640 \ub2e8\uc77c \ucc45\uc784\uc744 \uac00\uc9c4 \ubaa8\ub4c8\uc744 \ub9d0\ud55c\ub2e4. \ub2e4\ub978 \ub2e8\uc704\uc758 \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4\uba74 \uc758\uc874\uc131 \uc8fc\uc785\uc774\ub77c\ub294 SOLID \ud55c \uce5c\uad6c\uc5d0\uac8c \ubd80\ud0c1\ud558\ub77c.\n\ubc1b\ub294 \ucabd \uc0dd\uc131\uc790 \ud568\uc218\ub97c \ud1b5\ud574 \uc11c\ube44\uc2a4\ub97c \uc8fc\uace0\uc790 \ud55c\ub2e4\uba74, \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \uc2dc \ubaa8\ud615\uc744 \uc0ac\uc6a9\ud574 \ud14c\uc2a4\ud2b8\ud560 \ub300\uc0c1\ucf54\ub4dc\ub97c \ud558\ub098\uc758 \ub2e8\uc704\ub85c \uc881\ud78c\ub2e4."),Object(s.b)("hr",null),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\ud14c\uc2a4\ud2b8 \uacb0\uacfc \uc790\uccb4\ub97c \uae30\ub2a5\uba85\uc138\ub85c \ubcf4\uace0 \ub420 \uc218 \uc788\ub3c4\ub85d \uad6c\uccb4\uc801\uc73c\ub85c \uae30\uc220\ud55c\ub2e4.")),Object(s.b)("br",null),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\uae30\ubcf8\uc801 TDD\uc758 \uc808\ucc28")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\uc2e4\ud328\ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud55c\ub2e4. \ubcf8\uc778\uc774 \ubb34\uc5c7\uc744 \ud14c\uc2a4\ud2b8\ud558\ub824\uace0 \ud558\ub294\uc9c0 \ud655\uc2e4\ud574\uc9c4\ub2e4."),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\ucf54\ub529 \uc804 \ud14c\uc2a4\ud2b8\ub97c \uba3c\uc800 \uc791\uc131\ud55c\ub2e4."),Object(s.b)("li",{parentName:"ul"},"\uc5d0\ub7ec\uc870\uac74\uc744 \uba3c\uc800 \ud14c\uc2a4\ud2b8\ud55c\ub2e4."),Object(s.b)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud55c\uac83 \ubcf4\ub2e4 \uac04\ub2e8\ud55c\uac83\uc744 \uba3c\uc800 \ud14c\uc2a4\ud2b8\ud55c\ub2e4."),Object(s.b)("li",{parentName:"ul"},"\uad6c\uccb4\uc801\uc73c\ub85c \uc791\uc131\ud55c\ub2e4."),Object(s.b)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ub9c8\ub2e4 \ud55c\uac00\uc9c0\ub9cc \ud655\uc778\ud55c\ub2e4."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\ud14c\uc2a4\ud2b8\uac00 \uc131\uacf5\ud560\ub9cc\ud07c \ucf54\ub529\ud55c\ub2e4.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\ub9ac\ud329\ud1a0\ub9c1 \ud55c\ub2e4."),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"DRY \ud558\uac8c \uc720\uc9c0\ud55c\ub2e4."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\uc2e4\ud328\ud558\ub294 \ud14c\uc2a4\ud2b8\uc5d0\uc11c\ub294 \ud574\ub2f9 \uae30\ub2a5\uc744 \uc5b4\ub5bb\uac8c \uad6c\uc131\ud560\uc9c0 \ub610, \uc5b4\ub5a4 \uac83\uc774 \ud544\uc694\ud55c\uc9c0\ub4f1\uc758 \uba85\uc138\ub97c \uc791\uc131\ud55c\ub2e4."))),Object(s.b)("br",null),Object(s.b)("h1",null,"BDD"),Object(s.b)("hr",null),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub294 \uace7 \uba85\uc138\uac00 \ub41c\ub2e4."),Object(s.b)("li",{parentName:"ul"},"BDD(\ud589\uc704 \uc8fc\ub3c4 \uac1c\ubc1c) ~\ub294 \uc774\ub7ec\ud574\uc57c \ud55c\ub2e4. \ub3d9\uc791\uc5d0 \ub300\ud574 \uadf8\ub9b0\ub2e4."),Object(s.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uce21\uba74\uc5d0\uc11c\uc758 \ud14c\uc2a4\ud2b8 \ud55c\ub2e4.",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uc5d0\uac8c \uc608\uc0c1\ud558\ub294\ub300\ub85c\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294\uc9c0\ub97c \ud14c\uc2a4\ud2b8 \ud55c\ub2e4."),Object(s.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\ub294 \ud574\ub2f9 \uae30\ub2a5\uc774 \uc5b4\ub5bb\uac8c \uc2e4\ud589\ub418\ub294\uc9c0 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\ub294\ub2e4. \uadf8\uc800 \uc790\uc2e0\uc774 \uae30\ub300\ud558\ub294\ub300\ub85c \uc791\ub3d9\ud558\ub294 \uc9c0\ub97c \uace0\ub824\ud55c\ub2e4.")))),Object(s.b)("br",null),Object(s.b)("h1",null,"RTL"),Object(s.b)("div",{style:{fontFamily:'Poppins, "SeoulNamsanL"',borderRadius:"4px",lineHeight:"1.9rem",maxWidth:"100%",fontSize:"0.965rem",fontWeight:"100",position:"relative",padding:"2rem 1rem"}},Object(s.b)("p",null,"The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page. In this way, the library helps ensure your tests give you confidence that your application will work when a real user uses it.\nIt should be generally useful for testing the application components in the way the user would use it.")),Object(s.b)("div",{className:"blog-post"},Object(s.b)("pre",b({},{className:"language-ts"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-ts"}),Object(s.b)("span",b({parentName:"code"},{className:"token keyword"}),"import")," ",Object(s.b)("span",b({parentName:"code"},{className:"token imports"}),Object(s.b)("span",b({parentName:"span"},{className:"token punctuation"}),"{")," render",Object(s.b)("span",b({parentName:"span"},{className:"token punctuation"}),",")," screen ",Object(s.b)("span",b({parentName:"span"},{className:"token punctuation"}),"}"))," ",Object(s.b)("span",b({parentName:"code"},{className:"token keyword"}),"from")," ",Object(s.b)("span",b({parentName:"code"},{className:"token string"}),'"@testing-library/react"'),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"/*\n  testing library\ub97c \uc0ac\uc6a9\ud560 \ub54c, \ud14c\uc2a4\ud2b8\ub97c \uc791\ub3d9\ud558\ub294 \uae30\ub2a5 \uba85\uc138 \uc704\uc8fc\ub85c \uc791\uc131\ud558\uac8c \ub418\uba74,\n  \ud574\ub2f9 \ud14c\uc2a4\ud2b8\uc5d0\uc11c \ud544\uc694\ub85c \ud558\ub294 \uae30\ub2a5\uc774 \ubcf4\uc77c \uac83\uc774\ub2e4.\n  \uadf8\ub54c API\ub97c \ucc38\uc870\ud558\uc5ec \ud574\ub2f9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \uc2dd\uc758 \uc0ac\uace0\ub97c \uac16\uc790.\n  \uc0ac\uc6a9\uc790\uc758 \uad00\uc810, \uc2e4\uc81c \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0\uc5d0 \ub300\ud574 \ud14c\uc2a4\ud305 \ud55c\ub2e4.\n  \uc0c1\ud0dc\uac00 \uc5b4\ub5bb\uac8c \uad00\ub9ac\ub418\uace0, prop\uc774 \uc5b4\ub5bb\uac8c \ub118\uc5b4\uac00\ub294\uc9c0 \ub4f1\uc758 \ud14c\uc2a4\ud2b8\ub294 enzyme\ub97c \uc0ac\uc6a9\ud558\uc790.\n*/"),"\n\n",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"// Arrange \u2192 Act \u2192 Assert"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"describe"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token string"}),'"Comment"'),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",b({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"test"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token string"}),'"It renders the comment and the author"'),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",b({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"// Arrange the data(in this case props)"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token keyword"}),"const")," props ",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"{")," comment",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",b({parentName:"code"},{className:"token string"}),'"Test for TDD & BDD"'),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),",")," author",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",b({parentName:"code"},{className:"token string"}),'"Henry"')," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"// Act"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"render"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"<"),Object(s.b)("span",b({parentName:"code"},{className:"token maybe-class-name"}),"Comment")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"{"),Object(s.b)("span",b({parentName:"code"},{className:"token spread operator"}),"..."),"props",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),"/"),Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),">"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"// Now we should be asserting"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"// that we are actually rendering the comment and author"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"// Assert"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"expect"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),"screen",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",b({parentName:"code"},{className:"token method function property-access"}),"getByText"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),"props",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",b({parentName:"code"},{className:"token property-access"}),"comment"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",b({parentName:"code"},{className:"token method function property-access"}),"toBeDefined"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"expect"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),"screen",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",b({parentName:"code"},{className:"token method function property-access"}),"getByText"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token template-string"}),Object(s.b)("span",b({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(s.b)("span",b({parentName:"span"},{className:"token string"}),"- "),Object(s.b)("span",b({parentName:"span"},{className:"token interpolation"}),Object(s.b)("span",b({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"props",Object(s.b)("span",b({parentName:"span"},{className:"token punctuation"}),"."),Object(s.b)("span",b({parentName:"span"},{className:"token property-access"}),"author"),Object(s.b)("span",b({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(s.b)("span",b({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",b({parentName:"code"},{className:"token method function property-access"}),"toBeDefined"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc778\uc2a4\ud134\uc2a4\ub85c \uac16\ub294\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud14c\uc2a4\ud2b8 \ud574\uc57c\ud560\uae4c")),Object(s.b)("p",null,"RTL \uc5d0\uc11c\ub294 Parent \ucef4\ud3ec\ub10c\ud2b8\uac00 Child \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc5b4\ub5bb\uac8c \ub80c\ub354\ub9c1 \ud558\ub294\uc9c0\ub294 \uace0\ub824 \uc694\uc18c\uac00 \uc544\ub2c8\ub2e4."),Object(s.b)("p",null,"\uadf8\ub7fc \uc5b4\ub5bb\uac8c \ud14c\uc2a4\ud305 \ud574\uc57c \ud558\ub294\uac00 ?"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"data-testid"),"\ub97c \ud3ec\ud568\ud55c \ud0dc\uadf8\ub97c \ucd94\uac00\ud55c\ub2e4. \ud574\ub2f9 DOM\uc5d0 \uc811\uadfc\ud574\uc11c \ud14c\uc2a4\ud305 \ud558\ub294\uac78 \ubaa9\ud45c\ub85c \ud55c\ub2e4.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"Using mocking of the child component")))),Object(s.b)("div",{className:"blog-post"}),Object(s.b)("pre",b({},{className:"language-ts"}),Object(s.b)("code",b({parentName:"pre"},{className:"language-ts"}),Object(s.b)("span",b({parentName:"code"},{className:"token comment"}),"/*\n  <Forms>\n    <Input />\n  </Forms>\n*/"),"\n\n",Object(s.b)("span",b({parentName:"code"},{className:"token keyword"}),"import")," ",Object(s.b)("span",b({parentName:"code"},{className:"token imports"}),Object(s.b)("span",b({parentName:"span"},{className:"token punctuation"}),"{")," render",Object(s.b)("span",b({parentName:"span"},{className:"token punctuation"}),",")," screen ",Object(s.b)("span",b({parentName:"span"},{className:"token punctuation"}),"}"))," ",Object(s.b)("span",b({parentName:"code"},{className:"token keyword"}),"from")," ",Object(s.b)("span",b({parentName:"code"},{className:"token string"}),'"@testing-library/react"'),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"describe"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token string"}),'"<Forms />"'),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",b({parentName:"code"},{className:"token arrow operator"}),"=>"),Object(s.b)("span",b({parentName:"code"},{className:"token operator"}),">")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"it"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token string"}),"'should render Input component'"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",b({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.b)("span",b({parentName:"code"},{className:"token function"}),"expect"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),"screen",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",b({parentName:"code"},{className:"token method function property-access"}),"getByLabelText"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token regex"}),Object(s.b)("span",b({parentName:"span"},{className:"token regex-delimiter"}),"/"),Object(s.b)("span",b({parentName:"span"},{className:"token regex-source language-regex"}),"input"),Object(s.b)("span",b({parentName:"span"},{className:"token regex-delimiter"}),"/"),Object(s.b)("span",b({parentName:"span"},{className:"token regex-flags"}),"i")),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",b({parentName:"code"},{className:"token method function property-access"}),"toBeInTheDocument"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",b({parentName:"code"},{className:"token punctuation"}),")"),"\n\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"RTL \uc5d0\uc11c \ud53c\ud574\uc57c\ud558\ub294 \ud14c\uc2a4\ud305")),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"\ucef4\ud3ec\ub10c\ud2b8\uc758 \ub0b4\ubd80 \uc0c1\ud0dc"),Object(s.b)("li",{parentName:"ol"},"\ucef4\ud3ec\ub10c\ud2b8\uc758 \ub0b4\ubd80 \uba54\uc11c\ub4dc"),Object(s.b)("li",{parentName:"ol"},"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uba54\uc11c\ub4dc \ub77c\uc774\ud504\uc0ac\uc774\ud074"),Object(s.b)("li",{parentName:"ol"},"\uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8"))))}l.isMDXComponent=!0}}]);