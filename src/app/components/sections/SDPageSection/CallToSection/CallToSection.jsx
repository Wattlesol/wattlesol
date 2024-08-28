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
              Transform Your Business Today With Innovative Software Solutions! <span className="mil-accent">Contact Us Now </span> To Get Started On Your Next Big Project.
            </h4>
          </Col>
          <Col lg={12} xl={6}>
            <div className="mil-adaptive-right">
              <Link
                href="/contact-us"
                className="mil-button mil-border mil-mr-15 mil-mb-30"
              >
                <span>Talk To an Expert</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToSection;
