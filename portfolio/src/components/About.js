import React from 'react';
//components
import InstagramFeed from './InstagramFeed';
//UI
import { FaBicycle, FaCode, FaCoffee, FaCutlery, FaDiamond, FaGlass, FaHeart, FaPaw, FaPlane, FaTree} from 'react-icons/lib/fa'

const About = () => {
  return (
    <div className="about">
      <div className="sketch">
        <div>
          <p className="about-title">Hello There!</p>
          <p className="about-me">
            <span>I'm a Front End Developer based in Austin, Texas.</span><br /><br />
            I enjoy turning complex code into beautiful and innovative interface designs. When I'm not coding or screaming at my computer you can find me drinking some wine & watching Modern Family.
          </p>
        </div>
        <img src={require("../images/abstract.png")} alt="" className="sketch-img" />
      </div>
      <div className="skills">
        <div>
          <h4>Technical Skills</h4>
          <img src={require('../images/skills-graph copy.png')} alt="" className="graph"/>
        </div>
        <div className="life-pie">
          <h4>Life Essentials</h4>
          <div className="life">
            <div>
              <FaCoffee size={60} style={{color: 'D8D6E3'}} />
              <FaCutlery size={54} style={{color: 'BDD0BE'}} />
              <FaBicycle size={64} style={{color: 'D8D6E3'}} />
              <FaGlass size={54} style={{color: 'BDD0BE'}} />
              <FaPaw size={62} style={{color: 'D8D6E3'}} />
            </div> <br />
            <div>
              <FaHeart size={54} style={{color: 'BDD0BE'}} />
              <FaPlane size={60} style={{color: 'D8D6E3'}} />
              <FaCode size={64} style={{color: 'BDD0BE'}} />
              <FaTree size={60} style={{color: 'D8D6E3'}} />
              <FaDiamond size={60} style={{color: 'BDD0BE'}} />
            </div>
            <div>
              <h4>You can find me...</h4>
              <img src={require('../images/pie-charts copy.png')} alt="" className="graph2" />
            </div>
          </div>
        </div>
      </div>
      <InstagramFeed />
    </div>
  );
}

export default About;
