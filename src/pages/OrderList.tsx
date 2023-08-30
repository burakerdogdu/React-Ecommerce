import React, { FormEvent, useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { adminorderlist } from '../services/service'
import { Adminorder } from '../models/adminorder'
import { NavLink, useParams } from 'react-router-dom'

function OrderList() {
 
  const [arr, setarr] = useState<Adminorder>()
  let pageSize: number[] = []
  const params = useParams()
 let id =Number(params.id)
 let totalpage = 1
 for (let index = 0; index < totalpage; index++) {
  pageSize[index]=index
  
}


const nextpage = (()=>{
  id= id+1
})

const backpage=(()=>{
  id = id-1
})

  useEffect(() => {
    
    
  

      adminorderlist(id).then(res=>{
        setarr(res.data)
       totalpage=res.data.totalPages
        
        console.log(pageSize)
        console.log(res.data)
        console.log(id)
    })
    
  }, [])
    
    
  
  
  return (
    <div>
      <AdminNavbar/>
      <table className="table">
  <thead>
    <tr>
    <th scope="col">No</th>
      <th scope="col">User Name</th>
      <th scope="col">User Surname</th>
      <th scope="col">User Age</th>
      <th scope="col">Email</th>
      <th scope="col">Adress</th>
      <th scope="col">Order ID</th>
      <th scope="col">Product ID</th>
      <th scope="col">Product Name</th>
      
    </tr>
  </thead>
  <tbody>
    
      {arr?.content.map((item,index)=>
      
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>{item.surname}</td>
      <td>{item.age}</td>
      <td>{item.email}</td>
      <td>{item.adress}</td>
      <td>{item.oid}</td>
      <td>{item.pid}</td>
      <td>{item.productname}</td>
    </tr>
      )}
      
    </tbody>
    </table>
      

      <nav aria-label="Page navigation example">
  <ul className="pagination">
    <NavLink to={'/OrderList/'+ id}><li role='button' onClick={backpage} className="page-item"><a className="page-link" >Previous</a></li></NavLink>
    
      {pageSize?.map((item,index)=>
      
       <NavLink to={'OrderList/'+item}><li key={item} className="page-item"><a className="page-link" href="#">{item+1}</a></li>
</NavLink> 

      )}

   <NavLink to={'/OrderList/'+ id}> <li onClick={nextpage} role='button' className="page-item"><a className="page-link" >Next</a></li></NavLink>
  </ul>
  
</nav>
</div>
  )
}

export default OrderList

function next(arg0: () => void) {
  throw new Error('Function not implemented.')
}
function nextpage(arg0: () => void) {
  throw new Error('Function not implemented.')
}

function backpage(arg0: () => void) {
  throw new Error('Function not implemented.')
}

