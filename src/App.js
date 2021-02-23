import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link, Switch, BrowserRouter} from 'react-router-dom';
import First from './First';
import Home from './Home';

class App extends Component {
  render(){
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/First" component={First}/>
      </BrowserRouter>
    </div>
    
    );
  }
}
export default App;
