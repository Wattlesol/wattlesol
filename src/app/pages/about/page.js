import Divider from '@/app/components/common/Divider'
import CallToSection from '@/app/components/sections/AboutPageSections/CallToSection/CallToSection'
import Counter from '@/app/components/sections/AboutPageSections/Counter/Counter'
import HeroSection from '@/app/components/sections/AboutPageSections/HeroSection/HeroSection'
import Main from '@/app/components/sections/AboutPageSections/Main/Main'
import Mission from '@/app/components/sections/AboutPageSections/Mission/Mission'
import Value from '@/app/components/sections/AboutPageSections/Value/Value'
import WorkWithUs from '@/app/components/sections/AboutPageSections/WorkWithUs/WorkWithUs'
import Logo from '@/app/components/sections/logoSlider/Logo'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection/>
        <CallToSection/>
        <Main/>
        <Counter/>
        <Divider/>
        <Logo/>
        <Mission/>
        <WorkWithUs/>
        <Value/>


    </div>
  )
}

export default page