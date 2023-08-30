import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { ToastContainer, toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { categorydelete } from '../services/service'


function CategoryDelete() {
  const params = useParams()
  const id = params.id
  if(id){
     categorydelete(id).then(res=>{
    toast.success('Category Delete')
  }).catch(err =>{
    toast.warning('Category Not Delete!')
  })
  }
 
  return (
    <div>
        <AdminNavbar/>
        <ToastContainer/></div>
  )
}

export default CategoryDelete