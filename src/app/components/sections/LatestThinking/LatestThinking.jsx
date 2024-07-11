'use client';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Swiper from 'swiper';
import BlogImage1 from '@/app/public/global/img/blog/1.jpg';
import BlogImage2 from '@/app/public/global/img/blog/2.jpg';
import BlogImage3 from '@/app/public/global/img/blog/3.jpg';
import BlogImage4 from '@/app/public/global/img/blog/4.jpg';
import BlogImage5 from '@/app/public/global/img/blog/5.jpg';
import BlogImage6 from '@/app/public/global/img/blog/6.jpg';

const LatestThinking = () => {
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
      const scroll = window.scrollY || window.pageYOffset;
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
    <section className="mil-blog mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: '30%' }}></div>
      <Container>
        <Row className="align-items-center mil-mb-90">
          <Col md={6} xl={6}>
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Our Latest News
            </span>
            <h2>Latest Thinking</h2>
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
        <div className="swiper-container mil-blog-slider mil-mb-90">
          <div className="swiper-wrapper">
            <div className="swiper-slide mil-slide-50">
              <a href="publication.html" className="mil-card">
                <div className="mil-cover-frame">
                  <Image
                    src={BlogImage1}
                    alt="project"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      Easy & Most Powerful Server Platform.
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Jane Meldrum</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="swiper-slide mil-slide-50">
              <a href="publication.html" className="mil-card">
                <div className="mil-cover-frame">
                  <Image
                    src={BlogImage1}
                    alt="project"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      Easy & Most Powerful Server Platform.
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Jane Meldrum</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="swiper-slide mil-slide-50">
              <a href="publication.html" className="mil-card">
                <div className="mil-cover-frame">
                  <Image
                    src={BlogImage1}
                    alt="project"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      Easy & Most Powerful Server Platform.
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Jane Meldrum</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="swiper-slide mil-slide-50">
              <a href="publication.html" className="mil-card">
                <div className="mil-cover-frame">
                  <Image
                    src={BlogImage1}
                    alt="project"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      Easy & Most Powerful Server Platform.
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Jane Meldrum</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Row className="align-items-center">
          <Col className="col-12">
            <a href="blog.html" className="mil-link">
              <span>View More Insights</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestThinking;
