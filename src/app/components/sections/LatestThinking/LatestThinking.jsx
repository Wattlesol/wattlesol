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
        <section className="mil-blog mil-p-120-120">
            <div className="mil-deco" style={{ top: 0, right: "30%" }}></div>
            <Container>
                <Row className='align-items-center mil-mb-90'>
                    <Col md={6} xl={6}>
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Latest News</span>
                        <h2>Latest Thinking</h2>
                    </Col>
                    <Col md={6} xl={6}>
                        <div className="mil-adaptive-right mil-mt-60-adapt">
                            <div className="mil-slider-nav">
                                <div className="mil-slider-btn-prev mil-blog-prev"><i className="fas fa-arrow-left"></i><span className="mil-h6">Prev</span></div>
                                <div className="mil-slider-btn-next mil-blog-next"><span className="mil-h6">Next</span><i className="fas fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <div className="swiper-container mil-blog-slider mil-mb-90">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide mil-slide-50">
                            <a href="publication.html" className="mil-card">
                                <div className="mil-cover-frame">
                                    <Image src={BlogImage1} alt="project" />
                                </div>
                                <div className="mil-description">
                                    <div className="mil-card-title">
                                        <h4 className="mil-mb-20">Easy & Most Powerful Server Platform.</h4>
                                        <h6>by: <span className="mil-accent">Jane Meldrum</span></h6>
                                    </div>
                                    <div className="mil-card-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide mil-slide-25">

                            <a href="publication.html" className="mil-card mil-card-sm mil-reverse-sm">
                                <div className="mil-description">
                                    <div className="mil-card-title">
                                        <h4 className="mil-mb-20">Easy & Most Powerful Server Platform.</h4>
                                        <h6>by: <span className="mil-accent">Jane Meldrum</span></h6>
                                    </div>
                                    <div className="mil-card-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="mil-cover-frame">
                                <Image src={BlogImage2} alt="project" />

                                </div>
                            </a>

                        </div>
                        <div className="swiper-slide mil-slide-25">

                            <a href="publication.html" className="mil-card mil-card-sm">
                                <div className="mil-cover-frame">
                                <Image src={BlogImage1} alt="project" />

                                </div>
                                <div className="mil-description">
                                    <div className="mil-card-title">
                                        <h4 className="mil-mb-20">Easy & Most Powerful Server Platform.</h4>
                                        <h6>by: <span className="mil-accent">Jane Meldrum</span></h6>
                                    </div>
                                    <div className="mil-card-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="swiper-slide mil-slide-50">

                            <a href="publication.html" className="mil-card">
                                <div className="mil-cover-frame">
                                <Image src={BlogImage1} alt="project" />

                                </div>
                                <div className="mil-description">
                                    <div className="mil-card-title">
                                        <h4 className="mil-mb-20">Easy & Most Powerful Server Platform.</h4>
                                        <h6>by: <span className="mil-accent">Jane Meldrum</span></h6>
                                    </div>
                                    <div className="mil-card-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
                <Row className='align-items-center'>
                    <Col className='col-12'>
                    <a href="blog.html" className="mil-link"><span>View More Insights</span><i className="fas fa-arrow-right"></i></a>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default LatestThinking