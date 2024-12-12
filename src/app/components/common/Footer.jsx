'use client';
import React, { useState } from 'react';
import FooterImage1 from '@/app/public/global/img/deco/map.png';
import Logo from '@/app/public/global/img/logo/logo-light.svg';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Contact from './Contact';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleToast = () => {
    setEmail('');
    return toast.success('Email Subscribed Successfully');
  };
  return (
    <>
      <ToastContainer />
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
                <div className="mil-contact-info">
                  <p className="mil-light-soft mil-mb-10">
                    <FaMapMarkerAlt className="mil-icon" /> 30 N Gould St Ste R
                    Sheridan, WY 82801
                  </p>
                  <p className="mil-light-soft mil-mb-10">
                    <FaPhoneAlt className="mil-icon" /> +1 (616) 314-2136
                  </p>
                  <p className="mil-light-soft mil-mb-10">
                    <FaEnvelope className="mil-icon" /> info@wattlesol.com
                  </p>
                </div>
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
                    <div>
                      <input
                        className="mil-rounded-input mil-text-center mil-mb-5"
                        type="text"
                        placeholder="Your email address"
                        value={email ? email : ''}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        className="mil-button mil-accent-bg mil-fw"
                        onClick={handleToast}
                      >
                        <span>Subscribe Now</span>
                      </button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="mil-divider mil-light"></div>
          <div className="mil-footer-links">
            <ul className="mil-social mil-light">
              <li className="mil-adapt-links">
                <a href="https://www.instagram.com/wattle_sol/">
                  {' '}
                  <FaInstagram className="mil-icon" size={24} />
                </a>
                <a href="https://www.instagram.com/wattle_sol/">IG</a>
              </li>
              <li className="mil-adapt-links">
                <a href="https://www.linkedin.com/company/wattle-sol/">
                  {' '}
                  <FaLinkedinIn className="mil-icon" size={24} />
                </a>
                <a href="">IN</a>
              </li>
            </ul>
            <ul className="mil-additional-links mil-light">
              <li>
                <Link href="/terms-and-conditions">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              {/* <li>
                <a href="#.">Sitemap</a>
              </li> */}
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
