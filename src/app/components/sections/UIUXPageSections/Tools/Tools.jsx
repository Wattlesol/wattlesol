import ExperienceContactFooter from '@/app/components/common/ExperienceContactFooter'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Tools = () => {
    return (
        <>
            <section class="mil-deep-bg mil-p-120-90">
                <div class="mil-deco" style={{ top: 0, right: "15%" }}></div>
                <Container>
                    <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Our Tools</span>
                    <h2 class="mil-mb-90">Tools We <span className="mil-accent">Use</span>  </h2>
                    <Row className='mil-grid-lines'>
                        <Col lg={3} md={4} sm={6}>
                            <div class="mil-item-card">
                                <h6>Adobe XD</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div class="mil-item-card">
                                <h6>Figma</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div class="mil-item-card">
                                <h6>Sketch</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div class="mil-item-card">
                                <h6>Adobe Photoshop</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div class="mil-item-card">
                                <h6>InVision</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div class="mil-item-card">
                                <h6>Adobe Illustrator</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div class="mil-item-card">
                                <h6>Marvel</h6>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div class="mil-item-card">
                                <h6>Proto.io</h6>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Tools