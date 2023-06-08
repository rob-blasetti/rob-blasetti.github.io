import React, { useEffect } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.less';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

// Navbar Component
const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="navbar-brand">Liquid Gold - Crypto News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/liquidgoldcrypto/">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://twitter.com/LiquidGold2022">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.tiktok.com/@liquidgold2022">
                <FontAwesomeIcon icon={faTiktok} /> TikTok
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/@liquidgoldcrypto">
                <FontAwesomeIcon icon={faYoutube} /> YouTube
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



// Carousel Component
const VideoCarousel = ({ videoIds = [] }) => {
  useEffect(() => {
    // Resize event listener
    const handleResize = () => {
      const aspectRatio = 9 / 16;
      const carousels = document.querySelectorAll('.carousel-container .carousel-embed-container');
      if (carousels) {
        carousels.forEach(carousel => {
          const width = carousel.clientWidth;
          carousel.style.height = `${width * aspectRatio}px`;
        });
      }
    };
    // Attach listener
    window.addEventListener('resize', handleResize);
    handleResize();  // Call initially to set height based on initial width

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);  // Empty dependencies ensures this runs once on mount and cleanup on unmount


  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {videoIds.map(videoId => (
          <div key={videoId} className="carousel-video-container">
            <div className="carousel-embed-container">
              <iframe
                className="carousel-iframe"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Courses Component
const Courses = () => {
  return (
    <Container className="courses-container mt-5">
      <h2 className="text-center mb-5">Our Courses</h2>
      <Row>
        <Col md={6} className="mb-4">
          <div className="course p-4">
            <h3 className="mb-3">Guided Tour Through Crypto Part 1</h3>
            <a
              href="https://qcc.rocks/guided-tour-through-crypto-order"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Learn More <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />
            </a>
          </div>
        </Col>
        <Col md={6}>
          <div className="course p-4">
            <h3 className="mb-3">Guided Tour Through Crypto Part 2</h3>
            <a
              href="https://qcc.rocks/guided-tour-through-crypto-order"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Learn More <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const App = () => {
  // Fetch the videos from the YouTube API
  const videoIds = ['O-Yz0kD4lek', 'xreDj3ylvWE', 'RG6cdVnqpO8']; // replace with your video IDs

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Container>
          <h1 className="text-center mb-4">Liquid Gold - Crypto News</h1>
          <p className="text-center mb-4">Welcome to Liquid Gold, your source for the latest news on cryptocurrencies. We're committed to providing you with the most relevant and up-to-date information in the crypto world.</p>
        </Container>
        <VideoCarousel videoIds={videoIds} />
        <Container className="text-center mt-4">
          <a
            className="App-link"
            href="https://www.youtube.com/@liquidgoldcrypto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our YouTube Channel
          </a>
        </Container>
        <Courses />
      </header>
    </div>
  );
}

export default App;
