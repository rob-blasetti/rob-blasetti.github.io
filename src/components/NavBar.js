import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const handleNavCollapse = () => setExpanded(false);

  return (
    <Navbar expand="md" className="navbar" expanded={expanded} onToggle={handleNavCollapse}>
      <Container fluid>
        <div className="navbar-brand nav-link" onClick={() => {
          if (location.pathname === '/') {
            scroll.scrollToTop();
          } else {
            window.location.href = "/";
          }
        }}>Liquid Gold</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavCollapse} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {location.pathname === '/' ? (
              // We are on the home page
              <>
                <ScrollLink activeClass="active" className="nav-link" to="about-us" spy={true} smooth={true} duration={500}>About</ScrollLink>
                <ScrollLink activeClass="active" className="nav-link" to="videos" spy={true} smooth={true} duration={500}>Videos</ScrollLink>
                <ScrollLink activeClass="active" className="nav-link" to="courses" spy={true} smooth={true} duration={500}>Courses</ScrollLink>
                <RouterLink className="nav-link" to="/blog">Blog</RouterLink>
                <ScrollLink activeClass="active" className="nav-link" to="contact-us" spy={true} smooth={true} duration={500}>Contact</ScrollLink>
              </>
            ) : (
              // We are on a different page
              <>
                <RouterLink className="nav-link" to="/#about-us">About</RouterLink>
                <RouterLink className="nav-link" to="/#videos">Videos</RouterLink>
                <RouterLink className="nav-link" to="/#courses">Courses</RouterLink>
                <RouterLink className="nav-link" to="/blog">Blog</RouterLink>
                <RouterLink className="nav-link" to="/#contact-us">Contact</RouterLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
