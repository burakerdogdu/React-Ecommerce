import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { CategoryProduct, Content } from '../models/categoryProduct'
import { categoryproduct } from '../services/service'
import { NavLink, useParams } from 'react-router-dom'

function Category() {
  const [arr, setarr] = useState<Content[]>([])
  const params = useParams()
  const id = params.id
  useEffect(() => {
    if(id){
      categoryproduct(id).then(res=>{
        console.log(res.data)
        if(res.data.content){
          setarr(res.data.content)
        }
        
      }).catch(err=>{
        console.log(err.message)
      })
    }
    
  }, [])


  return (
    <>
    <Navbar/>
    <div className='row'>

    { arr.map((item,index) =>
        
        <div className='col-sm-3' key={index}>
        <h2>Products</h2>
          <div className="card" style={{height:450}} >
  <img src={item.path} style={{height:150}} className="card-img-top" ></img>
  <div className="card-body">
    <h5  className="card-title">{item.title}</h5>
    <p className="card-text">{item.detail}</p>
    <p className="card-text">{item.price}$</p>
    <NavLink className="btn btn-primary" to={'/ProductDetail/'+item.pid}>Detail</NavLink>
  </div>
</div>
          
          </div>
    )}
 </div>
   
    </>
  )
}

export default Category