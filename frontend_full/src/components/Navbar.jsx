import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <h1>Product List</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/add-product"}>Admin Page</Link>
    </div>
  )
}

export default Navbar