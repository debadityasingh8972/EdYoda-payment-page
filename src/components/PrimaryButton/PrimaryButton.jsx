import React from 'react';
import './PrimaryButton.css';
const PrimaryButton = ({ btnText, btnColor, textColor, borderColor }) => {
  return (
    <button
      className="PrimaryButton"
      style={{
        background: btnColor,
        color: textColor,
        border: `2px solid ${borderColor}`,
      }}
    >
      {btnText}
    </button>
  );
};

export default PrimaryButton;
