import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import smIcon1 from "@/app/public/global/img/icons/sm/1.svg"
import smIcon2 from "@/app/public/global/img/icons/sm/2.svg"
import smIcon3 from "@/app/public/global/img/icons/sm/3.svg"
import smIcon4 from "@/app/public/global/img/icons/sm/4.svg"
import smIcon5 from "@/app/public/global/img/icons/sm/5.svg"
import smIcon6 from "@/app/public/global/img/icons/sm/6.svg"
import smIcon7 from "@/app/public/global/img/icons/sm/7.svg"
import smIcon8 from "@/app/public/global/img/icons/sm/8.svg"
import smIcon9 from "@/app/public/global/img/icons/sm/9.svg"
import smIcon10 from "@/app/public/global/img/icons/sm/10.svg"
import smIcon11 from "@/app/public/global/img/icons/sm/11.svg"
import smIcon12 from "@/app/public/global/img/icons/sm/12.svg"
import Image from 'next/image'
const HowItWork = () => {
    return (
        <section className="mil-how-it-works mil-deep-bg mil-p-120-90">

            <div className="mil-deco" style={{
                top: 0,
                right: "20%"
            }}>
            </div>
            <div className="mil-deco" style={{
                bottom: 0,
                left: "30%",
                transform: "rotate(180deg)"
            }}></div>
            <Container>
                <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Discover Our Company</span>
                <h2 className="mil-mb-90">How We <span className="mil-accent">Collaborate</span> With You</h2>
                <Row>
                    <Col md={6} xl={3}>

                        <div className="mil-mb-60">
                            <div className="mil-icon-box-head mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-sm">
                                    <Image src={smIcon1} alt="icon" />
                                </div>
                                <h5>Thinking Big</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col md={6} xl={3}>

                        <div className="mil-mb-60">
                            <div className="mil-icon-box-head mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-sm">
                                    <Image src={smIcon2} alt="icon" />
                                </div>
                                <h5>Thinking Big</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col md={6} xl={3}>

                        <div className="mil-mb-60">
                            <div className="mil-icon-box-head mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-sm">
                                    <Image src={smIcon3} alt="icon" />
                                </div>
                                <h5>Thinking Big</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col md={6} xl={3}>

                        <div className="mil-mb-60">
                            <div className="mil-icon-box-head mil-mb-30">
                                <div className="mil-icon-frame mil-icon-frame-sm">
                                    <Image src={smIcon4} alt="icon" />
                                </div>
                                <h5>Thinking Big</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='align-items-center'>
                    <Col md={6} xl={6}>
                        <a href="#." className="mil-link mil-mb-30"><span>Learn More</span><i className="fas fa-arrow-right"></i></a>
                    </Col>
                    <Col md={6} xl={6}>
                        <div className="mil-adaptive-right">
                            <a href="#." className="mil-button mil-border mil-mb-30"><span>How We Work</span></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default HowItWork