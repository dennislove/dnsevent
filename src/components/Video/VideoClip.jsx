import React from 'react'
import ReactPlayer from 'react-player'
import '../Video/style.css'

function VideoClip() {
    const video = [
        {
            url:"https://www.youtube.com/watch?v=1uiUMbz83Yw&list=RD1uiUMbz83Yw&start_radio=1",
            name:"Team building Viewjt nam",
        },
        {
            url:"https://www.youtube.com/watch?v=1uiUMbz83Yw&list=RD1uiUMbz83Yw&start_radio=1",
            name:"Team building Viewjt nam",
        },
        {
            url:"https://www.youtube.com/watch?v=1uiUMbz83Yw&list=RD1uiUMbz83Yw&start_radio=1",
            name:"Team building Viewjt nam",
        },
        {
            url:"https://www.youtube.com/watch?v=1uiUMbz83Yw&list=RD1uiUMbz83Yw&start_radio=1",
            name:"Team building Viewjt nam",
        },
    ]
  return (
    <div className="bg-[url(images/bg2.jpg)] bg-cover bg-[#000022] mb-10">
    <div className=' max-w-[1300px] m-auto relative'>
        <div className='relative text-center mb-10'>
            <div className='mb-5 text-center font-oxa'>
                <h2 className='  font-normal text-[40px] text-white capitalize'>Video Clip</h2>
            </div>
            <div className='max-w-[700px] text-xl font-normal m-auto text-white'>Tận Tâm Với Khách Hàng</div>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-5'>
            {video.map((item, index)=>(
            <div className='relative lg:w-full sm:w-[300px]' key={index}>
                <ReactPlayer url={item.url} controls={true}/>
                
                <h3 className='absolute bottom-0 font-semibold uppercase right-0 text-xl mb-0 text-white'>{item.name}</h3>
                
                
            </div>
            ))}
       
    </div>
    </div>
    
</div>
  )
}

export default VideoClip
