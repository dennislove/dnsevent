import React from 'react';
import CountUp from "react-countup";
import back1 from '../../images/kis-8940.jpg'
import back2 from '../../images/viettools-84690.jpg'

function PhotoCollage() {
  return (
    <div className=" mx-auto px-4 ">
          <div className='flex justify-between mb-8 text-white font-oxa'>
              <div className='px-3 py-6 bg-[#ff4220] w-[31%] text-center '>
                <div className=''><CountUp end={10} className="text-[60px]  font-semibold " /> <span className='text-[60px]  font-semibold'>+</span></div>
                <p className=' font-bold text-base'>Năm Kinh Nghiệm</p>
                </div>
             
              <div className='px-3 py-6 bg-[#3dc5ce] w-[31%] text-center '>
              <div className=''><CountUp end={600} className="text-[60px]  font-semibold " /> <span className='text-[60px]  font-semibold'>+</span></div>
                <p className=' font-bold text-base'>Chương Trình</p>
                </div>
             
              <div className='px-3 py-6 bg-[#ffd231] w-[31%] text-center '>
              <div className=''><CountUp end={200} className="text-[60px]  font-semibold " /> <span className='text-[60px]  font-semibold'>+</span></div>
                <p className='r font-bold text-base'>Khách hàng</p>
                </div>
          </div>
         
        
         <div className='flex gap-7 flex-row'>
              <div className="  w-full relative overflow-hidden block ">
                <img
                  src={back1}
                  alt="Image 1"
                  className=" object-cover hover:scale-125 hover:-rotate-[10deg] transition duration-1000"
                
                />
              </div>
              <div className="  w-full relative overflow-hidden block
              ">
            
                <img
                  src={back2}
                  alt="Image 2"
                  className=" object-cover hover:scale-125 hover:-rotate-[10deg] transition duration-1000
                  "
                />
              </div>
         </div>
          </div>
     
     
  
  );
}

export default PhotoCollage;
