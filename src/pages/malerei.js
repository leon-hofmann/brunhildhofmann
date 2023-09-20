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
          <h6 class="slogan" id="slogan-literature">
            Jedes meiner Bücher ist aus einem Wink des Herzens heraus
            entstanden. Ich habe sie für mich geschrieben. Und ich freue mich,
            wenn sie Anderen gefallen und ihnen dienen.
          </h6>
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.umarmung.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Stark oder Schwach?</figcaption>
          </figure>
          <p>
            <strong>Welche Entscheidung ist die richtige?</strong>
          </p>
          <p>
            Durch den Selbst-Muskeltest rufen wir unser tiefes Körperwissen ab
            und können es zur Grundlage unserer Entscheidungen machen immer wenn
            wir es brauchen sowie in jeder Situation. Elf Selbst-Muskeltests
            geben den Lesern die Möglichkeit, verschiedene Techniken
            auszuprobieren und den Test für sich zu finden, dem sie jeweils
            vertrauen. Basierend auf dem Selbst-Muskeltest finden Sie zusätzlich
            eine Methode der Stressauflösung, durch die Sie wirkungsvoll
            Blockaden im Gehirn transformieren und somit Verbindung statt
            Konflikt erleben. Immer stärker sich selbst vertrauen das ist der
            Weg!
          </p>
        </div>
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.gelbePinkeKleckse.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>PSYCH-K im täglichen Leben</figcaption>
          </figure>
          <p>
            <strong>
              Für eine entspannte Kommunikation zwischen Bewusstsein und
              Unterbewusstsein
            </strong>
          </p>
          <p>
            PSYCH-K, eine Methode für jedermann, lässt uns direkt mit Körper und
            Seele Zwiesprache halten: Auf einfache Weise entdecken wir
            limitierende Überzeugungen und verwandeln sie in uns stärkende
            Glaubenssätze. Das Ergebnis ist die kraftvolle Ausrichtung unseres
            Unterbewusstseins verbunden mit dem Aspekt unseres Höheren Selbst
            auf unsere bewussten Ziele. Das Verschmelzen von Grundlagen der
            Kinesiologie und des Neuro-Linguistischen-Programmierens (NLP) mit
            Energie- und Atemarbeit tragen zur hohen Effizienz der Methode bei.
          </p>
          <p>
            PSYCH-K ist eine Selbsthilfemethode, die beschleunigtes Wachstum mit
            Leichtigkeit und Erfolg verbindet. Für BeraterInnen, PsychologInnen,
            Coaches und Menschen aus heilenden Berufen ist PSYCH-K eine optimale
            Ergänzung.
          </p>
        </div>
        <div className="post-content-body">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.impulse.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Orgasmus - die weibliche Kraft</figcaption>
          </figure>
          <p>
            <strong>Orgasmus - die weibliche Kraft</strong>
          </p>
          <p>
            Was braucht es, um sich als Frau im eigenen Körper rundum
            wohlzufühlen, ihn als Geschenk zu betrachten und dieses Geschenk
            auch zu genießen? Wie stärken wir unsere Weiblichkeit, Kreativität
            und Lebensenergie?
          </p>
          <p>
            Der Orgasmus - ob alleine oder zu zweit erlebt - ist ein Potenzial,
            das jeder Frau zur Verfügung steht und ihr Leben erblühen lässt. Die
            Autorin beleuchtet die hormonellen, physischen und anatomischen
            Facetten dieser Potenz und gibt Einblick in subjektives Erleben.
            Konkrete Anleitungen ermutigen dazu, sich dem eigenen Körper
            liebevoll zu nähern. Verschiedene anatomische Aspekte von Vagina und
            Klitoris werden in ihrer Bedeutung für den weiblichen Orgasmus
            beleuchtet. Es gibt keine richtige oder falsche orgiastische
            Erfahrung. Lebenswert ist, was das Leben stärkt.
          </p>
        </div>
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.erbluehen.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>PSYCH-K erleben</figcaption>
          </figure>
          <p>
            <strong>20 lebensbejahende Inspirationen aus der Praxis</strong>
          </p>
          <p>
            Lebensbejahende Beispiele zu folgenden Themen: - Flugangst - Angst
            vor Publikum zu sprechen - einen neuen Arbeitsplatz finden -
            Abschied vom Vater - mit dem Rauchen aufhören - das Ende einer
            Beziehung und viele Inspirationen mehr. Deutlich wird: Bei PSYCH-K
            geht es immer um die Frage: Was willst du stattdessen? - also um die
            Kraft der stärkenden Gefühle und Überzeugungen.
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
