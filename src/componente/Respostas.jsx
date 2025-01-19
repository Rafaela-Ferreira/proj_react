import React from "react";

const Respostas = ({ respostas, total }) => {
  return (
    <div>
      <h2>Seu Resultado</h2>
      <p>
        Você acertou {respostas} de {total} perguntas!
      </p>
      <p>
        {respostas === total
          ? "Parabéns, você é um chef de primeira!"
          : "Continue praticando para se tornar um mestre da cozinha!"}
      </p>
    </div>
  );
};

export default Respostas;
