import React, { FormEvent, useState } from 'react'
import { userlogin } from '../services/service'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { encrypt } from '../util';
function UserLogin() {
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState('')
  const sendForm = (evt:FormEvent) =>{
    evt.preventDefault()
    userlogin(email,password).then(res=>{
      const stData= JSON.stringify(res.data)
      const cipherText = encrypt(stData)
      sessionStorage.setItem("admin",cipherText)
      navigate('/')
    }).catch(err => {
      toast.error("email Or Password Fail!")
      
    })
  }
  return (
  
    <div className='row'>
      
      <div className='col-sm-4'></div>
      <div className='col-sm-4'>
        <h1>Welcome</h1>
        <h3>Customer Login</h3>
        <form onSubmit={sendForm}>
          <div className='mb-3'>
            <input required onChange={(evt) => setemail(evt.target.value)} className='form-control' placeholder='email' />
          </div>
          <div className='mb-3'>
            <input type='password' required onChange={(evt) => setpassword(evt.target.value)} className='form-control' placeholder='Password' />
          </div>
          <button className='btn btn-success'>Send</button>
          <NavLink to='/Register'><button  className='btn btn-primary' >Register</button></NavLink>
          <ToastContainer/>
          </form>
          
      </div>
      <div className='col-sm-4'></div>
      
    </div>
  )
}

export default UserLogin