import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const NewsletterSignup = () => {
    return (
        <Container id="newsletter-signup" className="newsletter-signup-section">
            <Form action="https://liquidgoldcrypto.us11.list-manage.com/subscribe/post?u=ef21ffacffc296d3510cc1e0e&amp;id=21eefd3881&amp;f_id=005f9fe0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                <h2>Join the Liquid Gold Community!</h2>
                <p>Stay ahead of the curve with our expert crypto insights, delivered directly to your inbox. Sign up for the Liquid Gold Newsletter today and discover the profitable opportunities you've been missing.</p>
                <p className="required-label"><span className="asterisk">*</span> indicates required</p>
                <Form.Group className="mb-3 form-line">
                    <Form.Label className="form-label">Email Address <span className="asterisk">*</span></Form.Label>
                    <Form.Control type="email" name="EMAIL" required />
                </Form.Group>
                <Form.Group className="mb-3 form-line">
                    <Form.Label className="form-label">First Name <span className="asterisk">*</span></Form.Label>
                    <Form.Control type="text" name="FNAME" required />
                </Form.Group>
                <Form.Group style={{display: 'none'}} aria-hidden="true">
                    <Form.Control type="text" name="b_ef21ffacffc296d3510cc1e0e_21eefd3881" tabIndex="-1" />
                </Form.Group>
                <Button className="newsletter-submit-buttom" type="submit" id="mc-embedded-subscribe" value="Subscribe">Subscribe</Button>
            </Form>
        </Container>
    );
}

export default NewsletterSignup;
