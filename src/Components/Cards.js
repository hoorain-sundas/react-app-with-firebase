import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';


 
function Cards() {
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
    <div className='row'>
        {isLoading ?
         <Loader /> :
        <div className="cards row">
            {data.map((x) => (
            <div className='col-md-4'>
              <div className="cards-preview" key={x.id}>
                  <div className="image">
                     <img src={x.image} />
                  </div>
                  <div className="data">
                     <p>{x.title}</p>
                  </div>
                  <div> <h4>Rs. {x.price}</h4>
                  <p>Rating: {x.rating.rate}</p>
                  </div>

                  <div className="btns" onClick={() => sendData(x)}> <button>Add to cart</button> </div>
               </div>
           </div>    
          ))
          }   
        </div>
        }
    </div>
  )
 }

export default Cards;
