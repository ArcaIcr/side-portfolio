import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();
      if (error) console.error('Error fetching project:', error);
      else setProject(data);
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div className="text-center text-gray-500 dark:text-gray-300">Loading project...</div>;
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 py-10 space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{project.title}</h1>
      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech_stack?.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="pt-4 space-x-4">
        <a href={project.live_link} target="_blank" className="text-blue-500 hover:underline">🌐 Live Preview</a>
        <a href={project.github_link} target="_blank" className="text-gray-600 dark:text-gray-400 hover:underline">💻 GitHub</a>
      </div>

      {/* Go Back */}
      <div className="pt-6">
        <Link
          to="/projects"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Projects
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;