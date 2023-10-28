import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import DetailsPage from './components/DetailsPage/DetailsPage';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            {/*<Route path ="posts" element={<Posts />} /> */}
            <Route path="*" element={<h1>Route does not exist</h1>} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

export default App;
