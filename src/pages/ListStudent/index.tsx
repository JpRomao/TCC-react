import React from 'react';
import BackButton from '../../components/BackButton';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './styles.css';

export default function ListStudent(){
  return (
    <div>
      <div className="list-student">
        <Header/>

        <section className="table-list">
          <table className="table">
            <thead>
              <tr>
                <th>Prontuário</th>
                <th>Nome</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1111</td>
                <td>Hyoga</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2222</td>
                <td>Shiryu</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3333</td>
                <td>Seiya</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <BackButton/>
      <Footer/>
    </div>
  );
}