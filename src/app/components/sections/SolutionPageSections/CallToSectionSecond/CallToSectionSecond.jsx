import Image from "next/image";
import React from "react";
import MdImage1 from "@/app/public/global/img/icons/md/13l.svg";
import Link from "next/link";
const CallToSectionSecond = () => {
  return (
    <section className="call-to-action mil-gradient-bg mil-p-120-120">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, left: "15%" }}
      ></div>
      <div
        className="mil-deco mil-deco-accent"
        style={{ bottom: 0, right: "15%", transform: "rotate(180deg)" }}
      ></div>
      <div className="container mil-text-center">
        <div className="mil-cta-frame">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-50">
            <Image src={MdImage1} alt="icon" />
          </div>
          <p className="mil-light mil-mb-30">Our Services and Solutions</p>
          <h3 className="mil-light">
            With over 15 years of industry
            <span className="mil-accent"> experience, we bring</span> deep
            knowledge and
            <span className="mil-accent"> skill to</span> <br />
            every project
          </h3>
        </div>
        <div className="mt-4">
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2MVk3D4z7q8WW0oLXjtYbr0fiDQpFGj1gr9LgCLUaVH5wq9wlW0qxM377Cu7TyH0sfU48A7JN3"
            target="_blank"
            rel="noopener noreferrer"
            className="mil-button mil-border mil-mr-15 mil-mb-30"
          >
            <span className="mil-light">Book an Appointment</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToSectionSecond;
