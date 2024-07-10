import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Bg3 from '@/app/public/global/img/photo/Banner-1.jpg';
import Bg1 from '@/app/public/global/img/photo/Banner-2.jpg';
import Bg2 from '@/app/public/global/img/photo/Banner-3.jpg';
import '@/app/styles/flex.css';
import '@/app/styles/global/style.css';
import '@/app/styles/global/plugins/bootstrap-grid.css';
// import "@/app/styles/global/plugins/font-awesome.min.css"
import '@/app/styles/global/plugins/swiper.min.css';
import '@/app/swiper.min.js';
import '@/app/styles/scss/style.scss';

export const Hero = () => {
  return (
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
              alt="image"
            />
          </div>
          <div className="swiper-slide">
            <Image
              src={Bg2}
              className="mil-background-image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="image"
            />
          </div>
          <div className="swiper-slide">
            <Image
              src={Bg3}
              className="mil-background-image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="image"
            />
          </div>
        </div>
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
                  We Provide Services <br />
                  and Solutions
                </span>
                <span className="mil-font-3 mil-accent">To Enterprise</span>
              </h1>
              <div className="mil-flex-hori-center">
                <div>
                  <Link href="/contact" legacyBehavior>
                    <a className="mil-button mil-border mil-light">
                      <span>Let’s Talk</span>
                    </a>
                  </Link>
                </div>
                <p className="mil-button-descr mil-light-soft">
                  Achieve exceptional project outcomes with dedicated
                  development teams. Hire individual developers, UI/UX
                  designers, graphic designers, and marketing resources at
                  reduced costs. Quality maintained.
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
                          Experience top-notch staff augmentation with dedicated
                          teams working directly for you, but managed by us.
                        </p>
                      </div>
                    </div>
                    <div className="mil-item-hover">
                      <div className="mil-plus-icon">+</div>
                      <h6 className="mil-light">Dedicated Team</h6>
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
                          Access individual developers, UI/UX designers, and
                          more at affordable rates, maintaining high quality.
                        </p>
                      </div>
                    </div>
                    <div className="mil-item-hover">
                      <div className="mil-plus-icon">+</div>
                      <h6 className="mil-light">Developers</h6>
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
                          Secure sales and marketing talent at lower costs,
                          while keeping quality high.
                        </p>
                      </div>
                    </div>
                    <div className="mil-item-hover">
                      <div className="mil-plus-icon">+</div>
                      <h6 className="mil-light">Sales & Marketing</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
