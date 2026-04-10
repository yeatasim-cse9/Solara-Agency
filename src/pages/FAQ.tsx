import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do you tailor Google Ads strategies for different businesses?",
    answer: "We start with a deep dive into your business model, target audience, and historical data. This allows us to build custom campaign structures, select the most profitable keywords, and write ad copy that resonates specifically with your ideal customers."
  },
  {
    question: "What's unique about your Meta Ads approach?",
    answer: "Unlike agencies that rely solely on audience targeting, we focus heavily on creative testing and offer optimization. We believe that the creative is the new targeting, and we systematically test different angles, formats, and hooks to find winning combinations."
  },
  {
    question: "How do you ensure effective TikTok Ads targeting and engagement?",
    answer: "TikTok requires a native, authentic approach. We partner with UGC creators to produce content that feels like organic TikToks rather than polished commercials. We then leverage TikTok's algorithm to find users most likely to engage and convert."
  },
  {
    question: "How do you choose ad formats and placements across platforms?",
    answer: "We use a data-driven approach, starting with formats that historically perform best for your industry. As data rolls in, we reallocate budget to the specific placements (e.g., Instagram Reels, Google Search, TikTok Feed) driving the highest ROAS."
  },
  {
    question: "What reporting and analytics do you provide for ad campaign tracking?",
    answer: "You'll receive a custom, real-time dashboard tracking your most important KPIs (ROAS, CPA, CTR, etc.). We also provide weekly written updates and bi-weekly strategy calls to discuss performance and next steps."
  },
  {
    question: "Do you offer ongoing ad optimization and management services?",
    answer: "Yes, our core service is ongoing management. We actively monitor your accounts daily, adjusting bids, pausing underperforming ads, and launching new tests to ensure continuous growth and efficiency."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-40 pb-20 w-[90%] max-w-4xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Frequently Asked <span className="font-serif italic">Questions</span>
        </h1>
        <p className="text-xl text-brand-text-gray">
          Everything you need to know about working with Solara.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-lg font-medium pr-8">{faq.question}</span>
              <span className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-red">
                {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-6 text-brand-text-gray leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
