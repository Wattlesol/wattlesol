import Footer from '@/app/components/common/Footer'
import Header from '@/app/components/common/Header'
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <div>

        <div className="main">
            {children}
        </div>

    </div>
  )
}

export default HomeLayout