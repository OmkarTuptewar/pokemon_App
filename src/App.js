import React, { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();
        const pokemonData = await Promise.all(data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const details = await response.json();
          return {
            name: details.name,
            image: details.sprites.front_default,
          };
        }));
        setPokemons(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-700 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-2">Pokémon Gallery</h1>
        <p className="text-lg text-gray-100">Discover your favorite Pokémon!</p>
      </div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.image}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-800">No Pokémon found.</div>
        )}
      </div>
    </div>
  );
};

export default App;
