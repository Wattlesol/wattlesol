import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import weAre from '@/app/public/global/img/icons/weAre.svg';
import weBelive from '@/app/public/global/img/icons/WeBelieve.svg';
import weDeep from '@/app/public/global/img/icons/WeDeepDive.svg';
import weSay from '@/app/public/global/img/icons/WeSayWe.svg';
import weTake from '@/app/public/global/img/icons/WeTake.svg';
import wevalue from '@/app/public/global/img/icons/WeValue.svg';

import Image from 'next/image';
const Value = () => {
  return (
    <section className="mil-deep-bg mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: '25%' }}></div>
      <Container>
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          For Enterprise
        </span>
        <h2 className="mil-mb-120">
          We Live by <span className="mil-accent">Powerful</span> Values
        </h2>
        <Row>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={weAre} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">We Are</h4>
                <p className="mil-box-text">
                  innovators at heart, continuously pushing boundaries to
                  pioneer solutions that transform industries.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={weDeep} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">We Deep Dive</h4>
                <p className="mil-box-text">
                  into challenges, exploring every detail to uncover innovative
                  solutions that exceed expectations and drive progress.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={weTake} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">We Take</h4>
                <p className="mil-box-text">
                  ownership of our commitments, delivering results with
                  dedication and a proactive mindset to achieve success
                  together.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={wevalue} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">We Value</h4>
                <p className="mil-box-text">
                  collaboration, diversity, and mutual respect, fostering a
                  culture where every voice is heard and valued for collective
                  growth.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={weBelive} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">We Believe</h4>
                <p className="mil-box-text">
                  in continuous learning and adaptation, embracing change as an
                  opportunity to innovate and stay ahead in a dynamic world.{' '}
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
                <h4 className="mil-mb-30">We Say “We”</h4>
                <p className="mil-box-text">
                  because teamwork and shared goals define our identity, uniting
                  us in our mission to empower businesses and create lasting
                  impact.{' '}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Value;
