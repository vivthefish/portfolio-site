import React from "react"

class ContactForm extends React.Component {

    // Render
    render() {
        return (
            <form name="contact" method="POST" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex-row">
                    <div className="flex-large">
                        <label id="nameLabel" htmlFor="contactName">Your Name:</label>
                        <input id="contactName" type="text" name="contactName" required aria-labelledby="nameLabel" />
                    </div>
                    <div className="flex-large">
                        <label id="emailLabel" htmlFor="contactEmail">Your Email:</label>
                        <input id="contactEmail" type="email" name="contactEmail" placeholder="example@domain.com" required aria-labelledby="emailLabel" />
                    </div>
                </div>
                <label id="msgLabel" htmlFor="contactMessage">Message:</label>
                <textarea id="contactMessage" name="contactMessage" rows="5" required aria-labelledby="msgLabel"></textarea>
                <button type="submit" className="cta-btn cta-btn">Send</button>
            </form>
        )
    }

}

export default ContactForm