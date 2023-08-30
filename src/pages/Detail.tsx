import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ordersave, singleproduct } from '../services/service'
import { Image, Result, Products, Product } from '../models/product'

import { ToastContainer, toast } from 'react-toastify'

import { IUser } from '../models/IUser'
import { decrypt } from '../util'

function Detail() {
  const params = useParams()
const id = params.id
const navigate = useNavigate()

const [arr, setarr] = useState<Product>()


const [bigImage, setbigImage] = useState<Image>()
useEffect(() => {
  if(id){
    singleproduct(id).then(res => {
       console.log(res.data+'use effect')
        setarr(res.data)
      setbigImage(res.data.result.images[0])
      
    
    }).catch(err =>{
      navigate('/')
      console.log(err)
    })
  }
  
}, [])


const stseesion = sessionStorage.getItem('admin')
var admin:IUser

if(stseesion !== null){
  const plainText = decrypt(stseesion)
  admin = JSON.parse(plainText)
}
const addBasket=()=>{
  if(arr?.result)
  ordersave(arr?.result.pid, arr?.result.title,admin.uid).then(res =>{
    
    if(res.data){
      
      toast.success("Add Basket Success!")
      
    }
    
    console.log(res.data)
    
   
  }).catch(err => {
    console.log(err)
  })
  
  

}

return ( 


<div className='row'>
<Navbar />

        <div className='col-sm-6'>
        
          
            
            <ToastContainer/>
            <h2>Product Name: {arr?.result.title}</h2>
            <p>Product Detail: {arr?.result.detail}</p>
            <p>Price: {arr?.result.price}$</p>
            <p>Product Brand: {arr?.result.brand}</p>
            <p>Stock: {arr?.result.stock}</p>
           <button onClick={addBasket} className='btn btn-danger'>Add Basket</button>
           
           
            <div className='col-sm-6'>
                <img src={bigImage?.path} className="img-fluid" />
                </div>
                <div className='row mt-3'>
                  
                  {arr?.result.images.map((item,index)=>
                  <div  key={index} className='col-2' role='button' onClick={(evt)=>   setbigImage(item)}>
                     <img src={item.path} className='img-thumbnail'/>
                     </div>
                  )}
           </div>
            
      </div>     
      </div>  
)}
        


        export default Detail