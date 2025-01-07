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
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <Score score={score} total={questions.length} />
      ) : (
        <div>
          <Question text={questions[currentQuestion].question} />
          <Options
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
