import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      org: 'Awesome Startup Inc.',
      time: '2023 - Present',
      desc: 'Built React dashboards with Tailwind and Supabase backend.',
    },
    {
      role: 'Frontend Developer (Freelance)',
      org: 'Various Clients',
      time: '2022',
      desc: 'Crafted responsive landing pages and UI components.',
    },
    {
      role: 'CS Student / Self-Taught Dev',
      org: 'University / Online',
      time: '2020 - 2021',
      desc: 'Learned JavaScript, React, Git, and fell in love with web dev.',
    },
  ];

  return (
    <div className="pt-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Experience</h2>
      <div className="space-y-6 border-l-2 border-blue-500 pl-4">
        {experiences.map((exp, i) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-2 top-1.5 w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 dark:text-blue-300">{exp.role}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.org} · {exp.time}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
