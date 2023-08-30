import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { orderdelete, userorderlist } from '../services/service'
import { IUser } from '../models/IUser'
import { UserOrders } from '../models/UserOrders'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import { decrypt } from '../util'

function Profile() {
const stseesion = sessionStorage.getItem('admin')
var admin:IUser

if(stseesion){
  const plainText=decrypt(stseesion)
  admin = JSON.parse(plainText)
}
const [arr, setarr] = useState<UserOrders[]>([])
  useEffect(() => {
   userorderlist(admin.uid!).then(res =>{
      console.log(res.data)
      setarr(res.data)
   })
  }, [])
  
  
  return (
    <div>
      <Navbar/>
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
    
      {arr.map((item,index)=>
      
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
      <td><NavLink to={'/DeleteOrder/'+item.oid}><button className='btn btn-warning'>I Want Delete</button></NavLink> </td>
    </tr>
      )}
      
    </tbody>
    </table>
    </div>
  )
}

export default Profile