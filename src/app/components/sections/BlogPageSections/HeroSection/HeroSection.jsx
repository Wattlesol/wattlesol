import Image from 'next/image'
import React from 'react'
import MapImage1 from "@/app/public/global/img/deco/map.png"
import Link from 'next/link'
const HeroSection = () => {
    return (
        <div class="mil-banner-sm mil-deep-bg">
            <Image src={MapImage1} alt="background" class="mil-background-image" />
            <div class="mil-deco mil-deco-accent" style={{ top: " 47%", right: "10%", transform: "rotate(90deg)" }}></div>
            <div class="mil-banner-content">
                <div class="container mil-relative">
                    <ul class="mil-breadcrumbs mil-mb-30">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/pages/blogs">Blog</Link></li>
                    </ul>
                    <h2 class="mil-uppercase">Our Blog</h2>
                </div>
            </div>
        </div>
    )
}

export default HeroSection