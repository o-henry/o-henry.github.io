_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"2/wF":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/03-redux",function(){return t("2FjI")}])},"2FjI":function(n,e,t){"use strict";t.r(e),t.d(e,"meta",(function(){return u})),t.d(e,"default",(function(){return l}));var r=t("cpVT"),s=t("dhJC"),c=(t("q1tI"),t("7ljp")),o=t("xK7a");function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var u={title:"Redux",description:"\ub9ac\ub355\uc2a4",date:"2020-11-15T10:45:00.0Z",readTime:7},p={meta:u},j=function(n){var e=n.children;return Object(c.a)(o.a,{meta:u},e)};function l(n){var e=n.components,t=Object(s.a)(n,["components"]);return Object(c.a)(j,i(i(i({},p),t),{},{components:e,mdxType:"MDXLayout"}),Object(c.a)("div",{style:{marginTop:"4rem",fontFamily:"NotoSansKR-Thin, MalgunGothic",fontSize:"11pt",lineHeight:"22pt",letterSpacing:".8px"}},Object(c.a)("h1",null,"Redux"),Object(c.a)("hr",null),Object(c.a)("p",null,"\ub9ac\ub355\uc2a4\ub294 \uc0c1\ud0dc\uad00\ub9ac\ub97c \ucef4\ud3ec\ub10c\ud2b8 \ubc16\uc5d0\uc11c \ud569\ub2c8\ub2e4. \uc571\uc758 \uc0c1\ud0dc \uc804\ubd80\ub294 \ud558\ub098\uc758 ",Object(c.a)("strong",{parentName:"p"},"store")," \uc548\uc5d0\n\uc788\ub294 \uac1d\uccb4 \ud2b8\ub9ac\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. ",Object(c.a)("strong",{parentName:"p"},"\uc0c1\ud0dc \ud2b8\ub9ac\ub97c \ubcc0\uacbd")," \ud558\ub294 \ubc29\ubc95\uc740 ",Object(c.a)("strong",{parentName:"p"},"action"),"\uc744 \ubcf4\ub0b4\ub294 \uac83 \ubfd0\uc785\ub2c8\ub2e4.\n\uc561\uc158\uc774 \uc0c1\ud0dc\ud2b8\ub9ac\ub97c \uc5b4\ub5bb\uac8c \ubcc0\uacbd\ud560\uc9c0 \uba85\uc2dc\ud558\uae30 \uc704\ud574 ",Object(c.a)("strong",{parentName:"p"},"reducers"),"\ub97c \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),Object(c.a)("hr",null),Object(c.a)("h3",null,"action"),Object(c.a)("p",null,"action\uc740 \uac1d\uccb4 \ud615\ud0dc\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc2a4\ud1a0\uc5b4\ub85c \ubcf4\ub0b4\ub294 \ub370\uc774\ud130 \ubb36\uc74c \uc785\ub2c8\ub2e4. ",Object(c.a)("inlineCode",{parentName:"p"},"store.dispatch()"),"\ub97c \ud1b5\ud574\uc11c \ubcf4\ub0c5\ub2c8\ub2e4. \ubc18\ub4dc\uc2dc ",Object(c.a)("strong",{parentName:"p"},"type")," \uc18d\uc131\uc744 \uac00\uc838\uc57c \ud569\ub2c8\ub2e4.\ntype \uc18d\uc131\uac12\uc740 \ub9ac\ub4c0\uc11c\uc5d0 \uc561\uc158 \uac1d\uccb4\ub97c \uad6c\ubd84\ud560 \ub54c\ub3c4 \uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0 \uc0c1\uc218 \ubcc0\uc218\ub85c \ub9cc\ub4dc\ub294\uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),Object(c.a)("hr",null),Object(c.a)("h3",null,"reducer"),Object(c.a)("p",null,"reducer\ub294 \uc774\uc804 \uc0c1\ud0dc\uac12\uacfc, \uc561\uc158 \uac1d\uccb4\ub97c \uc785\ub825\uc73c\ub85c \ubc1b\uc544 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\uac12\uc744 \ub9cc\ub4dc\ub294 ",Object(c.a)("strong",{parentName:"p"},"\uc21c\uc218\ud568\uc218"),"\n\uc785\ub2c8\ub2e4."),Object(c.a)("hr",null),Object(c.a)("h3",null,"middleware"),"\ubbf8\ub4e4\uc6e8\uc5b4\ub294 \ub9ac\ub4c0\uc11c\uac00 \uc561\uc158\uc744 \ucc98\ub9ac\ud558\uae30\uc804\uc5d0 \uc2e4\ud589\ub418\ub294 \ud568\uc218 \uc785\ub2c8\ub2e4. \ub514\ubc84\uae45 \ubaa9\uc801\uc73c\ub85c \uc0c1\ud0ef\uac12 \ubcc0\uacbd\uc2dc \ub85c\uadf8\ub97c \ucd9c\ub825\ud558\uac70\ub098, API \ud638\ucd9c \ub4f1\uc758 \ubaa9\uc801\uc73c\ub85c \ud65c\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.",Object(c.a)("hr",null),Object(c.a)("p",null,"\ub370\uc774\ud130\uac00 \ub9ce\uc544\uc9c8\uc218\ub85d \uc774\ub97c \uccb4\uacc4\uc801\uc73c\ub85c \uad6c\uc870\ud654 \ud558\ub294 \ubc29\ubc95\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uac01 \uae30\ub2a5 \ud3f4\ub354 \ud558\uc704\uc5d0 \uc791\uc131\ud558\uc5ec \uad00\ub9ac\ud558\ub294\uac8c \uc88b\uc2b5\ub2c8\ub2e4."),Object(c.a)("br",null),Object(c.a)("h1",null,"To consider"),Object(c.a)("pre",null,Object(c.a)("code",i({parentName:"pre"},{}),"\u2605 \uc0ac\uc6a9\ud558\ub294 \ub370\uc774\ud130\uac00 \ud558\ub098\ub2e4. \u21e2 \ub9ac\ub4c0\uc11c\ub97c \ud558\ub098\ub9cc \uc0ac\uc6a9\ud55c\ub2e4.\n\u2605 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130\uc758 \uc591\uc774 \ub9ce\uc544\uc9c4\ub2e4. \u21e2 \ub370\uc774\ud130\ub97c \uae30\ub2a5\ubcc4\ub85c \ud3f4\ub354\ub97c \ub9cc\ub4e4\uc5b4 \ud558\uc704\uc5d0\uc11c \uad00\ub9ac/\uad6c\uc870\ud654 \ud55c\ub2e4.\n\u2605 \ubd84\ub9ac\ud55c \ub9ac\ub4c0\uc11c\ub97c \ud1b5\ud569\ud55c\ub2e4 \u21e2 combineReducder\n\n\n\ud398\uc774\uc2a4\ubd81\uc5d0\uc11c '\ud0c0\uc784\ub77c\uc778' \uacfc '\uce5c\uad6c\ubaa9\ub85d'\uc744 \uad6c\ud604\ud55c\ub2e4\uace0 \ud558\uc790.\n\u2605 \ud0c0\uc784\ub77c\uc778 \uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc5ec\uc904 \uc5ec\ub7ec \uac1c\uc758 \uac8c\uc2dc\ubb3c\uc744 \uad00\ub9ac\ud574\uc57c \ud55c\ub2e4.\n\u2514\u2500\u2500 \uac01 \uac8c\uc2dc\ubb3c \ub370\uc774\ud130\ub97c \ubc30\uc5f4\ub85c \uad00\ub9ac\ud55c\ub2e4.\n\u2514\u2500\u2500 \uac8c\uc2dc\ubb3c\uc744 \ucd94\uac00 / \uc0ad\uc81c \ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4.\n\u2514\u2500\u2500 \uac01 \uac8c\uc2dc\ubb3c\uc758 \uc88b\uc544\uc694 \uc22b\uc790\ub294 \ubcc0\ud558\ub294 \uac12\uc774\ubbc0\ub85c \uac8c\uc2dc\ubb3c \ub370\uc774\ud130\ub97c \uc218\uc815\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4.\n\u2514\u2500\u2500 \ubb34\ud55c \uc2a4\ud06c\ub864 \uae30\ub2a5\uc774 \ud544\uc694 \ud558\ubbc0\ub85c \ub85c\ub529\ub41c \ub370\uc774\ud130 \ub05d\uc5d0 \ub3c4\ub2ec\ud558\uba74 \uc790\ub3d9\uc73c\ub85c \ub2e4\uc74c \ub370\uc774\ud130\ub97c \uc11c\ubc84\ub85c \uc694\uccad\ud574\uc57c \ud55c\ub2e4.\n\n\u2605 \uce5c\uad6c \ubaa9\ub85d\n\u2514\u2500\u2500 \uce5c\uad6c\ubaa9\ub85d \ub370\uc774\ud130\ub97c \ubc30\uc5f4\ub85c \uad00\ub9ac\ud55c\ub2e4.\n\u2514\u2500\u2500 \uce5c\uad6c\ub97c \ucd94\uac00 / \uc0ad\uc81c \ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4.\n\u2514\u2500\u2500 \uce5c\uad6c\uac00 \uc218\uc815\ud55c \ud504\ub85c\ud544 \uc815\ubcf4\ub97c \ubc18\uc601\ud558\uae30 \uc704\ud574 \uce5c\uad6c \ub370\uc774\ud130\ub97c \uc218\uc815\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4.\n\n\u2605 \ub355\uc2a4 \ud328\ud134\n\u2514\u2500\u2500 \uc5f0\uad00\ub41c \uc561\uc158 \ud0c0\uc785, \uc561\uc158 \uc0dd\uc131\uc790 \ud568\uc218, \ub9ac\ub4c0\uc11c\ub97c \ud558\ub098\uc758 \ud30c\uc77c\ub85c \uc791\uc131\ud55c\ub2e4.\n\u2514\u2500\u2500 \ub9ac\ub4c0\uc11c \ud568\uc218\ub294 export default \ud0a4\uc6cc\ub4dc\ub85c \ub0b4\ubcf4\ub0b8\ub2e4.\n\u2514\u2500\u2500 \uc561\uc158 \uc0dd\uc131\uc790 \ud568\uc218\ub294 export \ud0a4\uc6cc\ub4dc\ub85c \ub0b4\ubcf4\ub0b8\ub2e4.\n\u2514\u2500\u2500 \uc561\uc158 \ud0c0\uc785\uc740 \uc811\ub450\uc0ac\uc640 \uc561\uc158 \uc774\ub984\uc744 \uc870\ud569\ud574\uc11c \ub9cc\ub4e0\ub2e4.\n\nsrc\n\u251c\u2500\u2500 common\n\u2502   \u2514\u2500\u2500 createReducer.js\n\u251c\u2500\u2500 friend\n\u2502   \u2514\u2500\u2500 state.js\n\u251c\u2500\u2500 index.js\n\u2514\u2500\u2500 timeline\n    \u2514\u2500\u2500 state.js\n\n\u2605 (\uce5c\uad6c \ubaa9\ub85d) \uc561\uc158 \uacfc \ub9ac\ub4c0\uc11c \ucf54\ub4dc\ub97c \uba3c\uc800 \uc791\uc131\ud55c\ub2e4.\n\u25e6 \ub370\uc774\ud130 \ud0c0\uc785\uc740 \uc5b4\ub5bb\uac8c \ub418\uc5b4 \uc788\ub294\uac00 \u21e2 `\ubc30\uc5f4\ub85c \uad00\ub9ac\ud55c\ub2e4.`\n\u25e6 \uc5b4\ub5a4 \uc561\uc158 \ud0c0\uc785\uc774 \ud544\uc694\ud55c\uac00 \u21e2 `\uce5c\uad6c\ub97c \ucd94\uac00 / \uc0ad\uc81c \ud560 \uc218 \uc788\uc5b4\uc57c \ud558\uace0, \ub370\uc774\ud130\ub97c \uc218\uc815\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4.`\n\u25e6 \ub9ac\ub4c0\uc11c \uc5d0\uc11c \uc0c1\ud0ef\uac12\uc744 \uc218\uc815\ud55c\ub2e4. \u21e2 `ADD, REMOVE, EDIT`\uc5d0 \ud574\ub2f9\ud558\ub294 \ub85c\uc9c1\uc744 \uad6c\ud604\ud55c\ub2e4.\n\n\u2605 (\ud0c0\uc784 \ub77c\uc778) \uc561\uc158 \uacfc \ub9ac\ub4c0\uc11c \ucf54\ub4dc\ub97c \uc791\uc131\ud55c\ub2e4.\n\u25e6 \ub370\uc774\ud130 \ud0c0\uc785\uc740 \uc5b4\ub5bb\uac8c \ub418\uc5b4 \uc788\ub294\uac00 \u21e2 `\ubc30\uc5f4\ub85c \uad00\ub9ac\ud55c\ub2e4.`\n\u25e6 \uc5b4\ub5a4 \uc561\uc158 \ud0c0\uc785\uc774 \ud544\uc694\ud55c\uac00 \u21e2 `\uac8c\uc2dc\ubb3c\uc744 \ucd94\uac00 / \uc0ad\uc81c \ubc0f \uac8c\uc2dc\ubb3c\uc744 \uc218\uc815 \ub610 \ud398\uc774\uc9c0 \ubc88\ud638 \uc99d\uac00.`\n\n\u2605 \ub9ac\ub4c0\uc11c\uc758 \uacf5\ud1b5 \ubd80\ubd84 \ubd84\ub9ac\ud558\uae30\n\u25e6 \ucd08\uae30 \uc0c1\ud0dc\uac12 \ube48 \ubc30\uc5f4 \uc815\uc758\n\u25e6 \uc561\uc158 \ud0c0\uc785\uacfc \uc561\uc158 \uc0dd\uc131\uc790 \ud568\uc218\n\u25e6 \ub370\uc774\ud130 \ucd94\uac00/\uc0ad\uc81c/\uc218\uc815 \ub9ac\ub4c0\uc11c \ucf54\ub4dc\n\u2514\u2500\u2500 \uacf5\ud1b5\ubd80\ubd84\uc5d0 \ud574\ub2f9\ud558\ub294 \ubd80\ubd84\uc744 \ubaa8\ub4c8\ud654 \ud55c\ub2e4.\n\n\u2605 \ub9ac\ub4c0\uc11c \ud569\uce58\uae30\ncombineReducers\ub97c \ud1b5\ud574 \ub9ac\ub4c0\uc11c\ub97c \ud558\ub098\ub85c \ud569\uce60 \uc218 \uc788\ub2e4.\n\u2514\u2500\u2500 entry point\uc5d0\uc11c reducer\ub97c \ud569\uccd0\uc900\ub2e4.\n\u2514\u2500\u2500 \ud569\uce5c \ub9ac\ub4c0\uc11c\ub97c \uc2a4\ud1a0\uc5b4\uc5d0 \ubd99\uc778\ub2e4.\n")),Object(c.a)("br",null),Object(c.a)("h1",null,"Ducks Pattern"),Object(c.a)("pre",null,Object(c.a)("code",i({parentName:"pre"},{}),"app\n\u251c\u2500\u2500 actions\n\u2502 \u251c\u2500\u2500 App.js\n\u2502 \u251c\u2500\u2500 User.js\n\u2502 \u2514\u2500\u2500 Product.js\n\u251c\u2500\u2500 reducer\n\u2502 \u251c\u2500\u2500 App.js\n\u2502 \u251c\u2500\u2500 User.js\n\u2502 \u2514\u2500\u2500 Product.js\n\u251c\u2500\u2500 store\n\u2502 \u2514\u2500\u2500index.js.js\n\u251c\u2500\u2500 view\n\u2502 \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 README.md\n\nuser/\n\u251c\u2500\u2500 actions.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 operations.js\n\u251c\u2500\u2500 reducers.js\n\u251c\u2500\u2500 selectors.js\n\u251c\u2500\u2500 tests.js\n\u251c\u2500\u2500 types.js\n\u251c\u2500\u2500 utils.js\nproduct/\n\u251c\u2500\u2500 actions.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 operations.js\n\u251c\u2500\u2500 reducers.js\n\u251c\u2500\u2500 selectors.js\n\u251c\u2500\u2500 tests.js\n\u251c\u2500\u2500 types.js\n\u2514\u2500\u2500 utils.js\n\nsrc\n\u251c\u2500\u2500 common\n\u2502   \u251c\u2500\u2500 redux.ts\n\u2502   \u2514\u2500\u2500 store.ts\n\u251c\u2500\u2500 components // \uc7ac\uc0ac\uc6a9\ud560 \ucef4\ud3ec\ub10c\ud2b8\n\u2502   \u251c\u2500\u2500 button\n\u2502   \u2502   \u251c\u2500\u2500 _button.scss\n\u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502   \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 containers // view\n\u2502   \u251c\u2500\u2500 todo.container\n\u2502   \u2502   \u251c\u2500\u2500 todo.container.tsx // business logic\n\u2502   \u2502   \u251c\u2500\u2500 todo.view.tsx // only view\n\u2502   \u2502   \u251c\u2500\u2500 _todo.scss\n\u2502   \u2502   \u2514\u2500\u2500 redux or state\n\u2502   \u2502        \u251c\u2500\u2500 action.ts\n\u2502   \u2502        \u251c\u2500\u2500 types.ts\n\u2502   \u2502        \u2514\u2500\u2500 reducer.ts\n\u2502   \u2502   // ...\n\u2502   \u251c\u2500\u2500 product.container\n\u2502   \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 style\n\u251c\u2500\u2500 App.tsx\n\u2514\u2500\u2500 index.tsx\n\n** cra-template-redux structure\n\n\u251c\u2500\u2500 api\n\u2502   \u2514\u2500\u2500 githubAPI.js\n\u251c\u2500\u2500 components\n\u2502   \u2514\u2500\u2500 Heading.js\n\u251c\u2500\u2500 features\n\u2502   \u251c\u2500\u2500 counter\n\u2502   \u2502   \u251c\u2500\u2500 Counter.css\n\u2502   \u2502   \u251c\u2500\u2500 Counter.js\n\u2502   \u2502   \u2514\u2500\u2500 counterReducer.js\n\u2502   \u251c\u2500\u2500 github\n\u2502   \u2502   \u251c\u2500\u2500 RepoDetail.js\n\u2502   \u2502   \u2514\u2500\u2500 repoDetailSlice.js\n\u2502   \u2514\u2500\u2500 todos\n\u2502       \u251c\u2500\u2500 Todos.js\n\u2514\u2500\u2500     \u2514\u2500\u2500 todosSlice.js\n"))))}l.isMDXComponent=!0}},[["2/wF",0,1,2]]]);