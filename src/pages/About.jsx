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
      className="max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">About Me</h1>
      <ProfileImage />
      <IntroText />
      <TechStack />
      <ExperienceTimeline />
      <ResumeButton />
      <FunSection />
    </motion.div>
  );
};

export default About;