import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

test('renders Home page', () => {
  render(<Home />);
  const aboutMeElement = screen.getByText(/About Me/i);
  const projectsElement = screen.getByText(/Projects/i);
  expect(aboutMeElement).toBeInTheDocument();
  expect(projectsElement).toBeInTheDocument();
});