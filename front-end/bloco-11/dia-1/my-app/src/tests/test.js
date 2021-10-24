import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App';

describe('Verifica a pagina Login', () => {
  test('Existe um título h1', () => {
    render(<App />)
    
    const h1Title = screen.getByRole('heading', {
      name: /login/i,
      level: 1,
    });

    expect(h1Title).toBeInTheDocument();
  })
})