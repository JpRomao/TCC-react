import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import alunosIcon from '../../assets/icons/alunosIcon.svg';

import './styles.css';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div id="home">
      <div id="home-content" className="container">
        <Header />
        <div className="buttons-container">
          <div className="dropdown-students">
            <button className="btn-students">
              Alunos
              <img src={alunosIcon} alt="Ícone botão de alunos"/>
            </button>

            <div className="dropdown-content-students">
              <Link to="/student">Cadastrar Alunos</Link>
              <Link to="/list">Listagem Alunos</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}