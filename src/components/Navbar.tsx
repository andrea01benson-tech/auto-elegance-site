import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'About', path: '/about' },
    { name: 'Financing', path: '/financing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter text-white"
          >
            LUXE<span className="text-amber-500">MOTORS</span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-amber-500',
                location.pathname === link.path ? 'text-amber-500' : 'text-white/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:08125779710" className="text-white/80 hover:text-amber-500 flex items-center gap-2 text-sm">
            <Phone size={16} />
            <span>08125779710</span>
          </a>
          <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black rounded-none uppercase text-xs tracking-widest font-bold px-6 border-2 transition-all duration-300">
            Enquire Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium tracking-wide',
                    location.pathname === link.path ? 'text-amber-500' : 'text-white/80'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <a href="tel:08125779710" className="text-white/80 flex items-center gap-3">
                  <Phone size={20} />
                  <span>08125779710</span>
                </a>
                <Button className="bg-amber-500 text-black hover:bg-amber-600 rounded-none w-full uppercase tracking-widest font-bold">
                  Book a Test Drive
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;