import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
  const tech = ['React', 'Tailwind', 'Supabase', 'JavaScript', 'Node.js', 'Git', 'Vite'];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="pt-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
