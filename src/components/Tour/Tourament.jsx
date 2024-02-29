import React from 'react'
import TourMember from './TourMember'
import Accourdion from './Accourdion'

function Tourament() {
    const items = [
        { title: 'Chuyên Nghiệp', content: 'http://www.grandteambuilding.vn/thumbs/210x460x1/upload/news/pvi-2646.png' },
        { title: 'Sáng Tạo', content: 'http://www.grandteambuilding.vn/thumbs/210x460x1/upload/news/pvi-2646.png' },
        { title: 'Trách Nhiệm', content: 'http://www.grandteambuilding.vn/thumbs/210x460x1/upload/news/pvi-2646.png' },
        { title: 'Tận Tâm', content: 'http://www.grandteambuilding.vn/thumbs/210x460x1/upload/news/pvi-2646.png' },
      ];
      
      
  return (
    <div className='max-w-[1300px] m-auto relative'>
        <div className='font-normal text-[40px] lg:text-[40px] md:text-[35px] sm:text-[35px] pm:text-[30px] text-yellow-600 capitalize font-oxa text-center'>ĐÔNG SƠN EVENT</div>
        <div className='font-semibold text-3xl lg:text-[30px] md:text-[26px] sm:text-[26px] pm:text-[22px] text-white capitalize font-pop text-center'>Bao gồm 4 thành viên</div>

        <div className='mt-[50px]  grid grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 pm:grid-cols-2'>
            <div className='col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-2 pm:col-span-2 w-full'><TourMember/></div>
            <div className='col-span-2'><Accourdion items={items}/></div>
        </div>
    </div>
  )
}

export default Tourament
