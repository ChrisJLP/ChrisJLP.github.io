import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <div>Project Detail for ID: {id}</div>;
};

export default ProjectDetail;