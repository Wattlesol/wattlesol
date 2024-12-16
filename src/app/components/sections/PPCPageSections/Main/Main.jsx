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
                            Accelerate Your <span className="mil-accent">Growth</span> with Wattle Sol’s Strategic PPC Campaigns.
                        </h2>
                        <p className="mil-mb-50">
                            At Wattle Sol, we understand that Pay-Per-Click (PPC) advertising isn’t just about running ads—it’s about crafting targeted campaigns that drive real results. Our tailored PPC solutions are designed to ensure every dollar spent delivers maximum impact, helping your business thrive in a competitive landscape. In the fast-paced digital world, businesses can’t afford to wait for organic growth. PPC provides an immediate boost by positioning your ads in front of the right audience at the right time. With our PPC expertise, you can enjoy higher visibility, more leads, and better conversions—all while staying in control of your budget.
                        </p>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Main;
