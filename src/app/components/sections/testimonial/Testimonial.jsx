'use client';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import ClientImage1 from '@/app/public/global/img/faces/1.jpg';
// import SmImage1 from '@/app/public/global/img/icons/sm/11.svg';
import Image from 'next/image';
// import ColorLogo1 from '@/app/public/logoSection/color-1.png';
// import ColorLogo2 from '@/app/public/logoSection/color-2.png';
// import ColorLogo3 from '@/app/public/logoSection/color-3.png';
// import ColorLogo4 from '@/app/public/logoSection/color-4.png';

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
                  <Image src='global/img/icons/sm/11.svg' alt="quote" unoptimized/>
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
                  We partnered with Wattle Sol for our mobile app development
                  needs, and they exceeded our expectations. Their team was
                  professional, responsive, and delivered a high-quality product
                  on time. The seamless integration and user-friendly interface
                  have significantly boosted our customer engagement. We
                  couldn't be happier with the results! by the readable content
                  of a page when looking at its layout.
                </p>
                <div className="mil-author">
                  <Image
                    style={{
                      width: '120px',
                      height: '40px',
                    }}
                    objectFit="contain"
                    src='logoSection/color-1.png'
                    alt="Wattle Sol"
                    unoptimized
                  />
                  <div className="mil-name">
                    <h6 className="mil-mb-5">CEO Allocate</h6>
                    {/* <span className="mil-text-sm">Agency Design</span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src='global/img/icons/sm/11.svg' alt="quote" unoptimized/>
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
                  Wattle Sol transformed our outdated legacy system into a
                  modern, efficient solution that has greatly improved our
                  operational efficiency. Their expertise in blockchain
                  technology and custom software development is unparalleled.
                  The project was completed ahead of schedule, and the support
                  we received post-launch has been exceptional.
                </p>
                <div className="mil-author">
                  <Image
                    style={{
                      width: '120px',
                      height: '40px',
                    }}
                    src='logoSection/color-2.png'
                    alt="wattle Sol"
                    unoptimized
                  />
                  <div className="mil-name">
                    <h6 className="mil-mb-5">CEO Karatbars</h6>
                    {/* <span className="mil-text-sm">Agency Design</span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src='global/img/icons/sm/11.svg' alt="quote" unoptimized/>
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
                  Choosing Wattle Sol for our web development project was one of
                  the best decisions we made. Their attention to detail,
                  innovative approach, and dedication to our vision resulted in
                  a stunning website that has attracted a lot of positive
                  feedback from our clients. Their team is a pleasure to work
                  with, and we look forward to future collaborations.
                </p>
                <div className="mil-author">
                  <Image
                    style={{
                      width: '120px',
                      height: '40px',
                    }}
                    src='logoSection/color-4.png'
                    alt="Customer"
                    unoptimized
                  />
                  <div className="mil-name">
                    {/* <h6 className="mil-mb-5">Tamzyn French</h6> */}
                    <span className="mil-text-sm">CEO SoftBanks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src='global/img/icons/sm/11.svg' alt="quote" unoptimized/>
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
                  As a startup, we needed a reliable software partner who could
                  help us bring our ideas to life. Wattle Sol not only provided
                  us with top-notch development services but also offered
                  valuable insights and guidance throughout the project. Their
                  commitment to excellence and customer satisfaction is truly
                  commendable. We highly recommend their services to anyone
                  looking for a trustworthy software company.
                </p>
                <div className="mil-author">
                  <Image
                    style={{
                      width: '120px',
                      height: '40px',
                    }}
                    src='logoSection/color-3.png'
                    alt="Customer"
                    unoptimized
                  />
                  <div className="mil-name">
                    {/* <h6 className="mil-mb-5">CEO ORMEUS</h6> */}
                    <span className="mil-text-sm">CEO ORMEUS</span>
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
