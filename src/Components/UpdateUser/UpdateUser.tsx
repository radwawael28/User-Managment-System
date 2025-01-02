import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
 

export default function UpdateUser() {
  const navigate=useNavigate()
  const [user, setUser] = useState({})
  const {id}= useParams()
    let {register, handleSubmit,setValue, formState:{errors} }=useForm({
      defaultValues: 
     { firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      phone:user.phone,
      age:user.age,
      birthData:user.birthDate},
    })

    let onSubmit= async(data)=>{
      try {
       let response = await axios.post("https://dummyjson.com/users/add",data)
       console.log(response)
       toast.success("user updateed successfully")
       navigate("/dashboard/userlist")
       
      } catch (error) {
       console.log(error)
       toast.error("faild to update")
      }
     }
  
    

    let updateUser= async() =>{
      try {
        let response = await axios.get(`https://dummyjson.com/users/${id}`)
        setUser(response?.data)
      console.log(response?.data)
      } catch (error) {
        console.log(error)
   
       
      }
    }

useEffect(()=>{
setValue('firstName', user.firstName);
setValue('lastName', user.lastName);
setValue('age', user.age);
setValue('email', user.email);
setValue('phone', user.phone);
setValue('birthDate', user.birthDate);

    },[user ,setValue])


useEffect(()=>{
  updateUser()
},[])
  return (
    <div>
      <div className="mx-3">
      <h3>Update User</h3>
      </div>
    <hr />

    <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg p-4 m-5 rounded'>
      <div className="row">
<div className="col-md-6">
  <label  className="form-label">First Name</label>
    <input 
    type="text" 
    className="form-control" 
  placeholder='Enter Your First Name'
  {...register("firstName",{required:"firstName is required"})}
  />
   
  {errors.firstName && (
  <span className='text-danger'>{errors.firstName.message}</span>)}
 </div>
<div className="col-md-6">
        <label  className="form-label">Last Name</label>
    <input type="text" 
    className="form-control" 
  placeholder='Enter Your Last Name'
  {...register("lastName",{required:"LastName is required"})}/>
  
  {errors.lastName && (
  <span className='text-danger'>
    {errors.lastName.message}</span>)}
  </div>
  </div>
      <div className="row my-4">
        <div className="col-md-6">
        <label  className="form-label">Email</label>
    <input type="text" 
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
    <input type="text" 
    className="form-control" 
  placeholder='Enter Your phone number'
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
  {...register("birthDate",{required:"birthDate is required"})}
  />
 
  {errors.birthDate && <span className='text-danger'>
   {errors.birthDate.message}</span>}
   </div>
        
      </div>
      <div className='text-center'>
      <button className='btn btn-warning text-white w-50 my-5 m-auto'>Update</button>
   
      </div>
      </form>
    
    </div>
  )
}

