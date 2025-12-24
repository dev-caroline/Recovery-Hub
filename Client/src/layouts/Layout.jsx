import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout