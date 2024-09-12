import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:bg-transparent lg:border-0 lg:p-0">
    <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <Link 
      to={`/project/${id}`}
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
    >
      View Project
    </Link>
  </div>
);

export default ProjectCard;