
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://Jayallstars.github.io/angular-app"
  },
  {
    "renderMode": 2,
    "route": "/https://Jayallstars.github.io/angular-app/features"
  },
  {
    "renderMode": 2,
    "route": "/https://Jayallstars.github.io/angular-app/pricing"
  },
  {
    "renderMode": 2,
    "route": "/https://Jayallstars.github.io/angular-app/blog"
  }
],
  assets: new Map([
['index.csr.html', {size: 4766, hash: '5883c05d93d545b10d4afdb988cb688743b83cc4cbdd2b1468e9a5bb731e7ebe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1115, hash: '556306da8b3870f1d9f59b3312d3794d95cb2fac2160b3e631a0e30beee54a65', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['p/pricing/index.html', {size: 4944, hash: '712886452646ecdf841edf32175d6ae6cb32807472e63b1fcfcafdf0f164e2e6', text: () => import('./assets-chunks/p_pricing_index_html.mjs').then(m => m.default)}], 
['p/features/index.html', {size: 4944, hash: '712886452646ecdf841edf32175d6ae6cb32807472e63b1fcfcafdf0f164e2e6', text: () => import('./assets-chunks/p_features_index_html.mjs').then(m => m.default)}], 
['p/index.html', {size: 4944, hash: '712886452646ecdf841edf32175d6ae6cb32807472e63b1fcfcafdf0f164e2e6', text: () => import('./assets-chunks/p_index_html.mjs').then(m => m.default)}], 
['p/blog/index.html', {size: 4944, hash: '712886452646ecdf841edf32175d6ae6cb32807472e63b1fcfcafdf0f164e2e6', text: () => import('./assets-chunks/p_blog_index_html.mjs').then(m => m.default)}], 
['styles-2XBXNL2C.css', {size: 113450, hash: 'YcudqMBlt+I', text: () => import('./assets-chunks/styles-2XBXNL2C_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
