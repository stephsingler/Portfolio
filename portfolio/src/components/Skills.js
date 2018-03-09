import React from 'react';
//UI
import { FaBicycle, FaCode, FaCoffee, FaCutlery, FaDiamond, FaGlass, FaHeart, FaPaw, FaPlane, FaTree} from 'react-icons/lib/fa';

const Skills = () => {
  return (
    <div>
      <h2>All you need to know about me...</h2>
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
              <img src={require('../images/final-pie-chart.png')} alt="" className="graph2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
