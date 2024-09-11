import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import App from '../../App';

// Mock the react-router-dom module (assuming AppRoutes uses react-router)
vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Routes: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Route: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('App', () => {
  it('renders App component with expected structure', () => {
    render(<App />);
    
    // Check for the header
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    
    // Check for the h1 with the text "Chris Pring"
    const h1Element = screen.getByRole('heading', { level: 1, name: /Chris Pring/i });
    expect(h1Element).toBeInTheDocument();

    // Check for the main content area
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();

    // Check for the footer
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });
});