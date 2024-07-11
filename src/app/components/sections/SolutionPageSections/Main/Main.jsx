'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import MdImage1 from '@/app/public/global/img/icons/md/2.svg';
import FaceImage2 from '@/app/public/global/img/faces/t3.png';

const Main = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="mil-deep-bg mil-p-120-0">
      <Container>
        <div className="mil-tabs-slider">
          <div className="mil-tab-buttons mil-mt-60-adapt">
            <a
              onClick={() => handleTabClick('tab1')}
              className={activeTab === 'tab1' ? 'mil-active' : ''}
            >
              <span>Machine Learning</span>
            </a>
            <a
              onClick={() => handleTabClick('tab2')}
              className={activeTab === 'tab2' ? 'mil-active' : ''}
            >
              <span>Deep Learning</span>
            </a>
            <a
              onClick={() => handleTabClick('tab3')}
              className={activeTab === 'tab3' ? 'mil-active' : ''}
            >
              <span>Natural Language</span>
            </a>
            <a
              onClick={() => handleTabClick('tab4')}
              className={activeTab === 'tab4' ? 'mil-active' : ''}
            >
              <span>Computer Vision</span>
            </a>
          </div>
          {activeTab === 'tab1' && (
            <TabContent title="Machine Learning" image={FaceImage2} />
          )}
          {activeTab === 'tab2' && (
            <TabContent title="Deep Learning" image={FaceImage2} />
          )}
          {activeTab === 'tab3' && (
            <TabContent title="Natural Language" image={FaceImage2} />
          )}
          {activeTab === 'tab4' && (
            <TabContent title="Computer Vision" image={FaceImage2} />
          )}
        </div>
      </Container>
    </section>
  );
};

const TabContent = ({ title, image }) => (
  <Row className="justify-content-between align-items-center">
    <Col lg={7}>
      <div className="mil-hori-box mil-mb-60">
        <div className="mil-mr-15">
          <div className="mil-icon-frame mil-icon-frame-md">
            <Image src={MdImage1} alt="icon" />
          </div>
        </div>
        <h5>{title}</h5>
      </div>
      <Row className="mil-mb-60">
        <Col lg={6}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden.
          </p>
        </Col>
        <Col lg={6}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden.
          </p>
        </Col>
      </Row>
      <a href="#." className="mil-link mil-mb-60">
        <span>See More</span>
        <i className="fas fa-arrow-right"></i>
      </a>
    </Col>
    <Col lg={4}>
      <div className="mil-circle-illustration mil-with-dots mil-mb-60">
        <div className="mil-circle-bg"></div>
        <div className="mil-image-frame">
          <Image src={image} alt="img" />
        </div>
      </div>
    </Col>
  </Row>
);

export default Main;
