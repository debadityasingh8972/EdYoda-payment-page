import React from 'react';
import DownArrow from '../../assets/Icon Chevron Down.svg';
import './Button.css';
const Button = ({ btnText }) => {
  return (
    <button className="NavBtn">
      {btnText} <img src={DownArrow} alt="" />
    </button>
  );
};

export default Button;
