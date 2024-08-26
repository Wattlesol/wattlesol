import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import SoftwareDevelopment from '@/app/public/global/img/photo/Software-development.png';


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
                                    src={SoftwareDevelopment}
                                    alt="img"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h2 className="mil-mb-50">
                            Empowering Your Business With{" "}
                            <span className="mil-accent">Comprehensive</span> Software Development Services.
                        </h2>
                        <p className="mil-mb-50">
                            At Wattle Sol, we are committed to driving digital transformation through our comprehensive suite of software development services. Whether you need a cutting-edge mobile app, a robust web application, or a sophisticated AI solution, our team of experienced developers and strategists is here to bring your vision to life. We leverage the latest technologies and development methodologies to deliver scalable, secure, and high-performance software solutions tailored to your unique business needs.
                        </p>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Main;
