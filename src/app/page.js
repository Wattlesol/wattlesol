import React from 'react';

import Logo from './components/sections/logoSlider/Logo';
import Divider from './components/common/Divider';
import { Hero } from './components/home/Hero';

import Help from './components/sections/howWeCanHelp/Help';
import LatestProjects from './components/sections/LatestProjects/LatestProjects';
import HowItWork from './components/sections/howToWork/HowItWork';
import Skills from './components/sections/skills/Skills';
import LatestThinking from './components/sections/LatestThinking/LatestThinking';
import Testimonial from './components/sections/testimonial/Testimonial';
import Contact from './components/common/Contact';
import LatestProduct from './components/sections/LatestProduct/LatestProduct';

const page = () => {
  return (
    <div>
      {/*HOME PAGE */}
      <Hero />
      <Divider />

      <Logo />
      <Divider />
      <Help />
      <Divider />
      <LatestProduct />
      <LatestProjects />
      <Divider />

      <HowItWork />

      <Skills />
      <Divider />
      <LatestThinking />
      <Testimonial />
      <Contact />
    </div>
  );
};
export default page;
