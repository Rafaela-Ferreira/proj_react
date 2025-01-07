import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #fffaf0;
    color: #6b4226;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  h2 {
    color: #d35400;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  button {
    cursor: pointer;
    background-color: #f39c12;
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
    background-color: #e67e22;
  }

  .quiz-container {
    background: #ffffff;
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;



export default GlobalStyle;
