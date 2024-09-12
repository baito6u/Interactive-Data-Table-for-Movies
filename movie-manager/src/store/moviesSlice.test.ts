import moviesReducer, { addMovie, deleteMovie } from './moviesSlice';

describe('movies slice', () => {
  // Mock an empty initial state for testing purposes
  const initialState = {
    movies: [],
    searchQuery: '',
  };

  test('should return the initial state', () => {
    const result = moviesReducer(initialState, { type: '' });
    expect(result).toEqual(initialState); // Expect an empty state in the test
  });

  test('should handle adding a movie', () => {
    const newMovie = {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      distributor: 'Warner Bros',
      imdb_rating: 8.8,
      imdb_votes: 2000000,
    };
    const action = addMovie(newMovie);
    const result = moviesReducer(initialState, action);
    expect(result.movies).toHaveLength(1);
    expect(result.movies[0]).toEqual(newMovie);
  });

  test('should handle deleting a movie', () => {
    const initialStateWithMovie = {
      movies: [
        {
          id: 1,
          title: 'Inception',
          director: 'Christopher Nolan',
          distributor: 'Warner Bros',
          imdb_rating: 8.8,
          imdb_votes: 2000000,
        },
      ],
      searchQuery: '',
    };
    const action = deleteMovie(1);
    const result = moviesReducer(initialStateWithMovie, action);
    expect(result.movies).toHaveLength(0);
  });
});
