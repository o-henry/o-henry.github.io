_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{Erhg:function(e,t,b){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/04-browser",function(){return b("FrQ/")}])},"FrQ/":function(e,t,b){"use strict";b.r(t),b.d(t,"meta",(function(){return O})),b.d(t,"default",(function(){return p}));var l=b("cpVT"),n=b("dhJC"),c=(b("q1tI"),b("7ljp")),r=b("xK7a");function u(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,l)}return b}function o(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?u(Object(b),!0).forEach((function(t){Object(l.a)(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):u(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}var O={title:"How Browsers Work",description:"\ube0c\ub77c\uc6b0\uc800 \uc791\ub3d9\uc6d0\ub9ac",date:"2020-11-07T19:45:00.0Z",readTime:10},a={meta:O},i=function(e){var t=e.children;return Object(c.b)(r.a,{meta:O},t)};function p(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(c.b)(i,o(o(o({},a),b),{},{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{style:{marginTop:"4rem",fontFamily:"Poppins, NotoSansKR-Thin, MalgunGothic",fontSize:"11pt",lineHeight:"22pt",letterSpacing:".8px"}},Object(c.b)("p",null,"\uc0ac\uc6a9\uc790\uac00 \ube0c\ub77c\uc6b0\uc800 \uc8fc\uc18c\ucc3d\uc5d0 \uc8fc\uc18c\ub97c \uc785\ub825(url)\ud588\uc744 \ub54c, \ud654\uba74\uc5d0 \ubcf4\uc5ec\uc9c0\uac8c \ub418\ub294 \uc77c\ub828\uc758 \uacfc\uc815\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\ube0c\ub77c\uc6b0\uc800\ub294 \uc8fc\uc18c\ub97c \ud1b5\ud574 \uc11c\ubc84\uc5d0 request\ub97c \ubcf4\ub0b4\uace0 \uc751\ub2f5\uc73c\ub85c resource\ub97c \ub0b4\ub824\ubc1b\uace0, HTML\ub370\uc774\ud130\ub97c \ubc1b\uc544 \ub85c\ub529\uacfc\uc815\uc744 \uac70\uccd0 \ud654\uba74\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ube0c\ub77c\uc6b0\uc800 \ub85c\ub529\uacfc\uc815 : \uc6f9 \ud398\uc774\uc9c0\uc5d0 \ud544\uc694\ud55c \ub9ac\uc18c\uc2a4\ub97c \ub0b4\ub824\ubc1b\uace0, \ud574\uc11d\ud6c4 \uacc4\uc0b0 \ud654\uba74\uc5d0 \ubcf4\uc5ec\uc8fc\ub294 \uacfc\uc815")),Object(c.b)("h1",null,"Parsing"),Object(c.b)("hr",null),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\ube0c\ub77c\uc6b0\uc800 \uc5d0\uc11c \uc6f9\ud398\uc774\uc9c0\ub97c \ub85c\ub4dc\ud558\uba74 HTML \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ud569\ub2c8\ub2e4.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"HTML\uc744 \ud574\uc11d(\ud30c\uc2f1) DOM \ud2b8\ub9ac\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud30c\uc2f1 \uc911 ",Object(c.b)("inlineCode",{parentName:"li"},"<script /> <link /> <img />")," \ub97c \ub9cc\ub098\uba74 \ub9ac\uc18c\uc2a4\ub97c \uc694\uccad\ud558\uace0 \ub2e4\uc6b4\ub85c\ub4dc \ud569\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},"JS\ud30c\uc77c\uc744 \ub9cc\ub098\uba74 \ud574\ub2f9 \ud30c\uc77c\uc744 \ubc1b\uc544\uc640\uc11c \uc2e4\ud589\ud560\ub54c \uae4c\uc9c0 \ud30c\uc2f1\uc774 \uba48\ucda5\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\uc704 \uac19\uc740 \ubb38\uc81c\ub97c \ub9c9\uae30\uc704\ud574, body \ucd5c\ud558\ub2e8\uc5d0 script \ub97c \uc704\uce58\ud558\uac8c \ud569\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},"HTML \ub610\ub294 \ub9ac\uc18c\uc2a4\uc5d0 CSS\uac00 \ud3ec\ud568\ub420 \uacbd\uc6b0, CSSOM\ud2b8\ub9ac \uc791\uc5c5\ub3c4 \ud568\uaed8 \uc9c4\ud589\ud569\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},"CSSOM\uc744 \uad6c\uc131\ud558\ub294 \uac83\uc774 \ub05d\ub098\uc57c, \ube44\ub85c\uc18c \uc774\ud6c4\uc758 Rendering \uacfc\uc815\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},"HTML \ubc0f CSS\ub294 \ub458\ub2e4 \ub80c\ub354\ub9c1 \ucc28\ub2e8 \ub9ac\uc18c\uc2a4 \uc785\ub2c8\ub2e4")),Object(c.b)("br",null),Object(c.b)("h1",null,"Render Tree"),Object(c.b)("hr",null),Object(c.b)("p",null,"DOM \ub178\ub4dc\ub97c \uc5b4\ub5bb\uac8c \ud45c\uc2dc\ud560 \uc9c0 \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),Object(c.b)("p",null,"\ud30c\uc2f1 \ub2e8\uacc4\uc5d0\uc11c \uc0dd\uc131\ub41c DOM, CSSOM \ud2b8\ub9ac\ub97c \uac00\uc9c0\uace0 \uc2a4\ud0c0\uc77c\uc744 \ub9e4\uce6d\uc2dc\ucf1c\uc8fc\ub294 \uacfc\uc815\uc744 \uac70\uccd0 \ub80c\ub354 \ud2b8\ub9ac\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4.\n\ub80c\ub354 \ud2b8\ub9ac\ub294 \ud654\uba74\uc5d0 \uc2e4\uc81c\ub85c '\ubcf4\uc774\ub294' \uce5c\uad6c\ub4e4\ub9cc\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"display : none \uacfc \uac19\uc740 \uc124\uc815\uc740 Render Tree\uc5d0 \ucd94\uac00\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),Object(c.b)("p",null,"\uc694\uc18c\uc758 \ud14c\ub450\ub9ac \ub450\uaed8\ub97c \ubc14\uafb8\uac70\ub098 \ubb38\ub2e8\uc5d0 \ud14d\uc2a4\ud2b8\ub97c \ucd94\uac00\ud574\uc11c \uc904\uc774 \ub298\uc5b4\ub098\ub294 \ub4f1 \uc694\uc18c\uc758 \uae30\ud558\ud559\uc801 \uad6c\uc870(\ub108\ube44\uc640 \ub192\uc774)\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\ub3c4\ub85d DOM\uc774 \ubcc0\uacbd\ub418\uba74 \ube0c\ub77c\uc6b0\uc800\ub294 \ubcc0\uacbd\ub41c \uc694\uc18c\uc758 \uae30\ud558\ud559\uc801 \uad6c\uc870\ub97c \ub2e4\uc2dc \uacc4\uc0b0\ud574\uc57c \ud558\uace0, \uc774\uc5d0 \uc601\ud5a5\uc744 \ubc1b\ub294 \ub2e4\ub978 \uc694\uc18c\uc758 \uae30\ud558\ud559\uc801 \uad6c\uc870\uc640 \uc704\uce58\ub3c4 \ub2e4\uc2dc \uacc4\uc0b0\ud574\uc57c \ud569\ub2c8\ub2e4."),Object(c.b)("br",null),Object(c.b)("p",null,"\ube0c\ub77c\uc6b0\uc800\ub294 \ub80c\ub354 \ud2b8\ub9ac \uc911\uc5d0\uc11c \ubcc0\uacbd\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uc740 \ubd80\ubd84\uc744 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uac83\uc73c\ub85c \uac04\uc8fc\ud558\uace0 \ub80c\ub354\ud2b8\ub9ac\ub97c \ub2e4\uc2dc \ub9cc\ub4ed\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacfc\uc815\uc744 ",Object(c.b)("inlineCode",{parentName:"p"},"\ub9ac\ud50c\ub85c\uc6b0"),"\ub77c\uace0 \ud569\ub2c8\ub2e4.\n\ub9ac\ud50c\ub85c\uc6b0 \uac00 \ub05d\ub098\uba74 \ube0c\ub77c\uc6b0\uc800\ub294 \uc601\ud5a5\uc744 \ubc1b\uc740 \ubd80\ubd84\uc744 \ub2e4\uc2dc \uadf8\ub9ac\ub294\ub370 \uc774\ub97c ",Object(c.b)("inlineCode",{parentName:"p"},"\ub9ac\ud398\uc778\ud2b8")," \ub77c\uace0 \ud569\ub2c8\ub2e4."),Object(c.b)("br",null),Object(c.b)("p",null,"background color\ub97c \ubc14\uafb8\ub294 \ub4f1\uc758 \ubcc0\uacbd\uc740 \uae30\ud558\ud559\uc801 \uc694\uc18c\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc989, \uc694\uc18c\uc758 \ub808\uc774\uc544\uc6c3\uc774 \ubcc0\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c, \ub9ac\ud50c\ub85c\uc6b0\ub294 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uace0 \ub9ac\ud398\uc778\ud2b8 \ub9cc \uc77c\uc5b4\ub098\uac8c \ub429\ub2c8\ub2e4."),Object(c.b)("p",null,"\ub9ac\ud50c\ub85c\uc6b0\uc640 \ub9ac\ud398\uc778\ud2b8\ub294 \ub9ce\uc740 \ube44\uc6a9\uc774 \ub4dc\ub294 \uc791\uc5c5\uc774\uba70 \uc6f9 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 UI \ubc18\uc751\uc774 \ub5a8\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774\ub7ec\ud55c \uc77c\uc774 \uc801\uac8c \uc77c\uc5b4\ub098\ub3c4\ub85d \ud558\ub294\uac83\uc774 \ucd5c\uc120\uc785\ub2c8\ub2e4."),Object(c.b)("br",null),Object(c.b)("h1",null,"Reflow"),Object(c.b)("hr",null),Object(c.b)("p",null,"\ub9ac\ud50c\ub85c\uc6b0\uac00 \uc77c\uc5b4\ub0a0 \ub54c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ubcf4\uc774\ub294 DOM \uc694\uc18c\ub97c \ucd94\uac00 / \uc81c\uac70 \ud588\uc744 \ub54c"),Object(c.b)("li",{parentName:"ul"},"\uc694\uc18c\uc758 \uc704\uce58\uac00 \ubc14\ub00c\uc5c8\uc744 \ub54c"),Object(c.b)("li",{parentName:"ul"},"\uc694\uc18c\uc758 \ud06c\uae30(\ub9c8\uc9c4, \ud328\ub529, \ud14c\ub450\ub9ac \ub450\uaed8, \ub108\ube44, \ub192\uc774 \ub4f1) \uac00 \ubc14\ub00c\uc5c8\uc744 \ub54c"),Object(c.b)("li",{parentName:"ul"},"\ud14d\uc2a4\ud2b8 \ub0b4\uc6a9\uc774 \ubc14\ub00c\uac70\ub098 \uc774\ubbf8\uc9c0\uac00 \ub2e4\ub978 \ud06c\uae30\uc758 \uc774\ubbf8\uc9c0\ub85c \ub300\uccb4\ub418\ub294 \ub4f1 \ub0b4\uc6a9\uc774 \ubc14\ub00c\uc5c8\uc744 \ub54c"),Object(c.b)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\ub97c \ucc98\uc74c \ud45c\uc2dc\ud560 \ub54c"),Object(c.b)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800 \ucc3d\uc758 \ud06c\uae30\ub97c \ubc14\uafe8\uc744 \ub54c")),Object(c.b)("br",null),Object(c.b)("h1",null,"Optimization Reflow"),Object(c.b)("hr",null),Object(c.b)("p",null,"\ub9ac\ud50c\ub85c\uc6b0\ub9c8\ub2e4 \ub2e4\uc2dc \uacc4\uc0b0\uc744 \ud558\uac8c \ub418\uba74 \ub9ce\uc740 \ube44\uc6a9\uc774 \ub4e4\uae30 \ub54c\ubb38\uc5d0, \ub300\ubd80\ubd84 \ube0c\ub77c\uc6b0\uc800 \uc790\uccb4\uc801\uc73c\ub85c \ub80c\ub354 \ud2b8\ub9ac \ubcc0\uacbd\uc744 \ud050\uc5d0 \ubaa8\uc558\ub2e4\uac00 \ud55c\ubc88\uc5d0 \ucc98\ub9ac\ud558\ub294 \uc2dd\uc73c\ub85c \ucc98\ub9ac\ud558\uc5ec \ucd5c\uc801\ud654 \ud569\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc, \uc774 \ud050\ub97c \ube44\uc6b0\uace0 \uc608\uc57d\ub41c \ubaa8\ub4e0 \ubcc0\uacbd\uc744 \uac15\uc81c \ubc18\uc601\ud558\ub294 \uba54\uc11c\ub4dc\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"offsetTop, offsetLeft, offsetWidth, offsetHeight"),Object(c.b)("li",{parentName:"ul"},"scrollTop, scrollLeft, scrollWidth, scrollHeight"),Object(c.b)("li",{parentName:"ul"},"clinetTop, clinetLeft, clinetWidth, clinetHeight"),Object(c.b)("li",{parentName:"ul"},"getComputedStyle()")),Object(c.b)("hr",null),Object(c.b)("p",null,"\uc774 \uc18d\uc131\ub4e4\uc740 \ub80c\ub354\ub9c1 \ud050\uc5d0\uc11c \ubcc0\uacbd\uc744 \ubc14\ub85c \uc2e4\ud589\ud558\uc5ec \ub9ac\ud50c\ub85c\uc6b0\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc2a4\ud0c0\uc77c\uc744 \ubc14\uafb8\ub294 \ub3c4\uc911\uc5d0\ub294 \uc704 \uc18d\uc131\uc744 \uc4f0\uc9c0 \uc54a\ub294\uac83\uc774 \ucd5c\uc120\uc785\ub2c8\ub2e4."),Object(c.b)("hr",null),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"React, it batches the changes and call applies them on real-dom in one go. Thus, minimizing the re-flow and re-paint.")),Object(c.b)("h1",null,"Layout"),Object(c.b)("hr",null),Object(c.b)("p",null,"\ub808\uc774\uc544\uc6c3 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ub178\ub4dc\uc758 \uc815\ud655\ud55c \uc704\uce58\uc640 \ud06c\uae30\ub97c \uacc4\uc0b0\ud569\ub2c8\ub2e4."),Object(c.b)("p",null,"\ub178\ub4dc\uc758 \uc815\ud655\ud55c \ud06c\uae30\uc640 \uc704\uce58\ub97c \ud30c\uc545\ud558\uae30 \uc704\ud574 \ub8e8\ud2b8\ubd80\ud130 \ub178\ub4dc\ub97c \uc21c\ud68c\ud558\uba74\uc11c \uacc4\uc0b0\ud558\uace0,\n\ub808\uc774\uc544\uc6c3 \uacb0\uacfc\ub85c \uac01 \ub178\ub4dc\uc758 \uc815\ud655\ud55c \uc704\uce58\uc640 \ud06c\uae30\ub97c \ud53d\uc140\uac12\uc73c\ub85c \ub80c\ub354\ud2b8\ub9ac\uc5d0 \ubc18\uc601\ud569\ub2c8\ub2e4.\n\ub9cc\uc57d CSS\uc5d0\uc11c \ud06c\uae30 \uac12\uc744 %\ub85c \uc9c0\uc815\ud558\uc600\ub2e4\uba74, \ub808\uc774\uc544\uc6c3 \ub2e8\uacc4\ub97c \uac70\uce5c \ud6c4 % \uac12\uc740 \uacc4\uc0b0\ub418\uace0 \uce21\uc815 \uac00\ub2a5\ud55c \ud53d\uc140 \ub2e8\uc704\ub85c \ubcc0\ud658\ub429\ub2c8\ub2e4."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ubdf0\ud3ec\ud2b8\ub97c \uae30\uc900\uc73c\ub85c \uc2e4\uc81c\ub85c \ub193\uc73c\ub824\uba74 \uc598\uac00 \uc5b4\ub514\uc5d0 \uac00\uc57c\ud558\ub294 \uc9c0\ub294 \uacc4\uc0b0")),Object(c.b)("h1",null,"Paint"),Object(c.b)("hr",null),Object(c.b)("p",null,"\uc774\uc804 \ub808\uc774\uc544\uc6c3 \ub2e8\uacc4\uc5d0\uc11c \uacc4\uc0b0\ub41c \uac12\uc744 \uc774\uc6a9\ud574 \ub80c\ub354\ud2b8\ub9ac\uc758 \uac01 \ub178\ub4dc\ub97c \ud654\uba74\uc0c1\uc758 \uc2e4\uc81c \ud53d\uc140\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4. \uc774\ub54c \uc704\uce58\uc640 \uad00\uacc4\uc5c6\ub294 CSS \uc18d\uc131(\uc0c9\uc0c1, \ud22c\uba85\ub3c4 \ub4f1)\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \ud53d\uc140\ub85c \ubcc0\ud658\ub41c \uacb0\uacfc\ub294 \ud3ec\ud1a0\uc0f5\uc758 \ub808\uc774\uc5b4\ucc98\ub7fc \uc0dd\uc131\ub418\uc5b4 \uac1c\ubcc4 \ub808\uc774\uc5b4\ub85c \uad00\ub9ac\ub429\ub2c8\ub2e4.\n\ub2e8, \uac01\uac01\uc758 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ubaa8\ub450 \ub808\uc774\uc5b4\uac00 \ub418\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. transform \uc18d\uc131 \ub4f1\uc744 \uc0ac\uc6a9\ud558\uba74 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ub808\uc774\uc5b4\ud654 \ub418\ub294\ub370, \uc774 \uacfc\uc815\uc744 \ud398\uc778\ud2b8\ub77c\uace0 \ud569\ub2c8\ub2e4."),Object(c.b)("br",null),Object(c.b)("h1",null,"Composite & Render"),Object(c.b)("hr",null),Object(c.b)("p",null,"\ud398\uc778\ud2b8 \ub2e8\uacc4\uc5d0\uc11c \uc0dd\uc131\ub41c \ub808\uc774\uc5b4\ub97c \ud569\uc131\ud558\uc5ec \uc2a4\ud06c\ub9b0\uc744 \uc5c5\ub370\uc774\ud2b8 \ud569\ub2c8\ub2e4. \ud569\uc131\uacfc \ub80c\ub354 \ub2e8\uacc4\uac00 \ub05d\ub098\uba74 \ud654\uba74\uc5d0\uc11c \uc6f9 \ud398\uc774\uc9c0\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}p.isMDXComponent=!0}},[["Erhg",0,1,2]]]);