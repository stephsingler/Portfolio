import React from 'react';
import { FaLinkedinSquare, FaGithubSquare, FaInstagram, FaFacebookSquare} from 'react-icons/lib/fa';

const SocialMedia = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/stephanie-singler-397948bb/" target="_blank"><FaLinkedinSquare size={26} className="icon" />
        </a>
        </li>
        <li>
          <a href="https://github.com/stephsingler" target="_blank"><FaGithubSquare size={26} className="icon" />
        </a>
        </li>
        <li>
          <a href="https://www.instagram.com/stephsingler/" target="_blank"><FaInstagram size={26} className="icon" />
        </a>
        </li>
        <li>
          <a href="https://www.facebook.com/stephanie.singler.1" target="_blank"><FaFacebookSquare size={26} className="icon" />
        </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialMedia;
