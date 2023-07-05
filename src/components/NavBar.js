import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="md" className="navbar" expanded={expanded} onToggle={handleNavCollapse}>
      <Container fluid>
        <Nav.Link as={Link} to="home" smooth={true} duration={500} className="nav-link">
          <Navbar.Brand>Liquid Gold - Crypto News</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavCollapse} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
