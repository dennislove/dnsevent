import React, { useState } from 'react'
import logo from '../../images/logo.jpg'
import data from '../../assets/data.json'

function Sidebar() {
  const headerList = data.sidebar
 

  return (
        <div className='py-14 px-5 relative'>
          <div className=' absolute right-1 top-1 p-1 bg-yellow-600 ' >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
        </div>
              <img src={logo} alt="logo-DNS" className='m-auto rounded-full md:h-20 pm:h-16 border-2 border-yellow-600'/>
          <ul className='mt-10'>
          {headerList.map(item =>(
                       <li key={item.id} className=' w-full mt-5 uppercase'>
                          <a  href={item.path}>{item.name}</a>
                          <div className='bg-[#f2f2f2] h-[1px] w-full mt-2'></div>
                        </li>
                 
               ))}
          </ul>
          <div className=' mt-5' >
                  <button className=" lg:px-8 md:px-6  lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
                      duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-yellow-600 hover:text-white
                      before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
                  before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
                  PROFILE
                  </button>
              </div>
        </div>
     
  )
}

export default Sidebar
