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
              Get to Know <span className="mil-accent"> Wattle Sol</span>,
              Pioneering Technology Solutions to Propel Your Business Forward
              with Innovation and Determination.{' '}
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToSection;
