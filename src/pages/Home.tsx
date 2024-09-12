import React from 'react';
import AboutMe from '../components/sections/AboutMe';
import Projects from '../components/sections/Projects';

const Home: React.FC = () => (
  <div className="lg:flex lg:space-x-8 xl:space-x-16 2xl:space-x-24">
    <div className="lg:w-1/2">
      <AboutMe />
    </div>
    <div className="lg:w-1/2">
      <Projects />
    </div>
  </div>
);

export default Home;