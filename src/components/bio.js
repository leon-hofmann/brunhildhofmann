import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <section>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
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
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
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
