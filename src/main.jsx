import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./containers/Home";
import GlobalStyle from "./styles/globalStyles";
import "./firebase";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
