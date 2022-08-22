"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[6067],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={},l="Linux desktop users",s={unversionedId:"Compile-the-Altair/Install prerequistes/Linux-users",id:"Compile-the-Altair/Install prerequistes/Linux-users",title:"Linux desktop users",description:"Follow these steps to install the required packages.",source:"@site/docs/03-Compile-the-Altair/Install prerequistes/01-Linux-users.md",sourceDirName:"03-Compile-the-Altair/Install prerequistes",slug:"/Compile-the-Altair/Install prerequistes/Linux-users",permalink:"/altair_8800_posix_docs/Compile-the-Altair/Install prerequistes/Linux-users",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_posix_docs/tree/main/docs/03-Compile-the-Altair/Install prerequistes/01-Linux-users.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install prerequistes",permalink:"/altair_8800_posix_docs/category/install-prerequistes"},next:{title:"macOS users",permalink:"/altair_8800_posix_docs/Compile-the-Altair/Install prerequistes/macOS-users"}},o={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linux-desktop-users"},"Linux desktop users"),(0,i.kt)("p",null,"Follow these steps to install the required packages."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a Terminal window.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the following command to install the required packages"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y libuv1-dev cmake build-essential gdb curl libcurl4-openssl-dev libssl-dev uuid-dev ca-certificates git libi2c-dev\n")))))}c.isMDXComponent=!0}}]);