import React, { useEffect, useState } from 'react';
import {useParams } from "react-router-dom";

const CoinDetails = () => {
    const[coin,setCoin]=useState({})

 const {id}=useParams();
    useEffect(()=>{
        let url=`https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setCoin(data)
            console.log(data)
            
        })

    },[id])
   
    
 
    return (
        <div>
            <h1>{id} </h1>
            <h2>{coin.id}</h2>
          
        </div>
            
      
    );
};

export default CoinDetails;