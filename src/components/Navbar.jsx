import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

function Navbar() {
  // Check if the user is logged in (using local storage)
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const state = useSelector((state) => state.handleCart);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(); // Refresh to update UI
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        
  
        <NavLink className="navbar-brand fw-bold fs-4 px-4" to="/">React Ecommerce</NavLink>

      
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>

         
          <div className="d-flex flex-wrap justify-content-center">
            
            {!isLoggedIn && (
              <>
                <NavLink to="/login" className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-in-alt me-2"></i> Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2">
                  <i className="fa fa-user-plus me-2"></i> Register
                </NavLink>
              </>
            )}

          
            {isLoggedIn && (
              <>
                <button onClick={handleLogout} className="btn btn-danger m-2">
                  <i className="fa fa-sign-out-alt me-2"></i> Logout
                </button>
                <NavLink to="/cart" className="btn btn-outline-dark m-2">
                  <i className="fa fa-cart-shopping me-2"></i> Cart ({state.length})
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
