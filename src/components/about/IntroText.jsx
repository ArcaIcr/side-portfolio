import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IntroText = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4"
    >
      <p>
        Hey there! I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Morrix Ken Ohata</span>, a passionate
        full-stack web developer who loves building beautiful and performant web apps with React, Tailwind, Supabase,
        and a good cup of coffee ☕.
      </p>
      <p>
        I started my journey with frontend, fell in love with the logic of backend, and now I craft full experiences —
        from database to deployment. I enjoy solving real problems, collaborating with other devs, and always learning
        something new.
      </p>
      <p>
        When I’m not coding, you’ll probably find me sketching UI ideas, exploring indie games, or learning about
        design systems.
      </p>
    </motion.div>
  );
};

export default IntroText;
