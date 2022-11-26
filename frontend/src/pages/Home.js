import React, { useState, useEffect } from 'react';
import classes from '../css/Home.module.css';

const Home = () => {
  const [works, SetWorks] = useState([]);

  useEffect(() => {
    console.log('Home Logged');
  }, []);
  return <div className={classes['home']}>This is the home page</div>;
};
export default Home;
