import React from 'react';

const AboutMe: React.FC = () => (
  <section>
    <h2 className="text-xl md:text-2xl font-bold mb-6">About Me</h2>
    <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4 max-w-prose">
      <p>
        I'm a developer based in Maidstone, just outside London, with a passion for creating efficient and user-friendly web applications.
      </p>
      <p>
        My background in purchasing allowed me to work on my problem-solving skills, which I now apply to my development projects. I'm proficient in React, JavaScript, HTML5, and CSS3, with hands-on experience in building responsive web apps like SimpliStock.
      </p>
    </div>
  </section>
);

export default AboutMe;