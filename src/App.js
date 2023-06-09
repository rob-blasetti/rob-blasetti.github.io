import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import { YOUTUBE_API_URL, CHANNEL_ID, API_KEY, SOCIAL_LINKS, COURSES } from './constants';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.less';

const settings = {
  dots: true,
  infinite: true,
  speed: 250,
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
        <Navbar.Brand className="navbar-brand">Liquid Gold - Crypto News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="news" smooth={true} duration={500} className="nav-link">News</Link>
            </li>
            <li className="nav-item">
              <Link to="videos" smooth={true} duration={500} className="nav-link">Videos</Link>
            </li>
            <li className="nav-item">
              <Link to="courses" smooth={true} duration={500} className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="about-us" smooth={true} duration={500} className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="contact-us" smooth={true} duration={500} className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// SocialLinks Component
const SocialLinks = () => {
  return (
    <Card className="social-links-card text-center mt-4">
      <Card.Header className="social-links-header">
        Follow us on social media!
      </Card.Header>
      <Card.Body>
        <div className="social-link-tile">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" /> Instagram
          </a>
        </div>
        <div className="social-link-tile">
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon" /> Twitter
          </a>
        </div>
        <div className="social-link-tile">
          <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" className="social-icon" /> TikTok
          </a>
        </div>
        <div className="social-link-tile">
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" className="social-icon" /> YouTube
          </a>
        </div>
      </Card.Body>
    </Card>
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
            <h3 className="mb-3">{COURSES[0].title}</h3>
            <a
              href={COURSES[0].link}
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
            <h3 className="mb-3">{COURSES[1].title}</h3>
            <a
              href={COURSES[1].link}
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
  const [videoIds, setVideoIds] = useState([]);

  // const videoIds = ['O-Yz0kD4lek', 'xreDj3ylvWE', 'RG6cdVnqpO8']; // replace with your video IDs

    useEffect(() => {
      const getVideos = async () => {
        const response = await axios.get(YOUTUBE_API_URL, {
          params: {
            part: 'snippet',
            channelId: CHANNEL_ID,
            maxResults: 5,
            order: 'date',
            type: 'video',
            key: API_KEY
          }
        });

        const ids = response.data.items.map(item => item.id.videoId);
        setVideoIds(ids);
      };

      getVideos();
    }, []);

  return (
    <div className="App" id="home">
      <NavBar />
      <header className="App-header section">
        <Container>
          <h1 className="text-center mb-4">Liquid Gold - Crypto News</h1>
          <p className="text-center mb-4">Welcome to Liquid Gold, your source for the latest news on cryptocurrencies. We're committed to providing you with the most relevant and up-to-date information in the crypto world.</p>
        </Container>
        <div id="social-links" className="section">
          <SocialLinks />
        </div>
        <div id="videos" className="section">
          <VideoCarousel videoIds={videoIds} />
          <Container className="text-center mt-4">
            <a
              className="youtube-link"
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit our YouTube Channel
            </a>
          </Container>
        </div>
        <div id="courses" className="section">
          <Courses />
        </div>
      </header>
    </div>
  );
}


export default App;
