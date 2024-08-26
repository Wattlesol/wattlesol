import Contact from '@/app/components/common/Contact'
import Divider from '@/app/components/common/Divider'
import CallToSection from '@/app/components/sections/SalesPageSections/CallToSection/CallToSection'
import HeroSection from '@/app/components/sections/SalesPageSections/HeroSection/HeroSection'
import Main from '@/app/components/sections/SalesPageSections/Main/Main'
import Perks from '@/app/components/sections/SalesPageSections/Perks/Perks'
import WhyChooseUs from '@/app/components/sections/SalesPageSections/WhyUs/WhyUs'
import Services from '@/app/components/sections/SalesPageSections/Services/Services'
import React from 'react'
import Faq from '@/app/components/sections/SalesPageSections/Faq/Faq'
import CallToSectionSecond from '@/app/components/sections/SolutionPageSections/CallToSectionSecond/CallToSectionSecond'
import LatestProjects from '@/app/components/sections/LatestProjects/LatestProjects'

const page = () => {
    return (
        <div>
            <HeroSection />
            <CallToSection />
            <Main />
            <Services />
            <WhyChooseUs />
            <Perks />
            <LatestProjects />
            <CallToSectionSecond />
            <Faq />
            <Contact />


        </div>
    )
}

export default page