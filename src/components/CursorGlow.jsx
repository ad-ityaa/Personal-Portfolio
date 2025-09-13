import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (e && e.clientX !== undefined && e.clientY !== undefined) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseEnter = (e) => {
      try {
        if (e && e.target && typeof e.target.matches === 'function') {
          if (e.target.matches('a, button, [data-cursor="pointer"]')) {
            setIsHovering(true);
          }
        }
      } catch (error) {
        // Silently handle any matching errors
      }
    };

    const handleMouseLeave = (e) => {
      try {
        if (e && e.target && typeof e.target.matches === 'function') {
          if (e.target.matches('a, button, [data-cursor="pointer"]')) {
            setIsHovering(false);
          }
        }
      } catch (error) {
        // Silently handle any matching errors
      }
    };

    setIsMounted(true);
    
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', updateMousePosition);
      document.addEventListener('mouseenter', handleMouseEnter, true);
      document.addEventListener('mouseleave', handleMouseLeave, true);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        document.removeEventListener('mouseenter', handleMouseEnter, true);
        document.removeEventListener('mouseleave', handleMouseLeave, true);
      };
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-70 blur-sm" />
      </motion.div>

      {/* Secondary glow */}
      <motion.div
        className="fixed pointer-events-none z-49"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
        }}
      >
        <div className="w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </motion.div>
    </>
  );
};

export default CursorGlow;