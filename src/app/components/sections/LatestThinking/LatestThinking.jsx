import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogImage1 from "@/app/public/global/img/blog/1.jpg"
import BlogImage2 from "@/app/public/global/img/blog/2.jpg"
import BlogImage3 from "@/app/public/global/img/blog/3.jpg"
import BlogImage4 from "@/app/public/global/img/blog/4.jpg"
import BlogImage5 from "@/app/public/global/img/blog/5.jpg"
import BlogImage6 from "@/app/public/global/img/blog/6.jpg"
import Image from 'next/image'
const LatestThinking = () => {
    return (
        <section class="mil-blog mil-p-120-120">
            <div class="mil-deco" style={{ top: 0, right: "30%" }}></div>
            <Container>
                <Row className='align-items-center mil-mb-90'>
                    <Col md={6} xl={6}>
                        <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Our Latest News</span>
                        <h2>Latest Thinking</h2>
                    </Col>
                    <Col md={6} xl={6}>
                        <div class="mil-adaptive-right mil-mt-60-adapt">
                            <div class="mil-slider-nav">
                                <div class="mil-slider-btn-prev mil-blog-prev"><i class="fas fa-arrow-left"></i><span class="mil-h6">Prev</span></div>
                                <div class="mil-slider-btn-next mil-blog-next"><span class="mil-h6">Next</span><i class="fas fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <div class="swiper-container mil-blog-slider mil-mb-90">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide mil-slide-50">
                            <a href="publication.html" class="mil-card">
                                <div class="mil-cover-frame">
                                    <Image src={BlogImage1} alt="project" />
                                </div>
                                <div class="mil-description">
                                    <div class="mil-card-title">
                                        <h4 class="mil-mb-20">Easy & Most Powerful Server Platform.</h4>
                                        <h6>by: <span class="mil-accent">Jane Meldrum</span></h6>
                                    </div>
                                    <div class="mil-card-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="swiper-slide mil-slide-25">

                            <a href="publication.html" class="mil-card mil-card-sm mil-reverse-sm">
                                <div class="mil-description">
                                    <div class="mil-card-title">
                                        <h4 class="mil-mb-20">Easy & Most Powerful Server Platform.</h4>
                                        <h6>by: <span class="mil-accent">Jane Meldrum</span></h6>
                                    </div>
                                    <div class="mil-card-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="mil-cover-frame">
                                <Image src={BlogImage2} alt="project" />

                                </div>
                            </a>

                        </div>
                        <div class="swiper-slide mil-slide-25">

                            <a href="publication.html" class="mil-card mil-card-sm">
                                <div class="mil-cover-frame">
                                <Image src={BlogImage1} alt="project" />

                                </div>
                                <div class="mil-description">
                                    <div class="mil-card-title">
                                        <h4 class="mil-mb-20">Easy & Most Powerful Server Platform.</h4>
                                        <h6>by: <span class="mil-accent">Jane Meldrum</span></h6>
                                    </div>
                                    <div class="mil-card-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div class="swiper-slide mil-slide-50">

                            <a href="publication.html" class="mil-card">
                                <div class="mil-cover-frame">
                                <Image src={BlogImage1} alt="project" />

                                </div>
                                <div class="mil-description">
                                    <div class="mil-card-title">
                                        <h4 class="mil-mb-20">Easy & Most Powerful Server Platform.</h4>
                                        <h6>by: <span class="mil-accent">Jane Meldrum</span></h6>
                                    </div>
                                    <div class="mil-card-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
                <Row className='align-items-center'>
                    <Col className='col-12'>
                    <a href="blog.html" class="mil-link"><span>View More Insights</span><i class="fas fa-arrow-right"></i></a>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default LatestThinking