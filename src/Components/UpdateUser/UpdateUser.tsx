import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
 

export default function UpdateUser() {
    let {register, handleSubmit, formState:{errors}}=useForm()
      const {id}= useParams()
      console.log(id)
    const [user, setUser] = useState([])
    const [tempUser, settempUser] = useState([])
    let updateUser= async() =>{
      try {
        let response = await axios.get(`https://dummyjson.com/users/${id}`)
        setUser(response?.data)
        settempUser(response?.data)
        console.log(response?.data.name)
   
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
      <div className="mx-3">
      <h3>Update User</h3>
      </div>
    <hr />

<form onSubmit={handleSubmit(updateUser)} className='shadow-lg p-4 m-5 rounded'>

      <div className="row">
<div className="col-md-6">

  <label  className="form-label">user</label>
    <input 
    type="Name" 
    className="form-control" 
  placeholder='Enter Your First Name'
  value={tempUser.firstName} 
  {...register("firstName",{required:"firstName is required"})}
  />
   
  {errors.firstName && (
  <span className='text-danger'>{errors.firstName.message}</span>)}
 </div>
<div className="col-md-6">
        <label  className="form-label">Last Name</label>
    <input type="name" 
    className="form-control" 
  placeholder='Enter Your Last Name'
  value={user.lastName}
  {...register("LastName",{required:"LastName is required"})}/>
  
  {errors.LastName && (
  <span className='text-danger'>
    {errors.LastName.message}</span>)}
  </div>
  </div>
      <div className="row my-4">
        <div className="col-md-6">
        <label  className="form-label">Email</label>
    <input type="email" 
    className="form-control" 
  placeholder='Enter Your Email'
  value={user.email}
  {...register("email",{required:"Email is required" , pattern:{
    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,message:"this email not valid"
  } })}
  />
  
  {errors.email&& (<span className='text-danger'>
   {errors.email.message}</span>)}
  
   </div> 
        <div className="col-md-6">
        <label  className="form-label">Age</label>
    <input type="number" 
    className="form-control" 
  placeholder='Enter Your Age'
  value={user.age}
  {...register("age",{required:"Age is required", min:{value:0 , message:"age should not be less than 0" },max:{
    value:50, message:"age should not be more than 50"
  }})}
  />
   
  {errors.age && <span className='text-danger'>
   {errors.age.message}</span>}
   </div>
      
      </div>
      <div className="row">
        <div className="col-md-6">
        <label  className="form-label">Phone Number</label>
    <input type="phone" 
    className="form-control" 
  placeholder='Enter Your phone number'
  value={user.phone} 
  {...register("phone",{required:"phone is required"})}
  />

  {errors.phone && <span className='text-danger'>
   {errors.phone.message}</span>}  
   </div> 
        <div className="col-md-6">
        <label  className="form-label">Birth Date</label>
    <input type="text" 
    className="form-control" 
  placeholder='Enter Your Birth Date'
  value={user.birthDate}
  {...register("birthDate",{required:"birthDate is required"})}
  />
 
  {errors.birthDate && <span className='text-danger'>
   {errors.birthDate.message}</span>}
   </div>
        
      </div>
      <div className='text-center'>
      <button className='btn btn-warning text-white w-50 my-5 m-auto'>update</button>
   
      </div>
     
      </form>
    
    </div>
  )
}

