
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-app"
  },
  {
    "renderMode": 2,
    "route": "/angular-app/features"
  },
  {
    "renderMode": 2,
    "route": "/angular-app/pricing"
  },
  {
    "renderMode": 2,
    "route": "/angular-app/blog"
  }
],
  assets: new Map([
['index.csr.html', {size: 4738, hash: '04c0ccd5614a32ffbb78f5ceae8a0b5ff384ca13d62cd23d799de1c29010c397', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1087, hash: '9c5f412002b3dfe2c660763ffae3e67a79a681ff1ee3375031764b18d13b2366', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['pricing/index.html', {size: 5010, hash: '16d0241472ace30b304277a49ad21221d562af2ce8840c5d9123842faad8eb90', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)}], 
['features/index.html', {size: 10567, hash: '6bd769b0584e6d28dda6c36a0b5c7cdb5764ad41edbd1554a6d4d55c9c2736e1', text: () => import('./assets-chunks/features_index_html.mjs').then(m => m.default)}], 
['blog/index.html', {size: 5002, hash: '89fb699c63b546b3d35638a160b3ecdd4e3223237a527d206191682ee2d29d2e', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 22582, hash: 'ea206532d87cfe2bd7b8d7bf0e4cb46941761bc87908c77e84fcfa5de80e4af9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-2XBXNL2C.css', {size: 113450, hash: 'YcudqMBlt+I', text: () => import('./assets-chunks/styles-2XBXNL2C_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
