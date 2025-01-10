import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #eafaf1;
    color: #2d4a22;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  h2 {
    color: #1e8449;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #2d4a22;
  }

  button {
    cursor: pointer;
    background-color: #28a745;
    border: none;
    color: white;
    padding: 12px 20px;
    margin: 5px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background-color: #218838;
  }

  .quiz-container {
    background: #ffffff;
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 2px solid #28a745;
  }

  .navigation-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .nav-button {
    background-color: #2d4a22;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
  }

  .nav-button.active {
    background-color: #28a745;
  }

  .nav-button:hover {
    background-color: #218838;
  }

  .question-container {
    margin-bottom: 20px;
  }

  .option-button {
    width: 100%;
    text-align: left;
    padding: 10px;
    border: 1px solid #28a745;
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: #ffffff;
    font-size: 1rem;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  .option-button:hover {
    background-color: #eafaf1;
    border-color: #1e8449;
  }

  .option-button:active {
    background-color: #d4edda;
  }

  .score-container {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1e8449;
    margin-top: 20px;
  }

  .submit-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2c8f2c;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-button:hover {
    background-color: #249024;
  }
  .restart-button {
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.restart-button:hover {
  background-color: #c82333;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  font-size: 1rem;
  color: #2d4a22;
}

`;

export default GlobalStyle;
