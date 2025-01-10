import React, { useState } from "react";
import Question from "../../components/Question";
import Options from "../../components/Options";
import Score from "../../components/Score";

const questions = [
  {
    question: "Qual é o principal ingrediente de uma omelete?",
    options: ["Leite", "Ovos", "Farinha", "Arroz"],
    answer: 1,
  },
  {
    question: "Qual destes é um tempero comum em pizzas?",
    options: ["Manjericão", "Canela", "Hortelã", "Cravo"],
    answer: 0,
  },
  {
    question: "Quantos minutos, em média, leva para assar um bolo?",
    options: ["10 minutos", "30 minutos", "50 minutos", "1 hora e meia"],
    answer: 2,
  },
];

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    Array(questions.length).fill(false)
  ); // Armazena quais perguntas foram respondidas
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (!answeredQuestions[currentQuestion]) {
      if (index === questions[currentQuestion].answer) {
        setScore(score + 1);
      }

      // Marca a questão como respondida
      const updatedAnswers = [...answeredQuestions];
      updatedAnswers[currentQuestion] = true;
      setAnsweredQuestions(updatedAnswers);
    }
  };

  const handleFinishQuiz = () => {
    if (answeredQuestions.every((answered) => answered)) {
      setShowScore(true);
    } else {
      alert("Por favor, responda todas as perguntas antes de finalizar.");
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnsweredQuestions(Array(questions.length).fill(false));
  };

  const handleNavigation = (index) => {
    setCurrentQuestion(index);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz WEB1</h1>
      <div className="navigation-buttons">
        {questions.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${
              currentQuestion === index ? "active" : ""
            }`}
            onClick={() => handleNavigation(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {showScore ? (
        <div>
          <Score score={score} total={questions.length} />
          <button className="restart-button" onClick={handleRestart}>
            Recomeçar
          </button>
        </div>
      ) : (
        <div>
          <Question text={questions[currentQuestion].question} />
          <Options
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
          />
          <button className="finish-button" onClick={handleFinishQuiz}>
            Finalizar Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
