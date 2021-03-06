module.exports = {
  siteMetadata: {
    title: `Esther Itolima`,
    description: `Frontend Developer`,
    image: `./src/images/logo.png`,
    author: `@esther`,
    keywords: `frontend developer, web developer, mobile-friendly, user-experience`,
    siteUrl: `https://www.example.com`,
    twitterUsername: "@Ur_melanin_dev",
  },
  flags : { DEV_SSR: true, PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
        wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            debug: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
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
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon_io/favicon-32x32.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
    resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/welcome/`, `/about/*`],
      },
    },
    

  ],
}
