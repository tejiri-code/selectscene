// src/components/Movie.js
import React from 'react';

const Movie = ({ title, overview, posterPath }) => {
  return (
    <div className="max-w-md mx-auto my-4 bg-white rounded overflow-hidden shadow-lg">
      <img className="w-full" src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
