"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{5405:function(n,e,s){s.r(e),s.d(e,{meta:function(){return c}});var a=s(5893),t=s(891),c={title:"Redux",description:"\ub9ac\ub355\uc2a4",date:"2020-11-15T10:45:00.0Z",readTime:7},o=function(n){var e=n.children;return(0,a.jsx)(t.Z,{meta:c,children:e})};function r(n){var e=Object.assign({p:"p",code:"code",strong:"strong",blockquote:"blockquote",ul:"ul",li:"li",pre:"pre",span:"span",h1:"h1"},n.components);return(0,a.jsxs)("div",{style:{marginTop:"4rem",fontFamily:"Poppins, NotoSansKR-Thin, MalgunGothic",fontSize:"11pt",lineHeight:"22pt",letterSpacing:".8px"},children:[(0,a.jsx)("h1",{children:"Redux"}),(0,a.jsx)("hr",{}),(0,a.jsxs)(e.p,{children:["\ub9ac\ub355\uc2a4\ub294 ",(0,a.jsx)(e.code,{children:"actions"})," \uc774\ubca4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uace0 \uc5c5\ub370\uc774\ud2b8 \ud558\ub294 \ud328\ud134 \ubc0f \ub77c\uc774\ube0c\ub7ec\ub9ac \uc785\ub2c8\ub2e4.\n\ub9ac\ub355\uc2a4\ub294 \uc0c1\ud0dc\uad00\ub9ac\ub97c \ucef4\ud3ec\ub10c\ud2b8 \ubc16\uc5d0\uc11c \ud569\ub2c8\ub2e4. \uc571\uc758 \uc0c1\ud0dc \uc804\ubd80\ub294 \ud558\ub098\uc758 ",(0,a.jsx)(e.strong,{children:"store"})," \uc548\uc5d0\n\uc788\ub294 \uac1d\uccb4 \ud2b8\ub9ac\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. ",(0,a.jsx)(e.strong,{children:"\uc0c1\ud0dc \ud2b8\ub9ac\ub97c \ubcc0\uacbd"})," \ud558\ub294 \ubc29\ubc95\uc740 ",(0,a.jsx)(e.strong,{children:"action"}),"\uc744 \ubcf4\ub0b4\ub294 \uac83 \ubfd0\uc785\ub2c8\ub2e4.\n\uc561\uc158\uc774 \uc0c1\ud0dc\ud2b8\ub9ac\ub97c \uc5b4\ub5bb\uac8c \ubcc0\uacbd\ud560\uc9c0 \uba85\uc2dc\ud558\uae30 \uc704\ud574 ",(0,a.jsx)(e.strong,{children:"reducers"}),"\ub97c \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."]}),(0,a.jsx)("hr",{}),(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\ub9ac\ub355\uc2a4\ub97c \uc5b8\uc81c \uc0ac\uc6a9\ud574\uc57c \ud560\uae4c\uc694"})}),(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"I would like to amend this: don't use Redux until you have problems with vanilla React. - Dan Abramov"}),"\n"]}),(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\uc571\uc758 \uc5ec\ub7ec \uc704\uce58\uc5d0 \ud544\uc694\ud55c \ub9ce\uc740 \uc591\uc758 \uc0c1\ud0dc\ub97c \uac16\uace0 \uc788\uc744 \ub54c"}),"\n",(0,a.jsx)(e.li,{children:"\uc571\uc758 \uc0c1\ud0dc\uac00 \uc790\uc8fc \uc5c5\ub370\uc774\ud2b8 \ub420\ub54c"}),"\n",(0,a.jsx)(e.li,{children:"\uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc774 \ubcf5\uc7a1\ud560\ub54c"}),"\n",(0,a.jsx)(e.li,{children:"\ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc791\uc5c5\ud558\uace0, \uc911\uac04 \ub610\ub294 \ud070 \uc0ac\uc774\uc988\uc758 \ucf54\ub4dc \ubca0\uc774\uc2a4\ub97c \uac00\uc9c8\ub54c"}),"\n"]}),(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"blog-post",children:(0,a.jsx)(e.pre,{className:"language-ts",children:(0,a.jsxs)(e.code,{className:"language-ts",children:[(0,a.jsx)(e.span,{className:"token comment",children:"// one-way data flow"}),"\n",(0,a.jsx)(e.span,{className:"token keyword",children:"function"})," ",(0,a.jsx)(e.span,{className:"token function",children:(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Counter"})}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(e.span,{className:"token comment",children:"// State: the source of truth that drives our app;"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"["}),"counter",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," setCounter",(0,a.jsx)(e.span,{className:"token punctuation",children:"]"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token function",children:"useState"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token number",children:"0"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n    ",(0,a.jsx)(e.span,{className:"token comment",children:"// Action: the events that occur in the app based on user input,"}),"\n    ",(0,a.jsx)(e.span,{className:"token comment",children:"// and trigger updates in the state"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(e.span,{className:"token function-variable function",children:"increment"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n        ",(0,a.jsx)(e.span,{className:"token function",children:"setCounter"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"prevCounter",(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token arrow operator",children:"=>"})," prevCounter ",(0,a.jsx)(e.span,{className:"token operator",children:"+"})," ",(0,a.jsx)(e.span,{className:"token number",children:"1"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n    ",(0,a.jsx)(e.span,{className:"token comment",children:"// View: a declarative description of the UI based on the current state"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"\n        ",(0,a.jsx)(e.span,{className:"token operator",children:"<"}),"div",(0,a.jsx)(e.span,{className:"token operator",children:">"}),"\n            ",(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Value"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"counter",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"<"}),"button onClick",(0,a.jsx)(e.span,{className:"token operator",children:"="}),(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"increment",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token operator",children:">"}),(0,a.jsx)(e.span,{className:"token maybe-class-name",children:"Increment"}),(0,a.jsx)(e.span,{className:"token operator",children:"<"}),(0,a.jsx)(e.span,{className:"token operator",children:"/"}),"button",(0,a.jsx)(e.span,{className:"token operator",children:">"}),"\n        ",(0,a.jsx)(e.span,{className:"token operator",children:"<"}),(0,a.jsx)(e.span,{className:"token operator",children:"/"}),"div",(0,a.jsx)(e.span,{className:"token operator",children:">"}),"\n    ",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})})}),(0,a.jsx)("div",{className:"think",children:(0,a.jsx)(e.p,{children:"\ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\ub54c, UI\ub97c \ub9cc\ub4e4\uace0 \ud574\ub2f9 UI \uc5d0\uc11c\ub294 button \uc774\ub098 Input\ub4f1\uc758 \uc774\ubca4\ud2b8\ub97c\n\ubc1c\uc0dd\uc2dc\ud0a4\uace0, \uc774\ub97c \ud1b5\ud574 \uc0c1\ud0dc\ub97c \ubcc0\uacbd \ud560\ud150\ub370, Redux\ub85c \ud574\ub2f9 UI\uc5d0\uc11c \uc0c1\ud0dc\uac00\n\ubcc0\uacbd\ub418\uc5c8\ub2e4\ub97c \uc54c\ub9ac\uae30 \uc704\ud574\uc11c Action\uc744 Dispatch\ub97c \ud569\ub2c8\ub2e4. (\ub9d0 \uadf8\ub300\ub85c \uc77c\uc5b4\ub09c\n\uc774\ubca4\ud2b8\ub97c \ubcf4\ub0b8\ub2e4) \uadf8\ub7ec\uba74 store\uc5d0 \uc788\ub294 \ub9ac\ub4c0\uc11c\uac00 \ud574\ub2f9 \uc561\uc158\uc744 \ucc98\ub9ac\ud558\uc5ec \uc0c8\ub85c\uc6b4\n\uc0c1\ud0dc\ub85c \uac12\uc744 \ubc18\ud658\ud560\ud150\ub370, \uc774\ub54c \ub9ac\ub4c0\uc11c\ub294 \uc5b4\ub5a4 \uc561\uc158\uc774 \ub4e4\uc5b4\uc654\ub294\uc9c0 \uad6c\ubd84\ud558\uae30 \uc704\ud574\uc11c\ntype\uc774\ub77c\ub294 \uc18d\uc131\uc744 \uac16\uac8c \ub429\ub2c8\ub2e4."})}),(0,a.jsx)(e.h1,{children:"Actions"}),(0,a.jsxs)(e.p,{children:["action\uc740 \uac1d\uccb4 \ud615\ud0dc\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc2a4\ud1a0\uc5b4\ub85c \ubcf4\ub0b4\ub294 \ub370\uc774\ud130 \ubb36\uc74c \uc785\ub2c8\ub2e4. ",(0,a.jsx)(e.code,{children:"store.dispatch()"}),"\ub97c \ud1b5\ud574\uc11c \ubcf4\ub0c5\ub2c8\ub2e4. \ubc18\ub4dc\uc2dc ",(0,a.jsx)(e.strong,{children:"type"})," \uc18d\uc131\uc744 \uac00\uc838\uc57c \ud569\ub2c8\ub2e4.\ntype \uc18d\uc131\uac12\uc740 \ub9ac\ub4c0\uc11c\uc5d0 \uc561\uc158 \uac1d\uccb4\ub97c \uad6c\ubd84\ud560 \ub54c\ub3c4 \uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0 \uc0c1\uc218 \ubcc0\uc218\ub85c \ub9cc\ub4dc\ub294\uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc561\uc158\uc740 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc791\uc5c5\uc744 \uc124\uba85\ud558\ub294 \uc774\ubca4\ud2b8\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub429\ub2c8\ub2e4.\n",(0,a.jsx)(e.strong,{children:"payload"})," \ud544\ub4dc\uc5d0\ub294 \ucd94\uac00\uc801\uc778 \uc815\ubcf4\uac00 \ub2f4\uaca8\uc788\uc2b5\ub2c8\ub2e4."]}),(0,a.jsx)("div",{className:"think",children:(0,a.jsx)(e.p,{children:"React \uc790\uccb4\uc758 \uc0c1\ud0dc\uad00\ub9ac\ub97c \ud560\ub54c\uc5d0\ub294 \ud574\ub2f9 \ud568\uc218 \uc548\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294\ub370 \ubc18\ud574\nredux\ub294 global store\ub97c \ud1b5\ud574 \ubaa8\ub4e0 \uc571\uc5d0\uc11c\uc758 \uc0c1\ud0dc\ub97c \uacf5\uc720 \ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub294 \uace7,\n\ud574\ub2f9 \uc0c1\ud0dc\uac00 \ubc14\ub00c\uc5c8\ub2e4\ub294 \uc815\ubcf4\ub97c global store\uc5d0 \uc804\ub2ec\ud574\uc918\uc57c \ud55c\ub2e4\ub294 \uc598\uae30\uc774\uba70,\n\uc774\ub97c \uc704\ud574 action\uc744 dispatch \ud569\ub2c8\ub2e4."})}),(0,a.jsx)("hr",{}),(0,a.jsx)(e.h1,{children:"Reducers"}),(0,a.jsxs)(e.p,{children:["reducer\ub294 \uc774\uc804 \uc0c1\ud0dc\uac12\uacfc, \uc561\uc158 \uac1d\uccb4\ub97c \uc785\ub825\uc73c\ub85c \ubc1b\uc544 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\uac12\uc744 \ub9cc\ub4dc\ub294 ",(0,a.jsx)(e.strong,{children:"\uc21c\uc218\ud568\uc218"}),"\n\uc785\ub2c8\ub2e4. ",(0,a.jsx)(e.code,{children:"(state, action) => newState"})," \ub9ac\ub4c0\uc11c\ub97c \uc561\uc158 \ud0c0\uc785\uc744 \uae30\uc900\uc73c\ub85c \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac \ud558\ub294 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108\ub77c\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\ub97c \uc77c\uc73c\ucf1c\uc11c\ub294 \uc548\ub418\uba70, state\ub97c \uc9c1\uc811\uc801\uc73c\ub85c \ubcc0\uacbd\ud574\uc11c\ub294 \uc548\ub429\ub2c8\ub2e4. \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\uba70 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8 \ud574\uc57c \ud569\ub2c8\ub2e4."]}),(0,a.jsx)("div",{className:"blog-post",children:(0,a.jsx)(e.pre,{className:"language-js",children:(0,a.jsxs)(e.code,{className:"language-js",children:[(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," initialState ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"})," ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"value"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token number",children:"0"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(e.span,{className:"token keyword",children:"function"})," ",(0,a.jsx)(e.span,{className:"token function",children:"counterReducer"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(e.span,{className:"token parameter",children:["state ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," initialState",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," action"]}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(e.span,{className:"token comment",children:"// Check to see if the reducer cares about this action"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword control-flow",children:"if"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"action",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token property-access",children:"type"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"==="})," ",(0,a.jsx)(e.span,{className:"token string",children:'"counter/increment"'}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n        ",(0,a.jsx)(e.span,{className:"token comment",children:"// If so, make a copy of `state`"}),"\n        ",(0,a.jsx)(e.span,{className:"token keyword control-flow",children:"return"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n            ",(0,a.jsx)(e.span,{className:"token spread operator",children:"..."}),"state",(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n            ",(0,a.jsx)(e.span,{className:"token comment",children:"// and update the copy with the new value"}),"\n            ",(0,a.jsx)(e.span,{className:"token literal-property property",children:"value"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," state",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token property-access",children:"value"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"+"})," ",(0,a.jsx)(e.span,{className:"token number",children:"1"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","}),"\n        ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n    ",(0,a.jsx)(e.span,{className:"token comment",children:"// otherwise return the existing state unchanged"}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword control-flow",children:"return"})," state",(0,a.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})})}),(0,a.jsx)("br",{}),(0,a.jsx)(e.h1,{children:"Middleware"}),(0,a.jsx)(e.p,{children:"\ubbf8\ub4e4\uc6e8\uc5b4\ub294 \ub9ac\ub4c0\uc11c\uac00 \uc561\uc158\uc744 \ucc98\ub9ac\ud558\uae30\uc804\uc5d0 \uc2e4\ud589\ub418\ub294 \ud568\uc218 \uc785\ub2c8\ub2e4. \ub514\ubc84\uae45 \ubaa9\uc801\uc73c\ub85c \uc0c1\ud0ef\uac12\n\ubcc0\uacbd\uc2dc \ub85c\uadf8\ub97c \ucd9c\ub825\ud558\uac70\ub098, API \ud638\ucd9c \ub4f1\uc758 \ubaa9\uc801\uc73c\ub85c \ud65c\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),(0,a.jsx)("br",{}),(0,a.jsx)(e.h1,{children:"Selector"}),(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"useSelector"})," \ud6c5\uc744 \ud65c\uc6a9\ud558\uba74 store\uc5d0 \uc788\ub294 \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nselector \ud568\uc218\ub294 \ubaa8\ub4e0 state object\ub97c \ubc1b\uace0, \uac12\uc73c\ub85c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4.\nselector \ud568\uc218\ub294 \ub9ac\ub355\uc2a4 \uc2a4\ud1a0\uc5b4\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uba74 \uc5b8\uc81c\ub4e0\uc9c0 \uc7ac\uc2e4\ud589 \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub9cc\uc57d \ub370\uc774\ud130\uac00 \ubcc0\uacbd\ub41c \uacbd\uc6b0 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub2e4\uc2dc \ub80c\ub354\ub9c1 \ub429\ub2c8\ub2e4.\n\uc989, \ub9ac\ub80c\ub354\ub9c1\uc774 \uc5b8\uc81c\ub4e0\uc9c0 \uc77c\uc5b4\ub0a0 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \ud56d\uc0c1 \uc2a4\ud1a0\uc5b4\ub85c\ubd80\ud130 \ud544\uc694\ud55c \ucd5c\uc18c\ud55c\uc758 \ub370\uc774\ud130\ub97c select \ud558\uc5ec \uc2e4\uc81c \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \ub80c\ub354\ub9c1 \ub418\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4.\n\uc774\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574 RTK \ub294 ",(0,a.jsx)(e.code,{children:"createSelector"})," \ud568\uc218\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,a.jsx)(e.code,{children:"reselet"})," \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \uae30\ub2a5\uc73c\ub85c \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \uc9c0\uc6d0\ud558\uc5ec, \ubb34\ubd84\ubcc4\ud55c \ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0 \ud569\ub2c8\ub2e4."]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(o,Object.assign({},n,{children:(0,a.jsx)(r,n)}))}}}]);