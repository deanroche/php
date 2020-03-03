import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({
  title,
  lang,
  description,
  image,
  pathname,
  article,
  author,
  keywords,
  robots,
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          defaultAuthor,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
        author: author || defaultAuthor,
        keywords: keywords || ``,
        robots: robots,
      }

      return (
        <>
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={seo.title}
            titleTemplate={titleTemplate}
          >
            <meta name="description" content={seo.description} />
            <meta name="theme-color" content="#aed2f4" />
            <meta name="image" content={seo.image} />
            <meta name="author" content={seo.author} />
            <meta name="robots" content={seo.robots} />
            <meta name="keywords" content={keywords} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            {/* <link rel="canonical" href={siteUrl} /> */}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.defaultProps = {
  lang: `en`,
  title: ``,
  description: ``,
  image: ``,
  pathname: ``,
  article: ``,
  author: ``,
  keywords: ``,
  robots: `index follow`,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
        defaultAuthor: author
      }
    }
  }
`
