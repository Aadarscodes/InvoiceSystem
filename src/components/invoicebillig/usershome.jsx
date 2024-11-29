import React from 'react'
import UserSidebar from './UsersSidebar'
import './usershome.css'
import BillingForm from './Sidebarcomponent/CreateInvoce'
function Usershome() {
  return (
    <div className='usersbg'>
        <div className='usersGlass'>
            <UserSidebar/>
            <div className='Invocefrom'>
              <BillingForm/>
            </div>
        </div>
      </div>
  )
}

export default Usershome
