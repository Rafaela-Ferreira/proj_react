import React, { useState } from "react";
import Pergunta from "../../componente/Pergunta";
import Opcoes from "../../componente/Opcoes";
import Respostas from "../../componente/Respostas";
import perguntas from "../../JSON/perguntas.json";

const Home = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState(0);
  const [perguntasRespondidas, setPerguntasRespondidas] = useState(
    Array(perguntas.length).fill(false)
  ); // Armazena quais perguntas foram respondidas
  const [mostrarRespostas, setMostrarRespostas] = useState(false);

  const lidarComResposta = (indice) => {
    if (!perguntasRespondidas[perguntaAtual]) {
      if (indice === perguntas[perguntaAtual].respostaCorreta) {
        setRespostas(respostas + 1);
      }

      // Marca a questão como respondida
      const respostasAtualizadas = [...perguntasRespondidas];
      respostasAtualizadas[perguntaAtual] = true;
      setPerguntasRespondidas(respostasAtualizadas);
    }
  };

  const finalizarQuiz = () => {
    if (perguntasRespondidas.every((respondida) => respondida)) {
      setMostrarRespostas(true);
    } else {
      alert("Por favor, responda todas as perguntas antes de finalizar.");
    }
  };

  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setRespostas(0);
    setMostrarRespostas(false);
    setPerguntasRespondidas(Array(perguntas.length).fill(false));
  };

  const navegarParaPergunta = (indice) => {
    setPerguntaAtual(indice);
    setMostrarRespostas(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz WEB1</h1>
      <div className="navigation-buttons">
        {perguntas.map((_, indice) => (
          <button
            key={indice}
            className={`nav-button ${
              perguntaAtual === indice ? "active" : ""
            }`}
            onClick={() => navegarParaPergunta(indice)}
          >
            {indice + 1}
          </button>
        ))}
      </div>

      {mostrarRespostas ? (
        <div>
          <Respostas respostas={respostas} total={perguntas.length} />
          <button className="restart-button" onClick={reiniciarQuiz}>
            Recomeçar
          </button>
        </div>
      ) : (
        <div>
          <Pergunta texto={perguntas[perguntaAtual].pergunta} />
          <Opcoes
            opcoes={perguntas[perguntaAtual].opcoes}
            aoResponder={lidarComResposta}
            perguntaIndex={perguntaAtual}
            respostasFinalizadas={mostrarRespostas}
          />
          <button className="finish-button" onClick={finalizarQuiz}>
            Finalizar Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
