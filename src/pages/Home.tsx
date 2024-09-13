import React from 'react';
import AboutMe from '../components/sections/AboutMe';
import Technologies from '../components/sections/Technologies';
import Projects from '../components/sections/Projects';

const Home: React.FC = () => (
  <div className="lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-16 2xl:gap-[10%]">
    <div className="lg:col-span-2 space-y-12 mb-12 lg:mb-0">
      <AboutMe />
      <Technologies />
    </div>
    <div className="lg:col-span-3">
      <Projects />
    </div>
  </div>
);

export default Home;