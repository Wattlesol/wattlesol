import Contact from '@/app/components/common/Contact'
import CallToSection from '@/app/components/sections/SDPageSection/CallToSection/CallToSection'
import HeroSection from '@/app/components/sections/SDPageSection/HeroSection/HeroSection'
import Main from '@/app/components/sections/SDPageSection/Main/Main'
import React from 'react'
import Faq from '@/app/components/sections/SDPageSection/Faq/Faq'
import CallToSectionSecond from '@/app/components/sections/SolutionPageSections/CallToSectionSecond/CallToSectionSecond'
import Expertise from '@/app/components/sections/SDPageSection/OurExpertise/OurExpertise'
import WorkWithUs from '@/app/components/sections/AboutPageSections/WorkWithUs/WorkWithUs'
import Stack from '@/app/components/sections/SolutionPageSections/Stack/Stack'
import LatestProjects from '@/app/components/sections/LatestProjects/LatestProjects'

const page = () => {
    return (
        <div>
            <HeroSection />
            <CallToSection />
            <Main />
            <Expertise />
            <Stack />
            <WorkWithUs />
            <LatestProjects />
            <CallToSectionSecond />
            <Faq />
            <Contact />
        </div>
    )
}

export default page