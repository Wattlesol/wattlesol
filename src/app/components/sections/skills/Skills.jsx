import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Skills = () => {
  return (
    <section className="mil-skills mil-p-120-90">
      <Container>
        <Row className="align-items-end mil-mb-90">
          <Col xl={6}>
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Our Skill
            </span>
            <h2>
              Business <span className="mil-accent">Success</span> With <br />
              Technology
            </h2>
          </Col>
          <Col xl={6}>
            <p className="mil-mt-60-adapt">
              At Wattle Sol, we're committed to excellence in every project. Our
              innovative approach and client-focused mindset drive exceptional
              results. With expertise and forward-thinking, we exceed
              expectations, empowering businesses to thrive in the digital age
            </p>
          </Col>
        </Row>
        <Row className=" align-items-center">
          <Col md={6} xl={3}>
            <h6 className="mil-mb-30">Software Development</h6>

            <div className="mil-skill-frame mil-mb-60">
              <div className="mil-skill-track">
                <div
                  className="mil-skill-prog"
                  style={{
                    width: '90%',
                  }}
                ></div>
              </div>
              <div className="mil-text-sm">90%</div>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <h6 className="mil-mb-30">Web Development</h6>

            <div className="mil-skill-frame mil-mb-60">
              <div className="mil-skill-track">
                <div
                  className="mil-skill-prog"
                  style={{
                    width: '90%',
                  }}
                ></div>
              </div>
              <div className="mil-text-sm">90%</div>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <h6 className="mil-mb-30">UX / UI Design</h6>

            <div className="mil-skill-frame mil-mb-60">
              <div className="mil-skill-track">
                <div
                  className="mil-skill-prog"
                  style={{
                    width: '90%',
                  }}
                ></div>
              </div>
              <div className="mil-text-sm">90%</div>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <h6 className="mil-mb-30">App Development</h6>

            <div className="mil-skill-frame mil-mb-60">
              <div className="mil-skill-track">
                <div
                  className="mil-skill-prog"
                  style={{
                    width: '95%',
                  }}
                ></div>
              </div>
              <div className="mil-text-sm">95%</div>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <h6 className="mil-mb-30">Customer Services & Sales</h6>

            <div className="mil-skill-frame mil-mb-60">
              <div className="mil-skill-track">
                <div
                  className="mil-skill-prog"
                  style={{
                    width: '80%',
                  }}
                ></div>
              </div>
              <div className="mil-text-sm">80%</div>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <h6 className="mil-mb-30">Artificial Intelligence</h6>

            <div className="mil-skill-frame mil-mb-60">
              <div className="mil-skill-track">
                <div
                  className="mil-skill-prog"
                  style={{
                    width: '90%',
                  }}
                ></div>
              </div>
              <div className="mil-text-sm">90%</div>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <h6 className="mil-mb-30">Blockchain</h6>

            <div className="mil-skill-frame mil-mb-60">
              <div className="mil-skill-track">
                <div
                  className="mil-skill-prog"
                  style={{
                    width: '80%',
                  }}
                ></div>
              </div>
              <div className="mil-text-sm">80%</div>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <Link href="/pages/solution" className="mil-link mil-mb-30">
              <span>More</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
