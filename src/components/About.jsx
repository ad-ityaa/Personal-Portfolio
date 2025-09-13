import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';
import SectionReveal, { HeaderReveal, CardReveal, SlideReveal } from './SectionReveal';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive, scalable web applications using modern frameworks like React, Next.js, and Node.js.',
    },
    {
      icon: Palette,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences using Unity engine and C# programming.',
    },
    {
      icon: Lightbulb,
      title: 'Data Science & AI',
      description: 'Developing AI models, analyzing data patterns, and building predictive systems using Python and machine learning.',
    },
    {
      icon: Users,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and optimizing user experience with modern design principles.',
    },
  ];


  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <HeaderReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Passionate developer with a love for creating amazing digital experiences
            </p>
          </HeaderReveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Profile Image and Info */}
            <motion.div variants={itemVariants}>
              <motion.div 
                className="relative mb-8 flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <motion.div 
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 p-1 shadow-2xl"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/images/profile.jpg" 
                      alt="Kumar Mugdh Aditya" 
                      className="w-full h-full rounded-2xl object-cover border-2 border-gray-700 group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center text-6xl font-bold text-white border-2 border-gray-700" style={{display: 'none'}}>
                      KMA
                    </div>
                  </motion.div>
                  <motion.div 
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-lg" 
                  />
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(6, 182, 212, 0.8)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <div className="space-y-3 sm:space-y-4 text-center lg:text-left px-4 lg:px-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Kumar Mugdh Aditya
                </h3>
                <h4 className="text-lg sm:text-xl font-semibold text-cyan-400">
                  Full Stack Developer, Game Developer & Data Scientist
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>🎓 B.Tech Computer Science & Engineering</p>
                  <p>🏫 SRM IST-Ramapuram (CGPA: 8.67/10)</p>
                  <p>📍 Chennai</p>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in web development, 
                  game development, and data science. I love turning complex problems into simple,
                  beautiful, and intuitive solutions using cutting-edge technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing B.Tech in Computer Science, 
                  I have hands-on experience with modern web frameworks, game engines like Unity, 
                  and AI/ML technologies including LSTM neural networks.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Features and Skills */}
            <motion.div variants={itemVariants} className="space-y-8 sm:space-y-12">

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(6, 182, 212, 0.2)"
                    }}
                    className="p-4 sm:p-6 bg-gray-800 rounded-xl hover:bg-gray-700 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                  Certifications
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <a 
                    href="https://drive.google.com/drive/folders/1wfplMHhULgrxbPzohTtJvaQ5ss74LPzX?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-3 sm:p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-gray-300 font-medium group-hover:text-cyan-300">JavaScript with HTML</span>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-semibold">Mar 2023</span>
                      <svg className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1x9tFy8fPcqINj0Syufq5p6I8fkq4V66J/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-gray-300 font-medium group-hover:text-cyan-300">GameDev Guild</span>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-semibold">Mar 2024</span>
                      <svg className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1SHWswWGWVg7qaR1bdtcsJbLDC4u4Sph7/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-gray-300 font-medium group-hover:text-cyan-300">Unstop SuPrathon 2025</span>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-semibold">Jul 2025</span>
                      <svg className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                  <a 
                    href="https://drive.google.com/drive/folders/1wqLE339LxisLp1OsuRF6jsHqFyi-x0si?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-gray-300 font-medium group-hover:text-cyan-300">Alibaba Cloud</span>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 text-sm font-semibold">2024</span>
                      <svg className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;