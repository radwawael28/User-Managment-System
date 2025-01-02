import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function Profile() {
  const dataprop =useLocation()
  console.log(dataprop)
  let{userData}=useContext(AuthContext)
   const [user, setUser] = useState([])
  console.log(userData?.id)
let updateUser= async() =>{
  try {
    let response = await axios.get(`https://dummyjson.com/users/${userData?.id}`)
    setUser(response?.data)
  console.log(response?.data)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
updateUser()
    },[])
  return (
    <div>
    <div className='profile position-relative'>
      <div className="mx-3">
      <h3>Profile</h3>
      </div>
    <hr />
<div className="profile-img text-center position-relative' ">
 <img className ="position-absolute rounded-circle" src={user?.image} alt="" />
</div>
<form  className='shadow-lg p-4 m-5 rounded position-relative profile-form '>

      <div className="row pt-3 mt-5">
<div className="col-md-6 ">

  <label  className="form-label">First Name</label>
    <input 
    type="Name" 
    className="form-control" 
  placeholder='Enter Your First Name'
  value={user?.firstName} 
  
  />
 </div>
<div className="col-md-6">
        <label  className="form-label">Last Name</label>
    <input type="name" 
    className="form-control" 
  placeholder='Enter Your Last Name'
  value={user?.lastName}
 />
  </div>
  </div>
      <div className="row my-4">
        <div className="col-md-6">
        <label  className="form-label">Email</label>
    <input type="email" 
    className="form-control" 
  placeholder='Enter Your Email'
  value={user?.email}
  
  />
  
  
  
   </div> 
        <div className="col-md-6">
        <label  className="form-label">Age</label>
    <input type="number" 
    className="form-control" 
  placeholder='Enter Your Age'
  value={user?.age}

  />
   

   </div>
      
      </div>
      <div className="row">
        <div className="col-md-6">
        <label  className="form-label">Phone Number</label>
    <input type="phone" 
    className="form-control" 
  placeholder='Enter Your phone number'
  value={user?.phone} 

  />


   </div> 
        <div className="col-md-6">
        <label  className="form-label">Birth Date</label>
    <input type="text" 
    className="form-control" 
  placeholder='Enter Your Birth Date'
  value={user?.birthDate}
  />

   </div>
        
      </div>
      </form>
    
    </div>
    </div>
  )
}

