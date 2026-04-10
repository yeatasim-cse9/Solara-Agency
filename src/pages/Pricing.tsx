import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Growth",
    description: "Perfect for startups ready to scale their paid acquisition.",
    price: "$2,500",
    period: "/mo",
    features: [
      "Up to $10k/mo ad spend",
      "Google Ads Management",
      "Meta Ads Management",
      "Bi-weekly reporting",
      "Basic creative testing",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Scale",
    description: "For established brands looking to dominate their market.",
    price: "$5,000",
    period: "/mo",
    features: [
      "Up to $50k/mo ad spend",
      "Omni-channel strategy",
      "Advanced CRO recommendations",
      "Weekly reporting & strategy calls",
      "Continuous creative testing",
      "Priority Slack support",
      "Custom dashboard"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions for high-volume advertisers.",
    price: "Custom",
    period: "",
    features: [
      "$50k+ ad spend",
      "Full-funnel optimization",
      "Dedicated account team",
      "Custom creative production",
      "Advanced attribution modeling",
      "24/7 dedicated support",
      "Strategic consulting"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Simple, transparent <span className="font-serif italic">pricing</span>
        </h1>
        <p className="text-xl text-brand-text-gray">
          Choose the plan that fits your growth stage. No hidden fees.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex flex-col bg-[#111] rounded-[2rem] p-8 border transition-all duration-500 hover:-translate-y-2 ${
              plan.popular 
                ? 'border-brand-red/50 shadow-[0_0_40px_rgba(255,79,56,0.15)]' 
                : 'border-white/5 hover:border-white/20'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
              <p className="text-brand-text-gray text-sm h-10">{plan.description}</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
              <span className="text-brand-text-gray font-medium">{plan.period}</span>
            </div>
            
            <Link 
              to="/book-a-call"
              className={`w-full py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 mb-8 ${
                plan.popular 
                  ? 'bg-brand-red hover:bg-red-500 text-white' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="space-y-4 flex-1">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-brand-red' : 'text-white/40'}`} />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
