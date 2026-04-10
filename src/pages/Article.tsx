import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Twitter, Facebook, Link as LinkIcon } from 'lucide-react';
import { posts } from '../data/posts';

export default function Article() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="pt-40 pb-20 w-[90%] max-w-5xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="text-brand-text-gray font-medium text-xs tracking-[0.2em] uppercase mb-6">
          {post.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg md:text-xl text-brand-text-gray mb-12 max-w-2xl mx-auto">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-center gap-12 text-sm text-brand-text-gray">
          <div className="flex flex-col items-center">
            <span className="uppercase text-[10px] font-bold tracking-widest mb-1 text-white/40">Date</span>
            <span className="text-white/80">{post.date}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="uppercase text-[10px] font-bold tracking-widest mb-1 text-white/40">Author</span>
            <span className="text-white/80">{post.author}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="uppercase text-[10px] font-bold tracking-widest mb-1 text-white/40">Read</span>
            <span className="text-white/80">{post.readTime}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20"
      >
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full aspect-[21/9] object-cover rounded-[2rem] border border-white/10"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto">
        {/* Social Share - Sticky Sidebar */}
        <div className="md:w-24 flex-shrink-0">
          <div className="sticky top-32 flex md:flex-col gap-4 items-center justify-center md:justify-start">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-brand-red transition-colors text-white/60">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-brand-red transition-colors text-white/60">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-brand-red transition-colors text-white/60">
              <LinkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div 
          className="flex-1 prose prose-invert prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </div>
  );
}
