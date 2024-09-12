import { render, screen } from '@testing-library/react';
import Header from '../../../components/layout/Header';
describe('Header', () => {
  it('renders the header with correct content', () => {
    render(<Header />);
    
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    
    const headingElement = screen.getByRole('heading', { name: /Chris Pring/i });
    expect(headingElement).toBeInTheDocument();
  });
});