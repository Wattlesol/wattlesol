import Image from 'next/image';
import React from 'react';
import MapImage1 from '@/app/public/global/img/deco/map.png';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <div className="mil-banner-sm mil-deep-bg">
      <Image
        src={MapImage1}
        alt="background"
        className="mil-background-image"
      />
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: '47%', right: '10%', transform: ' rotate(90deg)' }}
      ></div>
      <div className="mil-banner-content">
        <div className="container mil-relative">
          <ul className="mil-breadcrumbs mil-mb-30">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/team">Team</Link>
            </li>
          </ul>
          <h2 className="mil-uppercase">Leadership Team</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
