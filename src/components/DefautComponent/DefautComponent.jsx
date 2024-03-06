import React, { useState } from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

function DefautComponent({children}) {


  return (
    <div className='relative'>
   <div className=' absolute z-50 w-full'> <HeaderComponent/></div>
     <div className='pt-10'> {children}</div>
    </div>
  )
}

export default DefautComponent
