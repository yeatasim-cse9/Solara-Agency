import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ChevronDown, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-red/30 overflow-x-hidden flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
        <div className="flex items-center justify-between w-[90%] max-w-7xl bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-3">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-bold tracking-tight">solara</Link>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/process" className="hover:text-white transition-colors">Process</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <Link to="/book-a-call" className="bg-brand-red hover:bg-red-500 text-white px-6 py-2 rounded-xl text-sm font-medium transition-colors">
            Book a call
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative mt-auto border-t border-white/10 pt-20 pb-10 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 w-[90%] max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
            <div className="max-w-md">
              <Link to="/" className="flex items-center gap-2 text-3xl font-bold mb-6 tracking-tight hover:opacity-80 transition-opacity">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand-dark rounded-full" />
                </div>
                solara
              </Link>
              <h4 className="text-xl font-medium mb-4">Join our newsletter</h4>
              <p className="text-brand-text-gray mb-8 leading-relaxed">
                Sign up to our mailing list below and be the first to know about new updates, strategies, and case studies.
              </p>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-white/5 border border-white/10 rounded-full pl-6 pr-36 py-4 text-sm w-full focus:outline-none focus:border-brand-red/50 transition-all focus:bg-white/10"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-red hover:bg-red-500 text-white px-6 rounded-full text-sm font-medium transition-colors flex items-center gap-2 group">
                  Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-16 lg:gap-24">
              <div>
                <h4 className="font-medium mb-6 text-white">Pages</h4>
                <ul className="space-y-4 text-brand-text-gray">
                  <li><Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About</Link></li>
                  <li><Link to="/blog" className="hover:text-white hover:translate-x-1 transition-all inline-block">Blog</Link></li>
                  <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Services</Link></li>
                  <li><Link to="/process" className="hover:text-white hover:translate-x-1 transition-all inline-block">Process</Link></li>
                  <li><Link to="/pricing" className="hover:text-white hover:translate-x-1 transition-all inline-block">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-6 text-white">Information</h4>
                <ul className="space-y-4 text-brand-text-gray">
                  <li><Link to="/faq" className="hover:text-white hover:translate-x-1 transition-all inline-block">FAQ</Link></li>
                  <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact</Link></li>
                  <li><Link to="/legal" className="hover:text-white hover:translate-x-1 transition-all inline-block">Legal</Link></li>
                  <li><Link to="/coming-soon" className="hover:text-white hover:translate-x-1 transition-all inline-block">Coming Soon</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-6 text-white">Socials</h4>
                <ul className="space-y-4 text-brand-text-gray">
                  <li>
                    <a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all">
                      <Twitter className="w-4 h-4" /> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all">
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-text-gray">
            <div>&copy; {new Date().getFullYear()} Solara. Made in Bangladesh.</div>
            <div className="flex items-center gap-2">
              Created by <span className="text-white font-medium flex items-center gap-1"><div className="w-4 h-4 bg-white rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-brand-dark rounded-full" /></div> Yeatasim</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
