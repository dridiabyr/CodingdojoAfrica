import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import StoreDetails from "../StoreDetails";

const AddStore = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(true);
  const [stores, setStores] = useState([
    { name: "1st and Washington", number: 123145, open: true },
    { name: "Weatherby Mall", number: 10323456, open: false },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/stores");
        setStores(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && number) {
      const newStore = { name, number, open };
      axios
        .post("/api/stores", newStore)
        .then((response) => {
          setStores([...stores, response.data]); // Add the newly created store to the state
          setName("");
          setNumber("");
          setOpen(true);
          const newStoreId = response.data.id;
          window.location.href = `/store-details/${newStoreId}`;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <h1>Add a New Store</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="number">Store Number:</label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <br />
        <label htmlFor="open">Open:</label>
        <input
          type="checkbox"
          id="open"
          checked={open}
          onChange={(e) => setOpen(e.target.checked)}
        />
        <br />
        <NavLink to="/store-details">
          <button type="submit">Add Store</button>{" "}
        </NavLink>
      </form>
      <div>
        <h2>Stores:</h2>
        <ul>
          {stores.map((store, index) => (
            <li key={index}>
              <h3>{store.name}</h3>
              <p>Number: {store.number}</p>
              <p>Open: {store.open ? "Yes" : "No"}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddStore;
