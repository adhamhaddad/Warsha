import React from 'react';
import Container from './Container';
import Search from './Search';
import '../css/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <nav className='navbar'>
          <h1>warsha</h1>
          <Search />
        </nav>
      </Container>
    </header>
  );
};
export default Header;
