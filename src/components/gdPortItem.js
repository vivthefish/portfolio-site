import React from "react"
// import { StaticImage } from "gatsby-plugin-image"

class GDPortItem extends React.Component {

    // Render
    render() {
        const { project } = this.props;
        return (
            <div className="port-item">
                {/* <StaticImage src={ project.img } alt={project.title} /> */}
            </div>
        )
    }

}

export default GDPortItem