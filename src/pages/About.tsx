import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          About <span className="font-serif italic">Solara</span>
        </h1>
        <p className="text-xl text-brand-text-gray">
          We are a performance marketing agency dedicated to scaling brands through data-driven paid advertising.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://picsum.photos/seed/agency/800/600" 
            alt="Our Agency" 
            className="rounded-3xl shadow-2xl border border-white/10"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-medium">Our Mission</h2>
          <p className="text-brand-text-gray leading-relaxed text-lg">
            At Solara, we believe that great products deserve to be seen. Our mission is to bridge the gap between exceptional brands and their ideal customers through strategic, high-converting ad campaigns.
          </p>
          <p className="text-brand-text-gray leading-relaxed text-lg">
            We don't just run ads; we build comprehensive growth engines that drive sustainable, long-term success for our partners.
          </p>
        </motion.div>
      </div>

      <div className="text-center bg-[#111] rounded-[3rem] p-12 md:p-20 border border-white/10">
        <h2 className="text-3xl md:text-5xl font-medium mb-6">Ready to work with us?</h2>
        <p className="text-brand-text-gray mb-10 max-w-2xl mx-auto text-lg">
          Let's discuss how we can help your brand achieve its growth goals.
        </p>
        <button className="bg-brand-red hover:bg-red-500 text-white px-8 py-4 rounded-xl font-medium transition-colors inline-flex items-center gap-2">
          Book a discovery call <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
