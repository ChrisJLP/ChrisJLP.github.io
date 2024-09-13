import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto max-w-4xl lg:max-w-6xl xl:max-w-7xl px-4 md:px-0 md:max-w-xl md:mx-auto lg:px-8 xl:px-12 2xl:px-16">
      <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 transition-all duration-300">Chris Pring</h1>
      </Link>
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