import React, { useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { useParams } from 'react-router-dom'
import { productdelete } from '../services/service'
import { ToastContainer, toast } from 'react-toastify'

function ProductDelete() {

  const params = useParams()
  const id = params.id
  useEffect(() => {
    if(id)
    productdelete(id).then(res=>{
      toast.success("Product Delete")
    }).catch(err=>{
      toast.error("Product Not Delete")
      console.log(err.message)
    })
  }, [])
  

  return (
    <div><AdminNavbar/>
        <ToastContainer/></div>
  )
}

export default ProductDelete