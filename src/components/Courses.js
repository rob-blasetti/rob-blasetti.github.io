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
    <div className="testimonial">
      <h2 className="text-center mb-5">Customer Stories: What our satisfied clients have to say</h2>
      <div className="testimonial-text">"Doing the Guided Tour Through Crypto with Robert was very valuable. I had previous exposure to crypto already, having purchased cryptocurrencies and listened to multiple podcasts as well as other sources. However, having the structured step by step tutorials from Robert brought a valuable framework and wealth of new information that helped me to better understand the crypto world and integrate my pre-existing knowledge into a more effective approach."</div>
      <div className="testimonial-author">- Mat Kingett</div>
    </div>
  </Container>
);

export default Courses;
