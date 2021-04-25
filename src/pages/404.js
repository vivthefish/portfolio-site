import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Page Not found" />
    <div className="container py-5">
      <h1 className="secondary-h1">Hmm there's nothing here...</h1>
      <p>Sorry, the page you are trying to access doesn't exist. (404 Error)</p>
      <AniLink cover bg="white" direction="left" to="/" className="cta-btn">Return Home</AniLink>
    </div>
  </Layout>
)

export default NotFoundPage
