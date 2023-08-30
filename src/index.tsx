import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,Route} from 'react-router-dom'

//import pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';

import OrderList from './pages/OrderList';
import UserLogin from './pages/UserLogin';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Control from './pages/Control';
import DeleteOrder from './pages/DeleteOrder';

import CategoryDelete from './pages/CategoryDelete';
import CategoryUpdate from './pages/CategoryUpdate';
import ProductSave from './pages/ProductSave';
import ProductDelete from './pages/ProductDelete';
import ProductUpdate from './pages/ProductUpdate';
import ProductManager from './pages/ProductManager';
import CategoryManager from './pages/CategoryManager';
import CategorySave from './pages/CategorySave';

const router = 
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/admin' element={<Control item={<Dashboard/>}/>}/>
  <Route path='/AdminLogin' element={<AdminLogin/>}/>
  <Route path='/CategorySave' element={<Control item={<CategorySave/>}/>}/>

  <Route path='/CategoryDelete/:id' element={<Control item={<CategoryDelete/>}/>}/>
  <Route path='/CategoryUpdate/:id' element={<Control item={<CategoryUpdate/>}/>}/>
  <Route path='/CategoryManager' element={<Control item={<CategoryManager/>}/>}/>
  <Route path='/ProductManager' element={<Control item={<ProductManager/>}/>}/>
  <Route path='/ProductSave' element={<Control item={<ProductSave/>}/>}/>
  <Route path='/ProductDelete/:id' element={<Control item={<ProductDelete/>}/>}/>
  <Route path='/ProductUpdate/:id' element={<Control item={<ProductUpdate/>}/>}/>
  <Route path='/OrderList/:id' element={<Control item={<OrderList/>}/>}/>
  <Route path='/UserLogin' element={<UserLogin/>}/>
  <Route path='/Category/:id' element={<Category/>}/>
  <Route path='/ProductDetail/:id' element={<Control item={<Detail/>}/>}/>
  <Route path='/Register' element={<Register/>}/>
  <Route path='/Profile/:id' element={<Control item={<Profile/>}/>}/>
  <Route path='/DeleteOrder/:id' element={<Control item={<DeleteOrder/>}/>}/>

</Routes>
</BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(router);


