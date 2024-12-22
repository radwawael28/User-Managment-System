import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import SideBar from '../Sidebar/SideBar'

export default function MasterLayout() {
  return (
   <div className="d-flex">
<div><SideBar/> </div>
      <div className="w-100">
        <Navbar/>
        <Outlet/>
      </div>
    </div>

  
  )
}
