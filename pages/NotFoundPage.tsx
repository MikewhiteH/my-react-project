
import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundPageProps {
  message?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-indigo-500 mb-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75 18 18M12 6v6m0 0v6m0-6h6m-6 0H6" transform="rotate(45 12 12)" />
      </svg>
      <h1 className="text-4xl font-bold text-slate-800 mb-3">404 - 页面未找到</h1>
      <p className="text-slate-600 mb-8 text-lg">
        {message || "抱歉，您访问的页面不存在或已被移动。"}
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
      >
        返回首页
      </Link>
    </div>
  );
};

export default NotFoundPage;