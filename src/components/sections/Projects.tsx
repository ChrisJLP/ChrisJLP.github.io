import React from 'react';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

const Projects: React.FC = () => (
  <section>
    <div className="space-y-12">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} {...project} isFirstProject={index === 0} />
      ))}
    </div>
  </section>
);

export default Projects;