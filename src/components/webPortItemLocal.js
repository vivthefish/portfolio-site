import React from "react"
// import Image from "./image"
import Fade from 'react-reveal/Fade';
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { Link } from "gatsby"
// import { TransitionPortal } from "gatsby-plugin-transition-link"

class WebPortItemLocal extends React.Component {

    // Render
    render() {
        const { project } = this.props;
        return (
            <Fade bottom duration={500} distance={'30px'}>
                <section id={project.name} className="port-item mb-5" >
                    <div className="flex-row">
                    <div className="flex-small port-img-col">
                        <div className="img-fill"></div>
                        {/* <Image filename={project.img} alt="screenshot" /> */}
                    </div>
                    <div className="flex-small port-info-col py-0 py-md-3 pl-5 pr-5 pl-md-4 pr-md-3">
                        <h3>{project.title}</h3>
                        <p>{project.blurb}</p>
                        <ul>
                            {
                                project.skills.map((skill) => <li>{skill}</li>)
                            }
                        </ul>
                        <div>

                        <AniLink cover bg="white" direction="right" className="cta-btn" to={project.link} >View Project</AniLink>
                        </div>
                    </div>
                    </div>
                </section>
            </Fade>
        )
    }

}

export default WebPortItemLocal