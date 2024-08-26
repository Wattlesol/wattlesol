import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaceImage1 from '@/app/public/global/img/photo/staff.png';
import Image from 'next/image';
const Perks = () => {
  return (
    <section className="mil-bg mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: '15%' }}></div>
      <Container>
        <Row>
          <Col lg={5} className="mil-mb-60 md:me-0 me-5">
            <div className="mil-circle-illustration">
              <div className="mil-circle-bg"></div>
              <div className="mil-image-frame">
                <Image src={FaceImage1} alt="img" />
              </div>
            </div>
          </Col>

          <Col lg={6} className="mil-mb-60 sm:mt-1 mt-5  ">
            <h2 className="mil-mb-50">Your <span className="mil-accent">Ultimate Solution</span> for Staff Augmentation
            </h2>

            <p className="mil-mb-50">
              At Wattle Sol, we are dedicated to delivering superior staff augmentation services that enhance your team's capabilities and support your business goals. With our expertise, you can address skill gaps, scale your operations, and achieve operational excellence with ease.{' '}
            </p>

            <ul className="mil-simple-list">
              <li>Global Reach</li>
              <li>Cost-Effective Staffing</li>
              <li>Diverse Talent Pool</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Perks;
