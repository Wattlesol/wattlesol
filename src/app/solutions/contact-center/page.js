import Contact from '@/app/components/common/Contact'
import Divider from '@/app/components/common/Divider'
import CallToSection from '@/app/components/sections/AIBDESection/CallToSection/CallToSection'
import HeroSection from '@/app/components/sections/AIBDESection/HeroSection/HeroSection'
import Main from '@/app/components/sections/AIBDESection/Main/Main'
import Perks from '@/app/components/sections/AIBDESection/Perks/Perks'
import GameChanger from '@/app/components/sections/AIBDESection/GameChanger/GameChanger'
import Features from '@/app/components/sections/AIBDESection/Features/Features'
import React from 'react'
import Faq from '@/app/components/sections/AIBDESection/Faq/Faq'

const page = () => {
    return (
        <div>
            <HeroSection />
            <CallToSection />
            <Main />
            <GameChanger />
            <Features />
            <Perks />
            <Faq />
            <Contact />


        </div>
    )
}

export default page