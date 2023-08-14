import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { addProd } from "../Redux/productReducer/action";
//CREATING A FORM WITH single USE-STATE 


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #d79f9f; /* Set your desired background color here */
  }
`;

const InitialState={
    name:"",
    image:"",
    brand:"",
    price:"",
    category:"",
    gender:""
}

const AdminForm = () =>{
    const [product, setProduct]= useState(InitialState)
    const dispatch = useDispatch()
   
    const handleChange=(e)=>{
            // console.log(e);  OBSERVE -->event target name input 
            // console.log(e.target);  

            const {name, value} = e.target 
            //name, value are keys from event 
            // console.log(name);
            setProduct((prev)=>{
                return {...prev, [name]:name ==="price" ? +value :value}
                //state is obj so returns {}, else whatever format state is 
            })
    }

    const handleSubmit = (e)=>{
            e.preventDefault()
            console.log(product);
            dispatch(addProd(product));
            setProduct(InitialState);
    }
    
    
    return (
        
        <DIV>
            <GlobalStyle/>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label>
                <input type="text" name="name" value={product.name} onChange={(e)=>handleChange(e)} placeholder="product name"/>
                <label>Product Image</label>
                <input type="url" name="image" value={product.image} onChange={(e)=>handleChange(e)} placeholder="product image"/>
                <label>Brand</label>
                <input type="text" name="brand" value={product.brand} onChange={(e)=>handleChange(e)} placeholder="brand name"/>
                <label>Price</label>
                <input type="number" name="price" value={product.price} onChange={(e)=>handleChange(e)} placeholder="price"/>
                <label>Category</label>
                <select name="category" value={product.category} onChange={(e)=>handleChange(e)}>
                <option value={""}>Select Category</option>
                <option value={"top-wear"}>Top Wear</option>
                <option value={"bottom-wear"}>Bottom Wear</option>
                <option value={"shoes"}>Shoes</option>
                </select>
                <label>Gender</label>
                <select name="gender" value={product.gender} onChange={(e)=>handleChange(e)} className="gender-select">
                    <option value={""}>Select Category</option>
                    <option value={"men"}>Mens</option>
                    <option value={"women"}>Womens</option>
                    <option value={"kids"}>Kids</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </DIV>
    )
}


export default AdminForm  


const DIV  = styled.div`
    width : 400px;
    margin: auto;
    border: 1px solid black;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: blanchedalmond;
    form {
        
        display :flex;
        flex-direction:column;
        gap:10px;
    }

    input{
        height: 50px;
        border: 1px solid brown;
        font-size: large;
        font-weight: bold;
    }

    select{
        height: 50px;
        border: 1px solid brown;
    }

    button{
        height: 50px;
        color: #0b0b0a;
        background-color: #85aed3;
        width: 50%;
        margin: auto;
    }
`
