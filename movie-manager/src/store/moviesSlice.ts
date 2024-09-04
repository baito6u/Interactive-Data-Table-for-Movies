// src/store/moviesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moviesData from '../data/movies.json';

export interface Movie {
  id: number;
  title: string;
  director: string;
  distributor: string;
  imdb_rating: number;
  imdb_votes: number;
}

interface MoviesState {
  movies: Movie[];
  searchQuery: string;
}

const initialState: MoviesState = {
  movies: moviesData,
  searchQuery: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    editMovie: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },
    deleteMovie: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addMovie, editMovie, deleteMovie, setSearchQuery } = moviesSlice.actions;

export default moviesSlice.reducer;
