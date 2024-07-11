import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MdImage1 from "@/app/public/global/img/icons/md/2.svg"
import FaceImage2 from "@/app/public/global/img/faces/t3.png"
const Main = () => {
    return (
        <section class="mil-deep-bg mil-p-120-0">
            <Container>
                <div class="swiper-container mil-tabs-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" data-hash="tab1">
                            <Row className='justify-content-between align-items-center' data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                            <Col lg={7}>

                            <div class="mil-hori-box mil-mb-60">
                                        <div class="mil-mr-15">
                                            <div class="mil-icon-frame mil-icon-frame-md">
                                                <Image src={MdImage1} alt="icon"/>
                                            </div>
                                        </div>
                                        <h5>Machine Learning</h5>
                                    </div>
                                    <Row className='mil-mb-60'>
                                        <Col lg={6}>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                        </Col>
                                        <Col lg={6}>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                        </Col>
                                    </Row>
                                    <a href="#." class="mil-link mil-mb-60"><span>See More</span><i class="fas fa-arrow-right"></i></a>
                            </Col>
                            <Col lg={4}>
                            <div class="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                        <div class="mil-circle-bg"></div>
                                        <div class="mil-image-frame">
                                            <Image src={FaceImage2} alt="img"/>
                                        </div>
                                    </div></Col>
                            </Row>
                        </div>
                        <div class="swiper-slide" data-hash="tab2">
                            <Row className='justify-content-between align-items-center' data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                            <Col lg={7}>

                            <div class="mil-hori-box mil-mb-60">
                                        <div class="mil-mr-15">
                                            <div class="mil-icon-frame mil-icon-frame-md">
                                                <Image src={MdImage1} alt="icon"/>
                                            </div>
                                        </div>
                                        <h5>Machine Learning</h5>
                                    </div>
                                    <Row className='mil-mb-60'>
                                        <Col lg={6}>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                        </Col>
                                        <Col lg={6}>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                        </Col>
                                    </Row>
                                    <a href="#." class="mil-link mil-mb-60"><span>See More</span><i class="fas fa-arrow-right"></i></a>
                            </Col>
                            <Col lg={4}>
                            <div class="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                        <div class="mil-circle-bg"></div>
                                        <div class="mil-image-frame">
                                            <Image src={FaceImage2} alt="img"/>
                                        </div>
                                    </div></Col>
                            </Row>
                        </div>
                        <div class="swiper-slide" data-hash="tab3">
                            <Row className='justify-content-between align-items-center' data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                            <Col lg={7}>

                            <div class="mil-hori-box mil-mb-60">
                                        <div class="mil-mr-15">
                                            <div class="mil-icon-frame mil-icon-frame-md">
                                                <Image src={MdImage1} alt="icon"/>
                                            </div>
                                        </div>
                                        <h5>Machine Learning</h5>
                                    </div>
                                    <Row className='mil-mb-60'>
                                        <Col lg={6}>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                        </Col>
                                        <Col lg={6}>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                        </Col>
                                    </Row>
                                    <a href="#." class="mil-link mil-mb-60"><span>See More</span><i class="fas fa-arrow-right"></i></a>
                            </Col>
                            <Col lg={4}>
                            <div class="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                        <div class="mil-circle-bg"></div>
                                        <div class="mil-image-frame">
                                            <Image src={FaceImage2} alt="img"/>
                                        </div>
                                    </div></Col>
                            </Row>
                        </div>
                        <div class="swiper-slide" data-hash="tab4">
                            <Row className='justify-content-between align-items-center' data-swiper-parallax-y="-100" data-swiper-parallax-opacity="0">
                            <Col lg={7}>

                            <div class="mil-hori-box mil-mb-60">
                                        <div class="mil-mr-15">
                                            <div class="mil-icon-frame mil-icon-frame-md">
                                                <Image src={MdImage1} alt="icon"/>
                                            </div>
                                        </div>
                                        <h5>Machine Learning</h5>
                                    </div>
                                    <Row className='mil-mb-60'>
                                        <Col lg={6}>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                        </Col>
                                        <Col lg={6}>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                        </Col>
                                    </Row>
                                    <a href="#." class="mil-link mil-mb-60"><span>See More</span><i class="fas fa-arrow-right"></i></a>
                            </Col>
                            <Col lg={4}>
                            <div class="mil-circle-illustration mil-with-dots mil-mb-60" data-swiper-parallax-scale=".8">
                                        <div class="mil-circle-bg"></div>
                                        <div class="mil-image-frame">
                                            <Image src={FaceImage2} alt="img"/>
                                        </div>
                                    </div></Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div class="mil-tab-buttons mil-mt-60-adapt">
                    <a href="#tab1" class="mil-active"><span>Machine Learning</span></a>
                    <a href="#tab2"><span>Deep Learning</span></a>
                    <a href="#tab3"><span>Natural Language</span></a>
                    <a href="#tab4"><span>Computer Vision</span></a>
                </div>
            </Container>
        </section>
    )
}

export default Main