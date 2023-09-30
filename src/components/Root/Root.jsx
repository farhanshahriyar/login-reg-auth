// import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { Toaster } from 'react-hot-toast'

const Root = () => {
  return (
    <div>
        <Toaster/>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Root
