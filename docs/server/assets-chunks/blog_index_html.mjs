export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>AngularApp</title>
  <base href="/angular-app/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@font-face{font-family:DM Sans;font-style:italic;font-weight:100 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4ET-DNl0.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans;font-style:italic;font-weight:100 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4Hz-D.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:DM Sans;font-style:normal;font-weight:100 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZ2IHSeH.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans;font-style:normal;font-weight:100 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}p{margin:0}body{font-family:DM Sans,sans-serif;margin:0;padding:0}:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}@font-face{font-family:"Font Awesome 6 Brands";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-brands-400-6PJPV6JM.woff2") format("woff2"),url("./media/fa-brands-400-KOKGDU7E.ttf") format("truetype")}:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url("./media/fa-regular-400-OHB6J4OK.woff2") format("woff2"),url("./media/fa-regular-400-IPMAEX5Y.ttf") format("truetype")}:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url("./media/fa-solid-900-ABTK6BNK.woff2") format("woff2"),url("./media/fa-solid-900-SRFFQLRM.ttf") format("truetype")}
</style><link rel="stylesheet" href="styles-2XBXNL2C.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-2XBXNL2C.css"></noscript></head>

<body><!--nghm-->
  <app-root ng-version="19.0.1" ngh="1" ng-server-context="ssg"><router-outlet></router-outlet><app-blog ngh="0"><p>blog works!</p></app-blog><!----></app-root>
<link rel="modulepreload" href="chunk-VG57WEEW.js"><script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-WZ4S3UTJ.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"c":{"0":[{"i":"c2723535161","r":1}]}}]}</script></body></html>`;