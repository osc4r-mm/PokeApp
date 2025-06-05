import React from 'react';

function ViewSwitcher({ view, setView }) {
  return (
    <div className="pokedex-switcher">
      <button
        className={`pokedex-btn${view === 'list' ? ' active' : ''}`}
        onClick={() => setView('list')}
      >
        Llistat
      </button>
      <button
        className={`pokedex-btn${view === 'grid' ? ' active' : ''}`}
        onClick={() => setView('grid')}
      >
        Graella
      </button>
    </div>
  );
}

export default ViewSwitcher;