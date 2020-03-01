/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config();

module.exports = {
  /* other settings */
  plugins: [
    /* other plugins */
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'og8s6jspv3p8',
        accessToken: 'vrMG2YYzEIMPkh9zXbXwl0RJCzfFvmRv_lszyfgaoDI',
      },
    },
  ]
}
