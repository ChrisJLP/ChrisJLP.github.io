import React from 'react';
import { Project } from '../types/Project';

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
        
        <p className="mb-8 text-lg">{project.introduction}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.screenshots.map((screenshot, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img 
                src={screenshot.src} 
                alt={screenshot.alt} 
                className="w-full rounded-lg shadow-md object-contain max-h-[60vh] lg:max-h-[70vh]"
              />
            </div>
          ))}
        </div>
      
      <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul className="list-disc list-inside mb-8">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc list-inside mb-8">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
      <p className="mb-8 text-lg">{project.challenges}</p>

      <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
      <p className="mb-8 text-lg">{project.outcome}</p>
      
      <div className="flex space-x-4">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            View on GitHub
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            View Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;