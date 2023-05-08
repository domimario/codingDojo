import React, { useState, useEffect } from "react";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [showNames, setShowNames] = useState(false);
  const apiGet = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPokemon(json.results);
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
        <h1>POKEMON API</h1>

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
