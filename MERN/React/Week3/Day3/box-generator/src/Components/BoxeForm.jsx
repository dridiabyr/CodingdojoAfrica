import React, { useState } from "react";

const BoxeForm = () => {
  const [color, setColor] = useState("");
  const [dimensions, setDimensions] = useState({ width: "", height: "" });
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBox = {
      color: color,
      width: dimensions.width,
      height: dimensions.height,
    };
    setBoxes([...boxes, color]);
    setColor("");
  };

  return (
    <div className="box-creator">
      <form onSubmit={handleSubmit}>
        <label> Color : </label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />

        <label>Width:</label>
        <input type="number" value={dimensions.width} onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}/>
        <label>heigth:</label>
        <input type="number" value={dimensions.height} onChange={(e) => setDimensions({ ...dimensions, height: e.target.value }) }/>
        <button type="submit"> Add </button>
      </form>
      
      <div className="box-container">
        {boxes.map((box, index) => (
          <div key={index} className="box" style={{backgroundColor: box.color, width: `${box.width}px`,height: `${box.height}px`}}>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxeForm;
