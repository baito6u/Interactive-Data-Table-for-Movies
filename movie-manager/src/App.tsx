import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieTable from './components/MovieTable';

import './App.css'; // Global styles

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MovieTable />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
