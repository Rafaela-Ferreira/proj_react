import React from "react";

const Score = ({ score, total }) => {
  return (
    <div>
      <h2>Seu Resultado</h2>
      <p>
        Você acertou {score} de {total} perguntas!
      </p>
      <p>
        {score === total
          ? "Parabéns, você é um chef de primeira!"
          : "Continue praticando para se tornar um mestre da cozinha!"}
      </p>
    </div>
  );
};

export default Score;
