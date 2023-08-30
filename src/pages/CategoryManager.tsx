import React, { useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { getcategory } from '../services/service'
import { CaResult } from '../models/category'
import { NavLink } from 'react-router-dom'

function CategoryManager() {
    const [category, setcategory] = useState<CaResult[]>([])
  useEffect(() => {
   getcategory().then(res=>{
    console.log(res.data.result)
    setcategory(res.data.result)
   }).catch(err=>{
    console.log(err.message)
   })
  }, [])
  
  return (
    <div><AdminNavbar/>
   <NavLink to={'/CategorySave'}><div><button className='btn btn-success'>+ Add New Category</button></div></NavLink> 
        <table className="table">
  <thead>
    <tr>
    <th scope="col">No</th>
      <th scope="col">CID</th>
      <th scope="col">Category</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  
    <tbody>
        {category.map((item,index)=>
           
             <tr>
            <th scope="row">{index+1}</th>
            <td>{item.cid}</td>
            <td>{item.category}</td>
            <NavLink to={'/CategoryDelete/'+item.cid}><td><button className='btn btn-danger'>Delete</button></td></NavLink>
            <NavLink to={'/CategoryUpdate/'+item.cid}><td><button className='btn btn-warning'>Update</button></td></NavLink>
            </tr>
            
        )}
      </tbody>
    
    
    </table>
    </div>
  )
}

export default CategoryManager