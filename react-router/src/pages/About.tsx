import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-container">
            <h1><Link to="/contact">Go to contact</Link> </h1>
            <p>This is the About page.</p>
            <section>
                <h2>Our Mission</h2>
                <p>We are dedicated to providing excellent services.</p>
            </section>
            <section>
                <h2>Our Team</h2>
                <p>Meet our talented team of professionals.</p>
            </section>
        </div>
    );
}

export default About;