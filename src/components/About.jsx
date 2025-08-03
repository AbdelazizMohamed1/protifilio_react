import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>•A motivated and detail-oriented mobile app developer with a strong foundation in Flutter and a Bachelor’s degree in Computer Science from
Faculty of Science, Fayoum University. Skilled in designing, developing, and maintaining high-performance mobile applications for Android and
iOS platforms. Adept at problem-solving and debugging, with a keen interest in staying updated with the latest industry trends and technologies.
Possesses excellent teamwork and communication skills, with a proven ability to deliver projects within deadlines.</p>
    </motion.section>
  );
};

export default About;