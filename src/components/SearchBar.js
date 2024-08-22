import React from 'react';

const SearchBar = ({ query, setQuery }) => (
  <div className="mb-6 flex justify-center">
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-lg p-4 w-full text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
      />
      <svg
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M15.65 12.65a6.5 6.5 0 1 0-9.2 0 6.5 6.5 0 0 0 9.2 0z" />
      </svg>
    </div>
  </div>
);

export default SearchBar;
