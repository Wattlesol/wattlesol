import React from 'react';
import FooterImage1 from '@/app/public/global/img/deco/map.png';
import Logo from '@/app/public/global/img/logo/logo-light.svg';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Contact from './Contact';
const Footer = () => {
  return (
    <>
      <footer className="mil-dark-bg">
        <Image src={FooterImage1} alt="background" className="mil-footer-bg" />
        <Container>
          <div className="mil-footer-content mil-p-120-90">
            <Row className="justify-content-between align-items-center">
              <Col xl={4} className="mil-mb-30">
                <Image
                  src={Logo}
                  alt=""
                  className="mil-logo mil-mb-30"
                  style={{ width: '140px' }}
                />
                <p className="mil-light-soft mil-mb-30">
                  Your partner in innovation. With a confident and motivated
                  approach, we deliver solutions that transform and elevate your
                  business.
                </p>
                <a href="#." className="mil-app-btn mil-mb-5">
                  <i className="fab fa-google-play"></i>
                  <div className="mil-app-text">
                    <span className="mil-accent mil-text-sm">
                      Available on the
                    </span>
                    <div className="mil-h6">Google Play</div>
                  </div>
                </a>
                <a href="#." className="mil-app-btn">
                  <i className="fab fa-apple"></i>
                  <div className="mil-app-text">
                    <span className="mil-accent mil-text-sm">
                      Download on the
                    </span>
                    <div className="mil-h6">App Store</div>
                  </div>
                </a>
              </Col>
              <Col xl={7} className="mil-mt-60-adapt">
                <Row>
                  <Col lg={7} className="mil-mb-30">
                    <h3 className="mil-light mil-up-font mil-mb-30">
                      Join The <span className="mil-accent">Wattle Sol</span>{' '}
                      <br />
                      Experience
                    </h3>
                    <p className="mil-light-soft">
                      Pioneering Technology, Delivering Excellence
                    </p>
                  </Col>
                  <Col lg={5} className="mil-mb-30">
                    <form>
                      <input
                        className="mil-rounded-input mil-text-center mil-mb-5"
                        type="text"
                        placeholder="Your email address"
                      />
                      <button className="mil-button mil-accent-bg mil-fw">
                        <span>Subscribe Now</span>
                      </button>
                    </form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="mil-divider mil-light"></div>
          <div className="mil-footer-links">
            <ul className="mil-social mil-light">
              <li className="mil-adapt-links">
                <a href="#.">Facebook</a>
                <a href="#.">FB</a>
              </li>
              <li className="mil-adapt-links">
                <a href="#.">Instagram</a>
                <a href="#.">IG</a>
              </li>
              <li className="mil-adapt-links">
                <a href="#.">LinkedIn</a>
                <a href="#.">IN</a>
              </li>
              <li className="mil-adapt-links">
                <a href="#.">Twitter</a>
                <a href="#.">TW</a>
              </li>
              <li className="mil-adapt-links">
                <a href="#.">YouTube</a>
                <a href="#.">YT</a>
              </li>
            </ul>
            <ul className="mil-additional-links mil-light">
              <li>
                <a href="#.">Terms & Condition</a>
              </li>
              <li>
                <a href="#.">Privacy Policy</a>
              </li>
              <li>
                <a href="#.">Sitemap</a>
              </li>
            </ul>
          </div>
        </Container>{' '}
        <div className="mil-footer-bottom">
          <div className="container">
            <p className="mil-text-sm mil-light">© Wattle Sol 2024.</p>
            <p className="mil-text-sm mil-light">All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
