import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CallToSection = () => {
  return (
    <section className="mil-p-120-60">
      <Container>
        <Row className="align-items-center">
          <Col lg={12} xl={6}>
            <h4 className="mil-mb-60">
              Redefine customer service with Wattle Sol's{" "}
              <span className="mil-accent">AI Contact Center Solution </span>,
              Boost efficiency and loyalty—get started now!
            </h4>
          </Col>
          <Col lg={12} xl={6}>
            <div className="mil-adaptive-right">
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2MVk3D4z7q8WW0oLXjtYbr0fiDQpFGj1gr9LgCLUaVH5wq9wlW0qxM377Cu7TyH0sfU48A7JN3"
                target="_blank"
                rel="noopener noreferrer"
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
