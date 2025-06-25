
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', text }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-4',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center py-8" role="status" aria-live="polite">
      <div 
        className={`${sizeClasses[size]} border-slate-300 border-t-indigo-600 rounded-full animate-spin`}
        aria-label={text ? undefined : "加载中"}
      ></div>
      {text && <p className="mt-3 text-slate-600">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;