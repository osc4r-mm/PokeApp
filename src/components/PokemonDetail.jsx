import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [name]);

  if (!pokemon) return <div>Carregant...</div>;

  const prevState = location.state || {};

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        width={150}
        height={150}
      />
      <br />
      <button
        onClick={() =>
          navigate("/", { state: prevState })
        }
      >
        Tornar al llistat
      </button>
    </div>
  );
}

export default PokemonDetail;