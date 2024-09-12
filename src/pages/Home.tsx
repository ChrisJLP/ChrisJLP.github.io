import React from 'react';
import AboutMe from '../components/sections/AboutMe';
import Projects from '../components/sections/Projects';

const Home: React.FC = () => (
  <div className="space-y-6">
    <AboutMe />
    <Projects />
  </div>
);

export default Home;