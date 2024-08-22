import React from 'react';

const PokemonCard = ({ name, image }) => (
<div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border border-gray-200 hover:border-blue-300">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg border-b border-gray-200" />
    <div className="p-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 capitalize">{name}</h2>
    </div>
  </div>
);

export default PokemonCard;
