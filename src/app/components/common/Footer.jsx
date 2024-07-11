import React from 'react'
import FooterImage1 from "@/app/public/global/img/deco/map.png"
import Logo from "@/app/public/global/img/logo/logo-light.png"
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Contact from './Contact'
const Footer = () => {
  return (
    <>

    <footer class="mil-dark-bg">
      <Image src={FooterImage1} alt="background" class="mil-footer-bg" />
      <Container>
        <div class="mil-footer-content mil-p-120-90">
          <Row className='justify-content-between align-items-center'>
            <Col xl={4} className='mil-mb-30'>
              <Image src={Logo} alt="" class="mil-logo mil-mb-30" style={{ width: "140px" }} />
              <p class="mil-light-soft mil-mb-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <a href="#." class="mil-app-btn mil-mb-5">
                <i class="fab fa-google-play"></i>
                <div class="mil-app-text">
                  <span class="mil-accent mil-text-sm">Available on the</span>
                  <div class="mil-h6">Google Play</div>
                </div>
              </a>
              <a href="#." class="mil-app-btn">
                <i class="fab fa-apple"></i>
                <div class="mil-app-text">
                  <span class="mil-accent mil-text-sm">Download on the</span>
                  <div class="mil-h6">App Store</div>
                </div>
              </a>
            </Col>
            <Col xl={7} className='mil-mt-60-adapt'>
              <Row>
                <Col lg={7} className='mil-mb-30'>
                  <h3 class="mil-light mil-up-font mil-mb-30">Join The <span class="mil-accent">ITSulu</span> <br />Experience</h3>
                  <p class="mil-light-soft">Lorem ipsum dolor sit amet, consectetuer<br /> adipiscing elit, sed diam nonummy.</p>
                </Col>
                <Col lg={5} className='mil-mb-30'>
                  <form>

                    <input class="mil-rounded-input mil-text-center mil-mb-5" type="text" placeholder="Your email address" />
                    <button class="mil-button mil-accent-bg mil-fw"><span>Subscribe Now</span></button>

                  </form>

                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div class="mil-divider mil-light"></div>
        <div class="mil-footer-links">
          <ul class="mil-social mil-light">
            <li class="mil-adapt-links"><a href="#.">Facebook</a><a href="#.">FB</a></li>
            <li class="mil-adapt-links"><a href="#.">Instagram</a><a href="#.">IG</a></li>
            <li class="mil-adapt-links"><a href="#.">LinkedIn</a><a href="#.">IN</a></li>
            <li class="mil-adapt-links"><a href="#.">Twitter</a><a href="#.">TW</a></li>
            <li class="mil-adapt-links"><a href="#.">YouTube</a><a href="#.">YT</a></li>
          </ul>
          <ul class="mil-additional-links mil-light">
            <li><a href="#.">Terms & Condition</a></li>
            <li><a href="#.">Privacy Policy</a></li>
            <li><a href="#.">Sitemap</a></li>
          </ul>
        </div>
      </Container>   <div class="mil-footer-bottom">
        <div class="container">
          <p class="mil-text-sm mil-light">© ITSulu 2023.</p>
          <p class="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>

    </footer>
    </>
  )
}

export default Footer