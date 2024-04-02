import React from "react";
import { useNameContext } from "./Context";

const Form = () => {
  const { setName } = useNameContext();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <label>Your name: </label>
      <input type="text" id="name" onChange={handleChange} />
    </div>
  );
};

export default Form;
