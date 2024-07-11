import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CallToSection = () => {
    return (
        <section className="mil-p-120-60">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={12} xl={6}>
                        <h4 className="mil-mb-60">Lorem ipsum dolor sit amet, <span className="mil-accent">consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labor aliqua.</h4>
                    </Col>
                    <Col lg={12} xl={6}>
                        <div className="mil-adaptive-right">
                            <a href="#." className="mil-button mil-border mil-mr-15 mil-mb-30"><span>Talk To an Expert</span></a>
                            <a href="#." className="mil-button-with-label mil-mb-60">
                                <div className="mil-button mil-border mil-icon-button"><span><i className="fas fa-play"></i></span></div><span className="mil-dark">Watch Video</span>
                            </a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default CallToSection