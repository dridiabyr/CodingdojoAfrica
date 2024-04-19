import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id).then((res) => {
      setTitle.title(res.data.title);
      setPrice.price(res.data.price);
      setDescription.description(res.data.description);
    });
  }, []);

  const updatePerson = (e) => {
    e.preventDefault();
    axios
      .patch("http://localhost:8000/api/people/" + id, {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Update a Person</h1>
      <form onSubmit={updatePerson}>
        <p>
          <label>Title :</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Price :</label>
          <br />
          <input
            type="text"
            name="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Description :</label>
          <br />
          <input
            type="text"
            name="desc"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
