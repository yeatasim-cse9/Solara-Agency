import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-40 pb-20 w-[90%] max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Get in <span className="font-serif italic">Touch</span>
        </h1>
        <p className="text-xl text-brand-text-gray">
          Have a question or want to discuss a project? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="bg-[#111] rounded-[2rem] p-8 border border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <Mail className="w-5 h-5 text-brand-red" />
            </div>
            <h3 className="text-xl font-medium mb-2">Email Us</h3>
            <p className="text-brand-text-gray mb-4">Our friendly team is here to help.</p>
            <a href="mailto:solarainfo2024@gmail.com" className="text-white hover:text-brand-red transition-colors font-medium break-all">solarainfo2024@gmail.com</a>
          </div>

          <div className="bg-[#111] rounded-[2rem] p-8 border border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <MapPin className="w-5 h-5 text-brand-red" />
            </div>
            <h3 className="text-xl font-medium mb-2">Visit Us</h3>
            <p className="text-brand-text-gray mb-4">Come say hello at our office HQ.</p>
            <address className="text-white not-italic font-medium">
              Ramganj Upazila<br />
              Lakshmipur<br />
              Bangladesh
            </address>
          </div>

          <div className="bg-[#111] rounded-[2rem] p-8 border border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <Phone className="w-5 h-5 text-brand-red" />
            </div>
            <h3 className="text-xl font-medium mb-2">Call Us</h3>
            <p className="text-brand-text-gray mb-4">Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+8801619435044" className="text-white hover:text-brand-red transition-colors font-medium">+880-1619435044</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2 bg-[#111] rounded-[2rem] p-8 md:p-12 border border-white/5"
        >
          <form className="space-y-6">
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
              <label className="text-sm font-medium text-white/80">Email</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Subject</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Message</label>
              <textarea 
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
                placeholder="Tell us a little about your project..."
              />
            </div>

            <button 
              type="button"
              className="bg-brand-red hover:bg-red-500 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 w-full md:w-auto"
            >
              Send Message <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[400px] rounded-[2rem] overflow-hidden border border-white/5"
      >
        <iframe 
          src="https://maps.google.com/maps?q=Ramganj%20Upazila,%20Lakshmipur,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
}
