import React from 'react';

const AboutMe: React.FC = () => (
  <section className="mt-2 mb-4">
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:bg-transparent lg:border-0 lg:p-0"> 
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">About Me</h2> 
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        I'm a developer based in Maidstone, just outside London, with a passion for creating 
        efficient and user-friendly web applications. My background in 
        purchasing allowed me to work on my problem-solving skills, which I now apply to my development projects. I'm 
        proficient in React, JavaScript, HTML5, and CSS3, with hands-on experience in 
        building responsive web apps like SimpliStock.
        </p>
    </div>
  </section>
);

export default AboutMe;