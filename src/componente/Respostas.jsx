import React from "react";

const Respostas = ({ respostas, total }) => {
  const mensagens = {
    true: "Parabéns, você é um chef de primeira!",
    false: "Continue praticando para se tornar um mestre da cozinha!"
  };

  return (
    <div>
      <h2>Seu Resultado</h2>
      <p>
        Você acertou {respostas} de {total} perguntas!
      </p>
      <p>{mensagens[respostas === total]}</p>
    </div>
  );
};

export default Respostas;
