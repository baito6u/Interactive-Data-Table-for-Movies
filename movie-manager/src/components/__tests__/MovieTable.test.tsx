import React from 'react';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import MovieTable from '../MovieTable';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


test('renders movie table', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MovieTable />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText(/Following/i)).toBeInTheDocument(); // 'toBeInTheDocument' should work now
});

