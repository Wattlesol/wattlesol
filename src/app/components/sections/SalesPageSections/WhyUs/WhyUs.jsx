import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Support from '@/app/public/global/img/icons/24.svg';
import ProvenExpertise from '@/app/public/global/img/icons/md/ProvenExpertise.svg';
import TailoredSolution from '@/app/public/global/img/icons/md/TailoredSolutions.svg';
import Innovation from '@/app/public/global/img/icons/md/Innovation.svg';


import Image from 'next/image';
const WhyChooseUs = () => {
  return (
    <section className="mil-deep-bg mil-p-120-120">
      <Container>
        <h2 className="mil-mb-120">Why Choose Us?</h2>

        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={ProvenExpertise} width={35} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Proven Results</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                Unlike other agencies, we leverage our proprietary analytics platform to deliver insights that drive 25% higher conversion rates for our clients.{' '}
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={TailoredSolution} width={35} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Customized Strategies</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                We don’t believe in one-size-fits-all. Our team develops tailored strategies that align with your unique business goals and market conditions.
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={Support} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Dedicated Support
              </h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                We’re not just a service provider; we’re your dedicated partner. Our team is available 24/7 to support your needs and ensure your success.
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={Innovation} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Innovative Approach</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                Our dynamic approach allows us to pivot strategies based on real-time market data, helping you capitalize on emerging trends and opportunities.
                {' '}
              </p>
            </Col>
          </Row>
        </div>

        <div className="mil-divider"></div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
