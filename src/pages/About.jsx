import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/portfolio-pic.jpg';

const About = () => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      org: 'Awesome Startup Inc.',
      time: '2023 - Present',
      desc: 'Built React dashboards with Tailwind and Supabase backend.'
    },
    {
      role: 'Frontend Developer (Freelance)',
      org: 'Various Clients',
      time: '2022',
      desc: 'Crafted responsive landing pages and UI components.'
    },
    {
      role: 'CS Student / Self-Taught Dev',
      org: 'University / Online',
      time: '2020 - 2021',
      desc: 'Learned JavaScript, React, Git, and fell in love with web dev.'
    }
  ];

  const techStack = [
    'React', 'Tailwind', 'Supabase', 'JavaScript', 'Node.js', 'Git', 'Vite'
  ];

  return (
    <motion.div
      className="max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">About Me</h1>

      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="relative w-32 h-32">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping opacity-30"></div>
        </div>
      </div>

      {/* Intro Paragraphs */}
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
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
      </div>

      {/* Tech Stack */}
      <div className="pt-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, i) => (
            <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="pt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Experience</h2>
        <div className="space-y-4 border-l-2 border-blue-500 pl-4">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-2 top-1.5 w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 dark:text-blue-300">{exp.role}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.org} · {exp.time}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Link */}
      <div className="pt-6 text-center">
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
        >
          📄 View My Resume
        </a>
      </div>

      {/* Fun Section */}
      <div className="pt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Outside Dev Life</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>🎮 Gaming (strategy & indie titles)</li>
          <li>🎨 Sketching UI concepts on iPad</li>
          <li>🧠 Learning random stuff on YouTube (devlogs, AI, startup vlogs)</li>
          <li>☕ I drink code and coffee in equal amounts</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
