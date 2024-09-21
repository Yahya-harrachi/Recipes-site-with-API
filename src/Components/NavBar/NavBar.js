import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'


export default function NavBar({setSearchData}) {
  

  const SearchingData = (event) => {
    setSearchData(event.target.value)
  }
  return (
    <div>
        <div className="navbar-items">
        <div className="navbar-text">
        <div className="navbar-title">
           <Link to={'/'}> 
                <h3>Recipe Master</h3>
                </Link>
            </div>
            <Link to={'/'}>
              <h5>Home</h5>
            </Link>
            <Link to={'/Category'}>
              <h5>Category</h5>
            </Link>
            
            <Link to={'/About'}>
              <h5>About</h5>
            </Link>
        </div>
        <div className="navbar-Search">
            <input type="input" placeholder="Search..."  onChange={SearchingData} />
        </div>
      </div>
    </div>
  )
}


