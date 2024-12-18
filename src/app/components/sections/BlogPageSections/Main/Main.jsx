"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogImage1 from "@/app/public/global/img/blog/blog-devops.jpg";
import BlogImage2 from "@/app/public/global/img/blog/blog-microservice.png";
import BlogImage3 from "@/app/public/global/img/blog/blog-staff.jpg";
import BlogImage4 from "@/app/public/global/img/blog/blog-it_service.png";
import BlogImage5 from "@/app/public/global/img/blog/blog-seo-services-worth.png";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Main = () => {
  const [email, setEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; // Blogs per page
  const totalBlogs = 5; // Total number of blogs
  const totalPages = Math.ceil(totalBlogs / blogsPerPage); // Total number of pages

  const handleToast = () => {
    setEmail("");
    return toast.success("Email Subscribed Successfully");
  };

  // List of blogs
  const blogs = [
    {
      image: BlogImage5,
      title: "Are SEO Services Worth It",
      description:
        "Discover if SEO services are worth the investment. Explore benefits, challenges, and outcomes to make informed decisions for your business's online success.",
      link: "/are-seo-services-worth-it",
    },
    {
      image: BlogImage4,
      title: "What Exactly Are Managed IT Services?",
      description:
        "Discover what managed IT services are and how they enhance business efficiency with expert support, proactive solutions, and robust security. Learn more today!",
      link: "/managed-it-services",
    },
    {
      image: BlogImage3,
      title: "Why Staff Augmentation is the best solution for Software companies.",
      description:
        "Discover why staff augmentation is key for software firms: access to diverse talent, cost-effective scalability, accelerated timelines, risk mitigation, and focus on innovation.",
      link: "/why-staff-augmentation-is-the-best-solution-for-software-companies",
    },
    {
      image: BlogImage2,
      title: "Micro Services Are the future of seamless operations in application development.",
      description:
        "Future-proof your app dev with microservices for scalability, flexibility, and efficiency.",
      link: "/micro-services-are-the-future-of-seamless-operations-in-application-development",
    },
    {
      image: BlogImage1,
      title: "How DevOps can save disasters in production grade applications.",
      description:
        "Enhance deployment speed with our efficient DevOps strategies. Tailored approaches for rapid and reliable releases.",
      link: "/how-devops-can-save-disasters-in-production-grade-applications",
    },
  ];

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ToastContainer />
      <section className="mil-blog mil-p-120-0">
        <Container>
          <Row className="justify-content-between">
            <Col lg={8} xl={8} className="mil-mb-120">
              {currentBlogs.map((blog, index) => (
                <div key={index}>
                  <Link href={blog.link} className="mil-card">
                    <div className="mil-cover-frame">
                      <Image
                        src={blog.image}
                        alt="project"
                        objectFit="contain"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="mil-description">
                      <div className="mil-card-title">
                        <h4 className="mil-mb-20">{blog.title}</h4>
                        <h6>
                          by: <span className="mil-accent">Wattle Sol</span>
                        </h6>
                      </div>
                      <div className="mil-card-text">
                        <p>{blog.description}</p>
                      </div>
                    </div>
                  </Link>
                  <div className="mil-divider mil-mb-60"></div>
                </div>
              ))}
              <div className="mil-pagination mil-hidden-arrows">
                <div className="mil-slider-nav">
                  <div
                    className={`mil-slider-btn-prev mil-blog-prev ${currentPage === 1 ? "disabled" : ""}`}
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  >
                    <i className="fas fa-arrow-left"></i>
                    <span className="mil-h6">Prev</span>
                  </div>
                </div>
                <ul className="mil-pagination-numbers">
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index} className={currentPage === index + 1 ? "mil-active" : ""}>
                      <a onClick={() => handlePageChange(index + 1)}>{index + 1}</a>
                    </li>
                  ))}
                </ul>
                <div className="mil-slider-nav">
                  <div
                    className={`mil-slider-btn-next mil-blog-next ${currentPage === totalPages ? "disabled" : ""}`}
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  >
                    <span className="mil-h6">Next</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} xl={3} className="mil-mb-120">
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
                30 N Gould St Ste R Sheridan, WY 82801
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
