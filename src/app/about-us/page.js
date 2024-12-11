import Contact from '@/app/components/common/Contact'
import Divider from '@/app/components/common/Divider'
import CallToSection from '@/app/components/sections/AboutPageSections/CallToSection/CallToSection'
import Counter from '@/app/components/sections/AboutPageSections/Counter/Counter'
import HeroSection from '@/app/components/sections/AboutPageSections/HeroSection/HeroSection'
import Main from '@/app/components/sections/AboutPageSections/Main/Main'
import Mission from '@/app/components/sections/AboutPageSections/Mission/Mission'
import Value from '@/app/components/sections/AboutPageSections/Value/Value'
import WorkWithUs from '@/app/components/sections/AboutPageSections/WorkWithUs/WorkWithUs'
import Logo from '@/app/components/sections/logoSlider/Logo'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://wattlesol.com/about-us" />
      </Head>
      <HeroSection />
      <CallToSection />
      <Main />
      <Counter />
      <Divider />
      <Logo />
      <Mission />
      <WorkWithUs />
      <Value />
      <Contact />


    </>
  )
}

export default page