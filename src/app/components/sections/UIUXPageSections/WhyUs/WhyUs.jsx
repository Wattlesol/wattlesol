import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TopExpertise from '@/app/public/global/img/icons/md/TopExpertise.svg';
import QualityManagement from '@/app/public/global/img/icons/md/QualityManagement.svg';
import UtmostFlexibility from '@/app/public/global/img/icons/md/UtmostFlexibility.svg';
import Productivity from '@/app/public/global/img/icons/md/Productivity.svg';
import Scalability from '@/app/public/global/img/icons/md/Scalability.svg';
import UserCentric from '@/app/public/global/img/icons/md/Client-Centric.svg';
import Experience from '@/app/public/global/img/icons/md/ProvenExpertise.svg';
import Collaboration from '@/app/public/global/img/icons/md/collaboration.svg';


import Image from 'next/image';
const WhyChooseUS = () => {
  return (
    <section className="mil-deep-bg mil-p-120-120">
      <Container>
        <h2 className="mil-mb-120">Why Choose <span className="mil-accent">Us</span></h2>

        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={UserCentric} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">User-Centric Approach</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                We put your users at the heart of our design process to create experiences that are intuitive, engaging, and effective.{' '}
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={Experience} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Experienced Designers</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                Our team comprises seasoned UI/UX designers with a proven track record of delivering high-quality digital products across various industries.
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={Collaboration} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Collaborative Process
              </h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                We work closely with you at every stage of the design process to ensure that our solutions align with your vision and business objectives
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={TopExpertise} width={64} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Commitment to Excellence</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                We are dedicated to delivering exceptional design solutions that exceed expectations and drive results.{' '}
              </p>
            </Col>
          </Row>
        </div>

        <div className="mil-divider"></div>
      </Container>
    </section>
  );
};

export default WhyChooseUS;
