import React from 'react';
//components
import Nav from './Nav';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <div className="header">
      <SocialMedia />
      <h1>Stephanie Singler</h1>
      <Nav />
    </div>
  );
};
export default Header;
