import React, { useState } from 'react';

function AlunoForm({ onAdd }) {
  const [aluno, setAluno] = useState({ nome: '', matricula: '', turno: '', curso: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAluno({ ...aluno, [name]: value });
  };

  const handleSubmit = () => {
    onAdd(aluno);
    setAluno({ nome: '', matricula: '', turno: '', curso: '' });
  };

  return (
    <div>
      <h2>Cadastrar Aluno</h2>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={aluno.nome}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="matricula"
        placeholder="Matrícula"
        value={aluno.matricula}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="turno"
        placeholder="Turno"
        value={aluno.turno}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="curso"
        placeholder="Curso"
        value={aluno.curso}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Adicionar Aluno</button>
    </div>
  );
}

export default AlunoForm;
