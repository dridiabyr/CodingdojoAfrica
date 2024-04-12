import axios, { Axios } from "axios";
import React, { useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const AxiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        console.log(response.data);
         setPokemon(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <fieldset className="app">
      <h1>Pokemon </h1>

      <button onClick={AxiosPokemon}> Axios pokemon </button>
      <p></p>
      {console.log(pokemon)}
      <table>
        <thead>
          <tr>
            <th> Name</th>
            <th> url</th>
          </tr>
        </thead>
        {pokemon.map((pokemon) => {
          return (
            <tr key={pokemon.name}>
              <td>{pokemon.name}</td>
            </tr>
          );
        })}
      </table>
    </fieldset>
  );
};

export default Pokemon;