import React from 'react'
import { CartState } from "../../context/Context";
// import Filters from '../../New folder/components/Filters';
import SingleProduct from '../../components/SingleProduct';
import axios from 'axios';
import {useEffect} from 'react'

export const Pets = () => {
  const {
    state: { products },
   dispatch
  } = CartState();
  
  
  const loadpets = async () => {  
    await axios.get(`http://localhost:8080/api/petshop/petsEntity`).then((res)=>{
      console.log(res.data);
      dispatch({
        type: "LOAD_PRODUCTS",
        payload: res.data,
      })
      console.log(res.data,"***response");
    })
    
  }
useEffect(()=>{
  loadpets();
},[])
console.log(products,"*****pets");


  
  return (
    <div className="home container">
      <div className="productContainer pets-container">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

