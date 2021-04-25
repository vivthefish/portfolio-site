import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
// import GDPortItem from "../components/gdPortItem"

import Fade from 'react-reveal/Fade';

class PortfolioGD extends React.Component {

  // State
  state = {
    gdProjects: [
      {
        "img": "../images/portfolio-gd/wolf-green-01.jpg",
        "title": "Geometric Wolf Art",
        "blurb": ""
      },
      {
        "img": "../images/portfolio-gd/spicemustflow-01.jpg",
        "title": "The spice must flow from Dune",
        "blurb": ""
      },
      {
        "img": "../images/portfolio-gd/heart.jpg",
        "title": "Heart art",
        "blurb": ""
      },
      {
        "img": "../images/portfolio-gd/georgianbay.jpg",
        "title": "Georgian Bay vector art",
        "blurb": ""
      },
      {
        "img": "../images/portfolio-gd/valleyshirt.jpg",
        "title": "Snow Valley Staff T-Shirt 2018",
        "blurb": "This is a simple t-shirt I designed for Snow Valley Ski Resort in Barrie as a giveaway for all the staff in 2018."
      },
      {
        "img": "../images/portfolio-gd/logo-03.png",
        "title": "5th Line Design Company Logo design",
        "blurb": ""
      },
      {
        "img": "../images/portfolio-gd/logo-06.png",
        "title": "5th Line Design Company Logo design stamp",
        "blurb": ""
      },
      {
        "img": "../images/portfolio-gd/BeetsBears.jpg",
        "title": "Beets, Bears, Battlestar Gallactica poster from the Office",
        "blurb": ""
      },
      {
        "img": "../images/portfolio-gd/blue-myself.jpg",
        "title": "I'm Afraid I Just Blue Myself poster from Arrested Development",
        "blurb": ""
      },
      // {
      //   "img": "../images/portfolio-gd/boldness-b.jpg",
      //   "title": "Boldness Be My Friend poster - William Shakespeare quote",
      //   "blurb": ""
      // },
      {
        "img": "../images/portfolio-gd/burger.jpg",
        "title": "That is a Tasty Burger poster from Pulp Fiction",
        "blurb": ""
      },
      {
        "img": "../images/portfolio-gd/chilis.jpg",
        "title": "I Feel God in this Chili's Tonight poster from the Office",
        "blurb": ""
      },
    ]
  }

  // Render
  render() {
    return (
      <Layout>
        <Seo title="Graphic Design | Portfolio" />
        <div id="portfolio-gd-page">
    
          <div className="container py-5">
            <div className="text-content pr-5">
              <Fade bottom>
                <h1 className="secondary-h1">Graphic Design</h1>
              </Fade>
              <Fade bottom delay={500}>
                <p>These are a few of my graphic design projects. Some of them were for clients, and some were just for fun.</p>
              </Fade>
            </div>
    
            <Fade bottom delay={1000} distance={'50px'}>
              <div id="photos">
              <div id="trans-div"></div>
              {/* {
                this.state.gdProjects.map((project, index) => <GDPortItem key={index} project={project} /> )
              } */}
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/wolf-green-01.jpg" alt="Geometric Wolf Art" />
                </div>
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/spicemustflow-01.jpg" alt="The spice must flow from Dune" />
                </div>
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/heart.jpg" alt="Heart Art" />
                </div>
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/georgianbay.jpg" alt="Georgian Bay vector art" />
                </div>
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/valleyshirt.jpg" alt="Snow Valley Staff T-Shirt 2018" />
                </div>
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/logo-03.png" alt="5th Line Design Company Logo design" />
                </div>
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/logo-06.png" alt="5th Line Design Company Logo stamp" />
                </div>
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/blue-myself.jpg" alt="I'm Afraid I Just Blue Myself poster from Arrested Development" />
                </div>
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/burger.jpg" alt="That is a Tasty Burger poster from Pulp Fiction" />
                </div>
                <div className="port-item">
                    <StaticImage src="../images/portfolio-gd/chilis.jpg" alt="I Feel God in this Chili's Tonight poster from the Office" />
                </div>


              </div>
            </Fade>
    
          </div>
        
        </div>{/*#portfolio-web-page */}
    
      </Layout>
    )
  }
}

export default PortfolioGD
