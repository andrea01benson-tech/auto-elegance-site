import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Calculator, ReceiptText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Financing = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your financing application has been submitted. Our financial advisor will contact you within 24 hours.');
  };

  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">Ownership Made Simple</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8">Premium Financing</h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            We offer bespoke financial solutions tailored to your unique circumstances. Our partnerships with leading financial institutions ensure you receive the most competitive rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
           <div className="lg:col-span-2">
             <div className="bg-neutral-900 border border-white/5 p-8 md:p-12">
               <h2 className="text-2xl font-bold text-white uppercase tracking-tighter mb-10">Financing Inquiry Form</h2>
               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Full Name</Label>
                   <Input required className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-amber-500 text-white" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Email Address</Label>
                   <Input required type="email" className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-amber-500 text-white" placeholder="john@example.com" />
                 </div>
                 <div className="space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Phone Number</Label>
                   <Input required className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-amber-500 text-white" placeholder="08125779710" />
                 </div>
                 <div className="space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Vehicle of Interest</Label>
                   <Input className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-amber-500 text-white" placeholder="e.g. Mercedes S-Class" />
                 </div>
                 <div className="md:col-span-2 space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Estimated Down Payment</Label>
                   <Input type="number" className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-amber-500 text-white" placeholder="$ 0.00" />
                 </div>
                 <div className="md:col-span-2 space-y-2">
                   <Label className="text-xs uppercase tracking-widest text-neutral-500">Additional Message</Label>
                   <Textarea className="bg-black/50 border-white/10 min-h-[150px] rounded-none focus-visible:ring-amber-500 text-white" placeholder="Tell us more about your requirements..." />
                 </div>
                 <div className="md:col-span-2 pt-4">
                    <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-600 h-16 rounded-none uppercase tracking-widest font-black text-sm">
                      Submit Application
                    </Button>
                 </div>
               </form>
             </div>
           </div>

           <div className="space-y-8">
             <div className="p-8 bg-neutral-900 border border-white/5">
                <Landmark className="text-amber-500 mb-6" size={32} />
                <h4 className="text-white font-bold uppercase tracking-tighter mb-4">Why Finance With Us?</h4>
                <ul className="space-y-4">
                  {[
                    'Competitive interest rates',
                    'Flexible repayment terms',
                    'Fast approval process',
                    'Confidential and secure',
                    'Customized plans'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center text-sm text-neutral-400">
                      <CheckCircle2 className="text-amber-500" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>

             <div className="p-8 bg-amber-500">
                <ReceiptText className="text-black mb-6" size={32} />
                <h4 className="text-black font-black uppercase tracking-tighter text-xl mb-4">Transparent Costs</h4>
                <p className="text-black/80 text-sm leading-relaxed mb-0">
                  We believe in total transparency. No hidden fees, no surprises. Just clear, concise financial agreements that work for you.
                </p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;