import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
    return (
        <section class="mil-p-120-60">
            <div class="mil-deco" style={{ top: 0, left: "25%" }}></div>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={5}>
                        <div class="mil-h1">8<span class="mil-accent">+</span></div>
                        <h6 class="mil-mb-60">Years Experience</h6>

                        <h2 class="mil-mb-60">We Run All Kinds of IT Services That Vow Your Success</h2>
                    </Col>
                    <Col lg={6}>
                        <h3 class="mil-mb-60">Accelerate <span class="mil-accent">Innovation</span> with world class tech teams We’ll match you to an entire <span class="mil-accent">Remote Technology</span></h3>
                        <Row>
                            <Col lg={6}>
                                <h6 class="mil-mb-30"><span class="mil-accent">16+</span>&nbsp; Software Development</h6>

                                <div class="mil-divider mil-divider-left mil-mb-60"></div>
                                </Col>
                                
                            <Col lg={6}>
                                <h6 class="mil-mb-30"><span class="mil-accent">3+</span>&nbsp; Years Client Engagement</h6>

                                <div class="mil-divider mil-divider-left mil-mb-60"></div>
                                </Col>
                                
                            <Col lg={6}>
                                <h6 class="mil-mb-30"><span class="mil-accent">360+</span>&nbsp; App Development</h6>

                                <div class="mil-divider mil-divider-left mil-mb-60"></div>
                                </Col>
                            <Col lg={6}>
                                <h6 class="mil-mb-30"><span class="mil-accent">520+</span>&nbsp; Web Development</h6>

                                <div class="mil-divider mil-divider-left mil-mb-60"></div>
                                </Col>
                                
                        </Row>

                    </Col>
                </Row>
            </Container>


        </section>
    )
}

export default Counter