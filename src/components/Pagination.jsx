import React from 'react';

function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div style={{ marginTop: '1rem', marginBottom: '1rem', textAlign: 'center' }}>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Anterior
      </button>
      <span style={{ margin: '0 1rem', fontWeight: 'bold', letterSpacing: '1px' }}>
        Pàgina {page} de {totalPages}
      </span>
      <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>
        Següent
      </button>
    </div>
  );
}

export default Pagination;