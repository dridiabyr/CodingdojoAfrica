import React, { useEffect, useState } from "react";
import axios from "axios";

const StoreDetails = ({ match }) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/stores/${match.params.id}`);
        setStore(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [match.params.id]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{store.name}</h1>
      <p>Store Number: {store.number}</p>
      <p>Open: {store.open ? "Yes" : "No"}</p>
    </div>
  );
};

export default StoreDetails;