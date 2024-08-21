'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogImage1 from '@/app/public/global/img/blog/blog-devops.jpg';
import BlogImage2 from '@/app/public/global/img/blog/blog-microservice.png';
import BlogImage3 from '@/app/public/global/img/blog/blog-staff.jpg';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Main = () => {
  const [email, setEmail] = useState('');

  const handleToast = () => {
    setEmail('');
    return toast.success('Email Subscribed Successfully');
  };
  return (
    <>
      <ToastContainer />
      <section class="mil-blog mil-p-120-0">
        <Container>
          <Row className="justify-content-between">
            <Col lg={8} xl={8} className="mil-mb-120">
              <Link href="/blogs/blog1" className="mil-card">
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
                      Enhance deployment speed with our efficient DevOps
                      strategies. Tailored approaches for rapid and reliable
                      releases.
                    </p>
                  </div>
                </div>
              </Link>
              <div class="mil-divider mil-mb-60"></div>
              <Link href="/blogs/blog2" className="mil-card">
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
              <div class="mil-divider mil-mb-60"></div>
              <Link href="/blogs/blog3" className="mil-card">
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
              <div class="mil-divider mil-mb-60"></div>
              <div class="mil-pagination mil-hidden-arrows">
                <div class="mil-slider-nav">
                  <div class="mil-slider-btn-prev mil-blog-prev">
                    <i class="fas fa-arrow-left"></i>
                    <span class="mil-h6">Prev</span>
                  </div>
                </div>
                <ul class="mil-pagination-numbers">
                  <li class="mil-active">
                    <a href="#.">1</a>
                  </li>
                </ul>
                <div class="mil-slider-nav">
                  <div class="mil-slider-btn-next mil-blog-next">
                    <span class="mil-h6">Next</span>
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} xl={3} className="mil-mb-120">
              {/* <div class="mil-mb-60">
              <h5 class="mil-list-title mil-mb-30">About Wattle Sol</h5>
              <p class="mil-mb-30">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt.
              </p>
              <a href="team-single.html" class="mil-post-sm mil-mb-15">
                <div class="mil-cover-frame">
                  <Image src={FaceImage1} alt="cover" />
                </div>
                <div class="mil-description">
                  <h4 class="mil-font-3 mil-accent">Syed Zain</h4>
                  <p class="mil-text-sm">CEO</p>
                </div>
              </a>
            </div> */}
              {/* <div class="mil-divider mil-mb-60"></div> */}
              <form class="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  class="mil-sidebar-input"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </form>
              {/* <div class="mil-divider mil-mb-60"></div> */}
              {/* <div class="mil-mb-60">
              <h5 class="mil-list-title mil-mb-30">Categories</h5>
              <ul class="mil-hover-link-list">
                <li>
                  <a href="#.">Business</a>
                </li>
                <li>
                  <a href="#.">Design</a>
                </li>
                <li>
                  <a href="#.">Development</a>
                </li>
                <li>
                  <a href="#.">Management</a>
                </li>
                <li>
                  <a href="#.">Software</a>
                </li>
              </ul>
            </div> */}
              {/* <div class="mil-divider mil-mb-60"></div>
            <div class="mil-mb-60">
              <h5 class="mil-list-title mil-mb-30">Tags</h5>
              <ul class="mil-tags">
                <li>
                  <a href="#.">Business</a>
                </li>
                <li>
                  <a href="#.">Design</a>
                </li>
                <li>
                  <a href="#.">General</a>
                </li>
                <li>
                  <a href="#.">Development</a>
                </li>
                <li>
                  <a href="#.">Learning</a>
                </li>
              </ul>
            </div> */}
              <div class="mil-divider mil-mb-60"></div>
              <div class="mil-mb-60">
                <h5 class="mil-list-title mil-mb-30">Newsletter</h5>
                <div class="mil-sidebar-input-frame">
                  <input
                    type="text"
                    class="mil-sidebar-input"
                    placeholder="Your email address"
                    value={email ? email : ''}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <button onClick={handleToast}>
                    <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div class="mil-divider mil-mb-60"></div>
              <h5 class="mil-list-title mil-mb-30">Contact us</h5>
              <p class="mil-mb-30">
                info@wattlesol.info
                <br />
                30 N Gould St Ste R Sheridan, WY 82801
              </p>
              {/* <a href="contact.html" class="mil-link">
              <span>Send</span>
              <i class="fas fa-arrow-right"></i>
            </a> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
