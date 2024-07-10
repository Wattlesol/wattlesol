import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CallToSection = () => {
    return (
        <section class="mil-p-120-60">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={12} xl={6}>
                        <h4 class="mil-mb-60">Lorem ipsum dolor sit amet, <span class="mil-accent">consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labor aliqua.</h4>
                    </Col>
                    <Col lg={12} xl={6}>
                        <div class="mil-adaptive-right">
                            <a href="#." class="mil-button mil-border mil-mr-15 mil-mb-30"><span>Talk To an Expert</span></a>
                            <a href="#." class="mil-button-with-label mil-mb-60">
                                <div class="mil-button mil-border mil-icon-button"><span><i class="fas fa-play"></i></span></div><span class="mil-dark">Watch Video</span>
                            </a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default CallToSection