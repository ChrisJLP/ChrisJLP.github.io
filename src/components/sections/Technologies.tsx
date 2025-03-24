import React from 'react';

const technologies = [
  'React',
  'JavaScript',
  'TypeScript',
  'NodeJS',
  'Express',
  'PostgreSQL',
  'Tailwind CSS',
  'CSS',
  'HTML',
  'Git',
  
  'Vite',
  'Vitest'
];

const Technologies: React.FC = () => (
  <section className="w-full md:max-w-xl md:mx-auto lg:max-w-none">
    <h2 className="text-xl md:text-2xl font-bold mb-4">Technologies</h2>
    <ul className="grid grid-cols-2 gap-2">
      {technologies.map((tech, index) => (
        <li key={index} className="bg-gray-800 rounded-lg p-2 text-center">{tech}</li>
      ))}
    </ul>
  </section>
);

export default Technologies;