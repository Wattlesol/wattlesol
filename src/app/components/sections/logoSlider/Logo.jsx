import Image from 'next/image'
import React from 'react'
import Logo1 from "@/app/public/logoSection/1.png"
import Logo2 from "@/app/public/logoSection/2.png"
import Logo3 from "@/app/public/logoSection/3.png"
import Logo4 from "@/app/public/logoSection/4.png"
import Logo5 from "@/app/public/logoSection/5.png"
import Logo6 from "@/app/public/logoSection/6.png"

const Logo = () => {
  return (
    <div className='logo-container'>
        <div className="logo-sub-container">

            <Image src={Logo1} alt='logo'/>
            <Image src={Logo2} alt='logo'/>
            <Image src={Logo3} alt='logo'/>
            <Image src={Logo4} alt='logo'/>
            <Image src={Logo5} alt='logo'/>
            <Image src={Logo6} alt='logo'/>

        </div>
        

    </div>
  )
}

export default Logo