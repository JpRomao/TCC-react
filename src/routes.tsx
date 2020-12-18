import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import FormStudent from './pages/FormStudent';
import ListStudent from './pages/ListStudent';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/student" component={FormStudent}/>
        <Route path="/list" component={ListStudent}/>
      </Switch>
    </BrowserRouter>
  );
}