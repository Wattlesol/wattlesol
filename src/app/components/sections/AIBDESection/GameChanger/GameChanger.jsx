import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TopExpertise from '@/app/public/global/img/icons/md/TopExpertise.svg';
import QualityManagement from '@/app/public/global/img/icons/md/QualityManagement.svg';
import UtmostFlexibility from '@/app/public/global/img/icons/md/UtmostFlexibility.svg';
import Agility from '@/app/public/global/img/icons/md/Agility.svg';
import Innovation from '@/app/public/global/img/icons/md/Innovation.svg';
import Image from 'next/image';
const GameChanger = () => {
  return (
    <section className="mil-p-120-120">
      <Container>
        <h2 className="mil-mb-120">Why AI is a Game Changer</h2>

        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={TopExpertise} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Instant Support</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                AI ensures your customers receive immediate assistance, regardless of the time or day. Unlike human agents, AI doesn't need breaks, enabling your business to provide 24/7 support that keeps customers satisfied and engaged.{' '}
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={QualityManagement} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Consistent Responses</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                With AI, you eliminate the variability that comes with human agents. AI delivers precise, reliable answers every time, ensuring that your customers receive consistent information, which builds trust and reliability.
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={UtmostFlexibility} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Continuous Improvement
              </h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                AI systems are designed to learn from every interaction. Over time, they become more efficient and accurate, adapting to new customer needs and preferences, which helps in continuously improving the customer experience.
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={Agility} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Scalable Solutions</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                As your business grows, so do customer interactions. AI can easily scale to handle an increasing volume of queries without the need for additional resources, allowing you to expand your support capabilities without significant cost increases.{' '}
              </p>
            </Col>
          </Row>
        </div>

        <div className="mil-divider"></div>
      </Container>
    </section>
  );
};

export default GameChanger;
