export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>AngularApp</title>
  <base href="/angular-app/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@font-face{font-family:DM Sans;font-style:italic;font-weight:100 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4ET-DNl0.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans;font-style:italic;font-weight:100 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4Hz-D.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:DM Sans;font-style:normal;font-weight:100 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZ2IHSeH.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans;font-style:normal;font-weight:100 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,hr,p{margin:0}ul{list-style:none;margin:0;padding:0}img{display:block;vertical-align:middle}img{max-width:100%;height:auto}.relative{position:relative}.z-10{z-index:10}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.ml-72{margin-left:18rem}.flex{display:flex}.h-full{height:100%}.w-1\\/2{width:50%}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-x-10>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(2.5rem * var(--tw-space-x-reverse));margin-left:calc(2.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2.5rem * var(--tw-space-y-reverse))}.border-gray-400{--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity, 1))}.bg-\\[\\#2F1B93\\]{--tw-bg-opacity: 1;background-color:rgb(47 27 147 / var(--tw-bg-opacity, 1))}.p-8{padding:2rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.text-center{text-align:center}.text-6xl{font-size:3.75rem;line-height:1}.font-bold{font-weight:700}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}body{font-family:DM Sans,sans-serif;margin:0;padding:0}.hover\\:text-gray-300:hover{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}@media (min-width: 640px){.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}@media (min-width: 768px){.md\\:text-6xl{font-size:3.75rem;line-height:1}}.fa-brands{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-brands:before{content:var(--fa)}.fa-brands{font-family:"Font Awesome 6 Brands"}:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}@font-face{font-family:"Font Awesome 6 Brands";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-brands-400-6PJPV6JM.woff2") format("woff2"),url("./media/fa-brands-400-KOKGDU7E.ttf") format("truetype")}.fa-brands{font-weight:400}.fa-google-plus{--fa:"\\f2b3"}.fa-facebook{--fa:"\\f09a"}.fa-twitter{--fa:"\\f099"}:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-regular-400-OHB6J4OK.woff2") format("woff2"),url("./media/fa-regular-400-IPMAEX5Y.ttf") format("truetype")}:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url("./media/fa-solid-900-ABTK6BNK.woff2") format("woff2"),url("./media/fa-solid-900-SRFFQLRM.ttf") format("truetype")}
</style><link rel="stylesheet" href="styles-2XBXNL2C.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-2XBXNL2C.css"></noscript><style ng-app-id="ng">.feature-container[_ngcontent-ng-c1136310375]{position:relative;height:100vh;background-image:url("./media/features-page-bg-image-PPGOQQQA.png");background-size:cover;background-repeat:no-repeat;background-position:center}.image-overlay[_ngcontent-ng-c1136310375]{position:absolute;inset:0;background-color:#2f189380;z-index:1;margin-top:0}.left-img[_ngcontent-ng-c1136310375]{position:absolute;z-index:2;height:80%;display:block;top:50%;left:15%;transform:translate(-50%,-50%)}</style></head>

<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.0.1" ngh="2" ng-server-context="ssg"><router-outlet></router-outlet><app-features _nghost-ng-c1136310375 ngh="1"><div _ngcontent-ng-c1136310375 class="feature-container"><app-navbar _ngcontent-ng-c1136310375 ngh="0"><nav class="z-10 relative"><div><ul class="flex items-center justify-center space-x-10 py-6"><li><a routerlinkactive="active" class="text-white cursor-pointer hover:text-gray-300 active" href="/angular-app/" jsaction="click:;"> Home </a></li><li><a routerlinkactive="active" class="text-white cursor-pointer hover:text-gray-300 active" href="/angular-app/features" jsaction="click:;"> Features </a></li><li><a routerlinkactive="active" class="text-white cursor-pointer hover:text-gray-300" href="/angular-app/pricing" jsaction="click:;"> Pricing </a></li><li><a routerlinkactive="active" class="text-white cursor-pointer hover:text-gray-300" href="/angular-app/blog" jsaction="click:;"> Blog </a></li><!----></ul></div></nav></app-navbar><div _ngcontent-ng-c1136310375 class="image-overlay"></div><img _ngcontent-ng-c1136310375 src="assets/images/notebook-bg-left.png" alt class="left-img"><div _ngcontent-ng-c1136310375 class="flex flex-col z-10 text-white space-y-10 items-center relative h-full justify-center"><h1 _ngcontent-ng-c1136310375 class="text-6xl sm:text-3xl md:text-6xl font-bold text-white text-center ml-72"> Powerful and simple <br _ngcontent-ng-c1136310375> for teams big and small. </h1><p _ngcontent-ng-c1136310375 class="text-center text-white w-1/2 ml-72"> Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions. </p></div></div><app-footer _ngcontent-ng-c1136310375 ngh="1"><div class="bg-[#2F1B93] text-white p-8"><div class="flex justify-between"><div> Footer </div><div class="space-x-10"><span>Privacy Policy</span><span>Terms</span><span><i class="fa-brands fa-twitter"></i></span><span><i class="fa-brands fa-facebook"></i></span><span><i class="fa-brands fa-google-plus"></i></span></div></div><hr class="my-5 border-gray-400"><div class="flex justify-between"><div class="space-x-10"><span>Tour</span><span>Features</span><span>Pricing Plans</span><span>Our Works</span><span>Brands</span><span>Contact</span></div><div><span> © 2017 All rights reserved. </span></div></div></div></app-footer></app-features><!----></app-root>
<link rel="modulepreload" href="chunk-VG57WEEW.js"><script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-WZ4S3UTJ.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"3":"t0"},"c":{"3":[{"i":"t0","r":1,"x":4}]}},{},{"c":{"0":[{"i":"c1136310375","r":1}]}}]}</script></body></html>`;