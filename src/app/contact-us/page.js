import HeroSection from '@/app/components/sections/ContactPageSections/HeroSection/HeroSection'
import Main from '@/app/components/sections/ContactPageSections/Main/Main'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://wattlesol.com/contact-us" />
      </Head>
      <HeroSection />
      <Main />
    </>
  )
}

export default page