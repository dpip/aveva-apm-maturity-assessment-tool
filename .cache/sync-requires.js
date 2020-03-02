const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danielpipkin/sites/9541-aveva-apm-maturity-assessment-tool/.cache/dev-404-page.js"))),
  "component---src-pages-assessment-js": hot(preferDefault(require("/Users/danielpipkin/sites/9541-aveva-apm-maturity-assessment-tool/src/pages/assessment.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danielpipkin/sites/9541-aveva-apm-maturity-assessment-tool/src/pages/index.js"))),
  "component---src-pages-intro-js": hot(preferDefault(require("/Users/danielpipkin/sites/9541-aveva-apm-maturity-assessment-tool/src/pages/intro.js")))
}

