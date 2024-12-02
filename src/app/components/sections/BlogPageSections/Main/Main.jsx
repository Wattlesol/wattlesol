"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogImage1 from "@/app/public/global/img/blog/blog-devops.jpg";
import BlogImage2 from "@/app/public/global/img/blog/blog-microservice.png";
import BlogImage3 from "@/app/public/global/img/blog/blog-staff.jpg";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Main = () => {
  const [email, setEmail] = useState("");

  const handleToast = () => {
    setEmail("");
    return toast.success("Email Subscribed Successfully");
  };
  return (
    <>
      <ToastContainer />
      <section className="mil-blog mil-p-120-0">
        <Container>
          <Row className="justify-content-between">
            <Col lg={8} xl={8} className="mil-mb-120">
              <Link
                href="/how-devops-can-save-disasters-in-production-grade-applications"
                className="mil-card"
              >
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
              <div className="mil-divider mil-mb-60"></div>
              <Link
                href="/micro-services-are-the-future-of-seamless-operations-in-application-development"
                className="mil-card"
              >
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
              <div className="mil-divider mil-mb-60"></div>
              <Link
                href="/why-staff-augmentation-is-the-best-solution-for-software-companies"
                className="mil-card"
              >
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
                    <a href="#.">1</a>
                  </li>
                </ul>
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-next mil-blog-next">
                    <span className="mil-h6">Next</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} xl={3} className="mil-mb-120">
              {/* <div className="mil-divider mil-mb-60"></div> */}

              <form className="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  className="mil-sidebar-input"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              {/* <div className="mil-divider mil-mb-60"></div> */}
              {/* <div className="mil-mb-60">
              <h5 className="mil-list-title mil-mb-30">Categories</h5>
              <ul className="mil-hover-link-list">
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
              {/* <div className="mil-divider mil-mb-60"></div>
            <div className="mil-mb-60">
              <h5 className="mil-list-title mil-mb-30">Tags</h5>
              <ul className="mil-tags">
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
              <div className="mil-divider mil-mb-60"></div>
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
                <div className="mil-sidebar-input-frame">
                  <input
                    type="text"
                    className="mil-sidebar-input"
                    placeholder="Your email address"
                    value={email ? email : ""}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={handleToast}>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="mil-divider mil-mb-60"></div>
              <h5 className="mil-list-title mil-mb-30">Contact us</h5>
              <p className="mil-mb-30">
                info@wattlesol.info
                <br />
                30 N Gould St Ste R Sheridan, WY 82801
              </p>
              <div className="mil-adaptive-right">
                <Link
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2MVk3D4z7q8WW0oLXjtYbr0fiDQpFGj1gr9LgCLUaVH5wq9wlW0qxM377Cu7TyH0sfU48A7JN3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mil-button mil-border mil-mr-15 mil-mb-30"
                >
                  <span>Book an Appointment</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
