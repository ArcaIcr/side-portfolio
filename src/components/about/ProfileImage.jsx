import React from 'react';
import profilePic from '../../assets/portfolio-pic.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProfileImage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <div className="relative w-32 h-32">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping opacity-30"></div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
