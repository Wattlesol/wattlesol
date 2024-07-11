'use client';
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import ClientImage1 from '@/app/public/global/img/faces/1.jpg';
import SmImage1 from '@/app/public/global/img/icons/sm/11.svg';
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Parallax,
  EffectFade,
} from 'swiper';

const Testimonial = () => {
  useEffect(() => {
    'use strict';

    Swiper.use([Navigation, Pagination, Autoplay, Parallax, EffectFade]);

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

    const menuBtn = document.querySelector('.mil-menu-btn');
    const navigation = document.querySelector('.mil-navigation');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('mil-active');
        if (navigation) navigation.classList.toggle('mil-active');
      });
    }

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

    const swiperContainers = [
      { container: '.mil-banner-slideshow', config: {} },
      {
        container: '.mil-banner-slider',
        config: {
          navigation: {
            prevEl: '.mil-banner-prev',
            nextEl: '.mil-banner-next',
          },
        },
      },
      {
        container: '.mil-works-slider',
        config: {
          navigation: { prevEl: '.mil-works-prev', nextEl: '.mil-works-next' },
        },
      },
      {
        container: '.mil-blog-slider',
        config: {
          navigation: { prevEl: '.mil-blog-prev', nextEl: '.mil-blog-next' },
        },
      },
      {
        container: '.mil-revi-slider',
        config: {
          navigation: { prevEl: '.mil-revi-prev', nextEl: '.mil-revi-next' },
        },
      },
      {
        container: '.mil-revi-slider-2',
        config: {
          navigation: { prevEl: '.mil-revi-prev', nextEl: '.mil-revi-next' },
        },
      },
      {
        container: '.mil-services-slider',
        config: {
          navigation: {
            prevEl: '.mil-services-prev',
            nextEl: '.mil-services-next',
          },
        },
      },
      {
        container: '.mil-events-slider',
        config: {
          navigation: {
            prevEl: '.mil-events-prev',
            nextEl: '.mil-events-next',
          },
        },
      },
      {
        container: '.mil-courses-slider',
        config: {
          navigation: {
            prevEl: '.mil-courses-prev',
            nextEl: '.mil-courses-next',
          },
        },
      },
      {
        container: '.mil-banners-slider',
        config: {
          pagination: {
            el: '.mil-banners-pagination',
            type: 'bullets',
            clickable: true,
          },
        },
      },
      {
        container: '.mil-box-slider',
        config: {
          navigation: { prevEl: '.mil-box-prev', nextEl: '.mil-box-next' },
        },
      },
      { container: '.mil-tabs-slider', config: {} },
      { container: '.mil-tabs-slider-2', config: {} },
    ];

    swiperContainers.forEach(({ container, config }) => {
      const swiperEl = document.querySelector(container);
      if (swiperEl) {
        new Swiper(swiperEl, {
          slidesPerView: 1,
          spaceBetween: 30,
          speed: 800,
          autoplay: {
            delay: 5000,
          },
          loop: true,
          ...config,
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          },
        });
      }
    });

    const tabButtons = document.querySelectorAll('.mil-tab-buttons a');
    tabButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        tabButtons.forEach((btn) => btn.classList.remove('mil-active'));
        event.currentTarget.classList.add('mil-active');
      });
    });

    const tabLeftNav = document.querySelectorAll('.mil-tabs-left-nav a');
    tabLeftNav.forEach((nav) => {
      nav.addEventListener('click', (event) => {
        tabLeftNav.forEach((navItem) => navItem.classList.remove('mil-active'));
        event.currentTarget.classList.add('mil-active');
      });
    });

    const input = document.getElementById('mil-file-input');
    const label = document.querySelector('.mil-custom-file-input');
    if (input && label) {
      input.addEventListener('change', () => {
        const file = input.value;
        const [fileName] = file.match(/\w+.\w+$/);
        if (fileName.trim()) {
          label.classList.add('mil-with-file');
          label.querySelector('span').innerText = fileName;
        }
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
              {/* Navigation buttons */}
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
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src={SmImage1} alt="quote" />
                  <ul>
                    {[...Array(5)].map((star, index) => (
                      <li key={index}>
                        <i className="fas fa-star"></i>
                      </li>
                    ))}
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

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src={SmImage1} alt="quote" />
                  <ul>
                    {[...Array(5)].map((star, index) => (
                      <li key={index}>
                        <i className="fas fa-star"></i>
                      </li>
                    ))}
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

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="mil-review">
                <div className="mil-stars mil-mb-30">
                  <Image src={SmImage1} alt="quote" />
                  <ul>
                    {[...Array(5)].map((star, index) => (
                      <li key={index}>
                        <i className="fas fa-star"></i>
                      </li>
                    ))}
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
