import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import smImage12 from "@/app/public/global/img/icons/sm/12.svg"
import FaceImage1 from "@/app/public/global/img/photo/t3.png"
import Zain from '@/app/public/global/img/faces/zain.jpg';

const Main = () => {
    return (
        <section className="mil-deep-bg mil-p-120-60">
            <div className="mil-deco" style={{ top: 0, left: "35%" }}></div>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col lg={5} className=' mil-mb-60'>
                        <div className="mil-circle-illustration">
                            <div className="mil-circle-bg"></div>
                            <div className="mil-image-frame">
                                <Image src={FaceImage1} alt="img" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Firm Overview</span>
                        <h2 className="mil-mb-50">We Specialize in <br /><span className="mil-accent">Transforming Your Idea</span> or Business in The Current<br /> Digital Era.</h2>

                        <p className="mil-mb-50">At Wattle Sol, our mission is to revolutionize the IT landscape by delivering exceptional solutions tailored to our clients' unique needs. As the CEO, I am proud to lead a team that is committed to innovation, excellence, and client satisfaction. </p>
                        <Row className=' align-items-end'>
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
                        </Row>
                    </Col>
                </Row>

            </Container>

        </section>
    )
}

export default Main