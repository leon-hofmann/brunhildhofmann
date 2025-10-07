import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template">
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.emotion1.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>emotion 1, 2024</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.emotion3.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>emotion 3, 2025</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.emotion4.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>emotion 4, 2024</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.emotion5.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>emotion 5, 2024</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.emotion7.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>emotion 7, 2024</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.emotion8.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>emotion 8, 2024</figcaption>
          </figure>
          <p>
            <strong>emotion 1-8</strong>
          </p>
          <p>
            Diese Bilder sind aus dem aktuellen Gefühl entstanden und drücken es
            aus durch Körper und Bewegung beim Malen aus. Acrylamlerei,
            Spachteln und Schüttung
          </p>
        </div>
      </article>
      <article className="post-content page-template no-image">
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.bietschhorn.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>bietschhorn-lötschental-wallis_2025</figcaption>
          </figure>
          <p>
            <strong>Bietschhorn Lötschental Wallis, 2025</strong>
          </p>
        </div>
      </article>
      <article className="post-content page-template no-image">
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.umarmung.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Zärtlich umarmen</figcaption>
          </figure>
          <p>
            <strong>Zärtlich umarmen</strong>
          </p>
          <p>
            „Zärtlich umarmen“ lässt auf der zweidimensionalen Leinwand Energien
            entstehen, die Dunkelheit transformieren. Die Zärtlichkeit umarmt
            die Dunkelheit und lässt das Ganze leuchten. Acryl und Gouache auf
            Leinwand
          </p>
        </div>
      </article>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.impulse.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Impulse aus heiterem Himmel</figcaption>
          </figure>
          <p>
            <strong>Impulse aus heiterem Himmel</strong>
          </p>
          <p>
            Spontane Bewegungen der Hände und Finger erschaffen spielerisch eine
            Komposition in Rot, Grün und Gelb mit einem Schimmer von Blau. Dies
            ist Teil des Ergebnisses der Selbsterfahrung einer Gruppe mit Farbe
            und Malen.
          </p>
        </div>
      </article>
      <article className="post-content page-template no-image">
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.erbluehen.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Erblühen</figcaption>
          </figure>
          <p>
            <strong>Erblühen</strong>
          </p>
          <p></p>
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
    emotion1: file(relativePath: { eq: "emotion-1_2024.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emotion3: file(relativePath: { eq: "emotion-3_2025.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emotion4: file(relativePath: { eq: "emotion-4_2024.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emotion5: file(relativePath: { eq: "emotion-5_2024.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emotion7: file(relativePath: { eq: "emotion-7_2024.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emotion8: file(relativePath: { eq: "emotion-8_2024.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bietschhorn: file(
      relativePath: { eq: "bietschhorn-lötschental-wallis_2025.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    impulse: file(relativePath: { eq: "impulse.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    erbluehen: file(relativePath: { eq: "erbluehen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    umarmung: file(relativePath: { eq: "umarmung.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
