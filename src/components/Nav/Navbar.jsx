import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-weight: 900;
    font-size: 2rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>EXPi</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
