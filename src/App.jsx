import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {
  personalInfo,
  skillsData,
  projectsData,
  achievementsData,
  certificatesData
} from './data/portfolioData';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar personalInfo={personalInfo} />
      <main>
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Skills skillsData={skillsData} />
        <Projects projectsData={projectsData} />
        <Achievements achievementsData={achievementsData} />
        <Certificates certificatesData={certificatesData} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;
