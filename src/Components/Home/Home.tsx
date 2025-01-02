import React, { useContext } from 'react'
import img from "../../assets/personal-settings-concept-illustration_114360-2251.jpg"
import { AuthContext } from '../Context/AuthContext'
import { FaChildReaching } from 'react-icons/fa6'
export default function Home() {
    let{userData}= useContext(AuthContext)
  return (
    <div>
      <div className=" home container">
        <div className="row">
          <div className="col-md-6 texthome text-center d-flex justify-content-center align-items-center flex-column">
<h2>Welcome {userData?.firstName} <FaChildReaching color='#a8b1ba'/></h2>
<h3 className='mb-4'> To User Managment System</h3>
<p className=' text-muted'>Create an exceptional user experience and increase sign-ups with beautiful registration and login forms, and customizable user profiles. All the user management tools you need in <span className='text-primary'>one powerful solution.</span> </p>
<button className='btn btn-outline-primary rounded-5 pe-4 ps-4 '>get started</button>
          

</div>
          <div className="col-md-6">
<img src={img} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}
