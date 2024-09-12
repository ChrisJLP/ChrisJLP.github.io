import React from 'react';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

const Projects: React.FC = () => (
  <section>
    <h2 className="text-xl md:text-2xl font-bold mb-4">Projects</h2>
    <div className="space-y-6 lg:space-y-12">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;