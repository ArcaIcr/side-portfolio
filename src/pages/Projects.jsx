import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) console.error('Supabase fetch error:', error);
      else setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-3 transition-transform hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">{proj.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech_stack?.map((t, j) => (
                <span key={j} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-2 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 pt-2">
              <a href={proj.live_link} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Live</a>
              <a href={proj.github_link} target="_blank" className="text-gray-700 dark:text-gray-300 hover:underline">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
