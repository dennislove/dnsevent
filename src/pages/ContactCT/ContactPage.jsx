import React from 'react'
import ScrollToTop from '../../components/HeaderComponent/ScrollToTop '
import Footer from '../../components/Footer/Footer'
import NewContact from '../../components/Contact/NewContact'

function ContactPage() {
  return (
    <div className='relative'>
      <NewContact/>
      <Footer/>
      <div className=' absolute'>
        <ScrollToTop/>
      </div>
    </div>
  )
}

export default ContactPage
