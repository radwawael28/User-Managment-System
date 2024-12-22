import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function AddUser() {
  let {register, handleSubmit, formState:{errors}}=useForm()
  let navigate= useNavigate()

  let onSubmit= async(data)=>{
   try {
    let response = await axios.post("https://dummyjson.com/users/add",data)
    console.log(response)
    toast.success("user added successfully")
    navigate("/dashboard/userlist")
    
   } catch (error) {
    console.log(error)
    toast.error("faild")
   }
  }
  return (
    <div>
      <div className="mx-3">
      <h3>add user</h3>
      </div>
    <hr />
    <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg p-4 m-5 rounded'>
      <div className="row">
<div className="col-md-6">
  <label  className="form-label">First Name</label>
    <input 
    type="Name" 
    className="form-control" 
  placeholder='Enter Your First Name'
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
    <input type="Number" 
    className="form-control" 
  placeholder='Enter Your phone number'
  {...register("phone",{required:"phone is required"})}
  />

  {errors.phone && <span className='text-danger'>
   {errors.phone.message}</span>}  
   </div> 
        <div className="col-md-6">
        <label  className="form-label">Birth Date</label>
    <input type="date" 
    className="form-control" 
  placeholder='Enter Your Birth Date'
  {...register("birthDate",{required:"birthDate is required"})}
  />
 
  {errors.birthDate && <span className='text-danger'>
   {errors.birthDate.message}</span>}
   </div>
        
      </div>
      <div className='text-center'>
      <button className='btn btn-warning text-white w-50 my-5 m-auto'>save</button>
   
      </div>
      </form>
    </div>
  )
}
