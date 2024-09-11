'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Bg1 from '@/app/public/global/img/photo/Banner-1.jpg';
import Bg2 from '@/app/public/global/img/photo/Banner-2.jpg';
import Bg3 from '@/app/public/global/img/photo/Banner-3.jpg';
import styles from '@/app/styles/global/plugins/swiper.min.css'; // Import Swiper CSS file

export const Hero = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const swiper = new Swiper('.mil-banner-slideshow', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1500,
      autoplay: true,
      effect: 'fade',
      parallax: true,
      loop: true,
      pagination: {
        el: '.mil-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    // Clean up Swiper instance on component unmount
    return () => {
      swiper.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <Head>
        <title>
          Staff Augmentation & Services for Enterprises | Wattle Solutions
        </title>
        <meta
          name="description"
          content="Achieve exceptional project outcomes with dedicated development teams from Wattle Solutions. Hire developers, designers, and marketing resources at reduced costs while maintaining quality."
        />
        <meta
          name="keywords"
          content="staff augmentation, services for enterprises, software development, UI/UX design, marketing, dedicated teams"
        />
        <link rel="canonical" href="https://wattlesol.com" />
      </Head>
      <div className="mil-banner mil-top-space-0">
        <div className="swiper-container mil-banner-slideshow">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image
                src={Bg1}
                className="mil-background-image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="Banner image 1"
              />
            </div>
            <div className="swiper-slide">
              <Image
                src={Bg2}
                className="mil-background-image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="Banner image 2"
              />
            </div>
            <div className="swiper-slide">
              <Image
                src={Bg3}
                className="mil-background-image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="Banner image 3"
              />
            </div>
          </div>
          <div className="mil-pagination"></div>
        </div>
        <div className="mil-overlay"></div>

        <div className="mil-banner-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8">
                <span className="mil-suptitle mil-mb-60">
                  <span className="mil-light">The Next</span>
                  <span className="mil-accent">Gen</span>
                </span>
                <h1 className="mil-mb-60">
                  <span className="mil-uppercase mil-light">
                    We Provide AI Services and Solutions&nbsp;
                  </span>
                  <span className="mil-font-3 mil-accent">To Enterprise</span>
                </h1>
                <div className="mil-flex-hori-center">
                  <div>
                    <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ02e9dd0BtTOmft6sGk2qDolJA6-KZkxLAMrsDdagnhwiZhzrYr4A3XDACnNPRzjSIzJUjv3g7l" passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="mil-button mil-border mil-light">
                        <span>Book an Appointment</span>
                      </a>
                    </Link>
                  </div>
                  <p className="mil-button-descr mil-light-soft">
                    Transform your business with innovative AI solutions and services that include advanced AI integrations and automation, helping you achieve better efficiency, decision-making, and operational success
                  </p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="mil-illustration-1">
                  <div className="mil-item mil-item-1">
                    <div className="mil-plus">
                      <div className="mil-hover-window">
                        <div className="mil-window-content">
                          <h5 className="mil-dark mil-mb-15">Experts</h5>
                          <div className="mil-divider mil-divider-left mil-mb-15"></div>
                          <p className="mil-text-sm">
                            Experience elite staff augmentation with AI-powered teams that work for you, managed by us to deliver smart, data-driven solutions.
                          </p>
                        </div>
                      </div>
                      <div className="mil-item-hover">
                        <div className="mil-plus-icon">+</div>
                        <h6 className="mil-light">Dedicated AI Teams
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="mil-item mil-item-2">
                    <div className="mil-plus">
                      <div className="mil-hover-window">
                        <div className="mil-window-content">
                          <h5 className="mil-dark mil-mb-15">Experts</h5>
                          <div className="mil-divider mil-divider-left mil-mb-15"></div>
                          <p className="mil-text-sm">
                            Access individual AI developers and specialists at competitive rates, blending innovation with top-tier quality.
                          </p>
                        </div>
                      </div>
                      <div className="mil-item-hover">
                        <div className="mil-plus-icon">+</div>
                        <h6 className="mil-light">AI Experts On-Demand
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="mil-item mil-item-3">
                    <div className="mil-plus">
                      <div className="mil-hover-window">
                        <div className="mil-window-content">
                          <h5 className="mil-dark mil-mb-15">Experts</h5>
                          <div className="mil-divider mil-divider-left mil-mb-15"></div>
                          <p className="mil-text-sm">
                            Harness the power of AI to optimize sales and marketing strategies, driving growth and efficiency while maintaining high standards.
                          </p>
                        </div>
                      </div>
                      <div className="mil-item-hover">
                        <div className="mil-plus-icon">+</div>
                        <h6 className="mil-light">AI-Driven Sales & Marketing
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="mil-item mil-item-4">
                    <div className="mil-plus">
                      <div className="mil-hover-window">
                        <div className="mil-window-content">
                          <h5 className="mil-dark mil-mb-15">Experts</h5>
                          <div className="mil-divider mil-divider-left mil-mb-15"></div>
                          <p className="mil-text-sm">
                            Deliver round-the-clock, AI-enabled customer support that enhances user satisfaction, reduces costs, and streamlines service operations.
                          </p>
                        </div>
                      </div>
                      <div className="mil-item-hover">
                        <div className="mil-plus-icon">+</div>
                        <h6 className="mil-light">AI-Powered Customer Support
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
