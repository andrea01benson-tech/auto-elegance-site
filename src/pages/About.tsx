import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">Legacy of Excellence</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8">Redefining Luxury<br />Mobility Since 2010</h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Founded on the principles of integrity and exclusivity, Luxe Motors has grown to become the premier destination for discerning automotive enthusiasts. We specialize in sourcing only the finest vehicles from around the globe.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Our mission is simple: to provide a seamless, transparent, and ultra-premium acquisition experience that matches the quality of the vehicles we represent.
            </p>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000" 
                 alt="Showroom" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-amber-500 p-10 hidden md:block">
               <p className="text-black font-black text-4xl mb-1">5,000+</p>
               <p className="text-black font-bold uppercase tracking-widest text-[10px]">Premium Cars Delivered</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="p-8 bg-neutral-900 border border-white/5 hover:border-amber-500/50 transition-colors">
            <Award className="text-amber-500 mb-6" size={40} />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Quality Assured</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Every car is hand-picked and undergoes a rigorous inspection by our master technicians before entering our showroom.</p>
          </div>
          <div className="p-8 bg-neutral-900 border border-white/5 hover:border-amber-500/50 transition-colors">
            <Users className="text-amber-500 mb-6" size={40} />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Client Focused</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">We pride ourselves on building lasting relationships with our clients, offering personalized service that goes beyond the sale.</p>
          </div>
          <div className="p-8 bg-neutral-900 border border-white/5 hover:border-amber-500/50 transition-colors">
            <Target className="text-amber-500 mb-6" size={40} />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Global Reach</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Our extensive network allows us to source specific, rare models for our clients, no matter where they are located.</p>
          </div>
        </div>

        <div className="bg-neutral-900 p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="bg" />
          </div>
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-10">Our Commitment to You</h2>
            <ul className="space-y-6">
              {[
                'Full transparency in vehicle history and condition.',
                'Competitive and fair market-based pricing.',
                'Stress-free transaction process from enquiry to delivery.',
                'Dedicated after-sales support and concierge services.'
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
                  <span className="text-neutral-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;