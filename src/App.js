import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';

import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className='App'>
    <h2>App</h2> 
    <BrowserRouter>
      <Switch>
        /*exact means that you need to match the route's path exactly*/
        <Route path='/' exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
