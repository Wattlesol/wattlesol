import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MobileDev from '@/app/public/global/img/icons/md/mobile-dev.svg';
import WebApp from '@/app/public/global/img/icons/md/web-app.svg';
import UtmostFlexibility from '@/app/public/global/img/icons/md/UtmostFlexibility.svg';
import AI from '@/app/public/global/img/icons/ai.svg';
import Scalability from '@/app/public/global/img/icons/md/Scalability.svg';
import BlockChain from '@/app/public/global/img/icons/md/blockchain.svg'

import Image from 'next/image';
const Expertise = () => {
  return (
    <section className="mil-p-120-120">
      <Container>
        <h2 className="mil-mb-120">Expertise That Drives Results</h2>

        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={MobileDev} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Mobile App Development              </h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                Our mobile app development service focuses on creating intuitive, responsive, and high-performance apps for iOS and Android platforms. Whether you're looking for a native, hybrid, or cross-platform solution, our experts will ensure your app stands out in the crowded marketplace.{' '}
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={WebApp} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Web Application Development</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                We specialize in web app development that meets the highest standards of functionality, security, and scalability. Our team utilizes the latest frameworks and technologies to build custom web applications that drive efficiency and provide seamless integration with your existing systems.
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={AI} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">AI and Machine Learning Solutions
              </h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                Stay ahead of the competition by integrating AI and machine learning into your business operations. Our AI and ML services help automate processes, enhance decision-making, and unlock new opportunities for growth. From predictive analytics to natural language processing, we provide bespoke AI solutions that drive innovation and efficiency.
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={BlockChain} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Blockchain Development              </h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                Explore the future of secure, decentralized technology with our blockchain development services. We help businesses build blockchain solutions that enhance transparency, security, and trust. Whether you're looking to develop a blockchain-based application, smart contracts, or a cryptocurrency, our experts provide the tools and expertise to make it happen.{' '}
              </p>
            </Col>
          </Row>
        </div>

        <div className="mil-divider"></div>
      </Container>
    </section>
  );
};

export default Expertise;
