import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const About = () => (
  <Layout>
    <Seo title="About Vivian" />
    <div id="about-page">

    <div id="raptor-block" className="img-block">
    </div>
    
      <div className="container py-5">
        <div className="flex-row">
          <div className="flex-small">
            <Fade bottom distance={'20px'}>
              <StaticImage src="../images/cali-sm.png" alt="Vivian contemplating life the universe and everything." />
            </Fade>
          </div>
            <div className="flex-small text-content">
              <Fade bottom>
                <h1 className="secondary-h1 mt-0">About Me</h1>
              </Fade>
              <Fade bottom cascade delay={500}>
                <div>
                  <p>My name is Vivian, but you may know me around the web as VivtheFish. I'm from Barrie, Ontario and I have always loved art, design and technology. I enjoy finding creative and evidence-based solutions that deliver real results for my clients.</p>
                  <p>I also have a degree in Biology and I was a lab technician for 2 years before deciding to pursue Web Design. I still love science and often use the natural world for inspiration in my creative work. You can follow me on <a href="https://www.instagram.com/vivthefish/">Instagram</a> to see all my artwork.</p>
                  <p>When I am not drawing or coding, you'll probably find me hiking, disc golfing, knitting, or playing D&amp;D or board games with my friends.</p>
                  <p>Thank you for stopping by and please <Link to="/#contact">say hello!</Link></p>
                </div> 
              </Fade>
            </div>
        </div>
      </div>

        <div id="technologies">
          <div id="wood-block" className="img-block"></div>
          <div className="heading">
            <Fade bottom delay={1000}>
              <h1 className="secondary-h1 sh1-center">Technologies</h1> 
            </Fade>
            <Fade bottom delay={1500}>
              <p className="text-center">(Stuff I use to make the magic happen.)</p>
            </Fade>
          </div>
          <div className="container pb-5">
            <Slide bottom cascade delay={1700}>
              <div className="techs-box py-5">
                <div className="tech-item">
                  <StaticImage src="../images/technologies/photoshop.png" alt="Photoshop" />
                  <p>Photoshop</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/illustrator.png" alt="Illustrator" />
                  <p>Illustrator</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/xd.png" alt="Adobe XD" />
                  <p>Adobe XD</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/html.png" alt="HTML5" />
                  <p>HTML5</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/css.png" alt="CSS3" />
                  <p>CSS3</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/js.png" alt="Javascript ES6" />
                  <p>Javascript ES6</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/vue.png" alt="Vue.js" />
                  <p>Vue.js</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/react.png" alt="React.js" />
                  <p>React.js</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/node.png" alt="Node.js" />
                  <p>Node.js</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/php.png" alt="PHP" />
                  <p>PHP</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/jquery.png" alt="JQuery" />
                  <p>JQuery</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/mysql.png" alt="MySQL" />
                  <p>MySQL</p>
                </div>
                {/* <div className="tech-item">
                  <StaticImage src="../images/technologies/aspnet.png" alt="ASP.NET" />
                  <p>ASP.NET</p>
                </div> */}
                <div className="tech-item">
                  <StaticImage src="../images/technologies/mongodb.png" alt="Mongo DB" />
                  <p>Mongo DB</p>
                </div>
                <div className="tech-item">
                  <StaticImage src="../images/technologies/sass.png" alt="Sass" />
                  <p>Sass</p>
                </div>
              </div>
            </Slide>
          </div>
        </div>     
    
    </div>{/*#about-page */}

  </Layout>
)

export default About
