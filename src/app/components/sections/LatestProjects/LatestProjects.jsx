'use client';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Project1 from '@/app/public/global/img/projects/1.jpg';
import Project2 from '@/app/public/global/img/projects/2.jpg';
import Project3 from '@/app/public/global/img/projects/3.jpg';
import Link from 'next/link';

const LatestProjects = () => {
  useEffect(() => {
    // Accordion functionality
    const acc = document.getElementsByClassName('mil-accordion');
    for (let i = 0; i < acc.length; i++) {
      acc[i].onclick = function () {
        this.classList.toggle('mil-active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      };
    }

    // Menu button toggle
    const menuButton = document.querySelector('.mil-menu-btn');
    if (menuButton) {
      menuButton.addEventListener('click', function () {
        this.classList.toggle('mil-active');
        document
          .querySelector('.mil-navigation')
          .classList.toggle('mil-active');
      });
    }

    // Scroll functionality
    const handleScroll = () => {
      const scroll = window.scrollY;
      const topPanel = document.querySelector('.mil-top-panel.mil-animated');
      const additionalPanel = document.querySelector('.has-additional-panel');

      if (topPanel && additionalPanel) {
        if (scroll >= 220) {
          topPanel.classList.remove('mil-top-panel-transparent');
          additionalPanel.classList.add('mil-hide-top');
        } else {
          topPanel.classList.add('mil-top-panel-transparent');
          additionalPanel.classList.remove('mil-hide-top');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize Swiper instances
    const initializeSwiper = (selector, config) => {
      if (document.querySelector(selector)) {
        new Swiper(selector, config);
      }
    };

    initializeSwiper('.mil-works-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      navigation: {
        prevEl: '.mil-works-prev',
        nextEl: '.mil-works-next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="mil-works mil-p-120-90">
      <div className="mil-deco" style={{ top: 0, right: '40%' }}></div>
      <Container>
        <Row className="align-items-center mil-mb-60-adapt">
          <Col md={6} xl={6}>
            <h2 className="mil-mb-30">Latest Projects</h2>
          </Col>
          <Col md={6} xl={6}>
            <div className="mil-adaptive-right">
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-slider-btn-prev mil-works-prev">
                  <i className="fas fa-arrow-left"></i>
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-works-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="swiper-container mil-works-slider mil-mb-90">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Link href="/softbank" className="mil-card">
                <div className="mil-cover-frame">
                  <Image src={Project3} alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      Revolutionizing Sales for SoftBank Robotics.
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Wattle Sol</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Boosted SoftBank Robotics sales by optimizing social media
                      and augmenting SDR team, driving lead generation and
                      conversion rates.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link href="/karatbars" className="mil-card">
                <div className="mil-cover-frame">
                  <Image src={Project2} alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      Revolutionizing Global Gold Transactions with Blockchain
                      Technology
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Wattle Sol</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      We revolutionized KaratBars gold transactions by
                      developing robust smart contracts, we ensured secure
                      distribution and transparent records of small gold
                      denominations.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link href="/ormeus" className="mil-card">
                <div className="mil-cover-frame">
                  <Image src={Project1} alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      Enhancing Crypto Mining Transparency and Investor Profits.
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Wattle Sol</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      We enhanced ORMEUS's mining operations with real-time
                      updates and a staking system. Our social media campaigns
                      boosted engagement and investor profits.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Row className="align-items-center">
          <Col md={6} xl={6}>
            <Link href="/case-studies" className="mil-link mil-mb-30">
              <span>View All Cases</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </Col>
          <Col md={6} xl={6}>
            <div className="mil-adaptive-right">
              <Link
                href="/contact-us"
                className="mil-button mil-border mil-mb-30"
              >
                <span>Get Started</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default LatestProjects;
