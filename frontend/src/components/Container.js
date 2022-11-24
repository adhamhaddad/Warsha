import React from 'react';
import classes from '../css/Container.module.css';

const Container = ({ children }) => {
  return <div className={classes['container']}>{children}</div>;
};
export default Container;
