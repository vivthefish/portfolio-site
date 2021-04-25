import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from '../components/contactForm'
import TextSlider from "../components/textSlider"
import Molecule from '../components/molecule'

import Icon1 from "../images/mySite-icons-01.svg"
import Icon2 from "../images/mySite-icons-02.svg"
import Icon3 from "../images/mySite-icons-03.svg"

import Fade from 'react-reveal/Fade';

const IndexPage = () => (
  <Layout>
        <div id="index-page">
          <Seo title="Home" />

          {/*--- Header Section --- */}
          <section id="index-banner" className="vertical-center">
            <div className="container">
            <div className="topo-block"></div>
            <div className="molecule-container">
              <Molecule />
            
            </div>
            <div id="flowerBox"></div>

              
              <div className="flex-row m-0">
                <div className="flex-large p-0">
                  <div className="text">
                    <Fade left distance={'30px'}>
                      <p  className="lead m-0">This is</p>
                    </Fade>
                    <Fade right delay={500} distance={'50px'}>
                      <h1 >Vivian Harvey</h1>
                    </Fade>
                    <Fade left delay={1000} distance={'30px'}>
                      <div  className="secondary-h1">She makes good <TextSlider /></div>
                    </Fade>
                    <Fade bottom delay={1500} distance={'30px'}>
                      <a  href="#contact" className="cta-btn">Say Hello</a>
                    </Fade>
                  
                  </div>
                </div>
                <div className="flex-large p-0">
                  <div id="flower-block">
                    <StaticImage src="../images/leaves-bg.jpg" alt="" />
                  </div>
                  <div id="cali-img">
                    <StaticImage src="../images/cali-maybe.jpg" alt="Vivian chilling in Southern California." />
                  </div>
                </div>
              </div> {/*.flex-row */}

            </div>{/*.container */}
            <div className="img-block">
              <StaticImage src="../images/beach-long-trans.jpg" alt="" />
            </div>

          </section>{/*#index-banner */}

          {/*--- Recent Projects Section --- */} 
          <section id="recent">
            <div className="index-header pl-5">
              <div className="container">
              <Fade bottom distance={'30px'}>
                <h2 id="what-do-h" className="secondary-h1">Recent Projects</h2>
              </Fade>
              </div>
            </div>
            <div className="container">
                <div className="flex-row">
                  <div className="flex-large">
                    <Fade bottom cascade distance={'20px'} delay={300}>
                        <Link className="block" to="/sportsmeet/">
                          <div className="inner">
                            <h3>SportsMeet App Design</h3>
                            <span>View Project</span>
                          </div>
                        </Link>
                    </Fade>
                  </div>
                  <div className="flex-large">
                    <Fade bottom cascade distance={'20px'} delay={700}>
                      <Link className="block" to="/portfolio-web/#featured-project">
                        <div className="inner">
                          <h3>Forces Recruiting Website</h3>
                          <span>View Project</span>
                        </div>
                      </Link>
                    </Fade>

                  </div>
                  <div className="flex-large">
                    <Fade bottom cascade distance={'20px'} delay={1100}>
                        <Link className="block" to="/portfolio-web/#1">
                          <div className="inner">
                            <h3>Wasabi Match</h3>
                            <span>View Project</span>
                          </div>
                        </Link>
                    </Fade>
                  </div>
                </div>
            </div>
          </section>{/*#recent-projects */}

          {/*--- What I do Section --- */} 
          <section id="what-do">
            <div className="topo-block"></div>
            <div className="index-header">
              <div className="container">
              <Fade bottom distance={'30px'}>
                <h2 className="secondary-h1 sh1-center">What I Do</h2>
              </Fade>
              </div>
            </div>
            <div className="container">
                <div className="flex-row">
                  <div className="flex-large">
                    <Fade bottom cascade distance={'20px'} delay={300}>
                      <div className="block">
                        <img src={Icon2} alt="UI/UX Design Icon" />
                        <h3 className="">UI/UX Design</h3>
                        <p>I can help you design a seamless, positive experience for your users that will keep them coming back over and over.</p>
                      </div>
                    </Fade>
                  </div>
                  <div className="flex-large">
                    <Fade bottom cascade distance={'20px'} delay={700}>
                      <div className="block">
                        <img src={Icon1} alt="Web Design Icon" />
                        <h3 className="">Web Design/Development</h3>
                        <p>So many websites out there look the same, but your company is unique. Let's make you a website that stands out!</p>
                      </div>
                    </Fade>
                  </div>
                  <div className="flex-large">
                    <Fade bottom cascade distance={'20px'} delay={1100}>
                      <div className="block">
                        <img src={Icon3} alt="Graphic Design Icon" />
                        <h3 className="">Graphic Design</h3>
                        <p>Whether it's a logo, photo editing or just making some cool eye-catching graphics, I have the skills that pay the bills.</p>
                      </div>
                    </Fade>
                  </div>
                </div>
            </div>
          </section>{/*--- #what-do ---*/}

          {/*--- Contact Section --- */} 
            <section id="contact" className="vertical-center">
              <div id="wood-block">
              </div>
              <Fade bottom distance={'50px'}>
                <div className="wrapper">
                  <div className="container">
                    <h2 className="secondary-h1 sh1-center mt-0">Contact Me</h2>
                    <p>Think we'd make a great team? Send me a message and let's talk!</p>

                    <ContactForm />

                  </div>
                </div>
              </Fade>
            </section>{/*#contact */}

        </div>
      </Layout>
)

export default IndexPage
