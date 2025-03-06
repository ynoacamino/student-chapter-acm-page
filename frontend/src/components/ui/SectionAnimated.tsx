'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function SectionAnimated({
  className, children,
}: { className?: string, children?: React.ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="h-screen"
    >
      <div className={cn('w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', className)}>
        {children}
      </div>
    </motion.article>
  );
}
