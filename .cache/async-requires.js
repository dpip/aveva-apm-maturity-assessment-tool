// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-assessment-js": () => import("./../src/pages/assessment.js" /* webpackChunkName: "component---src-pages-assessment-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-intro-js": () => import("./../src/pages/intro.js" /* webpackChunkName: "component---src-pages-intro-js" */)
}

