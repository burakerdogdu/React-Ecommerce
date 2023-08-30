import React, { FormEvent, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { ToastContainer, toast } from 'react-toastify'
import { categorysave, productsave } from '../services/service'

function CategorySave() {
    const [Category, setcategory] = useState('')
    

    const sendForm = (evt:FormEvent) =>{
        evt.preventDefault()
        categorysave(Category).then(res=>{
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
        <button className='p-2 btn btn-success'>Save</button></div>
</div>
</form>
    </div>
    
  )
}

export default CategorySave