import React, { Component } from 'react';
//components
import Footer from './Footer';
import Portfolio from './Portfolio';
import Background from './Background';

const Home = () => {
  return (
    <div className="home">
      <Background />
      <h1> My Latest Work</h1>
      <div className="latest-work">
        <Portfolio />
      </div>
    </div>
  );
}

export default Home;
