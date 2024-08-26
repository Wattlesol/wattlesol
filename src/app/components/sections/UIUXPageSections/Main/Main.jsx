import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import UI from '@/app/public/global/img/photo/ui-ux.png';


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
                                    src={UI}
                                    alt="img"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h2 className="mil-mb-50">
                            Elevate Your <span className="mil-accent">Brand Identity </span> with Our UI/UX Design Solutions
                        </h2>
                        <p className="mil-mb-50">
                            In today's digital landscape, a well-designed user interface (UI) and a seamless user experience (UX) are critical for engaging users and converting them into loyal customers. At Wattle Sol, we combine creativity, innovation, and industry best practices to design digital products that are not only visually appealing but also highly functional and user-friendly. Whether you need a complete redesign of your website or a custom UI/UX design for your mobile app, our team of expert designers is here to help you achieve your goals.
                        </p>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Main;
