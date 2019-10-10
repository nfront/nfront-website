const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/adam/NFRONT/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/adam/NFRONT/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/adam/NFRONT/src/pages/contact.js"))),
  "component---src-pages-corporate-innovation-js": hot(preferDefault(require("/Users/adam/NFRONT/src/pages/corporate-innovation.js"))),
  "component---src-pages-hire-top-developer-teams-js": hot(preferDefault(require("/Users/adam/NFRONT/src/pages/hire-top-developer-teams.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/adam/NFRONT/src/pages/index.js"))),
  "component---src-pages-outsource-development-js": hot(preferDefault(require("/Users/adam/NFRONT/src/pages/outsource-development.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/adam/NFRONT/src/pages/thanks.js"))),
  "component---src-pages-venture-capital-js": hot(preferDefault(require("/Users/adam/NFRONT/src/pages/venture-capital.js")))
}

