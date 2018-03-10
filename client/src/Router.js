import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Temp from './components/Temp';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/temp' component={Temp} />
    </Switch>
  </BrowserRouter>
);

export default Router;