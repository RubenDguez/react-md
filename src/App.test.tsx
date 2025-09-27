import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });
  afterEach(() => {
    cleanup();
  });

  it('renders the App component', () => {
    expect(screen.getByText('Hola Mundo')).toBeInTheDocument();
  });
});
