import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fuel, Gauge, Settings2, ArrowRight } from 'lucide-react';
import { Car } from '@/lib/mockData';
import { cn } from '@/lib/utils';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-neutral-900 border border-white/5 overflow-hidden hover:border-amber-500/50 transition-all duration-500"
    >
      <Link to={`/inventory/${car.id}`} className="block relative aspect-[16/10] overflow-hidden">
        <img
          src={car.images[0]}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1">
          {car.condition}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-amber-500 text-[10px] uppercase tracking-widest font-bold mb-1">{car.make}</p>
            <h3 className="text-white text-xl font-bold">{car.model}</h3>
          </div>
          <p className="text-white font-bold text-lg">${car.price.toLocaleString()}</p>
        </div>

        <div className="flex items-center gap-4 py-4 border-y border-white/5 my-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <Fuel size={14} className="text-amber-500" />
            <span className="text-xs">{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <Gauge size={14} className="text-amber-500" />
            <span className="text-xs">{car.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <Settings2 size={14} className="text-amber-500" />
            <span className="text-xs">{car.year}</span>
          </div>
        </div>

        <Link
          to={`/inventory/${car.id}`}
          className="flex items-center justify-between text-white text-sm font-bold uppercase tracking-widest group/btn"
        >
          View Details
          <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-2 text-amber-500" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;