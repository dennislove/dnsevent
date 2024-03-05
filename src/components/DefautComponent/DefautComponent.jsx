import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'


function DefautComponent({children}) {
  return (
    <div className=''>
     <div className=''> <HeaderComponent/></div>
      {children}
    </div>
  )
}

export default DefautComponent
