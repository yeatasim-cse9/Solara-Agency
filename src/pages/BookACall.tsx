import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, ArrowRight } from 'lucide-react';

export default function BookACall() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-sm font-medium mb-8">
            Free Consultation
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
            Let's scale your <span className="font-serif italic">business</span>
          </h1>
          <p className="text-xl text-brand-text-gray mb-12">
            Book a 30-minute discovery call with our team to discuss your goals and how we can help you achieve them.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Pick a Date & Time</h3>
                <p className="text-brand-text-gray">Choose a slot that works best for your schedule.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Video className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Google Meet</h3>
                <p className="text-brand-text-gray">We'll send you a calendar invite with a video link.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">30 Minutes</h3>
                <p className="text-brand-text-gray">A quick, no-obligation chat about your growth potential.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#111] rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[100px] pointer-events-none" />
          
          <form className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Work Email</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Company Website</label>
              <input 
                type="url" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                placeholder="https://example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">How can we help?</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
                placeholder="Tell us about your current challenges..."
              />
            </div>

            <button 
              type="button"
              className="w-full bg-brand-red hover:bg-red-500 text-white px-6 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              Request Call <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
