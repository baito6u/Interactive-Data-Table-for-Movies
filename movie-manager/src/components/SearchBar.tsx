import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../store/moviesSlice';
import { RootState } from '../store/store';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.movies.searchQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies by title..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
