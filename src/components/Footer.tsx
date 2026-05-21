import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-6 inline-block">
            LUXE<span className="text-amber-500">MOTORS</span>
          </Link>
          <p className="text-neutral-400 text-sm leading-relaxed mb-8">
            The destination for high-end luxury vehicles and exceptional service. We curate the world's most prestigious automotive brands for discerning clients.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-amber-500 hover:text-black transition-all rounded-full"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-amber-500 hover:text-black transition-all rounded-full"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-amber-500 hover:text-black transition-all rounded-full"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-amber-500 hover:text-black transition-all rounded-full"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-amber-500">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/inventory" className="text-neutral-400 hover:text-white transition-colors">Our Inventory</Link></li>
            <li><Link to="/financing" className="text-neutral-400 hover:text-white transition-colors">Financing Options</Link></li>
            <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-amber-500">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <MapPin className="text-amber-500 shrink-0" size={20} />
              <span className="text-neutral-400 text-sm">Osun, Ife Mayfair, Nigeria</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-amber-500 shrink-0" size={20} />
              <span className="text-neutral-400 text-sm">08125779710</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-amber-500 shrink-0" size={20} />
              <span className="text-neutral-400 text-sm">andrea01benson@gmail.com</span>
            </li>
          </ul>
          <div className="mt-8">
             <h5 className="text-xs uppercase tracking-widest font-bold mb-3">Business Hours</h5>
             <p className="text-neutral-400 text-xs">Mon - Sat: 9:00 AM - 7:00 PM</p>
             <p className="text-neutral-400 text-xs">Sun: By Appointment Only</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-amber-500">Newsletter</h4>
          <p className="text-neutral-400 text-sm mb-6">
            Subscribe to receive updates on our latest luxury arrivals and exclusive offers.
          </p>
          <div className="flex flex-col gap-3">
            <Input 
              placeholder="Your email address" 
              className="bg-white/5 border-white/10 text-white rounded-none focus-visible:ring-amber-500"
            />
            <Button className="bg-amber-500 text-black hover:bg-amber-600 rounded-none w-full uppercase tracking-widest font-bold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-500 text-xs">
          © {new Date().getFullYear()} LUXE MOTORS. All Rights Reserved.
        </p>
        <p className="text-neutral-500 text-xs">
          Designed for Excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;