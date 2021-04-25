import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"


const Success = props => (
  <Layout>
    <Seo title="Thank You" />

    <div className="container pt-5 pb-5">
        <h1 className="secondary-h1">Success!</h1>
        <p>Thank you for contacting me! I will get back to you as soon as possible.</p>
        <Link className="cta-btn" to="/" >Return Home</Link>
    </div>
  </Layout>
)

export default Success