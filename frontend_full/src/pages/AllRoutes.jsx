import React from 'react'
import {Routes,Route} from "react-router-dom";
import AdminForm from "./Admin"
import HomePage from './HomePage';
import Login from './Login';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add-product' element={<AdminForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<h3>404 Page Not Found</h3>}/>
    </Routes>
  )
}

export default AllRoutes