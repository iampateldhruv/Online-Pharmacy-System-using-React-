

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  .menuIcon {
  display: flex;
  align-items: center;
}

.navbar-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navv {
  width: auto;
}

.navbar-list li {
  margin-right: 2rem;
}

.navbar-list li:last-child {
  margin-right: 0;
}

.navbar-list a, .navbar-button {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffdd57;
    text-decoration: underline;
  }

  &.active {
    color: #ffdd57;
    text-decoration: underline;
  }
}

.navbar-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 2rem;

  &:hover {
    color: #ffdd57;
    text-decoration: underline;
  }
}

@media (max-width: 768px) {
  .navbar-list {
    flex-direction: column;
    align-items: center;
  }

  .navbar-list li {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .navbar-list li:last-child {
    margin-bottom: 0;
  }
}

`;

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <Nav className="navv">
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
          </li>
          <li>
            <NavLink to="/catalog" activeClassName="active">Medicines</NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active">Cart</NavLink>
          </li>
          {!isAuthenticated ? (
            <>
              <li>
                <NavLink to="/register" className="navbar-button" activeClassName="active" style={{ backgroundColor: 'white', padding: '8px 15px', color: 'red' }}>SIGNUP</NavLink>
              </li>
              <li>
                <NavLink to="/login" className="navbar-button" activeClassName="active" style={{ backgroundColor: 'white', padding: '8px 15px', color: 'red' }}>LOGIN</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/profile" className="navbar-button" activeClassName="active" style={{ backgroundColor: 'white', padding: '8px 15px', color: 'red' }}>PROFILE</NavLink>
              </li>
              <li>
                <button style={{ backgroundColor: 'white', padding: '8px 15px', color: 'red' }} onClick={onLogout} className="navbar-button">LOGOUT</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
