import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Mainslider from './components/Mainslider/Mainslider.jsx';
import CategorySlider from './components/CategorySlider/CategorySlider.jsx';
import Products from './components/Products/Products.jsx';
import jwtDecode from 'jwt-decode';


import {createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Layouts/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';


import { toast, ToastContainer  } from 'react-toastify';
import { useEffect, useState } from 'react';
import Profile from './components/Profile/Profile.jsx';



function App() {

  const [userData, setuserData] = useState(null);



  let saveUserData = () =>{
    let encodedToken =  localStorage.getItem('token');
    let decodedToken = jwtDecode(encodedToken)
    setuserData(decodedToken)
    console.log(decodedToken);
  }


  let logOut =()=>{
    localStorage.removeItem('token');
    setuserData(null);
   return  <Navigate to = '/login'/>

  }

  useEffect(() => {
    
  if(localStorage.getItem('token')){
    saveUserData()
  }
  }, []);

  let router= createBrowserRouter([
    {path: '' , element : <Layout userData = {userData}  logOut = {logOut}/> ,children :[
        {path :'/' , element :<HomePage/>},
        {path :'Categories' , element : <CategorySlider/> } ,
        {path :'products' , element : <Products/> } ,
        {path :'product-details/:id' , element : <ProductDetails/> } ,
        {path :'login' , element : <Login  saveUserData={ saveUserData}/> } ,
        {path :'register' , element : <Register/> } ,
        {path :'Profile' , element : <Profile userData={ userData}/> } ,


        {path : '*' , element : <h1>error</h1>},


    ]}

  ])




  return (
    <>

<ToastContainer />
  <RouterProvider router = {router}/>




{/*   
  <Navbar/>
  <Mainslider/>
  <CategorySlider />
  <Products/> */}

{/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<CategorySlider/>}/>
    <Route path='/products' element={<Products/>}/>
  </Routes>
  </BrowserRouter> */}
    </>
  );
}

export default App;


