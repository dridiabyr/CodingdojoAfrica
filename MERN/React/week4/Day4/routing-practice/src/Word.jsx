// Word.js
import React from "react";
import { useParams } from "react-router-dom";

const Word = () => {
  const { word } = useParams();
  return (
    <div>
      <h1>This word  is  :{word}</h1>
    </div>
  );
};

export default Word;
