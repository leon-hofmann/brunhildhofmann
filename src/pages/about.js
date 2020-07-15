import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h6 class="slogan" id="slogan-literature">
            Jedes meiner Bücher ist aus einem Wink des Herzens heraus
            entstanden. Ich habe sie für mich geschrieben. Und ich freue mich,
            wenn sie Anderen gefallen und ihnen dienen.
          </h6>
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.orgasmusDieWeiblicheKraft.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Orgasmus - die weibliche Kraft</figcaption>
          </figure>
          <p>
            <strong>Orgasmus - die weibliche Kraft</strong>
          </p>
          <p>Orgasmus statt Frustration - weiblich - kreativ - kraftvoll</p>
          <p>
            Weiblichkeit, Kreativität und Lebenskraft - welche Frau möchte diese
            natürlichen Gaben nicht entdecken und entfalten? Das Geheimnis:
            Diese Qualitäten entspringen dem Wohlgefühl, das ihr Genital, die
            Brüste, die Vagina und die entsprechenden inneren Anteile bereiten -
            nämlich dem Glück, sich in ihrem Körper rundum wohlzufühlen, ihn als
            Geschenk zu betrachten und ihn als solches zu genießen. Der Orgasmus
            - ob alleine oder zu zweit erlebt - ist dabei ein Potenzial, das
            jeder Frau zur Verfügung steht und ihr Leben erblühen lässt.
          </p>
          <p>
            Das Buch beleuchtet die hormonellen, physischen und anatomischen
            Facetten dieser Potenz und gibt Einblick in subjektives Erleben.
            Konkrete Anleitungen ermutigen dazu, sich dem eigenen Körper
            liebevoll zu nähern. Die Wahl einer aufrichtig erotischen und dabei
            zärtlichen Sprache macht das Lesen zum Vergnügen.
          </p>
          <p>
            Es gibt keine richtige oder falsche orgiastische Erfahrung.
            Lebenswert ist, was das Leben stärkt.
          </p>
        </div>
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.psychkImTaeglichenLeben.childImageSharp.fluid}
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
            Coaches und Menschen aus heilenden Berufen ist Psych-K eine optimale
            Ergänzung.
          </p>
        </div>
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.psychkErleben.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>PSYCH-K erleben</figcaption>
          </figure>
          <p>
            <strong>20 lebensbejahende Inspirationen aus der Praxis. </strong>
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
        <div className="post-content-body spacer">
          <figure className="kg-card kg-image-card kg-width-small floated-right">
            <Img
              fluid={data.starkOderSchwach.childImageSharp.fluid}
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
              fluid={data.findeDeinInneresGleichgewicht.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Finde dein inneres Gleichgewicht</figcaption>
          </figure>
          <p>
            <strong>Die beglückende Verbindung von Gehirn und Herz. </strong>
          </p>
          <p>
            Wer sehnte sich nicht danach, sein volles Potenzial auf der Erde zu
            entfalten und sich eins zu fühlen mit allem, was ist?! Das erfordert
            die gleichwertige Aktivität unserer beiden Gehirnhälften sowie ein
            harmonisches, synchrones Schwingen unseres Gehirns mit unserem
            Herzen. Wir selbst haben die Kraft, getragen von unseren tiefen
            Überzeugungen, durch Meditation und Erdung, das Zu-Hause-Sein in der
            Natur, durch Segnen und Lieben, unser Körper-Geist-System in eine
            kohärente Schwingung zu versetzen. Unser Gehirn dient unserem Herzen
            als Tor zum Universum, wo wir alle die gleiche Sprache sprechen ...
          </p>
          <p>
            Wenn wir uns lieben, statt recht haben zu wollen, heißen wir
            Veränderungen als großartige Entwicklungschancen willkommen. Aus
            Sicht der Wissenschaft wirken diese Energien bis in die zellulare
            und molekulare Ebene hinein und verändern damit unser gesamtes Sein.
            Sie geben uns die Kraft, die Schönheit unseres Weges zu entdecken,
            und verschaffen uns den nötigen Aufwind, damit wir uns aus
            Leidensphasen erneuert und bereichert wieder erheben können.
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
    orgasmusDieWeiblicheKraft: file(
      relativePath: { eq: "orgasmus-die-weibliche-kraft.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    psychkImTaeglichenLeben: file(
      relativePath: { eq: "psych-k-im-täglichen-leben.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    psychkErleben: file(relativePath: { eq: "psych-k-erleben.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    starkOderSchwach: file(relativePath: { eq: "stark-oder-schwach.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    findeDeinInneresGleichgewicht: file(
      relativePath: { eq: "finde-dein-inneres-gleichgewicht.jpg" }
    ) {
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
