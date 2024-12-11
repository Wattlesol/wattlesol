import Contact from '@/app/components/common/Contact'
import HeroSection from '@/app/components/sections/Faqs/HeroSection/HeroSection'
import Main from '@/app/components/sections/Faqs/Main/Main'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://wattlesol.com/faq" />
      </Head>
      <HeroSection />
      <Main />
      <Contact />
    </div>
  )
}

export default page