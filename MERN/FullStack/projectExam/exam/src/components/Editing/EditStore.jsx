import React, { useState } from "react";
import axios from "axios";

const EditStore = () => {

    
  const [storeName, setStoreName] = useState("");
  const [storeNumber, setStoreNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/stores/${e.params.storeId}`, {
        name: storeName,
        number: storeNumber,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="storeName">Store Name:</label>
      <input
        type="text"
        id="storeName"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
      />
      <label htmlFor="storeNumber">Store Number:</label>
      <input
        type="number"
        id="storeNumber"
        value={storeNumber}
        onChange={(e) => setStoreNumber(e.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditStore;
