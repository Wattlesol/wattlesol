"use client";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yowq95k",
        "template_5qo1j7e",
        form.current,
        "6n1lcgsUafJHarxF5"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.querySelector(".alert-success").style.display = "block";
          document.querySelector(".alert-error").style.display = "none";
        },
        (error) => {
          console.log(error.text);
          document.querySelector(".alert-success").style.display = "none";
          document.querySelector(".alert-error").style.display = "block";
        }
      );

    form.current.reset();
  };

  return (
    <section className="mil-contact mil-gradient-bg mil-p-120-0">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, right: 0 }}
      ></div>
      <Container>
        <h2 className="mil-light mil-mb-90">
          Contact <span className="mil-accent">Us</span>
        </h2>
        <form
          id="formFeedback"
          method="post"
          encType="multipart/form-data"
          ref={form}
          onSubmit={sendEmail}
        >
          <Row>
            <Col lg={6}>
              <div className="mil-input-frame mil-mb-30">
                <label>
                  <span className="mil-light">Name</span>
                  <span className="mil-accent">Required</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Your Name Here"
                />
              </div>
              <div className="mil-input-frame mil-mb-30">
                <label>
                  <span className="mil-light">Email Address</span>
                  <span className="mil-accent">Required</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mil-input-frame mil-mb-60">
                <label>
                  <span className="mil-light">Phone</span>
                  <span className="mil-light-soft">Optional</span>
                </label>
                <input type="tel" name="phone" placeholder="Your Phone" />
              </div>
              <div className="mil-attach-frame mil-mb-60">
                <i className="fas fa-paperclip"></i>
                <label className="mil-custom-file-input">
                  <span>Attach your file</span>
                  <input
                    type="file"
                    name="userfile"
                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
                    id="mil-file-input"
                  />
                </label>
                <p className="mil-text-sm mil-light-soft">up to 20MB</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mil-input-frame mil-mb-30">
                <label>
                  <span className="mil-light">Your Message</span>
                  <span className="mil-accent">Required</span>
                </label>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <p className="mil-text-sm mil-light-soft mil-mb-15">
                We will process your personal information in accordance with our
                Privacy Policy.
              </p>
              <div className="mil-checkbox-frame mil-mb-60">
                <input
                  className="mil-checkbox"
                  id="checkbox-1"
                  type="checkbox"
                  name="agree"
                  value="1"
                  required
                />
                <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                  I would like to be contacted with news and updates about your{" "}
                  <a href="#." className="mil-accent">
                    events and services
                  </a>
                </label>
              </div>
            </Col>
            <Col className="col-12">
              <button type="submit" className="mil-button mil-accent-bg mil-fw">
                <span>Send Message Now</span>
              </button>
            </Col>
          </Row>
          <div className="alert-success" style={{ display: "none" }}>
            <h5>Thanks, your message is sent successfully.</h5>
          </div>
          <div className="alert-error" style={{ display: "none" }}>
            <h5>Error! Message could not be sent.</h5>
          </div>
        </form>
        <div className="mt-30">
          <Col className="col-12 mt-4">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2MVk3D4z7q8WW0oLXjtYbr0fiDQpFGj1gr9LgCLUaVH5wq9wlW0qxM377Cu7TyH0sfU48A7JN3"
              target="_blank"
              className="mil-button mil-accent-bg mil-fw"
            >
              <span>Book an Appointment</span>
            </a>
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
