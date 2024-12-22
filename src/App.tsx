import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import AuthLayout from './Components/AuthLayout/AuthLayout'
import NotFound from './Components/NotFound/NotFound'
import Login from './Components/Login/Login'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import UserList from './Components/UserList/UserList'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddUser from './Components/AddUser/AddUser'
import Profile from './Components/Profile/Profile'
import UpdateUser from './Components/UpdateUser/updateUser'
function App() {
let routes= createBrowserRouter([{
  
  path:"/",
  element:<AuthLayout/>,
  errorElement:<NotFound/>,
  children:[
  {index:true, element:<Login/>},
  {path:"login",element:<Login/>}
]
},{
  path:"dashboard",
  element:<MasterLayout/>,
  errorElement:<NotFound/>,
  children:[
    {index:true, element:<Home/>},
  {path:"home",element:<Home/>},
  {path:"userlist",element:<UserList/>},
  {path:"adduser",element:< AddUser/>},
  {path:"updateuser/:id",element: <UpdateUser/>},
  {path:"profile", element:<Profile/>},
]
}
]) 




  return (
    <>
       <ToastContainer />
    <RouterProvider router={routes}></RouterProvider>
     
    </>
  )
}

export default App
