import Contact from '@/app/components/common/Contact'
import Divider from '@/app/components/common/Divider'
import CallToSection from '@/app/components/sections/UIUXPageSections/CallToSection/CallToSection'
import HeroSection from '@/app/components/sections/UIUXPageSections/HeroSection/HeroSection'
import Main from '@/app/components/sections/UIUXPageSections/Main/Main'
import WhyChooseUS from '@/app/components/sections/UIUXPageSections/WhyUs/WhyUs'
import Features from '@/app/components/sections/UIUXPageSections/Features/Features'
import React from 'react'
import Faq from '@/app/components/sections/UIUXPageSections/Faq/Faq'
import Tools from '@/app/components/sections/UIUXPageSections/Tools/Tools'
import Process from '@/app/components/sections/UIUXPageSections/Process/Process'
import LatestProjects from '@/app/components/sections/LatestProjects/LatestProjects'
import CallToSectionSecond from '@/app/components/sections/SolutionPageSections/CallToSectionSecond/CallToSectionSecond'
import Head from 'next/head'

const page = () => {
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://wattlesol.com/ui-ux" />
            </Head>
            <HeroSection />
            <CallToSection />
            <Main />
            <Features />
            <Tools />
            <Divider />
            <Process />
            <WhyChooseUS />
            <LatestProjects />
            <Divider />
            <CallToSectionSecond />
            <Faq />
            <Contact />
        </div>
    )
}

export default page