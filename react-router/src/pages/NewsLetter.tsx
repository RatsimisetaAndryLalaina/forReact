import { Form } from "react-router";

function NewsLetter() {
  return (
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Get the latest updates and news directly in your inbox.</p>
      <Form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </Form>
    </div>
  );
};

export default NewsLetter;