import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { orderdelete, userorderlist } from '../services/service'
import { IUser } from '../models/IUser'
import { UserOrders } from '../models/UserOrders'
import { ToastContainer, toast } from 'react-toastify'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { decrypt } from '../util'
function DeleteOrder() 


    {
        const stseesion = sessionStorage.getItem('admin')
        var admin:IUser
        
        if(stseesion){
          const plainTsxt = decrypt(stseesion)
          admin = JSON.parse(plainTsxt)
        }
        const [arr, setarr] = useState<UserOrders[]>([])
          useEffect(() => {
           userorderlist(admin.uid!).then(res =>{
              console.log(res.data)
              setarr(res.data)
           })
          }, [])
          const params = useParams()
          const oid = params.id
          const navigate = useNavigate()
          const Delete=()=>{
            if(oid)
            orderdelete(oid).then(res =>{
              console.log(res.data)
              if(res.data){
                toast.success('Order Delete Success')
              }
              navigate("/Profile/"+admin.uid)

            }).catch(err=>{
                console.log(err.message)
            })
          }



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
    <td><NavLink to={'/DeleteOrder/'+item.oid}/> <button onClick={Delete} className='btn btn-danger'>Delete</button></td>
  </tr>
    )}
    
  </tbody>
  </table><ToastContainer/>
  </div>
)
}

export default DeleteOrder