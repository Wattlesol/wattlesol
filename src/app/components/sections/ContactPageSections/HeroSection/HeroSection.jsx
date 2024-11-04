import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
// import MapImage1 from "@/app/public/global/img/deco/map.png"
import Link from 'next/link'
const HeroSection = () => {
  return (
    <div class="mil-banner-sm mil-deep-bg">
    <Image src='global/img/deco/map.png' alt="staff augmentation services" class="mil-background-image" unoptimized/>
    <div class="mil-deco mil-deco-accent" style={{top: "47%", right:" 10%", transform: "rotate(90deg)"}}></div>
    <div class="mil-banner-content">
        <Container class=" mil-relative">
            <ul class="mil-breadcrumbs mil-mb-30">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
            <h2 class="mil-uppercase">Let’s discuss your opportunity</h2>
        </Container>
    </div>
</div>
  )
}

export default HeroSection