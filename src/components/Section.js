import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './Section.css';

const Section = React.memo(({ 
  id, 
  typingWords, 
  desc, 
  children 
}) => {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="section-container">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {typingWords && (
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Typewriter
                words={typingWords}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </motion.h2>
          )}

          {desc && (
            <motion.p
              className="section-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {desc}
            </motion.p>
          )}

          {children && (
            <motion.div
              className="section-children"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
});

Section.displayName = 'Section';

export default Section; 