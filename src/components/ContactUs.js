import { Container, Row, Col } from 'react-bootstrap';

const ContactUs = () => (
  <div id="contact-us">
    <Container>
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <p className="text-center mb-4">
            We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          </p>
          <p className="text-center">Email: <a href="mailto:info@liquidgold.com">info@liquidgoldcrypto.com.au</a></p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ContactUs;
