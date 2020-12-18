import React from 'react';
import { Link } from 'react-router-dom';

import backImg from '../../assets/icons/back.svg';

import './styles.css';

export default function BackButton(){
  return (
    <Link to="/" className="back-icon">
      <img src={backImg} alt="Voltar"/>
      Voltar
    </Link>
  );
  
}