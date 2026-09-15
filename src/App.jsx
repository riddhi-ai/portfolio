import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetailsModal from './components/ProjectDetailsModal';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { projects } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Check URL hash for direct project linking e.g. #project-qure-d
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '');
        const matched = projects.find((p) => p.slug === slug || p.id === slug);
        if (matched) setSelectedProject(matched);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#project-${project.slug}`);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', '#projects');
  };

  return (
    <div className="relative min-h-screen selection:bg-lavender-200 selection:text-charcoal-950">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Process />
        <ProjectGrid onSelectProject={handleSelectProject} />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dedicated Project Case Study Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
}
