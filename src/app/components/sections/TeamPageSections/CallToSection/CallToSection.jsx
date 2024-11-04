import Image from 'next/image';
import React from 'react';
// import MdImage1 from '@/app/public/global/img/icons/md/6l.svg';
import Link from 'next/link';
const CallToSection = () => {
  return (
    <section className="call-to-action mil-gradient-bg mil-p-120-0">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, left: '15%' }}
      ></div>
      <div className="container mil-text-center">
        <div className="mil-cta-frame">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
            <Image src='global/img/icons/md/6l.svg' alt="icon" unoptimized/>
          </div>
          <p className="mil-light mil-mb-30">Leadership Team</p>
          <h2 className="mil-light mil-mb-30">
            Let’s <span className="mil-accent">Open the World</span> of IT to
            You
          </h2>
          <p className="mil-light-soft mil-mb-60">
            Unlock Full Potential - Opening Doors to Innovation and Growth
            Across Every Sector
            <br /> Where Opportunities Blossom and Solutions Thrive
          </p>
          <Link  href="/contact" className="mil-button mil-border mil-light">
            <span>Book an Appointment</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToSection;
