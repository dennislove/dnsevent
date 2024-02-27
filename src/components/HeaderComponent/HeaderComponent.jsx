import React from 'react'
import logo from '../../images/logo.jpg'
import { useLocation } from 'react-router-dom';
const NavItem = ({ children, href }) => {
    const location = useLocation();
    const isActive = location.pathname === href;
  
    return (
      <li className="nav-item hover:text-yellow-600 md:text-sm">
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
      <div className='h-20 bg-black px-[150px] md:px-10 md:h-16'>
        <div className='flex items-center justify-between'>
         <a href='/'>
            <img src={logo} alt=""
             className='rounded-full h-20 md:h-16 border-2 border-yellow-600'/>
         </a>
        
          <ul className='flex text-white items-center justify-center gap-14 md:gap-10'>
              {headerList.map(item =>(
                 
                      <NavItem href={item.path}>{item.name}</NavItem>
                
              ))}
          </ul>
  
          <div className=''>
              <button className="px-8 py-4 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
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
