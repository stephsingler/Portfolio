import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="Nav">
      <li>
        <NavLink activeClassName='active' exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/About">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/Portfolio">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/Contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
