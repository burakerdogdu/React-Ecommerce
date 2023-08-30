import React, { FormEvent, useState } from 'react'
import { adminlogin } from '../services/service'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { encrypt } from '../util';
function Adminlogin() {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setpassword] = useState('')
  const sendForm = (evt:FormEvent) =>{
    evt.preventDefault()
    adminlogin(username,password).then(res=>{
      const stData= JSON.stringify(res.data)
      
      const cipherText = encrypt(stData)
      sessionStorage.setItem("admin",cipherText)
      navigate('/admin')
    }).catch(err => {
      toast.error("Username Or Password Fail!")
      
    })
  }
  return (
  
    <div className='row'>
      
      <div className='col-sm-4'></div>
      <div className='col-sm-4'>
        <h2>Admin Login</h2>
        <form onSubmit={sendForm}>
          <div className='mb-3'>
            <input required onChange={(evt) => setUsername(evt.target.value)} className='form-control' placeholder='Username' />
          </div>
          <div className='mb-3'>
            <input type='password' required onChange={(evt) => setpassword(evt.target.value)} className='form-control' placeholder='Password' />
          </div>
          <button className='btn btn-success'>Send</button>
          <ToastContainer/>
          </form>
      </div>
      <div className='col-sm-4'></div>
      
    </div>
  )
}

export default Adminlogin