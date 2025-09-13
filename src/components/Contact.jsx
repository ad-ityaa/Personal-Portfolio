import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import SectionReveal, { HeaderReveal, CardReveal, SlideReveal } from './SectionReveal';

const Contact = () => {

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

    const subject = encodeURIComponent("Let's work together");
    const body = encodeURIComponent(`Hi Kumar,

I'd like to discuss a project with you.

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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'adityawaths6205@gmail.com',
      href: 'mailto:adityawaths6205@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6205009277',
      href: 'tel:+916205009277'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ad-ityaa', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kma620500', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ad_itya2425', label: 'Twitter' }
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5563' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
              Let's Connect
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
              Let's create something amazing together!
            </p>
          </HeaderReveal>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <SlideReveal direction="left" delay={0.3}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's start a conversation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you're a company looking to hire, or you're a fellow developer
                  wanting to collaborate, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-300">
                      <info.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow me on social media
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-900 border border-gray-600 rounded-lg shadow-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </SlideReveal>

            {/* Send Message Button */}
            <SlideReveal direction="right" delay={0.5}>
              <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-700 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send me a message
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Ready to start a conversation? Click the button below to send me an email directly through Gmail.
                </p>
                
                <motion.button
                  onClick={handleGmailClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message via Gmail
                </motion.button>
                
                <p className="text-sm text-gray-400 mt-4 text-center">
                  Opens Gmail (app on mobile, web on desktop) with a pre-filled email ready to send
                </p>
              </div>
            </SlideReveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;