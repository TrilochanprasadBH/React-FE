import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <DIV>
        <h1>Product List</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/add-product"}>Admin Page</Link>
        <Link to={"/login"}>Log In</Link>
    </DIV>
  )
}

export default Navbar

const DIV= styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin: 10px;
    border-bottom: 1px solid grey;
`