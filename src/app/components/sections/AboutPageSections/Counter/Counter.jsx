import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
    return (
        <section className="mil-p-120-60">
            <div className="mil-deco" style={{ top: 0, left: "25%" }}></div>
            <Container>
                <Row className='justify-content-between'>
                    <Col lg={5}>
                        <div className="mil-h1">8<span className="mil-accent">+</span></div>
                        <h6 className="mil-mb-60">Years Experience</h6>

                        <h2 className="mil-mb-60">We Run All Kinds of IT Services That Vow Your Success</h2>
                    </Col>
                    <Col lg={6}>
                        <h3 className="mil-mb-60">Accelerate <span className="mil-accent">Innovation</span> with world class tech teams We’ll match you to an entire <span className="mil-accent">Remote Technology</span></h3>
                        <Row>
                            <Col lg={6}>
                                <h6 className="mil-mb-30"><span className="mil-accent">16+</span>&nbsp; Software Development</h6>

                                <div className="mil-divider mil-divider-left mil-mb-60"></div>
                                </Col>
                                
                            <Col lg={6}>
                                <h6 className="mil-mb-30"><span className="mil-accent">3+</span>&nbsp; Years Client Engagement</h6>

                                <div className="mil-divider mil-divider-left mil-mb-60"></div>
                                </Col>
                                
                            <Col lg={6}>
                                <h6 className="mil-mb-30"><span className="mil-accent">360+</span>&nbsp; App Development</h6>

                                <div className="mil-divider mil-divider-left mil-mb-60"></div>
                                </Col>
                            <Col lg={6}>
                                <h6 className="mil-mb-30"><span className="mil-accent">520+</span>&nbsp; Web Development</h6>

                                <div className="mil-divider mil-divider-left mil-mb-60"></div>
                                </Col>
                                
                        </Row>

                    </Col>
                </Row>
            </Container>


        </section>
    )
}

export default Counter