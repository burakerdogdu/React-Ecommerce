import React, { useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { allproduct } from '../services/service'
import { Result } from '../models/product'
import { NavLink } from 'react-router-dom'

function ProductManager() {
    const [arr, setarr] = useState<Result[]>([])
    useEffect(() => {
      allproduct().then(res=>{
        console.log(res.data.result)
        setarr(res.data.result)
      }).catch(err=>{
        console.log(err.message)
      })
    }, [])
    
  return (
    <div><AdminNavbar/>
    <NavLink className="btn btn-success" to={'/ProductSave'}>+ Add New Product </NavLink>
    <div className='row'>
    { arr.map((item,index) =>
        
        <div className='col-sm-3' key={index}>
        <h2>{item.categories[0].category}</h2>
          <div className="card" style={{height:450}} >
  <img src={item.images[0].path} style={{height:150}} className="card-img-top" ></img>
  <div className="card-body">
    <h5  className="card-title">{item.title}</h5>
    <p className="card-text">{item.detail}</p>
    <p className="card-text">{item.price}$</p>
    <NavLink className="btn btn-primary" to={'/ProductDelete/'+item.pid}>Delete</NavLink>
    <NavLink className="btn btn-primary" to={'/ProductUpdate/'+item.pid}>Update</NavLink>
  </div>
</div>
</div>

          
          ) }</div>
          
    </div>
  )
}

export default ProductManager