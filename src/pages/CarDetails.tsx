import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Calendar, CheckCircle2, Fuel, Gauge, Settings2, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cars } from '@/lib/mockData';
import { toast } from 'sonner';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-2xl font-bold mb-4">Vehicle not found</h2>
        <Button asChild className="bg-amber-500 text-black">
          <Link to="/inventory">Back to Inventory</Link>
        </Button>
      </div>
    );
  }

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your enquiry has been sent! We will contact you shortly.');
  };

  return (
    <div className="pt-24 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to list
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Left 2 Columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-video overflow-hidden border border-white/5">
              <img src={car.images[0]} alt={car.model} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 bg-amber-500 text-black text-xs font-bold uppercase tracking-widest px-4 py-2">
                {car.condition}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Secondary images placeholders if multiple images were used */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="aspect-video bg-neutral-900 border border-white/5 overflow-hidden">
                   <img src={car.images[0]} alt="preview" className="w-full h-full object-cover opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" />
                </div>
              ))}
            </div>

            <div className="bg-neutral-900 border border-white/5 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tighter">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Make</span>
                  <span className="text-white font-medium">{car.make}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Year</span>
                  <span className="text-white font-medium">{car.year}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Engine</span>
                  <span className="text-white font-medium">{car.engine}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Transmission</span>
                  <span className="text-white font-medium">{car.transmission}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Mileage</span>
                  <span className="text-white font-medium">{car.mileage.toLocaleString()} mi</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Fuel Type</span>
                  <span className="text-white font-medium">{car.fuelType}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Description</h2>
              <p className="text-neutral-400 leading-relaxed">
                {car.description} Luxury, performance, and sophistication come together in this exceptional {car.year} {car.make} {car.model}. 
                Meticulously maintained and offering a suite of premium features, this vehicle represents the pinnacle of its class.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 size={18} className="text-amber-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right 1 Column */}
          <div className="space-y-8">
            <div className="bg-neutral-900 border border-white/5 p-8 sticky top-32">
              <div className="mb-8">
                <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-1">{car.year} {car.make}</p>
                <h1 className="text-3xl font-bold text-white mb-2">{car.model}</h1>
                <p className="text-3xl font-black text-amber-500">${car.price.toLocaleString()}</p>
              </div>

              <div className="space-y-4 mb-8">
                <Button className="w-full bg-amber-500 text-black hover:bg-amber-600 h-14 rounded-none uppercase tracking-widest font-black text-xs">
                   Book a Test Drive
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black h-14 rounded-none uppercase tracking-widest font-black text-xs border-2">
                   Request a Video Tour
                </Button>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-6">
                <h4 className="text-white font-bold uppercase tracking-tighter">Instant Contact</h4>
                <div className="space-y-4">
                  <a href="tel:08125779710" className="flex items-center gap-4 text-neutral-400 hover:text-amber-500 transition-colors">
                    <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-neutral-500">Call Us</p>
                      <p className="text-sm font-medium">08125779710</p>
                    </div>
                  </a>
                  <a href="mailto:andrea01benson@gmail.com" className="flex items-center gap-4 text-neutral-400 hover:text-amber-500 transition-colors">
                    <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-neutral-500">Email Us</p>
                      <p className="text-sm font-medium">andrea01benson@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-amber-500 p-8">
               <ShieldCheck size={32} className="text-black mb-4" />
               <h4 className="text-black font-black uppercase tracking-tighter text-xl mb-2">Luxe Certified</h4>
               <p className="text-black/80 text-sm mb-0">This vehicle qualifies for our extended warranty and premium roadside assistance package.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;