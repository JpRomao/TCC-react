import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/img/logo.svg'
import './styles.css';

interface HeaderProps {
  title?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <div className="logo-container">
          <Link to="/">
            <img src={LogoImg} alt="Logo IFBooks"/>
          </Link>
        </div>
      </div>
        { props.title ? <h1>{props.title}</h1> : '' }
    </header>
  );
}

export default Header;