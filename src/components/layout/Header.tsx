import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-2">Chris Pring</h1>
      <div className="flex space-x-4">
        <a
          href="https://github.com/ChrisJLP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-300"
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/chris-pring-95b498170/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-300"
       >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>
      </div>
    </div>
  </header>
);

export default Header;