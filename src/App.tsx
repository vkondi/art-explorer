import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import DetailsPage from './components/DetailsPage/DetailsPage';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/details/:id" element={<DetailsPage />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

export default App;
