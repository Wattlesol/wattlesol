import Footer from '@/app/components/common/Footer'
import Header from '@/app/components/common/Header'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div className="main">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout