/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'
import WolfSkull from '../components/wolfSkull'
// import "./../styles/primitive.css"
// import "./../styles/bootstrap-hack.css"
// import "./../styles/custom.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="body">
      <div id="top"></div>
      <WolfSkull />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
        <main>
          <div id="line-center"></div>
          <div id="lines-lr"></div>
          {children}
        </main>
        <Footer />
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
