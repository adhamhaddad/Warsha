import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Messages from './Messages';
import '../css/Main.css';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
        <Route path='/messages' exact>
          <Messages />
        </Route>
      </Switch>
    </main>
  );
};
export default Main;
