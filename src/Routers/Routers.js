import React from 'react'
import { Route, Routes } from 'react-router'
import { Homepage } from '../Pages/Homepage/Homepage'
import { HomepageUser } from '../Pages/HomepageUser/HomepageUser'
import { Login } from '../Pages/Login/Login'
import { Login02 } from '../Pages/Login02/Login02'


export const Routers = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/homepage' element={<Homepage/>}/>
      <Route path='/SignUp' element={<Login02/>}/>
      <Route path='/HomepageUser' element={<HomepageUser/>}/>
    </Routes>
        
    </div>
  )
}
