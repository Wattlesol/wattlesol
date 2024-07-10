import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MdIcon1 from "@/app/public/global/img/icons/md/1.svg"
import MdIcon2 from "@/app/public/global/img/icons/md/2.svg"
import MdIcon3 from "@/app/public/global/img/icons/md/3.svg"
import MdIcon4 from "@/app/public/global/img/icons/md/4.svg"
import MdIcon5 from "@/app/public/global/img/icons/md/5.svg"
import MdIcon6 from "@/app/public/global/img/icons/md/6.svg"
import Image from 'next/image'

const Help = () => {
    return (
        <>
            <section class="mil-services mil-p-120-90">

                <div class="mil-deco" style={{
                    top: 0,
                    right: 0
                }}>



                </div>
                <Container>
                    <h2 class="mil-mb-30">How We Can <span class="mil-accent">Help You</span></h2>
                
                <Row>
                    <Col lg={6} xl={6}>
                        <h4 class="mil-mb-60 mil-mt-30">IT Services</h4>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <Image src={MdIcon1} alt="icon" />
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">01</span> Dedicated Team</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <Image src={MdIcon2} alt="icon"/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">02</span> QA and Testing</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <Image src={MdIcon3} alt="icon"/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">03</span> SaaS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xl={6}>
                    <h4 class="mil-mb-60 mil-mt-30">IT Solutions</h4>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <Image src={MdIcon4} alt="icon" />
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">01</span> Blockchain</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <Image src={MdIcon5} alt="icon"/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">02</span> Artificial Intelligence</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <Image src={MdIcon6} alt="icon"/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">03</span> Internet of Things</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </Col>

                </Row>
                </Container>
            </section>
        </>
    )
}


export default Help