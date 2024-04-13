import React from 'react'
import logo from '../../imgs/freshcart-logo.svg'

import { Link } from 'react-router-dom'

export default function Navbar({ userData , logOut }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-main-light navbar-light ">
        <div className="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link class="nav-link  link active nav-links pe-2 " style={{ color: 'inherit', textDecoration: 'inherit' }} aria-current="page" to="/">Home</Link>
              </li>


              <li className="nav-item">
                <Link class="nav-link link nav-links pe-2" style={{ color: 'inherit', textDecoration: 'inherit' }} to="/Products">Products</Link>
              </li>


              <li className="nav-item">
                <Link class="nav-link link nav-links pe-2" style={{ color: 'inherit', textDecoration: 'inherit' }} to="/Categories">Categories</Link>
              </li>


              <li className="nav-item">
                <Link class="nav-link link nav-links pe-2" style={{ color: 'inherit', textDecoration: 'inherit' }} to="#">Brands</Link>
              </li>



            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">

              {userData ? <>
              
                <li className="nav-item">
                <a type="button" class="btn me-3 cartIcon position-relative">
                  Cart <i class="fa-solid fa-cart-shopping"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    10+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </a>
              </li>
              <Link to='/profile'>{userData.name}</Link>
              </>

                : ''}



{!userData? 
<>

<li className="nav-item">
                <Link class="nav-link link nav-links pe-2" style={{ color: 'inherit', textDecoration: 'inherit' }} to='/login'>Login</Link>
              </li>



              <li className="nav-item">
                <Link class="nav-link link nav-links pe-2" style={{ color: 'inherit', textDecoration: 'inherit' }} to="register">SignUp</Link>
              </li>  

</>
:
<li className="nav-item">
  <Link class="nav-link link nav-links pe-2" style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={logOut}>LogOut</Link>
</li> }
             

         
              










            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
