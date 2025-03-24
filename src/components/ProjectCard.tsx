import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Determine if we should link directly to the live site
  const shouldLinkDirectly = project.id === 'runetiles';

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg transition-transform transform duration-300 hover:scale-105 w-full">
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-center text-white">{project.title}</h3>
      <div className="mb-6 flex justify-center">
        <img 
          src={project.imageUrl} 
          alt={`Screenshot of ${project.title}`} 
          className="w-full rounded-lg shadow-md object-cover max-h-[80vh]"
        />
      </div>
      <p className="text-gray-300 mb-6 text-center">{project.description}</p>
      <div className="text-center">
        {shouldLinkDirectly && project.liveLink ? (
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Visit Website
          </a>
        ) : (
          <Link 
            to={`/project/${project.id}`}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            View Project
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;