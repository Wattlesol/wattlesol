import CallToSection from '@/app/components/sections/TeamPageSections/CallToSection/CallToSection'
import HeroSection from '@/app/components/sections/TeamPageSections/HeroSection/HeroSection'
import Leads from '@/app/components/sections/TeamPageSections/Leads/Leads'
import Main from '@/app/components/sections/TeamPageSections/Main/Main'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection/> 
        <Main/>
        <Leads/>
        <CallToSection/>

    </div>
  )
}

export default page