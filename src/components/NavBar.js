import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import MobileDropdownMenu from '../MobileDropdownMenu'; // make sure the path is correct

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="navbar" expanded={expanded} onToggle={handleNavCollapse}>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavCollapse} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500} className="nav-link">
              Home
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

export default NavBar;
