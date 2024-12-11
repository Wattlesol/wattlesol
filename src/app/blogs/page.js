import HeroSection from '@/app/components/sections/BlogPageSections/HeroSection/HeroSection'
import Main from '@/app/components/sections/BlogPageSections/Main/Main'
import React from 'react'
import Head from 'next/head'


const page = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://wattlesol.com/blogs" />
      </Head>
      <HeroSection />
      <Main />
    </div>
  )
}

export default page