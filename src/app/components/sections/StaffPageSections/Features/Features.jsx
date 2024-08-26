import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import weAre from '@/app/public/global/img/icons/weAre.svg';
import weBelieve from '@/app/public/global/img/icons/WeBelieve.svg';
import weSay from '@/app/public/global/img/icons/WeSayWe.svg';
import support from '@/app/public/global/img/icons/24.svg';
import multiSupport from '@/app/public/global/img/icons/multi-support.svg';
import integration from '@/app/public/global/img/icons/integration.svg';
import insights from '@/app/public/global/img/icons/insights.svg';




import Image from 'next/image';
const Features = () => {
  return (
    <section className="mil-light-bg mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: '25%' }}></div>
      <Container>

        <h2 className="mil-mb-120">
          Our Services
        </h2>
        <Row>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={weBelieve} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">IT Staff Augmentation</h4>
                <p className="mil-box-text">
                  Access elite software developers, system analysts, and project managers to elevate your tech initiatives.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={integration} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Engineering Talent</h4>
                <p className="mil-box-text">
                  Strengthen your projects with experts in design, development, and implementation.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={weSay} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Administrative Support</h4>
                <p className="mil-box-text">
                  Enhance your operations with seasoned administrative professionals.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={insights} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Marketing Experts</h4>
                <p className="mil-box-text">
                  Drive your marketing forward with specialists in SEO, digital marketing, and content creation.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={weAre} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Financial and HR Specialists</h4>
                <p className="mil-box-text">
                  Fortify your finance and HR departments with skilled accountants, compliance officers, and HR managers.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={support} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Customer Support Professionals</h4>
                <p className="mil-box-text">
                  Improve your customer experience with dedicated support agents trained in customer service excellence, technical support, and client relationship management.{' '}
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
