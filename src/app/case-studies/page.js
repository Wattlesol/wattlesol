import React from 'react';
import Project1 from '@/app/public/global/img/projects/1.jpg';
import Project2 from '@/app/public/global/img/projects/2.jpg';
import Project3 from '@/app/public/global/img/projects/3.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: '47%', right: ' 10%', transform: ' rotate(90deg)' }}
        ></div>
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <ul className="mil-breadcrumbs mil-mb-30">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/case-studies">Works</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Case Studies</h2>
          </div>
        </div>
      </div>
      <section className="mil-p-120-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <Image src={Project2} alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                KaratBars: leading global gold merchant
              </span>
              <h3 className="mil-mb-30">
                Revolutionizing Global Gold Transactions with Blockchain
                Technology
              </h3>
              <Link
                href="/projects/karatbars"
                className="mil-button-with-label"
              >
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <span className="mil-dark">See More</span>
              </Link>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover mil-type-2">
                <Image src={Project1} alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                ORMEUS: prominent cryptocurrency mining farm
              </span>
              <h3 className="mil-mb-30">
                Enhancing Crypto Mining Transparency and Investor Profits
              </h3>
              <Link
                href="/projects/ormeus"
                className="mil-button-with-label"
              >
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <span className="mil-dark">See More</span>
              </Link>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <Image src={Project3} alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                SoftBank Robotics America: a leading vendor in the robotics
                industry.
              </span>
              <h3 className="mil-mb-30">
                Boosting Social Media Presence and Lead Generation
              </h3>
              <Link
                href="/projects/softbanks"
                className="mil-button-with-label"
              >
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <span className="mil-dark">See More</span>
              </Link>
            </div>
          </div>
          <div className="mil-divider mil-mb-60"></div>

          <div className="mil-pagination mil-hidden-arrows">
            <div className="mil-slider-nav">
              <div className="mil-slider-btn-prev mil-blog-prev">
                <i className="fas fa-arrow-left"></i>
                <span className="mil-h6">Prev</span>
              </div>
            </div>
            <ul className="mil-pagination-numbers">
              <li className="mil-active">
                <a href="#">1</a>
              </li>
              {/* <li>
                <a href="portfolio.html">2</a>
              </li>
              <li>
                <a href="portfolio.html">3</a>
              </li> */}
            </ul>
            <div className="mil-slider-nav">
              <div className="mil-slider-btn-next mil-blog-next">
                <span className="mil-h6">Next</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
