import React, { useState } from "react";

const pokemon = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <fieldset className="app">
      <h1>Pokemon </h1>

      <button onClick={fetchPokemon}> fetch pokemon </button>
      <p></p>
      {console.log(pokemon)}
      <table>
        <thead>
          <tr>
            {" "}
            <th> Name</th>
            <th> url</th>
          </tr>
        </thead>
        {pokemon.map((pokemon) => {
          return (
            <tr key={pokemon.results.name}>
              <td> {pokemon.results.name}</td>
              <td> </td>
            </tr>
          );
        })}
      </table>
    </fieldset>
  );
};

export default pokemon;
