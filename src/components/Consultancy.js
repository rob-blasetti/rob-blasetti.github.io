import React from 'react';
import { Container } from 'react-bootstrap';

const Consultancy = () => (
  <div id="consultancy" className="consultancy-section">
    <Container>
        <h1>Your Partner In Consulting</h1>
        <div className="intro-section">
            <p>As the cryptocurrency realm evolves, navigating its intricacies demands expertise and foresight. We're here to provide that guidance, ensuring your assets are managed with unparalleled precision and protection.</p>
        </div>

        <div className="content-wrapper">
            <div className="services-section">
                <h3>Core Services</h3>
                <ul>
                    <li><strong>Transaction Analysis:</strong> Comprehensive evaluation of your crypto transactions with potential for fund recovery.</li>
                    <li><strong>Security Hardening:</strong> Fortify your crypto assets against vulnerabilities and potential threats.</li>
                    <li><strong>Training and Education:</strong> Equip yourself with the knowledge needed to confidently navigate the cryptocurrency landscape.</li>
                    <li><strong>And More:</strong> Our suite of services is ever-evolving to meet the demands of the rapidly changing crypto world.</li>
                </ul>
            </div>
            <div className="screenshot-section">
                <img src="/images/LG-consulting.png" alt="Liquid Gold Intro Thumbnail" />
            </div>

        </div>

        <div className="contact-section">
            <p>Engage with us and take the first step toward mastering the realm of digital assets. Every collaboration is underpinned by our commitment to clarity, transparency, and the highest standards of professionalism.</p>
            <p>Liquid Gold Consulting isn't just a service; it's a partnership dedicated to empowering you in the world of digital currencies. Join us, and let's shape your crypto journey together.</p>
            <p>For inquiries, reach out at: <a href="mailto:info@liquidgoldcrypto.com.au">info@liquidgoldcrypto.com.au</a></p>
        </div>
    </Container>
  </div>
);

export default Consultancy;
