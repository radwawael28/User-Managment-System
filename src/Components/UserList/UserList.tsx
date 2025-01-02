import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify'
import { Link, useNavigate} from 'react-router-dom'

export default function UserList() {
  let [userId, setUserId]= useState(0)
  let [userData, setUserData]= useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true)
    setUserId(user.id)
    setUserData(user)

  };
  let navigate= useNavigate()
  const [users, setUsers] = useState([])
let getUsers =async () =>{
  try { 
    let response =await axios.get("https://dummyjson.com/users")
    setUsers(response?.data?.users)
    console.log(userId)
  } catch (error) {
    console.log(error)
  }
}
let deleteUser= () =>{
  try {
    let response =axios.delete(`https://dummyjson.com/users/${userId}`)
    console.log(response)
    handleClose()
    toast.success("delete success")
    
  } catch (error) {
    console.log(error)
    toast.errror('sorry faild')
  }
}
let navigateToAddUser= ()=>{
navigate("/dashboard/adduser")
}
useEffect(()=>{
  getUsers()
},[])

  return (
    <div className='list'>
     <div className="d-flex justify-content-between align-items-center mx-3 mt-3">
      <h3>User List</h3>
      <button onClick={navigateToAddUser} className='btn btn-warning text-white'>
        add new user
      </button>
     </div>

     <hr />
     <Table striped bordered hover>
      <thead>
        <tr>
        <th>#</th>
        <th></th>
        <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>phone</th>
          <th>Birthday</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
{users.map((user)=>(

<tr key={user.id}>
<td>{user.id}</td>
<td><img src={user.image} alt="" className='w-25'/></td>
<td>{user.firstName}</td>
<td>{user.lastName}</td>
<td>{user.email}</td>
<td>{user.phone}</td>
<td>{user.birthDate}</td>
<td> <Link to={`/dashboard/updateuser/${user.id}`}> <CiEdit onClick={()=>navigate("/dashboard/profile")} className='text-warning ' size={25}/></Link></td>
<td><MdDelete onClick={()=>handleShow(user)} className='text-danger ' size={25}/></td>
</tr>

))}
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>confirn deleting{userData.firstName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure you want to delete! {userData.firstName} {userData.lastName} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>deleteUser()}>
            yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>  
    </div>
  )
}
