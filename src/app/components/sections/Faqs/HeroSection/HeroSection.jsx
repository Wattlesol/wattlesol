import Image from 'next/image'
import React from 'react'
import MapImage1 from "@/app/public/global/img/deco/map.png"
const HeroSection = () => {
  return (
    <div className="mil-banner-sm mil-deep-bg">
    <Image src={MapImage1} alt="background" className="mil-background-image"/>
    <div className="mil-deco mil-deco-accent" style={{top: "47%", right: "10%", transform:" rotate(90deg)"}}></div>
    <div className="mil-banner-content">
        <div className="container mil-relative">
            <ul className="mil-breadcrumbs mil-mb-30">
                <li><a href="home-1.html">Home</a></li>
                <li><a href="faq.html">FAQs</a></li>
            </ul>
            <h2 className="mil-uppercase">FAQS</h2>
        </div>
    </div>
</div>
  )
}

export default HeroSection