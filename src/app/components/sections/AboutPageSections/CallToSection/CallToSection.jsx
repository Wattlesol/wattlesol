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
                href="/contact"
                className="mil-button mil-border mil-mr-15 mil-mb-30"
              >
                <span>Talk To an Expert</span>
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
