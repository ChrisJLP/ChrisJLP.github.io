import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageUrl }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-lg md:max-w-xl md:mx-auto lg:max-w-none lg:bg-transparent lg:border-none lg:p-0 lg:hover:shadow-none">
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">{title}</h3>
      <div className="mb-6 flex justify-center">
        <img 
          src={imageUrl} 
          alt={`Screenshot of ${title}`} 
          className="w-full rounded-lg shadow-md object-contain max-h-[60vh] lg:max-h-[70vh]"
        />
      </div>
      <p className="text-gray-300 mb-6 text-center">{description}</p>
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