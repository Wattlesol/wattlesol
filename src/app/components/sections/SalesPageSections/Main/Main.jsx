import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import MarketingSales from '@/app/public/global/img/photo/marketing-sales.png';


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
                                    src={MarketingSales}
                                    alt="img"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h2 className="mil-mb-50">
                            Boost Your <span className="mil-accent">Revenue</span> with Strategic Sales and Marketing Services
                        </h2>
                        <p className="mil-mb-50">
                            Did you know that 70% of businesses struggle to align their sales and marketing efforts? At Wattle Sol, we bridge that gap with tailored strategies that drive growth and maximize your ROI. Our team of experts works closely with you to understand your unique challenges and deliver customized solutions that elevate your brand and expand your market reach.
                        </p>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Main;
