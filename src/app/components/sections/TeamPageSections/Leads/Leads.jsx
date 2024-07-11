import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MdImage1 from "@/app/public/global/img/icons/md/5.svg"
const Leads = () => {
    return (
        <section class="mil-icon-boxes mil-p-120-60">
            <Container>
                <Row className='align-items-center justify-content-between mil-mb-90'>
                    <Col xl={6}>
                        <h2>Values that <span class="mil-accent">Lead Us</span></h2>

                    </Col>
                    <Col xl={5}>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </Col>

                </Row>
                <Row>
                    <Col md={6} xl={3}>
                    <div class="mil-icon-box mil-center mil-mb-60">
                            <div class="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={MdImage1} alt="icon"/>
                            </div>
                            <h5 class="mil-mb-20"><span class="mil-accent">01.</span>&nbsp; Productivity</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col md={6} xl={3}>
                    <div class="mil-icon-box mil-center mil-mb-60">
                            <div class="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={MdImage1} alt="icon"/>
                            </div>
                            <h5 class="mil-mb-20"><span class="mil-accent">01.</span>&nbsp; Productivity</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col md={6} xl={3}>
                    <div class="mil-icon-box mil-center mil-mb-60">
                            <div class="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={MdImage1} alt="icon"/>
                            </div>
                            <h5 class="mil-mb-20"><span class="mil-accent">01.</span>&nbsp; Productivity</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col md={6} xl={3}>
                    <div class="mil-icon-box mil-center mil-mb-60">
                            <div class="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={MdImage1} alt="icon"/>
                            </div>
                            <h5 class="mil-mb-20"><span class="mil-accent">01.</span>&nbsp; Productivity</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Leads