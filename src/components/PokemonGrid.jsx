import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PokemonGrid({ pokemons, page, pageSize }) {
  const location = useLocation();

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="pokemon-card">
          <Link
            to={`/pokemon/${pokemon.name}`}
            state={{ page, pageSize, from: location.pathname, view: 'grid' }}
          >
            {pokemon.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PokemonGrid;
