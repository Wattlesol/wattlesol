import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mdImage10 from "@/app/public/global/img/icons/md/10.svg"
import Image from 'next/image'
const Value = () => {
  return (
    <section className="mil-deep-bg mil-p-120-60">
            <div className="mil-deco" style={{top: 0, right: "25%"}}></div>
            <Container>
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">For Enterprise</span>
            <h2 className="mil-mb-120">We Live by <span className="mil-accent">Powerful</span> Values</h2>
            <Row>
                <Col md={6} xl={4}>
                <div className="mil-icon-box-2 mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                <Image src={mdImage10} alt="icon"/>
                            </div>
                            <div className="mil-box-text">
                                <h4 className="mil-mb-30">We Are</h4>
                                <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                </Col>
                <Col md={6} xl={4}>
                <div className="mil-icon-box-2 mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                <Image src={mdImage10} alt="icon"/>
                            </div>
                            <div className="mil-box-text">
                                <h4 className="mil-mb-30">We Are</h4>
                                <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                </Col>
                <Col md={6} xl={4}>
                <div className="mil-icon-box-2 mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                <Image src={mdImage10} alt="icon"/>
                            </div>
                            <div className="mil-box-text">
                                <h4 className="mil-mb-30">We Are</h4>
                                <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                </Col>
                <Col md={6} xl={4}>
                <div className="mil-icon-box-2 mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                <Image src={mdImage10} alt="icon"/>
                            </div>
                            <div className="mil-box-text">
                                <h4 className="mil-mb-30">We Are</h4>
                                <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                </Col>
                <Col md={6} xl={4}>
                <div className="mil-icon-box-2 mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                <Image src={mdImage10} alt="icon"/>
                            </div>
                            <div className="mil-box-text">
                                <h4 className="mil-mb-30">We Are</h4>
                                <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                </Col>
                <Col md={6} xl={4}>
                <div className="mil-icon-box-2 mil-mb-60">
                            <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                                <Image src={mdImage10} alt="icon"/>
                            </div>
                            <div className="mil-box-text">
                                <h4 className="mil-mb-30">We Are</h4>
                                <p className="mil-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                </Col>
            </Row>
            </Container>

</section>
  )
}

export default Value