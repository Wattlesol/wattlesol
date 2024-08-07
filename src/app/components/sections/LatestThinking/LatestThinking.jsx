'use client';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Swiper from 'swiper';
import BlogImage1 from '@/app/public/global/img/blog/blog-devops.jpg';
import BlogImage2 from '@/app/public/global/img/blog/blog-microservice.png';
import BlogImage3 from '@/app/public/global/img/blog/blog-staff.jpg';
import Link from 'next/link';

const LatestThinking = () => {
  useEffect(() => {
    const handleAccordionClick = (event) => {
      event.currentTarget.classList.toggle('mil-active');
      const panel = event.currentTarget.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    };

    const handleMenuButtonClick = () => {
      const menuButton = document.querySelector('.mil-menu-btn');
      menuButton.classList.toggle('mil-active');
      document.querySelector('.mil-navigation').classList.toggle('mil-active');
    };

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

    const initializeSwipers = () => {
      new Swiper('.mil-blog-slider', {
        spaceBetween: 30,
        speed: 800,
        slidesPerView: 1,
        navigation: {
          prevEl: '.mil-blog-prev',
          nextEl: '.mil-blog-next',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 'auto',
          },
        },
      });
    };

    // Event listener assignments
    const accs = document.querySelectorAll('.mil-accordion');
    accs.forEach((acc) => {
      acc.addEventListener('click', handleAccordionClick);
    });

    const menuButton = document.querySelector('.mil-menu-btn');
    if (menuButton) {
      menuButton.addEventListener('click', handleMenuButtonClick);
    }

    window.addEventListener('scroll', handleScroll);
    initializeSwipers();

    // Cleanup function
    return () => {
      accs.forEach((acc) => {
        acc.removeEventListener('click', handleAccordionClick);
      });

      if (menuButton) {
        menuButton.removeEventListener('click', handleMenuButtonClick);
      }

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
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div
                  className="mil-slider-btn-prev mil-blog-prev"
                  onClick={() => {
                    const swiperInstance =
                      document.querySelector('.mil-blog-slider').swiper;
                    swiperInstance.slidePrev();
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span className="mil-h6">Prev</span>
                </div>
                <div
                  className="mil-slider-btn-next mil-blog-next"
                  onClick={() => {
                    const swiperInstance =
                      document.querySelector('.mil-blog-slider').swiper;
                    swiperInstance.slideNext();
                  }}
                >
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
              <Link href="/pages/blogs/blog1" className="mil-card">
                <div className="mil-cover-frame">
                  <Image
                    src={BlogImage1}
                    alt="project"
                    objectFit="contain"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      How DevOps can save disasters in production grade
                      applications.
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Wattle Sol</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Strategic SDR Team and Social Media Optimization to Drive
                      Sales and Leads
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide mil-slide-50">
              <Link href="/pages/blogs/blog2" className="mil-card">
                <div className="mil-cover-frame">
                  <Image
                    src={BlogImage2}
                    objectFit="contain"
                    alt="project"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      Micro Services Are the future of seamless operations in
                      application development.
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Wattle Sol</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Future-proof your app dev with microservices for
                      scalability, flexibility, and efficiency.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide mil-slide-50">
              <Link href="/pages/blogs/blog3" className="mil-card">
                <div className="mil-cover-frame">
                  <Image
                    src={BlogImage3}
                    objectFit="contain"
                    alt="project"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      Why Staff Augmentation is the best solution for
                      Software companies .
                    </h4>
                    <h6>
                      by: <span className="mil-accent">Wattle Sol</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Discover why staff augmentation is key for software firms:
                      access to diverse talent, cost-effective scalability,
                      accelerated timelines, risk mitigation, and focus on
                      innovation.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            {/* Other swiper slides */}
          </div>
        </div>
        <Row className="align-items-center">
          <Col className="col-12">
            <Link href="/pages/blog" className="mil-link">
              <span>View More Insights</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestThinking;
