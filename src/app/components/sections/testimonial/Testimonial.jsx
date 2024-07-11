'use client';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ClientImage1 from '@/app/public/global/img/faces/1.jpg';
import SmImage1 from '@/app/public/global/img/icons/sm/11.svg';
import Image from 'next/image';

const Testimonial = () => {
  useEffect(() => {
    // Initialize Swiper instances
    const initializeSwiper = (selector, config) => {
      if (document.querySelector(selector)) {
        new Swiper(selector, config);
      }
    };

    initializeSwiper('.mil-revi-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      navigation: {
        prevEl: '.mil-slider-btn-prev',
        nextEl: '.mil-slider-btn-next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });

    // Cleanup function to remove Swiper instances
    return () => {
      const swiperInstance = document.querySelector('.mil-revi-slider')?.swiper;
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  return (
    <section className="mil-reviews mil-deep-bg mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: '30%' }}></div>
      <Container>
        <Row className="align-items-center mil-mb-90">
          <Col md={6} xl={6}>
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Testimonial
            </span>
            <h2>
              What Our <span className="mil-accent">Clients</span> Say
            </h2>
          </Col>
          <Col md={6} xl={6}>
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-revi-prev">
                  <i className="fas fa-arrow-left"></i>
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-revi-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="swiper-container mil-revi-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src={SmImage1} alt="quote" />
                  <ul>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p className="mil-mb-30">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="mil-author">
                  <Image src={ClientImage1} alt="Customer" />
                  <div className="mil-name">
                    <h6 className="mil-mb-5">Tamzyn French</h6>
                    <span className="mil-text-sm">Agency Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src={SmImage1} alt="quote" />
                  <ul>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p className="mil-mb-30">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="mil-author">
                  <Image src={ClientImage1} alt="Customer" />
                  <div className="mil-name">
                    <h6 className="mil-mb-5">Tamzyn French</h6>
                    <span className="mil-text-sm">Agency Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src={SmImage1} alt="quote" />
                  <ul>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p className="mil-mb-30">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="mil-author">
                  <Image src={ClientImage1} alt="Customer" />
                  <div className="mil-name">
                    <h6 className="mil-mb-5">Tamzyn French</h6>
                    <span className="mil-text-sm">Agency Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src={SmImage1} alt="quote" />
                  <ul>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p className="mil-mb-30">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="mil-author">
                  <Image src={ClientImage1} alt="Customer" />
                  <div className="mil-name">
                    <h6 className="mil-mb-5">Tamzyn French</h6>
                    <span className="mil-text-sm">Agency Design</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more slides as needed */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
