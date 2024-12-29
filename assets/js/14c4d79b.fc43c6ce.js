"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[8349],{4137:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>b});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=o.createContext({}),m=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=m(t.components);return o.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=m(r),d=n,b=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return r?o.createElement(b,l(l({ref:e},s),{},{components:r})):o.createElement(b,l({ref:e},s))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:n,l[1]=i;for(var m=2;m<a;m++)l[m]=r[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},188:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=r(7462),n=(r(7294),r(4137));const a={},l="Rebooting the emulator",i={unversionedId:"fundamentals/Rebooting-the-Altair",id:"fundamentals/Rebooting-the-Altair",title:"Rebooting the emulator",description:"There are various reasons why you might want to reboot the Altair operating system.",source:"@site/docs/20-fundamentals/40-Rebooting-the-Altair.md",sourceDirName:"20-fundamentals",slug:"/fundamentals/Rebooting-the-Altair",permalink:"/altair_8800_docs/fundamentals/Rebooting-the-Altair",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/20-fundamentals/40-Rebooting-the-Altair.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Learn about CP/M",permalink:"/altair_8800_docs/fundamentals/introduction-cpm"},next:{title:"Cloud services",permalink:"/altair_8800_docs/category/cloud-services"}},p={},m=[{value:"Reboot CP/M",id:"reboot-cpm",level:2},{value:"Reboot Altair BASIC",id:"reboot-altair-basic",level:2}],s={toc:m},u="wrapper";function c(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rebooting-the-emulator"},"Rebooting the emulator"),(0,n.kt)("p",null,"There are various reasons why you might want to reboot the Altair operating system."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You may ",(0,n.kt)("em",{parentName:"li"},"crash")," the Altair operating system if you hack the current CPU instruction pointer or corrupt RAM. You might corrupt memory while programming in Assembly or with the virtual front panel."),(0,n.kt)("li",{parentName:"ol"},"You might have tried to access a drive letter that is not available. The only way to recover is to reboot the Altair."),(0,n.kt)("li",{parentName:"ol"},"You want to boot Altair BASIC and run the original Altair BASIC written by Bill Gates and Paul Allan.")),(0,n.kt)("p",null,"You'll be glad to know it's easy to reboot the Altair."),(0,n.kt)("h2",{id:"reboot-cpm"},"Reboot CP/M"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the web terminal, select ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+M")," to enter the CPU monitor."),(0,n.kt)("li",{parentName:"ol"},"Type ",(0,n.kt)("strong",{parentName:"li"},"r")," (for Altair RESET), followed by ",(0,n.kt)("kbd",null,"Enter")," to boot CP/M.")),(0,n.kt)("h2",{id:"reboot-altair-basic"},"Reboot Altair BASIC"),(0,n.kt)("p",null,"By default, the Altair emulator loads CP/M on startup. To load Altair BASIC, follow these instructions."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the web terminal, select ",(0,n.kt)("strong",{parentName:"p"},"Ctrl+M")," to enter the CPU monitor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Type ",(0,n.kt)("strong",{parentName:"p"},"basic")," (for Altair BASIC), followed by ",(0,n.kt)("kbd",null,"Enter")," to boot Altair BASIC.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You'll be prompted for the following information:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MEMORY SIZE?"),": Select the Enter key to accept the default."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TERMINAL  WIDTH?"),": Select Enter to accept the default."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WANT SIN-COS-TAN-ATN?"),": Enter ",(0,n.kt)("inlineCode",{parentName:"li"},"Y")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"N"),".")),(0,n.kt)("p",{parentName:"li"},"Altair BASIC responds with the amount of memory and version information."))),(0,n.kt)("p",null,"For more information about Altair BASIC, refer to ",(0,n.kt)("a",{parentName:"p",href:"/altair_8800_docs/programming/Altair-BASIC-programming"},"Altair-BASIC-programming")))}c.isMDXComponent=!0}}]);