import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Send, Sparkles, Code2, Zap } from 'lucide-react';

const ModernHero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Full Stack Developer, Game Developer & Data Scientist';
  
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId = null;
    let intervalId = null;
    
    const typeStep = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeStep, 50);
      } else if (!isDeleting && currentIndex > fullText.length) {
        // Pause at the end before starting to delete
        timeoutId = setTimeout(() => {
          isDeleting = true;
          typeStep();
        }, 1000);
      } else if (isDeleting && currentIndex > 0) {
        setTypewriterText(fullText.slice(0, currentIndex - 1));
        currentIndex--;
        timeoutId = setTimeout(typeStep, 30);
      } else if (isDeleting && currentIndex === 0) {
        // Reset to start typing again
        isDeleting = false;
        currentIndex = 0;
        timeoutId = setTimeout(typeStep, 500);
      }
    };

    typeStep();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [-20, 20, -20],
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl" 
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >

          {/* Greeting with Icon */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Hello, I'm
            </div>
          </motion.div>

          {/* Name with Enhanced Gradient and Glow */}
          <motion.h1
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(139, 92, 246, 0.6)"
            }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4 text-center cursor-default"
          >
            <motion.span 
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 via-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))'
              }}
            >
              Aditya
            </motion.span>
          </motion.h1>

          {/* Title with Icons and Typing Effect */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 font-light flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 min-h-[4rem] sm:min-h-[3rem] text-center"
          >
            <Code2 className="w-8 h-8 text-cyan-400" />
            <span className="relative">
              {typewriterText}
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
            <Zap className="w-8 h-8 text-purple-400" />
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 text-center"
          >
            I craft exceptional digital experiences with cutting-edge technology.
            Passionate about building scalable solutions and beautiful interfaces that make a difference.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-16 px-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)",
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-medium shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-400/30 cursor-pointer text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <Send className="w-5 h-5 mr-2" />
              Get In Touch
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(6, 182, 212)",
                color: "rgb(6, 182, 212)",
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Kumar_Mugdh_Aditya_Resume.pdf';
                link.click();
              }}
              className="flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-gray-300 rounded-full font-medium backdrop-blur-sm bg-gray-800/30 transition-all duration-300 cursor-pointer text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-sm sm:max-w-lg mx-auto mb-10 sm:mb-16 px-4"
          >
            {[
              { number: '3+', label: 'Years Coding' },
              { number: '8+', label: 'Projects Built' },
              { number: '2+', label: 'Internships' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
                }}
                className="text-center p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:bg-gray-800/70 transition-all duration-300 group cursor-default"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors group"
          >
            <span className="text-sm mb-2 font-medium group-hover:text-cyan-400">Scroll Down</span>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full border border-gray-600 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHero;