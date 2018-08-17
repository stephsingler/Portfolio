import React from 'react';
import InstagramFeedContainer from '../containers/InstagramFeedContainer';
import Skills from './Skills';
import LatestWorkContainer from '../containers/LatestWorkContainer';


const About = props => {
  return (
    <div className="about">
      <div className="sketch">
        <div>
          <p className="about-title">Hello There!</p>
          <p className="about-me">
            <span>I am a Front End Developer based in Austin, Texas.</span><br /><br />
            I enjoy turning complex code into beautiful and innovative interface designs. When I'm not coding or screaming at my computer you can find me drinking some wine & watching Modern Family.
          </p>
        </div>
        <img src={require("../images/bio-photo.jpg")} alt="" className="sketch-img" />
      </div>
      <Skills />
        <h1> My Latest Work</h1>
          <div className="latest-work">
            <LatestWorkContainer />
          </div>
      <InstagramFeedContainer />
    </div>
  );
}

export default About;
