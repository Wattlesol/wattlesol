import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CallToSection = () => {
  return (
    <section className="mil-p-120-60">
      <Container>
        <Row className="align-items-center">
          <Col lg={12} xl={6}>
            <h4 className="mil-mb-60">
              Redefine Your Team with Expert Staff Augmentation Solutions
              Find the <span className="mil-accent">Perfect Talent</span>  for Your Business Today!
            </h4>
          </Col>
          <Col lg={12} xl={6}>
            <div className="mil-adaptive-right">
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ02e9dd0BtTOmft6sGk2qDolJA6-KZkxLAMrsDdagnhwiZhzrYr4A3XDACnNPRzjSIzJUjv3g7l" target='_blank' rel="noopener noreferrer"
                className="mil-button mil-border mil-mr-15 mil-mb-30"
              >
                <span>Book an Appointment</span>
              </Link>
              {/* <a href="#." className="mil-button-with-label mil-mb-60">
                                <div className="mil-button mil-border mil-icon-button"><span><i className="fas fa-play"></i></span></div><span className="mil-dark">Watch Video</span>
                            </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToSection;
