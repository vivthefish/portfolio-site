import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

import { TransitionPortal } from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
  // Lifecycle 
  // componentDidMount() {
  //   this.toggleSubmenu();
  // }

  // constructor to set state and bind "this"
  constructor(props) {
    super(props);
    this.state = {
      // submenuOpen: true,
      mobileNavOpen: false
    };
    // this.toggleSubmenu = this.toggleSubmenu.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  } 
  
  // Methods
  // toggleSubmenu() {
  //   const submenu = document.querySelector('.submenu');
  //   this.setState(prevState => ({
  //     submenuOpen: !prevState.submenuOpen
  //   }));
  //   if (submenu.style.maxHeight){
  //     submenu.style.maxHeight = null;
  //   } else {
  //     submenu.style.maxHeight = submenu.scrollHeight + "px";
  //   } 
  // }
  toggleMobileNav() {
    // const submenu = document.querySelector('.submenu');
    const mobileNav = document.querySelector('.nav');
    const main = document.querySelector('main');
    this.setState(prevState => ({
      mobileNavOpen: !prevState.mobileNavOpen
    }));
    if (this.state.mobileNavOpen) {
      mobileNav.style.transform = 'translateX(100%)';
      this.setState({ submenuOpen: false })
      // submenu.style.maxHeight = null;
      main.style.filter = 'brightness(1)';
    } else {
      main.style.filter = 'brightness(0.5)';
      mobileNav.style.transform = 'translateX(0)';
      this.setState({ submenuOpen: true })
      // submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
  }

  // Render
  render() {
    const props = this.props;
    return (
      <TransitionPortal>
        {/* <header id="main" className={headerStyles.header}> */}
        <header id="main">
          <a href="#top" className="sr-only">Skip to Content</a>
          <div className="nav-wrapper mt-0 mt-sm-2">
            <div className="nav-brand">
              <AniLink cover bg="white" direction="left" to="/">
                <img src={Logo} width="70" alt="logo" />
              </AniLink>
            </div>
            <div id="mobile-nav">
              <Link className="nav-link mr-2" to="/#contact"><span className="link-circle">Contact</span></Link>
              <button aria-label="Open Menu" className="m-0" onClick={this.toggleMobileNav}>
                <FontAwesomeIcon icon={faBars} size="2x" />
              </button>
            </div>
            <ul className="nav mt-0 mt-sm-3 p-3 p-sm-0">
              <li><button aria-label="Close Menu" id="btn-mobile-close" onClick={this.toggleMobileNav}>
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button></li>
   
              <li className="mt-3 mt-sm-0"><Link cover bg="white" direction="right" className="nav-link" to="/#contact"><span className="link-circle">Contact</span></Link></li>

              {/* <li>
                <button className="nav-link m-0" onClick={this.toggleSubmenu}>
                  <span className="link-circle mr-1">Portfolio</span> 
                  <span id="submenu-icon">{this.state.submenuOpen ? '-' : '+'}</span>
                </button>
                <ul className={"submenu " + (this.state.submenuOpen ? 'open' : '')} >
                  <li>
                    <AniLink cover bg="white" direction="right" to="/portfolio-web/" className="nav-link" onClick={this.state.mobileNavOpen ? this.toggleMobileNav : ''}>Web Projects</AniLink>
                  </li>
                  <li><AniLink cover bg="white" direction="right" className="nav-link" to="/portfolio-gd/" onClick={this.state.mobileNavOpen ? this.toggleMobileNav : ''}>Graphic Design</AniLink></li>
                </ul>
              </li> */}
              <li>
                <AniLink cover bg="white" direction="right" to="/portfolio-web/" className="nav-link" ><span className="link-circle">Web Projects</span></AniLink>
              </li>
              <li>
                <AniLink cover bg="white" direction="right" className="nav-link" to="/portfolio-gd/" ><span className="link-circle">Graphic Design</span></AniLink>
              </li>

              <li><AniLink cover bg="white" direction="up" className="nav-link" to="/about/" onClick={this.state.mobileNavOpen ? this.toggleMobileNav : ''}><span className="link-circle">About</span></AniLink></li>
            </ul>
          </div>
        </header>
      </TransitionPortal>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
