'use client';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import PhotoImage1 from '@/app/public/global/img/photo/14.jpg';
import IconImage1 from '@/app/public/global/img/icons/md/10.svg';
import IconImage2 from '@/app/public/global/img/icons/md/11.svg';

const Award = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'AI Solutions To Analyze and Understand The Physical World',
      description:
        'Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.',
      icon: IconImage1,
      subtitle: 'Facial Recognition',
    },
    {
      title: 'Industry Specific AI Consulting and Development',
      description:
        'Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.',
      icon: IconImage2,
      subtitle: 'Artificial Intelligence',
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
            src={PhotoImage1}
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
                <span className="mil-accent">
                  {slides[currentSlide].subtitle}
                </span>
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
                <h5 className="mil-light">{slides[currentSlide].subtitle}</h5>
              </div>
              <p className="mil-light-soft">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="mil-slider-nav">
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
            src={PhotoImage1}
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
