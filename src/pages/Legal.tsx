import React from 'react';
import { motion } from 'motion/react';

export default function Legal() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-4xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Legal <span className="font-serif italic">Information</span>
        </h1>
        <p className="text-xl text-brand-text-gray">
          Last updated: April 9, 2026
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="prose prose-invert prose-lg max-w-none text-brand-text-gray"
      >
        <h2 className="text-2xl text-white font-medium mt-12 mb-6">1. Terms of Service</h2>
        <p className="mb-6">
          By accessing and using Solara's website and services, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
        
        <h2 className="text-2xl text-white font-medium mt-12 mb-6">2. Privacy Policy</h2>
        <p className="mb-6">
          We respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website.
        </p>
        
        <h2 className="text-2xl text-white font-medium mt-12 mb-6">3. Cookie Policy</h2>
        <p className="mb-6">
          Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
        </p>
      </motion.div>
    </div>
  );
}
