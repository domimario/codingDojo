import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [showNames, setShowNames] = useState(false);

  const apiGet = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  const handleButtonClick = () => {
    setShowNames(true);
  };

  return (
    <>
      <div>
        <h1>POKEMON API AXIOS</h1>

        <button onClick={handleButtonClick}>EMRAT E POKEMON</button>

        {showNames && (
          <div>
            <ul>
              {pokemon.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Pokemon;
