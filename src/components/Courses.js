import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from './CourseCard';

import { COURSES } from '../constants';

const Courses = () => (
  <Container>
    <h2 className="text-center mb-5">Take the beginners course, a prelude to the Liquid Gold journey.</h2>
    <Row>
      {COURSES.map((course, index) => (
        <Col xs={12} lg={6} className="mb-4" key={index}>
          <CourseCard course={course} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Courses;
