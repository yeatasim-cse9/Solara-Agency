import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-3xl mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-9xl font-serif italic text-brand-red mb-6">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
          Page not found
        </h2>
        <p className="text-xl text-brand-text-gray mb-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-colors inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
