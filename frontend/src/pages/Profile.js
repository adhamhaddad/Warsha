import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import Work from '../components/Work';
import classes from '../css/Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState({});
  const [works, setWorks] = useState([
    {
      work_id: 1,
      date: new Date(),
      rates: 4,
      title: 'My First work',
      picture: '/'
    },
    {
      work_id: 2,
      date: new Date(),
      rates: 4,
      title: 'My Second work',
      picture: '/'
    },
    {
      work_id: 3,
      date: new Date(),
      rates: 4,
      title: 'My Third work',
      picture: '/'
    },
    {
      work_id: 4,
      date: new Date(),
      rates: 4,
      title: 'My Fourth work',
      picture: '/'
    },
    {
      work_id: 5,
      date: new Date(),
      rates: 4,
      title: 'My Fifth work',
      picture: '/'
    },
    {
      work_id: 6,
      date: new Date(),
      rates: 4,
      title: 'My Sixth work',
      picture: '/'
    }
  ]);
  const params = new URLSearchParams();

  const workList =
    works.length > 0 &&
    works.map((work) => (
      <Work
        key={work.work_id}
        work_id={work.work_id}
        date={work.date}
        rates={work.rates}
        title={work.title}
        picture={work.picture}
      />
    ));
  useEffect(() => {}, [params]);

  return (
    <div className={classes['profile']}>
      <Container>
        <div className={classes['cover']}>
          <div className={classes['picture']}>
            {/* <img src="../src/images/test.jpg" alt="Profile" /> */}
          </div>
        </div>
        <div className={classes['titles']}>
          <h2>Adham Ashraf</h2>
          <span className={classes['job']}>Full-Stack Developer</span>
          <div className={classes['rates']}>
            <span className={classes['stars']}>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
            </span>
            <span className={classes['ratio']}>4.9</span>
          </div>
        </div>
        <div className={classes['works']}>
          <ul>
            {workList.length === 0 && <p>No works found!</p>}
            {workList.length > 0 && workList}
          </ul>
        </div>
        <div className={classes['information']}>
          <div>
            <span>
              <i className='fa-solid fa-user-tie'></i>
              Joined: 2022
            </span>
            <span>
              <i className='fa-solid fa-location-pin'></i>
              Location: Giza
            </span>
          </div>
          <div>
            <span>
              <i className='fa-regular fa-address-card'></i>
              Identity:{' '}
              <span className={classes['identity']}>
                Verified <i className='fa-solid fa-check-double'></i>
              </span>
            </span>
            <span>
              <i className='fa-solid fa-earth'></i>
              From: Egypt
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Profile;
