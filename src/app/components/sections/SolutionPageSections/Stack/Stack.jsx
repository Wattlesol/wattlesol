import ExperienceContactFooter from '@/app/components/common/ExperienceContactFooter'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Stack = () => {
    return (
        <>
        <section class="mil-p-120-90">
            <div class="mil-deco" style={{ top: 0, right: "15%" }}></div>
            <Container>
                <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Our Tools</span>
                <h2 class="mil-mb-90">Development <span class="mil-accent">Tech Stack</span></h2>
                <Row className='mil-grid-lines'>
                    <Col lg={3} md={4} sm={6}>
                        <div class="mil-item-card">
                            <h6>Flutter</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div class="mil-item-card">
                            <h6>React Native</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div class="mil-item-card">
                            <h6>Kotlin</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div class="mil-item-card">
                            <h6>Swift</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div class="mil-item-card">
                            <h6>Next Js</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div class="mil-item-card">
                            <h6>MEAN</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div class="mil-item-card">
                            <h6>MERN</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <div class="mil-item-card">
                            <h6>Solidity</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Stack