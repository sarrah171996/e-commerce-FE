import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Logout({ saveUserData}) {
    let navigate=  useNavigate()
    
    //   let x =  localStorage.getItem('token')
    
    //   localStorage.setItem('token' , '')
    localStorage.removeItem('token')
    saveUserData(null)
  navigate('/login')
  return (
    <div>
      
    </div>
  )
}
