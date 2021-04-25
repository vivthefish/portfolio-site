import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const SportsMeet = () => (
  <Layout>
    <SEO title="SportsMeet App Design Project" />
    <div id="sportsmeet-page">
        <div className="topo-block"></div>
        <div className="container py-5">
            <div className="text-content">
                <Fade bottom distance={'50px'}>
                    <h1 className="secondary-h1 mt-0">SportsMeet App Design: <br/>Case Study</h1>
                    <p>In January 2021 I was hired to design a new sports social media app. I was tasked with creating the brand look and feel, including the logo, as well as the user interface of the mobile app. Here I am going to show how the project evolved step by step and give you an insight into how I work.</p>
                

                    <h2 className="h2 underline">Step 1: The Logo</h2>
                    <p className="mt-3">I decided to start with the logo to establish a brand direction with the client. I was briefed that the brand colours should be green, white and yellow and that the logo should be "sport neutral" to represent all sports. In addition, the logo should capture the overall description:</p>
                    <ul>
                        <li>Modern</li>
                        <li>Sleek</li>
                        <li>Minimal</li>
                    </ul>
                    <p>I tried to convey a sense of <em>Energy</em> and <em>Community</em> to communicate how SportsMeet brings people together to be active and play sports. I was also mindful of making the logo recognizeable even when very small and how the logo would look on light or dark backgrounds and in both black &amp; white and colour formats.</p>
                    <p>These are the initial logo sketches I did to get some ideas out:</p>
    
                    <StaticImage src="../images/sportsmeet/logo-doodle.jpg" alt="Logo sketches" />
                    
                    <p>From these sketches, I refined the colour choices and created vector versions of what I thought were the strongest sketches. This is the initial set of logo concepts I presented to the client:</p>
    
                    <StaticImage src="../images/sportsmeet/logos-v1p2.jpg" alt="Set of 12 sportsmeet logo concepts" />
                    
                    <p>Option #7 was chosen to develop further and this was the next set of concepts I presented. Here I also chose the Ubuntu font to pair with the logo since it has a modern and minimal feel while also being a free web-safe Google font.</p>
    
                    <StaticImage src="../images/sportsmeet/logos-v2.jpg" alt="Set of 3 sportsmeet logos with logotype" />
                    
                    <p>In the end, the client chose Option #1a, and were also happy with the colour and font choice. I created this final logo sheet to solidify the concept:</p>
                    
                    <StaticImage src="../images/sportsmeet/logo-sheet.jpg" alt="Logo Sheet" />
                    

                    <h2 className="h2 underline">Step 2: The Title Screen &amp; Homepage</h2>
                    <p className="mt-3">Now that we had established the basic brand outline, I began work on the app UI. I chose to start with the title screen and home screen of the app to develop the style with the client.</p>
                    <p>The client had already determined the information architecture of the app, so I only had to develop the look and feel with input on the user experience. This is the Title Screen and initial Home Screen design I presented:</p>
                    <div className="flex-row">
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/title-scrn.png" alt="Title Screen" />
                        </div>
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/homepage1.png" alt="Home Screen version 1" />
                        </div>
                    </div>
                    <p className="mt-3">The client liked the Title Screen, but was not completely happy with the Home Screen style. So I created two more versions of the Home Screen based on their feedback (options 2 and 3 respectively). I tried a more "flat-design" style and got rid of some of the rounded shapes, to give it a more modern look while still being unique.</p>
                    <div className="flex-row">
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/homepage2.png" alt="Home Screen version 2" />
                        </div>
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/homepage3.png" alt="Home Screen version 3" />
                        </div>
                    </div>
                    <p className="mt-3">The client liked both of these options, but decided to go with Option 3. Now the UI style is really taking shape!</p>
                    
                    <h2 className="h2 underline">Step 3: The Rest of the Key Screens</h2>
                    <p className="mt-3">I then went ahead and designed the rest of the key app screens based on the style that was established in Step 2. In order, here are the Message Center, Group Message, Direct Message, Profile, Event Creation Form screens, as well as a screen with additional form components.</p>
                    <div className="flex-row">
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/msg-home.png" alt="Messages Home Screen" />
                        </div>
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/mrg-group.png" alt="Group message screen" />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/msg-direct.png" alt="Direct message screen" />
                        </div>
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/profile.png" alt="Profile Screen" />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/new-event.png" alt="New Event Screen" />
                        </div>
                        <div className="flex-small">
                            <StaticImage src="../images/sportsmeet/form-components.png" alt="Other form components" />
                        </div>
                    </div>
                    <h2 className="h2 underline">The End</h2>
                    <p className="mt-3">With all the key screens designed and the client happy, I bundled up all the necessary assets for the developer. This was a fantastic project with a great client. I learned a lot in this process and I'm hoping to see SportsMeet in the app store soon!</p>
                </Fade>
            </div>
        
        </div>
    </div>
</Layout>
)

export default SportsMeet