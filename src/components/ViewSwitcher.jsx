import React from 'react';

function ViewSwitcher({ view, setView }) {
  return (
    <div>
      <button
        onClick={() => setView('list')}
      >
        Llistat
      </button>
      <button
        onClick={() => setView('grid')}
      >
        Graella
      </button>
    </div>
  );
}

export default ViewSwitcher;