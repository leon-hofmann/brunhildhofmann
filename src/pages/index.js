import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const pieceQuote = data.site.siteMetadata.pieceQuote
  const authorQuote = data.site.siteMetadata.authorQuote
  const description = data.site.siteMetadata.description

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Home"
        keywords={[
          `brunhild hofmann`,
          `psych-k`,
          `per-k`,
          `psych-k im täglichen leben`,
        ]}
      />
      {/* <Bio /> */}
      {description && (
        <header className="page-head">
          <h2 className="page-head-title">{description}</h2>
          <div className="quote-author">
            <p>
              <em>{pieceQuote}</em> von <em>{authorQuote}</em>
            </p>
          </div>
        </header>
      )}
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        authorQuote
        pieceQuote
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
