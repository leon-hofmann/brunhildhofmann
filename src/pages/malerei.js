import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

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
          <p>
            <strong>emotion 1-8</strong>
          </p>
          <p>
            Diese Bilder sind aus dem aktuellen Gefühl entstanden und drücken es
            aus durch Körper und Bewegung beim Malen aus. Acrylamlerei,
            Spachteln und Schüttung
          </p>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.emotion1.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="emotion 1, 2024"
            />
            <figcaption>emotion 1, 2024</figcaption>
          </figure>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.emotion3.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="emotion 3, 2025"
            />
            <figcaption>emotion 3, 2025</figcaption>
          </figure>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.emotion4.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="emotion 4, 2024"
            />
            <figcaption>emotion 4, 2024</figcaption>
          </figure>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.emotion5.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="emotion 5, 2024"
            />
            <figcaption>emotion 5, 2024</figcaption>
          </figure>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.emotion7.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="emotion 7, 2024"
            />
            <figcaption>emotion 7, 2024</figcaption>
          </figure>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.emotion8.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="emotion 8, 2024"
            />
            <figcaption>emotion 8, 2024</figcaption>
          </figure>
        </div>
      </article>
      <article className="post-content page-template">
        <div className="post-content-body spacer">
          <p>
            <strong>Bietschhorn Lötschental Wallis, 2025</strong>
          </p>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.bietschhorn.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="Bietschhorn Lötschental Wallis, 2025"
            />
            <figcaption>Bietschhorn Lötschental Wallis, 2025</figcaption>
          </figure>
        </div>
      </article>
      <article className="post-content page-template">
        <div className="post-content-body spacer">
          <p>
            <strong>Zärtlich umarmen</strong>
          </p>
          <p>
            „Zärtlich umarmen“ lässt auf der zweidimensionalen Leinwand Energien
            entstehen, die Dunkelheit transformieren. Die Zärtlichkeit umarmt
            die Dunkelheit und lässt das Ganze leuchten. Acryl und Gouache auf
            Leinwand
          </p>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.umarmung.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="Zärtlich umarmen"
            />
            <figcaption>Zärtlich umarmen</figcaption>
          </figure>
        </div>
      </article>
      <article className="post-content page-template">
        <div className="post-content-body">
          <p>
            <strong>Impulse aus heiterem Himmel</strong>
          </p>
          <p>
            Spontane Bewegungen der Hände und Finger erschaffen spielerisch eine
            Komposition in Rot, Grün und Gelb mit einem Schimmer von Blau. Dies
            ist Teil des Ergebnisses der Selbsterfahrung einer Gruppe mit Farbe
            und Malen.
          </p>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.impulse.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="Impulse aus heiterem Himmel"
            />
            <figcaption>Impulse aus heiterem Himmel</figcaption>
          </figure>
        </div>
      </article>
      <article className="post-content page-template">
        <div className="post-content-body spacer">
          <p>
            <strong>Erblühen</strong>
          </p>
          <figure className="kg-card kg-image-card">
            <GatsbyImage
              image={data.erbluehen.childImageSharp.gatsbyImageData}
              className="kg-image"
              alt="Erblühen"
            />
            <figcaption>Erblühen</figcaption>
          </figure>
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
        gatsbyImageData(width: 1360)
      }
    }
    emotion3: file(relativePath: { eq: "emotion-3_2025.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
    emotion4: file(relativePath: { eq: "emotion-4_2024.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
    emotion5: file(relativePath: { eq: "emotion-5_2024.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
    emotion7: file(relativePath: { eq: "emotion-7_2024.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
    emotion8: file(relativePath: { eq: "emotion-8_2024.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
    bietschhorn: file(
      relativePath: { eq: "bietschhorn-lötschental-wallis_2025.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
    impulse: file(relativePath: { eq: "impulse.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
    erbluehen: file(relativePath: { eq: "erbluehen.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
      }
    }
    umarmung: file(relativePath: { eq: "umarmung.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1360)
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
