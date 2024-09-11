import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`/project/${id}`}>View Project</Link>
  </div>
);

export default ProjectCard;