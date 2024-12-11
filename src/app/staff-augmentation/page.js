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
import Head from 'next/head'


const page = () => {
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://wattlesol.com/staff-augmentation" />
            </Head>
            <HeroSection />
            <CallToSection />
            <Main />
            <Divider />
            <Features />
            <WorkWithUs />
            <Perks />
            <LatestProjects />
            <Divider />
            <CallToSectionSecond />
            <Faq />
            <Contact />
        </div>
    )
}

export default page