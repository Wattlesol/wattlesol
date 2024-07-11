import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import MapImage1 from "@/app/public/global/img/deco/map.png"
const HeroSection = () => {
  return (

        <div class="mil-banner-sm mil-deep-bg">
            <Image src={MapImage1} alt="background" class="mil-background-image"/>
            <div class="mil-deco mil-deco-accent" style={{top: "47%", right: "10%", transform: "rotate(90deg)"}}></div>
            <div class="mil-banner-content">
                <Container class=" mil-relative">
                    <ul class="mil-breadcrumbs mil-mb-30">
                        <li><a href="home-1.html">Home</a></li>
                        <li><a href="service-1.html">Solution</a></li>
                    </ul>
                    <h2 class="mil-uppercase">AI consulting and development</h2>
                </Container>
            </div>
        </div>

  )
}

export default HeroSection