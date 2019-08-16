import React from 'react';
import { FaLinkedinSquare, FaGithubSquare, FaInstagram } from 'react-icons/lib/fa';

const SocialMedia = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/stephanie-singler-397948bb/" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare size={26} className="icon" />
        </a>
        </li>
        <li>
          <a href="https://github.com/stephsingler" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={26} className="icon" />
        </a>
        </li>
        <li>
          <a href="https://www.instagram.com/stephsingler/" target="_blank" rel="noopener noreferrer"><FaInstagram size={26} className="icon" />
        </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialMedia;
