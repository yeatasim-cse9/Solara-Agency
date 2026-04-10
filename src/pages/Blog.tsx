import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Blog() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Our <span className="font-serif italic">Insights</span>
        </h1>
        <p className="text-xl text-brand-text-gray">
          Thoughts, strategies, and actionable advice from the Solara team.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <Link to={`/blog/${post.slug}`} key={i}>
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer h-full"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-6 border border-white/10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="text-brand-red font-medium">{post.category}</span>
                <span className="text-brand-text-gray">{post.date}</span>
              </div>
              <h3 className="text-2xl font-medium mb-3 group-hover:text-brand-red transition-colors">
                {post.title}
              </h3>
              <p className="text-brand-text-gray line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-brand-red transition-colors mt-auto">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  );
}
