import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  label: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ label, name, className, ...rest }) => {
  return (
    <button id={name} className={`btn ${className}`} {...rest}>{label}</button>
  )
}

export default Button;