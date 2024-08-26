import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaceImage1 from '@/app/public/global/img/photo/marketing.png';
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
            <h2 className="mil-mb-50"> <span className="mil-accent">Wattle Sol:</span>  Your Partner in Sales and Marketing Success
            </h2>
            <p className="mil-mb-50">
              At Wattle Sol, we’re not just a service provider—we’re your dedicated partner in achieving sustainable growth with data-driven strategies. Our unique blend of innovation, expertise, and customer-centric solutions sets us apart in the industry. Let us help you transform your business and achieve unparalleled success.{' '}
            </p>
            <ul className="mil-simple-list">
              <li>Enhanced Customer Experience</li>
              <li>Boosted Efficiency</li>
              <li>Unmatched Flexibility</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Perks;
