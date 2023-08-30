import React, { useEffect } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { IUser } from '../models/IUser'
import { decrypt } from '../util'
function Navbar() {
  const logout=() =>{
    sessionStorage.removeItem("admin")
    
  }


  
const stseesion = sessionStorage.getItem('admin')
var admin:IUser

if(stseesion){
  const plainText = decrypt(stseesion)
  admin = JSON.parse(plainText)
}
  







  return (
    <> { admin! &&
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          
        <NavLink className="nav-link" to={'/Profile/'+admin.uid} >My Profile</NavLink>
        </li>
        <li className="nav-item">
        <NavLink role='button' className="nav-link" onClick={logout} to='/UserLogin'>Logout</NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>}  
    </>
  )
}

export default Navbar