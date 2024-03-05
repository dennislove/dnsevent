import React from 'react'
import Interview from '../../components/HomeComponent/Interview'
import Project from '../../components/Project/Project'
import Tourament from '../../components/Tour/Tourament'
import SlideMember from '../../components/MemberCT/SlideMember'
import VideoClip from '../../components/Video/VideoClip'
import ScrollToTop from '../../components/HeaderComponent/ScrollToTop '
import Footer from '../../components/Footer/Footer'
import Media from '../../components/Video/Media'

function HomePage() {
  return (
    <div className='bg-[#000022] relative'>
      <Interview/>
      <Project/>
      <Tourament/>
      <SlideMember/>
      <VideoClip/>
      <Media/>
      <Footer/>
      <div className=' absolute'>
        <ScrollToTop/>
      </div>
    </div>
  )
}

export default HomePage
