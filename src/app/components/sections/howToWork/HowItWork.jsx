import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ThinkingBig from '@/app/public/global/img/icons/md/ThinkingBig.svg';
import StartingSmall from '@/app/public/global/img/icons/md/StartingSmall.svg';
import CreatingFast from '@/app/public/global/img/icons/md/CreatingFast.svg';
import InnovatingScale from '@/app/public/global/img/icons/md/InnovatingScale.svg';

import Image from 'next/image';
const HowItWork = () => {
  return (
    <section className="mil-how-it-works mil-deep-bg mil-p-120-90">
      <div
        className="mil-deco"
        style={{
          top: 0,
          right: '20%',
        }}
      ></div>
      <div
        className="mil-deco"
        style={{
          bottom: 0,
          left: '30%',
          transform: 'rotate(180deg)',
        }}
      ></div>
      <Container>
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Discover Our Company
        </span>
        <h2 className="mil-mb-90">
          How We <span className="mil-accent">Collaborate</span> With You
        </h2>
        <Row>
          <Col md={6} xl={3}>
            <div className="mil-mb-60">
              <div className="mil-icon-box-head mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <Image src={ThinkingBig} alt="icon" />
                </div>
                <h5>Thinking Big</h5>
              </div>
              <p>
                {' '}
                We collaborate boldly with customers and partners, envisioning
                and achieving big together with innovative strategies.
              </p>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="mil-mb-60">
              <div className="mil-icon-box-head mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <Image src={StartingSmall} alt="icon" />
                </div>
                <h5>Starting Small</h5>
              </div>
              <p>
                Start small, grow big. We help you lay strong foundations and
                scale strategically with innovative solutions and collaborative
                partnerships.
              </p>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="mil-mb-60">
              <div className="mil-icon-box-head mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <Image src={CreatingFast} alt="icon" />
                </div>
                <h5>Creating Fast</h5>
              </div>
              <p>
                We specialize in creating fast solutions for rapid results. Stay
                agile and responsive in a dynamic market landscape.
              </p>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="mil-mb-60">
              <div className="mil-icon-box-head mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <Image src={InnovatingScale} alt="icon" />
                </div>
                <h5>Innovating Scale</h5>
              </div>
              <p>
                Innovating scale is our forte. We pioneer solutions that expand
                with your ambitions, driving growth and efficiency.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} xl={6}>
            <a href="#." className="mil-link mil-mb-30">
              <span>Learn More</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </Col>
          <Col md={6} xl={6}>
            <div className="mil-adaptive-right">
              <a href="#." className="mil-button mil-border mil-mb-30">
                <span>How We Work</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWork;
