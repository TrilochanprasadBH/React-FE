import React, { useState } from 'react'
import styled from "styled-components";
import { loginFun } from '../Redux/authReducer/action';
import {useDispatch, useSelector} from "react-redux";


const initialState={
    email:"",
    password:""
}


const Login = () => {
    const [details,setDetails]= useState(initialState);
    const dispatch = useDispatch();
    const auth = useSelector((store)=>store.auth) 
    console.log(auth); 


   const handleChange=(e)=>{
        // console.log(e);
        const {name,value}= e.target
        // console.log(e.target);
        setDetails((prev)=>{
            return {...prev, [name]:value}
        })
   }
   
   const handleSubmit=()=>{
         
        console.log(details)
        dispatch(loginFun(details))
        setDetails(initialState)
        
   }
   
        return (
    <DIV>
        <input onChange={(e)=>handleChange(e)} type='email' placeholder='email' name='email' value={details.email} required/>
        <input onChange={(e)=>handleChange(e)} type='password' placeholder='password' name='password' value={details.password} required/>
        <button onClick={handleSubmit}>Submit</button>
    </DIV>
  )
}

export default Login


const DIV =styled.div`
      width: 400px;
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      gap: 10px;

      input{
        height: 40px;
      }

      button{
        height: 40px;
        }

`