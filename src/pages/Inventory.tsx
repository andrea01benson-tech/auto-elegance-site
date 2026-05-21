import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Grid, List as ListIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { cars } from '@/lib/mockData';
import CarCard from '@/components/CarCard';

const Inventory = () => {
  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [condition, setCondition] = useState('all');

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesSearch = car.model.toLowerCase().includes(search.toLowerCase()) || 
                          car.make.toLowerCase().includes(search.toLowerCase());
      const matchesBrand = brand === 'all' || car.make === brand;
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
      const matchesCondition = condition === 'all' || car.condition === condition;
      return matchesSearch && matchesBrand && matchesPrice && matchesCondition;
    });
  }, [search, brand, priceRange, condition]);

  const uniqueBrands = ['all', ...Array.from(new Set(cars.map(c => c.make)))];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <p className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">The Showroom</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8">Available Inventory</h1>
          
          <div className="bg-neutral-900 border border-white/5 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                <Input 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Make or Model" 
                  className="bg-black/50 border-white/10 pl-10 h-12 rounded-none focus-visible:ring-amber-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Brand</label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger className="bg-black/50 border-white/10 h-12 rounded-none text-white focus:ring-amber-500">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-white/10 text-white">
                  {uniqueBrands.map(b => (
                    <SelectItem key={b} value={b}>{b === 'all' ? 'All Brands' : b}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Condition</label>
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger className="bg-black/50 border-white/10 h-12 rounded-none text-white focus:ring-amber-500">
                  <SelectValue placeholder="All Conditions" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-white/10 text-white">
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Pre-owned">Pre-owned</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mb-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Price Range</label>
                <span className="text-[10px] text-amber-500 font-bold">${priceRange[1].toLocaleString()}</span>
              </div>
              <div className="pt-4 px-2">
                <Slider 
                  defaultValue={[500000]} 
                  max={500000} 
                  step={1000} 
                  value={[priceRange[1]]}
                  onValueChange={(val) => setPriceRange([0, val[0]])}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
          <p className="text-neutral-400 text-sm">Showing <span className="text-white font-bold">{filteredCars.length}</span> results</p>
          <div className="flex items-center gap-4">
            <button className="text-amber-500 bg-white/5 p-2 transition-colors"><Grid size={18} /></button>
            <button className="text-neutral-500 hover:text-white p-2 transition-colors"><ListIcon size={18} /></button>
          </div>
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-white/10">
            <SlidersHorizontal className="mx-auto text-neutral-600 mb-4" size={48} />
            <h3 className="text-white text-xl font-bold mb-2">No vehicles found</h3>
            <p className="text-neutral-500">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;