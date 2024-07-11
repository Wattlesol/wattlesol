import Image from 'next/image'
import React from 'react'
import MdImage1 from "@/app/public/global/img/icons/md/6l.svg"
const CallToSection = () => {
  return (
    <section class="call-to-action mil-gradient-bg mil-p-120-0">
    <div class="mil-deco mil-deco-accent" style={{top: 0, left: "15%"}}></div>
    <div class="container mil-text-center">
        <div class="mil-cta-frame">
            <div class="mil-icon-frame mil-icon-frame-md mil-mb-60">
                <Image src={MdImage1} alt="icon"/>
            </div>
            <p class="mil-light mil-mb-30">Leadership Team</p>
            <h2 class="mil-light mil-mb-30">Let’s <span class="mil-accent">Open the World</span> of IT to You</h2>
            <p class="mil-light-soft mil-mb-60">It is a long established fact that a reader will be distracted by the readable content <br/> of a page when looking at its layout.</p>
            <a href="#." class="mil-button mil-border mil-light"><span>Book an Appointment</span></a>
        </div>
    </div>
</section>
  )
}

export default CallToSection