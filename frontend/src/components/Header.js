import React from 'react';
import Container from './Container';
import '../css/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <nav className='navbar'>
          <h1>warsha</h1>
          <ul>
            <li>
              <i id='search' className='fa-solid fa-search'></i>
            </li>
            <li>
              <i id='user' className='fa-solid fa-user'></i>
            </li>
            <li>
              <i id='chat' className='fa-solid fa-comments'></i>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
export default Header;
