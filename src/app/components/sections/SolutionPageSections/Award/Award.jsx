import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PhotoImage1 from "@/app/public/global/img/photo/14.jpg"
import IconImage1 from "@/app/public/global/img/icons/md/10.svg"
import IconImage2 from "@/app/public/global/img/icons/md/11.svg"
const Award = () => {
    return (
        <section class="mil-awards">
            <Row className='m-0'>
                <Col xl={6} className=' p-0 mil-relative'>
                    <Image src={PhotoImage1} class="mil-background-image" style={{objectPosition: "center"}} data-swiper-parallax-scale="1.1" alt="image" />
                    <div class="mil-overlay mil-gradient-bg"></div>
                    <div class="mil-fake-container mil-p-120-120">
                        <div class="swiper-container mil-box-slider mil-mb-120">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">

                                    <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                        <h3 class="mil-light mil-mb-120">AI Solutions To Analyze and Understand The <span class="mil-accent">Physical World</span></h3>
                                        <div class="mil-hori-box mil-mb-30">
                                            <div class="mil-mr-15">
                                                <div class="mil-icon-frame mil-light mil-icon-frame-md">
                                                    <Image src={IconImage1} alt="icon" />
                                                </div>
                                            </div>
                                            <h5 class="mil-light">Facial Recognition</h5>
                                        </div>
                                        <p class="mil-light-soft">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.</p>
                                    </div>

                                </div>
                                <div class="swiper-slide">

                                    <div data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                                        <h3 class="mil-light mil-mb-120">Industry Specific AI Consulting and <span class="mil-accent">Development</span></h3>
                                        <div class="mil-hori-box mil-mb-30">
                                            <div class="mil-mr-15">
                                                <div class="mil-icon-frame mil-light mil-icon-frame-md">
                                                    <Image src={IconImage2} alt="icon" />
                                                </div>
                                            </div>
                                            <h5 class="mil-light">Artificial Intelligence</h5>
                                        </div>
                                        <p class="mil-light-soft">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="mil-slider-nav">
                            <div class="mil-slider-btn-prev mil-box-prev mil-light"><i class="fas fa-arrow-left"></i><span class="mil-h6">Prev</span></div>
                            <div class="mil-slider-btn-next mil-box-next mil-light"><span class="mil-h6">Next</span><i class="fas fa-arrow-right"></i></div>
                        </div>
                    </div>
                </Col>
                <Col xl={6} className='p-0 mil-relative' style={{ overflow: "hidden" }}>
                    <Image src={PhotoImage1} class="mil-background-image" style={{objectPosition: "center"}} data-swiper-parallax-scale="1.1" alt="image"/>
                        <div class="mil-overlay mil-with-deco mil-super-light"></div>
                </Col>
            </Row>
        </section>
    )
}

export default Award