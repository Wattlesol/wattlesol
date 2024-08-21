'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MdImage1 from '@/app/public/global/img/icons/md/8.svg';
import MdImage2 from '@/app/public/global/img/icons/md/9.svg';
import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    category: '',
    message: '',
    budget: '',
    userfile: null,
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      setFormStatus({ success: true, error: false });
    } else {
      setFormStatus({ success: false, error: true });
    }
  };

  return (
    <section className="mil-contact mil-p-120-0">
      <Container>
        <Row className="justify-content-between">
          <Col lg={8} xl={8} className="mil-mb-120">
            <form id="formContact" onSubmit={handleSubmit}>
              <h4 className="mil-mb-60">
                <span className="mil-accent">01.</span> Tell Us About Yourself
              </h4>
              <Row>
                <Col lg={6}>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6 mil-dark">
                      <span>First Name</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      placeholder="John"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6">
                      <span>Last Name</span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      placeholder="Jones"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6">
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="doe@mydomain.com"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6">
                      <span>Phone</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6 mil-dark">
                      <span>Company</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company name"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6 mil-dark">
                      <span>Role</span>
                    </label>
                    <input
                      type="text"
                      name="role"
                      placeholder="Your role"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
              <h4 className="mil-mb-60">
                <span className="mil-accent">02.</span> What Can We Help You
                With?
              </h4>
              <Row>
                <Col lg={6} className="mil-mb-30">
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6 mil-dark">
                      <span>Project Category</span>
                    </label>
                    <input
                      type="text"
                      name="category"
                      placeholder="Product Design"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
              <h4 className="mil-mb-60">
                <span className="mil-accent">03.</span> Tell Us About Your
                Project
              </h4>
              <Row>
                <Col lg={12}>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6">
                      <span>Project Description</span>
                    </label>
                    <textarea
                      placeholder="Your Message"
                      name="message"
                      className="mil-shortened"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mil-attach-frame mil-dark mil-mb-30">
                    <i className="fas fa-paperclip"></i>
                    <label className="mil-custom-file-input">
                      <span>Attach your file</span>
                      <input
                        type="file"
                        name="userfile"
                        id="mil-file-input"
                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
                        onChange={handleChange}
                      />
                    </label>
                    <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                  </div>
                </Col>
                <Col lg={6} className="mil-mb-30">
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6 mil-dark">
                      <span>Project Budget</span>
                    </label>
                    <input
                      type="number"
                      name="budget"
                      placeholder="123"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <button
                    type="submit"
                    className="mil-button mil-border mil-fw"
                  >
                    <span>Submit Now</span>
                  </button>
                </Col>
              </Row>
              {formStatus.success && (
                <div className="alert-success">
                  <h5>Thanks, your message is sent successfully.</h5>
                </div>
              )}
              {formStatus.error && (
                <div className="alert-error">
                  <h5>Error! Message could not be sent.</h5>
                </div>
              )}
            </form>
          </Col>
          <Col xl={3} lg={4} className="mil-mb-120">
            <div className="mil-mb-60">
              <h5 className="mil-list-title mil-mb-30">Support Request</h5>
              <p className="mil-mb-20">
                Our experts are ready to answer your questions.
              </p>
              <Link href="/contact" className="mil-link mil-link-sm">
                <span>Support Now</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="mil-divider mil-mb-60"></div>
            <div className="mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={MdImage1} alt="icon" />
              </div>
              <h5 className="mil-list-title mil-mb-30">Need Help?</h5>
              <p>
                For technical questions or billing questions, please contact
                Customer Care.
              </p>
            </div>
            <div className="mil-mb-60">
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <Image src={MdImage2} alt="icon" />
              </div>
              <h5 className="mil-list-title mil-mb-30">Needs More Info?</h5>
              <p>
                info@wattlesol.info
                <br />
                30 N Gould St Ste R Sheridan, WY 82801  
              </p>
            </div>
            <div className="mil-divider mil-mb-60"></div>
            {/* <a href="contact.html" className="mil-link mil-link-sm mil-mb-15">
              <span>Legality Guide</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <br />
            <a href="contact.html" className="mil-link mil-link-sm">
              <span>Security Center</span>
              <i className="fas fa-arrow-right"></i>
            </a> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
