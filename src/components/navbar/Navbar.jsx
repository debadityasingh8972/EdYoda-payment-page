import React from 'react';
import './Navbar.css';
import SearchIcon from '../../assets/Search Icon.svg';

import Button from '../button/Button';
const Navbar = () => {
  return (
    <div className="Navbar ">
      <div className="NavbarContainer flex ">
        <h1 className="Logo">EDYODA</h1>
        <div className="NavLinks flex">
          <div className=" NavButton flex">
            <Button className="NavItem" btnText="Courses" />
            <Button className="NavItem" btnText="Programs" />
          </div>
          <div className="NavButton flex">
            <img className="NavItem" id="SearchIcon" src={SearchIcon} alt="" />
            <span className="NavItem">Log in</span>
            <button className="JoinBtn NavItem">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
