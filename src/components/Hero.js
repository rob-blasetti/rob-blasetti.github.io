import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

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

export default Hero;
