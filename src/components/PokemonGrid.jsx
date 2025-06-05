import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PokemonGrid({ pokemons, page, pageSize }) {
  const location = useLocation();

  // Función para extraer el ID del Pokémon desde la URL
  const getPokemonId = (url) => {
    const match = url.match(/\/pokemon\/(\d+)\//);
    return match ? match[1] : null;
  };

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => {
        const id = getPokemonId(pokemon.url);
        return (
          <div key={pokemon.name} className="pokemon-card">
            <Link
              to={`/pokemon/${pokemon.name}`}
              state={{ page, pageSize, from: location.pathname, view: 'grid' }}
              className="pokemon-link"
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={pokemon.name}
                width={80}
                height={80}
              />
              <div className="pokemon-name">{pokemon.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonGrid;