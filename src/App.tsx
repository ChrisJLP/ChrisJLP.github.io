import React from 'react';
import AppRoutes from './routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl xl:max-w-7xl">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;