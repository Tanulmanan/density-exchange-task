import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const WhileInViewAnimate = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default WhileInViewAnimate;
