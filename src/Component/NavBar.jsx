import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ cartCount, wishlistCount }) => {

    let location=useLocation()
    const isHome = location.pathname === "/";
    return (
        <div>


<div className={`navbar bg-base-100  ${isHome ? "bg-purple-700 text-white" : ""}`}>
  <div className="navbar-start">
    <h2 className='font-bold'>Gadget Heaven</h2>
  </div>
  <div className="navbar-center">
    <Link to="/" className="btn btn-ghost text-xl">Home</Link>
    <a className="btn btn-ghost text-xl">Statistics</a>
    <a className="btn btn-ghost text-xl">DashBoard</a>
  </div>
  <div className="navbar-end">
  <div className="relative inline-block">
  <button className="btn btn-ghost btn-circle text-2xl">
    <FaShoppingCart /> 
  </button>
  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
    {cartCount}
  </span>
</div>

    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>

              <span className="absolute -top-4 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
    {wishlistCount}
  </span>
        
       
      </div>
    </button>
  </div>
</div>
            
        </div>
    );
};

export default NavBar;