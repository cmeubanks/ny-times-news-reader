import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <header>
      <h1>News Reader</h1>
      <NavLink exact to='/' className='nav-btn'>
        Article Type
      </NavLink>
    </header>
  );
}

export default Header;
