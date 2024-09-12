import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    id: '1',
    title: 'Test Project',
    description: 'This is a test project description'
  };

  it('renders project details correctly', () => {
    render(
      <BrowserRouter>
        <ProjectCard {...mockProject} />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 3, name: mockProject.title })).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    
    const linkElement = screen.getByRole('link', { name: /View Project/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/project/${mockProject.id}`);
  });
});