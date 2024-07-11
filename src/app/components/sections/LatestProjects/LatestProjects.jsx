import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Project1 from "@/app/public/global/img/projects/1.jpg"
import Project2 from "@/app/public/global/img/projects/2.jpg"
import Project3 from "@/app/public/global/img/projects/3.jpg"
import Project4 from "@/app/public/global/img/projects/4.jpg"
import Image from 'next/image'
const LatestProjects = () => {
  return (
    <section className="mil-works mil-p-120-90">
                <div className="mil-deco" style={{
                    top: 0,
                    right: "40%"
                }}>
                    </div>
                <Container>
                    <Row className='align-items-center mil-mb-60-adapt'>
                    <Col md={6} xl={6}>
                    <h2 className="mil-mb-30">Latest Projects</h2>

                    </Col>
                    <Col md={6} xl={6}>
                    <div className="mil-adaptive-right">
                            <div className="mil-slider-nav mil-mb-30">
                                <div className="mil-slider-btn-prev mil-works-prev"><i className="fas fa-arrow-left"></i><span className="mil-h6">Prev</span></div>
                                <div className="mil-slider-btn-next mil-works-next"><span className="mil-h6">Next</span><i className="fas fa-arrow-right"></i></div>
                            </div>
                        </div>

                    </Col>
                    </Row>
                    <div className="swiper-container mil-works-slider mil-mb-90">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">


                    <a href="project.html" className="mil-card">
                                <div className="mil-cover-frame">
                                    <Image src={Project2} alt="project"/>
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
                        <Col md={6} xl={6}>
                        <a href="portfolio.html" className="mil-link mil-mb-30"><span>View All Cases</span><i className="fas fa-arrow-right"></i></a>
                        </Col>
                        <Col md={6} xl={6}>

                        <div className="mil-adaptive-right">
                            <a href="contact.html" className="mil-button mil-border mil-mb-30"><span>Get Started</span></a>
                        </div>
                        </Col>

                    </Row>


                </Container>
            </section>
  )
}

export default LatestProjects