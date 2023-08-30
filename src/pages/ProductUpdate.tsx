import React, { FormEvent, useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { ToastContainer, toast } from 'react-toastify'
import { getcategoryid, getimages, imagessave, productsave, productupdate, singleproduct } from '../services/service'
import { useParams } from 'react-router-dom'
import { Product, Result } from '../models/product'
import { error } from 'console'

function ProductUpdate() {
  const [product, setproduct] = useState<Result>()
  let [title, settitle] = useState('')
  let [detail, setdetail] = useState('')
  let [price, setprice] = useState('')
  let [stock, setstock] = useState('')
  let [brand, setbrand] = useState('')
  let [image1, setimage1] = useState('')
  let [image2, setimage2] = useState('')
  let [category, setcategory] = useState('')
  
let iid1=''
let iid2=''
let cid=''
 
  const params = useParams()
  const id = params.id
   useEffect(() => {
    if(id)
     singleproduct(id).then(res => {
        setproduct(res.data.result)
        settitle(res.data.result.title)
        setdetail(res.data.result.detail)
        setprice(res.data.result.price.toString())
        setstock(res.data.result.stock.toString())
        setbrand(res.data.result.brand)
        setimage1(res.data.result.images[0].path)
        setimage2(res.data.result.images[1].path)
        setcategory(res.data.result.categories[0].category)
     })
   }, [])
   
 
  const sendForm = (evt:FormEvent) =>{
      evt.preventDefault()
     

            if(image1)
            getimages(image1).then(res3=>{
               iid1 = res3.data.result.iid
              
                
              
              console.log(res3.data.result.iid)
              console.log(iid1+'iid1')
            })
              if(image2)
              getimages(image2).then(res4=>{
                 iid2 = res4.data.result.iid
              
                
                
                console.log(res4.data.result.iid)
                console.log(iid2+'iid2')
              }).finally(()=>{
                if(category)
                getcategoryid(category).then(res5=>{
                   cid = res5.data.result.cid
                  
                  
                   
                  console.log(res5.data.result.cid)
                  console.log(cid+'cid')
                }).finally(()=>{
                  if(id)
                  productupdate(id,cid,title,detail,price,stock,brand,iid1,iid2).then(res=>{
          
                    if(res.data){
                      toast.success("Product Update Done!")
                    }
                  }).catch(err => {
                    toast.error("Please Control!")
                    
                  })
                })
    
              })
            
          
    
        
        
    }



  return (
    <div className='row'><AdminNavbar/><ToastContainer/>
    <form onSubmit={sendForm}>
        <h2>Please Login Product Specifications</h2>
        <div className='col-sm-4'>
        <div className='col-3'>
        <input className='p-2 mt-3' required onChange={(evt) => settitle(evt.target.value)} type="text" defaultValue={product?.title} />
        </div>
        <div className='col-3'>
        <input className='p-2 mt-3' required onChange={(evt) => setdetail(evt.target.value)} type="text" defaultValue={product?.detail}  />
        </div>
        <div className='col-3'>
        <input className='p-2 mt-3' required onChange={(evt) => setprice(evt.target.value)} type="text" defaultValue={product?.price}  /></div>
        <div className='col-3'>
        <input className='p-2 mt-3' required onChange={(evt) => setstock(evt.target.value)} type="text" defaultValue={product?.stock}  /></div>
        <div className='col-3 mt-3'>
        <input className='p-2' required onChange={(evt) => setbrand(evt.target.value)} type="text" defaultValue={product?.brand}  /></div>
        <div className='col-3 mt-3'>
        <input className='p-2' required onChange={(evt) => setimage1(evt.target.value)} type="text" defaultValue={product?.images[0]?.path}  /></div>
        <div className='col-3 mt-3'>
        <input className='p-2' required onChange={(evt) => setimage2(evt.target.value)} type="text" defaultValue={product?.images[1]?.path}  /></div>
        <div className='col-3 mt-3'>
        <input className='p-2' required onChange={(evt) => setcategory(evt.target.value)} type="text" defaultValue={product?.categories[0].category}  /></div>
        
        <div className='col-3 mt-3'>
        <button  className='p-2 btn btn-success'>Update</button></div>
  </div>
  </form>
    </div>
  )
}

export default ProductUpdate