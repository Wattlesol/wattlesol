import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ClientImage1 from "@/app/public/global/img/faces/1.jpg"
import SmImage1 from "@/app/public/global/img/icons/sm/11.svg"
import Image from 'next/image'
const Testimonial = () => {
    return (
        <section class="mil-reviews mil-deep-bg mil-p-120-120">
            <div class="mil-deco" style={{ top: 0, right: "30%" }}></div>
            <Container>
                <Row className='align-items-center mil-mb-90'>
                    <Col md={6} xl={6}>
                        <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Testimonial</span>
                        <h2>What Our <span class="mil-accent">Clients</span> Say</h2>

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
                <div class="swiper-container mil-revi-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">

                            <div class="mil-review">
                                <div class="mil-stars mil-mb-30">
                                    <Image src={SmImage1} alt="quote"/>
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                </div>
                                <p class="mil-mb-30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div class="mil-author">
                                    <Image src={ClientImage1} alt="Customer"/>
                                        <div class="mil-name">
                                            <h6 class="mil-mb-5">Tamzyn French</h6>
                                            <span class="mil-text-sm">Agency Design</span>
                                        </div>
                                </div>
                            </div>

                        </div>
                        <div class="swiper-slide">

                            <div class="mil-review">
                                <div class="mil-stars mil-mb-30">
                                    <Image src={SmImage1} alt="quote"/>
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                </div>
                                <p class="mil-mb-30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div class="mil-author">
                                    <Image src={ClientImage1} alt="Customer"/>
                                        <div class="mil-name">
                                            <h6 class="mil-mb-5">Tamzyn French</h6>
                                            <span class="mil-text-sm">Agency Design</span>
                                        </div>
                                </div>
                            </div>

                        </div>
                        <div class="swiper-slide">

                            <div class="mil-review">
                                <div class="mil-stars mil-mb-30">
                                    <Image src={SmImage1} alt="quote"/>
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                </div>
                                <p class="mil-mb-30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div class="mil-author">
                                    <Image src={ClientImage1} alt="Customer"/>
                                        <div class="mil-name">
                                            <h6 class="mil-mb-5">Tamzyn French</h6>
                                            <span class="mil-text-sm">Agency Design</span>
                                        </div>
                                </div>
                            </div>

                        </div>
                        <div class="swiper-slide">

                            <div class="mil-review">
                                <div class="mil-stars mil-mb-30">
                                    <Image src={SmImage1} alt="quote"/>
                                        <ul>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                            <li><i class="fas fa-star"></i></li>
                                        </ul>
                                </div>
                                <p class="mil-mb-30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div class="mil-author">
                                    <Image src={ClientImage1} alt="Customer"/>
                                        <div class="mil-name">
                                            <h6 class="mil-mb-5">Tamzyn French</h6>
                                            <span class="mil-text-sm">Agency Design</span>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default Testimonial