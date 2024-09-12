import React from 'react';
import AboutMe from '../components/sections/AboutMe';
import Projects from '../components/sections/Projects';

const Home: React.FC = () => (
  <div className="lg:flex lg:space-x-8 xl:space-x-16 2xl:space-x-24 lg:min-h-screen">
    <div className="lg:w-2/5 mb-12 lg:mb-0 lg:pl-8 xl:pl-12">
      <AboutMe />
    </div>
    <div className="lg:w-3/5">
      <Projects />
    </div>
  </div>
);

export default Home;