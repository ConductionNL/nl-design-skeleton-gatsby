require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/commonground-gateway-frontend",
  plugins: [
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: true,
        mergeStyleHashes: true,
        directives: {
          "connect-src": "*",
          "script-src":
            "'self' https://cdnjs.cloudflare.com/ajax/libs/font-awesome/ https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/ https://unpkg.com/@conductionnl/ https://unpkg.com/@utrecht/ https://unpkg.com/@nl-design-system-unstable/ 'unsafe-inline' 'unsafe-eval'",
          "style-src":
            "'self' https://cdnjs.cloudflare.com/ajax/libs/font-awesome/ https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/ https://unpkg.com/@conductionnl/ https://unpkg.com/@utrecht/ https://unpkg.com/@nl-design-system-unstable/ 'unsafe-inline' 'unsafe-eval'",
          "img-src":
            "'self' https://demodam.nl/ data: 'unsafe-inline' 'unsafe-eval'",
          "font-src":
            "'self' https://cdnjs.cloudflare.com/ajax/libs/font-awesome/ 'unsafe-inline' 'unsafe-eval'",
        },
      },
    },
  ],
};
