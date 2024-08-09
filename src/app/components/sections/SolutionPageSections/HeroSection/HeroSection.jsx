import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';
import MapImage1 from '@/app/public/global/img/deco/map.png';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <div class="mil-banner-sm mil-deep-bg">
      <Image src={MapImage1} alt="background" class="mil-background-image" />
      <div
        class="mil-deco mil-deco-accent"
        style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}
      ></div>
      <div class="mil-banner-content">
        <Container class=" mil-relative">
          <ul class="mil-breadcrumbs my-2 mil-mb-30">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/solutions">Solution</Link>
            </li>
          </ul>
          <h2 class="mil-uppercase">Our Services And Solutions</h2>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
