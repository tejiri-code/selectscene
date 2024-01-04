// src/components/PreferenceForm.js
import React, { useState } from 'react';

const PreferenceForm = ({ onSubmit }) => {
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ with_genres: genre, primary_release_year: releaseYear });
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
          Genre:
        </label>
        <input
          type="text"
          id="genre"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="releaseYear">
          Release Year:
        </label>
        <input
          type="text"
          id="releaseYear"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter release year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Get Recommendations
      </button>
    </form>
  );
};

export default PreferenceForm;
