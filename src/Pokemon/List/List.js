import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then((r) => r.json())
      .then((json) => {
        setPokemons(json.results);
      });
  }, []);

  if (!pokemons) {
    return null;
  }

  return (
    <ul className="PokemonList">
        {console.log(pokemons)}
      {pokemons.map(({ name }) => (
        <li key={name}>
          <Link to={`/pokemons/${name}`}>
            {name}
            
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;