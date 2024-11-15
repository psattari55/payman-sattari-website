// src/components/ui/Toast.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion';

export function Toast({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg"
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {message}
    </motion.div>
  );
}