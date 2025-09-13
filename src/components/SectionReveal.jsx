import React from 'react';
import ScrollReveal from './ScrollReveal';

const SectionReveal = ({ children, className = "" }) => {
  return (
    <ScrollReveal 
      direction="up" 
      delay={0.2} 
      duration={0.8}
      distance={80}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
};

export const HeaderReveal = ({ children, className = "" }) => {
  return (
    <ScrollReveal 
      direction="up" 
      delay={0.1} 
      duration={0.6}
      distance={40}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
};

export const CardReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <ScrollReveal 
      direction="up" 
      delay={delay} 
      duration={0.7}
      distance={60}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
};

export const FadeReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <ScrollReveal 
      direction="scale" 
      delay={delay} 
      duration={0.8}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
};

export const SlideReveal = ({ children, direction = "left", delay = 0, className = "" }) => {
  return (
    <ScrollReveal 
      direction={direction} 
      delay={delay} 
      duration={0.8}
      distance={100}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
};

export default SectionReveal;