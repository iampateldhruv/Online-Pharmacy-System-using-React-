import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src='./images/logo1.png' alt='logo' className='logo' />
      </NavLink>
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  height: 3rem;
  background-color: #007BFF;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 4rem;
    width: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;

    .logo {
      margin-bottom: 1rem;
    }
  }
`;

export default Header;
