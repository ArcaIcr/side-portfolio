import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from './components/ContactForm';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/Navbar';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
      <NavBar />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/about" element={
              <motion.div {...pageTransition}>
                <About />
              </motion.div>
            } />
            <Route path="/" element={
              <motion.div {...pageTransition}>
                <ContactForm />
              </motion.div>
            } />
              <Route path="/projects/:id" element={
                <motion.div {...pageTransition}>
                  <ProjectDetail />
                </motion.div>
            } />
              <Route path="/projects" element={
              <motion.div {...pageTransition}>
                <Projects />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
