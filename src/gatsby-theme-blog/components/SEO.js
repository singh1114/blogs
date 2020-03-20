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

function SEO({ description, lang, meta, keywords, title, slug, id }) {
  const { site, allBlogPost } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        allBlogPost {
          edges {
            node {
              ... on MdxBlogPost {
                id
                parent {
                  ... on Mdx {
                    frontmatter {
                      description
                      image
                    }
                  }
                }
                date
              }
              slug
              title
            }
          }
        }
      }
    `)
  console.log('first', slug, allBlogPost, id);
  // console.log("fss", slug, description, site.siteMetadata.description);
  let metaDescription = description || site.siteMetadata.description;
  let image;

  // It is a Post.
  if (id) {
    const realmdxBlogPost = allBlogPost.edges.filter(mdxBlogPost => {
      if (mdxBlogPost.node.id === id) {
        return true
      }
    })
    // console.log(realmdxBlogPost);
    realmdxBlogPost.map(mdxBlogPost => {
      console.log(mdxBlogPost.node.parent.frontmatter, 'data');
      metaDescription = mdxBlogPost.node.parent.frontmatter.description;
      image = mdxBlogPost.node.parent.frontmatter.image;
    })
  }

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
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `og:image`,
          content: image,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string
}

export default SEO