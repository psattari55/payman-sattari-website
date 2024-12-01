// src/features/ui/DoorCard.tsx

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface DoorCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  doorType: 'scholar' | 'observer' | 'practitioner';
  variant?: 'default' | 'featured';
}

const doorStyles = {
  scholar: {
    gradient: 'from-emerald-50 to-white',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderHover: 'hover:border-emerald-200',
    shadow: 'group-hover:shadow-emerald-100/50'
  },
  observer: {
    gradient: 'from-blue-50 to-white',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderHover: 'hover:border-blue-200',
    shadow: 'group-hover:shadow-blue-100/50'
  },
  practitioner: {
    gradient: 'from-amber-50 to-white',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    borderHover: 'hover:border-amber-200',
    shadow: 'group-hover:shadow-amber-100/50'
  }
};

const DoorCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  doorType,
  variant = 'default' 
}: DoorCardProps) => {
  const styles = doorStyles[doorType];
  
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -2 }}
        className={`group relative overflow-hidden rounded-lg border border-gray-100 
          ${styles.borderHover} transition-all duration-300 
          hover:shadow-lg ${styles.shadow} mt-8`}
      >
        {/* Background with gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient}`} />
        
        {/* Shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={false}
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 8
          }}
        />

        {/* Content */}
        <div className="relative p-6">
          <div className={`${styles.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
            <Icon className={`w-6 h-6 ${styles.iconColor}`} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {title}
          </h3>
          
          <p className="text-sm text-gray-600 mb-4">
            {description}
          </p>

          <div className="flex items-center text-sm font-medium gap-2">
            <span className={styles.iconColor}>
              Explore
            </span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default DoorCard;