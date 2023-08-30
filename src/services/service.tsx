import axios, { AxiosRequestConfig } from "axios";
import { Product, Products } from "../models/product";
import {  CaResult, Category, Category2 } from "../models/category";
import { CategoryProduct, Content } from "../models/categoryProduct";
import { IOrder } from "../models/IOrder";
import { IUser } from "../models/IUser";
import { UserOrders } from "../models/UserOrders";
import { IAdmin } from "../models/IAdmin";
import { Iimage, iResult } from "../models/IImage";
import { Adminorder } from "../models/adminorder";
import { decrypt } from "../util";




const url = 'http://localhost:8080/'
const stseesion = sessionStorage.getItem('admin')
var admin:IAdmin

if(stseesion){
    const plainText = decrypt(stseesion)
  admin = JSON.parse(plainText)
}
var susername:string
var spassword:string
if(admin!){
    susername = admin.username
    spassword = admin.password
}

const config = axios.create({
    baseURL: url,
    timeout: 15000,
    auth:{
        
        username:"burak1",
        password:"12345"
    }
})

export const adminlogin = (username:string , password: string) =>{
    
    const sendObj = {
        username:username,
        password:password
    }
    
    return config.post('admin/login' ,sendObj)
}
export const userlogin = (email:string , password: string) =>{
    
    const sendObj = {
        email:email,
        password:password
    }
    
    return config.post('user/login' ,sendObj)
}

export const allproduct =()=>{
    return config.get<Products>('product/list')
}

export const singleproduct =(id:string)=>{
    return config.get<Product>('product/detail/'+id)
}
export const getcategory =()=>{
    return config.get<Category>('category/list')
}
export const categoryproduct =(id:string)=>{
    return config.get<CategoryProduct>('product/categorylist/'+id)
}

export const ordersave =(Pid:number , ProductName:string,Uid:number)=>{
    const sendObj ={
        pid:Pid,
        productname:ProductName,
        users:[
            {uid:Uid}
        ]
    }
    return config.post<IOrder>('orders/save/',sendObj)
}
export const userorderlist=(uid:number)=>{
    return config.get<UserOrders[]>('orders/userorderlist/'+uid)
}
export const orderdelete = (oid:string)=>{
    
        
    
    return config.get('orders/delete/'+oid)
}
export const productdelete =(pid:string)=>{
    return config.get('product/delete/'+pid,{auth:{username:'burak1',password:'12345'}})
}

export const getimages=(image:string)=>{
    const sendObj={
        path:image
    }
    return config.post<Iimage>('images/image',sendObj)
}
export const getcategoryid=(Category:string)=>{
    const sendObj={
        category:Category
    }
    return config.post<Category2>('category/category',sendObj)
}
export const productupdate = (id:string,Category:string,Title:string,Detail:string,Price:String,Stock:string,Brand:string,iid1:string,iid2:string)=>{

    const sendObj ={
        pid:id,
        title:Title,
        detail:Detail,
        price:Price,
        stock:Stock,
        brand:Brand,
        categories:[
            {cid:Category,
             category:null
            }
        ],
        images:[
            {iid:iid1,
             path:null
            },
            {iid:iid2,
             path:null
            }
        ]
        
}
return config.post('product/update',sendObj)
}
export const productsave =(Category:string,Title:string,Detail:string,Price:String,Stock:string,Brand:string,iid1:string,iid2:string)=>{
    const sendObj ={
        title:Title,
        detail:Detail,
        price:Price,
        stock:Stock,
        brand:Brand,
        categories:[
            {cid:Category,
             category:null
            }
        ],
        images:[
            {iid:iid1,
             path:null
            },
            {iid:iid2,
             path:null
            }
        ]
        
        
    }
    console.log(sendObj)
    return config.post('product/save',sendObj)
}
export const imagessave = (Image:string)=>{
    const i1={
        path:Image
    }
    return config.post('images/save',i1)
}
export const categorysave =(Category:string)=>{
    const sendObj ={
        category:Category
    }
    return config.post('/category/save',sendObj)
}
export const categorydelete = (id:string)=>{
    return config.get('/category/delete/'+id)
}
export const categoryupdate = (id:string,category:string)=>{
    const sendObj ={
        cid:id,
        category:category
    }
    return config.post('/category/update',sendObj)
}
export const adminorderlist = (page:number)=>{
    console.log('service'+page)
    return config.post<Adminorder>('orders/adminorderlist/?page='+page)
}
export const userregister = (name:string,surname:string,email:string,password:string,adress:string,age:number)=>{
    const senObj={
        name:name,
        surname:surname,
        email:email,
        password:password,
        adress:adress,
        age:age
    }
    return config.post('user/register',senObj)
}