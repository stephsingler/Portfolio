import React from 'react';
//components
import SocialMedia from './SocialMedia';
import Nav from './Nav';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2018 Stephanie Singler</p>
      <Nav />
      <SocialMedia />
    </div>
  );
};
export default Footer;
