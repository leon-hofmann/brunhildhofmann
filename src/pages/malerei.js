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
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.gelbePinkeKleckse.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>
              Gelbe und pinke Kleckse durch Grün verbunden
            </figcaption>
          </figure>
          <p>
            <strong>Gelbe und pinke Kleckse durch Grün verbunden</strong>
          </p>
          <p>
            Spontaner Auftrag von Acrylfarbe direkt aus dem Gehen und aus der
            Tube gedrückt. Punkte werden verbunden, wie alles verbunden ist und
            das Ganze fließt. Acryl auf dünnem Papier.
          </p>
        </div>
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
    impulse: file(relativePath: { eq: "impulse.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gelbePinkeKleckse: file(relativePath: { eq: "gelbe-pinke-kleckse.jpg" }) {
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
