import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ExperienceContactFooter = () => {
    return (
        <Row className='align-items-center mil-p-120-60 mil-dark-bg'>
            <Col lg={6} className='mil-mb-15'>
                <h3 class="mil-light mil-mb-15">Join The <span class="mil-accent">ITSulu</span> Experience</h3>
                <p class="mil-light-soft">Duis autem vel eum iriure dolor in hendrerit in vulputate.</p>
            </Col>
            <Col lg={6} xl={6} className='mil-mb-60'>
                <form class="mil-subscribe-form">
                    <input type="text" placeholder="Your email address" />
                    <button type="submit" class="mil-button mil-accent-bg">Subscribe Now</button>
                </form>
            </Col>

        </Row>
    )
}

export default ExperienceContactFooter