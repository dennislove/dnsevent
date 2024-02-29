import React from 'react'
import logo from '../../images/logo.jpg'
import { useLocation } from 'react-router-dom';
const NavItem = ({ children, href }) => {
    const location = useLocation();
    const isActive = location.pathname === href;
  
    return (
      <li className="nav-item hover:text-yellow-600 md:text-base sm:text-sm lg:text-base">
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
    const headerList = [
        {
            path:"/",
            name: "Trang Chủ"
        },
        {
            path:"/gioi-thieu",
            name: "Giới Thiệu"
        },
        {
            path:"/du-an",
            name: "Dự Án"
        },
        {
            path:"/dich-vu",
            name: "Dịch Vụ"
        },
        {
            path:"/tin-tuc",
            name: "Tin Tức"
        },
        {
            path:"/lien-he",
            name: "Liên Hệ"
        },
    ]

  return (
   <div className=' '>
      <div className='h-20 lg:h-20 sm:h-16 pm:h-16 bg-black lg:px-[120px] md:px-5 sm:px-5 pm:px-8'>
        <div className='flex items-center justify-between'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-600 hidden lg:hidden md:hidden sm:block pm:block">
        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
      </svg>

         <a href='/'>
            <img src={logo} alt=""
             className='rounded-full h-20 lg:h-20 sm:h-16 pm:h-16 border-2 border-yellow-600'/>
         </a>
        
          <ul className='flex text-white items-center justify-center lg:gap-14 md:gap-10 sm:gap-6 lg:flex md:flex sm:hidden pm:hidden'>
              {headerList.map(item =>(
                 
                      <NavItem href={item.path}>{item.name}</NavItem>
                
              ))}
          </ul>
  
          <div className=''>
              <button className="px-8 lg:px-8 md:px-6 py-4 lg:py-4 md:py-2 sm:px-6 sm:py-2 pm:px-6 pm:py-2 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
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
