
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-slate-700 hover:text-indigo-600 transition-colors duration-300">
          {siteTitle}
        </Link>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            <li>
              <Link to="/" className="text-slate-600 hover:text-indigo-600 transition-colors duration-300 font-medium">
                首页
              </Link>
            </li>
            {/* 若需要可在此添加更多导航链接，例如：关于我、作品集 */}
            {/* <li>
              <Link to="/about" className="text-slate-600 hover:text-indigo-600 transition-colors duration-300 font-medium">
                关于我
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;