import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MdImage1 from "@/app/public/global/img/icons/md/11.svg"
const CallToSection = () => {
    return (
        <section class="mil-p-120-90">
            <div class="mil-deco" style={{bottom: 0, right:" 25%", transform:" rotate(180deg)"}}></div>
            <Container>
                <Row>
                    <Col lg={8}>
                    <div class="mil-hori-box mil-mb-30">
                            <div class="mil-mr-30">
                                <div class="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                                    <Image src={MdImage1} alt="icon"/>
                                </div>
                            </div>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu quis ipsum suspendisse ultrices gravida.</h5>
                        </div>
                    </Col>
                    <Col lg={4}>
                    <div class="mil-adaptive-right">
                            <a href="#." class="mil-button mil-border mil-mb-30"><span>Get in Touch</span></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CallToSection