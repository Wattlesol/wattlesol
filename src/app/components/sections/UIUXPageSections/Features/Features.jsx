import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UX from '@/app/public/global/img/icons/ux.svg';
import UserSearch from '@/app/public/global/img/icons/user-research.svg';
import Prototype from '@/app/public/global/img/icons/wire-framing.svg';
import UI from '@/app/public/global/img/icons/ui.svg';
import Usability from '@/app/public/global/img/icons/useability.svg';
import Responsive from '@/app/public/global/img/icons/responsive.svg';


import Image from 'next/image';
const Features = () => {
  return (
    <section className="mil-light-bg mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: '25%' }}></div>
      <Container>

        <h2 className="mil-mb-120">
          Services We <span className="mil-accent">Offer</span>
        </h2>
        <Row>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={UserSearch} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">User Research and Analysis</h4>
                <p className="mil-box-text">
                  We conduct in-depth user research to understand your target audience, their needs, and behaviors. This allows us to create data-driven designs that resonate with your users.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={Prototype} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Wireframing and Prototyping
                </h4>
                <p className="mil-box-text">
                  Our team creates detailed wireframes and interactive prototypes to visualize the structure and flow of your digital product, ensuring a user-friendly experience from the ground up.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={UI} width={32} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">UI Design</h4>
                <p className="mil-box-text">
                  We focus on crafting aesthetically pleasing interfaces that are consistent, intuitive, and aligned with your brand identity. Our UI designs are optimized for both usability and visual appeal.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={UX} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">UX Strategy and Design</h4>
                <p className="mil-box-text">
                  Our UX design services are centered around creating seamless and intuitive experiences that guide users through your product with ease, enhancing user satisfaction and retention.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={Usability} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Usability Testing</h4>
                <p className="mil-box-text">
                  We conduct thorough usability testing to identify and eliminate any user pain points, ensuring that your digital product is easy to use and meets user expectations{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={Responsive} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Responsive Design</h4>
                <p className="mil-box-text">
                  We design for all devices and screen sizes, ensuring your digital product is accessible and delivers a great user experience on desktops, tablets, and mobile devices.{' '}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
