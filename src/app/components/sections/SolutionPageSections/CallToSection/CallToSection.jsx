import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MdImage1 from '@/app/public/global/img/icons/md/11.svg';
import Link from 'next/link';
const CallToSection = () => {
  return (
    <section class="mil-p-120-90">
      <div
        class="mil-deco"
        style={{ bottom: 0, right: ' 25%', transform: ' rotate(180deg)' }}
      ></div>
      <Container>
        <Row>
          <Col lg={8}>
            <div class="mil-hori-box mil-mb-30">
              <div class="mil-mr-30">
                <div class="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                  <Image src={MdImage1} alt="icon" />
                </div>
              </div>
              <h5>
                The Freedom to focus on improving Your business or idea Achieve
                more with less hassle let us handle the details while you
                concentrate on your core business goals
              </h5>
            </div>
          </Col>
          <Col lg={4}>
            <div class="mil-adaptive-right">
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ02e9dd0BtTOmft6sGk2qDolJA6-KZkxLAMrsDdagnhwiZhzrYr4A3XDACnNPRzjSIzJUjv3g7l" target='_blank' rel="noopener noreferrer"
                className="mil-button mil-border mil-mr-15 mil-mb-30"
              >
                <span>Book an Appointment</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToSection;
