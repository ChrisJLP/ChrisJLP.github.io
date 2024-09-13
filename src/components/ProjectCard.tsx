import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-lg md:max-w-xl md:mx-auto lg:max-w-none lg:bg-transparent lg:border-none lg:p-0 lg:hover:shadow-none">
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">{project.title}</h3>
      <div className="mb-6 flex justify-center">
        <img 
          src={project.imageUrl} 
          alt={`Screenshot of ${project.title}`} 
          className="w-full rounded-lg shadow-md object-contain max-h-[60vh] lg:max-h-[70vh]"
        />
      </div>
      <p className="text-gray-300 mb-6 text-center">{project.description}</p>
      <div className="text-center">
        <Link 
          to={`/project/${project.id}`}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;