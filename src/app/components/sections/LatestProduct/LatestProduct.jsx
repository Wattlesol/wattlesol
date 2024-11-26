import Image from "next/image";
import React from "react";
import MdImage1 from "@/app/public/global/img/icons/md/13l.svg";
import ai from "@/app/public/global/img/icons/ai-customer.svg";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const LatestProduct = () => {
  return (
    <section className="call-to-action mil-gradient-bg mil-p-120-120">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, left: "15%" }}
      ></div>
      <div
        className="mil-deco mil-deco-accent"
        style={{ bottom: 0, right: "15%", transform: "rotate(180deg)" }}
      ></div>
      <div className="container mil-text-center">
        <div className="mil-cta-frame">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-50">
            <Image src={ai} alt="icon" />
          </div>
          <p className="mil-light mil-mb-30">Our Latest Product</p>
          <h3 className="mil-light mil-mb-30">
            AI Customer Contact Center Solution
          </h3>
        </div>
        <div className="mil-mb-30">
          <h4 className="mil-light">
            Wattle Sol's AI Contact Center offers AI-powered customer support
            across email, chat, and phone.
            <br />
            Our solution provides fast, personalized responses, improves
            efficiency, and reduces costs.
          </h4>
        </div>
        <div className="mil-adaptive-center">
          <Link href="/contact-center" className="mil-button mil-border">
            <span className="mil-light">Learn More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
