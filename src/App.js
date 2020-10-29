import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';

import Nav from './components/Nav';

import Home from './pages/Home';
import Create from './pages/Create';
import SinglePost from './pages/SinglePost';

import './App.css';

function App() {
  return (
    <div className='App'>
    <h2>App</h2> 

    <BrowserRouter>
    <Nav/>
      <Switch>
        /*exact means that you need to match the route's path exactly*/
        <Route path='/' exact component={Home}/>
        <Route path='/create' exact component={Create}/>
        <Route path='/:id' exact component={SinglePost}/>
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
