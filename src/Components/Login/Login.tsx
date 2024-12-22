import axios from 'axios'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../Context/AuthContext'

interface LoginFormInputs {
  username: string;
  password:string;
}
export default function Login() {
  let {register ,handleSubmit,formState:{errors}}=useForm()
  let navigate= useNavigate()
  let {saveUserData}= useContext(AuthContext)
  let onSubmit = async(data)=>{
    try {
      let response = await axios.post('https://dummyjson.com/auth/login',data)
      localStorage.setItem("userToken",response?.data?.accessToken)
      saveUserData();
      toast.success("Login successfully!")
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
      toast.error("Login faild!")
    }
  }
  return (
   <div className="container-fluid login-container ">
    <div className="row vh-100 justify-content-center align-items-center">
      <div className="col-md-4 bg-white rounded p-5 ">
<div className="login-title text-center">
<h3>User Managment System</h3>
<h4>Sign In</h4>
<small>Enter your credentials to access your account</small>
</div>
<form  onSubmit={handleSubmit(onSubmit)}>
  
<div className="mb-3 mt-3">
    <label  className="form-label">UserName </label>
    <input type="UserName" 
    className="form-control"
      placeholder='Enter Your UserName'
      {...register("username",{required:"username is required"})}/>
      {errors.password && <span className='text-danger'>
        {errors.username.message}</span>}
  <div className="mb-3 mt-2">
    <label  className="form-label">Password</label>
    <input type="password" 
    className="form-control" 
  placeholder='Enter Your Password'
  {...register("password",{required:"password is required"})}/>
  {errors.password && <span className='text-danger'>
    {errors.password.message}</span>}
  </div>
  <button type="submit" className="btn btn-warning w-100 text-white my-4">Submit</button>
  </div>
</form>
      </div>

    </div>
   </div>
  )
}
