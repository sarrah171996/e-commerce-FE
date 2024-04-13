import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout({userData , logOut}) {
  return (
    <div>
      <Navbar userData={userData} logOut={logOut}/>
      <Outlet/>
    </div>
  )
}
