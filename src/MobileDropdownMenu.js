import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';

const MobileDropdownMenu = () => {
  return (
    <NavDropdown
      title={<span className="navbar-toggler-icon"></span>}
      id="basic-nav-dropdown"
      className="d-lg-none"
    >
      <NavDropdown.Item as={Link} to="home" smooth={true} duration={500} className="nav-link">
        Home
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="news" smooth={true} duration={500} className="nav-link">
        News
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="videos" smooth={true} duration={500} className="nav-link">
        Videos
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="courses" smooth={true} duration={500} className="nav-link">
        Courses
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="about-us" smooth={true} duration={500} className="nav-link">
        About Us
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="contact-us" smooth={true} duration={500} className="nav-link">
        Contact Us
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default MobileDropdownMenu;
