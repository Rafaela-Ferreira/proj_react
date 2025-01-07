import React from "react";

const Options = ({ options, onAnswer }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(index)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
