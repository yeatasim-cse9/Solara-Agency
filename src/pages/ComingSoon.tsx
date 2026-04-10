import React from 'react';
import { motion } from 'motion/react';

export default function ComingSoon() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-3xl mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80 mb-8">
          Under Construction
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Coming <span className="font-serif italic">Soon</span>
        </h1>
        <p className="text-xl text-brand-text-gray mb-10">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto w-full">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-red/50 transition-colors w-full"
          />
          <button className="bg-brand-red hover:bg-red-500 text-white px-8 py-4 rounded-xl font-medium transition-colors whitespace-nowrap">
            Notify Me
          </button>
        </div>
      </motion.div>
    </div>
  );
}
