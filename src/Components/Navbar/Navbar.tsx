import React, { useContext } from 'react'
import { CiBellOn, CiCircleChevLeft } from 'react-icons/ci'
import { AuthContext } from '../Context/AuthContext'

export default function Navbar() {
  let{userData}= useContext(AuthContext)

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light align-items-center">
  <div className="container-fluid">
  <CiCircleChevLeft className='text-secondary' size={25} />
<p>Welcome {userData?.firstName}</p>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <CiBellOn size={30} />
      </form>
  
  </div>
</nav>
    </div>
  )
}
