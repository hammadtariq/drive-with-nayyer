"use client";

import { motion, useReducedMotion } from "motion/react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function AnimateIn({ children, className, delay = 0, y = 20 }: AnimateInProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
