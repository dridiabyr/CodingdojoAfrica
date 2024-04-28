import React, { useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [store, setStore] = useState([
    { name: "1st and Washington", number: 123145, open: true },
    { name: "Weatherby Mall", number: 10323456, open: false },
  ]);

  const handleDelete = (number) => {
    const updateStore = store.filter((store) => store.number !== number);
    setStore(updateStore);
  };
  return (
    <div className="container">
      <h1 className="title"> Store Finder </h1>
      <h5 className="subtitle"> Find store in your area </h5>

      <table className="store-table">
        <thead>
          <tr>
            <th>Name :</th>
            <th>Store Number :</th>
            <th>Open :</th>
            <th>Remove:</th>
          </tr>
        </thead>
        <tbody>
          {store.map((store, index) => (
            <tr key={index}>
              <td>
                <h2>{store.name}</h2>
              </td>
              <td>
                {" "}
                <p> {store.number} </p>
              </td>
              <td>
                <p> {store.open ? "yes" : "no"} </p>
              </td>
              <td>
                {" "}
                <p>
                  {" "}
                  <button onClick={() => handleDelete(store.number)}>
                    {" "}
                    Delete{" "}
                  </button>{" "}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <NavLink to="/store/add">
<button> Add a Store</button> 

      </NavLink>
    </div>
  );
};

export default Home;
