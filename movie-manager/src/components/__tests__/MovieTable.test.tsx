import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import MovieTable from '../MovieTable';
import { BrowserRouter } from 'react-router-dom';

describe('MovieTable Component', () => {
  test('renders movie table with movies', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieTable />
        </BrowserRouter>
      </Provider>
    );

    const movieTitle = screen.getByText(/Following/i);
    expect(movieTitle).toBeInTheDocument();
  });

  test('search functionality works', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieTable />
        </BrowserRouter>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(/Search movies by title.../i);
    expect(searchInput).toBeInTheDocument();
  });
});
