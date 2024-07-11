import Image from 'next/image'
import React from 'react'
import MdImage1 from "@/app/public/global/img/icons/md/13l.svg"
const CallToSectionSecond = () => {
    return (
        <section class="call-to-action mil-gradient-bg mil-p-120-120">
            <div class="mil-deco mil-deco-accent" style={{top: 0, left: "15%"}}></div>
            <div class="mil-deco mil-deco-accent" style={{bottom: 0, right: "15%", transform: "rotate(180deg)"}}></div>
            <div class="container mil-text-center">
                <div class="mil-cta-frame">
                    <div class="mil-icon-frame mil-icon-frame-md mil-mb-50">
                        <Image src={MdImage1} alt="icon" />
                    </div>
                    <p class="mil-light mil-mb-30">Cybersecurity Ventures</p>
                    <h3 class="mil-light">The Estimated Global Cost of <span class="mil-accent">Cybercrime</span> is <span class="mil-accent">$6T</span> <br />and Climbing <span class="mil-accent">+ 15%</span> a Year.</h3>
                </div>
            </div>
        </section>
    )
}

export default CallToSectionSecond