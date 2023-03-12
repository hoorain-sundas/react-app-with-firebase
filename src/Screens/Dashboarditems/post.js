import React, { useEffect } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import apimethods from '../../config/apibasemethods'

const Post = () => {
    const [loader, setLoader] = useState(false);
    const [listData, setListData] = useState()
    const apiData = () => {
        setLoader(true)
        apimethods.Get('posts/?_limit=10').then((res)=>{
             console.log(res.data);
             setListData([...res.data]);
             setLoader(false);
        }).catch((err)=>{
           console.log(err);
           setLoader(false);
        })
    }
    useEffect(()=>{
        apiData();
    },[])

  return (
    <>
      {loader? ( 
        <div className='text-center'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="Loading..." />
        </div>
      ): listData && listData.length < 1 ? (
        <div>
            <h1>No data found</h1>
        </div>
      ): listData && listData.length > 0 ? (
        listData.map((x,i) => (
            <div key={i} className="p-3 rounded shadow ">
              <h4>{x.title}</h4>
              <p>{x.body}</p>
            </div>
        ))
      ): null
      }
    </>
  )
}

export default Post
