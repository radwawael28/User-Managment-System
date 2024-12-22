import React, { useContext, useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa6';
import { IoIosHome, IoIosLogOut, IoIosPersonAdd } from 'react-icons/io';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import img from "../../assets/smiling-successful-business-woman-office-260nw-1117963214.jpg"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthContext';

export default function SideBar() {
let [collapsed ,setCollapsed]=useState(false)
let {userData}= useContext(AuthContext)
let navigate= useNavigate()
let toggleCollapse=()=>{
  setCollapsed(! collapsed) 
}
let logout=()=>{
  localStorage.removeItem("userToken")
  navigate("/login")
}
  return (
    <div className='sidebarcontainer vh-100'>
<Sidebar className='vh-100'  collapsed={collapsed}>
  { collapsed ? <FaArrowAltCircleLeft size={25}  onClick={toggleCollapse} className='mx-2 text-center'/>:
  <FaArrowAltCircleRight size={25}  onClick={toggleCollapse} className='mx-2 text-center'/>
  }

<div className="text-center mt-4">
  <img src={userData?.image} alt='profile' className='rounded-circle w-75'/>
  <h6>{userData?.firstName} {userData?.lastName}</h6>
  <h6 className='text-warning'>Admin</h6>
</div>
  <Menu>
    <MenuItem icon={<IoIosHome />}component={<Link to="/dashboard" />}> Home</MenuItem>
    <MenuItem icon={<FaUsers />}component={<Link to="/dashboard/userlist" />}> Users</MenuItem>
    <MenuItem icon={<IoIosPersonAdd />}component={<Link to="/dashboard/adduser" />}> Add User</MenuItem>
    <MenuItem icon={<CgProfile />} component={<Link to="/dashboard/profile"/>}>Profile </MenuItem>
    <MenuItem icon={<IoIosLogOut />}onClick={logout}>LogOut </MenuItem>
  </Menu>
</Sidebar>
    </div>
  )
}
