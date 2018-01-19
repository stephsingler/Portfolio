import React, { Component } from 'react';
import '../index.css';
//components
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stephanie Singler</h1>
        <Nav />
      </div>
    );
  }
}

export default App;
