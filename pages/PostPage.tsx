
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Post } from '../types';
import { BLOG_POSTS } from '../constants';
import NotFoundPage from './NotFoundPage';
import LoadingSpinner from '../components/LoadingSpinner';

const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null | undefined>(undefined); // undefined: 加载中, null: 未找到

  useEffect(() => {
    // 模拟获取文章数据
    const foundPost = BLOG_POSTS.find(p => p.id === postId);
    // 模拟异步加载
    const timer = setTimeout(() => {
        setPost(foundPost || null);
    }, 300); // 短暂延迟以显示加载动画
    return () => clearTimeout(timer);
  }, [postId]);

  if (post === undefined) {
    return <LoadingSpinner text="文章加载中..." />;
  }

  if (!post) {
    return <NotFoundPage message="哎呀！您要查找的文章不存在或已被移除。" />;
  }

  return (
    <article className="bg-white p-6 md:p-10 rounded-xl shadow-xl max-w-4xl mx-auto">
      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md"
        />
      )}
      <header className="mb-8 border-b pb-6 border-slate-200">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3">{post.title}</h1>
        <p className="text-slate-500 text-sm">
          发布于 <time dateTime={post.date}>{post.date}</time> 作者：{post.author}
        </p>
        <div className="mt-4">
          {post.tags.map(tag => (
            <span key={tag} className="inline-block bg-slate-100 text-slate-600 text-xs font-medium mr-2 px-2.5 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </header>
      
      {/* 
        内容预计为 HTML 格式。
        请确保 HTML 内容来源可靠，因为是您自己提供的。
      */}
      <div 
        className="prose prose-slate max-w-none prose-headings:text-slate-700 prose-a:text-indigo-600 hover:prose-a:text-indigo-800 prose-img:rounded-md prose-img:shadow-sm"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      <div className="mt-12 pt-8 border-t border-slate-200">
        <Link 
          to="/" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          返回首页
        </Link>
      </div>
    </article>
  );
};

export default PostPage;