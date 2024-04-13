// StyledWord.js
import React from "react";
import { useParams } from "react-router-dom";

const StyledWord = () => {
  const { word, backgroundColor, textColor } = useParams();
  const styles = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: "10px",
    borderRadius: "5px",
    display: "inline-block",
  };
  return (
    <div style={styles}>
      <h1>This word is :{word}</h1>
    </div>
  );
};

export default StyledWord;
