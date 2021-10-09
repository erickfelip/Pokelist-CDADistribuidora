import React, {
    useEffect,
    useState,
  } from 'react';
  import { useParams } from 'react-router-dom';
  import './View.css';
  
  const PokemonView = () => {
    const [pokemon, setPokemon] = useState(null);
    const { name } = useParams();
//utilizei o useEffect para executar uma ''side-effect'' para ser executado depois da primeira renderização;// 
//o fetch para fazer a chamada da api, buscando os pokemons//
//utilizando o then para retornar um objeto, recebendo um response 'r' e um 'r.json', convertendo o resultado em um objeto devido a promise.//
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((r) => r.json())
        .then((json) => {
          setPokemon(json);
        });
    }, [name]);
  
    if (!pokemon) {
      return null;
    }
  
    return (
      <div className="PokemonView">
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        Habilidades:
        <ul className="PokemonView__abilities">
          {pokemon.abilities.map((item) => (
            <li>{item.ability.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  //na parte de listagem, o map é utilizado para transformar uma array em outra array, convertendo cada 'item' para objeto.//

  export default PokemonView;