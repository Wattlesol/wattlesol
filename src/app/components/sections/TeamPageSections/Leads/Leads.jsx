import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Productivity from '@/app/public/global/img/icons/md/Productivity.svg';
import Personality from '@/app/public/global/img/icons/md/Personality.svg';
import Transparency from '@/app/public/global/img/icons/md/Transparency.svg';
import Volition from '@/app/public/global/img/icons/md/Volition.svg';

// import Productivity from '@/app'
const Leads = () => {
  return (
    <section className="mil-icon-boxes mil-p-120-60">
      <Container>
        <Row className="align-items-center justify-content-between mil-mb-90">
          <Col xl={6}>
            <h2>
              Values that <span className="mil-accent">Lead Us</span>
            </h2>
          </Col>
          <Col xl={5}>
            <p>
              Uncover the core principles that define Wattle Sol, steering our
              journey towards unparalleled success.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} xl={3}>
            <div className="mil-icon-box mil-center mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={Productivity} alt="icon" />
              </div>
              <h5 className="mil-mb-20">
                <span className="mil-accent">01.</span>&nbsp; Productivity
              </h5>
              <p>
                Productivity thrives through our steadfast adherence to core
                values
              </p>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="mil-icon-box mil-center mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={Transparency} alt="icon" />
              </div>
              <h5 className="mil-mb-20">
                <span className="mil-accent">02.</span>&nbsp; Transparency
              </h5>
              <p>
                We prioritize transparency, ensuring it permeates every aspect
                of our operations and culture.
              </p>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="mil-icon-box mil-center mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={Personality} alt="icon" />
              </div>
              <h5 className="mil-mb-20">
                <span className="mil-accent">03.</span>&nbsp; Personality
              </h5>
              <p>
                Personality is at the heart of our organizational ethos,
                defining our culture and driving success.
              </p>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="mil-icon-box mil-center mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={Volition} alt="icon" />
              </div>
              <h5 className="mil-mb-20">
                <span className="mil-accent">04.</span>&nbsp; Volition
              </h5>
              <p>
              Our commitment to volition defines our proactive approach and sets us apart in our industry.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Leads;
