import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'


function DefautComponent({children}) {
  return (
    <div className=''>
      <HeaderComponent/>
      {children}
    </div>
  )
}

export default DefautComponent
