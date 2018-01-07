import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Index from './components/Index'
class App extends Component {
  render() {
    return (
      <div>
          <Index />
      </div>
    );
  }
}

export default App;
