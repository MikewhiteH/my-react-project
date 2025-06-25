
import React from 'react';

interface FooterProps {
  authorName: string;
}

const Footer: React.FC<FooterProps> = ({ authorName }) => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} {authorName}. 版权所有.
        </p>
        <div className="flex justify-center space-x-6">
          {/* GitHub and LinkedIn links removed */}
        </div>
        <p className="text-xs mt-6">基于 React, TypeScript, 和 Tailwind CSS 构建。</p>
      </div>
    </footer>
  );
};

export default Footer;