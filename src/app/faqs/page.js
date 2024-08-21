import Contact from '@/app/components/common/Contact'
import HeroSection from '@/app/components/sections/Faqs/HeroSection/HeroSection'
import Main from '@/app/components/sections/Faqs/Main/Main'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection/>
        <Main/>
        <Contact/>
    </div>
  )
}

export default page