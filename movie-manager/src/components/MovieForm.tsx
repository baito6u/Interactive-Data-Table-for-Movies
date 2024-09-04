// src/components/MovieForm.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie, Movie } from '../store/moviesSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../store/store';
import './MovieForm.css'; // Optional: For styling

const MovieForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const existingMovie = movies.find(movie => movie.id === Number(id));

  const [title, setTitle] = useState(existingMovie?.title || '');
  const [director, setDirector] = useState(existingMovie?.director || '');
  const [distributor, setDistributor] = useState(existingMovie?.distributor || '');
  const [imdbRating, setImdbRating] = useState(existingMovie?.imdb_rating || 0);
  const [imdbVotes, setImdbVotes] = useState(existingMovie?.imdb_votes || 0);

  const isEditMode = Boolean(existingMovie);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMovie: Movie = {
      id: isEditMode ? existingMovie!.id : Date.now(),
      title,
      director,
      distributor,
      imdb_rating: imdbRating,
      imdb_votes: imdbVotes,
    };

    if (isEditMode) {
      dispatch(editMovie(newMovie));
    } else {
      dispatch(addMovie(newMovie));
    }

    navigate('/');
  };

  return (
    <div className="movie-form-container">
      <h2>{isEditMode ? 'Edit Movie' : 'Add New Movie'}</h2>
      <form onSubmit={handleSubmit} className="movie-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            value={director}
            onChange={e => setDirector(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="distributor">Distributor:</label>
          <input
            type="text"
            id="distributor"
            value={distributor}
            onChange={e => setDistributor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imdb_rating">IMDB Rating:</label>
          <input
            type="number"
            id="imdb_rating"
            value={imdbRating}
            onChange={e => setImdbRating(parseFloat(e.target.value))}
            step="0.1"
            min="0"
            max="10"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imdb_votes">IMDB Votes:</label>
          <input
            type="number"
            id="imdb_votes"
            value={imdbVotes}
            onChange={e => setImdbVotes(parseInt(e.target.value))}
            min="0"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          {isEditMode ? 'Save Changes' : 'Add Movie'}
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
