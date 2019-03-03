import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../styles/svg/logo.svg';

const Header = () => (
  <header>
        <img src={logo} alt="myLogo" />
        <ul className="main-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/course-finder">Courses</NavLink></li>
            <li><NavLink to="/play">Play</NavLink></li>
        </ul>    
  </header>
);

export default Header;