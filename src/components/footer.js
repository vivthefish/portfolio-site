import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"
import { faGithub, faLinkedinIn, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ siteTitle }) => (
  <footer className="main">
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <ul>
            <li>
              <a className="social-link" title="Visit Vivian's Instagram" href="https://www.instagram.com/vivthefish/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </li>
            <li>
              <a className="social-link" title="Visit Vivian's Github" href="https://github.com/vivthefish"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            </li>
            <li>
              <a className="social-link" title="Visit Vivian's LinkedIn" href="https://www.linkedin.com/in/vivian-harvey-0a8998120/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
            </li>
            {/* <li className="text-content">
            </li> */}
          </ul>
          <div id="top-btn" className="text-content ml-3">
            <a href="#top" className=""><FontAwesomeIcon icon={faArrowUp} size="md" /> Back to Top</a>
          </div>
        </div>
        <div className="flex-large text-content">
          <p>
              <small>
                  <img src={Logo} width="20" alt="logo" /> © {new Date().getFullYear()} Vivian Harvey (VivtheFish), Made with <FontAwesomeIcon icon={faHeart} /> and
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>.
              </small>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
