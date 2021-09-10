module.exports = {
  siteMetadata: {
    title: `Ibrahim Odesola`,
    description: `This is my portfolio site, where you can find some informations about me, contact me and also some projects I've worked on or built.`,
    author: `@CyberDevv`,
    twitterUsername: `@CyberDevv`,
    image: `/myPortfolio.png`,
    siteUrl: `https://ibrahim-odesola.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ibrahim Odesola`,
        short_name: `Ibrahim Odesola`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Work Sans"],
          families: ["Roboto Mono"],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 100,
        collectionTypes: [`projects`],
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://cdn.rawgit.com/progers/pathseg/master/pathseg.js",
      },
    },
  ],
}
