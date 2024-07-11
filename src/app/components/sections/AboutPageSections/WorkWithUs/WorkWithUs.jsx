import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mdImage6 from "@/app/public/global/img/icons/md/6.svg"
import Image from 'next/image'
const WorkWithUs = () => {
    return (
        <section className="mil-p-120-120">
            <Container>
                <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Discover Our Company</span>
                <h2 className="mil-mb-120">Why Work With Us</h2>

                <div className="mil-divider"></div>
                <div className="mil-line-icon-box">
                    <Row className="align-items-center">
                        <Col xl={2}>
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={mdImage6} alt="icon" />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <h4 className="mil-mb-30">Top Expertise</h4>

                        </Col>
                        <Col xl={6}>
                            <p className="mil-box-text mil-mb-30">Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>
                        </Col>

                    </Row>
                </div>
                <div className="mil-divider"></div>
                <div className="mil-line-icon-box">
                    <Row className="align-items-center">
                        <Col xl={2}>
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={mdImage6} alt="icon" />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <h4 className="mil-mb-30">Top Expertise</h4>

                        </Col>
                        <Col xl={6}>
                            <p className="mil-box-text mil-mb-30">Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>
                        </Col>

                    </Row>
                </div>
                <div className="mil-divider"></div>
                <div className="mil-line-icon-box">
                    <Row className="align-items-center">
                        <Col xl={2}>
                            <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                                <Image src={mdImage6} alt="icon" />
                            </div>
                        </Col>
                        <Col xl={4}>
                            <h4 className="mil-mb-30">Top Expertise</h4>

                        </Col>
                        <Col xl={6}>
                            <p className="mil-box-text mil-mb-30">Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>
                        </Col>

                    </Row>
                </div>
                <div className="mil-divider"></div>



            </Container>
        </section>
    )
}

export default WorkWithUs