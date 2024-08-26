import Contact from '@/app/components/common/Contact'
import Divider from '@/app/components/common/Divider'
import CallToSection from '@/app/components/sections/StaffPageSections/CallToSection/CallToSection'
import HeroSection from '@/app/components/sections/StaffPageSections/HeroSection/HeroSection'
import Main from '@/app/components/sections/StaffPageSections/Main/Main'
import Perks from '@/app/components/sections/StaffPageSections/Perks/Perks'
import Features from '@/app/components/sections/StaffPageSections/Features/Features'
import React from 'react'
import Faq from '@/app/components/sections/StaffPageSections/Faq/Faq'
import CallToSectionSecond from '@/app/components/sections/SolutionPageSections/CallToSectionSecond/CallToSectionSecond'
import WorkWithUs from '@/app/components/sections/StaffPageSections/WorkWithUs/WorkWithUs'
import LatestProjects from '@/app/components/sections/LatestProjects/LatestProjects'


const page = () => {
    return (
        <div>
            <HeroSection />
            <CallToSection />
            <Main />
            <Divider />
            <Features />
            <WorkWithUs />
            <Perks />
            <LatestProjects />
            <Divider />
            <Faq />
            <Contact />
        </div>
    )
}

export default page