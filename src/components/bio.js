import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <section>
            <GatsbyImage
              image={data.avatar.childImageSharp.gatsbyImageData}
              alt={author}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </section>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 50, height: 50)
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
