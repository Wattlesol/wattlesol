import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FaceImage1 from "@/app/public/global/img/faces/t2.png"
import Image from 'next/image'
const Mission = () => {
    return (
        <section class="mil-deep-bg mil-p-120-60">
            <div class="mil-deco" style={{ top: 0, right: "15%" }}></div>
            <Container>
                <Row>
                    <Col lg={5} className='mil-mb-60'>
                        <div class="mil-circle-illustration">
                            <div class="mil-circle-bg"></div>
                            <div class="mil-image-frame">
                                <Image src={FaceImage1} alt="img"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mil-mb-60'>
                    <span class="mil-suptitle mil-suptitle-2 mil-mb-30">IT Enterprise</span>
                        <h2 class="mil-mb-50">Our Mission</h2>

                        <p class="mil-mb-50">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. There are many variations of passages majority.</p>

                        <ul class="mil-simple-list">
                            <li>Accelerate innovation.</li>
                            <li>With world class tech teams.</li>
                            <li>Our all service offerings to enhance.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>



        </section>
    )
}

export default Mission