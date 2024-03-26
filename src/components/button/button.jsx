import React from 'react';
import './button.css'
const Button = ({type,className,onClick,disabled,text="",icon,src,alt,positionIcon}) => {
  if(positionIcon==="right")
    return (
      <div>
        <button
        type={type||"button"}
        className={`button-container ${className}`}
        onClick={onClick}
        disabled={disabled}>
        <span className={(text==="" ? 'button-notext' : 'button-text')}>{text}</span>
        <span>
          <img  className="button-icon" src={src} alt={""||alt}></img>
        </span>
  </button>
      </div>
    );
else return (
    <div>
      <button
      type={type||"button"}
      className={`button-container ${className}`}
      onClick={onClick}
      disabled={disabled}>
      <span>
        <img  className="button-icon" src={src} alt={""||alt}></img>
      </span>
      <span className={(text==="" ? 'button-notext' : 'button-text')}>{text}</span>
  </button>
    </div>
  );
} 

export default Button;