import React, { FormEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { userregister } from '../services/service'

function Register() {

  const navigate = useNavigate()
  const [name, setname] = useState('')
  const [surname, setsurname] = useState('')
  const [email, setemail] = useState("")
  const [password, setpassword] = useState('')
  const [adress, setadress] = useState('')
  const [age, setage] = useState('')
  const sendForm = (evt:FormEvent) =>{
    evt.preventDefault()
    userregister(name,surname,email,password,adress,Number(age)).then(res=>{
     
      navigate('/UserLogin')
    }).catch(err => {
      toast.error(err.message+"Fail!")
      
    })
  }


  return (
    <div className='row'>
      
      <div className='col-sm-4'></div>
      <div className='col-sm-4'>
        <h1>Welcome</h1>
        <h3>Customer Register</h3>
        <form onSubmit={sendForm}>
        <div className='mb-3'>
            <input required onChange={(evt) => setname(evt.target.value)} className='form-control' placeholder='name' />
          </div>
          <div className='mb-3'>
            <input required onChange={(evt) => setsurname(evt.target.value)} className='form-control' placeholder='surname' />
          </div>
          <div className='mb-3'>
            <input required onChange={(evt) => setemail(evt.target.value)} className='form-control' placeholder='email' />
          </div>
          <div className='mb-3'>
            <input type='password' required onChange={(evt) => setpassword(evt.target.value)} className='form-control' placeholder='Password' />
          </div>
          <div className='mb-3'>
            <input required onChange={(evt) => setadress(evt.target.value)} className='form-control' placeholder='adress' />
          </div>
          <div className='mb-3'>
            <input required onChange={(evt) => setage(evt.target.value)} className='form-control' placeholder='age' />
          </div>
          <button className='btn btn-success'>Send</button>
          
          <ToastContainer/>
          </form>
          
      </div>
      <div className='col-sm-4'></div>
      
    </div>
  )
}

export default Register