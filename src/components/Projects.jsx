import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, Calendar, Tag, Sparkles, Play } from 'lucide-react';
import SectionReveal, { HeaderReveal, CardReveal } from './SectionReveal';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Stock Price Predictor',
      description: 'AI-powered stock prediction dashboard using LSTM neural networks for time-series forecasting with comprehensive risk and profit analysis.',
      image: '/ai-stock-prediction-dashboard-with-charts-and-anal.jpg',
      category: 'fullstack',
      tags: ['LSTM Model', 'Node.js', 'Next.js', 'React', 'AI/ML'],
      github: 'https://github.com/ad-ityaa/AI-Stock-Price-Predictor',
      live: 'https://v0-stock-price-prediction-pi.vercel.app/',
      date: '2025'
    },
    {
      id: 2,
      title: 'COVID-19 Analysis',
      description: 'Analyzed COVID-19 data and predicted growth rates using data science techniques with interactive charts and comprehensive visualizations.',
      image: '/covid-data-analysis-charts-and-graphs-dashboard.jpg',
      category: 'datascience',
      tags: ['Python', 'Matplotlib', 'Data Science', 'Analytics'],
      github: 'https://github.com/ad-ityaa/Covid-19-Analysis',
      live: 'https://golden-torte-28ce7e.netlify.app/',
      date: '2024'
    },
    {
      id: 3,
      title: 'Travellwuu',
      description: 'Developed a comprehensive travel website offering travel guides and interactive maps for enhanced user travel planning experience.',
      image: '/travel-website-with-maps-and-guides-interface.jpg',
      category: 'frontend',
      tags: ['Python', 'Tailwind CSS', 'Web Development', 'Maps API'],
      github: 'https://github.com/ad-ityaa/Travellwuu',
      live: 'https://travellwuuuu.vercel.app/',
      date: '2024'
    },
    {
      id: 4,
      title: 'Frontline Assault',
      description: 'Created an immersive First-Person Perspective game in Unity with engaging gameplay mechanics and realistic combat scenarios.',
      image: '/first-person-shooter-game-unity-interface.jpg',
      category: 'games',
      tags: ['Unity', 'C#', 'Game Development', 'FPS'],
      github: 'https://github.com/ad-ityaa/Frontline-Assault',
      demo: 'https://drive.google.com/file/d/16Ot9W2IWj0vaOnhMgIsfT0KcQdOfaHwq/view?usp=sharing',
      date: '2025'
    }                                           
    ,{
      id: 5,
      title: 'Portfolio Testing System',
      description: 'Automated testing framework for a sample portfolio using Flask, Selenium, and pytest with an automated CSV-based bug tracker.',
      image: '/images/portfolio-testing-system-screenshot.svg',
      category: 'testing',
      tags: ['Flask', 'Selenium', 'pytest', 'Automation', 'Bug Tracker'],
      github: 'https://github.com/ad-ityaa/port-test',
      live: null,
      date: '2025'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'datascience', label: 'Data Science' },
    { key: 'games', label: 'Games' }                                                                                                                                                                                       
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.05'%3E%3Cpath d='M20 20.5V18H0v-2h20v-8.5L33 16l-13 7.5zM0 22h20v8.5L33 22l-13-7.5V16H0v2h20v4z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <HeaderReveal className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </HeaderReveal>

          {/* Filter Tabs */}
          <SectionReveal delay={0.3} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setFilter(category.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.key
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-700 text-gray-300 hover:text-cyan-400 hover:bg-gray-600 border border-gray-600 hover:border-cyan-500/50'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </SectionReveal>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <CardReveal key={`reveal-${project.id}`} delay={0.5 + index * 0.2}>
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.02,
                    rotateX: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3), 0 0 30px rgba(6, 182, 212, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-900 rounded-2xl shadow-xl border border-gray-700 overflow-hidden hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer relative"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center text-4xl text-gray-300">
                      🚀
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500/30 transition-all duration-200 border border-white/20 hover:border-cyan-400/50"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.live || project.demo}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-500/30 transition-all duration-200 border border-white/20 hover:border-purple-400/50"
                      >
                        {project.demo ? <Play className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-200"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live || project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 shadow-lg"
                      >
                        {project.demo ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Demo Video
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4 mr-2" />
                            Live Demo
                          </>
                        )}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
                </CardReveal>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/ad-ityaa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <Github className="w-5 h-5 mr-2" />
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;