import React from 'react'
import { Link } from 'react-router-dom'
import  logo  from '../../components/assets/images/logo.svg'
import { CartState } from '../../context/Context'

const Search = () => {
  const {
    state: { cart },
  } = CartState();

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
      <>
        <section className='search'>
          <div className='container c_flex'>
            <div className='logo width '>
              <img src={logo} alt='' />
            </div>
  
            <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <input type='text' placeholder='Search and hit enter...' />
              <span>All Category</span>
            </div>
  
            <div className='icon f_flex width'>
            
              <i className="fa-solid fa-dog icon-circle "></i>
              <div className='cart'>
                <Link to='/cart'>
                  <i className='fa fa-shopping-bag icon-circle'></i>
                  <span>{cart.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
export default Search;