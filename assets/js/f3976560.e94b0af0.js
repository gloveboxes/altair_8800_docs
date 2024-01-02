"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[2844],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(a),c=i,m=h["".concat(s,".").concat(c)]||h[c]||u[c]||n;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},672:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(7462),i=(a(7294),a(4137));const n={title:"Altair",description:"Altair 8800",hide_table_of_contents:!1,slug:"/"},o=void 0,l={type:"mdx",permalink:"/altair_8800_docs/",source:"@site/src/pages/index.md",title:"Altair",description:"Altair 8800",frontMatter:{title:"Altair",description:"Altair 8800",hide_table_of_contents:!1,slug:"/"}},s=[{value:"Introduction",id:"introduction",level:2},{value:"Get started docs",id:"get-started-docs",level:2},{value:"Retro computing with Dave Glover and the Altair 8800",id:"retro-computing-with-dave-glover-and-the-altair-8800",level:2},{value:"Running the Altair",id:"running-the-altair",level:2},{value:"Supported operating systems",id:"supported-operating-systems",level:3},{value:"Supported devices",id:"supported-devices",level:3},{value:"Raspberry Pi with the optional Pi Sense HAT",id:"raspberry-pi-with-the-optional-pi-sense-hat",level:4},{value:"Azure Sphere with optional Altair front panel kit",id:"azure-sphere-with-optional-altair-front-panel-kit",level:4},{value:"Altair history",id:"altair-history",level:2}],p={toc:s},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The goal of the cloud-connected Altair project is to provide a unique blend of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Retrocomputing"},"computing history")," with modern cloud computing. You'll learn about computing fundamentals, software development, and modern IoT, Data, and AI cloud services that address today's real-world IT challenges."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Altair_8800?azure-portal=true"},"Altair 8800")," kick-started the personal computer revolution. Microsoft's first product was ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Altair_BASIC?azure-portal=true"},"Altair BASIC")," written for the Altair 8800 by Bill Gates and Paul Allen. At the time, Altair BASIC was a huge step forward as it allowed people to write programs using a high-level programming language."),(0,i.kt)("h2",{id:"get-started-docs"},"Get started docs"),(0,i.kt)("p",null,"Head to ",(0,i.kt)("a",{parentName:"p",href:"/start/Deploy"},"Get started")," to learn how to deploy and run the Altair 8800 emulator."),(0,i.kt)("h2",{id:"retro-computing-with-dave-glover-and-the-altair-8800"},"Retro computing with Dave Glover and the Altair 8800"),(0,i.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/fSz5lTaXS0E",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("p",null,"The Altair project can be viewed through three lenses:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Learn how to develop multithreaded event-driven IoT C applications that scale from ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Microcontroller"},"microcontrollers"),", to ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Raspberry_Pi"},"Raspberry Pis"),", to desktop-class computers."),(0,i.kt)("li",{parentName:"ol"},"A fantastic safe way to explore machine-level programming, Intel 8080 Assembly programming, along with C and BASIC development."),(0,i.kt)("li",{parentName:"ol"},"You are interested in retro gaming, and you want to chill playing retro games from yesteryear."),(0,i.kt)("li",{parentName:"ol"},"Optionally, the project integrates free weather and pollution cloud services from ",(0,i.kt)("a",{parentName:"li",href:"http://openweathermap.org"},"Open Weather Map"),", along with ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-au/services/iot-central/"},"Azure IoT Central"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/services/cognitive-services/anomaly-detector/"},"Azure Anomaly Detection Cognitive Service"),". The following reports were generated from data published by the Altair emulator using data sourced from Open Weather Map.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"IoT Central Sydney pollution report"),(0,i.kt)("th",{parentName:"tr",align:null},"Azure Anomaly Detection report"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The images shows pollution report for Sydney",src:a(8327).Z,width:"600",height:"400"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The following images shows temperature based anomalies",src:a(7121).Z,width:"533",height:"400"}))))),(0,i.kt)("h2",{id:"running-the-altair"},"Running the Altair"),(0,i.kt)("p",null,"The Altair emulator runs on desktop and device operating systems. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X"},"source code")," is the same, but on devices there are some extended experiences. The Altair emulator has been tested on the following desktop operating systems and devices."),(0,i.kt)("h3",{id:"supported-operating-systems"},"Supported operating systems"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"fastest")," way to run the Altair emulator is on your computer with Docker. The Altair emulator also runs on ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX")," compatible operating systems including, Linux, Windows with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL 2"),", macOS on Apple Silicon and Intel."),(0,i.kt)("h3",{id:"supported-devices"},"Supported devices"),(0,i.kt)("p",null,"The more ",(0,i.kt)("strong",{parentName:"p"},"interesting")," way to run the Altair emulator is on a device, the Altair emulator has been tested on the following devices:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/"},"Raspberry Pi"),", models, Zero 1 & 2, 2B, 3B, 3B, and 4 running Raspberry Pi OS."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/services/azure-sphere/"},"Azure Sphere Avnet and Seeed Developer Kits")," running embedded Linux.")),(0,i.kt)("h4",{id:"raspberry-pi-with-the-optional-pi-sense-hat"},"Raspberry Pi with the optional Pi Sense HAT"),(0,i.kt)("p",null,"If you pair a Raspberry Pi with a ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/products/sense-hat/"},"Pi Sense HAT"),", the Altair address and data bus activity is displayed on the 8x8 LED panel."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi with Pi Sense HAT"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Sense HAT"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The image shows the address and data bus LEDs",src:a(4356).Z,width:"562",height:"379"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The gif shows the address and data bus LEDs in action",src:a(5201).Z,width:"469",height:"400"}))))),(0,i.kt)("h4",{id:"azure-sphere-with-optional-altair-front-panel-kit"},"Azure Sphere with optional Altair front panel kit"),(0,i.kt)("p",null,"The Altair emulator is supported on Azure Sphere devices from Avnet and Seeed Studio. If an Azure Sphere device is paired with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/AzureSphereAltair8800.Hardware"},"Altair front panel kit")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://www.mikroe.com/blog/8800-retro-click"},"Mikroe Altair Retro Click"),", the Altair address and data bus activity is displayed."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Azure Sphere with the Altair front panel kit"),(0,i.kt)("th",{parentName:"tr",align:null},"MikroE Retro Click"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The gif shows the Altair on Azure Sphere with the Altair front panel",src:a(5191).Z,width:"979",height:"400"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"The gif shows the address and data bus LEDs in action",src:a(2677).Z,width:"332",height:"400"}))))),(0,i.kt)("h2",{id:"altair-history"},"Altair history"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The image shows the Altair 8800",src:a(9547).Z,width:"707",height:"353"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://commons.wikimedia.org/wiki/File:Altair_8800,_Smithsonian_Museum.jpg"},"Altair 8800 image attribution - Smithsonian Museum")),(0,i.kt)("p",null,"The Altair 8800 was built on the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Intel_8080?azure-portal=true"},"Intel 8080")," CPU, the second 8-bit microprocessor manufactured by Intel in 1974. By today's standards, it's a simple CPU design, perfect for learning computing fundamentals because of its small instruction set."),(0,i.kt)("p",null,"The original Altair 8800 was programmed by setting switches on the front panel. It was a painstaking, error-prone process to load and run a program. The Altair 8800 had a series of LEDs and switches that you used to load apps and determine the state of the Altair."),(0,i.kt)("p",null,"You could save and load applications from a paper tape reader connected to the Altair 8800. As the Altair 8800 grew in popularity, more options became available. You could attach a keyboard, a computer monitor, and finally disk drives, a more reliable way to save and load applications."))}h.isMDXComponent=!0},9547:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/altair-8800-smithsonian-museum-758455a31e570d4cbfeda931e9160903.png"},5191:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/altair_on_sphere-98abeed24d5bc60e757abebf5915ef90.gif"},2677:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/avnet_retro_click-7b1a51a16e5d323ac421778d433c78d0.gif"},8327:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iot_central_pollution_report-ac41244851068dc6e9880987e78e9d1a.png"},5201:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/raspberry_pi_sense_hat-079bdc455c3a3502d2aaa72a6f7b69ed.gif"},4356:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/raspberry_pi_sense_hat_map-219521f7247903276cd59d090845b3ea.png"},7121:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/univariate-anomalies-ca2e171d017ac8c6f26ad82d99afd7b8.png"}}]);