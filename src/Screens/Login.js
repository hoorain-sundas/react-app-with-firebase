import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import { loginUser } from "../Config/firebasemethods";

function Login(){
 const navigation = useNavigate();
 const [model, setModel] = useState({});

  let signIn = (event) => {
    event.preventDefault();
    loginUser(model)
      .then((res) => {
        console.log(res);
        navigation("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return   (
    <div className="text-center shadow rounded container pt-3 pb-3">
        <h1>Login</h1>
        <form action="">
       <div className="p-2 mt-2 mb-2 fs-4">
        <input onChange={(e) => setModel({ ...model, email: e.target.value })} 
        type="email" placeholder="Email" name="email" id="email" multiple />
       </div>
       <div className="p-2 mt-2 mb-2 fs-4">
        <input onChange={(e) => setModel({ ...model, password: e.target.value })}
        type="password" placeholder="Password" name="password" id="password" />
       </div>
       <button onClick={signIn} /*onSubmit={()=>{navigation("/home")}}*/
       className="p-2 ps-4 pe-4 fs-5 mt-2 mb-2 bg-info border-0 rounded-pill text-center" >Login</button>
       </form>
    
     <button className="bg-success fs-5 p-2 mt-4 mb-4 border-0 rounded-pill" variant="contained" onClick={()=>{navigation("/signup")}}>Create New Account</button>
    </div>
    )
}  
   
export default Login;  