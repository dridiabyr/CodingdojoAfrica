import React, { useState } from "react";

const BoxeForm = () => {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color !== '' ){
        setBoxes([...boxes,color]);
        setColor('')
    }

    };


  return (
    <div className="bix-creator">
      <form onSubmit={handleSubmit}>
        <label> Color : </label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <button type="submit"> Add </button>
      </form>
      <div className="box-container">
        {boxes.map((boxColor, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: boxColor }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxeForm;
