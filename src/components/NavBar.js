import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const location = useLocation();

  const handleNavigation = (path, hash) => {
    if (location.pathname !== path) {
      window.location.href = path + hash;
    } else {
      window.location.hash = hash;
    }
  };
  console.log(location);

  return (
    <Navbar expand="md" className="navbar">
      <Container fluid>
        <div className="navbar-brand nav-link" onClick={() => {
          location.pathname === '/' ? scroll.scrollToTop() : window.location.href = "/";
        }}>Liquid Gold</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <div className="nav-link" onClick={() => handleNavigation('/', '#about-us')}>About Us</div>
            <div className="nav-link" onClick={() => handleNavigation('/', '#consultancy')}>Consultancy</div>
            
            <NavDropdown title="Education" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => handleNavigation('/', '#videos')}>Videos</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/', '#courses')}>Guided Tour Course</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Join Us" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleNavigation('/', '#newsletter')}>Newsletter</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigation('/', '#contact-us')}>Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
