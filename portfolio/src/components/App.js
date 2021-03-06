import React, { Component } from 'react';
import '../css/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//components
import Header from './Header';
import PortfolioContainer from '../containers/PortfolioContainer';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/Portfolio' component={PortfolioContainer} />
          <Route exact path='/Contact' component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
