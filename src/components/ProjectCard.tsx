import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isFirstProject: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageUrl, isFirstProject }) => {
  return (
    <div className={`bg-gray-800 border border-gray-700 rounded-lg p-4 lg:bg-transparent lg:border-0 lg:p-0 ${isFirstProject ? 'lg:min-h-screen' : ''}`}>
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">{title}</h3>
      <div className="mb-6">
        <img 
          src={imageUrl} 
          alt={`Screenshot of ${title}`} 
          className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-md object-contain max-h-[70vh]"
        />
      </div>
      <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">{description}</p>
      <div className="text-center">
        <Link 
          to={`/project/${id}`}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;