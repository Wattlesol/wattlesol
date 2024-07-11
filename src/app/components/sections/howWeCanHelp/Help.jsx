import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MdIcon1 from '@/app/public/global/img/icons/md/1.svg';
import MdIcon2 from '@/app/public/global/img/icons/md/2.svg';
import MdIcon3 from '@/app/public/global/img/icons/md/3.svg';
import MdIcon4 from '@/app/public/global/img/icons/md/4.svg';
import MdIcon5 from '@/app/public/global/img/icons/md/5.svg';
import MdIcon6 from '@/app/public/global/img/icons/md/6.svg';
import Image from 'next/image';

const Help = () => {
  return (
    <>
      <section className="mil-services mil-p-120-90">
        <div
          className="mil-deco"
          style={{
            top: 0,
            right: 0,
          }}
        ></div>
        <Container>
          <h2 className="mil-mb-30">
            How We Can <span className="mil-accent">Help You</span>
          </h2>

          <Row>
            <Col lg={6} xl={6}>
              <h4 className="mil-mb-60 mil-mt-30">Development Services</h4>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <Image src={MdIcon1} alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">01</span> Dedicated Development
                    Teams
                  </h5>
                  <p>
                    Achieve more with Dedicated Development Teams. Drive
                    innovation forward with tailored expertise and seamless
                    integration.
                  </p>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <Image src={MdIcon2} alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">03</span> Q Dedicated
                    Development Individuals
                  </h5>
                  <p>
                    Partner with Dedicated Development Individuals for tailored
                    solutions. Expert guidance to maximize efficiency.
                  </p>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <Image src={MdIcon3} alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">05</span> Marketing and Sales
                    Team
                  </h5>
                  <p>
                    Drive revenue growth with our dynamic sales and marketing
                    team. Customized approaches for market differentiation.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} xl={6}>
              {/* <h4 className="mil-mb-60 mil-mt-30">IT Solutions</h4> */}
              <div
                className="mil-divider mil-divider-left mt-10"
                style={{
                  marginTop: '120.6px',
                }}
              ></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <Image src={MdIcon4} alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">02</span> Solution Architects
                  </h5>
                  <p>
                    Collaborate with Solution Architects for optimal strategies.
                    Transform challenges into opportunities for success.
                  </p>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <Image src={MdIcon5} alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">04</span> Customer Services
                  </h5>
                  <p>
                    Deliver exceptional service experiences. Solutions that
                    prioritize customer satisfaction, loyalty and reflect your
                    commitment to excellence.
                  </p>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <Image src={MdIcon6} alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">06</span> DevOps
                  </h5>
                  <p>
                    Enhance deployment speed with our efficient DevOps
                    strategies. Tailored approaches for rapid and reliable
                    releases.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Help;
