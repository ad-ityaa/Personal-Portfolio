import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal, { HeaderReveal, CardReveal } from './SectionReveal';

const Skills = () => {
  const skills = [
    { 
      name: 'JavaScript', 
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'TypeScript', 
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    { 
      name: 'React', 
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Next.js', 
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    { 
      name: 'Python', 
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'Node.js', 
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'HTML5', 
      level: 95,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS3', 
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'Tailwind CSS', 
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    },
    { 
      name: 'Unity', 
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg'
    },
    { 
      name: 'C#', 
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    { 
      name: 'C++', 
      level: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    { 
      name: 'Java', 
      level: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
      name: 'MongoDB', 
      level: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'Git', 
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
      name: 'Figma', 
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    }
  ];

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
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
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
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to build amazing digital experiences
            </p>
          </HeaderReveal>

          {/* Skills Grid */}
          <SectionReveal delay={0.3}>
          <motion.div 
            className="bg-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden"
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(6, 182, 212, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border gradient */}
            <motion.div
              animate={{
                background: [
                  'linear-gradient(0deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))',
                  'linear-gradient(90deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))',
                  'linear-gradient(180deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))',
                  'linear-gradient(270deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))',
                  'linear-gradient(360deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{ padding: '1px' }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <CardReveal key={index} delay={0.5 + index * 0.1}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gray-800 rounded-xl p-3 sm:p-4 hover:bg-gray-700 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300 text-center overflow-hidden cursor-pointer"
                >
                  {/* Skill Icon */}
                  <div className="mb-3 flex justify-center">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                      style={{display: 'none'}}
                    >
                      {skill.name.charAt(0)}
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-white font-medium text-sm mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {skill.name}
                  </h3>


                  {/* Enhanced Hover Effects */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300 pointer-events-none"
                    whileHover={{ 
                      background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))'
                    }}
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white/5 to-transparent group-hover:top-full transition-all duration-700 pointer-events-none"
                    style={{ transform: 'skewY(-10deg)' }}
                  />
                </motion.div>
                </CardReveal>
              ))}
            </div>

            {/* Bottom Description */}
            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <p className="text-gray-400 text-sm max-w-3xl mx-auto">
                Constantly learning and adapting to new technologies to stay at the forefront of modern development practices.
                Each skill represents countless hours of practice, real-world projects, and continuous improvement.
              </p>
            </motion.div>
          </motion.div>
          </SectionReveal>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;