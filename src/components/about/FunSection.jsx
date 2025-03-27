import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FunSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="pt-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Outside Dev Life</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>🎮 Gaming (strategy & indie titles)</li>
        <li>🎨 Sketching UI concepts on iPad</li>
        <li>🧠 Learning random stuff on YouTube (devlogs, AI, startup vlogs)</li>
        <li>☕ I drink code and coffee in equal amounts</li>
      </ul>
    </motion.div>
  );
};

export default FunSection;
