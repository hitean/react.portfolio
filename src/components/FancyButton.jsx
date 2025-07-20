import React from 'react';
import './button.css'; // 👈 Import CSS from same folder

const FancyButton = ({ text = "", onClick="" }) => {
  return (
    <button onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default FancyButton;
