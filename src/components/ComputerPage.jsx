import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ViewSwitcher from './ViewSwitcher';
import Pagination from './Pagination';
import PokemonList from './PokemonList';
import PokemonGrid from './PokemonGrid';

function ComputerPage() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [view, setView] = useState('list');
  const pageSize = 20;
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      if (location.state.page) setPage(location.state.page);
      if (location.state.view) setView(location.state.view);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    async function fetchPokemons() {
      const offset = (page - 1) * pageSize;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`);
      const data = await res.json();
      setPokemons(data.results);
      setTotal(data.count);
    }
    fetchPokemons();
  }, [page]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="pokedex-bg">
      <div className="pokedex-frame">
        <div className="pokedex-header">
          <div className="pokedex-led" />
          <span className="pokedex-title">PokéApp</span>
        </div>
        <ViewSwitcher view={view} setView={setView} />
        {view === 'list' ? (
          <PokemonList
            pokemons={pokemons}
            page={page}
            pageSize={pageSize}
            setPage={setPage}
            totalPages={totalPages}
          />
        ) : (
          <PokemonGrid
            pokemons={pokemons}
            page={page}
            pageSize={pageSize}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}

export default ComputerPage;