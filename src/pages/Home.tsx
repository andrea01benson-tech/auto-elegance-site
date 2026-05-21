import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cars, brands, testimonials } from '@/lib/mockData';
import CarCard from '@/components/CarCard';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Placeholder for Cinematic Video - Using a high quality image if video is not available, or a generic luxury loop */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=727e3354bb0ce18041300995186b199047b19b67&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
              Drive Luxury.<br /><span className="text-amber-500">Own Excellence.</span>
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Premium vehicles at unbeatable value with trusted service and smooth financing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-amber-500 text-black hover:bg-amber-600 rounded-none h-14 px-10 uppercase tracking-widest font-black text-sm">
                <Link to="/inventory">View Inventory</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none h-14 px-10 uppercase tracking-widest font-black text-sm border-2">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-amber-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">Our Collection</p>
              <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Featured Vehicles</h2>
            </div>
            <Link to="/inventory" className="hidden md:flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
              Explore All <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.slice(0, 3).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-20 bg-neutral-950 border-y border-white/5 overflow-hidden">
        <div className="flex items-center gap-20 animate-infinite-scroll">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="shrink-0 flex items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 h-12">
              <img src={brand.logo} alt={brand.name} className="h-full object-contain filter invert" />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800" 
               alt="Luxury showroom" 
               className="w-full h-full object-cover"
             />
             <div className="absolute -bottom-10 -right-10 bg-amber-500 p-12 hidden md:block">
                <p className="text-black font-black text-6xl leading-none">15+</p>
                <p className="text-black font-bold uppercase tracking-widest text-xs">Years of Excellence</p>
             </div>
          </div>
          <div>
            <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">The Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-8 leading-tight">We Provide The Ultimate<br />Driving Experience</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10">
                  <ShieldCheck className="text-amber-500" size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Verified Authenticity</h4>
                  <p className="text-neutral-400 text-sm">Every vehicle in our collection undergoes a rigorous 150-point inspection by certified specialists.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10">
                  <Zap className="text-amber-500" size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Swift Delivery</h4>
                  <p className="text-neutral-400 text-sm">We handle all logistics to ensure your new vehicle arrives at your doorstep in pristine condition.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10">
                  <Award className="text-amber-500" size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Tailored Financing</h4>
                  <p className="text-neutral-400 text-sm">Flexible premium financing solutions designed specifically for your unique financial requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">Client Stories</p>
          <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">What Our Clients Say</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div 
              key={t.id}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 relative"
            >
              <div className="flex text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-neutral-300 italic mb-8 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="text-left">
                  <h5 className="text-white font-bold text-sm">{t.name}</h5>
                  <p className="text-neutral-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8">Ready to start your<br />luxury journey?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-amber-500 text-black hover:bg-amber-600 rounded-none h-16 px-12 uppercase tracking-widest font-black text-sm">
              <Link to="/inventory">Explore Inventory</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none h-16 px-12 uppercase tracking-widest font-black text-sm border-2">
              <Link to="/financing">Enquire About Financing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;