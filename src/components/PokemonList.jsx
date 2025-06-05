import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PokemonList({ pokemons, page, pageSize }) {
  const location = useLocation();

  // Función para extraer el ID del Pokémon desde la URL
  const getPokemonId = (url) => {
    const match = url.match(/\/pokemon\/(\d+)\//);
    return match ? match[1] : null;
  };

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => {
        const id = getPokemonId(pokemon.url);
        return (
          <li key={pokemon.name}>
            <Link
              to={`/pokemon/${pokemon.name}`}
              state={{ page, pageSize, from: location.pathname, view: 'list' }}
              className="pokemon-link"
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={pokemon.name}
                width={50}
                height={50}
              />
              <div>
                {pokemon.name}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PokemonList;