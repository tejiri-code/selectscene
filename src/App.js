// src/App.js
import React, { useState, useEffect } from 'react';
import api from './api';
import Recommendation from './recommendation';
import PreferenceForm from './PreferenceForm';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [preferences, setPreferences] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get('/discover/movie', {
          params: {
            ...preferences,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [preferences]);

  const handlePreferenceSubmit = (newPreferences) => {
    setPreferences(newPreferences);
  };

  return (
    <div className="container mx-auto mt-8">
      <PreferenceForm onSubmit={handlePreferenceSubmit} />
      <Recommendation movies={movies} />
    </div>
  );
};

export default App;
