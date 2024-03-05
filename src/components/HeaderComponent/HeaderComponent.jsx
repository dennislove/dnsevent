import React, { useState } from 'react'
import logo from '../../images/logo.jpg'
import { useLocation } from 'react-router-dom';
import data from '../../assets/data.json'

const NavItem = ({ children, href,id }) => {
    const location = useLocation();
    const isActive = location.pathname === href;
  
    return (
      <li className="nav-item hover:text-yellow-600 md:text-base sm:text-sm " key={id}>
        <a
          href={href}
          className={`nav-link ${isActive ? 'text-yellow-600' : ''}`}
        >
          {children}
        </a>
      </li>
    );
  };
function HeaderComponent() {
    const headerList = data.sidebar
    let [open,setOpen]=useState(false);

  return (
   <div className='shadow-md w-full top-0 left-0'>
      <div className=' md:h-20 sm:h-16 pm:h-16 bg-black lg:px-[120px]  pm:px-5'>
        <div className='flex items-center justify-between'>
        <button className='md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-600 " >
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
        </button>

         <a href='/'>
            <img src={logo} alt=""
             className='rounded-full md:h-20 pm:h-16 border-2 border-yellow-600'/>
         </a>
      
         <ul className=' text-white items-center justify-center lg:gap-14 md:gap-10 sm:gap-6 md:flex pm:hidden'>
                {headerList.map(item =>(
                   
                        <NavItem key={item.id} href={item.path}>{item.name}</NavItem>
                  
                ))}
            </ul>
  
          <div className=''>
              <button className=" lg:px-8 md:px-6  lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
                  duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-yellow-600 hover:text-white
                  before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
              before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
              PROFILE
              </button>
          </div>
        </div>
      </div>
   </div>
  )
}

export default HeaderComponent
