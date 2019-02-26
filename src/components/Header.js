import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
  <header>
    <span>PaCo</span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/course-finder">Courses</NavLink></li>
      <li><NavLink to="#">About</NavLink></li>
    </ul>    
  </header>
);

export default Header;