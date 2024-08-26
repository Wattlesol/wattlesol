import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TopExpertise from '@/app/public/global/img/icons/md/TopExpertise.svg';
import QualityManagement from '@/app/public/global/img/icons/md/QualityManagement.svg';
import UtmostFlexibility from '@/app/public/global/img/icons/md/UtmostFlexibility.svg';
import TailorSolution from '@/app/public/global/img/icons/md/TailoredSolutions.svg';
import integration from '@/app/public/global/img/icons/integration.svg';
import Innovation from '@/app/public/global/img/icons/md/Innovation.svg';
import Image from 'next/image';
const WorkWithUs = () => {
  return (
    <section className="mil-deep-bg mil-p-120-120">
      <Container>
        <h2 className="mil-mb-120">Why Work With Us</h2>

        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={TopExpertise} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Extensive Talent Network</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                Our broad network includes professionals across various industries, allowing us to provide immediate and relevant expertise.{' '}
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
              <h4 className="mil-mb-30">Quality Management</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                We meticulously vet and evaluate all candidates to guarantee they meet your standards and deliver exceptional results.
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
              <h4 className="mil-mb-30">Utmost Flexibility</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                From temporary staffing to project-based support and permanent placements, we offer flexible models that fit your unique requirements.
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
        <div className="mil-line-icon-box">
          <Row className="align-items-center">
            <Col xl={2}>
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <Image src={integration} alt="icon" />
              </div>
            </Col>
            <Col xl={4}>
              <h4 className="mil-mb-30">Seamless Integration</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                Our professionals integrate smoothly into your team, working collaboratively to achieve your business goals and enhance overall productivity.{' '}
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
              <h4 className="mil-mb-30">Tailor Solution</h4>
            </Col>
            <Col xl={6}>
              <p className="mil-box-text mil-mb-30">
                We customize our staff augmentation services to align with your specific project requirements, ensuring a perfect match for your needs.{' '}
              </p>
            </Col>
          </Row>
        </div>
        <div className="mil-divider"></div>
      </Container>
    </section>
  );
};

export default WorkWithUs;
