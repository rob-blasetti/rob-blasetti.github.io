import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

import { YOUTUBE_API_URL, CHANNEL_ID, API_KEY, SOCIAL_LINKS, COURSES } from './constants';
import MobileDropdownMenu from './MobileDropdownMenu';

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

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="navbar" expanded={expanded} onToggle={handleNavCollapse}>
      <Container fluid>
        <Navbar.Brand className="navbar-brand">
          <img
            src={process.env.PUBLIC_URL + '/images/LG-logo.png'}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Liquid Gold - Crypto News"
          />
          Liquid Gold - Crypto News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavCollapse} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500} className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="news" smooth={true} duration={500} className="nav-link">
              News
            </Nav.Link>
            <Nav.Link as={Link} to="videos" smooth={true} duration={500} className="nav-link">
              Videos
            </Nav.Link>
            <Nav.Link as={Link} to="courses" smooth={true} duration={500} className="nav-link">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="about-us" smooth={true} duration={500} className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="contact-us" smooth={true} duration={500} className="nav-link">
              Contact Us
            </Nav.Link>
          </Nav>
          <MobileDropdownMenu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Liquid Gold</h1>
        <p className="hero-description">Your ultimate source for cryptocurrency news</p>
        <Button variant="primary" as={Link} to="courses" smooth={true} duration={500} className="hero-button">
          Check Out Our Courses
        </Button>
      </div>
    </div>
  );
};



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
  );
};

const VideoCarousel = ({ videoIds = [] }) => {
  useEffect(() => {
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

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

const CourseCard = ({ course }) => (
  <Card className="course-card">
    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/Guided-Tour-Through-Crypto-Online-Program.jpeg'} className="course-image" />
    <Card.Body>
      <Card.Title>{course.title}</Card.Title>
      <Card.Text>{course.description}</Card.Text>
      <Button variant="primary" href={course.link} target="_blank" rel="noopener noreferrer">
        Learn More <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />
      </Button>
    </Card.Body>
  </Card>
);

const Courses = () => (
  <Container className="courses-container mt-5">
    <h2 className="text-center mb-5">Our Courses</h2>
    <Row>
      {COURSES.map((course, index) => (
        <Col md={6} className="mb-4" key={index}>
          <CourseCard course={course} />
        </Col>
      ))}
    </Row>
  </Container>
);

const AboutUs = () => (
  <div id="about-us" className="section">
    <Container>
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-center mb-4">
        At Liquid Gold, we aim to be your ultimate source for cryptocurrency news.
        Our dedicated team is committed to providing you with the most relevant and up-to-date information in the crypto world.
        We believe that with the right information and tools, anyone can be successful in the cryptocurrency market.
      </p>
    </Container>
  </div>
);

const ContactUs = () => (
  <div id="contact-us" className="section">
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

let cache = {};

const App = () => {
  const [videoIds, setVideoIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let response;
        if (cache[YOUTUBE_API_URL]) {
          response = cache[YOUTUBE_API_URL];
        } else {
          response = await axios.get(YOUTUBE_API_URL, {
            params: {
              part: 'snippet',
              channelId: CHANNEL_ID,
              maxResults: 5,
              order: 'date',
              type: 'video',
              key: API_KEY
            }
          });
          cache[YOUTUBE_API_URL] = response;
        }

        const ids = response.data.items.map(item => item.id.videoId);
        setVideoIds(ids);
      } catch (err) {
        setError('Something went wrong while loading videos. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getVideos();
  }, []);

  return (
    <div className="App" id="home">
      <NavBar />
      <Hero />
      <header className="App-header section">
        <Container>
          <h1 className="text-center mb-4">Liquid Gold - Crypto News</h1>
          <p className="text-center mb-4">Welcome to Liquid Gold, your source for the latest news on cryptocurrencies. We're committed to providing you with the most relevant and up-to-date information in the crypto world.</p>
        </Container>
        <div id="videos" className="section">
          {error ? <p>{error}</p> : isLoading ? <p>Loading...</p> : <VideoCarousel videoIds={videoIds} />}
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
        <div id="social-links" className="section">
          <SocialLinks />
        </div>
        <div id="courses" className="section">
          <Courses />
        </div>
        <div id="about-us" className="section">
          <AboutUs />
        </div>
        <div id="contact-us" className="section">
          <ContactUs />
        </div>
      </header>
    </div>
  );
};

export default App;
