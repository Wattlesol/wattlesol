import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import smImage12 from "@/app/public/global/img/icons/sm/12.svg"
import FaceImage1 from "@/app/public/global/img/faces/1.jpg"
const Main = () => {
    return (
        <section class="mil-deep-bg mil-p-120-60">
            <div class="mil-deco" style={{ top: 0, left: "35%" }}></div>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col lg={5} className=' mil-mb-60'>
                        <div class="mil-circle-illustration">
                            <div class="mil-circle-bg"></div>
                            <div class="mil-image-frame">
                                <Image src={FaceImage1} alt="img" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Firm Overview</span>
                        <h2 class="mil-mb-50">We Specialize in <br /><span class="mil-accent">Transforming Your Idea</span> or Business in The Current<br /> Digital Era.</h2>

                        <p class="mil-mb-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <Row className=' align-items-end'>
                            <Col xl={7}>
                                <ul class="mil-check-icon-list mil-mb-60">
                                    <li>
                                        <Image src={smImage12} alt="icon" />
                                        <span class="mil-dark">Quis suspendisse ultrices gravida.</span>
                                    </li>
                                    <li>
                                        <Image src={smImage12} alt="icon" />
                                        <span class="mil-dark">Consectetur adipiscing elit.</span>
                                    </li>
                                    <li>
                                        <Image src={smImage12} alt="icon" />
                                        <span class="mil-dark">Quis suspendisse ultrices gravida.</span>
                                    </li>
                                    <li>
                                        <Image src={smImage12} alt="icon" />
                                        <span class="mil-dark">Consectetur adipiscing elit.</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col xl={5}>

                                <a href="team-single.html" class="mil-post-sm mil-mb-60">
                                    <div class="mil-cover-frame"><Image src={FaceImage1} alt="cover"/></div>
                                    <div class="mil-description">
                                        <h4 class="mil-font-3 mil-accent">Jane Meldrum</h4>
                                        <p class="mil-text-sm">CEO & Co-Founder</p>
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