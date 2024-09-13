import React from 'react';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

const Projects: React.FC = () => (
  <section className="px-4 md:px-0 lg:px-0">
    <div className="space-y-12 md:space-y-16 lg:space-y-24">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;