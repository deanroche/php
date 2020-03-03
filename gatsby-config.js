module.exports = {
  siteMetadata: {
    title: `Precision Health Performance`,
    titleTemplate: ``,
    author: `Darren Carlin`,
    description: `Precision Health Performance Gym Waterford`,
    siteUrl: `https://www.precisionhealthperformance.com`, // No trailing slash allowed!
    image: ``, // Path to your image you placed in the 'static' folder
    twitterUsername: `@WorksDazzle`,
    email: "info@precisionhealthperformance.com",
    company: "Precision Health Performance",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://precisionhealthperformance.us4.list-manage.com/subscribe/post?u=34f9deea3c002f21a60481a53&amp;id=b2538c087b",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto Mono", "Roboto Slab"],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "uj0jgu2ewl2q",
        accessToken: "OISxlWyWRg054ycyu6jJAvZCed52WaoR8HPs5TotXsM",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `_precision_health_performance_`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PrecisionHealthPerformance`,
        short_name: `PrecisionHealthPerformance`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.

        crossOrigin: `use-credentials`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Access-Control-Allow-Origin: *",
            "Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept",
          ],
        },
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: false,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
      },
    },
  ],
}
