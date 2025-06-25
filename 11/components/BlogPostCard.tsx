
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group">
      {post.imageUrl && (
        <Link to={`/post/${post.id}`} className="block overflow-hidden h-48" aria-label={`阅读关于 ${post.title} 的文章`}>
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </Link>
      )}
      <div className="p-6">
        <p className="text-sm text-slate-500 mb-1">{post.date} &bull; 作者：{post.author}</p>
        <h2 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="text-slate-600 mb-4 line-clamp-3">{post.summary}</p>
        <div className="mb-3">
          {post.tags.map(tag => (
            <span key={tag} className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        <Link 
          to={`/post/${post.id}`} 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
          aria-label={`继续阅读：${post.title}`}
        >
          阅读全文
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;