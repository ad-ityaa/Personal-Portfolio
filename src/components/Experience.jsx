import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import SectionReveal, { HeaderReveal, CardReveal } from './SectionReveal';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Webyooi',
      position: 'Junior Web Developer',
      location: 'Pune, Maharashtra',
      period: 'March 2025 - May 2025',
      type: 'Internship',
      description: 'Started my professional journey building websites for clients across various industries. Gained experience in HTML, CSS, JavaScript, and content management systems.',
      achievements: [
        'Built responsive websites for 5+ clients across different industries',
        'Improved website loading speeds by 30% through code optimization',
        'Collaborated effectively with senior developers and learned industry best practices'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'CMS', 'Git', 'Responsive Design']
    },
    {
      id: 2,
      company: 'Vanity Ads',
      position: 'UI/UX Designer',
      location: 'Pune, Maharashtra',
      period: 'May 2024 - July 2024',
      type: 'Internship',
      description: 'Developed and optimized responsive websites for client campaigns using HTML and CSS, enhancing user experience and performance. Collaborated with designers and marketers to align web development with digital marketing strategies, improving engagement.',
      achievements: [
        'Designed and developed 10+ responsive campaign websites that increased client engagement by 25%',
        'Collaborated with marketing team to create designs that aligned with brand strategies',
        'Implemented user-centered design principles resulting in improved user experience metrics'
      ],
      technologies: ['HTML', 'CSS', 'Figma', 'Adobe Creative Suite', 'Responsive Design', 'UI/UX']
    },
    {
      id: 3,
      company: 'AAlzy',
      position: 'Full Stack Developer',
      location: 'Remote',
      period: 'June 2023 - August 2023',
      type: 'Internship',
      description: 'Expertly crafted designs that inspire and leave a lasting impression. Emotion-driven visuals that evoke feelings and create meaningful connections. Versatile aesthetics to complement any space, from homes to offices. High-quality prints ensuring durability and vibrant color accuracy. Transforming environments with posters that enhance ambiance and storytelling.',
      achievements: [
        'Developed full-stack web applications using modern technologies and frameworks',
        'Created visually appealing and emotionally engaging user interfaces that resonated with users',
        'Delivered high-quality code with 99% accuracy and excellent performance optimization'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'CSS3']
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
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
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My professional journey and the amazing companies I've worked with
            </p>
          </HeaderReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <CardReveal key={exp.id} delay={0.3 + index * 0.2}>
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform md:-translate-x-2 z-10 shadow-lg">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-25" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300">
                      {/* Company & Position */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-cyan-400 font-medium mb-2">
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <span className="px-2 py-1 bg-green-900/50 text-green-300 rounded-full text-xs border border-green-500/30">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-300 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
                </CardReveal>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects.
                Let's discuss how we can create something amazing together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;