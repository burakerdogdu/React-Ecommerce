import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { allproduct, getcategory } from '../services/service'
import { Result, Products } from '../models/product'
import { NavLink, useNavigate } from 'react-router-dom'
import { CaResult, Category } from '../models/category'

function Home() {

  const [arr, setarr] = useState<Result[]>([])
  const [category, setcategory] = useState<CaResult[]>([])
  
  useEffect(() => {
   allproduct().then( res =>{
      console.log(res.data.result)
      setarr(res.data.result)
   }).catch(err=>{

   })

   getcategory().then(res => {
    console.log(res.data.result)
    setcategory(res.data.result)
   })
  }, []) 
  
  return (
    <>
        
        <Navbar></Navbar>
        <div className='row'>
          <h2>Categories</h2>
          <div className='col-sm-3'>

          {category.map((item,index)=>

              <NavLink key={index} to={'/Category/'+item.cid}><li role='button'>{item.category}</li></NavLink> 
          
          )}

          </div>
          
        { arr.map((item,index) =>
        
        <div className='col-sm-3' key={index}>
        <h2>{item.categories[0].category}</h2>
          <div className="card" style={{height:450}} >
  <img src={item.images[0].path} style={{height:150}} className="card-img-top" ></img>
  <div className="card-body">
    <h5  className="card-title">{item.title}</h5>
    <p className="card-text">{item.detail}</p>
    <p className="card-text">{item.price}$</p>
    <NavLink className="btn btn-primary" to={'/ProductDetail/'+item.pid}>Detail</NavLink>
  </div>
</div>
          
          </div>
          ) }
          </div>
    </>
  )
}

export default Home