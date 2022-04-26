/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import Helmet from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 function SEO({ description, lang, meta, title }) {
   const { site, ogImageDefault } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
             siteUrl
           }
         }
         ogImageDefault: file(
           relativePath: { eq: "hrea-social-sharing-preview.png" }
         ) {
           childImageSharp {
             fixed(height: 900, width: 1600) {
               src
             }
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const ogImage = site.siteMetadata.siteUrl.concat(
     ogImageDefault.childImageSharp.fixed.src
   )
 
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={`%s | ${site.siteMetadata.title}`}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:image`,
           content: ogImage,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata.author,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ].concat(meta)}
     />
   )
 }
 
 SEO.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 SEO.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default SEO
 