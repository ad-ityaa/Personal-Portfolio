import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const detectDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);
    const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) ||
                     (window.innerWidth <= 768);

    return { isMobile, isIOS, isAndroid };
  };

  const handleGmailClick = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Hello Kumar!");
    const body = encodeURIComponent(`Hi Kumar,

I'd love to connect with you.

Best regards`);

    const { isMobile, isIOS, isAndroid } = detectDevice();

    if (isMobile) {
      // Create a more robust mobile email opening strategy
      const mailtoUrl = `mailto:adityawaths6205@gmail.com?subject=${subject}&body=${body}`;

      if (isIOS) {
        // iOS devices - try Gmail app first, then fallback to mailto
        const gmailAppUrl = `googlegmail://co?to=adityawaths6205@gmail.com&subject=${subject}&body=${body}`;

        // Create invisible iframe to test app availability
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = gmailAppUrl;
        document.body.appendChild(iframe);

        // Fallback to mailto after short delay if app doesn't open
        setTimeout(() => {
          document.body.removeChild(iframe);
          window.location.href = mailtoUrl;
        }, 500);

      } else if (isAndroid) {
        // Android devices - use intent URL for better app opening
        const androidGmailIntent = `intent://compose?to=adityawaths6205@gmail.com&subject=${subject}&body=${body}#Intent;scheme=mailto;package=com.google.android.gm;end`;

        try {
          window.location.href = androidGmailIntent;
          // Fallback after delay
          setTimeout(() => {
            window.location.href = mailtoUrl;
          }, 1000);
        } catch (error) {
          window.location.href = mailtoUrl;
        }
      } else {
        // Other mobile devices - use mailto directly
        window.location.href = mailtoUrl;
      }
    } else {
      // For desktop, open Gmail web interface in new tab
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=adityawaths6205@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailWebUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ad-ityaa', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kma620500', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:adityawaths6205@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KMA</span>
                </div>
                <span className="ml-3 text-xl font-bold">Kumar Mugdh Aditya</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Creating beautiful, functional, and user-centered digital experiences.
                Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <p className="text-gray-400">
                  Ready to start your next project?
                </p>
                <motion.button
                  onClick={handleGmailClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Say Hello
                </motion.button>
                <div className="pt-4">
                  <p className="text-gray-400 text-sm">
                    India
                  </p>
                  <p className="text-gray-400 text-sm">
                    Available for freelance work
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm flex items-center"
              >
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Kumar Mugdh Aditya
                <span className="mx-2">•</span>
                © {new Date().getFullYear()} All rights reserved
              </motion.p>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 md:mt-0 w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;