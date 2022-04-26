import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `hREA`,
    author: `Sprillow Limited`,
    siteUrl: `https://www.hrea.io`,
    description: `hREA (Holochain Resource-Event-Agent) enables a transparent and trusted account of events in the value chain across and within ecosystems.`
  },
  plugins: 
  ["gatsby-plugin-react-helmet", "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /svgs/
      }
    }
  }

]
};

export default config;
