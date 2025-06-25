import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { SITE_TITLE, AUTHOR_NAME } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 text-slate-800 font-sans antialiased">
      <Header siteTitle={SITE_TITLE} />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer authorName={AUTHOR_NAME} />
    </div>
  );
};

export default App;