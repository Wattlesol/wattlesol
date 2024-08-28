import Divider from '@/app/components/common/Divider';
import Award from '@/app/components/sections/SolutionPageSections/Award/Award';
import CallToSection from '@/app/components/sections/SolutionPageSections/CallToSection/CallToSection';
import CallToSectionSecond from '@/app/components/sections/SolutionPageSections/CallToSectionSecond/CallToSectionSecond';
import Consultant from '@/app/components/sections/SolutionPageSections/Consultant/Consultant';
import HeroSection from '@/app/components/sections/SolutionPageSections/HeroSection/HeroSection';
import Main from '@/app/components/sections/SolutionPageSections/Main/Main';
import Stack from '@/app/components/sections/SolutionPageSections/Stack/Stack';
import Title from '@/app/components/sections/SolutionPageSections/Title/Title';
import TitleSecond from '@/app/components/sections/SolutionPageSections/TitleSecond/TitleSecond';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroSection />
      <CallToSection />
      <Divider />
      {/* <Title/> */}
      <Main />
      {/* <TitleSecond/> */}
      <Stack />
      <Consultant />
      <CallToSectionSecond />
      {/* <Stack/> */}
    </div>
  );
};

export default page;
