import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import support from '@/app/public/global/img/icons/24.svg';
import Leads from '@/app/public/global/img/icons/lead-generation.svg';
import EmailMarketing from '@/app/public/global/img/icons/email-marketing.svg';
import DigitalMarketing from '@/app/public/global/img/icons/digital-marketing.svg';
import ContentMarketing from '@/app/public/global/img/icons/content-marketing.svg';
import Sales from '@/app/public/global/img/icons/salesIcon.svg';
import insights from '@/app/public/global/img/icons/insights.svg';


import Image from 'next/image';
const Services = () => {
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: '25%' }}></div>
      <Container>

        <h2 className="mil-mb-120">
          One <span className="mil-accent">Stop Solution</span> for All Your Needs
        </h2>
        <Row>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={DigitalMarketing} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Digital Marketing</h4>
                <p className="mil-box-text">
                  Our data-driven digital marketing strategies, including SEO, PPC, and social media marketing, have helped clients increase their online visibility by over 150%, driving significant boosts in sales and customer engagement.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={ContentMarketing} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Content Marketing</h4>
                <p className="mil-box-text">
                  Engage your audience with compelling content that resonates. Our content marketing solutions are tailored to your brand’s voice, driving customer loyalty and generating qualified leads.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={Sales} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Sales Enablement</h4>
                <p className="mil-box-text">
                  Equip your sales team with the tools and insights they need to close deals more effectively. From CRM integration to personalized training, our solutions are designed to enhance your sales performance.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={Leads} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Lead Generation</h4>
                <p className="mil-box-text">
                  Our lead generation strategies focus on high-quality leads that convert. We employ targeted outreach, advanced analytics, and nurturing techniques to fill your sales pipeline with ready-to-convert prospects.{' '}
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
                <h4 className="mil-mb-30">Market Research and Analytics</h4>
                <p className="mil-box-text">
                  Make informed decisions with our comprehensive market research and analytics services. We provide deep insights into market trends, customer behavior, and competitive landscape to help you stay ahead of the curve.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={EmailMarketing} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Email Marketing</h4>
                <p className="mil-box-text">
                  Our email marketing service includes personalized content creation, A/B testing, and performance tracking to ensure your messages reach the right audience and generate the desired response. Our clients have seen a 20% increase in customer retention through our effective email strategies.{' '}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
