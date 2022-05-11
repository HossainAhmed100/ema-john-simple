import React from 'react';
import './Header.css';
import logo from '../utilities/images/Logo.svg';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
        <div className="container">
        <a href="/" className="navbar-brand"><img src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span> 
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a href="/shop" className="nav-link">Shop</a></li>
          <li className="nav-item"><a href="/orders" className="nav-link">Orders</a></li>
          <li className="nav-item"><a href="/inventory" className="nav-link">Inventory</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        </ul>
        </div>
    </div>
    </nav>
        </div>
    );
};

export default Header;