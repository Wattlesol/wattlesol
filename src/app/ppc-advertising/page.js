import Contact from '@/app/components/common/Contact'
import Divider from '@/app/components/common/Divider'
import CallToSection from '@/app/components/sections/PPCPageSections/CallToSection/CallToSection'
import HeroSection from '@/app/components/sections/PPCPageSections/HeroSection/HeroSection'
import Main from '@/app/components/sections/PPCPageSections/Main/Main'
import Perks from '@/app/components/sections/PPCPageSections/Perks/Perks'
import WhyChooseUs from '@/app/components/sections/PPCPageSections/WhyUs/WhyUs'
import Services from '@/app/components/sections/PPCPageSections/Services/Services'
import React from 'react'
import Faq from '@/app/components/sections/PPCPageSections/Faq/Faq'
import CallToSectionSecond from '@/app/components/sections/SolutionPageSections/CallToSectionSecond/CallToSectionSecond'
import LatestProjects from '@/app/components/sections/LatestProjects/LatestProjects'
import Head from 'next/head'

const page = () => {
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://wattlesol.com/ppc-advertising" />
            </Head>
            <HeroSection />
            <CallToSection />
            <Main />
            <Services />
            <WhyChooseUs />
            <Perks />
            <Divider />

            <LatestProjects />
            <CallToSectionSecond />
            <Faq />
            <Contact />


        </div>
    )
}

export default page