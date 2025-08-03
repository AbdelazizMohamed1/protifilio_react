import React from 'react';
import profilePng from '../assets/profile.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home">
      <motion.img
        src={profilePng}
        alt="Profile"
        className="profile-pic"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Abdelaziz Mohamed
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Flutter Developer
      </motion.p>
    </section>
  );
};

export default Home;