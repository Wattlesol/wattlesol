import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FaceImage1 from "@/app/public/global/img/photo/ppc.png";
import Image from "next/image";
const Perks = () => {
  return (
    <section className="mil-bg mil-p-120-60">
      <div
        className="mil-deco"
        style={{ top: 0, right: "15%" }}
      ></div>
      <Container>
        <Row>
          <Col
            lg={5}
            className="mil-mb-60 md:me-0 me-5"
          >
            <div className="mil-circle-illustration">
              <div className="mil-circle-bg"></div>
              <div className="mil-image-frame">
                <Image
                  src={FaceImage1}
                  alt="img"
                />
              </div>
            </div>
          </Col>

          <Col
            lg={6}
            className="mil-mb-60 sm:mt-1 mt-5 "
          >
            <h2 className="mil-mb-50">
              {" "}
              Amplify Your <span className="mil-accent">Digital Presence</span> with
              Wattle Sol’s PPC Services.
            </h2>
            <p className="mil-mb-20">
              Ready to dominate the digital landscape? Partner with Wattle Sol and
              experience the power of data-driven PPC campaigns that deliver beyond
              expectations. PPC isn’t just about running ads—it’s about driving meaningful
              results that fuel your growth. At Wattle Sol, we’re dedicated to creating
              high-impact PPC campaigns that help your business achieve its goals.{" "}
            </p>
            <h5 className="mil-mb-20">Start Growing with Wattle Sol Today!</h5>
            <p>
              Don’t wait to see results—take the first step towards unparalleled growth!
              Call us now and let our PPC experts create a winning strategy tailored for
              your success!s
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Perks;
