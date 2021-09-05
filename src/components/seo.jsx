import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ desc, meta, title }) {
  const { site } = useStaticQuery(query)
  const { description, siteUrl, image, siteTitle, twitterUsername } =
    site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={siteTitle ? `%s | ${siteTitle}` : null}
      meta={[
        {
          name: `description`,
          content: desc || description,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: `${siteUrl}${image}`,
        },
        {
          name: `og:url`,
          content: siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername || ``,
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: `${siteUrl}${image}`,
        },
      ].concat(meta)}
    />
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        siteUrl
        image
        siteTitle: title
        twitterUsername
      }
    }
  }
`

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
