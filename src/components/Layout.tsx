import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Twitter, Instagram, Linkedin, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Memory leak prevention/cleanup for body styles
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-red/30 overflow-x-hidden flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
        <div className="flex items-center justify-between w-[95%] md:w-[90%] max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 md:px-6 py-3">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl font-bold tracking-tight py-2">solara</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
            <Link to="/about" className="hover:text-white transition-colors py-2">About</Link>
            <Link to="/blog" className="hover:text-white transition-colors py-2">Blog</Link>
            <Link to="/services" className="hover:text-white transition-colors py-2">Services</Link>
            <Link to="/process" className="hover:text-white transition-colors py-2">Process</Link>
            <Link to="/pricing" className="hover:text-white transition-colors py-2">Pricing</Link>
          </div>
          
          <div className="hidden md:block">
            <Link to="/book-a-call" className="bg-brand-red hover:bg-red-500 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors">
              Book a call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 active:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 z-40 bg-brand-dark/95 backdrop-blur-xl pt-28 pb-8 px-6 flex flex-col md:hidden overflow-hidden"
          >
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col gap-4 text-2xl font-medium mt-4"
            >
              {[
                { name: 'About', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Services', path: '/services' },
                { name: 'Process', path: '/process' },
                { name: 'Pricing', path: '/pricing' },
              ].map((link, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                >
                  <Link 
                    to={link.path} 
                    className="block py-4 border-b border-white/10 hover:text-brand-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="mt-auto pb-4"
            >
              <Link 
                to="/book-a-call" 
                className="w-full flex items-center justify-center bg-brand-red hover:bg-red-500 text-white px-6 py-4 rounded-xl font-medium transition-colors text-lg"
              >
                Book a call
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  className="bg-white/5 border border-white/10 rounded-full pl-6 pr-36 py-4 text-sm w-full focus:outline-none focus:border-brand-red/50 transition-all focus:bg-white/10 h-14"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-red hover:bg-red-500 text-white px-6 rounded-full text-sm font-medium transition-colors flex items-center gap-2 group">
                  Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-12 lg:gap-24">
              <div>
                <h4 className="font-medium mb-6 text-white text-lg">Pages</h4>
                <ul className="space-y-4 text-brand-text-gray">
                  <li><Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block py-1">About</Link></li>
                  <li><Link to="/blog" className="hover:text-white hover:translate-x-1 transition-all inline-block py-1">Blog</Link></li>
                  <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block py-1">Services</Link></li>
                  <li><Link to="/process" className="hover:text-white hover:translate-x-1 transition-all inline-block py-1">Process</Link></li>
                  <li><Link to="/pricing" className="hover:text-white hover:translate-x-1 transition-all inline-block py-1">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-6 text-white text-lg">Information</h4>
                <ul className="space-y-4 text-brand-text-gray">
                  <li><Link to="/faq" className="hover:text-white hover:translate-x-1 transition-all inline-block py-1">FAQ</Link></li>
                  <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block py-1">Contact</Link></li>
                  <li><Link to="/legal" className="hover:text-white hover:translate-x-1 transition-all inline-block py-1">Legal</Link></li>
                  <li><Link to="/coming-soon" className="hover:text-white hover:translate-x-1 transition-all inline-block py-1">Coming Soon</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-6 text-white text-lg">Socials</h4>
                <ul className="space-y-4 text-brand-text-gray">
                  <li>
                    <a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all py-1">
                      <Twitter className="w-4 h-4" /> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all py-1">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all py-1">
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
