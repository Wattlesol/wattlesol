import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import StaffAugmentation from '@/app/public/global/img/photo/staff-augmentation.png';


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
                                    src={StaffAugmentation}
                                    alt="img"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h2 className="mil-mb-50">
                            Empower Your <span className="mil-accent"> Workforce</span> with Premier Staff Augmentation
                        </h2>
                        <p className="mil-mb-50">
                            At Wattle Sol, we specialize in seamlessly integrating top-tier professionals into your teams, delivering the flexibility and expertise needed to fuel your business’s growth. Whether you're seeking temporary support or long-term talent, our customized solutions ensure you find the perfect match to overcome challenges and achieve success.
                        </p>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Main;
