import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <section class="mil-contact mil-gradient-bg mil-p-120-0">
            <div class="mil-deco mil-deco-accent" style={{
                top: 0,
                right: 0
            }}></div>
            <Container>
                <h2 class="mil-light mil-mb-90">Contact <span class="mil-accent">Us</span></h2>
                <form id="formFeedback" method="post" enctype="multipart/form-data">
                <Row>
                    <Col lg={6}>
                        <div class="mil-input-frame mil-mb-30">
                                <label><span class="mil-light">Name</span><span class="mil-accent">Required</span></label>
                                <input type="text" name="name" required placeholder="Enter Your Name Here"/>
                            </div>
                            <div class="mil-input-frame mil-mb-30">
                                <label><span class="mil-light">Email Adress</span><span class="mil-accent">Required</span></label>
                                <input type="email" name="email" required id="email" placeholder="Your Email"/>
                            </div>
                            <div class="mil-input-frame mil-mb-60">
                                <label><span class="mil-light">Phone</span><span class="mil-light-soft">Optional</span></label>
                                <input type="tel" name="phone" placeholder="Your Phone"/>
                            </div>
                            <div class="mil-attach-frame mil-mb-60">
                                <i class="fas fa-paperclip"></i>
                                <label class="mil-custom-file-input">
                                    <span>Attach your file</span>
                                    <input type="file" name="userfile" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                                    text/plain, application/pdf, image/*" id="mil-file-input"/>
                                </label>
                                <p class="mil-text-sm mil-light-soft">up to 20MB</p>
                            </div>
                    </Col>
                    <Col lg={6}>
                    <div class="mil-input-frame mil-mb-30">
                                <label><span class="mil-light">Your Message</span><span class="mil-accent">Required</span></label>
                                <textarea placeholder="Your Message" name="message"></textarea>
                            </div>
                            <p class="mil-text-sm mil-light-soft mil-mb-15">We will process your personal information in accordance with our Privacy Policy.</p>
                            <div class="mil-checbox-frame mil-mb-60">
                                <input class="mil-checkbox" id="checkbox-1" type="checkbox" name="agree" value="1" required/>
                                <label for="checkbox-1" class="mil-text-sm mil-light">I would like to be contacted with news and updates about your <a href="#." class="mil-accent">events and services</a></label>
                            </div>
                    </Col>
                    <Col className='col-12'>

                    <button type="submit" class="mil-button mil-accent-bg mil-fw"><span>Send Message Now</span></button>
                    </Col>

                </Row>
                <div class="alert-success" style={{display: "none"}}><h5>Thanks, your message is sent successfully.</h5></div>
                <div class="alert-error" style={{display: "none"}}><h5>Error! Message could not be sent.</h5></div>
                </form>
            </Container>


        </section>
    )
}

export default Contact