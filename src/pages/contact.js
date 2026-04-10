import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const HomePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p>Brunhild Hofmann</p>
          <p>Darmstraße 14</p>
          <p>D-64287 Darmstadt</p>
          <p>Tel.: 06151-45475</p>
          <p>
            <a href="mailto:brunhild.hofmann@energyfocus.de">
              brunhild.hofmann@energyfocus.de
            </a>
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <HomePage data={data} {...props} />}
  />
)
