import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FaceImage1 from "@/app/public/global/img/faces/1.jpg"
const Main = () => {
    return (
        <section className="mil-team mil-p-120-60">
            <Container>
            <h3 className="mil-text-center mil-mb-120">It is a long established fact that a <span className="mil-accent">reader will be <br/>distracted</span> by the readable content.</h3>
            <Row>
                <Col sm={6} lg={4}>
                <a href="team-single.html" className="mil-team-card mil-mb-60">
                            <div className="mil-image-frame mil-mb-30">
                                <Image src={FaceImage1} alt="Team member"/>
                                <div className="mil-team-circle"></div>
                            </div>
                            <h4 className="mil-mb-10">Andrew Kazantzis</h4>
                            <p>CEO ITSulu</p>
                        </a>
                </Col>
                <Col sm={6} lg={4}>
                <a href="team-single.html" className="mil-team-card mil-mb-60">
                            <div className="mil-image-frame mil-mb-30">
                                <Image src={FaceImage1} alt="Team member"/>
                                <div className="mil-team-circle"></div>
                            </div>
                            <h4 className="mil-mb-10">Andrew Kazantzis</h4>
                            <p>CEO ITSulu</p>
                        </a>
                </Col>
                <Col sm={6} lg={4}>
                <a href="team-single.html" className="mil-team-card mil-mb-60">
                            <div className="mil-image-frame mil-mb-30">
                                <Image src={FaceImage1} alt="Team member"/>
                                <div className="mil-team-circle"></div>
                            </div>
                            <h4 className="mil-mb-10">Andrew Kazantzis</h4>
                            <p>CEO ITSulu</p>
                        </a>
                </Col>
                <Col sm={6} lg={4}>
                <a href="team-single.html" className="mil-team-card mil-mb-60">
                            <div className="mil-image-frame mil-mb-30">
                                <Image src={FaceImage1} alt="Team member"/>
                                <div className="mil-team-circle"></div>
                            </div>
                            <h4 className="mil-mb-10">Andrew Kazantzis</h4>
                            <p>CEO ITSulu</p>
                        </a>
                </Col>
                <Col sm={6} lg={4}>
                <a href="team-single.html" className="mil-team-card mil-mb-60">
                            <div className="mil-image-frame mil-mb-30">
                                <Image src={FaceImage1} alt="Team member"/>
                                <div className="mil-team-circle"></div>
                            </div>
                            <h4 className="mil-mb-10">Andrew Kazantzis</h4>
                            <p>CEO ITSulu</p>
                        </a>
                </Col>
                <Col sm={6} lg={4}>
                <a href="team-single.html" className="mil-team-card mil-mb-60">
                            <div className="mil-image-frame mil-mb-30">
                                <Image src={FaceImage1} alt="Team member"/>
                                <div className="mil-team-circle"></div>
                            </div>
                            <h4 className="mil-mb-10">Andrew Kazantzis</h4>
                            <p>CEO ITSulu</p>
                        </a>
                </Col>

            </Row>
            </Container>
        </section>
    )
}

export default Main