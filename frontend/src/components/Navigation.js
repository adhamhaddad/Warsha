import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../css/Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={classes['navigation']}>
      <li>
        <NavLink to='/home' exact>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            data-supported-dps='24x24'
            width='24'
            height='24'
            focusable='false'
          >
            <path d='M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z'></path>
          </svg>
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/profile' exact>
          <div className={classes['profile']}>
            {/* <img crossOrigin='anonymous' src='#' alt='Me' /> */}
          </div>
          <span>Me</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/messages' exact>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            data-supported-dps='24x24'
            width='24'
            height='24'
            focusable='false'
          >
            <path d='M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z'></path>
          </svg>
          <span>Messages</span>
        </NavLink>
      </li>
    </ul>
  );
};
export default Navigation;
