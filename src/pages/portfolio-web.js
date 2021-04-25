import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import WebPortItem from "../components/webPortItem"
import WebPortItemLocal from "../components/webPortItemLocal"

import Fade from 'react-reveal/Fade';

class PortfolioWeb extends React.Component {
  // test

  // State
  state = {
    localWebProjects: [
      {
        "name": "sportsmeet",
        "img": "portfolio-web/sportsmeet.jpg",
        "imgPath": "../images/portfolio-web/sportsmeet.jpg",
        "title": "SportsMeet App Design",
        "blurb": "This is a recent client project for a sports social media app. I was hired to develop the brand look and feel as well as the UI/UX design.",
        "skills": [
          "Brand Development",
          "User Experience Design",
          "UI Design",
          "Graphic Design"
        ],
        "link": "/sportsmeet"
      },
    ],
    webProjects: [
      {
        "id": "1",
        "name": "wasabi",
        "img": "portfolio-web/wasabi.JPG",
        "title": "Wasabi Match",
        "blurb": "This is a little matching game I made for the purpose of practicing Vue.js. I designed and created all the assets as well. Try it and see what your high score is!",
        "skills": [
          "Vue.js",
          "Javascript ES6",
          "CSS Animation",
          "Graphic Design"
        ],
        "link": "https://vivthefish.github.io/match-game/"
      },
      // {
      //   "img": "portfolio-web/email.JPG",
      //   "title": "React Email Client",
      //   "blurb": "This is a dummy email client I built to practice React. It uses the email layout from PureCSS, and has sending, recieving and deleting email functionality. It also uses an API to simulate \"receiving\" new emails.",
      //   "skills": [
      //     "React.js",
      //     "Javascript ES6",
      //     "API Integration",
      //     "CSS3"
      //   ],
      //   "link": "https://vivthefish.github.io/email-react/"
      // },
      {
        "id": "2",
        "name": "ordinary",
        "img": "portfolio-web/ordinary.JPG",
        "title": "The Ordinary Homepage",
        "blurb": "A simple example homepage for a skincare company. This was designed to follow the existing company brand guidelines as well as Web Accessibility standards.",
        "skills": [
          "UI Kit CSS Framework",
          "UI Design",
          "Web Accessibility"
        ],
        "link": "https://vivthefish.github.io/WebAccessibility-A3/"
      },
      {
        "id": "3",
        "name": "lightness",
        "img": "portfolio-web/light.JPG",
        "title": "The Unbearable Lightness of Being",
        "blurb": "This is a page I made for a user interface design assignment. The idea was to create a mock landing page based on one of our favourite books, and incorporate some interesting typography elements.",
        "skills": [
          "Bootstrap",
          "Javascript ES6",
          "CSS",
          "UI Design"
        ],
        "link": "https://vivthefish.github.io/WebUI-A2-Lightness/"
      },
      // {
      //   "img": "portfolio-web/doglog.JPG",
      //   "title": "Dog Log Tracker",
      //   "blurb": "This is a small site built with PHP that features basic create, read, update & delete functionality with user authentication.",
      //   "skills": [
      //     "PHP",
      //     "SQL",
      //     "UI Design"
      //   ],
      //   "link": "http://aws.computerstudi.es/~gcc200385083/Assignment1/index.php"
      // },
      {
        "id": "4",
        "name": "chuck",
        "img": "portfolio-web/chuck.JPG",
        "title": "Chuck Norris Action Jeans",
        "blurb": "This is the very first complete website I ever built! The assignment was to create a site based on a product that existed before the internet. I did a little research and found these amazing jeans which were a real thing! I hope you enjoy it as much as I enjoyed making it. :)",
        "skills": [
          "HTML",
          "CSS",
          "Javascript",
          "UI Design"
        ],
        "link": "https://vivthefish.github.io/chuck-norris/index.html"
      },
    ]
  }

  // Render
  render() {
    return (
      <Layout>
        <Seo title="Web Projects | Portfolio" />
        <div id="portfolio-web-page">
    
          <div className="container py-5">
            <Fade bottom>
              <h1 className="secondary-h1">Web Projects</h1>
            </Fade>
    
            <Fade bottom delay={500} distance={'50px'}>
              <section id="featured-project" className="featured my-5">
                  <h2 className="alt-heading m-0">&middot;Featured&middot;</h2> 
                  <StaticImage src="../images/portfolio-web/caf-screen2.jpg" alt="Screenshot of the CAF site homepage" />
                <div className="flex-row port-info-col pl-md-5">
                    <div className="flex-large pb-3 px-5 px-md-3">
                      <h3>Canadian Armed Forces Recruiting Website</h3>
                      <p>I was very lucky to be part of the development team tasked with updating and modernizing the recruitment website.</p>
                      <a className="cta-btn" href="https://www.forces.ca" title="Visit the Canadian Armed Forces Recruiting Website">Visit Site</a>
                    </div>
                  <div className="flex-large">
                    <div className="contribution">
                        <h4 className="mt-0">Work Contributed</h4>
                        <ul>
                          <li>Design System Development</li>
                          <li>User Experience Design</li>
                          <li>Front-End &amp; Javascript Development</li>
                          <li>Cross-browser &amp; Responsive Design</li>
                          <li>Accessibility Compliance</li>
                          <li>Testing &amp; Bug Fixes</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </section>
            </Fade>
    
                {
                  this.state.localWebProjects.map((project, index) => <WebPortItemLocal key={index} project={project} /> )
                }
                {
                  this.state.webProjects.map((project, index) => <WebPortItem key={index} project={project} /> )
                }
    
          </div>
        
        </div>{/*#portfolio-web-page */}
    
      </Layout>
    )
  }
}

export default PortfolioWeb
