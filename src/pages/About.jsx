import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../components/about/ProfileImage';
import IntroText from '../components/about/IntroText';
import TechStack from '../components/about/TechStack';
import ExperienceTimeline from '../components/about/ExperienceTimeline';
import ResumeButton from '../components/about/ResumeButton';
import FunSection from '../components/about/FunSection';

const About = () => {
  return (
    <motion.div
      className="relative min-h-screen" // Removed gradient for clarity
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background Layer: Light mode uses subtle-prism.svg, dark mode uses parallax-bg.svg */}
      <div
        className="absolute inset-0 bg-fixed bg-no-repeat bg-center bg-cover z-0 
                   bg-subtle-prism dark:bg-parallax"
        // Removed "opacity-10" so the image is fully visible
      ></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-10 px-6 py-12 max-w-6xl mx-auto">
        {/* Sticky Sidebar */}
        <aside className="lg:sticky top-20 h-fit">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About Me</h1>
          <ProfileImage />
        </aside>

        {/* Main Content */}
        <div className="space-y-10">
          <IntroText />
          <TechStack />
          <ExperienceTimeline />
          <ResumeButton />
          <FunSection />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
