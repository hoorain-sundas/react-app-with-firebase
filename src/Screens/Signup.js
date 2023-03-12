import  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../Config/firebasemethods";
import { Box, TextField} from "@mui/material";

function SignUp(){
    
    const [model, setModel] = useState({});
    const navigate = useNavigate();

  let createUser = (event) => {
    event.preventDefault();
    console.log(model);
    signUpUser(model)
      .then((res) => {
        console.log(res);
        navigate('/login');
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
    const [userData, setUserData] = useState(
        {
            fname: "", lname: "", email: "", password:"",
        }
        
    );
    let name, value;
    const handleInputs = (e) => {
        name= e.target.name;
        value= e.target.value;
        setUserData({...userData , [name]: value});
        // setUserData(e.target.value)
        console.log(userData)
    }
    
   

    return (
    <div className="text-center mt-5 m-5 shadow rounded container pt-3 pb-3">
        <h1>Sign Up</h1> <br></br>
    <form >
       <div className="p-2 m-2 fs-4">
        <input type="text" placeholder="First Name"  
        onChange={(e) => setModel({ ...model, firstName: e.target.value })}  
        // value={userData.fname}
        name="fname" id="fname" />
       </div>

       <div className="p-2 m-2 fs-4"> 
        <input type="text" placeholder="Last Name" 
        onChange={(e) => setModel({ ...model, lastName: e.target.value })}
        // value={userData.lname}
        name="lname" id="lname" />
       </div>

       <div className="p-2 m-2 fs-4">
        <input type="email" placeholder="Email" 
        onChange={(e) => setModel({ ...model, email: e.target.value })}
        // value={userData.email}
        name="email" id="email" />
       </div>
       
       <div className="p-2 m-2 fs-4">
        <input type="password" placeholder="Password" 
        onChange={(e) => setModel({ ...model, password: e.target.value })}
        // value={userData.password}
        name="password" id="password" />
       </div>
       <br></br>
       <button onClick= {createUser}
    //    {()=>{navigation("/Home")}}
       className="p-2 ps-4 pe-4 fs-5 m-2 bg-success border-0 rounded-pill text-center" 
       type="submit">Sign Up</button>
    </form> 
    </div>)
}  
 
export default SignUp;  