/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.CMS_API_URL || 'http://localhost:1337',
        contentTypes: [
          'tile',
          'banner',
        ],
        singleTypes: [
          'hub-main',
          'issue-landing',
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tokenizer`,
        short_name: `Tokenizer`,
        start_url: `/`,
        background_color: `#EEE`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-stencil`,
      options: {
        // The module of your components (required), eg "@ionic/core".
        module: "@defi-ventures/tokenizer-common",

        // Stencil renderToString options (optional): https://stenciljs.com/docs/hydrate-app#configuration-options
        renderToStringOptions: {
          prettyHtml: true,
        },
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `defi-ventures`,
      },
    },
  ],
}
