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
              <span>Software Development</span>
            </a>
            <a
              onClick={() => handleTabClick('tab2')}
              className={activeTab === 'tab2' ? 'mil-active' : ''}
            >
              <span>Staff Augmentation</span>
            </a>
            <a
              onClick={() => handleTabClick('tab3')}
              className={activeTab === 'tab3' ? 'mil-active' : ''}
            >
              <span>UI/UX Design</span>
            </a>
            <a
              onClick={() => handleTabClick('tab4')}
              className={activeTab === 'tab4' ? 'mil-active' : ''}
            >
              <span>Sales And Marketing</span>
            </a>
          </div>
          {activeTab === 'tab1' && (
            <TabContent
              title="Software Development"
              desc="Our team excels in creating and optimizing software
                    solutions"
              point1="Mobile and Web App."
              point2="Website Development"
              point3="CRM Development and Integration."
              point4="Web3 and Blockchain."
              image={FaceImage2}
            />
          )}
          {activeTab === 'tab2' && (
            <TabContent
              title="Staff Augmentation"
              desc=" Scale your team with skilled professionals tailored to your
                    needs."
              image={FaceImage2}
              point1="Flexible Staffing Solutions."
              point2="Expertise in Various Technologies."
              point3="Seamless Team Integration."
              point4="Support and Management."
            />
          )}
          {activeTab === 'tab3' && (
            <TabContent
              title="UI/UX Design"
              desc="Elevate user experience with intuitive design solutions."
              image={FaceImage2}
              point1="User-Centered Design."
              point2="Wireframing and Prototyping."
              point3="Visual Design and Branding."
              point4="Usability Testing and Optimization."
            />
          )}
          {activeTab === 'tab4' && (
            <TabContent
              title="Sales And Marketing"
              desc="Drive revenue growth with strategic sales and marketing
                    solutions."
              image={FaceImage2}
              point1="Sales Strategy Development."
              point2="Lead Generation and Qualification."
              point3="Marketing Strategy Development."
              point4="Digital Marketing Campaigns."
            />
          )}
        </div>
      </Container>
    </section>
  );
};

const TabContent = ({ title, image, desc, point1, point2, point3, point4 }) => (
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
          <p>{desc}</p>
          <ul class="mt-5 mil-simple-list mil-mb-50">
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
            <li>{point4}</li>
          </ul>
        </Col>
        <Col lg={6}></Col>
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
