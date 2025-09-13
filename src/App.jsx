import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ModernHeader from './components/ModernHeader';
import ModernHero from './components/ModernHero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Effects */}
      <ParticleBackground />
      <CursorGlow />
      
      {/* Header */}
      <ModernHeader />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <ModernHero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </motion.main>

      {/* Footer */}
      <Footer />

      {/* Loading overlay */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            minHeight: '100vh',
            zIndex: 9999
          }}
        >
          <div className="flex flex-col items-center justify-center text-center px-4">
            {/* Custom Loading Animation */}
            <div className="relative mb-6">
              {/* Outer ring */}
              <div className="w-20 h-20 border-4 border-gray-600 rounded-full absolute animate-spin">
                <div className="w-2 h-2 bg-cyan-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              </div>
              {/* Inner ring */}
              <div className="w-16 h-16 border-4 border-gray-700 rounded-full absolute top-2 left-2 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              </div>
              {/* Center pulse */}
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full absolute top-6 left-6 animate-pulse"></div>
            </div>
            
            {/* Loading text with animation */}
            <div className="flex items-center space-x-1">
              <span className="text-white text-xl font-medium">Loading</span>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;