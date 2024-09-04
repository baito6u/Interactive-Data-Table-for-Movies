import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteMovie } from '../store/moviesSlice';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import './MovieTable.css';

const MovieTable: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies, searchQuery } = useSelector((state: RootState) => state.movies);

  const filteredMovies = movies.filter(movie =>
    typeof movie.title === 'string' && movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  const handleAdd = () => {
    navigate('/add');
  };

  return (
    <div className="movie-table-container">
      <h1>Movie Management</h1>
      <SearchBar />
      <button onClick={handleAdd} className="add-button">Add Movie</button>
      <table className="movie-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Distributor</th>
            <th>IMDB Rating</th>
            <th>IMDB Votes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map(movie => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.distributor}</td>
              <td>{movie.imdb_rating}</td>
              <td>{movie.imdb_votes.toLocaleString()}</td>
              <td>
                <button onClick={() => handleEdit(movie.id)}>Edit</button>
                <button onClick={() => handleDelete(movie.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
