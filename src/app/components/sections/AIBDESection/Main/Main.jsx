import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import FaceImage1 from "@/app/public/global/img/photo/t3.png";

const Main = () => {
    return (
        <section className="mil-deep-bg mil-p-120-60">
            <div
                className="mil-deco"
                style={{ top: 0, left: "35%" }}
            ></div>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col
                        lg={5}
                        className=" mil-mb-60"
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
                    <Col lg={6}>
                        <h2 className="mil-mb-50">
                            Elevating Your Customer Service with{" "}
                            <span className="mil-accent">AI-Powered Solutions</span> with for the
                            Digital Era.
                        </h2>
                        <p className="mil-mb-50">
                            In today’s digital age, stellar customer service is non-negotiable. Wattle
                            Sol’s AI-Powered Contact Center Solution transforms how businesses handle
                            customer interactions across email, chat, and phone calls. Our cutting-edge
                            AI ensures fast, personalized responses that keep your customers happy and
                            loyal.
                        </p>
                        {/* <Row className=' align-items-end'>
                            <Col xl={7}>
                                <ul className="mil-check-icon-list mil-mb-60">
                                    <li>
                                        <Image src={smImage12} alt="icon" />
                                        <span className="mil-dark">Seasoned Professionals.</span>
                                    </li>
                                    <li>
                                        <Image src={smImage12} alt="icon" />
                                        <span className="mil-dark">Flexible and Responsive. </span>
                                    </li>
                                    <li>
                                        <Image src={smImage12} alt="icon" />
                                        <span className="mil-dark">Clear and Open Dialogue.</span>
                                    </li>
                                    <li>
                                        <Image src={smImage12} alt="icon" />
                                        <span className="mil-dark">Global Talent Without Compromise.</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col xl={5}>

                                <a className="mil-post-sm mil-mb-60">
                                    <div className="mil-cover-frame"><Image src={Zain} alt="cover"/></div>
                                    <div className="mil-description">
                                        <h4 className="mil-font-3 mil-accent">Zain Syed</h4>
                                        <p className="mil-text-sm">CEO & Co-Founder</p>
                                    </div>
                                </a>
                            </Col>
                        </Row> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Main;
