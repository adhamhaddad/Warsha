import React from 'react';
import classes from '../css/Work.module.css';

const rateGenerator = (rates) => {
    console.log(rates)
    
  for (let i = 0; i < rates; i++) {
    <i key={i} className='fa-solid fa-star'></i>;
  }
};

const Work = ({ work_id, date, rates, title, picture }) => {
  return (
    <li className={classes['card']}>
      <div className={classes['card-info']}>
        <span className={classes['date']}>
          {new Date(date).toLocaleString('en-US', { dateStyle: 'medium' })}
        </span>
        <span className={classes['rates']}>
          {rates > 0 && rateGenerator(rates)}
          4.7
        </span>
        <div className={`${classes['card-control']} fa-solid fa-wrench`}>
          <ul>
            <li>save</li>
            <li>report</li>
          </ul>
        </div>
      </div>
      <div className={classes['card-work']}>
        {title.length > 0 && <caption>{title}</caption>}
        <img src='' alt='' />
      </div>
      <div className={classes['card-buttons']}>
        <span className={classes['rate-button']}>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
        </span>
        <button>
          <i className='fa-solid fa-comment'></i>
          Message
        </button>
      </div>
    </li>
  );
};
export default Work;
