import React from "react";

const Opcoes = ({ opcoes, aoResponder, perguntaIndex, respostasFinalizadas }) => {
  return (
    <div className="opcoes">
      {opcoes.map((opcao, indice) => {
        const classes = {
          true: "opcao correct",
          false: "opcao"
        };

        return (
          <button
            key={indice}
            onClick={() => aoResponder(indice)}
            className={classes[respostasFinalizadas && indice === perguntaIndex]}
          >
            {opcao}
          </button>
        );
      })}
    </div>
  );
};

export default Opcoes;
