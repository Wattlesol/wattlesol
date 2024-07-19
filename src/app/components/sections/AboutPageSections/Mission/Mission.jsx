import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaceImage1 from '@/app/public/global/img/photo/Our-Mission.png';
import Image from 'next/image';
const Mission = () => {
  return (
    <section className="mil-deep-bg mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
      <Container>
        <Row>
          <Col lg={5} className="mil-mb-60">
            <div className="mil-circle-illustration">
              <div className="mil-circle-bg"></div>
              <div className="mil-image-frame">
                <Image src={FaceImage1} alt="img" />
              </div>
            </div>
          </Col>
          <Col lg={6} className="mil-mb-60">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              IT Enterprise
            </span>
            <h2 className="mil-mb-50">Our Mission</h2>

            <p className="mil-mb-50">
              At Wattle Sol, our mission is clear: to innovate, inspire, and
              empower through comprehensive solutions. We are committed to
              delivering measurable results and fostering long-term partnerships
              built on trust and mutual success. Join us in realizing your
              business potential with tailored strategies designed for optimal
              performance.{' '}
            </p>

            <ul className="mil-simple-list">
              <li>Accelerate innovation.</li>
              <li>With world class tech teams.</li>
              <li>Our all service offerings to enhance.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;
