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
          <h6 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Jedes meiner Bücher ist aus einem Wink des Herzens heraus
            entstanden. Ich habe sie für mich geschrieben. Und ich freue mich,
            wenn sie Anderen gefallen und ihnen dienen.
          </h6>
          <figure className="kg-card kg-image-card kg-width-small">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <p>
            <strong>Orgasmus - die weibliche Kraft</strong>
          </p>
          <p>
            Orgasmus statt Frustration - weiblich - kreativ - kraftvoll
            <p>
              Weiblichkeit, Kreativität und Lebenskraft - welche Frau möchte
              diese natürlichen Gaben nicht entdecken und entfalten? Das
              Geheimnis: Diese Qualitäten entspringen dem Wohlgefühl, das ihr
              Genital, die Brüste, die Vagina und die entsprechenden inneren
              Anteile bereiten - nämlich dem Glück, sich in ihrem Körper rundum
              wohlzufühlen, ihn als Geschenk zu betrachten und ihn als solches
              zu genießen. Der Orgasmus - ob alleine oder zu zweit erlebt - ist
              dabei ein Potenzial, das jeder Frau zur Verfügung steht und ihr
              Leben erblühen lässt.
            </p>
            <p>
              Das Buch beleuchtet die hormonellen, physischen und anatomischen
              Facetten dieser Potenz und gibt Einblick in subjektives Erleben.
              Konkrete Anleitungen ermutigen dazu, sich dem eigenen Körper
              liebevoll zu nähern. Die Wahl einer aufrichtig erotischen und
              dabei zärtlichen Sprache macht das Lesen zum Vergnügen.
            </p>
            <p>
              Es gibt keine richtige oder falsche orgiastische Erfahrung.
              Lebenswert ist, was das Leben stärkt.
            </p>
          </p>
          <h3 id="dynamic-styles">Dynamic styles</h3>
          <p>
            London comes with photo-centric main layout best suited to
            photography, graphics portfolios and other image-heavy uses.
          </p>
          <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
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
    benchAccounting: file(
      relativePath: { eq: "orgasmus_die_weiblich_kraft.jpg" }
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
