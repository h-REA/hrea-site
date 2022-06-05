import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `hREA`,
    author: `Sprillow Limited`,
    siteUrl: `https://www.hrea.io`,
    description: `hREA (Holochain Resource-Event-Agent) enables a transparent and trusted account of events in value flows across and within ecosystems.`
  },
  plugins: 
  ["gatsby-plugin-react-helmet", "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", 
  "gatsby-plugin-sharp"
  , "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/",
    },
    __key: "images"
  },
  // react svg plugin
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /svgs/
      }
    }
  },
// manifest plugin
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `hREA`,
      short_name: `hrea`,
      start_url: `/`,
      background_color: `#27363b`,
      theme_color: `#27363b`,
      display: `minimal-ui`,
      icon: `src/images/hrea-logo.png`, // This path is relative to the root of the site.
  },
},

]
};

export default config;
