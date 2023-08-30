import React, { FormEvent, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { getcategoryid, getimages, imagessave, productsave } from '../services/service'
import { ToastContainer, toast } from 'react-toastify'

function ProductSave() {
  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')
  const [price, setprice] = useState('')
  const [stock, setstock] = useState('')
  const [brand, setbrand] = useState('')
  const [image1, setimage1] = useState('')
  const [image2, setimage2] = useState('')
  const [category, setcategory] = useState('')

let iid1=''
let iid2=''
let cid=''
 
  
   
 
  const sendForm = (evt:FormEvent) =>{
      evt.preventDefault()
      imagessave(image1).then(res=>{
        console.log(res.data)
        }).finally(()=>{
    
          imagessave(image2).then(res2=>{
            console.log(res2.data)
          }).finally(()=>{
            getimages(image1).then(res3=>{
               iid1 = res3.data.result.iid
              
                
              
              console.log(res3.data.result.iid)
              console.log(iid1+'iid1')
            }).finally(()=>{
    
              getimages(image2).then(res4=>{
                 iid2 = res4.data.result.iid
              
                
                
                console.log(res4.data.result.iid)
                console.log(iid2+'iid2')
              }).finally(()=>{
    
                getcategoryid(category).then(res5=>{
                   cid = res5.data.result.cid
                  
                  
                   
                  console.log(res5.data.result.cid)
                  console.log(cid+'cid')
                }).finally(()=>{
                  productsave(cid,title,detail,price,stock,brand,iid1,iid2).then(res=>{
          
                    if(res.data){
                      toast.success("Product Save Done!")
                    }
                  }).catch(err => {
                    toast.error("Please Control!")
                    
                  })
                })
    
              })
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
      <input className='p-2 mt-3' required onChange={(evt) => settitle(evt.target.value)} type="text" placeholder='Product Title' />
      </div>
      <div className='col-3'>
      <input className='p-2 mt-3' required onChange={(evt) => setdetail(evt.target.value)} type="text" placeholder='Product Detail' />
      </div>
      <div className='col-3'>
      <input className='p-2 mt-3' required onChange={(evt) => setprice(evt.target.value)} type="text" placeholder='Product Price' /></div>
      <div className='col-3'>
      <input className='p-2 mt-3' required onChange={(evt) => setstock(evt.target.value)} type="text" placeholder='Stock' /></div>
      <div className='col-3 mt-3'>
      <input className='p-2' required onChange={(evt) => setbrand(evt.target.value)} type="text" placeholder='Brand' /></div>
      <div className='col-3 mt-3'>
      <input className='p-2' required onChange={(evt) => setimage1(evt.target.value)} type="text" placeholder='İmage Path' /></div>
      <div className='col-3 mt-3'>
      <input className='p-2' required onChange={(evt) => setimage2(evt.target.value)} type="text" placeholder='İmage Path' /></div>
      <div className='col-3 mt-3'>
      <input className='p-2' required onChange={(evt) => setcategory(evt.target.value)} type="text" placeholder='Category' /></div>
      
      <div className='col-3 mt-3'>
      <button  className='p-2 btn btn-success'>Save</button></div>
</div>
</form>
  </div>
  
  )
}

export default ProductSave