import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/2348125779710', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/20 backdrop-blur-sm"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-600"></span>
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;