import React from 'react';
//components
import InstagramFeed from './InstagramFeed';

const About = () => {
  return (
    <div className="about">
      <div className="skills">
        <img src={require('../images/skills-graph.jpg')} alt="" className="graph"/>
        <img src={require('../images/pie-chart-copy.jpg')} alt="" className="graph2" />
      </div>
      <InstagramFeed />
    </div>
  );
}

export default About;
