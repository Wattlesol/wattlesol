import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mdImage6 from "@/app/public/global/img/icons/md/6.svg"
import mdImage10 from "@/app/public/global/img/icons/md/10.svg"
import mdImage4 from "@/app/public/global/img/icons/md/4.svg"
import mdImage5 from "@/app/public/global/img/icons/md/5.svg"
import mdImage2 from "@/app/public/global/img/icons/md/2.svg"
import Image from 'next/image'
const WorkWithUs = () => {
    return (
        <section className="mil-p-120-120">
            <Container>
                <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Discover Our Company</span>
                <h2 className="mil-mb-120">Why Work With Us</h2>

                <div className="mil-divider"></div>
                <div className="mil-line-icon-box">
                    <Row className="align-items-center">
                        <Col xl={2}>
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={mdImage6} alt="icon" />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <h4 className="mil-mb-30">Top Expertise</h4>

                        </Col>
                        <Col xl={6}>
                            <p className="mil-box-text mil-mb-30">At Wattle Sol, we specialize in mobile app development, web development, DevOps, Blockchain and CI/CD, leveraging our expertise to deliver cutting-edge solutions. Enhance your team with our flexible staff augmentation services tailored to your project requirements. </p>
                        </Col>

                    </Row>
                </div>
                <div className="mil-divider"></div>
                <div className="mil-line-icon-box">
                    <Row className="align-items-center">
                        <Col xl={2}>
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={mdImage10} alt="icon" />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <h4 className="mil-mb-30">Quality Management</h4>

                        </Col>
                        <Col xl={6}>
                            <p className="mil-box-text mil-mb-30">We integrate rigorous quality management practices into every aspect of our service offerings, ensuring every project meets the highest standards of excellence. Join us for reliability, efficiency, and unmatched performance.</p>
                        </Col>

                    </Row>
                </div>
                <div className="mil-divider"></div>
                <div className="mil-line-icon-box">
                    <Row className="align-items-center">
                        <Col xl={2}>
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={mdImage2
                                } alt="icon" />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <h4 className="mil-mb-30">Utmost Flexibility</h4>

                        </Col>
                        <Col xl={6}>
                            <p className="mil-box-text mil-mb-30">Flexibility is key to our approach, Wattle Sol prides itself on flexibility, offering customizable solutions to adapt seamlessly to your business needs. Partner with us for scalable and versatile services.</p>
                        </Col>

                    </Row>
                </div>
                <div className="mil-divider"></div>
                <div className="mil-line-icon-box">
                    <Row className="align-items-center">
                        <Col xl={2}>
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={mdImage4} alt="icon" />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <h4 className="mil-mb-30">
                                Agility
                            </h4>

                        </Col>
                        <Col xl={6}>
                            <p className="mil-box-text mil-mb-30">Experience the agility of Wattle Sol's approach, designed to optimize performance and seize opportunities in a fast-paced environment. Choose us for adaptive solutions and proactive leadership. </p>
                        </Col>

                    </Row>
                </div>

                <div className="mil-divider"></div>
                <div className="mil-line-icon-box">
                    <Row className="align-items-center">
                        <Col xl={2}>
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={mdImage5} alt="icon" />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <h4 className="mil-mb-30">

                                Innovation

                            </h4>

                        </Col>
                        <Col xl={6}>
                            <p className="mil-box-text mil-mb-30">Wattle Sol embraces innovation to empower your business with inventive solutions that drive efficiency and competitiveness. We believe in delivering forward-thinking solutions that redefine industry standards. Trust us for visionary strategies and tangible results. </p>
                        </Col>

                    </Row>
                </div>
                <div className="mil-divider"></div>



            </Container>
        </section>
    )
}

export default WorkWithUs