import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PokemonList({ pokemons, page, pageSize }) {
  const location = useLocation();

  return (
    <ul>
      {pokemons.map((pokemon) => {
        return (
          <li key={pokemon.name}>
            <Link
              to={`/pokemon/${pokemon.name}`}
              state={{ page, pageSize, from: location.pathname, view: 'list' }}
            >
            {pokemon.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PokemonList;