import React from 'react';
import Header from './Header';
import Main from '../pages/Main';
import Footer from './Footer';
import '../css/App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
