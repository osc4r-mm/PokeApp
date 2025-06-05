import React from "react";
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';

// Mock fetch
beforeAll(() => {
  global.fetch = vi.fn();
});

// Clean DOM and mocks
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Tests
describe('PokemonDetail', () => {
    // test 1: comprueba que se rendericza el pokemon con el nombre y la imagen
    it('debe renderizar el pokemon con nombre e imagen', async () => {
        // Simular una respuesta de la API de Pokémon
        const dataResponse = {
            name: 'bulbasaur',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            },
        };

        fetch.mockResolvedValue({
            ok: true,
            json: async () => dataResponse,
        });

        // Render PokemonDetail
        render(
            <MemoryRouter initialEntries={['/pokemon/1']}>
                <PokemonDetail />
            </MemoryRouter>
        );

        await waitFor(() => {
            // Check name
            expect(screen.getByText('bulbasaur')).toBeInTheDocument();
            // Check image
            expect(screen.getByAltText('bulbasaur')).toBeInTheDocument();
        });
    });
});