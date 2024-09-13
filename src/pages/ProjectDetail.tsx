import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return <ProjectShowcase project={project} />;
};

export default ProjectDetail;