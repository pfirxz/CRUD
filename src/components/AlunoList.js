import React from 'react';

function AlunoList({ alunos, onDelete }) {
  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>
            {aluno.nome} - {aluno.matricula} - {aluno.turno} - {aluno.curso}
            <button onClick={() => onDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlunoList;
