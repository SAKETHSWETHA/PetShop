import React from 'react';
import './App.css';
import Header from "./common/header/Header";
import { BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom';
import Pages from './pages/Pages';
import { Pets } from './pages/pets/Pets';
import { Petsfood } from './pages/petsfood/Petsfood';
import Cart from './pages/Cart/Cart';
import Data from './components/flashDeals/data';
import { DogBehaviour } from './pages/dogbehaviour/DogBehaviour';
import Footer from './common/footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import Protected from './pages/Protected';


function App() {
  const { productItems } = Data
 

  //Step 2 :
  // const [CartItem, setCartItem] = useState([])
  return (
    <>
   
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={< Pages  productItems={productItems}/>}/>
        <Route path='/pets' element={<Pets/>}/>
        <Route path='/petsfood' element={<Petsfood/>}/>
        <Route path='/dogbehaviour' element={<DogBehaviour/>}/>
        <Route path='/cart' element={<Cart/>}/>     
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
   </Routes>
      <footer>
        <Link to='/Footer'> <Footer/> </Link>
    </footer>
    </Router>
     
    </>
  );
}

export default App;
