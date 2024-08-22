import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaceImage1 from '@/app/public/global/img/photo/Our-Mission.png';
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
            <h2 className="mil-mb-50">The Perks of Our Solution</h2>

            <p className="mil-mb-50">
              In today's fast-paced digital age, providing exceptional customer service is more crucial than ever. AI-powered contact centers offer a transformative solution that can revolutionize your business operations. By leveraging advanced technologies, these centers enhance customer satisfaction, boost efficiency, and provide unmatched flexibility, ultimately driving your business success. For instance, a recent study found that AI-powered contact centers reduced average wait times by 50% while increasing first-call resolution rates by 20%. This demonstrates the significant impact these centers can have on improving the overall customer experience..{' '}
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
