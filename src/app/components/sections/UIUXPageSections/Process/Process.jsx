import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UX from '@/app/public/global/img/icons/ux.svg';
import UserSearch from '@/app/public/global/img/icons/user-research.svg';
import Prototype from '@/app/public/global/img/icons/wire-framing.svg';
import Usability from '@/app/public/global/img/icons/useability.svg';
import Responsive from '@/app/public/global/img/icons/responsive.svg';
import Discovery from '@/app/public/global/img/icons/md/Innovation.svg';



import Image from 'next/image';

const Process = () => {
    return (
        <>
            <section className="mil-services mil-p-120-90">
                <div
                    className="mil-deco"
                    style={{
                        top: 0,
                        right: 0,
                    }}
                ></div>
                <Container>
                    <h2 className="mil-mb-30">
                        Our UI/UX Design <span className="mil-accent">Process</span>
                    </h2>

                    <Row>
                        <Col lg={6} xl={6}>
                            <h4 className="mil-mb-60 mil-mt-30">Step-By-Step Process</h4>
                            <div className="mil-divider mil-divider-left"></div>
                            <div className="mil-service-item">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <Image src={Discovery} alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">01</span> Discovery Phase
                                    </h5>
                                    <p>
                                        We begin by understanding your business, goals, and target audience to define the scope and objectives of the project.
                                    </p>
                                </div>
                            </div>
                            <div className="mil-divider mil-divider-left"></div>
                            <div className="mil-service-item">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <Image src={Prototype} alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">03</span>Wireframing and Prototyping
                                    </h5>
                                    <p>
                                        We create detailed wireframes and interactive prototypes to visualize the layout, functionality, and seamless user flow of your digital product.
                                    </p>
                                </div>
                            </div>
                            <div className="mil-divider mil-divider-left"></div>
                            <div className="mil-service-item">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <Image src={Usability} alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">05</span> Usability Testing and Feedback
                                    </h5>
                                    <p>
                                        We conduct usability testing to gather feedback and iterate on the design to ensure a seamless user experience.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} xl={6}>
                            {/* <h4 className="mil-mb-60 mil-mt-30">IT Solutions</h4> */}
                            <div
                                className="mil-divider mil-divider-left mt-10"
                                style={{
                                    marginTop: '120.6px',
                                }}
                            ></div>
                            <div className="mil-service-item">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <Image src={UserSearch} alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">02</span> User Research and Analysis
                                    </h5>
                                    <p>
                                        We conduct comprehensive user research to gather insights and identify user needs, preferences, and behaviors.
                                    </p>
                                </div>
                            </div>
                            <div className="mil-divider mil-divider-left"></div>
                            <div className="mil-service-item">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <Image src={UX} alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">04</span>Design and Development
                                    </h5>
                                    <p>
                                        Our designers craft visually appealing interfaces and experiences, focusing on usability, aesthetics, and brand alignment.
                                    </p>
                                </div>
                            </div>
                            <div className="mil-divider mil-divider-left"></div>
                            <div className="mil-service-item">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <Image src={Responsive} alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">06</span> Launch and Optimization</h5>
                                    <p>
                                        We finalize the design and hand it over to development, providing ongoing support and optimization based on user feedback and analytics
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Process;
