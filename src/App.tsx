import React from 'react';
import Routes from './routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;


//main a39dc11