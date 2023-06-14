import { Button, Card } from 'react-bootstrap';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default CourseCard;
