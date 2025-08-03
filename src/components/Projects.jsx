import React from 'react';
import { motion } from 'framer-motion';

import './Projects.css';

const projects = [
  {
    title: 'Clinic Management System',
    description: `It is a medical application, a version for the doctor, an admin version, and a version for the user, Android application and website application. The application aims to help the doctor manage his private clinic, follow up on the medical history of patients, communicate with the patient in emergency cases via chat, and receive notifications of reservations and cancellations. As for the user, he can share his medical information with his doctor, such as prescriptions, x-rays, and analyses, and communicate with his doctor via emergency chat. I worked on this application with Safehand Company, both development and creation, with different features according to each doctor and requirements on 10 applications for 10 different doctors, which are:`,
    technologies: 'Flutter, Dart, Clinic Restfull Api, Flutter web, pusher, one signal, sms otp, Payment gateway(Paymob)',
    doctorLinks: [
      { name: 'Dr Ahmed Elmalla', url: 'https://play.google.com/store/apps/details?id=com.safehand.new_dr_ahmed_elmolla_user' },
      { name: 'Dr Ahmed Yassin', url: 'https://play.google.com/store/apps/details?id=com.savehand.dr_ahmed_yassin' },
      { name: 'Dr Hany Abo-Taleb', url: 'https://play.google.com/store/apps/details?id=com.safehand.dr_hani_abu_tailb_user' },
      { name: 'Dr Maged Elgebaly', url: 'https://play.google.com/store/apps/details?id=com.safehand.dr_maged_elgebaly_user' },
      { name: 'Dr Mohamed Essawy', url: 'https://play.google.com/store/apps/details?id=com.saveHand.dr_mohamed_mohamed_essawy_user' },
    ]
  },
  {
    title: 'Lamira & Branches Restaurant',
    description: 'I developed some features in the Lamira & Branches Restaurant application with Safehand Company. It is a food ordering application, a version for the restaurant to manage and receive orders, and a version for the user to order food from the application.',
    technologies: 'Flutter-Dart-Lamira & Branches Restfull Api-one signal-sms otp',
    links: [
      { name: 'Google Play', url: 'https://play.google.com/store/apps/details?id=dev.savehand.user_lamera_restaurant_app&hl=en' },
      { name: 'App Store', url: 'https://apps.apple.com/eg/app/lamera-branches/id6741224740' },
    ]
  },
  {
    title: 'Beni Suef Real Estate',
    description: 'A comprehensive real estate application that allows users to browse, search, and view property listings. It includes features for filtering properties by various criteria, viewing high-quality images, and contacting real estate agents directly. The platform is designed to provide a seamless experience for both property seekers and sellers.',
    technologies: 'Flutter, Dart',
    links: [
      { name: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.safehand.benisuef_real_estate&hl=en' },
      { name: 'App Store', url: 'https://apps.apple.com/eg/app/%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A8%D9%86%D9%89-%D8%B3%D9%88%D9%8A%D9%81/id6746560359' },
    ]
  }
];



const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            custom={i}
            variants={cardVariants}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
            {project.doctorLinks && (
              <div>
                {project.doctorLinks.map((link, index) => (
                  <div key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                   </div>
                ))}
              </div>
            )}
            {project.links && (
              <div>
                {project.links.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>{link.name}</a>
                ))}
              </div>
            )}
          </motion.div>
          ))}
        </div>
     </motion.section>
  );
};

export default Projects;