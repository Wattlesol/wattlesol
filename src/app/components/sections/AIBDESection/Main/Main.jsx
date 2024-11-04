import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
// import MarketingSales from '@/app/public/global/img/photo/marketing-sales.png';

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
                                    src='global/img/photo/marketing-sales.png'
                                    alt="Wattle Sol AI-Powered Contact Center Solution"
                                    unoptimized
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

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Main;
