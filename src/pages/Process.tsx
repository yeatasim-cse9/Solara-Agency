import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "We dive deep into your business, analyzing your current ad accounts, competitors, and target audience to identify growth opportunities."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Based on our findings, we craft a custom, multi-channel paid media strategy tailored to your specific goals and budget."
  },
  {
    number: "03",
    title: "Creative & Execution",
    description: "Our team develops high-converting ad creatives and copy, sets up tracking, and launches your campaigns with precision."
  },
  {
    number: "04",
    title: "Optimization & Scaling",
    description: "We continuously monitor performance, A/B test creatives, and scale the winning campaigns to maximize your return on ad spend."
  }
];

export default function Process() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Our <span className="font-serif italic">Process</span>
        </h1>
        <p className="text-xl text-brand-text-gray">
          A proven, data-driven methodology to turn your ad spend into profitable revenue.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-12">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col md:flex-row gap-8 items-start bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="text-6xl font-serif italic text-brand-red opacity-80">
              {step.number}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4">{step.title}</h3>
              <p className="text-brand-text-gray text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
