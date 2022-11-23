import axios from 'axios';

import React,{useEffect} from 'react'

import { useNavigate } from 'react-router-dom';


function Protected({children}) {
const nav = useNavigate();
useEffect(()=>{
      const user = localStorage.getItem(`user`);
      if (!user) {
        nav("/login")

  }

  else {

  }

  },[]);

  return (
    <div>
{
<>

  {children}

</>

}
 </div>

  )

}



export default Protected;