import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('renders brand name correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const brandName = screen.getByText('ARTVERSE');
    expect(brandName).toBeInTheDocument();
  });
});
