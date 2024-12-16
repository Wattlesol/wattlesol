import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Budget from '@/app/public/global/img/icons/budget.svg';
import ContentMarketing from '@/app/public/global/img/icons/content-marketing.svg';
import Sales from '@/app/public/global/img/icons/salesIcon.svg';
import Insights from '@/app/public/global/img/icons/insights.svg';
import Keyword from '@/app/public/global/img/icons/keyword.svg';
import Segmentation from '@/app/public/global/img/icons/segmentation.svg';
import AB from '@/app/public/global/img/icons/ab.svg';


import Image from 'next/image';
const Services = () => {
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: '25%' }}></div>
      <Container>

        <h2 className="mil-mb-120">
          Empowering <span className="mil-accent">Your Brand</span> with Comprehensive PPC Solutions.
        </h2>
        <Row>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={Keyword} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Keyword Research and Selection</h4>
                <p className="mil-box-text">
                  We identify the most relevant and high-performing keywords to ensure your ads reach the right audience and generate quality leads.{' '}
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
                <h4 className="mil-mb-30">Campaign Setup and Management</h4>
                <p className="mil-box-text">
                  From account creation to ongoing optimization, we handle every aspect of your PPC campaigns to achieve peak performance.{' '}
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
                <h4 className="mil-mb-30">Ad Creation and Optimization</h4>
                <p className="mil-box-text">
                  Engage, Convert, Succeed. We design compelling, click-worthy ad copy and visuals that resonate with your target audience and drive action.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={Segmentation} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Targeted Audience Segmentation</h4>
                <p className="mil-box-text">
                  We refine your campaigns to target specific demographics, locations, and interests, ensuring your ads reach the people who matter most.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={Budget} width={35} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Budget Management</h4>
                <p className="mil-box-text">
                  We optimize your ad spend, allocating your budget strategically to maximize conversions while minimizing costs.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4}>
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={AB} alt="icon" width={32} />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">A/B Testing</h4>
                <p className="mil-box-text">
                  We continuously test ad variations to determine what works best, refining your campaigns for improved performance over time.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={4} className="mx-auto text-center">
            <div className="mil-icon-box-2 mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={Insights} alt="icon" />
              </div>
              <div className="mil-box-text">
                <h4 className="mil-mb-30">Analytics and Reporting</h4>
                <p className="mil-box-text">
                  We provide detailed reports on your campaign’s performance, offering actionable insights to guide future strategies.
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
