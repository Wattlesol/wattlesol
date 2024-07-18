'use client';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import Banner1 from '@/app/public/global/img/icons/md/CSS-Design-Banner.jpg';
import Banner2 from '@/app/public/global/img/icons/md/The-FWA-Award-Banner.jpg';
import Banner3 from '@/app/public/global/img/icons/md/W3-Design-Award-Banner.jpg';
import Banner4 from '@/app/public/global/img/icons/md/WWW-Awards-Banner.jpg';

import IconImage1 from '@/app/public/global/img/icons/md/10.svg';
import IconImage2 from '@/app/public/global/img/icons/md/11.svg';

const Award = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'CSS Design',
      description:
        'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      icon: IconImage2,
      subtitle:
        'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      banner: Banner1,
    },
    {
      title: 'The FWA Award',
      description:
        'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      icon: IconImage2,
      subtitle: 'Tailored Solutions',
      banner: Banner2,
    },
    {
      title: 'W3 Design Award',
      description:
        'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      icon: IconImage2,
      subtitle: 'W3 Design Award',
      banner: Banner3,
    },
    {
      title: 'WWW Awards',
      description:
        'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      icon: IconImage2,
      subtitle: 'WWW Awards',
      banner: Banner4,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // cycle through slides
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // cycle backwards through slides
  };

  return (
    <section className="mil-awards">
      <Row className="m-0">
        <Col xl={6} className="p-0 mil-relative">
          <Image
            src={slides[currentSlide].banner}
            className="mil-background-image"
            style={{ objectPosition: 'center' }}
            alt="background image"
            layout="fill"
          />
          <div className="mil-overlay mil-gradient-bg"></div>
          <div className="mil-fake-container mil-p-120-120">
            <div>
              <h3 className="mil-light mil-mb-120">
                {slides[currentSlide].title}{' '}
                {/* <span className="mil-accent">
                  {slides[currentSlide].subtitle}
                </span> */}
              </h3>
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-15">
                  <div className="mil-icon-frame mil-light mil-icon-frame-md">
                    <Image
                      src={slides[currentSlide].icon}
                      alt="icon"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <h5 className="mil-light">{slides[currentSlide].title}</h5>
              </div>
              <p className="mil-light-soft">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="mil-slider-nav mt-5">
              <div
                className="mil-slider-btn-prev mil-box-prev mil-light"
                onClick={prevSlide}
              >
                <i className="fas fa-arrow-left"></i>
                <span className="mil-h6">Prev</span>
              </div>
              <div
                className="mil-slider-btn-next mil-box-next mil-light"
                onClick={nextSlide}
              >
                <span className="mil-h6">Next</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={6} className="p-0 mil-relative" style={{ overflow: 'hidden' }}>
          <Image
            src={slides[currentSlide].banner}
            className="mil-background-image"
            style={{ objectPosition: 'center' }}
            alt="decorative side"
            layout="fill"
          />
          <div className="mil-overlay mil-with-deco mil-super-light"></div>
        </Col>
      </Row>
    </section>
  );
};

export default Award;
