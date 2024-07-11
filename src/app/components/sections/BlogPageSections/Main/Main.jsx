import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image1 from "@/app/public/global/img/blog/1.jpg"
import FaceImage1 from "@/app/public/global/img/faces/1.jpg"
import BlogImage1 from "@/app/public/global/img/blog/6.jpg"
const Main = () => {
  return (
    <section class="mil-blog mil-p-120-0">
        <Container>
        <Row className='justify-content-between'>
            <Col lg={8} xl={8} className='mil-mb-120'>
            <a href="publication.html" class="mil-card mil-mb-60">
                            <div class="mil-cover-frame">
                                <Image src={Image1} alt="project"/>
                            </div>
                            <div class="mil-description">
                                <div class="mil-card-title">
                                    <ul class="mil-dot-list mil-text-sm mil-mb-15">
                                        <li>Management</li>
                                        <li>29 Oct. 2023</li>
                                    </ul>
                                    <h4>Easy & Most Powerful Server Platform.</h4>
                                </div>
                                <div class="mil-card-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                        </a>
                        <a href="publication.html" class="mil-card mil-mb-60">
                            <div class="mil-cover-frame">
                                <Image src={Image1} alt="project"/>
                            </div>
                            <div class="mil-description">
                                <div class="mil-card-title">
                                    <ul class="mil-dot-list mil-text-sm mil-mb-15">
                                        <li>Management</li>
                                        <li>29 Oct. 2023</li>
                                    </ul>
                                    <h4>Easy & Most Powerful Server Platform.</h4>
                                </div>
                                <div class="mil-card-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>
                        </a>
                        <div class="mil-divider mil-mb-60"></div>
                        <div class="mil-pagination mil-hidden-arrows">
                            <div class="mil-slider-nav">
                                <div class="mil-slider-btn-prev mil-blog-prev"><i class="fas fa-arrow-left"></i><span class="mil-h6">Prev</span></div>
                            </div>
                            <ul class="mil-pagination-numbers">
                                <li class="mil-active"><a href="#.">1</a></li>
                                <li><a href="#.">2</a></li>
                                <li><a href="#.">3</a></li>
                            </ul>
                            <div class="mil-slider-nav">
                                <div class="mil-slider-btn-next mil-blog-next"><span class="mil-h6">Next</span><i class="fas fa-arrow-right"></i></div>
                            </div>
                        </div>

            </Col>
            <Col lg={4} xl={3} className='mil-mb-120'>
            <div class="mil-mb-60">
                            <h5 class="mil-list-title mil-mb-30">About ITSulu</h5>
                            <p class="mil-mb-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                            <a href="team-single.html" class="mil-post-sm mil-mb-15">
                                <div class="mil-cover-frame">
                                    <Image src={FaceImage1} alt="cover"/></div>
                                <div class="mil-description">
                                    <h4 class="mil-font-3 mil-accent">Jane Meldrum</h4>
                                    <p class="mil-text-sm">CEO & Co-Founder</p>
                                </div>
                            </a>
                        </div>
                        <div class="mil-divider mil-mb-60"></div>
                        <form class="mil-sidebar-input-frame mil-mb-60">
                            <input type="text" class="mil-sidebar-input" placeholder="Search here..."/>
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </form>
                        <div class="mil-divider mil-mb-60"></div>
                        <div class="mil-mb-60">
                            <h5 class="mil-list-title mil-mb-30">Recent Posts</h5>
                            <a href="publication.html" class="mil-post-sm mil-mb-15">
                                <div class="mil-cover-frame"><Image src={BlogImage1} alt="cover"/></div>
                                <div class="mil-description">
                                    <h6>The World’s Fastest 2 Qubit Qate</h6>
                                </div>
                            </a>
                        
                        </div>
                         <div class="mil-divider mil-mb-60"></div>
                        <div class="mil-mb-60">
                            <h5 class="mil-list-title mil-mb-30">Categories</h5>
                            <ul class="mil-hover-link-list">
                                <li>
                                    <a href="#.">Business</a>
                                </li>
                                <li>
                                    <a href="#.">Design</a>
                                </li>
                                <li>
                                    <a href="#.">Development</a>
                                </li>
                                <li>
                                    <a href="#.">Management</a>
                                </li>
                                <li>
                                    <a href="#.">Software</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mil-divider mil-mb-60"></div>
                        <div class="mil-mb-60">
                            <h5 class="mil-list-title mil-mb-30">Tags</h5>
                            <ul class="mil-tags">
                                <li><a href="#.">Business</a></li>
                                <li><a href="#.">Design</a></li>
                                <li><a href="#.">General</a></li>
                                <li><a href="#.">Development</a></li>
                                <li><a href="#.">Learning</a></li>
                            </ul>
                        </div>
                        <div class="mil-divider mil-mb-60"></div>
                        <div class="mil-mb-60">
                            <h5 class="mil-list-title mil-mb-30">Newsletter</h5>
                            <form class="mil-sidebar-input-frame">
                                <input type="text" class="mil-sidebar-input" placeholder="Your email address"/>
                                <button type="submit"><i class="fas fa-arrow-right"></i></button>
                            </form>
                        </div>
                        <div class="mil-divider mil-mb-60"></div>
                        <h5 class="mil-list-title mil-mb-30">Contact us</h5>
                        <p class="mil-mb-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <a href="contact.html" class="mil-link"><span>Send</span><i class="fas fa-arrow-right"></i></a>

</Col>


        </Row>
        </Container>
</section>
  )
}

export default Main