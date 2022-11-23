import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [DogMenu, setDogMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Pet Shop 
            </h4>
          </div>

          <div className='navlink'>
            <ul className={DogMenu ? "nav-links-DogMenu" : "link f_flex capitalize"} onClick={() => setDogMenu(false)}>
              
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pets'>Pets</Link>
              </li>
              <li>
                <Link to='/petsfood'>Pets Food</Link>
              </li>
              <li>
                <Link to='/dogbehaviour'>Dog Behaviour</Link>
              </li>
              <li>
              <Link to='/login'>Login</Link>
              </li>
              <li>
              <Link to='/register'>Register</Link>
              </li>
             
            </ul>

            <button className='toggle' onClick={() => setDogMenu(!DogMenu)}>
              {DogMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar;