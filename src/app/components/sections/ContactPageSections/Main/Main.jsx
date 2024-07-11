import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Main = () => {
    return (
        <section class="mil-contact mil-p-120-0">
            <Container>
                <Row className=' justify-content-between'>
                    <Col lg={8} xl={8} className='mil-mb-120'>
                        <form id="formContact" method="post" enctype="multipart/form-data">
                            <h4 class="mil-mb-60"><span class="mil-accent">01.</span> Tell Us About Yourself</h4>
                            <Row>
                                <Col lg={6}>
                                    <div class="mil-input-frame mil-dark-input mil-mb-30">
                                        <label class="mil-h6 mil-dark"><span>First Name</span></label>
                                        <input type="text" name="first_name" required placeholder="John" />
                                    </div>
                                </Col>
                                <Col lg={6}>

                                    <div class="mil-input-frame mil-dark-input mil-mb-30">
                                        <label class="mil-h6"><span>Last Name</span></label>
                                        <input type="text" name="last_name" required placeholder="Jones" />
                                    </div>
                                </Col>
                                <Col lg={6}>


                                <div class="mil-input-frame mil-dark-input mil-mb-30">
                                        <label class="mil-h6"><span>Email Address</span></label>
                                        <input type="email" name="email" required placeholder="doe@mydomain.com"/>
                                    </div>
                                </Col>
                                <Col lg={6}>


                                <div class="mil-input-frame mil-dark-input mil-mb-30">
                                        <label class="mil-h6"><span>Phone</span></label>
                                        <input type="tel" name="phone" placeholder="Enter your phone number"/>
                                    </div>

                                </Col>
                                <Col lg={6}>


                              
                                <div class="mil-input-frame mil-dark-input mil-mb-30">
                                        <label class="mil-h6 mil-dark"><span>Company</span></label>
                                        <input type="text" name="company" placeholder="Your company name"/>
                                    </div>

                                </Col>
                                <Col lg={6}>


                              
                                <div class="mil-input-frame mil-dark-input mil-mb-30">
                                        <label class="mil-h6 mil-dark"><span>Role</span></label>
                                        <input type="text" name="role" placeholder="Your role"/>
                                    </div>

                                </Col>
                            </Row>
                            <h4 class="mil-mb-60"><span class="mil-accent">02.</span> What Can We Help You With?</h4>
                            <Row>
                                <Col lg={6} className='mil-mb-30'>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Main