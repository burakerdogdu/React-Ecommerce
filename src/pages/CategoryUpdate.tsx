import React, { FormEvent, useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { CategoryProduct } from '../models/categoryProduct'
import { categoryupdate } from '../services/service'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function CategoryUpdate() {
 
  const [Category, setcategory] = useState('')
    const params = useParams()
    const id = params.id

    const sendForm = (evt:FormEvent) =>{
        evt.preventDefault()
        if(id)
        categoryupdate(id,Category).then(res=>{
            toast.success('Category Save Done!')
        }).catch(err=>{
            toast.warning('Not Save Please Control')
        })
      }
  return (
    <div className='row'><AdminNavbar/><ToastContainer/>
    <form onSubmit={sendForm}>
        <h2>Please Login Category Specifications</h2>
        <div className='col-sm-4'>
        <div className='col-3'>
        <input className='p-2 mt-3' required onChange={(evt) => setcategory(evt.target.value)} type="text" placeholder='Category Name' />
        </div>
       
        <div className='col-3 mt-3'>
        <button className='p-2 btn btn-success'>Update</button></div>
</div>
</form>
    </div>
  )
}

export default CategoryUpdate