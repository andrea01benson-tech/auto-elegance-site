import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your message has been sent. We will respond as soon as possible.');
  };

  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8">Contact Us</h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-12">
              Have a question about a vehicle or want to schedule a private viewing? Our team of specialists is here to assist you with any inquiries you may have.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10 rounded-full">
                  <Phone className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold mb-1">Phone</h4>
                  <p className="text-white text-xl font-medium">08125779710</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10 rounded-full">
                  <Mail className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold mb-1">Email</h4>
                  <p className="text-white text-xl font-medium">andrea01benson@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10 rounded-full">
                  <MapPin className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold mb-1">Location</h4>
                  <p className="text-white text-xl font-medium">Osun, Ife Mayfair, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               {/* Simplified map placeholder */}
               <div className="bg-neutral-900 aspect-video flex items-center justify-center border border-white/10">
                  <p className="text-neutral-600 uppercase tracking-widest font-bold text-xs">Interactive Map View</p>
               </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-white/5 p-8 md:p-12">
             <h2 className="text-2xl font-bold text-white uppercase tracking-tighter mb-10">Send a Message</h2>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Full Name</Label>
                   <Input required className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-amber-500 text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Email Address</Label>
                   <Input required type="email" className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-amber-500 text-white" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Subject</Label>
                   <Input className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-amber-500 text-white" placeholder="General Inquiry" />
                </div>
                <div className="space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Message</Label>
                   <Textarea required className="bg-black/50 border-white/10 min-h-[200px] rounded-none focus-visible:ring-amber-500 text-white" placeholder="How can we help you today?" />
                </div>
                <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-600 h-16 rounded-none uppercase tracking-widest font-black text-sm flex items-center gap-3">
                  Send Message <Send size={18} />
                </Button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;