import React,{useEffect} from 'react'
import { CartState } from "../../context/Context";
import SingleProduct from '../../components/SingleProduct';
import axios from 'axios';

export const Petsfood = () => {
  const {
    state: { petsFood },
    dispatch
  } = CartState();
  const loadPetsFood = async () => {  
    await axios.get(`http://localhost:8080/api/petshop/petsfood`).then((res)=>{
      console.log(res.data);
      dispatch({
        type: "LOAD_PETSFOOD",
        payload: res.data,
      })
      console.log(res.data,"***response");
    })
    
  }
useEffect(()=>{
  loadPetsFood();
},[])

  return (

    <div className="home container">
      <div className="productContainer pets-container">
        {petsFood.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}