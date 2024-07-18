'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import MdImage1 from '@/app/public/global/img/icons/md/12.svg';

const Consultant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const slideWidth = 100 / 3;

  const data = [
    {
      id: 1,
      title: 'Proven Expertise',
      desc: 'With over 15 years of experience, our team of experts brings unparalleled knowledge and skills to every project.',
    },
    {
      id: 2,
      title: 'Tailored Solutions',
      desc: 'We understand that every business is unique. Our solutions are customized to address your specific needs, ensuring optimal results.',
    },
    {
      id: 3,
      title: 'Client-Centric',
      desc: 'Your success is our priority. We work closely with you to understand your goals and deliver solutions that drive results.',
    },
    {
      id: 4,
      title: 'Scalability',
      desc: " Whether you're a startup or a large enterprise, our solutions are scalable to accommodate your business growth.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      return Math.min(prevSlide + 1, totalSlides - 3);
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  return (
    <section className="mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: '30%' }}></div>
      <Container>
        <Row className="align-items-end mil-mb-90">
          <Col md={6} xl={6}>
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Solutions of Consulting
            </span>
            <h2>
              <span className="mil-accent">Industry Specific</span> AI
              Consulting and Development
            </h2>
          </Col>

          <Col md={6} xl={6}>
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div
                  className="mil-slider-btn-prev mil-revi-prev"
                  onClick={prevSlide}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span className="mil-h6">Prev</span>
                </div>
                <div
                  className="mil-slider-btn-next mil-revi-next"
                  onClick={nextSlide}
                >
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className="mil-revi-slider mil-mb-90"
          style={{ overflow: 'hidden', display: 'flex' }}
        >
          <div
            style={{
              transform: `translateX(-${currentSlide * slideWidth}%)`,
              transition: 'transform 0.5s ease-in-out',
              display: 'flex',
              gap: '20px',
              width: `${58.2 * (totalSlides / 3)}%`, // Adjust the width calculation
            }}
          >
            {data.map((data) => (
              <div style={{ width: `${slideWidth}%`, flexShrink: 0 }}>
                <div className="mil-hover-card">
                  <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                    <Image
                      src={MdImage1}
                      alt="icon"
                      width={50}
                      height={50}
                      layout="responsive"
                    />
                  </div>
                  <h5 className="mil-mb-30">{data.title}</h5>
                  <p>
                   {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="#" className="mil-link">
          <span>Let’s Solve Your Challenges With AI</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </Container>
    </section>
  );
};

export default Consultant;
