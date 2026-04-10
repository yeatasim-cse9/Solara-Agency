import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Target className="w-8 h-8 text-brand-red" />,
    title: "Google Ads",
    description: "Capture high-intent search traffic and turn queries into customers with hyper-targeted Google Ads campaigns."
  },
  {
    icon: <Users className="w-8 h-8 text-brand-red" />,
    title: "Meta Ads",
    description: "Build brand awareness and drive conversions with scroll-stopping creative on Facebook and Instagram."
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-red" />,
    title: "TikTok Ads",
    description: "Tap into the viral potential of TikTok with authentic, engaging video ads that resonate with Gen Z and Millennials."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand-red" />,
    title: "Conversion Rate Optimization",
    description: "Maximize your ad spend by optimizing your landing pages and funnels to convert more clicks into customers."
  }
];

export default function Services() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Our <span className="font-serif italic">Services</span>
        </h1>
        <p className="text-xl text-brand-text-gray">
          Comprehensive paid media solutions designed to scale your brand and maximize ROI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors"
          >
            <div className="bg-brand-dark border border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              {service.icon}
            </div>
            <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
            <p className="text-brand-text-gray leading-relaxed mb-8">
              {service.description}
            </p>
            <button className="text-white font-medium flex items-center gap-2 hover:text-brand-red transition-colors">
              Learn more <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
