module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "pwa",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToEmotionCacheProps: `src/emotion-cache-props`,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        mergeScriptHashes: true,
        mergeStyleHashes: true,
        directives: {
          "script-src": "'self' 'unsafe-eval'",
          "style-src": "'self' 'nonce-true'",
          "img-src": "'self' https://demodam.nl/"
        }
      }
    }
  ]
};
