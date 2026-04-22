import React from 'react';
import { Form } from 'react-router-dom';

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <Form method='post'>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                />
                <input type="submit" value="Submit" />
            </Form>
        </div>
    );
};

export default Contact;