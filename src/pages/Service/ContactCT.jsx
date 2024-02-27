import React from 'react'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/HeaderComponent/ScrollToTop '

function ContactCT() {
  return (
    <div className='relative'>
      <Contact/>
      <Footer/>
      <div className=' absolute'>
        <ScrollToTop/>
      </div>
    </div>
  )
}

export default ContactCT
