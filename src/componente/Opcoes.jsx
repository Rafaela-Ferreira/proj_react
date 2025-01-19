import React from "react";

const Opcoes = ({ opcoes, aoResponder, perguntaIndex, respostasFinalizadas }) => {
  return (
    <div className="opcoes">
      {opcoes.map((opcao, indice) => (
        <button
          key={indice}
          onClick={() => aoResponder(indice)}
          className={`opcao ${respostasFinalizadas && indice === perguntaIndex ? 'correct' : ''}`}
        >
          {opcao}
        </button>
      ))}
    </div>
  );
};

export default Opcoes;
