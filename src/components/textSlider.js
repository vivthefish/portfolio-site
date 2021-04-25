import React from "react"
import { TimelineMax, Elastic } from "gsap"

class TextSlider extends React.Component {
    componentDidMount() {
        this.playSlider();
    }

    // Methods
    playSlider() {
        const slides = document.querySelectorAll('.slide');
        const list = document.querySelector('.slidesList');
        const lineHeight = slides[0].offsetHeight;
        const vsOpts = {
            duration: 7,
            lineHeight: lineHeight
        }
        const tl = new TimelineMax({
            delay: 2,
            paused: true,
            repeat: 1,
            repeatDelay: 1
        })
        slides.forEach((slide, i) => {
            tl.to(list, vsOpts.duration / slides.length, {
                y: (-1 * vsOpts.lineHeight * i ),
                ease: Elastic.easeOut.config(1, 0.5)
            })
        })
        tl.play()
    }

    // Render
    render() {
        return (
            <div id="slider">
                <ul className="slidesList">
                    <li className="slide">websites.</li>
                    <li className="slide">user experiences.</li>
                    <li className="slide">graphics.</li>
                    <li className="slide">muffins.</li>
                    <li className="slide">websites.</li>
                </ul>
            </div>
        )
    }

}

export default TextSlider