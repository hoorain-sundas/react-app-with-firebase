import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Loader from '../Components/Loader';
import Cards from '../Components/Cards';
import { useNavigate } from 'react-router-dom';

function Home () {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
   const getHandler = () => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => 
    {
      console.log(res.data)
      setData(res.data)
      setIsLoading(false)

    })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
    console.log("count")
   };
   useEffect(() => {
    getHandler();
   }, []);
 
 const sendData = (e) => { 
   console.log(e);
   navigate("/Productdetails", {
    state: e,
  });
 }


  return (
    <>
    <Navbar />
    <div className='row'>
      <Cards />
{/*       
      <button onClick={() => {setCount((prev) => prev + 1)}}>CALL</button>
      <h1>
      {count}
      </h1> */}
   {/* {isLoading ?
         <Loader /> :
         <div className='row'>
         {data.map((x,i)=>{
            return(<div className='col-md-4' key={i}>
                 <div className='border text-center d-inline-block m-3'>
                    <div>
                       <img className='m-1' src={x.image} width="150px"/>
                     </div>
                       <div>
                         <h6 className='m-1'>{x.title}</h6>
                         <p className='m-1'>{x.description}</p>
                         <h6 className='m-1'>Price: {x.price}</h6>
                         <p className='m-1'>Rating: {x.rating.rate}</p>
                     </div>
                     <div>
                        <button onClick={() => sendData(x)}>Buy</button>
                      </div>
                </div>
             </div>
            )
          })}
          </div>
      */}
{/* } */}
    </div>
    </>
  )
}

export default Home;

