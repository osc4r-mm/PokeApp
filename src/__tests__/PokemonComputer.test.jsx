// Importa React porque el test renderiza componentes con JSX
import React from 'react';

// Importa utilidades de React Testing Library:
// - render: renderiza el componente para testearlo
// - screen: permite consultar el DOM renderizado
// - waitFor: espera a que se cumpla una condición de forma asíncrona
// - fireEvent: simula eventos de usuario como clicks
// - cleanup: limpia el DOM después de cada test
import { render, screen, waitFor, fireEvent, cleanup } from '@testing-library/react';

// Importa MemoryRouter de react-router-dom para simular un entorno de rutas en tests
import { MemoryRouter } from 'react-router-dom';

// Importa el componente a testear
import PokemonComputer from '../components/PokemonComputer';

// Antes de todos los tests, "mockea" la función global fetch para controlar las peticiones de red
beforeAll(() => {
  global.fetch = vi.fn();
});

// Después de cada test, limpia el DOM y los mocks para que los tests no interfieran entre sí
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Agrupa todos los tests relacionados con PokemonComputer
describe('PokemonComputer', () => {
  // Test principal: Comprueba que se renderiza la lista de pokemons y que el cambio de vista funciona
  it('muestra los pokemons en modo lista y cambia a modo grid', async () => {
    // Define una respuesta "mock" para la API de Pokémon (simula dos pokemons)
    const dataResponse = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
      count: 2,
    };

    // Configura el mock de fetch para que devuelva la respuesta anterior cuando se llame
    fetch.mockResolvedValue({
      ok: true,
      json: async () => dataResponse,
    });

    // Renderiza el componente PokemonComputer dentro de un MemoryRouter para simular las rutas
    render(
      <MemoryRouter>
        <PokemonComputer />
      </MemoryRouter>
    );

    // Espera a que aparezcan los pokemons en la vista lista
    await waitFor(() => {
      // Comprueba que los nombres de los pokemons aparecen en el DOM
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('ivysaur')).toBeInTheDocument();
      // Debe estar la lista (ul)
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    // Cambia a la vista grid simulando el click en el botón correspondiente
    fireEvent.click(screen.getByRole('button', { name: /graella/i }));

    // Espera a que se muestre la grid
    await waitFor(() => {
      // Deben seguir los nombres (ahora en grid)
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('ivysaur')).toBeInTheDocument();
      // Busca por clase de grid, si tienes esa clase
      expect(document.querySelector('.pokemon-grid')).toBeInTheDocument();
    });
  });
});