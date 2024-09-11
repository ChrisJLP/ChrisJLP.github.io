import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProjectDetail from '../pages/ProjectDetail';

const AppRoutes: React.FC = () => {
  return (
    <Router basename="/chrisjlp.github.io">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;