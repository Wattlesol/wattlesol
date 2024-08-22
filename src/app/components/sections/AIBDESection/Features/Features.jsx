import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import weAre from '@/app/public/global/img/icons/weAre.svg';
import weBelive from '@/app/public/global/img/icons/WeBelieve.svg';
import weDeep from '@/app/public/global/img/icons/WeDeepDive.svg';
import weSay from '@/app/public/global/img/icons/WeSayWe.svg';
import weTake from '@/app/public/global/img/icons/WeTake.svg';
import support from '@/app/public/global/img/icons/24.svg';
import multiSupport from '@/app/public/global/img/icons/multi-support.svg';
import ai from '@/app/public/global/img/icons/ai.svg';
import integration from '@/app/public/global/img/icons/integration.svg';
import scalability from '@/app/public/global/img/icons/md/Scalability.svg';
import insights from '@/app/public/global/img/icons/insights.svg';


import Image from 'next/image';
const Features = () => {
  return (
    <section className="mil-deep-bg mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: '25%' }}></div>
      <Container>

        <h2 className="mil-mb-120">
          What Sets Our
          <span className="mil-accent"> Contact Center Solution</span> Apart
        </h2>
        <Row>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={multiSupport} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Multi-Channel Support</h4>
                <p className="mil-box-text">
                  Manage all customer interactions across email, chat, and phone from a single, unified platform.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={ai} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Advanced AI Automation</h4>
                <p className="mil-box-text">
                  Experience smart, fast, and reliable automation that handles routine tasks with precision.{' '}
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
                <h4 className="mil-mb-30">Seamless Integration</h4>
                <p className="mil-box-text">
                  Easily integrate our solution with your existing systems for a smooth, hassle-free experience.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={support} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">24/7 Assistance</h4>
                <p className="mil-box-text">
                  Provide round-the-clock support with an AI CSR that's always available to assist customers.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={scalability} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Scalability & Customization</h4>
                <p className="mil-box-text">
                  Adapt and scale our solution to fit your business’s unique needs and growth trajectory.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={insights} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Data-Driven Insights</h4>
                <p className="mil-box-text">
                  Leverage actionable analytics to make informed decisions and enhance your customer service strategy.{' '}
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
