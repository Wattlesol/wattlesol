import CallToSection from '@/app/components/sections/TeamPageSections/CallToSection/CallToSection'
import HeroSection from '@/app/components/sections/TeamPageSections/HeroSection/HeroSection'
import Leads from '@/app/components/sections/TeamPageSections/Leads/Leads'
import Main from '@/app/components/sections/TeamPageSections/Main/Main'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://wattlesol.com/team" />
      </Head>
      <HeroSection />
      <Main />
      <Leads />
      <CallToSection />

    </div>
  )
}

export default page