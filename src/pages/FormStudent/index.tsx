import React from 'react';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

import Header from '../../components/Header';
import Select from '../../components/Select';

import './styles.css';

export default function FormAluno() {
  return (
    <div id="page-student-form" className="container">
      <Header
        title="Formulário de lançamento de pacotes"
      />
      <main>
        <section className="form-container">
          <form>
            <Input type="text" label="Nome: " name="nome" required/>
            <Input type="text" label="Sobrenome: " name="sobrenome" required/>
            <Select 
              name="turma"
              label="Turma: "
              options={[
                {value: "Informática", label: "Informática"},
                {value: "Mecânica", label: "Mecânica"}
              ]}
              required
            />
            <Select 
              name="ano"
              label="Ano: "
              options={[
                {value: "1", label: "1° Ano"},
                {value: "2", label: "2° Ano"},
                {value: "3", label: "3° Ano"},
                {value: "4", label: "4° Ano"}
              ]}
              required
            />
            <Input type="number" label="Prontuario: " name="prontuario" required/>
          </form>

          <Button type="submit" name="register" className="btn-register" label="Registrar"/>
        </section>
      </main>
      <BackButton/>
      <Footer/>
    </div>
  );
}