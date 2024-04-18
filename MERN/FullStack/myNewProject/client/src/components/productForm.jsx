import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title"> Title </label>
        <input
          type="text"
          placeholder="Title "
          onChange={handleTitleChange}
          value={title}
        />

        <label htmlFor="price"> Price </label>
        <input
          type="text"
          placeholder="Put your Price ... "
          onChange={handlePriceChange}
          value={price}
        />

        <label htmlFor="Description "> Description </label>
        <input
          type="text"
          placeholder="Description ...  "
          onChange={handleDescriptionChange}
          value={description}
        />

        <button type="submit"> Create </button>
      </div>
    </form>
  );
};

export default ProductForm;
