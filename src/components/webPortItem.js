import React from "react"
// import Image from "../components/image"
import Fade from 'react-reveal/Fade';

class WebPortItem extends React.Component {

    // Render
    render() {
        const { project } = this.props;
        return (
            <Fade bottom duration={500} distance={'30px'}>
                <section id={project.name} className="port-item mb-5" >
                    <div className="flex-row">
                    <div className="flex-small port-img-col" >
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
                        <a className="cta-btn" href={project.link}>Visit Site</a>
                        </div>
                    </div>
                    </div>
                </section>
            </Fade>
        )
    }

}

export default WebPortItem