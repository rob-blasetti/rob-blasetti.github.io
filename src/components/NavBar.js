import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
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
          location.pathname === '/' ? scroll.scrollToTop() : window.location.href = "/";
        }}>Liquid Gold</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavCollapse} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {location.pathname === '/' ? (
              // We are on the home page
              <>
                <ScrollLink activeClass="active" className="nav-link" to="about-us" spy={true} smooth={true} duration={500}>Our Journey</ScrollLink>
                <NavDropdown title="Golden Content" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#courses">Guided Tour Course</NavDropdown.Item>
                  <NavDropdown.Item href="#videos">Videos</NavDropdown.Item>
                  <NavDropdown.Item as={RouterLink} to="/blog">Blog</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Join Us" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#newsletter">Newsletter</NavDropdown.Item>
                  <NavDropdown.Item href="#contact-us">Contact</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              // We are on a different page
              <>
                <RouterLink className="nav-link" to="/#about-us">Our Journey</RouterLink>
                <NavDropdown title="Golden Content" id="basic-nav-dropdown">
                  <NavDropdown.Item as={RouterLink} to="/#courses">Guided Tour Course</NavDropdown.Item>
                  <NavDropdown.Item as={RouterLink} to="/#videos">Videos</NavDropdown.Item>
                  <NavDropdown.Item as={RouterLink} to="/blog">Blog</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Join Us" id="basic-nav-dropdown">
                  <NavDropdown.Item as={RouterLink} to="/#newsletter">Newsletter</NavDropdown.Item>
                  <NavDropdown.Item as={RouterLink} to="/#contact-us">Contact</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
