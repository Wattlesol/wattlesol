import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MdImage1 from "@/app/public/global/img/icons/md/12.svg"
const Consultant = () => {
    return (
        <section class="mil-p-120-120">
            <div class="mil-deco" style={{ top: 0, right: "30%" }}></div>
            <Container>
                <Row className='align-items-end mil-mb-90'>
                    <Col md={6} xl={6}>
                        <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Solutions of Consulting</span>
                        <h2><span class="mil-accent">Industry Specific</span> AI Consulting and Development</h2>
                    </Col>

                    <Col md={6} xl={6}>
                        <div class="mil-adaptive-right mil-mt-60-adapt">
                            <div class="mil-slider-nav">
                                <div class="mil-slider-btn-prev mil-revi-prev"><i class="fas fa-arrow-left"></i><span class="mil-h6">Prev</span></div>
                                <div class="mil-slider-btn-next mil-revi-next"><span class="mil-h6">Next</span><i class="fas fa-arrow-right"></i></div>
                            </div>
                        </div>
                        
                    </Col>

                </Row>
                <div class="swiper-container mil-revi-slider mil-mb-90">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">

                                    <div class="mil-hover-card">
                                        <div class="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <Image src={MdImage1} alt="icon"/>
                                        </div>
                                        <h5 class="mil-mb-30">Retail and eCommerce</h5>
                                        <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    </div>

                                </div>
                                <div class="swiper-slide">

                                    <div class="mil-hover-card">
                                        <div class="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <Image src={MdImage1} alt="icon"/>
                                        </div>
                                        <h5 class="mil-mb-30">Retail and eCommerce</h5>
                                        <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    </div>

                                </div>
                                <div class="swiper-slide">

                                    <div class="mil-hover-card">
                                        <div class="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <Image src={MdImage1} alt="icon"/>
                                        </div>
                                        <h5 class="mil-mb-30">Retail and eCommerce</h5>
                                        <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    </div>

                                </div>
                                <div class="swiper-slide">

                                    <div class="mil-hover-card">
                                        <div class="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <Image src={MdImage1} alt="icon"/>
                                        </div>
                                        <h5 class="mil-mb-30">Retail and eCommerce</h5>
                                        <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    </div>

                                </div>
                                <div class="swiper-slide">

                                    <div class="mil-hover-card">
                                        <div class="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                            <Image src={MdImage1} alt="icon"/>
                                        </div>
                                        <h5 class="mil-mb-30">Retail and eCommerce</h5>
                                        <p>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                <a href="#." class="mil-link"><span>Let’s Solve Your Challenges With AI</span><i class="fas fa-arrow-right"></i></a>
            </Container>
        </section>
    )
}

export default Consultant