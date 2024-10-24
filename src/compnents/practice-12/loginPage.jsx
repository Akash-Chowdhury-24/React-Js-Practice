import { useState } from "react";
import { MyForm } from "./Form";
import { logininfo } from "./info.js";

const initialstate={
  email:'',
  password:'',
}
export function LoginPage(){
  const [loginDetails,setLoginDetails]=useState(initialstate);
  function handleSubmit(event){
    event.preventDefault();
    console.log(loginDetails);
    setLoginDetails(initialstate);
  }
  return (<div>
    <h1>Login Page</h1>
    <MyForm 
      formControl={logininfo}
      formDetails={loginDetails}
      setFormDetails={setLoginDetails}
      handleSubmit={handleSubmit}
    />
  </div>)
}