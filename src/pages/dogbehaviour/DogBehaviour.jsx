import React,{useEffect} from 'react'
import { CartState } from "../../context/Context";
import SingleProduct from '../../components/SingleProduct';
import axios from 'axios';

export const DogBehaviour = () => {
  const {
    state: { petBehaviour },
    dispatch
  } = CartState();
  const loadPetsBehaviour = async () => {  
    await axios.get(`http://localhost:8080/api/petshop/petsbehaviour`).then((res)=>{
      console.log(res.data);
      dispatch({
        type: "LOAD_PETSBEHAVIOUR",
        payload: res.data,
      })
      console.log(res.data,"***response");
    })
    
  }
useEffect(()=>{
  loadPetsBehaviour();
},[])
  return (
    <>
    <img src={'./images/petbehaviour/cover_pic.png'} alt='' />
    <div className="home container">
      <div className="productContainer pets-container">
        {petBehaviour?.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
    </>
  )
  }